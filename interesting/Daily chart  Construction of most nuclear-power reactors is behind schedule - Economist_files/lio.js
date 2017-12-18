
if(typeof window.jstag !== 'object'){
    // if jstag object doesnt exist we are loading sync
    // set master variable so we can block the outlio load
    window.liosetup = window.liosetup || {};
    window.liosetup.sync = true;

    // continue loading the main collection tag
    window.jstag = function() {
      var t = {
              _q: [],
              _c: {},
              ts: (new Date()).getTime(),
              ver: "2.0.0"
          },
          w = window,
          d = document,
          l = false,
          async = true,
          as = Array.prototype.slice;
      t.init = function(c) {
          t._c = c;

          // begin load of core tag
          // in > 2.0.0 this tag will handle loading io based on account
          // and no longer require changes to async tag
          if(!c.synchronous){
            t.loadtagmgr(c);
          }

          return this;
      };
      t.loadtagmgr = function(c){
        var newtag = document.createElement("script");
        newtag.type = "text/javascript", newtag.async = !0, newtag.src = c.url + "/api/tag/" + c.cid + "/lio.js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(newtag, i)
      };

      function chainable(fn) {
        return function() {
          fn.apply(this, arguments);
          return this;
        };
      }

      function queueStub() {
        var args = [ "ready" ].concat(as.call(arguments));
        return chainable(function() {
          args.push(as.call(arguments));
          this._q.push(args);
        });
      }

      t.ready = queueStub();
      t.send = queueStub("send");
      t.mock = queueStub("mock");
      t.identify = queueStub("identify");
      t.pageView = queueStub("pageView");
      t.bind = chainable(function() { t._q.push([e, as.call(arguments, 1)]); });
      t.block = chainable(function() { t._c.blockload = true; });
      t.unblock = chainable(function() { t._c.blockload = false; });

      return t;
    }();

    var initObj = {
        "cid": "888902b751a3ee8c4b60bb6b75283052",
        "url": "//api.lytics.io" || "//c.lytics.io",
        "synchronous":true,
        "min": false
    };

    // check for the cross domain cookie setting param
    if(typeof window.liosetup !== 'undefined' && window.liosetup.loadid !== undefined){
        initObj.loadid = window.liosetup.loadid;
    }

    // validate that we have url and cid or fail
    if( initObj.cid == "" || initObj.url == "" ){
        console.log("lytics javascript tag configured incorrectly, missing required url or cid")
    }else{
        window.jstag.init(initObj);
    }
}

// load the core collection library
// upon moving to >= 2.0.0 the jstag.load method was removed from the async tag
// so that the tag endpoint would control the loading, if that function exists we
// need to fallback to the legacy io.js
if(window.jstag && !window.jstag.isLoaded && window.jstag._c && typeof window.jstag.load !== 'function'){
    (function(d, w) {
        var filename,
            filepath,
            eventblock = false,
            majorversion = 1 || 1,
            minified = !!((w.jstag._c.min)),
            url = w.jstag._c.url || '//c.lytics.io';

        // determine filepath
        if(majorversion >= 2){
            filepath = '/static/v'+majorversion+'/';
        }else{
            filepath = '/static/';
        }

        // determine file output
        if(minified){
            filename = 'io.min.js';
        }else{
            filename = 'io.js';
        }

        // apply account level overrides
        if(eventblock){
            w.jstag._c.blockload = true;
        }

        var ioloader = d.createElement('script');
        ioloader.type = 'text/javascript';
        ioloader.src = url + filepath + filename;
        d.getElementsByTagName('head')[0].appendChild(ioloader);
    }(document, window));
}

// set the stream and fire the first event
window.jstag.ready(function(){
    if(typeof window.liosetup !== 'undefined' && window.liosetup.stream !== undefined){
        window.jstag.config.stream = window.liosetup.stream;
    }

    // in the case of segment we need to avoid firing the initial page view twice, let them handle it
    if (window.analytics && window.analytics.Integrations && typeof window.analytics.Integrations.Lytics !== 'undefined') {
      return;
    }
    window.jstag.send();
})




