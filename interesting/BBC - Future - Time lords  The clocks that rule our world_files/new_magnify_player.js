window.Magnify = window.Magnify || {};
var Magnify = window.Magnify;
Magnify.Common = Magnify.Common || {};

Magnify.Common.TrackingEvent = function(ev, url){
    if (typeof ev==='undefined' || typeof url==='undefined'){
        throw "TrackingEvent initalization requires both an event name and url string";
    } else {
        this.url = url;
        this.ev = ev;
    }
};

require.config({
    baseUrl: "plugins",
    waitSeconds: 15
});

//Shamelessly taken from: http://jsfiddle.net/briguy37/2MVFd/
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};

function isArray(the_cake_is_a_lie){
    return (Object.prototype.toString.call(the_cake_is_a_lie)==='[object Array]');
};

/*
Player dependencies:
    -requirejs
        --uses this to load plugins etc, dependency management
*/

Magnify.Player = function(options, callback){
	console.log("Magnify.Player(options):\n", options);
	___debug___ = options.debug || false;	
	//defaults
	this.init_autoplay = options.init_autoplay || 0;
	this.preroll = options.preroll || false;
	this.controls = options.controls || false;
	this.sources = options.sources || {};
	this.ad_tag = options.ad_tag || "";
	this.uuid = options.uuid || "";
	this.magid = options.magid || "";
	this.stylesheet_url = options.stylesheet_url || null;
	this.is_on_ios = this.isOniOS();
	this.pipeline = options.pipeline || "upload";
	this.pipeline_video_id = options.pipeline_video_id || "";
	this.id = options.id_prefix + options.player_id;
	this.width = options.width;
	this.height = options.height;
	this.video_title = options.title || "Big Buck Bunny";
	this.description = options.description || null;
	this.thumbnail_url = options.thumbnail_url || null;
	this.playcount = 0;
	this.plugins = {};
	this.plugins.requirers = {};
	this.plugins.providers = {};
	this.preroll_done = false;
	this.ad_type = options.ad_type || 'vast';
	this.element_id = options.element_id;
	this.flowplayer_url = options.flowplayer_url || "";
	this.player_widget_type = (options.player_widget_config) ? options.player_widget_config.widget_type_cid : "svp";
	// Override player_widget_type to chromless if requested in url or if showmaker
	this.player_widget_type = (options.force_chromeless == true || (this.pipeline == 'showmaker' && this.player_widget_type != 'mod')) ? "cvp" : this.player_widget_type;
	this.content_type = (options.player_widget_config) ? options.player_widget_config.content_type : null;
	this.playlist = options.playlist || [];
	this.hide_playlist = options.hide_playlist || 0;
	this.skin = options.skin || "default";
	this.show_title = options.show_title || 1;
	this.remove_footer = options.remove_footer || 0;
	this.show_logo = options.show_logo || 1;
	this.logo_source = options.logo_source || null;
	this.logo_link = options.logo_link || null;
	this.watermark = options.watermark;
	this.play_button_url = options.play_button;
	this.module_big_share = options.module_big_share || false;
	this.module_meta = options.module_meta || false;
	//panic variables
	this.hostname = options.hostname || window.location.hostname;
	this.permalink = options.permalink || location.pathname;
	var panic_widget_type = (this.player_widget_type === 'cvp') ? this.player_widget_type : 'svp'
	this.panic_url = 'http://' + this.hostname + '/embed/player/container/' + window.innerWidth + '/' + window.innerHeight + '?content=' + options.content.cid + '&widget_type_cid=' + panic_widget_type + '&init_autoplay=1&html5=0';
	// For sharing
	this.link_url = "http://" + this.hostname + "/video/" + this.permalink;
	this.embed_url = (options.player_widget_config) ? "http://" + this.hostname + "/apiv2/player?hostname=" + this.hostname + "&player_widget_cid=" + options.player_widget_config.cid : "http://" + this.hostname + "/apiv2/player?hostname=" + this.hostname + "&permalink=" + this.permalink;
	this.share_overlay = options.share_overlay || false;
	// For magstats
	this.statservice = options.statservice;
	this.referer = options.referer;
	this.site = options.site;
	this.content = options.content;
	
	var that = this;
	that.geo = {};//data;
	/*$.getJSON(, function(data){
   		that.geo = data;
	});*/
	
	this.callbacks = {
		impression: [],
		startPlayer: [],

		abort: [],	
		canplay: [],	
		canplaythrough: [],
		complete: [],
		durationchange: [],	
		emptied: [],
		ended: [],	
		error: [],
		firstQuartile: [],
		loadeddata: [],	
		loadedmetadata: [],	
		loadstart: [],
		midpoint: [],	
		pause: [],	
		play: [],	
		playing: [],	
		progress: [],	
		ratechange: [],
		rewind: [],
		seeked: [],	
		seeking: [],
		skip: [],	
		stalled: [],
		start: [],	
		suspend: [],
		thirdQuartile: [],	
		timeupdate: [],	
		volumechange: [],	
		waiting: []
	};

	var ___outer = this;
	this.pipeline_strategies = {
		"youtube": {
            init: function(container, player_widget_type){
                ___outer.hideControls();
                if (typeof ___outer.plugins.youtube !=='undefined'){
                    ___outer.plugins.youtube.logThirdPartyEvent = function(event, extraParams) {
                        /* Disabled because we can't distinguish between thirdparty and VAST events yets
                        **___outer.raiseEvent(event, extraParams);
                        */
                    }
                    ___outer.plugins.youtube.ytInit(container, ___outer.id, ___outer.width, ___outer.height, ___outer.pipeline_video_id, null, true, player_widget_type, ___outer);
                } else {
                    console.log("Youtube plugin not yet defined");
                }
            }
        },
		"vimeo": {
			init: function(container, player_widget_type){
				___outer.hideControls();
				if (typeof ___outer.plugins.vimeo !=='undefined'){
					___outer.plugins.vimeo.logThirdPartyEvent = function(event, extraParams) {
						/* Disabled because we can't distinguish between thirdparty and VAST events yet
						**___outer.raiseEvent(event, extraParams);
						*/
					}
					___outer.plugins.vimeo.bindEventListeners();
					___outer.plugins.vimeo.setContainerElement(container);
					___outer.plugins.vimeo.setiOS(___outer.is_on_ios);
					___outer.plugins.vimeo.buildAndInjectPlayer(___outer.pipeline_video_id, ___outer.id, ___outer.width, ___outer.height);
				} else {
					console.log("Vimeo plugin not yet defined");
				}
			}
		},
		"dailymotion": {
			init: function(container, player_widget_type){
				___outer.hideControls();
				if (typeof ___outer.plugins.dailymotion !=='undefined'){
					___outer.plugins.dailymotion.bindEventListeners();
					___outer.plugins.dailymotion.buildAndInjectPlayer(___outer.pipeline_video_id, container, ___outer.init_autoplay);
				} else {
					console.log("Dailymotion plugin not present");
				}
			}
		},
		// 5min is pipeline name for AOL.
		"5min": {
			init: function(container, player_widget_type){
				___outer.hideControls();
				if (typeof ___outer.plugins.aol !=='undefined'){
					___outer.plugins.aol.setContainerElement(container, player_widget_type);
					___outer.plugins.aol.buildAndInjectPlayer(___outer.pipeline_video_id, ___outer.id, ___outer.width, ___outer.height, ___outer.init_autoplay);
				} else {
					console.log("AOL plugin not present");
				}
			}
		},
		"yahoo": {
			init: function(container, player_widget_type){
				___outer.hideControls();
				if (typeof ___outer.plugins.yahoo !=='undefined'){
					___outer.plugins.yahoo.setContainerElement(container);
					___outer.plugins.yahoo.buildAndInjectPlayer(___outer.pipeline_video_id, ___outer.id, ___outer.width, ___outer.height, ___outer.init_autoplay);
				} else {
					console.log("Yahoo plugin not present");
				}
			}
		},
		"showmaker": {
			init: function(container, player_widget_type){
				___outer.hideControls();
				if (typeof ___outer.plugins.showmaker !=='undefined'){
					___outer.plugins.showmaker.setContainerElement(container);
					___outer.plugins.showmaker.buildAndInjectPlayer(___outer.pipeline_video_id, ___outer.id, ___outer.width, ___outer.height, ___outer.init_autoplay, ___outer.hostname);
				} else {
					console.log("Showmaker plugin not present");
				}
			}
		}
	};

	if (this.stylesheet_url !==null){
		this.injectCSS(this.stylesheet_url);
	};

	// EVENT 'CREATE' here
	this.container_element = document.getElementById(options.element_id);
	this.container_element.style.width = options.width;
	this.container_element.style.height = options.height;
	this.container_element.className = this.container_element.className + " " + this.skin;
	this.container_element.className = this.container_element.className + " " + this.player_widget_type;
	this.container_element.style.position = 'relative';
	
	if (typeof options.plugins !== 'undefined'){
		var module_list = [];
		for (plugin_key in options.plugins){
			module_list.push(plugin_key);
		};
		var that = this;
		require(module_list, function(){
			for (var i = 0; i < arguments.length; i++){
				var module_name = module_list[i];
				that.plugins[ module_name ] = {};
				that.plugins[ module_name ] = arguments[i];
			};

			if (typeof this.plugins.magstats !=='undefined') {
				this.plugins.magstats.setStats(this);
			};

			//EVENT 'INITIALIZE' here
			console.log("this.init_autoplay", this.init_autoplay);
			if (this.init_autoplay == 1 || this.pipeline == 'showmaker') {
				console.log("autoplay");		
				this.initPlayer();
				var waywire_player_ready = new Event('waywirePlayerReady');
				this.container_element.dispatchEvent(waywire_player_ready);
				document.getElementById("play_button").click();
			} else {
				console.log("no autoplay");		
				this.initPlayer();
			}			
			this.raiseEvent("impression");
			callback(this);
		}.bind(this));
	} else {
		console.log("No plugins defined");
	};
};

