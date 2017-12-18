/*
Magnify Player VAST Parser Plugin v. 0.1.1
Dependencies:
	-x2js
		-- https://code.google.com/p/x2js/
		-- Used under Apache License 2.0

NOTE: The underscores preceding attribute values in the parsed VAST object is an artifact of the X2JS library
*/

define(['vastparser', 'xhr'], function(vastparser, xhr){
	var VastParser = function(){
		this.json_doc = null;
		//ad_root accounts for the fact that the ad may branch from either InLine or Wrapper elements
		this.ad_root = null;
		this.x2js = null;
		this.vast_version = null;
		this.wrapped_ad_doc = null;
		this.ad_layers = [];
		this.tracking_events = [];
		this.wrapper = false;
		this.srcs = {
			mp4: {},
			flv: {},
			webm: {}
		};
		this.buildContentCalls = 0;
		if (typeof X2JS !=='undefined'){
			this.x2js = new X2JS();
		};
	};

	VastParser.prototype.fetchVastTag = function(ad_tag, current_url, callback){
		//clog("FETCH VASTPARSER AD TAG CALLED");
		this.current_url = current_url;
		var that = this;
		var current_timestamp = new Date().getTime();
		var replaced_ad_tag_url = ad_tag.replace("__timestamp__", current_timestamp);
		replaced_ad_tag_url = replaced_ad_tag_url.replace("__page-url__", current_url);
		console.log("replaced ad_tag url", replaced_ad_tag_url);
		jQuery.ajax({
			method: 'GET',
			url: replaced_ad_tag_url,
			success: function(resp) { that.handleVastSuccess(resp, callback); },
			error:   function(resp) { that.handleVastFailure(resp, callback); }
		});
	};

	VastParser.prototype.addSources = function(json_doc){
		var files;
		if ( isArray( json_doc.VAST.Ad.InLine.Creatives.Creative ) ){
			files = json_doc.VAST.Ad.InLine.Creatives.Creative[0].Linear.MediaFiles.MediaFile;
		} else {
			files = json_doc.VAST.Ad.InLine.Creatives.Creative.Linear.MediaFiles.MediaFile;
		}

		if ( isArray( files ) ){
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
			this.srcs[type_suffix] = {};
			this.srcs[type_suffix].url = mediafile.__cdata;
			this.srcs[type_suffix].mime_type = type;
		}
	};


	VastParser.prototype.handleVastSuccess = function(response, callback){
		//clog("Response is: ", response);
		try {
			var vast = this.parseDoc( response, true );
			this.ad_layers.push(vast);
			if (vast==null || typeof vast==='undefined'){
				callback(null);
			} else {
				if (typeof vast.VAST.Ad.Wrapper !=='undefined'){
					var new_parser = new VastParser();
					new_parser.json_doc = vast;
					new_parser.current_url = this.current_url;
					var that = new_parser;
					new_parser.wrapper = true;
					this.fetchVastTag(vast.VAST.Ad.Wrapper.VASTAdTagURI.__cdata, that.current_url, callback);
				} else {
					this.creative_type = this.establishCreativeType(vast.VAST.Ad.InLine);
					this.ad_root = this.json_doc.VAST.Ad.InLine;
					this.vast_version = this.getVASTVersion();
					this.wrapper = false;
					callback(this);
				}
			}
		} catch (e) {
			//clog(e);
			callback(null);
		}
	};

	VastParser.prototype.buildProp = function(prop, iterator){
		var prop_arr = [];

		for (var i = 0; i < this.ad_layers.length; i++){
			prop_arr.push( iterator(this.ad_layers[i]) );
		};

		return prop_arr;
	};

	VastParser.prototype.isWrapper = function(doc_obj){
		var iswrapper = false;
		if (typeof doc_obj.VAST.Ad.Wrapper !=='undefined'){
			iswrapper = true;
		};
		return iswrapper;
	};

	function getRedirect(response){
		if (response.status>=300 && response.status<400) {
			return response.getResponseHeader('Location');
		} else {
			return null;
		}
	};

	VastParser.prototype.handleVastFailure = function(response, callback) {
		//clog(response);
		var location = getRedirect(response);
		if (location != null) {
			var that = this;
			jQuery.ajax({
				method: 'GET',
				url: location,
				success: function(resp) { that.handleVastSuccess(resp, callback); },
				error:   function(resp) { that.handleVastFailure(resp, callback); }
			});
		} else {
			callback(null);
		}
	};

	/*Examples:
	only return parsed document:
		parseDoc(some_xml_doc)
	also store it in VastParser instance for later use:
		parseDoc(some_xml_doc, true)
	*/
	VastParser.prototype.parseDoc = function(xmldoc, store_doc){
		store_doc = store_doc || false;
		if (this.x2js !== null){
			var json_doc = this.x2js.xml2json( xmldoc );
			this.json_doc = json_doc;
			var that = this;

			if (typeof this.json_doc.VAST ==='undefined'){
				//TODO: show error over player
				//clog('No ad returned');
				return null;
			};

			if (typeof this.json_doc.VAST.Ad ==='undefined'){
				//clog('Empty ad returned from ad server');
				return null;
			};

			return json_doc;
		}
	};

	VastParser.prototype.establishCreativeType = function(doc){
		var creative_type = null;
		if (Object.prototype.toString.call( doc.Creatives.Creative ) === '[object Array]'){
			creative_type = "array";
		} else if (Object.prototype.toString.call( doc.Creatives.Creative ) === '[object Object]'){
			creative_type = "object";
		};

		return creative_type;
	};

	VastParser.prototype.getProp = function(prop){
		var that = this;
		switch(prop){
			case 'tracking':
				var tracking = this.buildProp('tracking', function(layer){
					var root_node = that.getAdRoot(layer);
					//clog('root node is:', root_node);

					if (isArray(root_node.Creatives.Creative)){
						if (typeof root_node.Creatives.Creative[0].Linear.TrackingEvents !=='undefined'){
							return root_node.Creatives.Creative[0].Linear.TrackingEvents.Tracking;
						} else {
							return []
						}
					} else {
						if (typeof root_node.Creatives.Creative.Linear.TrackingEvents !=='undefined'){
							return root_node.Creatives.Creative.Linear.TrackingEvents.Tracking;
						} else {
							return []
						}
					};
				});
				// Flatten tracking:
				var flattened = [];
				if (typeof tracking !=='undefined' && tracking !==null){
					for (var i = 0; i < tracking.length; i++)
						for (var j = 0; j < tracking[i].length; j++)
							flattened.push(tracking[i][j]);
				};
				return flattened;
			case 'vastversion':
				var vast_version = null;
				if (this.json_doc !== null && doc==null){
					vast_version = this.json_doc.VAST._version;
				};
				return vast_version;
			case 'creatives':
				var creatives = this.buildProp('creatives', function(layer){
					var root_node = that.getAdRoot(layer);

					if (typeof root_node.Creatives !=='undefined'){
						if (isArray(root_node.Creatives.Creative)){
							return root_node.Creatives.Creative[0].Linear;
						} else {
							return root_node.Creatives.Creative.Linear;
						};
					} else {
						return null;
					};
				});
				return creatives;
			default:
				throw 'Property not found';
				return null;
		};
	};

	//Returns an array of tracking events (if present)
	VastParser.prototype.getTracking = function(){
		return this.getProp('tracking');
	};

	VastParser.prototype.getVASTVersion = function(doc){
		doc = doc || null;
		if (this.json_doc !== null && doc==null){
			return this.json_doc.VAST._version;
		} else if (doc !==null){
			return doc.VAST._version;
		};
	};

	//Returns an array or object of creatives (if present)
	VastParser.prototype.getCreatives = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			return (this.ad_root.Creatives.Creative || null);
		} else if (doc !==null){
			var ad_root = this.getAdRoot(doc);
			return (ad_root.Creatives.Creative || null);
		};
	};

	//Returns the impression CDATA block (if present)
	VastParser.prototype.getImpression = function(doc){
		doc = doc || null;
		//clog("Impression is: ", this.ad_root.Impression);
		try {
			if (this.json_doc !==null && doc==null){
				return (this.ad_root.Impression.__cdata || null);
			} else if (doc !==null){
				var ad_root = this.getAdRoot(doc);
				return (ad_root.Impression.__cdata || null);
			};
		} catch(e){
			console.log(e);
			return null;
		};
	};

	VastParser.prototype.getAdSystem = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			return (this.ad_root.AdSystem || null);
		} else if (doc !==null){
			var ad_root = this.getAdRoot(doc);
			return (ad_root.AdSystem || null);
		};
	};

	VastParser.prototype.getAdTitle = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			return (this.ad_root.AdTitle || null);
		} else if (doc !==null){
			var ad_root = this.getAdRoot(doc);
			return (ad_root.AdTitle || null);
		};
	};

	//Returns the error URL block (if present)
	VastParser.prototype.getErrorURL = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			return (this.ad_root.Error.__cdata || null);
		} else if (doc !==null){
			var ad_root = this.getAdRoot(doc);
			return (ad_root.Error.__cdata || null);
		};
	};

	VastParser.prototype.getAdId = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			return (this.json_doc.VAST.Ad._id || null);
		} else if (doc !==null){
			return (doc.VAST.Ad._id || null);
		}
	};

	VastParser.prototype.getClickthrough = function(){
		if (this.json_doc !==null){
			var return_value = null;
			if (this.creative_type=="object"){
				return_value = this.ad_root.Creatives.Creative.Linear.VideoClicks.ClickThrough;
			} else if (this.creative_type=="array"){
				return_value = this.ad_root.Creatives.Creative[0].Linear.VideoClicks.ClickThrough;
			};
			return return_value;
		}
	};

	VastParser.prototype.getClickTracking = function(doc){
		doc = doc || null;
		var return_value = null;
		if (this.json_doc !==null && doc==null){
			if (this.creative_type=="object"){
				return_value = this.ad_root.Creatives.Creative.Linear.VideoClicks.ClickTracking
			} else if (this.creative_type=="array"){
				return_value = this.ad_root.Creatives.Creative[0].Linear.VideoClicks.ClickTracking
			};
			return return_value;
		} else if (doc !== null){
			//TODO: stuff
		};
	};

	//Returns an array of extensions from ad tag (if present)
	VastParser.prototype.getExtensions = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			return (this.ad_root.Extensions.Extension || null);
		} else if (doc !==null){
			var ad_root = this.getAdRoot(doc);
			return ad_root.Extensions.Extension;
		};
	};

	//Returns an array of custom tracking events
	VastParser.prototype.getCustomTracking = function(doc){
		doc = doc || null;
		if (this.json_doc !==null && doc==null){
			if (typeof this.ad_root.Extensions !=='undefined'){
				if (typeof this.ad_root.Extensions.Extension.CustomTracking !=='undefined'){
					return this.ad_root.Extensions.Extension.CustomTracking.Tracking;
				} else {
					return null;
				}
			}
		} else if (doc !==null){
			var ad_root = this.getAdRoot(doc);
			return ad_root.Extensions.Extension.CustomTracking.Tracking;
		};
	};

	VastParser.prototype.getAdRoot = function(doc){
		if (typeof doc.VAST.Ad.InLine !=='undefined'){
			return doc.VAST.Ad.InLine;
		} else if (typeof doc.VAST.Ad.Wrapper !=='undefined'){
			return doc.VAST.Ad.Wrapper;
		}
	};

	//this method simply looks for a skip event in the custom tracking, which would indicate a VPAID ad outside of a SWF object
	VastParser.prototype.checkVPAID = function(doc){
		doc = doc || null;
		var tracking = this.getCustomTracking(doc), is_vpaid = false;
		if (Object.prototype.toString.call( tracking ) === '[object Array]'){
			for (var i = 0; i < tracking.length; i++){
				if (tracking[i]._event=='skip'){
					is_vpaid = true;
				}
			}
		} else {
			for (var i in tracking){
				var tracking_entry = tracking[i];
				if (tracking_entry._event=='skip'){
					is_vpaid = true;
				};
			}
		};

		var regular_tracking = this.getTracking(doc);
		console.log(regular_tracking);
		var that = this;
		if (Object.prototype.toString.call( regular_tracking ) === '[object Array]'){
			for (var i = 0; i < regular_tracking.length; i++){
				var tracking_obj = regular_tracking[i];
				if (tracking_obj._event=='skip'){
					is_vpaid = true;
				}
			};
		} else if (Object.prototype.toString.call( regular_tracking ) === '[object Object]'){
			for (var i in regular_tracking){
				var tracking_obj = regular_tracking[i];
				if (tracking_obj._event=='skip'){
					is_vpaid = true;
				};
			};
		};

		return is_vpaid;
	};

	//addExtensions adds the Extensions in the VAST document to the VastParser object, for later referencing
	VastParser.prototype.addExtensions = function(){
		var that = this;
		this.extensions = this.extensions || {};
		if (typeof this.ad_root.Extensions !=='undefined'){
			if (Object.prototype.toString.call( that.ad_root.Extensions.Extension ) === '[object Array]'){
				var Extensions = that.ad_root.Extensions.Extension;
				for (var i = 0; i < Extensions.length; i++){
					that.extensions[ Extensions._type ] = Extension;
				};
			} else {
				//Only one extension, and it's an object, so simply assign it straightaway
				this.extensions[Extension._type ] = that.ad_root.Extensions.Extension;
			};
		}
	};

	return new VastParser(); 
});