var ly_cid = "888902b751a3ee8c4b60bb6b75283052";

(function(d, w) {
  if(w.liosetup && w.liosetup.dimension){
    w.liosetup.gaDimension = w.liosetup.dimension;
  }
  if(w.liosetup && w.liosetup.gaDimension){
    w.liosetup.gaSegmentDimension = w.liosetup.gaDimension;
  }

  w.lio = {
    account: {
      id: "888902b751a3ee8c4b60bb6b75283052"
    },
    loaded: false,
    pathforaLoaded: false,
    lychunk: "",
    apiroot: "https://api.lytics.io" || "https://api.lytics.io",
    cdnroot: "https://c.lytics.io" || "https://c.lytics.io",
    cookie: d.cookie,
    hasEntity: false,
    sync: !!w.liosetup && w.liosetup.sync || false,
    fields: !!w.liosetup && w.liosetup.fields || "",
    stream: !!w.liosetup && w.liosetup.stream || "default",
    data: {},
    blacklist:[],
    isBlacklisted: function(suspect){
      return w.lio.blacklist.indexOf(suspect) !== -1;
    },
    segmentsCookie: {},
    segmentsHash: {},
    segmentsString: "",
    segmentsArray: [],
    integrations: { // monitor the status of integration responses [ 200:success, 201:validated (if necessary) 0:na, 500:failed, 400:missing]
      optimizely: 0,
      tealium: 0,
      gtm: 0,
      googleAdsIntegration: 0,
      googleAnalyticsDimension: 0,
      googleAnalyticsUserDimension: 0,
      googleAnalyticsUserid: 0,
      facebookAds: 0,
      addthis: 0,
      qubit: 0,
      googleDFP: 0,
      adroll: 0,
      customDataLayer: 0,
      cookieData: 0,
      pathfora: 0
    },
    integrationsConfig:{
      hasActiveCampaign: false,
      allowPathfora: true,
      googleAdsIntegration: null,
      customCookieKeys: ["mm-logged-in-state","mlUserID","ec_uid"],
      customDataKeys: []
    },
    integrationTicker: null,       // becomes the loop ticker
    integrationTickerPace: 100,    // try every 100ms
    integrationCounter: 0,         // counts loop iterations
    integrationCounterMax: 600,    // retry every 100 ms for 30 seconds
    debug: !!w.liosetup && w.liosetup.debug,
    debugMsgs: [],
    DOMLoaded: false,
    onDOMready: function(fns) {
      var listener,
          handler,
          doc = d,
          hack = doc.documentElement.doScroll,
          domContentLoaded = 'DOMContentLoaded',
          loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

      if (!loaded) {
        doc.addEventListener(domContentLoaded, handler = function () {
          doc.removeEventListener(domContentLoaded, handler);
          w.lio.DOMLoaded = true;
          while (listener = fns.shift()) {
            listener(w.lio.data);
          }
        })
      } else {
        w.lio.DOMLoaded = true;
        while (listener = fns.shift()) {
          setTimeout(listener, 0, w.lio.data);
        }
      }
    },
    addDebugMessage: function(m) {
      w.lio.debugMsgs.push(m);
    },
    checkIntegrations: function() {
      w.lio.integrationCounter++;

      // pathfora: if loaded before we need to add all the callbacks
      if (w.lio.integrations.pathfora === 0 && !w.lio.isBlacklisted('pathfora')) {
        if (w.pathfora) {
          if (w.pathfora.callbacks && w.pathfora.callbacks.length) {
            for (var i = w.pathfora.callbacks.length-1; i >= 0; i--) {
              w.pathfora.callbacks[i](w.lio.data);
              w.pathfora.callbacks.pop();
            }

            if (w.pathfora.callbacks.length) {
              w.lio.addDebugMessage('Unable to load pathfora callbacks.');
              w.lio.integrations.pathfora = 500;
            } else {
              w.lio.integrations.pathfora = 200;
            }
          } else {
            w.lio.integrations.pathfora = 201;
          }
        }
      }

      // optimizely: customTags must be pushed in prior to loading the optimizely tag, if tag already exists fail forever
      if(w.lio.integrations.optimizely === 0 && !w.lio.isBlacklisted('optimizely')){
        if(w.optimizely){
          w.lio.addDebugMessage("Optimizely loaded before Lytics. Unable to push segments.");
          w.lio.integrations.optimizely = 501;
        }else{
          w.optimizely = w.optimizely || [];
          w.optimizely.push(["customTag", w.lio.segmentsCookie]);
          w.optimizely.push(["activate"]);
          w.lio.integrations.optimizely = 201;
        }
      }

      // optimizely is unique in that we have to push our audiences before their tag loads, the following will validate that they
      // have in fact received the audiences passed above for fail
      if(w.lio.integrations.optimizely === 201){
        if(w.optimizely && w.optimizely.data && w.optimizely.data.customTags){
          w.lio.integrations.optimizely = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          w.lio.addDebugMessage("Lytics segments failed to load in Optimizely.");
          w.lio.integrations.optimizely = 500;
        }
      }

      // facebook ads: the facebook ads tag must be initialized before our tag, try until it exists or we hit max fail count
      if(w.lio.integrations.facebookAds === 0 && w.lio.segmentsCookie && !w.lio.isBlacklisted('facebook_ads')){
        if(w._fbq){
          w._fbq = w._fbq || [];
          var lh = {};

          // facebook only accepts strings as the value so we must use string of true here
          for (var p in w.lio.segmentsCookie) { if(p !== "" && p !== "not_found"){lh[p] = "true";}}

          // only make the call if we have segments
          if(Object.keys(lh).length){
            w._fbq.push(["track", "Lytics Audiences", lh]);
          }

          w.lio.integrations.facebookAds = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          w.lio.addDebugMessage("Unable to add Facebook audience.");
          w.lio.integrations.facebookAds = 500;
        }
      }

      // google analytics: the google analtyics tag must be initialized before our tag, try until it exists or we hit max fail count
      if(w.lio.integrations.googleAnalyticsDimension === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.liosetup && w.liosetup.gaSegmentDimension){
          w.ga('set', w.liosetup.gaSegmentDimension, w.lio.segmentsString);
          w.lio.integrations.googleAnalyticsDimension = 200;
          w.ga('send', 'event', 'lytics', 'segments', {'nonInteraction': 1});
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.liosetup && w.liosetup.gaSegmentDimension){
            w.lio.addDebugMessage("Unable to process google analytics custom dimension.");
            w.lio.integrations.googleAnalyticsDimension = 500;
          }
        }
      }

      if(w.lio.integrations.googleAnalyticsUserDimension === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.liosetup && w.liosetup.gaUserDimension){
          w.ga('set', w.liosetup.gaUserDimension, w.lio._uid);
          w.lio.integrations.googleAnalyticsUserDimension = 200;
          w.ga('send', 'event', 'lytics', 'user_dimension', {'nonInteraction': 1});
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.liosetup && w.liosetup.gaUserDimension){
            w.lio.addDebugMessage("Unable to process google analytics custom user dimension.");
            w.lio.integrations.googleAnalyticsUserDimension = 500;
          }
        }
      }

      if(w.lio.integrations.googleAnalyticsUserid === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.liosetup && w.liosetup.gaUserId){
          w.ga('set', '&uid', w.lio.getCookie("seerid"));
          w.lio.integrations.googleAnalyticsUserid = 200;
          w.ga('send', 'event', 'lytics', 'user_id', {'nonInteraction': 1});
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.liosetup && w.liosetup.gaUserId){
            w.lio.addDebugMessage("Unable to process google analytics user id.");
            w.lio.integrations.googleAnalyticsUserid = 500;
          }
        }
      }

      // google adwords integration handler
      if(w.lio.integrations.googleAdsIntegration === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.lio.integrationsConfig && w.lio.integrationsConfig.googleAdsIntegration){
          // get the google web property
          ga(function() {
            var trackers = ga.getAll(),
                trackingIds = [];

            for (var i = 0, len = trackers.length; i < len; i++) {
              var id = trackers[i].get('trackingId'),
                  name = trackers[i].get('name');

              id && trackingIds.push({"name":name, "id":id});
            }

            for (i = 0; i < w.lio.integrationsConfig.googleAdsIntegration.length; i++) {
              var integrationsConfig = w.lio.integrationsConfig.googleAdsIntegration[i];

              for (var j = 0; j < trackingIds.length; j++) {
                if(integrationsConfig.web_property === trackingIds[j].id){
                  var name = trackingIds[j].name;
                  w.ga(name + '.require', 'displayfeatures');
                  w.ga(name + '.set', integrationsConfig.segments_dimension, w.lio.segmentsString);
                  w.ga(name + '.set', integrationsConfig.user_id_dimension, w.lio._uid);
                  w.ga(name + '.send', 'event', 'lytics', 'lytics_google_integration', {'nonInteraction': 1});
                }
              }
            }
          });
          w.lio.integrations.googleAdsIntegration = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.lio.integrationsConfig && w.lio.integrationsConfig.googleAdsIntegration){
            w.lio.addDebugMessage("Unable to process google ads integration.");
            w.lio.integrations.googleAdsIntegration = 500;
          }
        }
      }

      // google dfp integration handler: the lio.js script must be loaded in the <head></head> AFTER
      // the google dfp tags, so basically at the end of the document head
      if(w.lio.integrations.googleDFP === 0 && !w.lio.isBlacklisted('google_dfp')){
        if(w.googletag){
          w.googletag.cmd.push(function() {
            w.googletag.pubads().setTargeting("LyticsSegments", w.lio.segmentsArray);
          });

          if(!w.lio.sync){
            w.lio.addDebugMessage("Using Lytics async tag to integrate with DFP. No audiences passed.");
            w.lio.integrations.googleDFP = 201;
          }else{
            w.lio.integrations.googleDFP = 200;
          }
        }else{
          w.lio.addDebugMessage("GoogleDFP tags not loaded before Lytics. Unable to push segments.");
          w.lio.integrations.googleDFP = 501;
        }
      }

      // addthis: the addthis tag must be initialized before our tag, try until it exists or we hit max fail count
      if(w.lio.integrations.addthis === 0 && w.lio.segmentsCookie && !w.lio.isBlacklisted('add_this')){
        if(w.addthis){
          var ckParts,
              ckNew = [];

          if(w.lio.getCookie('__attag')){
            ckParts = w.lio.getCookie('__attag').split(',');

            // remove the old segments from the cookie
            for (var i = 0; i < ckParts.length; i++) {
                if( ckParts[i].indexOf("lio:") > -1 ){
                  // do nothing, we are removing all of the lytics segment slugs
                }else{
                  ckNew.push(ckParts[i]);
                }
            }

            // add the current segments to the cookie in order to keep our tags updated without
            // disturbing other params passed outside of lytics we append lio: to each segment slug
            for (var lioKey in w.lio.segmentsCookie) {
              ckNew.push('lio:'+lioKey);
            }
            w.lio.setCookie('__attag', ckNew.join(), '43829'); // 4829 = one month
          }

          for (var s in w.lio.segmentsCookie) {
            if(s !== "" && s !== "not_found"){
              w.addthis.user.tag('lio:' + s);
            }
          }
          w.lio.integrations.addthis = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          w.lio.addDebugMessage("Unable to add addthis segments.");
          w.lio.integrations.addthis = 500;
        }
      }

      // tealium data layer
      if(w.lio.integrations.tealium === 0 && w.jstag && w.utag_data && !w.lio.isBlacklisted("tealium")){
        w.jstag.send(w.lio.stream, w.utag_data);
        w.lio.integrations.tealium = 200;
      }

      // gtm data layer
      if(w.lio.integrations.gtm === 0 && w.jstag && (w.dataLayer || w.__dataLayer) && !w.lio.isBlacklisted("gtm")){
        if(typeof w.dataLayer !== 'undefined'){
          if(typeof w.dataLayer.push === 'function'){
            // for gtm we need to check the length of the object in the array. in all my testing it looks like the
            // default events are all less than 3 keys, in some cases good data is being passed as a single key so
            // we can't just kill anything less than 3. need to do a check for event, if its longer than 2 or does
            // not include an event key we include it. that should catch custom events as well as custom data.
            for(var dk = 0; dk < w.dataLayer.length; dk++) {
                if(Object.keys(w.dataLayer[dk]).length > 2 || !("event" in w.dataLayer[dk])){
                  w.jstag.send(w.lio.stream, w.dataLayer[dk]);
                }
            }

            w.dataLayer.push({'lytics_segments': w.lio.segmentsHash});
            w.lio.integrations.gtm = 200;
          }
        }

        if(typeof w.__dataLayer !== 'undefined'){
          // same as above just old naming
          if(typeof w.__dataLayer.push === 'function'){
            for(var dk = 0; dk < w.__dataLayer.length; dk++) {
                if(Object.keys(w.__dataLayer[dk]).length > 2 || !("event" in w.__dataLayer[dk])){
                  w.jstag.send(w.lio.stream, w.__dataLayer[dk]);
                  w.lio.integrations.gtm = 200;
                }
            }

            w.__dataLayer.push({'lytics_segments': w.lio.segmentsHash});
            w.lio.integrations.gtm = 200;
          }
        }
      }

      // qubit data layer
      if(w.lio.integrations.qubit === 0 && w.jstag && w.universal_variable && !w.lio.isBlacklisted("qubit")){
        w.jstag.send(w.lio.stream, w.universal_variable);
        w.lio.integrations.qubit = 200;
      }

      // adroll event integration
      if(w.lio.integrations.adroll === 0 && w.jstag && w.__adroll){
        for (var lioKey in w.lio.segmentsCookie) {
          var segfmt = "lytics_" + lioKey;
          w.__adroll.record_user({"adroll_segments": segfmt});
        }

        w.lio.integrations.adroll = 200;
      }

      // hidden by default but handy to make sure we aren't checking too often
      if(w.lio.debug && !(w.lio.integrationCounter % 10)){
        console.log("tick...");
      }

      // if debug is on then output each of the error messages
      if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
        clearInterval(w.lio.integrationTicker);
        if(w.lio.debug){
          if(!w.lio.debugMsgs.length){
            console.log("lytics integration completed without errors.");
          }else{
            for(var i = 0; i < w.lio.debugMsgs.length; i++){
              console.log(w.lio.debugMsgs[i]);
            }
          }
        }
      }

      // has cookie whitelist
      if(w.lio.integrations.cookieData === 0 && w.lio.integrationsConfig.customCookieKeys){
        var val, payload = {};

        // iterate over keys and get cookie value
        for (var i = 0, n = w.lio.integrationsConfig.customCookieKeys; i < n.length; i++) {
          val = w.lio.getCookie(n[i]);
          if(val){
            payload[n[i]] = val;
          }
        }

        // if the object is empty pass the 201 response to signify no results
        if(Object.keys(payload).length !== 0){
          w.jstag.send(w.lio.stream, payload);
          w.lio.integrations.cookieData = 200;
        }else{
          w.lio.integrations.cookieData = 201;
        }
      }

      // lytics custom data query
      if(w.lio.integrations.customDataLayer === 0 && typeof w.lio.integrationsConfig.customDataKeys !== 'undefined' && w.lio.integrationsConfig.customDataKeys !== null){
        var customKeys = w.lio.integrationsConfig.customDataKeys;

        var outboundPayload = {
          lyticsDataLayer: {}
        };

        // handle legacy data
        var legacy = false;
        if(typeof customKeys === 'string'){
          legacy = true;
          customKeys = [customKeys];
        }

        // process custom vars
        for (var i = 0; i < customKeys.length; i++) {
          var exists = true;
          var key;
          var value = w;
          var parts = customKeys[i].split("."); // parse dot notation

          for (var p = 0; p < parts.length; p++) {
            key = parts[p];
            value = value[key];

            if(typeof value === 'undefined'){
              exists = false;
              break;
            }
          }

          if(exists){
            // for legacy accounts we allowed for a single string rather than array, in this case we do not want
            // to remap anything, rather just pass the full object in a jstag.send event as to not mess up mapping
            // for all new implementations we remap the data to a safe lytics data layer and send once
            if(legacy){
              w.jstag.send(value);
              w.lio.integrations.customDataLayer = 200;
            } else {
              outboundPayload["lyticsDataLayer"][key] = value;
            }
          }
        }

        if(Object.getOwnPropertyNames(outboundPayload["lyticsDataLayer"]).length){
          w.jstag.send(outboundPayload);
          w.lio.integrations.customDataLayer = 200;
        }
      }

    },
    setCookie: function(name, value, minutes) {
      var date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      var expires = "expires=" + date.toUTCString();
      var path = "path=/";
      d.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + "; " + path + "; " + expires;
    },
    getCookie: function(name){
      var re = new RegExp(name + "=([^;]+)");
      var value = re.exec(decodeURIComponent(w.lio.cookie));
      var output = (value !== null) ? unescape(value[1]) : undefined;

      return output;
    },
    getQueryParam: function(name){
      var url = window.location.search,
          regex = new RegExp("[?;&]" + name + "(=?)(.*?)([;&]|$)"),
          results = regex.exec(url);

      if (!results) return null;
      if (!results[1]) return true;

      return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    _uid: null,
    // helper method to determine if user is member of segment
    inSegment: function(seg){
      return !!window.lio.segmentsHash[seg];
    },
    addPathfora: function(){
      if(w.lio.integrationsConfig){
        w.lio.pathforaLoaded = true;

        var pfScript = d.createElement('script');
          pfScript.async = 1;
          pfScript.type = 'text/javascript';
          pfScript.src = '//c.lytics.io/static/pathfora.min.js';
          pfScript.onload = w.lio.initPathfora;
        d.getElementsByTagName('head')[0].appendChild(pfScript);
      }
    },
    isPathforaPreview: function(){
      return !!(w.lio.getQueryParam('lytics_variation_preview_id'));
    },
    initPathfora: function(){
      var previewId = w.lio.getQueryParam('lytics_variation_preview_id')

      if(previewId){
        // if there is a preview id override all other pathfora configs
        var pfConfig = d.createElement('script');
          pfConfig.async = 1;
          pfConfig.type = 'text/javascript';
          pfConfig.src = w.lio.apiroot + '/api/program/campaign/variation/preview/'+w.ly_cid+'/'+previewId+'/config.js';
        d.getElementsByTagName('body')[0].appendChild(pfConfig);
      }else{
        // there is no override, if we need pathfora load the production level details
        var pfConfig = d.createElement('script');
          pfConfig.async = 1;
          pfConfig.type = 'text/javascript';
          pfConfig.src = w.lio.cdnroot + '/api/program/campaign/config/'+w.ly_cid+'/config.js';
        d.getElementsByTagName('body')[0].appendChild(pfConfig);
      }
    },
    keysForObject: Object.keys || function(obj) {
      var keys = [];

      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          keys.push(i);
        }
      }

      return keys;
    },
    flushCallbacks: function() {
      var fns = [];
      if(w.liosetup && w.liosetup.callback){
        // callbacks can either be an array of functions or a single function
        switch (typeof w.liosetup.callback) {
          case 'function':
            fns.push(w.liosetup.callback);
            break;
          case 'object':
            if (w.liosetup.callback.length) {
              fns = w.liosetup.callback;
            }
            break;
        }
      }

      w.lio.onDOMready(fns);
    },
    segmentscb: function(json) {
      // immediately unblock the jstag from sending events if the function doesnt
      // exist it either hasnt loaded or is legacy, set blockload to false on both
      // async config and main config to be safe
      if (w.jstag) {
        if (typeof  w.jstag.unblock == 'function') {
           w.jstag.unblock();
        }else{
          if(w.jstag.config){
            w.jstag.config.blockload = false;
          }
          if(w.jstag._c){
            w.jstag._c.blockload = false;
          }
        }
      }

      if (json.data && json.data.segments) {
        var segList = json.data.segments;
        for (var i = segList.length - 1; i >= 0; i--) {
          w.lio.segmentsHash[segList[i]] = segList[i];
          w.lio.segmentsArray.push(segList[i]);
        }
        w.lio.segmentsCookie = w.lio.segmentsHash;
        w.lio.segmentsString = w.lio.keysForObject(w.lio.segmentsHash).toString().replace(/,+/g, ',');
        w.lio.setCookie("ly_segs", w.lio.segmentsHash, 15);
        w.lio.data = json.data;

        // handle callbacks if we have any
        w.lio.flushCallbacks();
      }

      w.lio.loaded = true;

      // start integration check, check immediately then every 100ms thereafter
      w.lio.checkIntegrations();
      w.lio.integrationTicker = setInterval(w.lio.checkIntegrations, w.lio.integrationTickerPace);

      // load pathfora if account says so
      // if we have already loaded pathfora do not load again (prevents multi cid duplicate loads)
      if(!w.lio.pathforaLoaded){
        if(w.lio.integrationsConfig && w.lio.integrationsConfig.allowPathfora && (w.lio.integrationsConfig.hasActiveCampaign || w.lio.isPathforaPreview())){
          w.lio.addPathfora();
        }
      }
    },
    getEntity: function(payload){
      var apiurl, encodedpayload;

      // just a note but in a future version it would be awesome to be able to pull in the datalayer variables be it
      // custom, tealium, gtm, etc so that the entity is as accurate as possible but that requires making some big
      // changes to our existing integrations and will be handled in separate pr

      if(w.lio.hasEntity){
        return;
      }

      // if we have a payload add it to request or default
      if(typeof payload !== "undefined"){
        encodedpayload = encodeURIComponent(JSON.stringify(payload));
        apiurl = w.lio.apiroot + "/api/me/" + w.lio.lychunk + "?fields=" + w.lio.fields + "&state=" + encodedpayload + "&segments=true&callback=window.lio.segmentscb";
      }else{
        apiurl = w.lio.apiroot + "/api/me/" + w.lio.lychunk + "?fields=" + w.lio.fields + "&segments=true&callback=window.lio.segmentscb";
      }

      // make the request
      // if the sync tag is used, block loading
      if(w.lio.sync){
        if (document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive") {
          try {
            d.write('\x3Cscript type="text/javascript" src="' + apiurl + '">\x3C/script>');
            w.lio.hasEntity = true;
            return;
          }
          catch(err) {
            console.warn('Failed to initialize lytics synchronously: defaulting to asynchronous');
          }
        }else{
          console.warn('DOM already loaded, unable to load lytics synchronously: defaulting to asynchronous');
        }
      }

      // default to the async entity get
      var outlioScript = d.createElement('script');
      outlioScript.async = 1;
      outlioScript.type = 'text/javascript';
      outlioScript.src = apiurl;
      d.getElementsByTagName('head')[0].appendChild(outlioScript);
      w.lio.hasEntity = true;
    }
  };

  w.lio._uid = w.lio.getCookie("seerid");

  if (w.lio.getCookie("ly_segs")) {
    w.lio.segmentsCookie = JSON.parse(w.lio.getCookie("ly_segs"));
  }

  if(w.liosetup && w.liosetup.field && w.liosetup.value){
    if(!w.liosetup.field){
      w.lio.addDebugMessage("field is blank, Lytics audiences will not be loaded.");
    }

    if(!w.liosetup.value){
      w.lio.addDebugMessage("value is blank, Lytics audiences will not be loaded.");
    }

    w.lio.lychunk = w.ly_cid + "/" + w.liosetup.field + "/" + w.liosetup.value;
  } else {
    w.lio.lychunk = w.ly_cid + "/" + w.lio.getCookie("seerid");
  }

  // accounts using personalization will have a temporary block on their send events
  // we need to get the full payload to send along with the /me call in order to
  // handle the first page view usecase / speed up processing

  if(w.jstag && w.jstag.mock){
    if( w.jstag.config && !!w.jstag.config.blockload || w.jstag._c && !!w.jstag._c.blockload ){
      w.jstag.mock(function(q){
        w.lio.getEntity(q.data);
      })
    }else{
      w.lio.getEntity();
    }
  }else{
    w.lio.getEntity();
  }
}(document, window));