Magnify.Player.prototype.buildSplash = function(container){
    console.log("buildSplash");
    this.player_container = container;
    // Clear current container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // Create DOM elements
    var new_img = document.createElement('img');
    new_img.src = this.thumbnail_url;
    new_img.id = "splash_image";
    container.appendChild(new_img);     
    
    var play_btn = document.createElement('img');
    play_btn.id = "play_button";
    if (this.play_button_url) {
        play_btn.src = this.play_button_url;
        play_btn.className = "custom_play_button";
    } else {
        play_btn.src = "https://decor.waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/html5playerbutton-96.png";
        play_btn.className = "play_button";
    }
    container.appendChild(play_btn);
    
    this.injectPlayer(container);
    this.player.style.visibility = "hidden";
};

Magnify.Player.prototype.initPlayer = function(){
	console.log("initPlayer()");
	if (typeof this.player !=='undefined'){
		if (this.player.parentNode != null)
			this.player.parentNode.removeChild(this.player);
		this.player = null;
	};
	
	switch(this.player_widget_type){
		case 'svp':
			this.injectSingleViewPlayer(this.container_element);
			break;
		case 'mvp':
			this.injectMultiViewPlayer(this.container_element);
			break;
		case 'cvp':
			this.buildSplash(this.container_element);
			break;
		case 'mod':
			this.injectModulePlayer(this.container_element);
			break;
		default:
			this.injectSingleViewPlayer(this.container_element);
	};
	
	if ((this.preroll==true || this.preroll=="true") && (this.ad_tag !== 'undefined' && this.ad_tag !== "")){
		// Panic if on IE.  Google ima sdk does not support IE.
		if (/MSIE|Trident/i.test(navigator.userAgent)) {
			this.panic();
		} else {
			Magnify.VastClient(this.player_container, this.player, this.ad_tag, this.pipeline, this.pipeline_video_id);
		}
	} else if (this.is_on_ios && (this.pipeline == "yahoo" || this.pipeline == "5min" || this.pipeline == "youtube" || this.pipeline == "vimeo" || this.pipeline == "dailymotion")) {
		// Skip to pipeline player for Yahoo and AOL on mobile since it requires second click from splash and no preroll is played outside of Yahoo/AOL player
		this.refreshPlayer();
	} else {
		var starter = document.getElementById("play_button");
		var that = this;
		starter.addEventListener("click", function() {
			newplayer.raiseEvent("startPlayer");
			that.refreshPlayer();
		})
	};
	
	this.injectShareShade();

	if (this.preroll_done==false){
		this.showWatermark(false);
	};
};

Magnify.Player.prototype.buildShareOverlay = function(container) {
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-54aeb35d0d4639b1");
    script.setAttribute("async", "async");
    container.parentNode.appendChild(script);
    container.addEventListener("mouseover", function() {
        var share_buttons = document.getElementById("at4-share");
        $(share_buttons).removeClass('hide');
        // Prevent buttons from hiding from mouseout over share buttons
        share_buttons.addEventListener("mouseover", function() {
            $(share_buttons).removeClass('hide');
        })
        share_buttons.addEventListener("mouseout", function() {
            $(share_buttons).addClass('hide');
        })
    });
    container.addEventListener("mouseout", function() {
        $("#at4-share").addClass('hide');
    });
}

Magnify.Player.prototype.injectPlayer = function(container, player){
	console.log("injectPlayer(container):\n", container);
	this.player = document.createElement('video');
	this.player.id = "magnify-video-player"
	var that = this;	
	this.player.onended = function(){
		if (that.preroll==true || that.preroll=='true'){
			that.preroll_done = true;
		};
		if (that.pipeline=='upload' && that.is_on_ios) {
			// Do nothing.
		} else {
			if (that.preroll_done==true && that.playcount==1){
				that.refreshPlayer();
			}
		}
	};
	container.appendChild(this.player);
	if (this.share_overlay) {
		this.buildShareOverlay(container);
	}
};

