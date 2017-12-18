TWP = window.TWP || {};
TWP.PostTV = TWP.PostTV || {};

// Flag for loading scripts
TWP.PostTV.scriptsLoaded = TWP.PostTV.scriptsLoaded || false;
TWP.PostTV.stylesLoaded = TWP.PostTV.stylesLoaded || false;

/**
 * Parses the information about browser name, version, OS/Platform and device type from user agent. Device types include:
 *      desktop: 0
 *      mobile: 1
 *      tablet: 2
 *
 * @type {*|{init: Function, searchString: Function, searchVersion: Function, lookUpDeviceType: Function, dataBrowser: Array, dataOS: Array, dataDeviceType: Array}}
 */
TWP.PostTV.BrowserInfo = TWP.PostTV.BrowserInfo || {
	init: function (userAgentStr) {
		this.userAgentStr = userAgentStr;
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(this.userAgentStr) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
		this.deviceType = this.lookUpDeviceType(this.dataDeviceType) || 0; // default to desktop
		this.webview = this.searchString(this.dataWebview) || "unknown";
		this.setupThinkAdBlock();
	},
	searchString: function (data) {
		for (var i = 0; i < data.length; i++) {
			var dataString = typeof data[i].string === "undefined" ? this.userAgentStr : data[i].string;
			var dataProp = data[i].prop;
			if (!this.version) this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return dataString.substring(index + this.versionSearchString.length + 1).match(/\d+(\.\d+)+/g)[0];
	},
	lookUpDeviceType: function(data){
		var dataString;
		for (var i= 0,l=data.length;i<l;i++) {
			dataString = typeof data[i].string === "undefined" ? this.userAgentStr : data[i].string;
			if (dataString){
				if ($.isArray(data[i].subString)){
					for (var j= 0,jl=data[i].subString.length;j<jl;j++){
						if (dataString.indexOf(data[i].subString[j]) != -1){
							return typeof data[i].type === "number" ? data[i].type : this.lookUpDeviceType(data[i].type);
						}
					}
				} else if (dataString.indexOf(data[i].subString) != -1){
					return typeof data[i].type === "number" ? data[i].type : this.lookUpDeviceType(data[i].type);
				} else if (typeof data[i].otherwise != "undefined"){
					return data[i].otherwise;
				}
			}
		}
	},
	setupThinkAdBlock: function(){
		var self = this;
		$(function(){
			var adBlockCanaryMarkup = '<div id="ptvCanary" class="bottomAd" style="color: white; height: 2px"></div>';
			if ($('#ptvCanary').length === 0) {
				$('body').append(adBlockCanaryMarkup);
			}
			self.thinkAdBlock = !!($('#ptvCanary').filter(':hidden').length > 0 || $('#ptvCanary').filter(':visible').length === 0);
		});
	},
	dataBrowser: [{
		subString: "Silk",
		identity: "Silk"
	}, {	// MS Edge
		subString: "Edge",
		identity: "Edge",
		versionSearch: "Edge"
	}, {
		subString: "Chrome",
		identity: "Chrome"
	}, {
		string: navigator.vendor,
		subString: "Apple",
		identity: "Safari",
		versionSearch: "Version"
	}, {
		prop: window.opera,
		identity: "Opera",
		versionSearch: "Version"
	}, {
		subString: "Firefox",
		identity: "Firefox"
	}, {	// for newer Netscapes (6+)
		subString: "Netscape",
		identity: "Netscape"
	}, {	// older iterations of IE11 and MS IE <10
		subString: "MSIE",
		identity: "Explorer",
		versionSearch: "MSIE"
	}, {	// newer iterations of IE11
		subString: "Trident",
		identity: "Explorer",
		versionSearch: "rv"
	}, {	// for Android stock browsers
		subString: "Android",
		identity: "Android Stock Browser",
		versionSearch: "Android"
	}, {
		subString: "Gecko",
		identity: "Mozilla",
		versionSearch: "rv"
	}, {	// for older Netscapes (4-)
		subString: "Mozilla",
		identity: "Netscape",
		versionSearch: "Mozilla"
	}],
	dataOS: [{
		subString: "Silk",
		identity: "Android for Kindle"
	}, {
		string: navigator.platform,
		subString: "Win",
		identity: "Windows"
	}, {
		string: navigator.platform,
		subString: "Mac",
		identity: "Mac"
	}, {
		subString: "iPhone",
		identity: "iPhone"
	}, {
		subString: "iPad",
		identity: "iPad"
	}, {
		subString: "Android",
		identity: "Android"
	}, {
		string: navigator.platform,
		subString: "Linux",
		identity: "Linux"
	}],
	dataDeviceType: [{
		subString: ["iPhone", "iPod"],
		type: 1 // mobile
	}, {
		subString: ["iPad", "Silk"],
		type: 2 // tablet
	}, {
		subString: ["Android"],
		type: [{
			subString: ["Firefox"],
			type: 2 // tablet
		}, {
			subString: ["Mobile"],
			type: 1 // mobile
		}, {
			subString: null,
			otherwise: 2 // otherwise tablet
		}]
	}, {
		subString: ["Opera"],
		type: [{
			subString: ["Mobi", "Mini"],
			type: 1 // mobile
		}]
	}, {
		subString: ["AppleWebKit"],
		type: [{
			subString: ["Mobile"],
			type: 1 // mobile
		}]
	}, {
		subString: ["Mobile"],
		type: 1 // mobile
	}],
	dataWebview: [{
		subString: "FBIOS",
		identity: "Facebook for iOS"
	}, {
		subString: "FB4A",
		identity: "Facebook for Android"
	}, {
		subString: "Twitter for iPhone",
		identity: "Twitter for iOS"
	}, {
		subString: "TwitterAndroid",
		identity: "Twitter for Android"
	}, {
		subString: " GSA/",
		identity: "Google Search App for iOS"
	}, {
		subString: "CriOS",
		identity: "Chrome for iOS"
	}]
};

if (!TWP.PostTV.BrowserInfo.browser) {
	TWP.PostTV.BrowserInfo.init(navigator.userAgent);
}
/**
 * Categorizes the current device as mobile/non-mobile based on "devicetype" cookie set from server-side.
 * Note that the server-side device detection logic only categorizes mobile/desktop and tablets are treated as desktop.
 *
 * @type {boolean} indicates whether the current device is mobile or not.
 */
TWP.PostTV.isMobile = typeof TWP.PostTV.isMobile == 'boolean' ? TWP.PostTV.isMobile : (function () {
	if (typeof TWP.PostTV.BrowserInfo.deviceType !== 'undefined') {
		return TWP.PostTV.BrowserInfo.deviceType == 1;
	} else if (/iPhone|Android/i.test(TWP.PostTV.BrowserInfo.OS) === true) {
		TWP.PostTV.BrowserInfo.deviceType = 1;
		return true;
	}
})();

/**
 * If the device is not classified as mobile based on service-side device detection but is one of the following devices, classify it
 * as a tablet:
 * - Android
 * - webOS
 * - iPhone
 * - iPad
 * - iPod
 * - BlackBerry
 */
TWP.PostTV.isTablet = (function () {
	if (typeof TWP.PostTV.BrowserInfo.deviceType !== 'undefined') {
		return TWP.PostTV.BrowserInfo.deviceType == 2;
	} else if (/iPad/i.test(TWP.PostTV.BrowserInfo.OS) === true) {
		TWP.PostTV.BrowserInfo.deviceType = 2;
		return true;
	}
})();
TWP.PostTV.isDeskweb = !(TWP.PostTV.isMobile || TWP.PostTV.isTablet);

TWP.postTVCacheBuster = "1446168649135";

var contextPath = window.wp_pb && wp_pb.contextPath ? wp_pb.contextPath :
	TWP.PostTV.isDebugMode ? '//www.washingtonpost.com/posttv-beta' :
	'//www.washingtonpost.com/posttv';

if (location.host.indexOf('local') >= 0) {
	contextPath = '//' + location.host + (window.wp_pb && wp_pb.contextPath ? wp_pb.contextPath : '/pb');
}

var fullJsUrl= $('script[src*="posttv-player.js"], script[src*="posttv-player.min.js"]').attr('src');
if (fullJsUrl) {
	var fullJsUrlResources = fullJsUrl.indexOf('/static/js/posttv') > -1 ? fullJsUrl.indexOf('/static/js/posttv') : fullJsUrl.indexOf('/resources/js/posttv');
	if (fullJsUrlResources > -1) {
		contextPath = fullJsUrl.substr(0,fullJsUrlResources);
	}
}

// jwplayer has major problems when loading jwplayer.js over https: on a http: page, so just force protocol agnostic contextPath
if (contextPath.indexOf('http') === 0) {
	contextPath = contextPath.substr(contextPath.indexOf('//'));
}

if (window.console) console.log('contextPath: ', contextPath);

var configUrl = '//videos.posttv.com/JWPlayer/JWPlayerConfig.js';
if (window.location.host.indexOf('local') > -1 || (window.location.href.split('/')[3] && window.location.href.split('/')[3].indexOf('beta') > -1)) {
	configUrl = contextPath + '/resources/js/posttv/jwPlayer/JWPlayerConfig.js';
}

if (window.console) console.log('config url: ', configUrl);

var playerScript = (function(){
	var scripts = {
		jwplayer: [configUrl],
		youtube: [contextPath + '/static/js/posttv/youtube/embed.js']
	};

	// some jwplayer resources might already be available on the page, e.g. video leaf pages
	if (!window.jwplayer) {
		scripts.jwplayer.push(contextPath + '/resources/js/posttv/vendor/jwplayer/jw-7.1.4/jwplayer.js');
	}
	if (!window.jwPlayerWrapper) {
		if (window.location.href.indexOf('_compact=false') > -1 || window.location.host.indexOf('local') > -1) {
			scripts.jwplayer.push(contextPath + '/resources/js/posttv/jwPlayer/jwPlayerWrapper.js');
		} else {
			scripts.jwplayer.push(contextPath + '/resources/js/posttv/jwPlayer/jwPlayerWrapper.min.js');
		}
	}

	return scripts;
})();

// TODO: load these libs the PageBuilder way (but make sure they still load outside of PostTV context, e.g. for homepage)
playerScript.jwplayer.unshift(contextPath + '/resources/js/posttv/vendor/streamsense.min.js'); //comscore
playerScript.jwplayer.unshift('//js.washingtonpost.com/wp-stat/advertising/pseudo-static/vidExclusions/vid_exclusions.js');

// TODO: this should be loaded as a utility somewhere
var queryStringObject = function () {
	if (!window.location.search) return {};

	var queries = window.location.search.slice(1).split('&');
	var count = queries.length;
	var queryStringObj = {};

	for (var i = 0; i < count; i++) {
		query = queries[i].split('=');

		if (query[0]) {
			if (query.length < 2) {
				query.push('');
			}

			queryStringObj[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
		}
	}

	return queryStringObj;
};

var queryStringObj = queryStringObject();
var $seriesPlayer = $('#player-container-posttv-series-template');
var seriesPlayer = $seriesPlayer ? $seriesPlayer.attr('data-player') : '';

// If vendor is specified in queryString - use it
TWP.PostTV.playerVendor = queryStringObj.player === 'jw' ? 'jw' :
	seriesPlayer ? seriesPlayer : null;

var loadStyles = function (cb) {

    TWP.PostTV.stylesLoaded = true;

    var head  = document.getElementsByTagName('head')[0];

    function addCss (sheet) {
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = sheet;
        link.media = 'all';
        head.appendChild(link);
    }

    var styles = [
        contextPath + '/resources/css/posttv/posttv-player.css'
    ];

    if ($('.fa').css('font-family') !== 'FontAwesome') { // Add font-awesome if not already on page
        styles.push(contextPath + '/resources/assets/fonts/fontawesome/4.0.3/css/font-awesome.min.css');
    }

    $.each(styles, function (index, value) {
        addCss(value);
    });
};

var loadScripts = function () {
	function loadScript(i, callback) {
		var url = TWP.playerScript[i];
		url += '?_=' + TWP.postTVCacheBuster;
		if(!url) {
			callback();
			return;
		}
		var script = document.createElement("script");
		script.type = "text/javascript";
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = script.onerror = function () {
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
		console.log('Added script: ' +  url);
	}

	var loadPlayer = function () {
		var i = 0;
		var callback = function () {
			i++;
			if (i < TWP.playerScript.length) {
				loadScript(i, callback);
			} else {
				// if self-hosting jwplayer, provide our key
				if (window.jwplayer) jwplayer.key='G6yAUySsWPP3LIJ9rejn8gFzXJvKj3Y3hrn4Ew==';

				console.log("Player files are loaded. Publish player_script_loaded event.");
				PubSub.publish("player_script_loaded", TWP.PostTV.playerVendor);
				TWP.PostTV.scriptsLoaded = true;
				TWP.PostTV.loadingScripts = false;
			}
		};
		loadScript(i, callback);
	};

	loadPlayer();
};

TWP.PostTV.initPostTvPlayer = function (node, options) {

    var createPlayer = function () {

        function getType () {
            var hasFlash = false;
            try {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                    hasFlash = true;
                }
            } catch (e) {
                if (navigator.mimeTypes &&
                    navigator.mimeTypes['application/x-shockwave-flash'] !== undefined &&
                    navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin)
                {
                    hasFlash = true;
                }
            }
            if (hasFlash)
                return 'flash';
            return 'html5';
        }

        if (window.console) console.log('TWP.PostTV.initPostTvPlayer()', node);
        var self = this;
        options = options || {};
        if (!(node && node.nodeType)) {
            console.log('Not a valid element');
            return {};
        }

        self.options = options || {};
        self.options.type = /html5|flash/.test(queryStringObj.renderingMode) ? queryStringObj.renderingMode : self.options.type || getType();
        self.$node = $('#'+node.id);
        self.debug = (window.wp_pb && wp_pb.contextPath && wp_pb.contextPath !== '/posttv' && wp_pb.contextPath !== '/pb' && wp_pb.contextPath !== '/video') || // avoid debug output on posttv, homepage, pagebuilder
                        (window.location.host.indexOf('local') > -1) ||
                        (window.queryStringObj && queryStringObj.ptvdebug == 'true')
                        ? true : false;

        var addScripts = function () {
            if (!TWP.PostTV.scriptsLoaded && !TWP.PostTV.loadingScripts) { // Check insures that only one player script is load one time. jw | youtube
                TWP.playerScript = TWP.PostTV.playerVendor === 'youtube' ? playerScript.youtube : playerScript.jwplayer;
                loadScripts();
                // Scripts have been loaded to page, lets not do it again
                TWP.PostTV.loadingScripts = true;
            }
            else {
                var scriptInterval = setInterval(function () {
                    if (TWP.PostTV.loadingScripts)
                        return;
                    else {
                        PubSub.publish("player_script_loaded", TWP.PostTV.playerVendor);
                        clearInterval(scriptInterval);
                    }
                }, 500);
            }

        };

        var setJson = function (videoJson) {
            self.options.json = videoJson;
        };

        // Find vendor before loading in appropriate scripts
        var setVendor = function (videoJson) {
            function findVendor (videoJson) {
                if (videoJson.contentConfig && videoJson.contentConfig.streams && videoJson.contentConfig.streams.length > 0) {
                    return 'jw';
                } else if (videoJson.contentConfig && videoJson.contentConfig.type && videoJson.contentConfig.type.toLowerCase() == 'live') {
                    self.isLive = true;
                    return 'youtube';
                } else if (videoJson.embedConfig && videoJson.embedConfig.embedType && videoJson.embedConfig.embedType.toLowerCase() == 'youtube') {
                    return 'youtube';
                } else {
                    console.log('using jw as last resort');
                    return 'jw';
                }
            }

            // If queryString specifies player - use it
            // If not - determine player by sources
            if (TWP.PostTV.playerVendor === null) {
                TWP.PostTV.playerVendor = findVendor(videoJson); // Sources will determine vendor
            }
        };

        var harvest = function (videoJson) {

            function padNum(n){
                return n > 9 ? "" + n: "0" + n;
            }

            function readableDate (ms) {
                return parseInt(ms / 1000 / 60) + ":" + padNum(parseInt(ms / 1000 % 60));
            }

            self.aspectRatio = typeof self.$node.attr('data-aspect-ratio') === 'undefined' ? false : self.$node.attr('data-aspect-ratio');
            self.showPlayBtn = self.$node.attr('data-show-play') == '1';
            if (self.showPlayBtn && !TWP.PostTV.stylesLoaded) {
                loadStyles();
            }

            if (!TWP.PostTV.isDeskweb) { // show play button for second click on mob/tab
                self.showPlayBtn = self.showPlayBtn || (self.$node.attr('data-auto-init') != '1' && self.$node.attr('data-autoplay') == '1');
            }

            // Save duration to use in posttv-player templates
            self.readableDuration = readableDate(videoJson.contentConfig.videoDuration);
        };

        var setAspectRatio = function (videoJson) {

            if (TWP.PostTV.playerVendor !== 'jw') return '16:9'; // eg. youtube

            function getAspectRatio () {
                if (self.aspectRatio) {
                    return self.aspectRatio;
                }

                var width, height, ratio;

                function gcd (a, b) {
                    return (b === 0) ? a : gcd (b, a%b);
                }

                if (videoJson.contentConfig.streams.length === 0 && !queryStringObj.source) {
                    console.debug('posttv-player: No playable sources found');
                    return;
                }
                else if (videoJson.contentConfig.streams.length === 0 || queryStringObj.source) {
                    width = videoJson.promoImage.image.width;
                    height = videoJson.promoImage.image.height;
                }
                else {
                    width = videoJson.contentConfig.streams[0].width;
                    height = videoJson.contentConfig.streams[0].height;
                }

                ratio = gcd(width, height);
                return width/ratio + ':' + height/ratio;
            }

            var aspectRatio = getAspectRatio();
            self.$node.attr('data-aspect-ratio', aspectRatio);
        };

        var setHtml5IfNeeded = function (videoJson) {
            function isChrFlashBlocking() {
                var width = self.$node.outerWidth(),
                    height = self.$node.outerHeight(),
                    aspectRatioParts,
                    estHeight;

                // size calculation for hidden elements is unreliable
                if (!self.$node.is(':visible')) return false;

                if ((width && width < 400) || (height && height < 300)) return true;

                // in case we have a width but not height, e.g. leaf page
                if (self.$node.attr('data-aspect-ratio')) {
                    aspectRatioParts = self.$node.attr('data-aspect-ratio').split(':');
                    estHeight = width * (parseInt(aspectRatioParts[1]) / parseInt(aspectRatioParts[0]));
                    if (window.console) console.log('estimated height: ' + estHeight);
                    if (estHeight < 300) return true;
                }
                return false;
            }

            function isMozFlashBlocking () {
                var mozBlocked,
                    canary = $('<object type="application/x-shockwave-flash" height="0" width="0"></object>');
                $('body').append(canary);
                try {
                    // These selectors will throw exceptions in non-Moz browsers
                    if ($(':-moz-handler-clicktoplay')[0]) {
                        mozBlocked = 'clickToPlay';
                    } else if ($(':-moz-handler-vulnerable-updatable')[0]) {
                        mozBlocked = 'update';
                    } else if ($(':-moz-handler-vulnerable-no-update')[0]) {
                        mozBlocked = 'noUpdate';
                    }
                } catch(e) {
                    if (window.console) console.log(e);
                }
                canary.remove();
                return mozBlocked;
            }

            // Chrome blocks autoplaying flash objects under 400x300: http://jira.wpprivate.com/browse/PTV-3642
            if (self.options.type === 'flash' && TWP.PostTV.isDeskweb && isChrFlashBlocking()) {
                self.options.type = 'html5';
                if (window.console)
                    console.log('Defaulting to html5 player due to small size');
            }

            // Firefox blocks flash in a way that JW doesn't recognize, see http://wpo.st/fHqQ0
            if (self.options.type === 'flash' && TWP.PostTV.isDeskweb && TWP.PostTV.BrowserInfo.browser === 'Firefox') {
                var mozFlashBlocked = isMozFlashBlocking();
                if (mozFlashBlocked) {
                    TWP.PostTV.mozFlashBlockedReason = mozFlashBlocked;
                    TWP.PostTV.isFlashEnabled = false;
                    self.options.type = 'html5';
                    if (window.console)
                        console.log('Firefox blocked flash due to ' + mozFlashBlocked + ', falling back to HTML5');
                }
            }
        };

        // Call all functions necessary to set up player
        var initPlayer = function (videoJson) {
            setVendor(videoJson);
            setJson(videoJson);
            addScripts();
            harvest(videoJson);
            setAspectRatio(videoJson);
            setHtml5IfNeeded(videoJson);
        };

        // Will get videoJson from page or
        // Will retrieve videoJson from server
        var getVideoData = function () {
            var $videoDataId = $("#" + TWP.videoDataId);

            if (self.options.json) {
                initPlayer(self.options.json);
            }
            else if ($videoDataId.length > 0) {
                var videoJson = $.parseJSON($videoDataId.html());
                initPlayer(videoJson);
            }
            else { // Get data and determine vendor
                var context = location.host.indexOf('local') >= 0 || location.host.indexOf('posttv-beta') >= 0 ? 'posttv-beta' : 'video';
                var ajaxUrl = (typeof self.$node.attr('data-video-uuid') != 'undefined' ? 'https://posttv-origin.washingtonpost.com/' + context + '/c/videojson/' + self.$node.attr('data-video-uuid') : '');
                $.ajax({
                    type: 'GET',
                    url: ajaxUrl,
                    contentType: 'application/json',
                    jsonpCallback: 'cb_' + self.$node.attr('data-video-uuid').replace(/-/g, ''), // avoid invalidating server-side caching by using customized callback function name.
                    data: {'resType': 'jsonp'},
                    dataType: 'jsonp',
                    cache: true,
                    success: function (data) {
                        initPlayer(data[0]);
                    },
                    error: function (e) {
                        if (typeof window.console === 'object') console.log('Failed to fetch video jsonp at: ' + ajaxUrl + ", e: " + e.message, e, JSON.stringify(e));
                        sendDataToSplunk('PostTV Player Data Error', ['event999'], {
                            errorCode: 'ptv_cannotRetrieveVideoJson',
                            errorText: 'Cannot retrieve video json data at: ' + ajaxUrl,
                            videoId: self.$node.attr('data-video-uuid')
                        });
                    }
                });
            }
        };

        // Process data-attr harvested by posttv-player
        var processAttr = function () {
            if (self.showPlayBtn)
                self.drawPlayBtn();
        };

        // Init options for player
        // PostTVPlayer uses same options as jw and will translate options to something different vendors understand if needed
        var initOptions = function (options) {
            if (TWP.PostTV.playerVendor == 'youtube' && self.isLive) {
                options.videoId = options.json.liveEventConfig.youtubeEventId;
                options.autoplay = node.getAttribute('data-autoplay').length ? node.getAttribute('data-autoplay') === '1' : 1;
                options.node = node;
                TWP.PostTV.initYoutubePlayer('youtube-player', options);
            } else {
                TWP.PostTV.initInlinePlayer(node, options);
            }
            // Tack on options provided by data-attr
            PubSub.subscribe(TWP.PostTV.EVENTS.PLAYER_CREATED, processAttr);
        };

        // Translates all options to work with vendors
        var translateOptions = function () {

            if (self.options.callbacks && self.options.callbacks.onWillChangeEmbedCode)
                if (TWP.PostTV.playerVendor == 'jw')
                    PubSub.subscribe(TWP.PostTV.EVENTS.WILL_CHANGE_EMBED_CODE, self.options.callbacks.onWillChangeEmbedCode);
                else
                    $(document).on(TWP.PostTV.EVENTS.WILL_CHANGE_EMBED_CODE, self.options.callbacks.onWillChangeEmbedCode);
        };

        var sendDataToSplunk = function(n, e, params){
            var browser = '', browserOS = '', browserVersion = '', webview = '', thinkAdBlock;
            if (window.TWP && TWP.PostTV && TWP.PostTV.BrowserInfo) {
                browser = TWP.PostTV.BrowserInfo.browser.toLowerCase();
                browserOS = TWP.PostTV.BrowserInfo.OS.toLowerCase();
                browserVersion = TWP.PostTV.BrowserInfo.version;
                webview = TWP.PostTV.BrowserInfo.webview;
                thinkAdBlock = TWP.PostTV.BrowserInfo.thinkAdBlock;
            }

            if (/*document.domain == 'washingtonpost.com' && */window.jQuery) {
                jQuery.ajax( {
                    url: '//videotracker.washingtonpost.com/index.html',
                    dataType: 'jsonp',
                    cache: false,
                    data: {
                        page: document.title.replace('\"', '\\\"'),
                        channel: 'wp - posttv',
                        type: 'video',
                        browser: browser,
                        browserOS: browserOS,
                        browserVersion: browserVersion,
                        webview: webview,
                        url: document.URL,
                        HTTP_REFERER: document.referrer,
                        evtName: n,
                        evtType: e,
                        evtTime: new Date().getTime(),
                        errorCode: params.errorCode || '',
                        errorText: params.errorText || '',
                        videoId: params.videoId || '',
                        sessionId: ((document.cookie.match(/s_vi=([^;]+)/) ? RegExp.$1 : '')),
                        playerType: 'posttv-embed',
                        thinkAdBlock: thinkAdBlock,
                        isUnloading: JSON.stringify(TWP.isUnloading)
                    }
                } );
            }
        };

        // Init options after correct player has been loaded
        PubSub.subscribe('player_script_loaded', function () {
            translateOptions();
            initOptions(self.options);
        });

        // Call function to begin process of creating PostTVPlayer
        getVideoData();

        /*
         / PostTvPlayer methods - everything that is done differently in ooyala and jw can be unified
         / by PostTvPlayer object
        */
        self.playUuid = function (uuid, args) {
            args = $.extend({ 'methodeUuid': uuid }, args);
            if (TWP.PostTV.playerVendor == 'jw')
                TWP.PostTV.players[node.id].onPlayNextVideo(args);
            else
                TWP.PostTV.players[node.id].onPlayNextVideo(TWP.PostTV.EVENTS.PLAY_NEXT_VIDEO, args);
        };

        /*
        / Will move player by appending it to $el
        / Player will continue from state it was in before movement
        */
        self.movePlayer = function ($el) {
            if (!($el instanceof jQuery)) {
                console.log('movePlayer: not a valid jquery obj');
                return;
            }

            function saveState (player) {
                self.state = {};
                self.state.playing = player.player.isPlaying();
                self.state.playheadTime = player.playheadTime;
                self.state.hasPlayedAd = player.player.hasPlayedAd();
            }

            function restoreState (player) {
                if (!self.state.playing) {
                    var playToken = PubSub.subscribe(TWP.PostTV.EVENTS.PLAYING, function (msg, data) {
                        player.seek(self.state.playheadTime);
                        PubSub.unsubscribe(playToken);
                    });
                    if (self.$elBtn)
                        self.$elBtn.show();
                }
                else {
                    player.seek(self.state.playheadTime);
                }
            }

            if (typeof TWP.PostTV.players[node.id] !== 'undefined') {
                var player = TWP.PostTV.players[node.id];
				if (player.args && player.args.type == 'flash') {
					console.log('Player can only be moved in html5 mode');
					return;
				}
                saveState(player);
                $el.prepend(self.$node);

                var createdToken = PubSub.subscribe(TWP.PostTV.EVENTS.PLAYER_CREATED, function () {
                    if (self.state) {
                        restoreState(player);
                    }
                    PubSub.unsubscribe(createdToken);
                });
            }
        };

        self.drawPlayBtn = function () {
            // avoid drawing multiple times to avoid nasty infinite loop bug in flash player
            if (self.$node.find('.ptv-button') && self.$node.find('.ptv-button').length > 0) {
                return;
            }

            function setSize () {
                var width = self.$node.width();
                if (width <= 300) { // Width is past breakpoint which will manipulate display of play btn
                    self.$node.addClass('sm-player');
                }
                else {
                    self.$node.removeClass('sm-player');
                }
            }

            // Create els to be inserted with play button
            self.$elBtn = $("<div>", {'class': "ptv-button"});
            var $promoPlay = $('<i class="fa fa-play"></i><span class="ptv-promo-play-prompt franklin-bold">Play Video</span><span class="ptv-promo-play-duration franklin-light">' + self.readableDuration +'</span>');
            self.$elBtn.append($promoPlay);
            self.$elBtn.click(function () {
                var $that = $(this);
                if (typeof TWP.PostTV.players[node.id] !== 'undefined') {
                    TWP.PostTV.players[node.id].play();
                    $(this).hide();

                    // Extend onPlayCompleted to show play-btn
                    PubSub.subscribe(TWP.PostTV.EVENTS.PLAY_COMPLETED, function (msg, data) {
                        if (data.playerContainerId === node.id) {
                            self.$elBtn.show();
                        }
                    });
                }
            });
            if (typeof TWP.PostTV.players[node.id] !== 'undefined') {
                self.$node.prepend(self.$elBtn);

                // Hide the play button when video starts to play, just in case
                PubSub.subscribe(TWP.PostTV.EVENTS.AD_STARTED, function (msg, data) {
                    if (data.playerContainerId === node.id) {
                        self.$elBtn.hide();
                    }
                });
                PubSub.subscribe(TWP.PostTV.EVENTS.PLAYING, function (msg, data) {
                    if (data.playerContainerId === node.id) {
                        self.$elBtn.hide();
                    }
                });
            }
        };

        if (contextPath.indexOf('posttv-beta') > -1) {
            sendDataToSplunk('PostTV Player posttv-beta', ['event994'], {
                errorCode: 'ptv_loadingBeta',
                errorText: 'posttv-player.js loaded on posttv-beta',
                videoId: $('#'+node.id).attr('data-video-uuid')
            });
        }

        return {
            playUuid: self.playUuid,
            drawPlayBtn: self.drawPlayBtn,
            movePlayer: self.movePlayer
        };
    };

    return new createPlayer();
};
