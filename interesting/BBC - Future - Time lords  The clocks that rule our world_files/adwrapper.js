/*
Magnify Player Ad wrapper Plugin v. 0.1.1

NOTE: The underscores preceding attribute values in the parsed VAST object is an artifact of the X2JS library
*/

define(['adwrapper', 'vastparser'], function(adwrapper, vastparser){
	//can preconfigure wrapper object here

	//object to contain implementation
	var AdWrapper = function(){
		this.srcs = {
			mp4: {},
			flv: {},
			webm: {}
		};
	};

	AdWrapper.prototype.loadAd = function(json_doc){

	};

	AdWrapper.prototype.getSourceTypes = function(json_doc){
		var files;
		if (Object.prototype.toString.call( json_doc.VAST.Ad.InLine.Creatives.Creative ) === '[object Array]'){
			files = json_doc.VAST.Ad.InLine.Creatives.Creative[0].Linear.MediaFiles.MediaFile;
		} else {
			files = json_doc.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile;
		}

		var types = [];

		if (Object.prototype.toString.call( files ) === '[object Array]'){
			for (var i = 0; i < files.length; i++){
				var mediafile = files[i];
				var type = mediafile._type;
				types.push(type);
			}
		} else {
			var mediafile = files;
			var type = mediafile._type;
			types.push(type);
		}
		console.log(types);
		return types;
	};

	AdWrapper.prototype.addSources = function(json_doc){
		var files;
		if (Object.prototype.toString.call( json_doc.VAST.Ad.InLine.Creatives.Creative ) === '[object Array]'){
			files = json_doc.VAST.Ad.InLine.Creatives.Creative[0].Linear.MediaFiles.MediaFile;
		} else {
			files = json_doc.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile;
		}

		if (Object.prototype.toString.call( files ) === '[object Array]'){
			for (var i = 0; i < files.length; i++){
				var mediafile = files[i];
				var type = mediafile._type;
				var type_suffix = type.split('/')[1];
				this.srcs[type_suffix] = this.srcs[type_suffix] || {};
				this.srcs[type_suffix].url = mediafile.__cdata;
				this.srcs[type_suffix].mime_type = type;
			}
		} else {
			var mediafile = files;
			var type = mediafile._type;
			var type_suffix = type.split('/')[1];
			//in case it doesn't exist yet
			this.srcs[type_suffix] = {};
			this.srcs[type_suffix].url = mediafile.__cdata;
			this.srcs[type_suffix].mime_type = type;
		}
	};

	AdWrapper.prototype.getSources = function(json_doc){
		this.addSources(json_doc);
		console.log("sources are: ", this.srcs);
		return this.srcs;
	};

	AdWrapper.prototype.injectSources = function(player, json_doc){
		this.addSources( json_doc );
		for (source in this.srcs){
			var source_obj = this.srcs[source];
			var new_source = document.createElement('source');
			new_source.src = source_obj.url;
			new_source.type = source_obj.mime_type;
			player.appendChild(new_source);
		};
	};

	AdWrapper.prototype.isIMA = function(json_doc){
		var is_ima = false;
		if (json_doc.VAST.Ad.InLine.AdSystem=='VPAIDIMA3'
		 || json_doc.VAST.Ad.InLine.AdTitle=='IMA3'
		 || json_doc.VAST.Ad.InLine._id=='IMA'){
			is_ima = true;
		};

		return is_ima;
	};

	return new AdWrapper(); 
});