Magnify.Player.prototype.injectHeader = function(container) {
    var header_row = document.createElement('div');
    header_row.id = "header"
    var title_element = document.createElement('h4');
    title_element.innerHTML = this.video_title;
    title_element.setAttribute("title", this.video_title);
    //if (this.logo_source != null && this.logo_link != null && options.show_logo == 1) {
        var logo_element = document.createElement('a');
        logo_element.setAttribute("target", "_blank");
        logo_element.href = "http://enterprise.waywire.com/";
        logo_element.style.position = "relative";
        logo_element.style.width = "87px";
        logo_element.style.height = "30px";
        logo_element.style.overflow = "hidden";
        //logo_element.href = options.logo_link;
        var logo_img = document.createElement('img');
        logo_img.src = "https://www.waywire.com/media/site/YH5PLD0V56XPX2RS/uploads/CurationPowerdBy.png";
        logo_img.style.position = "absolute";
        logo_img.style.top = "0";
        logo_img.style.right = "0";
        //logo_img.src = this.logo_source;
    //}
    
    if (this.show_title == 0) {
        title_element.style.visibility = "hidden";
        header_row.style.textOverflow = "clip";
    }
    
    logo_element.appendChild(logo_img);
    //header_row.appendChild(logo_element);
    header_row.appendChild(title_element);
    container.appendChild(header_row);
    
    return header_row;
};

Magnify.Player.prototype.injectShareShade = function() {
    this.share_shade = document.createElement('div');
    this.share_shade.className = "share-shade";
    
    var close_btn = document.createElement('a');
    close_btn.href = '#';
    close_btn.className = 'close-button'
    close_btn.innerHTML = '&times;';
    var that = this;
    close_btn.addEventListener("click", function() {
        that.share_shade.style.display = "none";
    });
    
    var share_container = document.createElement('div');
    share_container.className = "share-container";
    
    //  Create link box
    var link_label = document.createElement('label');
    link_label.innerHTML = "Link: ";
    link_label.className = "share-shade-label";
    var link_box = document.createElement('input');
    link_box.setAttribute("type", "text");
    link_box.setAttribute("readonly", "readonly");
    link_box.setAttribute("value", this.link_url);
    link_box.setAttribute("onclick", "this.focus(); this.select();");
    
    // Create share buttons
    var share_label = document.createElement('label');
    share_label.innerHTML = "Share: ";
    share_label.className = "share-shade-label";
    var share_this_container = document.createElement('div');
    var em_btn = document.createElement('a');
    em_btn.className = "btn btn-social-icon btn-envelope";
    em_btn.title = " Email";
    em_btn.href = "mailto:?Subject=" + this.video_title + "&body=" + this.link_url; 
    em_btn.setAttribute("target", "_blank");
    var em_icon = document.createElement('i');
    em_icon.className = "fa fa-envelope";
    // Share This api
    var rest_endpoint = "http://rest.sharethis.com/v1/share/share?"
    var api_key = "yjff3kk5xpt7yuy6nu2n4zmu";
    var fb_btn = document.createElement('a');
    fb_btn.className = "btn btn-social-icon btn-facebook";
    fb_btn.title = " Share to Facebook";
    fb_btn.href = rest_endpoint + "destination=facebook&api_key=" + api_key + "&url=" + this.link_url + "&title=" + encodeURIComponent(this.video_title);
    fb_btn.setAttribute("target", "_blank");
    var fb_icon = document.createElement('i');
    fb_icon.className = "fa fa-facebook";
    var tw_btn = document.createElement('a');
    tw_btn.className = "btn btn-social-icon btn-twitter";
    tw_btn.title = " Share to Twitter";
    tw_btn.href = rest_endpoint + "destination=twitter&api_key=" + api_key + "&url=" + this.link_url + "&title=" + encodeURIComponent(this.video_title);
    tw_btn.setAttribute("target", "_blank");
    var tw_icon = document.createElement('i');
    tw_icon.className = "fa fa-twitter";
    var ln_btn = document.createElement('a');
    ln_btn.className = "btn btn-social-icon btn-linkedin";
    ln_btn.title = " Share to LinkedIn";
    ln_btn.href = rest_endpoint + "destination=linkedin&api_key=" + api_key + "&url=" + this.link_url + "&title=" + encodeURIComponent(this.video_title);
    ln_btn.setAttribute("target", "_blank");
    var ln_icon = document.createElement('i');
    ln_icon.className = "fa fa-linkedin";
    var tu_btn = document.createElement('a');
    tu_btn.className = "btn btn-social-icon btn-tumblr";
    tu_btn.title = " Share to Tumblr";
    tu_btn.href = rest_endpoint + "destination=tumblr&api_key=" + api_key + "&url=" + this.link_url + "&title=" + encodeURIComponent(this.video_title);
    tu_btn.setAttribute("target", "_blank");
    var tu_icon = document.createElement('i');
    tu_icon.className = "fa fa-tumblr";
    var gp_btn = document.createElement('a');
    gp_btn.className = "btn btn-social-icon btn-google-plus";
    gp_btn.title = " Share to Facebook";
    gp_btn.href = rest_endpoint + "destination=googleplus&api_key=" + api_key + "&url=" + this.link_url + "&title=" + encodeURIComponent(this.video_title);
    gp_btn.setAttribute("target", "_blank");
    var gp_icon = document.createElement('i');
    gp_icon.className = "fa fa-google-plus";
    var rd_btn = document.createElement('a');
    rd_btn.className = "btn btn-social-icon btn-reddit";
    rd_btn.title = " Share to Reddit";
    rd_btn.href = rest_endpoint + "destination=reddit&api_key=" + api_key + "&url=" + this.link_url + "&title=" + encodeURIComponent(this.video_title);
    rd_btn.setAttribute("target", "_blank");
    var rd_icon = document.createElement('i');
    rd_icon.className = "fa fa-reddit";
    // Create embed code
    var embed_label = document.createElement('label');
    embed_label.innerHTML = "Embed: ";
    embed_label.className = "share-shade-label";
    var width = 416;
    var height = 321;
    var embed_box = document.createElement('input');
    embed_box.setAttribute("type", "text");
    embed_box.setAttribute("readonly", "readonly");
    embed_box.setAttribute("value", "<iframe src='" + this.embed_url + "' width='" + width + "' height='" + height + "' framborder='0' scrolling='no'></iframe>");
    embed_box.setAttribute("onclick", "this.focus(); this.select();");
    
    share_container.appendChild(link_label);
    share_container.appendChild(link_box);
    share_container.appendChild(share_label);
    em_btn.appendChild(em_icon);
    share_this_container.appendChild(em_btn);
    fb_btn.appendChild(fb_icon);
    share_this_container.appendChild(fb_btn);
    tw_btn.appendChild(tw_icon);
    share_this_container.appendChild(tw_btn);
    ln_btn.appendChild(ln_icon);
    share_this_container.appendChild(ln_btn);
    //tu_btn.appendChild(tu_icon);
    //share_this_container.appendChild(tu_btn);
    gp_btn.appendChild(gp_icon);
    share_this_container.appendChild(gp_btn);
    rd_btn.appendChild(rd_icon);
    share_this_container.appendChild(rd_btn);
    share_container.appendChild(share_this_container)
    share_container.appendChild(embed_label);
    share_container.appendChild(embed_box);
    this.share_shade.appendChild(share_container);
    this.share_shade.appendChild(close_btn);
    this.player_container.appendChild(this.share_shade);
    // Build but do not display share shade
    this.share_shade.style.display = "none"
}

