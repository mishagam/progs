/*
Magnify Player Stats Plugin v. 0.1.0
*/

// FIXME Assumes base ends with "/" and path doesn't start with "/"
var _kvp = function(k,v) {
	return encodeURIComponent(k) + "=" + encodeURIComponent(v);
}
var _urlbuilder = function(base, path, params) {
	var keys = Object.keys(params);
	var keyCount = keys.length;
	if (keyCount > 0) {
		var k = keys[0];
		var url = base + path + "?" + _kvp(k, params[k]);
		for (var i = 1; i < keyCount; i++) {
			k = keys[i];
			url = url + "&" + _kvp(k, params[k]);
		}
		return url;
	} else {
		return base + path;
	}
}

var stat = function(pixel, type, options) {
	this.pixel = pixel;
	this.type = type;
	if (typeof options !== 'undefined') {
		this.options = options;
	} else {
		this.options = {};
	}
};
stat.baseParams = function() {
	var params = {
		type: this.type,
		ts: new Date().getTime()
	};
	for (var k in this.options) {
		params[k] = this.options[k];
	}
	return params;
};
stat.send = function(player) {
	var params = this.baseParams();
	this.playerParams(player, params);
	var url = _urlbuilder(player.statservice, this.pixel, params)
	player.dropPixel(url);
};

var gen1 = function(type, options) {
	stat.call(this, "usage_request.gif", type, options);
	this.options.content_type = type;
	this.options.assoc_type = "C";
};
gen1.prototype = Object.create(stat);
gen1.prototype.playerParams = function(player, params) {
	params.site_cid = player.site.cid;
	params.assoc_cid = player.content.cid;
};

var gen2 = function(type, options) {
	stat.call(this, "dot.gif", type, options);
	options[type] = 1;
};
gen2.prototype = Object.create(stat);
gen2.prototype.playerParams = function(player, params) {
	params.time = Math.round(params.ts);
	params.site = player.site.cid;
	params.c = "//ci-c/" + player.content.cid;
	params.p = player.content.pipeline;
	params.r = player.referer;
	params.v = "//w-q/?api=v2";
};

var gen3 = function(type, options) {
	stat.call(this, "pixel.gif", type, options);
};
gen3.prototype = Object.create(stat);
gen3.prototype.playerParams = function(player, params) {
	params.cs = player.site.cid;
	params.c = "//ci-c/" + player.content.cid;
	params.p = player.content.pipeline;
	params.r = player.referer;
	params.v = "//w-q/?api=v2";
};

var usage = function(options) {
    stat.call(this, "usage.gif", '', options);
};
usage.prototype = Object.create(stat);
usage.prototype.playerParams = function(player, params) {
    params.content_cid = player.content.cid;
    params.device      = detect_device();
};


define(['magstats', 'xhr'], function(magstats, xhr){
	var MagStats = function(){
		this.stat_names = {
			impression: [
				//new gen1("player"),
				new gen2("player_embed", { is_video: 0 }),
				//new gen3("page")
                                new usage({ watched: 'views' }),
			],
			startPlayer: 'startPlayer',
			abort: "abort",	
                        complete: [
                            new usage({ watched: 'plays_100' }),
                        ],
			ended: "ended",	
			error: "error",		
			pause: "pause",	
			play: "play",
			playing: "playing",
			rewind: "rewind",	
			skip: "skip",	
			stalled: "stalled",
			start: [
				new gen2("player_play", { is_video: 1 } ),
                                new usage({ watched: 'plays' }),
                        ],
                        midpoint: [
                            new usage({  watched: 'plays_50' } ),
                        ],
                        firstQuartile: [
                            new usage({ watched: 'plays_25' }),
                        ],
                        thirdQuartile: [
                            new usage({ watched: 'plays_75' }),
                        ],
		};
	};

	//Takes a Magnify Player as an argument
	MagStats.prototype.setStats = function(player_obj){
				//clog("setStats");
		// Log "play" early, when preroll starts
		// player_obj.registerCallback(this.sendStat.bind(this), ["play", player_obj, {}], "play");
		if (typeof player_obj.registerCallback==="function"){
			for (var stat in this.stat_names){
				//clog("registerCallback: " + stat);
				player_obj.registerCallback(this.sendStat.bind(this), [stat, player_obj, {}], stat);
			};
		} else {
			console.log("Error: registerCallback function not found");
		}
	};

	MagStats.prototype.sendStat = function(event, player, extraParams){
		var timestamp = Date();
		var stats = this.stat_names[event]
		var str = "Magnify stats says: " + event;
		console.log(str);
		if (typeof stats === 'object') {
			for (var i = 0; i < stats.length; i++){
				stats[i].send(player);
			}
		}
	};

	MagStats.prototype.postSuccess = function(results){
		console.log(results);
	};

	MagStats.prototype.logThirdPartyEvent = function(event_name, player, third_party_object){
		// "play" registered on preroll;  don't double-count
		if (event_name === "play") return;
		var addtl_params = {};
		if (typeof third_party_object !=='undefined'){
			addtl_params.ad_type = third_party_object.ad_type || "";
			addtl_params.ad_sdk_version = third_party_object.ad_sdk_version || "";
			//Add additional info needed below...

		};
		console.log("sendStats from logThirdPartyEvent");
		this.sendStat(event_name, player, addtl_params);
	};

	return new MagStats(); 
});


// Identifies the user device from User Agent string
function detect_device(){
        var uas = navigator.userAgent;

        // First checks if its a Tablet
        tablets = [ /Android 3/i, /iPad/i ];
        for (i=0, l=tablets.length; i<l; i++)
                if (uas.match(tablets[i])) return 'tablet';

        // Secondly, if is a Smartphone
        smartphones = [ /Mobile/i, /Android/i, /iPhone/i, /BlackBerry/i, /Windows Phone/i, /Windows Mobile/i, /Maemo/i, /PalmSource/i, /SymbianOS/i, /SymbOS/i, /Nokia/i, /MOT-/i, /JDME/i, /Series 60/i, /S60/i, /SonyEricsson/i ];
        for (i=0, l=smartphones.length; i<l; i++)
                if (uas.match(smartphones[i])) return 'smartphone';

        // Otherwiser identifies as desktop
        return 'desktop';
}