Magnify.Player.prototype.toggleShareShade = function() {
    if (!this.share_shade) {
        this.injectShareShade();
        this.share_shade.style.display = "block"
    } else {
        if (this.share_shade.style.display == "none") {
            this.share_shade.style.display = "block"
        } else {
            this.share_shade.style.display = "none"
        }
    }
}

Magnify.Player.prototype.injectFooter = function(container) {
    var footer_row = document.createElement('div');
    footer_row.id = "footer"
    var share_icon = document.createElement('i');
    share_icon.setAttribute("title", "Share this video")
    share_icon.className = "fa fa-share-alt fa-lg";
    share_icon.onclick = function() {
        this.toggleShareShade()
    }.bind(this);
    var powered_by_element = document.createElement('a');
    powered_by_element.href = "http://enterprise.waywire.com/";
    powered_by_element.setAttribute("target", "_blank");
    var powered_by_img = document.createElement('img');
    powered_by_img.src = "https://waywire.com/decor/mvp/magnify_player_logo.png";
    
    if (this.remove_footer == 1) {
        powered_by_element.style.visibility = "hidden";
    }
    
    powered_by_element.appendChild(powered_by_img);
    footer_row.appendChild(share_icon);
    footer_row.appendChild(powered_by_element);
    container.appendChild(footer_row);
    
    return footer_row;
};

Magnify.Player.prototype.injectSingleViewPlayer = function(container) {
    container.id = "single-view-container";
    var header_el = this.injectHeader(container);
    var player_container = document.createElement('div');
    player_container.id = 'waywire-player-container';
    this.buildSplash(player_container);
    container.appendChild(player_container);
    var footer_el = this.injectFooter(container);
    // Adjust size of player container to fit window if on mobile browser w/o flexbox support.
    if (this.isMobile()) {
        player_container.style.height = window.innerHeight - header_el.offsetHeight - footer_el.offsetHeight + "px";
    }
    // Make height of player container the same as 16:9 video for given width
    if (this.player_widget_type == 'mvp' && window.innerWidth <= 580) {
        player_container.style.height = window.innerWidth * 9/16 + "px";
    }
    
    return container;
};

Magnify.Player.prototype.injectMultiViewPlayer = function(container) {
    if (this.hide_playlist == 1) {
        this.injectSingleViewPlayer(container);
    } else {
        var multi_view_container = document.createElement('div');
        multi_view_container.className = 'row multi-view-container';
        var multi_view_player_container = document.createElement('div');
        multi_view_player_container.className = 'col-sm-6';
        this.single_view_conatiner = this.injectSingleViewPlayer(multi_view_player_container)
        var multi_view_playlist_container = document.createElement('div');
        multi_view_playlist_container.id = 'playlist-container';
        multi_view_playlist_container.className = 'col-sm-6';
        this.injectPlaylist(multi_view_playlist_container, this.playlist)
        
        multi_view_container.appendChild(multi_view_player_container);
        multi_view_container.appendChild(multi_view_playlist_container);
        container.appendChild(multi_view_container);
    }
};

Magnify.Player.prototype.injectModulePlayer = function(container) {
	var wrapper = container.parentNode;
	wrapper.className = wrapper.className + ' ' + 'module';
	container.className = container.className + ' ' + 'big-share-player-container';
	this.buildSplash(container);
	if (this.module_big_share && !this.isMobile()) {
		var share_buttons_container = document.createElement('div');
		share_buttons_container.id = 'big-share-buttons-container';
		var share_buttons_wrapper = document.createElement('div');
		share_buttons_wrapper.id = 'big-share-buttons-container';
		var fb_share_button = document.createElement('button');
		fb_share_button.className = "big-share-button facebook";
		fb_share_button.innerHTML = "Share on Facebook"
		fb_share_button.addEventListener("click", function() {
			document.getElementsByClassName("at-svc-facebook")[0].click();
		})
		var fb_share_icon = document.createElement('i');
		fb_share_icon.className = "fa fa-facebook-square fa-lg";
		fb_share_button.appendChild(fb_share_icon);
		var tw_share_button = document.createElement('button');
		tw_share_button.className = "big-share-button twitter";
		tw_share_button.innerHTML = "Share on Twitter"
		tw_share_button.addEventListener("click", function() {
			document.getElementsByClassName("at-svc-twitter")[0].click();
		})
		var tw_share_icon = document.createElement('i');
		tw_share_icon.className = "fa fa-twitter fa-lg";
		tw_share_button.appendChild(tw_share_icon);
		var more_share_button = document.createElement('button');
		more_share_button.className = "big-share-button more";
		//more_share_button.innerHTML = "+"
		more_share_button.addEventListener("click", function() {
			document.getElementsByClassName("at-svc-compact")[0].click();
		})
		var more_share_icon = document.createElement('i');
		more_share_icon.className = "fa fa-plus fa-lg";
		more_share_button.appendChild(more_share_icon);
		share_buttons_wrapper.appendChild(fb_share_button);
		share_buttons_wrapper.appendChild(tw_share_button);
		share_buttons_wrapper.appendChild(more_share_button);
		share_buttons_container.appendChild(share_buttons_wrapper);
		wrapper.appendChild(share_buttons_wrapper);
	}
	if (this.module_meta) {
		var meta_cont = document.createElement('div');
		meta_cont.id = "big-share-meta-container";
		var title_cont = document.createElement('div');
		title_cont.className = "title-cont";
		var title = document.createElement('h3');
		title.className = "title";
		title.innerHTML = this.video_title;
		title_cont.appendChild(title);
		meta_cont.appendChild(title_cont);
		// Do not append description for mobile browsers
		if (!this.isMobile()) {
			var desc_cont = document.createElement('div');
			desc_cont.className = "desc-cont";
			var desc = document.createElement('h4');
			desc.className = "desc";
			desc.innerHTML = this.description;
			desc_cont.appendChild(desc);
			meta_cont.appendChild(desc_cont);
		}
		wrapper.appendChild(meta_cont);
	}
};

Magnify.Player.prototype.injectLightboxPlayer = function(container) {
    console.log("lightbox player");
    var header_el = this.injectHeader(container);
    var grid_container = document.createElement('div');
    player_container.id = 'grid-container';
    this.buildSplash(player_container);
    container.appendChild(player_container);
    var footer_el = this.injectFooter(container);
};

Magnify.Player.prototype.swapPlayer = function(playlist_item) {
    this.pipeline = playlist_item.media_item.media_pipeline_cid;
    this.pipeline_video_id = playlist_item.media_item.pipeline_xid;
    this.thumbnail_url = playlist_item.thumbnail_url;
    this.link_url = "http://" + this.hostname + "/video/" + playlist_item.permalink;
    this.video_title = playlist_item.title;
    document.getElementById('header').getElementsByTagName('h4')[0].innerHTML = playlist_item.title;
    document.getElementById('header').getElementsByTagName('h4')[0].setAttribute("title", playlist_item.title);
    this.refreshPlayer();
}

Magnify.Player.prototype.injectPlaylist = function(container, playlist) {
    for (var item=0; item<playlist.length; item++) {
        var playlist_item = document.createElement('div');
        playlist_item.className = 'media';
        var playlist_item_link = document.createElement('a');
        playlist_item_link.className = 'pull-left';
        playlist_item_link.href = '#';
        var playlist_item_thumbnail = document.createElement('img');
        playlist_item_thumbnail.className = 'media-object';
        playlist_item_thumbnail.src = playlist[item].thumbnail_url;
        var play_btn = document.createElement('button');
        play_btn.setAttribute('type', "button");
        play_btn.className = "btn btn-default";
        play_btn.innerHTML = "&#9658;";
        var playlist_item_body = document.createElement('div');
        playlist_item_body.className = 'media-body';
        var playlist_item_title = document.createElement('h5');
        playlist_item_title.className = 'media-heading';
        playlist_item_title.innerHTML = playlist[item].title;
        
        var that = this;
        (function(item) {
           playlist_item_link.addEventListener("click", function() {
                that.swapPlayer(playlist[item]);
           }, false);
           play_btn.addEventListener("click", function() {
                that.swapPlayer(playlist[item]);
           }, false);
        }(item));
        
        playlist_item_link.appendChild(playlist_item_thumbnail);
        playlist_item_body.appendChild(playlist_item_title);
        playlist_item.appendChild(playlist_item_link);
        playlist_item.appendChild(playlist_item_body);
        playlist_item.appendChild(play_btn);
        container.appendChild(playlist_item);
    }
};

Magnify.Player.prototype.refreshPlayer = function(){
    console.log("refreshPlayer()");
    // Clear current player container
    while (this.player_container.firstChild) {
        this.player_container.removeChild(this.player_container.firstChild);
    }
    
    this.playcount += 1;
    this.preroll_done = true;

    if (this.preroll_done==true && typeof this.watermark_el !=='undefined'){
        //this.showWatermark(true);
    };

    if (typeof this.tweet_button !== 'undefined'){
        this.tweet_button.style.display = 'flex';
    };
    
    this.injectShareShade();
    
    if (this.pipeline=='upload'){
        this.injectPlayer(this.player_container);
        this.addCallbackListeners();
        this.setDefaultListeners();
        this.addSources();
        this.showControls();
        if (this.watermark !=='undefined'){
            //this.addWatermark(this.player_container, this.watermark);
        };
        this.player.play();
    } else {
		try {
			this.pipeline_strategies[this.pipeline].init(this.player_container, this.player_widget_type);
		} catch (e) {
			console.log("Error accessing " + this.pipeline + " pipeline:" + e);
			this.panic();
		}
		
 	}
};

/*Magnify.Player.prototype.supportsType = function(type_str){
    console.log("supportsType(type_str):\n", type_str);
    console.log(this.player);
    return this.player.canPlayType(type_str);
};*/

Magnify.Player.prototype.injectCSS = function(css_url){
    console.log("injectCSS(css_url):\n", css_url);
    var css_link = document.createElement("link");
    css_link.type = "text/css";
    css_link.rel = "stylesheet";
    css_link.href = css_url;
    document.getElementsByTagName("head")[0].appendChild(css_link);
};

Magnify.Player.prototype.isOniOS = function(){
    console.log("isOniOS()");
    return ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false );
};

Magnify.Player.prototype.isMobile = function(){
    return ( navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/g) ? true : false );
};

Magnify.Player.prototype.showControls = function(bool_value){
    console.log("showControls()");
    if (this.player != null) {
        if(this.preroll_done) {
            console.log("preroll done");
            this.player.setAttribute('controls', '');
            /*
            if (typeof this.plugins['controlbuilder'] !=='undefined'){
                this.controls_container.style.display = 'none';
            };
            this.controls = bool_value;
            */
        }
        else {
            console.log("preroll not done");
            this.player.removeAttribute('controls');
            /*
            if (typeof this.plugins['controlbuilder'] !=='undefined'){
                this.plugins.controlbuilder.setIdSuffix(this.id);
                if (this.controls==false || this.controls=="false"){
                    this.buildControls();
                };
            };
            this.controls = true;
            */
        }
    }
};

Magnify.Player.prototype.hideControls = function(){
    console.log("hideControls()");
    if (this.player != null) {
        this.player.removeAttribute('controls');
    }
    /*
    if (typeof this.controls_container !=='undefined'){
        this.controls_container.style.display = 'none';
    };
    this.controls = false;
    */
};

Magnify.Player.prototype.addSources = function(){
    console.log("addSources(reload):\n", this.sources);
    if (typeof this.sources !=='undefined'){
        while (this.player.firstChild) {
            this.player.removeChild(this.player.firstChild);
        }
        for (source in this.sources){
            var new_source = document.createElement('source');
            new_source.src = this.pipeline_video_id;
            new_source.type = 'video/mp4';
            this.player.appendChild(new_source);
        }
    }
};

/*
Magnify.Player.prototype.playAd = function() {
    console.log("playAd()");
    if (typeof this.plugins.ima !=='undefined'){
        var ad_container = document.createElement('div');
        ad_container.width ='100%';
        ad_container.height = '100%';
        ad_container.style.width = '100%';
        ad_container.style.height = '100%';
        ad_container.style.position = 'absolute';
        ad_container.style.top = 0;
        ad_container.style.left = 0;
        ad_container.id = this.id + '-ima-ad-container';
        this.player_container.appendChild(ad_container);
        var unbound_refreshPlayer = this.refreshPlayer;
        var bound_refreshPlayer = unbound_refreshPlayer.bind(this);
        this.plugins.ima.setCompleteCallback(bound_refreshPlayer);
        this.plugins.ima.setAdContainerId(ad_container.id);
        this.plugins.ima.setPlayerElement(this.player);
        this.hideControls();
        //no arguments defaults to test ad tag
        this.plugins.ima.runAd(this.ad_tag);
    } else {
        console.log("ima plugin not present or failed to initialize")
    };
};

// adEnded only called for mobile && hosted video
Magnify.Player.prototype.adEnded = function(event) {
    this.preroll_done = true;
    var video = document.getElementById(this.id);
    video.src = this.sources['mp4'].url;
    this.showControls();
    video.load();
    video.play();
}

/*
Magnify.Player.prototype.handleLoadAdComplete = function(options, vastparser){
    console.log("handleLoadAdComplete(options, vastparser):\n", options, vastparser);
    if (vastparser == null){
        console.log("Load Ad Failure");
        this.preroll = false;
        this.preroll_done = true
    } else {
        console.log("Load Ad Success");
        this.addTrackingCallbacks( vastparser.getTracking() );
        this.addTrackingCallbacks( vastparser.getCustomTracking() );
    }
    if (this.autoplay && vastparser.wrapper==false){ 
        this.refreshPlayer();
        this.preroll = true;
        this.preroll_done = false; 
    }
};
*/

/* Old function for playing ads using vastparser.  Archived in favor of Google ima sdk.
Magnify.Player.prototype.playAd = function() {
    console.log("playAd()");
    if (this.plugins.adwrapper.isIMA(this.plugins.vastparser.json_doc)==true){ this.ad_type='ima' };
    if (this.ad_type !==null){
        switch(this.ad_type){
            case 'vast':
                if (typeof this.plugins.adwrapper !=='undefined'){
                    var source_types = this.plugins.adwrapper.getSourceTypes(this.plugins.vastparser.json_doc);
                    var supports = false;
                    var is_flash = false;
                    for (var i = 0; i < source_types.length; i++){
                        if (source_types[i]=='x-shockwave-flash' || source_types[i]=='x-flv' || source_types[i]=='application/x-shockwave-flash'){
                            is_flash = true;
                            //is this the only source available?
                            if (source_types.length==1){
                                var srcs = this.plugins.adwrapper.getSources(this.plugins.vastparser.json_doc);
                                console.log("failed", this.plugins.vastparser.json_doc, source_types);
                                this.playFlashAd(srcs);
                                return;
                            }
                        };
                        if (this.supportsType(source_types[i])=="probably" || this.supportsType(source_types[i])=="maybe" ){
                            supports = true;
                        }
                    };
                    if (supports==false){
                        this.preroll_done = true;
                        this.refreshPlayer();
                        return;
                    };
                    this.plugins.adwrapper.injectSources(this.player, this.plugins.vastparser.json_doc);
                    // Start autoplay fix for mobile && hosted
                    if (this.pipeline=='upload' && this.is_on_ios) {
                        this.player.setAttribute('onended', 'newplayer.adEnded(event)');
                    }
                    // End autoplay fix for mobile && hosted
                    this.showControls();
                    this.playVideo();
                    this.playcount = 1;
                } else {
                    console.log("adwrapper plugin not present or failed to initialize");
                };
                break;
            case 'ima':
                if (typeof this.plugins.ima !=='undefined'){
                    var ad_container = document.createElement('div');
                    ad_container.width = this.width;
                    ad_container.height = this.height;
                    ad_container.style.width = this.width + 'px';
                    ad_container.style.height = this.height + 'px';
                    ad_container.style.position = 'absolute';
                    ad_container.style.top = 0;
                    ad_container.style.left = 0;
                    ad_container.id = this.id + '-ima-ad-container';
                    this.player_container.appendChild(ad_container);
                    var unbound_refreshPlayer = this.refreshPlayer;
                    var bound_refreshPlayer = unbound_refreshPlayer.bind(this);
                    this.plugins.ima.setCompleteCallback( bound_refreshPlayer );
                    this.plugins.ima.setAdContainerId( ad_container.id );
                    this.plugins.ima.setPlayerElement( this.player );
                    this.hideControls();
                    //no arguments defaults to test ad tag
                    this.plugins.ima.runAd(this.ad_tag);
                } else {
                    console.log("ima plugin not present or failed to initialize")
                };
                break;
            case 'legacy_dart':
                console.log("No support for legacy DART ads.");
                break;
            default:
                console.log("Unrecognized ad type. Check the ad tag again.");
                break;
        };
    } else {
        console.log("No ad type present");
    }
};/*

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Extra functionality for custom controls, Flash support, and statistics

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*Magnify.Player.prototype.buildFlashObject = function(params){
    console.log("buildFlashObject(params):\n", params);
    /* params should contain:
        width: width of object
        height: height of object,
        type: default to application/x-shockwave-flash
        data: should default to flowplayer_url
        file_src: either mp4 or flv file src
    * /

    var object_el = document.createElement('object');
    object_el.setAttribute('type', 'application/x-shockwave-flash');
    object_el.setAttribute('width', params.width);
    object_el.setAttribute('height', params.height);
    object_el.setAttribute('data', this.flowplayer_url);

    var movie_param = document.createElement('param');
    movie_param.setAttribute('name', 'movie');
    movie_param.setAttribute('value', this.flowplayer_url);
    object_el.appendChild(movie_param);

    var flashvars_param = document.createElement('param');
    flashvars_param.setAttribute('name', 'flashvars');
    var flashvars_value = "config={'clip':'http://stream.flowplayer.org/N8inpasadena-Flowers457.flv'}";
    // var flashvars_value = "config={'clip': { ";
    // flashvars_value += "'playlist':[{'url':'http://stream.flowplayer.org/N8inpasadena-Flowers457.flv','autoBuffering':true,'autoPlay':true,'scaling':'fit'}]"
    // flashvars_value += "} }";
    // flashvars_value += ' allowscriptaccess="always" allowfullscreen="true" ';
    flashvars_param.setAttribute('value', flashvars_value);

    object_el.appendChild(flashvars_param);

    return object_el;
};*/

/*Magnify.Player.prototype.playFlashAd = function(srcs){
    console.log("playFlashAd(srcs):\n", srcs);
    this.panic(); // Replaces embed src with legacy flash based player.
    /*clog("playFlashAd called", srcs);
    this.hideControls();
    var params_obj = {
        width: "100%",
        height: "100%",
        file_src: srcs['x-shockwave-flash'].url
    };
    var object_el = this.buildFlashObject(params_obj);
    object_el.style.position = 'absolute';
    object_el.style.top = 0;
    object_el.style.left = 0;
    clog(object_el);
    clog(this.container_element);
    this.container_element.appendChild(object_el);* /
};*/

/*
Magnify.Player.prototype.buildControls = function(){
    var that = this;
    if (typeof this.player !=='undefined'){
        //First declare controls container
        var controls_container = document.createElement('div');
        controls_container.setAttribute('class', 'video-controls-container');
        controls_container.id = "video-controls-container-" + this.id;
        this.controls_container = controls_container;
        var play_button = this.plugins.controlbuilder.buildPlayButton();
        this.play_button = play_button;
        var that = this;
        play_button.addEventListener('click', function(ev){
            if (that.player.paused==true){
                that.playVideo();
            } else {
                that.pauseVideo();
            }
        });
        controls_container.appendChild(play_button);
        
        var time_slider = this.plugins.controlbuilder.buildTimeSlider();
        this.time_slider = time_slider;
        time_slider.addEventListener('mousemove', function(ev){
            that.calculatePosition(ev);
            that.showTime();
        });
        controls_container.appendChild(time_slider);
        
        
        //var time_display = this.plugins.controlbuilder.buildTimeDisplay();
        //this.time_display = time_display;
        //controls_container.appendChild(time_display);
        var mute_button = this.plugins.controlbuilder.buildMuteButton();
        this.mute_button = mute_button;
        var that = this;
        mute_button.addEventListener('click', function(ev){
            var value = !that.player.muted;
            that.playerMuted( value );
            if (value==false){
                that.mute_button.innerHTML = '<i class="fa fa-volume-up fa-2x control"></i>';
            } else if (value==true){
                that.mute_button.innerHTML = '<i class="fa fa-volume-off fa-2x control"></i>';
            }
        });
        controls_container.appendChild(mute_button);
        var volume_slider = this.plugins.controlbuilder.buildVolumeSlider();
        this.volume_slider = volume_slider;
        volume_slider.addEventListener("input", function() {
            that.player.volume = volume_slider.value;
        }, false); 
        volume_slider.value = this.player.volume;
        controls_container.appendChild(volume_slider);
        var fullscreen_button = this.plugins.controlbuilder.buildFullscreenButton();
        this.fullscreen_button = fullscreen_button;
        var that = this;
        this.fullscreen_button.addEventListener('click', function(ev){
            var el = that.player;
            rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
            rfs.call(el);
            var fullscreen_event = new Event('fullscreen');
            var expand_event = new Event('expand');
            if (typeof that.player !=='undefined'){
                that.player.dispatchEvent(fullscreen_event);
                that.player.dispatchEvent(expand_event);
            };
        });
        controls_container.appendChild(fullscreen_button);
        if (this.plugins.vastparser.is_vpaid==true){
            var skip_button = this.plugins.controlbuilder.buildSkipButton();
            this.skip_button = skip_button;
            var inner_skip_text = document.createElement('span');
            inner_skip_text.id = this.id + '-skip-text';
            inner_skip_text.innerHTML = 'Skip Ad >>';
            inner_skip_text.className = 'skip-text';
            this.skip_button.appendChild(inner_skip_text);
            var outer = this;
            this.skip_button.addEventListener('click', function(ev){
                outer.skipAd();
            });
            this.container_element.appendChild(this.skip_button);
        };
        if (typeof this.plugins.twitter !=='undefined'){
            //add tweet control
            var tweet_button = this.plugins.twitter.buildTweetButton();
            this.tweet_button = tweet_button;
            var that = this;
            tweet_button.addEventListener('click', function(ev){
                var tweet_params = {
                    //TEST - these parameters should come from the content item
                    "text": that.video_title,
                    "hashtags": that.hashtags || ""
                };
                that.plugins.twitter.tweetSomething(tweet_params);
            });
            this.container_element.appendChild(tweet_button);
        };
        this.container_element.appendChild(controls_container);
    };
};
*/

Magnify.Player.prototype.playVideo = function(){
    console.log("playVideo");
    this.player.play();
    if (typeof this.play_button !=='undefined'){
        this.play_button.innerHTML = '<i class="fa fa-pause fa-2x control"></i>';
    };
    if (typeof this.tweet_button !=='undefined'){
        if (this.preroll_done==false){
            this.tweet_button.style.display = 'none';
        }
    }
};

Magnify.Player.prototype.pauseVideo = function(){
    console.log("pauseVideo");
    this.player.pause();
    if (typeof this.play_button !=='undefined'){
        this.play_button.innerHTML = '<i class="fa fa-play fa-2x control"></i>';
    };
};

Magnify.Player.prototype.rewindVideo = function(){
    console.log("rewindVideo");
    this.player.pause();
    this.player.currentTime = 0;
    this.player.play();
    var rewind_event = new Event('rewind');
    this.player.dispatchEvent(rewind_event);
};

Magnify.Player.prototype.playerMuted = function(bool_value){
    console.log("playerMuted(bool_value:\n", bool_value);
    if (bool_value==false){
        var unmuted_event = new Event('unmuted');
        this.player.dispatchEvent(unmuted_event);
    } else if (bool_value==true){
        var muted_event = new Event('muted');
        this.player.dispatchEvent(muted_event);
    };
    this.player.muted = bool_value;
};

Magnify.Player.prototype.registerCallback = function(func, args_array, target_event, priority, once){
    //console.log("registerCallback(fun, args_array, target_event, priority, once:\n", func, args_array, target_event, priority, once);
    //Defaults to 'any' prioirity, which is -1.  It will be called in no particular order.
    //Pass args_array to register default values for function
    priority = priority || -1;
    once = once || false;
    if (typeof this.callbacks[target_event] !== 'undefined')
    this.callbacks[target_event].push({ callback: func, priority: priority, args: args_array, once: once, called: false });
};

Magnify.Player.prototype.seekToTime = function(time){
    console.log("seekToTime(time)", time);
    if (time > 0 && time < this.player.duration){
        this.player.currentTime = time;
    };
};

Magnify.Player.prototype.showWatermark = function(bool){
    console.log("showWatermark(bool):\n", bool);
    bool = bool || true;
    if (typeof this.watermark_el !=='undefined'){
        if (bool == false){
            this.watermark_el.style.display = 'none';
        } else {
            this.watermark_el.style.display = 'block';
        }
    };
};

Magnify.Player.prototype.showTime = function(){
    console.log("showTime()");
    var current_time = this.player.currentTime;
    current_time = this.formatTime(current_time);
};

Magnify.Player.prototype.animateControls = function(action){
    if (action==true){
        this.showControls();
    } else {
        this.hideControls();
    };
};

Magnify.Player.prototype.calculatePosition = function(ev){
    console.log("calculatePosition()");
    var rect = this.time_slider.getBoundingClientRect();
    var offsetleft = parseInt(rect.left);
    var offsettop = parseInt(rect.top);
    var offsetwidth = parseInt(rect.width);
    var X = ev.x - ev.target.offsetLeft;
    var Y = ev.y - ev.target.offsetTop;
};

Magnify.Player.prototype.checkFullscreenSupport = function(){
    console.log("checkFullscreenSupport()");
    var support = false;
    this.enterFullscreen = null;
    this.exitFullscreen = null;
    var that = this;
    if (this.player.requestFullscreen) {
        support = true;
        this.enterFullscreen = function(){ that.player.requestFullscreen() };
        this.exitFullscreen = function(){ that.player.exitFullscreen() };
    } else if (this.player.mozRequestFullScreen) {
        support = true;
        this.enterFullscreen = function(){ that.player.mozRequestFullScreen() };
        this.exitFullscreen = function(){ that.player.mozCancelFullScreen() };
    } else if (this.player.webkitRequestFullscreen) {
        support = true;
        this.enterFullscreen = function(){ that.player.webkitRequestFullscreen() };
        this.exitFullscreen = function(){ that.player.webkitExitFullscreen() }
    } else if (this.player.msRequestFullscreen){
        support = true;
        this.enterFullscreen = function(){ that.player.msRequestFullscreen() };
        this.exitFullscreen = function(){ that.player.msExitFullscreen() };
    }
    return support;
};

Magnify.Player.prototype.goToFullscreen = function(){
    console.log("goToFullscreen()");
    var fullscreen_event = new Event('fullscreen');
    var expand_event = new Event('expand');
    if ((typeof this.player !=='undefined') && (this.enterFullscreen !== null)){
        this.player.dispatchEvent(fullscreen_event);
        this.player.dispatchEvent(expand_event);
        this.enterFullscreen();
    };
};

Magnify.Player.prototype.leaveFullscreen = function(){
    console.log("leaveFullscreen()");
    if (this.exitFullscreen !== null){
        this.exitFullscreen();
        var exit_fullscreen_event = new Event('collapse');
        this.player.dispatchEvent(exit_fullscreen_event);
    };
};


Magnify.Player.prototype.raiseEvent = function(type, event){
    console.log("raiseEvent(type, event):\n", type, event);
    if (typeof event === "undefined" || event == null)
        event = {};
    event.type = type;
    this.onEvent(event, this.callbacks);
}

Magnify.Player.prototype.onEvent = function(ev, callbacks){
    var callback_list = callbacks[ev.type];
    for (var i = 0; i < callback_list.length; i++){
        var callback = callback_list[i];
        if (callback.called==true){
            continue;
        };
        var func = callback.callback;
        func.apply(func, callback.args);
        if (callback.once === true){
            callback.called = true;
        };
    };
};

Magnify.Player.prototype.panic = function(){
 	console.log("panic()", this.panic_url, this.permalink);
	window.location.replace(this.panic_url);
 };

Magnify.Player.prototype.addWatermark = function(container, watermark_obj){
    console.log("addWatermark(container, watermark_obj):\n", container, watermark_obj);
    var img = document.createElement('img');
    img.src = watermark_obj.src;
    img.id = "watermark-" + this.id;
    img.width = watermark_obj.width || 50;
    img.height = watermark_obj.height || 50;
    img.style.position = 'absolute';
    img.style['z-index'] = 10000;
    img.style.opacity = 0.4;
    img.style[watermark_obj.position_vertical] = 0;
    img.style[watermark_obj.position_horizontal] = 0;
    this.watermark_el = img;
    if (img.src!==""){
        container.appendChild(img);
    }
};

Magnify.Player.prototype.addTrackingCallbacks = function(tracking_arr){
    console.log("addTrackingCallbacks(tracking_arr):\n", tracking_arr);
    if ((tracking_arr !== null) && (typeof tracking_arr !=='undefined')){ 
        for (var i = 0; i < tracking_arr.length; i++){
            var tracking = tracking_arr[i];
            var event_string = tracking._event;
            var callback_url = tracking.__cdata;
            var that = this;
            if (typeof this.callbacks[event_string] !=='undefined'){
                this.callbacks[event_string].push({ args: [callback_url], callback: function(){ that.pingTrack(arguments) } });
            };
        };
    }
};

Magnify.Player.prototype.dropPixel = function(track_url) {
    //console.log("dropPixel(track_url):\n", track_url);
    var new_img = document.createElement('img');
    new_img.src = track_url;
    new_img.style.width = "1px";
    new_img.style.height = "1px";
    new_img.style.position = 'absolute';
    new_img.style.top = "0px";
    this.container_element.appendChild(new_img);
    console.log("dropped pixel: " + new_img.src);
};

Magnify.Player.prototype.pingTrack = function(){
    console.log("pingTrack()");
    var args = arguments[0];
    var arglength = args.length;

    if (Object.prototype.toString.call( args ) === '[object Arguments]'){
        this.dropPixel(args[0]);
    }
};

Magnify.Player.prototype.addCallbackListeners = function(){
    console.log("addCallbackListeners()");
    var that = this;
    for (var cb in this.callbacks){
        this.player.addEventListener(cb, function(ev){ that.onEvent(ev, that.callbacks) }, false);
    };
};

Magnify.Player.prototype.skipAd = function(){
    console.log("skipAd()");
    if (this.preroll_done==false){
        var skip_event = new Event('skip');
        this.player.dispatchEvent(skip_event);
    }
};

Magnify.Player.prototype.adSkipped = function(){
    console.log("adSkipped()");
    this.refreshPlayer();
};

Magnify.Player.prototype.formatTime = function(time){
    //console.log("formatTime(time):\n", time);
    // Shamelessly taken from StackOverflow:
    // http://stackoverflow.com/questions/5539028/converting-seconds-into-hhmmss
    var seconds = Number(time);
    var hours = Math.floor(seconds / 3600);
    var mins = Math.floor(seconds % 3600 / 60);
    var secs = Math.floor(seconds % 3600 % 60);
    return ((hours > 0 ? hours + ":" : "") + (mins > 0 ? (hours > 0 && mins < 10 ? "0" : "") + mins + ":" : "0:") + (secs < 10 ? "0" : "") + secs);
};

Magnify.Player.prototype.timePercentage = function(time){
    //console.log("timePercentage(time):\n", time);
    return ( time / this.player.duration );
};

Magnify.Player.prototype.setDefaultListeners = function(){
    console.log("timePercentage()");
    //These are excluded from the callback structure since they are default events
    this.first_quartile_fired = false;
    this.midpoint_fired = false;
    this.third_quartile_fired = false;
    this.play_event_count = 0;
    var that = this;
    var player = this.player;
    player.addEventListener('skip', function(ev){
        that.adSkipped();
    });

    player.addEventListener('timeupdate', function(ev){
        var current_time = player.currentTime;

        var playerCurrentTime = player.currentTime;
        var playerPercentage  = (playerCurrentTime / player.duration) * 100;

        //that.time_display.innerHTML = that.formatTime(current_time);
        //that.time_slider.value = that.timePercentage(current_time);

        var event = process_video_percentage( playerPercentage );

        if ( typeof event !== 'undefined' ) {
            if ( event === 'firstQuartile' ){
                if ( that.first_quartile_fired == false ){
                    that.first_quartile_fired = true;
                    var first_quartile_ev = new Event('firstQuartile');
                    player.dispatchEvent(first_quartile_ev);

                };
            } else if ( event === 'midpoint' ){
                if ( that.midpoint_fired == false ){
                    that.midpoint_fired = true;
                    var midpoint_ev = new Event('midpoint');
                    player.dispatchEvent(midpoint_ev);
                };
            } else if ( event === 'thirdQuartile' ){
                if ( that.third_quartile_fired == false ){
                    that.third_quartile_fired = true;
                    var third_quartile_ev = new Event('thirdQuartile');
                    player.dispatchEvent(third_quartile_ev);
                };
            }
        }
    }, false);

    player.addEventListener('ended', function(ev){
        
        if (that.isOniOS() == true && that.pipeline != 'upload'){
            player.webkitExitFullScreen();
            that.refreshPlayer();
        };
        
        var complete_event = new Event('complete');
        player.dispatchEvent(complete_event);
    }, false);

    player.addEventListener('play', function(ev){
        that.play_event_count += 1;

        if (that.play_event_count == 1){
            var start_event = new Event('start');
            var creative_view_event = new Event('creativeView');
            player.dispatchEvent(start_event);
            player.dispatchEvent(creative_view_event);
        };
    }, false);

    var fullscreenChange = function(ev){
        
    };

    player.addEventListener('webkitfullscreenchange', fullscreenChange);
    player.addEventListener('mozfullscreenchange', fullscreenChange);
    player.addEventListener('fullscreenchange', fullscreenChange);

    var fullscreenError = function(ev){
        console.log(ev);
    };

    player.addEventListener('webkitfullscreenerror', fullscreenError);
    player.addEventListener('mozfullscreenerror', fullscreenError);
    player.addEventListener('fullscreenerror', fullscreenError);

};

function process_video_percentage( playerPercentage ) {
    var event;
    if      ( playerPercentage >= 0  && playerPercentage < 25  ) { event = 'start'         }
    else if ( playerPercentage >= 25 && playerPercentage < 50  ) { event = 'firstQuartile' }
    else if ( playerPercentage >= 50 && playerPercentage < 75  ) { event = 'midpoint'      }
    else if ( playerPercentage >= 75 && playerPercentage < 100 ) { event = 'thirdQuartile' }
    else if ( playerPercentage >= 100                          ) { event = 'complete'      }
    return event;
}
