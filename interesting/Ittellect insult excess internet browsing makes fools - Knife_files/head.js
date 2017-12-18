
try {
  (function (w, d) {



  var widgetsCfg = {
   "5Rrl_j7-QRbsia-v" : {
      "id" : "5Rrl_j7-QRbsia-v",
      "company_id" : "J18noiaiBmSZko2I",
      "payload" : {
         "cols" : "3",
         "blockTitleFont" : "arial",
         "descriptionFontSize" : "",
         "clickableItem" : "1",
         "blockTitleFontStyle" : "normal",
         "with_title" : "1",
         "titleLineHeight" : "",
         "gaLoadAction" : "",
         "gaClickCategory" : "",
         "gaShowAction" : "",
         "blockTitleLineHeight" : "",
         "widgetTitleEdited" : "Стандартный виджет",
         "autoHideInSec" : 0,
         "gaClickValueType" : "none",
         "no_image" : 0,
         "with_description" : 0,
         "insertBeforeElemSelect" : "",
         "with_footer" : 0,
         "titleFontSize" : "",
         "blockTitleFontWeight" : "400",
         "descriptionFontWeight" : "400",
         "headLinesCount" : "4",
         "gaClickOnce" : 0,
         "blockTitleFontSize" : "24px",
         "descriptionMarginTop" : "",
         "title" : "Похожие статьи",
         "gaClickAction" : "",
         "gaLoadCategory" : "",
         "descriptionLineHeight" : "",
         "gaShowLabel" : "",
         "gaClickLabel" : "",
         "onlyAdsNeeded" : 0,
         "gaShowOnce" : 1,
         "titleFontWeight" : "400",
         "with_brand" : 1,
         "descLinesCount" : "5",
         "swapAdPlatesIntersectPercentage" : 0.01,
         "thumbnailARWidth" : "",
         "custom_recs_file" : "",
         "preserve_rows_quantity" : 0,
         "waitForElemTimeout" : 0.001,
         "descriptionFontStyle" : "normal",
         "widgetType" : "plain",
         "adSlotManager" : [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
         ],
         "allowWidgetClose" : 0,
         "swapAdPlateByClick" : 1,
         "currentTestVariant" : null,
         "illustrationType" : "wide",
         "cutTextUntilThumbnailBottom" : 0,
         "external_recs_template" : "",
         "rows" : "3",
         "with_block_title" : "1",
         "descriptionFont" : "arial",
         "theme" : "default",
         "titleFont" : "arial",
         "view" : "plates",
         "widgetMinWidth" : "",
         "ignoreAgeCheck" : 0,
         "noAnchorNeeded" : 1,
         "illustrationSize" : 6,
         "responsiveTitleFont" : "1",
         "hasImages" : "1",
         "swapAdPlatesTimeout" : 99999,
         "te" : [],
         "thumbnailARHeight" : "",
         "windowMinWidth" : "",
         "widgetMaxWidth" : "",
         "font" : "arial",
         "utm_hash_from" : "",
         "hasPreloader" : 0,
         "titleMarginTop" : "",
         "underHeaderLine" : "1",
         "presetName" : "footerPlates",
         "with_linkless_brand" : 0,
         "gaShowCategory" : "",
         "adLabel" : "Нативная реклама",
         "openInNewTab" : 0,
         "gaLoadLabel" : "",
         "windowMaxWidth" : "",
         "utm_from" : "?utm_source=relap",
         "loadPriority" : 200,
         "gaLoadOnce" : 1,
         "titleFontStyle" : "normal"
      },
      "user_id" : "J18noiaiBmSZko2I",
      "domain_id" : "VGKEOg",
      "is_enabled" : true
   }
}
;
  var widgetKeys = [];

  for (var key in widgetsCfg) {
    widgetKeys[key] = null;
  }

  
  var extConfig = {
   "IvMjlQ" : {
      "src" : "https://dmg.digitaltarget.ru/1/1129/i/i?a=129&e=ADpgaxQI&i=382758238",
      "timeout" : 10,
      "type" : "img"
   },
   "QxWm6Q" : {
      "type" : "img",
      "src" : "https://sync.dmp.otm-r.com/match/relap?id=ADpgaxQI",
      "timeout" : 500
   },
   "tns" : {
      "timeout" : 10,
      "src" : "http://www.tns-counter.ru/V13a****gpmd_ad/ru/UTF-8/tmsec=gazprommedia_cid1021987-posid1324732/zDn8wJ",
      "type" : "img"
   },
   "0ciWmw" : {
      "type" : "img",
      "src" : "https://ssp1.rtb.beeline.ru/userbind?src=relap&id=ADpgaxQI",
      "timeout" : 500
   },
   "Ha9DZQ" : {
      "type" : "img",
      "timeout" : 10,
      "src" : "https://sync.1dmp.io/pixel.gif?pid=w&cid=d532925e-370a-4913-9238-e8b91206247f&uid=ADpgaxQI"
   },
   "c9C09Q" : {
      "src" : "https://x01.aidata.io/0.gif?pid=5849182&id=ADpgaxQI",
      "timeout" : 1000,
      "type" : "img"
   }
}
;
  
  
  
  extConfig['abp'] = {
    'type':     'js',
    'timeout':  500,
    'code':     function (params, finished) {
      var px           = 'https://relap.io/abp.gif?ch=*&rn=*',
          checksRemain = 2,
          error1       = false,
          error2       = false,
          random       = Math.random() * 11;

      function checkImages() {
        if (--checksRemain) return;
        if (!error1 && error2) params.push({ 'name': 'wlabp', 'value': '1' });
        finished();
      }

      var img1     = new Image();
      img1.onload  = checkImages;
      img1.onerror = function() {
        error1 = true;
        checkImages();
      }
      img1.src = px.replace(/\*/, 1).replace(/\*/, random);

      var img2     = new Image();
      img2.onload  = checkImages;
      img2.onerror = function() {
        error2 = true;
        checkImages();
      }
      img2.src = px.replace(/\*/, 2).replace(/\*/, random);
    }
  };
  
  
  
  extConfig['rlpadbf'] = {
    'type':     'img',
    'timeout':  500,
    'src':      "https://relap.io/ads/ads.js"
  };
  
  
  


  var optsParam = '';
  var opts;

  try {
    opts = decodeURIComponent(optsParam);
    var tmpElem = d.createElement('div');
    tmpElem.innerHTML = opts;

    opts = JSON.parse(tmpElem.textContent);
  } catch (e) {
    opts = {};
  }

  
  if (opts.restart) {
    delete w.relap;
    delete w.relapStatGathered;
  }

  
  if (w.relap) {
    debugLog("head.js should be one", "warn");
    log('In the End, there can be only one');
    return;
  }

  log('widgetsCfg');
  log(widgetsCfg);
  log('extConfig');
  log(extConfig);

  var targetUrl = 'https://knife.media/insult/';
  getTargetUrl();

  debugLog(targetUrl, "url");

  var seed = 'FJdn5l8BE5a9dyfVnOY';

  var extParamsReady = false;
  var extParams = [];

  var pureWindow = new PureWindow;

  var relap = {
    callbackRegistry: {},
    onLoadImages: makeImgQueue(),
    onShowImages: makeImgQueue(),
    gaEventStatus: {},
    widgetInstances: {},
    swapRec: function(opt) {
      try {
        relap.widgetInstances[opt.widgetInstanceId].swapRec(opt);
      } catch (e) {
        console.log(e);
      }
    },
    getPureWindow: pureWindow.get,
  };

  w.relap = relap;

  onFuncReady({
    funcName: 'relapHeadjsLoaded',
    args: [{
      seed: seed,
    }],
    onError: function() {
      log('relapHeadjsLoaded failed because func is not found for head.js');
    }
  });

  if (!w.relapStatGathered) {
    w.relapStatGathered = true;
    var img = new Image();
    img.src = 'https://relap.io/api/v1/pixel.gif' +
    '?event=hit' +
    '&url=' + encodeURIComponent(w.location.href) +
    '&referrer=' + encodeURIComponent(d.referrer) +
    '&_s=E0ZD_w' +
    getPageHashParam() ;
  }

  relap.ar = function(id) {
    

    
    return;

    if (!checkWidgetActive(id) ||
        (widgetsCfg[id].payload.noAnchorNeeded &&
        widgetsCfg[id].payload.insertBeforeElemSelect)) {
      return;
    }

    widgetsQueue.push(id);
  };

  relap.loadMore = function() {
    loadMultiAnchor();
    loadInsets();

    function loadMultiAnchor() {
      var multiAnchorElems = d.querySelectorAll('.js-relap-multi-anchor[data-id]:not([data-init])');

      if (!multiAnchorElems.length) return;

      for (var i = 0; i < multiAnchorElems.length; i++) {
        var dataId = multiAnchorElems[i].getAttribute('data-id');
        var widgetCfg = widgetsCfg[dataId];
        if (!widgetCfg) continue;

        widgetCfg.isQueued = false;
        widgetsQueue.push(dataId);
      }
    }

    function loadInsets() {
      for (var key in widgetsCfg) {
        var payload = widgetsCfg[key].payload;

        if (payload.widgetType == 'inset') {
          var widgetCfg = widgetsCfg[key];
          if (!widgetCfg) continue;

          widgetCfg.isQueued = false;
          widgetsQueue.push(key);
        }
      }
    }
  };

  relap.getWidgetCfg = function(id) {
    if (!widgetsCfg[id]) {
      log('relap: wrong anchor id');
      return null;
    }

    return widgetsCfg[id];
  };

  var syncLoader = {
    'queue': [],
    'init': function () {
      var self = this;
      self.queue.push = function (task) {
        Array.prototype.push.apply(self.queue, [task]);
        if (self.queue.length == 1) task();
      }

      self.queue.next = function () {
        self.queue.shift();
        if (self.queue.length > 0) self.queue[0]();
      }
    }
  };
  syncLoader.init();

  var widgetsQueue = (function() {
    var queue = [];

    var processFirstItem = function() {
      if (!queue.length) return;

      var id = queue[0];
      var src = buildSrcString(id);
      log('widgetsQueue next: ' + widgetsCfg[id].payload.widgetType + ', id: ' + id);
      addWidgetScript(id, src);
    };

    var pubObj = {
      queue: queue,
      push: function(widgetId) {
        if (widgetsCfg[widgetId].isQueued) return;

        widgetsCfg[widgetId].isQueued = true;
        queue.push(widgetId);

        if (!extParamsReady || !queue.length) return;

        if (queue.length == 1) {
          processFirstItem();
        }
      },
      next: function() {
        queue.shift();
        if (queue.length) processFirstItem();
      },
      process: function() {
        processFirstItem();
      }
    };

    return pubObj;
  })();

  var extConfigurer = new ExtConfigurer({
    cfg: extConfig,
    callbackRegPath: 'window.relap.callbackRegistry',
    callbackReg: relap.callbackRegistry,
    extParams: extParams,
    complete: function() {
      log('extParamsReady');
      log(extParams);
      extParamsReady = true;
      widgetsQueue.process();
    }
  });

  
  var docReadyState = d.readyState;
  var addWidgetInstancesIntervalId;
  log('document readyState: ' + d.readyState);
  if (docReadyState == 'complete' ||
      docReadyState == 'loaded' ||
      docReadyState == 'interactive') {
    onDOMContentLoaded();
  } else {
    w.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);

    if (opts.ignore_load_priority) {
      addWidgetInstancesIntervalId = setInterval(addWidgetInstances, 300);
    }
  }

  function getTargetUrl() {
    if (targetUrl) return;

    var relapUrlEl = d.querySelector('meta[name=relap-url]');

    if (relapUrlEl) {
      var relapUrl = relapUrlEl.getAttribute('content');
    }

    if (relapUrl) {
      targetUrl = relapUrl;
      return;
    }

    var canonicalEl = d.querySelector('link[rel=canonical]');

    if (canonicalEl) {
      var canonicalUrl = canonicalEl.getAttribute('href');
    }

    if (canonicalUrl) {
      targetUrl = canonicalUrl;
      return;
    }

    var ogUrlEl = d.querySelector('meta[property=\"og:url\"]');

    if (ogUrlEl) {
      var ogUrl = ogUrlEl.getAttribute('content');
    }

    if (ogUrl) {
      targetUrl = ogUrl;
      return;
    }

    if (w.location.href) {
      targetUrl = w.location.href;
      return;
    }
  }

  function onDOMContentLoaded() {
    addWidgetInstances();
    clearInterval(addWidgetInstancesIntervalId);
    w.removeEventListener('DOMContentLoaded', onDOMContentLoaded, false);
  }

  function addWidgetInstances() {
    if (!d.body) return;

    var arr = [];

    for (var id in widgetsCfg) {
      var payload = widgetsCfg[id].payload;
      var testVariants = payload.testVariants;
      var currentTestVariant = payload.currentTestVariant;
      
      if (testVariants &&
          currentTestVariant &&
          testVariants[currentTestVariant] &&
          testVariants[currentTestVariant].cfg) {
        mixInPayload(testVariants[currentTestVariant].cfg);
      }
      var widgetType = payload.widgetType;

      switch(widgetType) {
        case 'inset':
          payload.loadPriority = payload.loadPriority || 300;
          break;
        case 'plain':
        case 'side':
          payload.loadPriority = payload.loadPriority || 200;
          break;
        case 'toster':
        case 'popup':
        default:
          payload.loadPriority = payload.loadPriority || 100;
          break;
      }

      arr.push(widgetsCfg[id]);
    }

    arr.sort(compareByLoadPriority);

    for (var i = 0; i < arr.length; i++) {
      var id = arr[i].id;
      var anchorEl = d.getElementById(id);
      var multiAnchorElems = d.querySelectorAll('.js-relap-multi-anchor[data-id="' + id + '"]:not([data-init])');

      if (!anchorEl && !multiAnchorElems.length &&
          (!widgetsCfg[id].payload.noAnchorNeeded ||
          !widgetsCfg[id].payload.insertBeforeElemSelect) &&
          (widgetsCfg[id].payload.widgetType != 'inset' &&
          widgetsCfg[id].payload.widgetType != 'toster' &&
          widgetsCfg[id].payload.widgetType != 'popup')) {

        debugStatus(id, "warn", "widget_not_required");
        debugEnd(id);
        continue;
      }

      log('widgetsQueue.push: ' + widgetsCfg[id].payload.widgetType + ', id: '+ id);
      widgetsQueue.push(id);
    }

    function compareByLoadPriority(a, b) {
      return b.payload.loadPriority - a.payload.loadPriority;
    }

    function mixInPayload(obj) {
      for (var key in obj) {
        if (!obj.hasOwnProperty(key) || !obj[key]) continue;
        payload[key] = obj[key];
      }
    }
  }

  function checkWidgetActive(id) {
    if (!widgetsCfg[id]) {
      log('relap: wrong anchor id: ' + id);
      return false;
    }

    if (!widgetsCfg[id].is_enabled) {
      return false;
    }

    return true;
  }

  function makeImgQueue() {
    var arr = [];
    arr.queue = function(newArr) {
      for (var i = 0; i < newArr.length; i++) {
        if (!checkIsUnique(newArr[i])) continue;
        arr.push(newArr[i]);
      }

      process();
    };

    return arr;

    function checkIsUnique(imgObj) {
      for (var i = 0; i < arr.length; i++) {
        if (imgObj.src == arr[i].src) return false;
      }

      return true;
    }

    function process() {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].loadComplete || arr[i].loadStarted) continue;
        loadImg(arr[i]);
      }

      function loadImg(imgObj) {
        var timeout = imgObj.timeout || 500;
        imgObj.loadStarted = true;

        var timeoutId = setTimeout(function() {
          imgObj.loadComplete = true;
        }, timeout);

        var img = new Image();
        img.onload = img.onerror = function() {
          log('extStat img loaded/error: ' + imgObj.src);
          clearTimeout(timeoutId);
          imgObj.loadComplete = true;
        };

        img.src = imgObj.src;
      }
    }
  }

  function buildSrcString(id) {
    if (!widgetsCfg[id]) return;

    var payload = widgetsCfg[id].payload;
    payload.anchorId = id;
    payload.seed = seed;
    payload.widget_id = id;

    if (targetUrl) {
      payload.url = targetUrl;
    }

    
    var URLStart = 'https://relap.io/api/v6/similar_pages.js';
    
    var src = buildRequestURL(URLStart, payload);
    return src;
  }

  function buildRequestURL(URLStart, payload) {
    var paramStr = [];
    var string = '';

    for (var key in payload) {
      var value = '';

      if (key == 'gridSchema') {
        value = encodeURIComponent(JSON.stringify(payload[key]));
      } else {
        value = encodeURIComponent(payload[key]);
      }

      paramStr.push(key + '=' + value);
    }

    var url = URLStart + '?' + paramStr.join('&');

    if (extParams.length) url += '&' + extParams.join('&');

    return url;
  }

  function addWidgetScript(id, src) {
    log('addWidgetScript: ' + widgetsCfg[id].payload.widgetType + ', id: ' + id);
    positionScript({
      id: id,
      src: src,
      onComplete: function(scriptPosObj, id, src) {
        log('onPositionScriptComplete: ' + widgetsCfg[id].payload.widgetType + ', id: ' + id);
        var anchor = scriptPosObj.anchor;
        var scriptParent = scriptPosObj.scriptParent;
        var insertBeforeElem = scriptPosObj.insertBeforeElem;

        if (scriptPosObj.multiAnchorElems && scriptPosObj.multiAnchorElems.length) {
          handleMultiAnchorElems(scriptPosObj.multiAnchorElems, id, src);
          return;
        }

        if (scriptPosObj.multiArticleConfig && scriptPosObj.multiArticleConfig.length) {
          handleInsetWidgets(scriptPosObj.multiArticleConfig, id, src);
          return;
        }

        if (!scriptParent) {
          log('no scriptParent for id: ' + id);
          widgetsQueue.next();
          debugStatus(id, "error", "script_parent_not_found");
          debugEnd(id);
          return;
        }

        if (scriptPosObj.noAnchorOrInsertBeforeElemSelect) {
          log('no anchor or insertBeforeElemSelect present for id: ' + id);
          widgetsQueue.next();
          debugStatus(id, "error", "no_anchor_or_insertBeforeElemSelect_present");
          debugEnd(id);
          return;
        }

        syncLoader.queue.push(createSyncTask({
          id: id,
          src: src,
          scriptParent: scriptParent,
          insertBeforeElem: insertBeforeElem,
          anchor: anchor
        }));

        function handleMultiAnchorElems(elems, id, src) {
          for (var i = 0; i < elems.length; i++) {
            if (elems[i].getAttribute('data-init')) continue;
            
            elems[i].setAttribute('data-init', 1);

            syncLoader.queue.push(createSyncTask({
              id: id,
              src: src,
              scriptParent: elems[i].parentNode,
              anchor: elems[i]
            }));
          }
        }

        function handleInsetWidgets(configs, id, src) {
          for (var i = 0; i < configs.length; i++) {
            var config = configs[i];

            if (config.forbiddenElemInArticleFound) {
              log('forbidden element in article found for id: ' + id);
              debugStatus(id, "error", "forbidden_elem_in_article_found");
              continue;
            }

            if (config.articleTooShort) {
              log('article is too short for id: ' + id);
              debugStatus(id, "error", "article_is_too_short");
              continue;
            }

            if (config.noParagraphsFound) {
              log('no paragraphs found for id: ' + id);
              debugStatus(id, "error", "no_paragraphs_found");
              continue;
            }

            if (config.paragraphIsNotFound) {
              log('paragraph by number is not found for id: ' + id);
              debugStatus(id, "error", "paragraph_by_number_is_not_found");
              continue;
            }

            if (config.insertBeforeElem.getAttribute('data-relap-init')) continue;
            
            config.insertBeforeElem.setAttribute('data-relap-init', 1);

            syncLoader.queue.push(createSyncTask({
              id: id,
              src: src,
              scriptParent: config.scriptParent,
              anchor: config.insertBeforeElem
            }));
          }

          widgetsQueue.next();
          debugEnd(id);
        }

        function createSyncTask(opt) {
          var id = opt.id;
          var src = opt.src;
          var scriptParent = opt.scriptParent;
          var insertBeforeElem = opt.insertBeforeElem;
          var anchor = opt.anchor;

          var syncTask = function() {
            var script = d.createElement('script');
            script.className = 'relap-sp_' + id;
            script.onload = script.onerror = function() {
              widgetsQueue.next();
              syncLoader.queue.next();
            };
            script.src = src;

            if (insertBeforeElem) {
              log('insertBeforeElem id: ' + id);
              scriptParent.insertBefore(script, insertBeforeElem);
              return;
            }

            if (anchor) {
              log('insert before anchor id: ' + id);
              scriptParent.insertBefore(script, anchor);
              return;
            }

            log('append to body id: ' + id);
            scriptParent.appendChild(script);
          };

          return syncTask;
        }
      }
    });

    function positionScript(opt) {
      var id = opt.id;
      var src = opt.src;
      var onPositioningComplete = opt.onComplete;

      var positioning = {};
      var scriptParent = d.body;

      var multiAnchorElems = d.querySelectorAll('.js-relap-multi-anchor[data-id="' + id + '"]:not([data-init])');

      if (multiAnchorElems.length) {
        positioning.multiAnchorElems = multiAnchorElems;
      }

      var anchor = d.getElementById(id);

      if (anchor) {
        scriptParent = anchor.parentNode;
        positioning.anchor = anchor;
        debugStatus(id, "success", "anchor_script_found");
      }

      positioning.scriptParent = scriptParent;

      var payload = widgetsCfg[id].payload;
      var multiArticle = payload.multiArticle;
      var articleSelect = payload.articleSelect;
      var articleMinHeight = payload.articleMinHeight;
      var paragraphSelect = payload.paragraphSelect;
      var paragraphMinHeight = payload.paragraphMinHeight;
      var insertBeforePercent = payload.insertBeforePercent;
      var forbiddenElemInArticleSelect = payload.forbiddenElemInArticleSelect;
      var waitForElemTimeout = payload.waitForElemTimeout || 1;
      var isPreview = payload.isPreview;

      if (typeof payload.insertBeforeParagraphNum == 'number') {
        var insertBeforeParagraphNum = payload.insertBeforeParagraphNum - 1;
      }

      debugWidget(id, "widget_type", payload.widgetType);
      debugWidget(id, "widget_theme", payload.theme);
      debugWidget(id, "recommendations_requested", payload.cols*payload.rows);

      if (payload.widgetType == 'inset') {
        debugWidget(id, "multi_article", payload.multiArticle);
        debugWidget(id, "article_select", payload.articleSelect);
        debugWidget(id, "paragraph_select", payload.paragraphSelect);
        debugWidget(id, "insert_before_percent", payload.insertBeforePercent);
        debugWidget(id, "insert_before_paragraph_num", payload.insertBeforeParagraphNum);
      }

      if (!isPreview &&
          articleSelect &&
          paragraphSelect &&
          (typeof insertBeforePercent == 'number' ||
           typeof insertBeforeParagraphNum == 'number')) {
        waitForElems({
          cssSelect: articleSelect,
          multiArticle: multiArticle,
          onError: (function(id) {
            return function() {
              debugEnd(id);
            };
          })(id),
          onComplete: (function(positioning) {
            return onArticleElemsFound;
          })(positioning),
          timeout: waitForElemTimeout * 1000
        });

        return;
      }

      var widgetType = payload.widgetType;

      if (!isPreview && widgetType == 'inset') {
        positioning.scriptParent = null;
        onPositioningComplete(positioning, id, src)
        return;
      }

      var insertBeforeElemSelect = payload.insertBeforeElemSelect;

      if (!isPreview && insertBeforeElemSelect) {
        waitForElem({
          cssSelect: insertBeforeElemSelect,
          onError: (function(id) {
            return function() {
              debugEnd(id);
            };
          })(id),
          onComplete: (function(positioning) {
            return onInsertBeforeElemFound;
          })(positioning),
          timeout: waitForElemTimeout * 1000
        });

        return;
      }

      if ((widgetType == 'plain' || widgetType == 'side') &&
          !insertBeforeElemSelect && !anchor) {
        positioning.noAnchorOrInsertBeforeElemSelect = true;
      }

      onPositioningComplete(positioning, id, src)


      function waitForElems(opt) {
        var cssSelect = opt.cssSelect;
        var multiArticle = opt.multiArticle;
        var interval = opt.interval || 500;
        var onError = opt.onError;
        var onComplete = opt.onComplete;
        var timeout = opt.timeout || 10000;

        var elems = [];
        intervalFunc();

        if (!elems.length) {
          var intervalId = setInterval(intervalFunc, interval);
        }

        var timeoutId = setTimeout(function() {
          if (elems.length) return;

          log('waitForElem: timed out');
          clearInterval(intervalId);
          onError();
          onComplete(elems);
        }, timeout);

        function intervalFunc() {
          if (multiArticle) {
            elems = d.querySelectorAll(cssSelect);
          } else {
            var elem = d.querySelector(cssSelect);
            if (elem) elems.push(elem);
          }

          if (!elems.length) return;

          log('waitForElems: elems found');
          clearInterval(intervalId);
          onComplete(elems);
        }
      }

      function waitForElem(opt) {
        var cssSelect = opt.cssSelect;
        var interval = opt.interval || 500;
        var onError = opt.onError;
        var onComplete = opt.onComplete;
        var timeout = opt.timeout || 10000;

        var el;
        intervalFunc();

        if (!el) {
          var intervalId = setInterval(intervalFunc, interval);
        }

        var timeoutId = setTimeout(function() {
          if (el) return;

          log('waitForElem: timed out');
          clearInterval(intervalId);
          onError();
          onComplete(el);
        }, timeout);

        function intervalFunc() {
          el = d.querySelector(cssSelect);

          if (!el) return;

          log('waitForElem: elem found');
          clearInterval(intervalId);
          onComplete(el);
        }
      }

      function onArticleElemsFound(articleElems) {
        log('article elem found or timed out, id: ' + id);
        if (!articleElems.length) {
          positioning.scriptParent = null;
          onPositioningComplete(positioning, id, src)
          return;
        }

        positioning.multiArticleConfig = [];

        for (var i = 0; i < articleElems.length; i++) {
          positioning.multiArticleConfig.push({});
        }

        if (forbiddenElemInArticleSelect) {
          for (var i = 0; i < articleElems.length; i++) {
            var forbiddenElemInArticle = articleElems[i]
              .querySelector(forbiddenElemInArticleSelect);

            if (forbiddenElemInArticle) {
              positioning.multiArticleConfig[i].forbiddenElemInArticleFound = true;
              positioning.multiArticleConfig[i].ready = true;
            }
          }
        }

        for (var i = 0; i < articleElems.length; i++) {
          var configItem = positioning.multiArticleConfig[i];
          var articleEl = articleElems[i];

          if (configItem.ready) continue;

          (function(configItem, articleEl) {
            onImagesComplete({
              imgElems: articleEl.getElementsByTagName('img'),
              onComplete: function() {
                var articleHeight = articleEl.offsetHeight;

                if (articleHeight < articleMinHeight) {
                  configItem.articleTooShort = true;
                }

                var paragraphs = articleEl.querySelectorAll(paragraphSelect);

                debugWidget(id, "article_height", articleHeight);
                debugWidget(id, "article_min_height", articleMinHeight);
                debugWidget(id, "paragraphs_found", paragraphs.length);

                if (typeof paragraphMinHeight == 'number') {
                  var tmpArr = [];

                  for (var i = 0; i < paragraphs.length; i++) {
                    var paragraphHeight = paragraphs[i].offsetHeight;

                    if (paragraphHeight < paragraphMinHeight) continue;

                    tmpArr.push(paragraphs[i]);
                  }

                  paragraphs = tmpArr;
                }

                if (!paragraphs.length) {
                  configItem.noParagraphsFound = true;
                }

                var articleElTop = getElemCoords(articleEl).top;

                if (typeof insertBeforePercent == 'number') {
                  var widgetApproximateTop = articleHeight *
                    insertBeforePercent / 100 + articleElTop;

                  for (var i = 0; i < paragraphs.length; i++) {
                    var paragraphTop = getElemCoords(paragraphs[i]).top;
                    if (paragraphTop >= widgetApproximateTop) {
                      configItem.insertBeforeElem = paragraphs[i];
                      configItem.scriptParent = paragraphs[i].parentNode;
                      break;
                    }
                  }

                  if (!configItem.insertBeforeElem && paragraphs.length) {
                    
                    configItem.insertBeforeElem = paragraphs[paragraphs.length - 1];
                    configItem.scriptParent = paragraphs[paragraphs.length - 1].parentNode;
                  }

                  if (!configItem.insertBeforeElem && !paragraphs.length) {
                    
                    configItem.noParagraphsFound = true;
                  }
                }

                if (typeof insertBeforeParagraphNum == 'number') {
                  if (paragraphs[insertBeforeParagraphNum]) {
                    configItem.scriptParent =
                      paragraphs[insertBeforeParagraphNum].parentNode;
                    configItem.insertBeforeElem =
                      paragraphs[insertBeforeParagraphNum];
                  } else {
                    configItem.paragraphIsNotFound = true;
                  }
                }

                configItem.ready = true;
                tryToCompletePositioning(positioning.multiArticleConfig);
              }
            });
          })(configItem, articleEl);
        }

        tryToCompletePositioning(positioning.multiArticleConfig);

        function tryToCompletePositioning(configs) {
          for (var i = 0; i < configs.length; i++) {
            if (!configs[i].ready) return;
          }

          onPositioningComplete(positioning, id, src)
        }
      }

      function onInsertBeforeElemFound(insertBeforeElem) {
        if (!insertBeforeElem) {
          positioning.scriptParent = null;
          onPositioningComplete(positioning, id, src)
          return;
        }

        positioning.scriptParent = insertBeforeElem.parentNode;
        positioning.insertBeforeElem = insertBeforeElem;
        onPositioningComplete(positioning, id, src)
      }
    }
  }

  function log() {
    if (false) w.console.log.apply(w.console, arguments);
  }

  function debugLog(message, prefix_modifier) {
    if (prefix_modifier) {
      prefix_modifier = "--" + prefix_modifier + "--";
    } else {
      prefix_modifier = "";
    }
    log("__relap.io__" + prefix_modifier + message, true);
  }

  function debugEnd(id) {
    delete widgetKeys[id];
    if (getWidgetKeysSize() === 0) debugLog("end");

    function getWidgetKeysSize() {
      var count = 0;
      for (var key in widgetKeys) {
        if (widgetKeys.hasOwnProperty(key)) count++;
      }
      return count;
    }
  }

  function debugWidget(widget_id, key, value) {
    var message = {};
    message[widget_id] = {};
    message[widget_id][key] = value;
    debugLog(JSON.stringify(message));
  }

  function debugStatus(widget_id, status, msg) {
    var message = {};
    message[widget_id] = {status: status, message: msg};
    debugLog(JSON.stringify(message));
  }

  
function PureWindow() {
  var funcArr = [];
  var pureWindow;

  init();
  this.get = getPureWindow;

  function init() {
    var iframeEl = d.createElement('iframe');
    iframeEl.setAttribute('style', 'position: absolute; left: -9999px; visibility: hidden; top: -99999px;');
    iframeEl.onload = onIframeLoad;

    if (d.body) {
      d.body.appendChild(iframeEl);
      onIframeLoad();
    } else {
      waitForElem({
        cssSelect: 'body',
        interval: 300,
        onSuccess: function() {
          d.body.appendChild(iframeEl);
          onIframeLoad();
        },
      });
    }

    function onIframeLoad() {
      if (!iframeEl.contentWindow || iframeEl.contentWindow.initialized) {
        return;
      }

      pureWindow = iframeEl.contentWindow;
      iframeEl.contentWindow.initialized = true;
      processFunctions();
    }

    function processFunctions() {
      for (var i = 0; i < funcArr.length; i++) {
        funcArr[i].apply(window, [pureWindow]);
      }

      funcArr = [];
    }
  }

  function getPureWindow(func) {
    if (!pureWindow) {
      funcArr.push(func);
      return;
    }

    func.apply(window, [pureWindow]);
  }

  function waitForElem(opt) {
    var cssSelect = opt.cssSelect;
    var interval = opt.interval || 500;
    var onError = opt.onError || function() {};
    var onComplete = opt.onComplete || function() {};
    var onSuccess = opt.onSuccess || function() {};
    var timeout = opt.timeout || 10000;

    var el;
    var intervalId;
    var timeoutId;

    intervalFunc();

    if (!el) {
      intervalId = setInterval(intervalFunc, interval);

      timeoutId = setTimeout(function() {
        if (el) return;

        log('waitForElem: timed out');
        clearInterval(intervalId);
        onError();
        onComplete(el);
      }, timeout);
    }


    function intervalFunc() {
      el = d.querySelector(cssSelect);

      if (!el) return;

      log('waitForElem: elem found');
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      onSuccess(el);
      onComplete(el);
    }
  }
}

  
/*
  createNSResolver polyfill
  source: https://github.com/google/wicked-good-xpath
*/
(function(){'use strict';var k=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function l(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function m(a){var b=n;function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.F=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function q(a,b){return-1!=a.indexOf(b)}function ga(a,b){return a<b?-1:a>b?1:0};var ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},r=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=l(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var p=g[h];b.call(c,p,h,a)&&(e[f++]=p)}return e},t=Array.prototype.reduce?function(a,b,c,d){d&&(b=da(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;r(a,function(c,g){e=b.call(d,e,c,g,a)});return e},ja=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};function ka(a,b){var c;a:{c=a.length;for(var d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:l(a)?a.charAt(c):a[c]}function la(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function ma(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var u;a:{var na=k.navigator;if(na){var oa=na.userAgent;if(oa){u=oa;break a}}u=""};var pa=q(u,"Opera")||q(u,"OPR"),v=q(u,"Trident")||q(u,"MSIE"),qa=q(u,"Edge"),ra=q(u,"Gecko")&&!(q(u.toLowerCase(),"webkit")&&!q(u,"Edge"))&&!(q(u,"Trident")||q(u,"MSIE"))&&!q(u,"Edge"),sa=q(u.toLowerCase(),"webkit")&&!q(u,"Edge");function ta(){var a=k.document;return a?a.documentMode:void 0}var ua;
a:{var va="",wa=function(){var a=u;if(ra)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(v)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sa)return/WebKit\/(\S+)/.exec(a);if(pa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();wa&&(va=wa?wa[1]:"");if(v){var xa=ta();if(null!=xa&&xa>parseFloat(va)){ua=String(xa);break a}}ua=va}var ya={};
function za(a){if(!ya[a]){for(var b=0,c=fa(String(ua)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",p=/(\d*)(\D*)/g,y=/(\d*)(\D*)/g;do{var D=p.exec(g)||["","",""],X=y.exec(h)||["","",""];if(0==D[0].length&&0==X[0].length)break;b=ga(0==D[1].length?0:parseInt(D[1],10),0==X[1].length?0:parseInt(X[1],10))||ga(0==D[2].length,0==X[2].length)||ga(D[2],X[2])}while(0==b)}ya[a]=0<=b}}
var Aa=k.document,Ba=Aa&&v?ta()||("CSS1Compat"==Aa.compatMode?parseInt(ua,10):5):void 0;var w=v&&!(9<=Number(Ba)),Ca=v&&!(8<=Number(Ba));function x(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Da(a,b){var c=Ca&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new x(b,a,b.nodeName,c)};function z(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(w&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),w&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function A(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}Ca&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function B(a,b,c,d,e){return(w?Ea:Fa).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new C)}
function Ea(a,b,c,d,e){if(a instanceof E||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Ga(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],h=0;b=f[h++];)A(b,c,d)&&g.push(b);f=g}for(h=0;b=f[h++];)"*"==a&&"!"==b.tagName||F(e,b);return e}Ha(a,b,c,d,e);return e}
function Fa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!v?(b=b.getElementsByName(d),r(b,function(b){a.a(b)&&F(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),r(b,function(b){b.className==d&&a.a(b)&&F(e,b)})):a instanceof G?Ha(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),r(b,function(a){A(a,c,d)&&F(e,a)}));return e}
function Ia(a,b,c,d,e){var f;if((a instanceof E||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Ga(a);if("*"!=g&&(f=ia(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ia(f,function(a){return A(a,c,d)}));r(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||F(e,a)});return e}return Ja(a,b,c,d,e)}function Ja(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)A(b,c,d)&&a.a(b)&&F(e,b);return e}
function Ha(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)A(b,c,d)&&a.a(b)&&F(e,b),Ha(a,b,c,d,e)}function Ga(a){if(a instanceof G){if(8==a.b)return"!";if(null===a.b)return"*"}return a.f()};!ra&&!v||v&&9<=Number(Ba)||ra&&za("1.9.1");v&&za("9");function Ka(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function La(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(v&&!(9<=Number(Ba))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ma(a,b):!c&&Ka(e,b)?-1*Na(a,b):!d&&Ka(f,a)?Na(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?
a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(k.Range.START_TO_END,d)}function Na(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ma(d,a)}function Ma(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function C(){this.b=this.a=null;this.l=0}function Oa(a){this.node=a;this.a=this.b=null}function Pa(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;){var f=c.node,h=d.node;f==h||f instanceof x&&h instanceof x&&f.a==h.a?(f=c,c=c.a,d=d.a):0<La(c.node,d.node)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.l=g;return a}function Qa(a,b){var c=new Oa(b);c.a=a.a;a.b?a.a.b=c:a.a=a.b=c;a.a=c;a.l++}
function F(a,b){var c=new Oa(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.l++}function Ra(a){return(a=a.a)?a.node:null}function Sa(a){return(a=Ra(a))?z(a):""}function H(a,b){return new Ta(a,!!b)}function Ta(a,b){this.f=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function I(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.node};function n(a){this.i=a;this.b=this.g=!1;this.f=null}function J(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Ua(a,b){a.g=b}function Va(a,b){a.b=b}function K(a,b){var c=a.a(b);return c instanceof C?+Sa(c):+c}function L(a,b){var c=a.a(b);return c instanceof C?Sa(c):""+c}function M(a,b){var c=a.a(b);return c instanceof C?!!c.l:!!c};function N(a,b,c){n.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==Wa&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,s:b}):this.f={name:b.f.name,s:c})}m(N);
function O(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof C&&c instanceof C){b=H(b);for(d=I(b);d;d=I(b))for(e=H(c),f=I(e);f;f=I(e))if(a(z(d),z(f)))return!0;return!1}if(b instanceof C||c instanceof C){b instanceof C?(e=b,d=c):(e=c,d=b);f=H(e);for(var g=typeof d,h=I(f);h;h=I(f)){switch(g){case "number":h=+z(h);break;case "boolean":h=!!z(h);break;case "string":h=z(h);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(h,d)||e==c&&a(d,h))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}N.prototype.a=function(a){return this.c.m(this.h,this.o,a)};N.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+J(this.h);return a+=J(this.o)};function Xa(a,b,c,d){this.a=a;this.w=b;this.i=c;this.m=d}Xa.prototype.toString=function(){return this.a};var Ya={};
function P(a,b,c,d){if(Ya.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Xa(a,b,c,d);return Ya[a.toString()]=a}P("div",6,1,function(a,b,c){return K(a,c)/K(b,c)});P("mod",6,1,function(a,b,c){return K(a,c)%K(b,c)});P("*",6,1,function(a,b,c){return K(a,c)*K(b,c)});P("+",5,1,function(a,b,c){return K(a,c)+K(b,c)});P("-",5,1,function(a,b,c){return K(a,c)-K(b,c)});P("<",4,2,function(a,b,c){return O(function(a,b){return a<b},a,b,c)});
P(">",4,2,function(a,b,c){return O(function(a,b){return a>b},a,b,c)});P("<=",4,2,function(a,b,c){return O(function(a,b){return a<=b},a,b,c)});P(">=",4,2,function(a,b,c){return O(function(a,b){return a>=b},a,b,c)});var Wa=P("=",3,2,function(a,b,c){return O(function(a,b){return a==b},a,b,c,!0)});P("!=",3,2,function(a,b,c){return O(function(a,b){return a!=b},a,b,c,!0)});P("and",2,2,function(a,b,c){return M(a,c)&&M(b,c)});P("or",1,2,function(a,b,c){return M(a,c)||M(b,c)});function Q(a,b,c){this.a=a;this.b=b||1;this.f=c||1};function Za(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");n.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}m(Za);Za.prototype.a=function(a){a=this.c.a(a);return $a(this.h,a)};Za.prototype.toString=function(){var a;a="Filter:"+J(this.c);return a+=J(this.h)};function ab(a,b){if(b.length<a.A)throw Error("Function "+a.j+" expects at least"+a.A+" arguments, "+b.length+" given");if(null!==a.v&&b.length>a.v)throw Error("Function "+a.j+" expects at most "+a.v+" arguments, "+b.length+" given");a.B&&r(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});n.call(this,a.i);this.h=a;this.c=b;Ua(this,a.g||ja(b,function(a){return a.g}));Va(this,a.D&&!b.length||a.C&&!!b.length||ja(b,function(a){return a.b}))}m(ab);
ab.prototype.a=function(a){return this.h.m.apply(null,la(a,this.c))};ab.prototype.toString=function(){var a="Function: "+this.h;if(this.c.length)var b=t(this.c,function(a,b){return a+J(b)},"Arguments:"),a=a+J(b);return a};function bb(a,b,c,d,e,f,g,h,p){this.j=a;this.i=b;this.g=c;this.D=d;this.C=e;this.m=f;this.A=g;this.v=void 0!==h?h:g;this.B=!!p}bb.prototype.toString=function(){return this.j};var cb={};
function R(a,b,c,d,e,f,g,h){if(cb.hasOwnProperty(a))throw Error("Function already created: "+a+".");cb[a]=new bb(a,b,c,d,!1,e,f,g,h)}R("boolean",2,!1,!1,function(a,b){return M(b,a)},1);R("ceiling",1,!1,!1,function(a,b){return Math.ceil(K(b,a))},1);R("concat",3,!1,!1,function(a,b){return t(ma(arguments,1),function(b,d){return b+L(d,a)},"")},2,null);R("contains",2,!1,!1,function(a,b,c){return q(L(b,a),L(c,a))},2);R("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
R("false",2,!1,!1,function(){return!1},0);R("floor",1,!1,!1,function(a,b){return Math.floor(K(b,a))},1);R("id",4,!1,!1,function(a,b){function c(a){if(w){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ka(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=L(b,a).split(/\s+/),f=[];r(d,function(a){a=c(a);!a||0<=ha(f,a)||f.push(a)});f.sort(La);var g=new C;r(f,function(a){F(g,a)});return g},1);
R("lang",2,!1,!1,function(){return!1},1);R("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);R("local-name",3,!1,!0,function(a,b){var c=b?Ra(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);R("name",3,!1,!0,function(a,b){var c=b?Ra(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);R("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
R("normalize-space",3,!1,!0,function(a,b){return(b?L(b,a):z(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);R("not",2,!1,!1,function(a,b){return!M(b,a)},1);R("number",1,!1,!0,function(a,b){return b?K(b,a):+z(a.a)},0,1);R("position",1,!0,!1,function(a){return a.b},0);R("round",1,!1,!1,function(a,b){return Math.round(K(b,a))},1);R("starts-with",2,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);return 0==b.lastIndexOf(a,0)},2);R("string",3,!1,!0,function(a,b){return b?L(b,a):z(a.a)},0,1);
R("string-length",1,!1,!0,function(a,b){return(b?L(b,a):z(a.a)).length},0,1);R("substring",3,!1,!1,function(a,b,c,d){c=K(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?K(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=L(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);R("substring-after",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
R("substring-before",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);R("sum",1,!1,!1,function(a,b){for(var c=H(b.a(a)),d=0,e=I(c);e;e=I(c))d+=+z(e);return d},1,1,!0);R("translate",3,!1,!1,function(a,b,c,d){b=L(b,a);c=L(c,a);var e=L(d,a);a={};for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);R("true",2,!1,!1,function(){return!0},0);function G(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function db(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}G.prototype.a=function(a){return null===this.b||this.b==a.nodeType};G.prototype.f=function(){return this.h};
G.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=J(this.c));return a};function eb(a){this.b=a;this.a=0}function fb(a){a=a.match(gb);for(var b=0;b<a.length;b++)hb.test(a[b])&&a.splice(b,1);return new eb(a)}var gb=/\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,hb=/^\s/;function S(a,b){return a.b[a.a+(b||0)]}function T(a){return a.b[a.a++]}function ib(a){return a.b.length<=a.a};function jb(a){n.call(this,3);this.c=a.substring(1,a.length-1)}m(jb);jb.prototype.a=function(){return this.c};jb.prototype.toString=function(){return"Literal: "+this.c};function E(a,b){this.j=a.toLowerCase();var c;c="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.c=b?b.toLowerCase():c}E.prototype.a=function(a){var b=a.nodeType;if(1!=b&&2!=b)return!1;b=void 0!==a.localName?a.localName:a.nodeName;return"*"!=this.j&&this.j!=b.toLowerCase()?!1:"*"==this.c?!0:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};E.prototype.f=function(){return this.j};
E.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j};function kb(a,b){n.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.u||c.c!=lb||(c=c.o,"*"!=c.f()&&(this.f={name:c.f(),s:null}))}}m(kb);function mb(){n.call(this,4)}m(mb);mb.prototype.a=function(a){var b=new C;a=a.a;9==a.nodeType?F(b,a):F(b,a.ownerDocument);return b};mb.prototype.toString=function(){return"Root Helper Expression"};function nb(){n.call(this,4)}m(nb);nb.prototype.a=function(a){var b=new C;F(b,a.a);return b};nb.prototype.toString=function(){return"Context Helper Expression"};
function ob(a){return"/"==a||"//"==a}kb.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof C))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=H(b,e.c.a),g;if(e.g||e.c!=pb)if(e.g||e.c!=qb)for(g=I(f),b=e.a(new Q(g));null!=(g=I(f));)g=e.a(new Q(g)),b=Pa(b,g);else g=I(f),b=e.a(new Q(g));else{for(g=I(f);(b=I(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new Q(g))}}return b};
kb.prototype.toString=function(){var a;a="Path Expression:"+J(this.h);if(this.c.length){var b=t(this.c,function(a,b){return a+J(b)},"Steps:");a+=J(b)}return a};function rb(a){n.call(this,4);this.c=a;Ua(this,ja(this.c,function(a){return a.g}));Va(this,ja(this.c,function(a){return a.b}))}m(rb);rb.prototype.a=function(a){var b=new C;r(this.c,function(c){c=c.a(a);if(!(c instanceof C))throw Error("Path expression must evaluate to NodeSet.");b=Pa(b,c)});return b};rb.prototype.toString=function(){return t(this.c,function(a,b){return a+J(b)},"Union Expression:")};function sb(a,b){this.a=a;this.b=!!b}
function $a(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=H(b),f=b.l,g,h=0;g=I(e);h++){var p=a.b?f-h:h+1;g=d.a(new Q(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof C)p=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.f;var y=p.a;if(!y)throw Error("Next must be called at least once before remove.");var D=y.b,y=y.a;D?D.a=y:g.a=y;y?y.b=D:g.b=D;g.l--;p.a=null}}return b}
sb.prototype.toString=function(){return t(this.a,function(a,b){return a+J(b)},"Predicates:")};function U(a,b,c,d){n.call(this,4);this.c=a;this.o=b;this.h=c||new sb([]);this.u=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.b&&b&&(a=b.name,a=w?a.toLowerCase():a,this.f={name:a,s:b.s});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}m(U);
U.prototype.a=function(a){var b=a.a,c=null,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.s?L(c.s,a):null,f=1);if(this.u)if(this.g||this.c!=tb)if(a=H((new U(ub,new G("node"))).a(a)),b=I(a))for(c=this.m(b,d,e,f);null!=(b=I(a));)c=Pa(c,this.m(b,d,e,f));else c=new C;else c=B(this.o,b,d,e),c=$a(this.h,c,f);else c=this.m(a.a,d,e,f);return c};U.prototype.m=function(a,b,c,d){a=this.c.f(this.o,a,b,c);return a=$a(this.h,a,d)};
U.prototype.toString=function(){var a;a="Step:"+J("Operator: "+(this.u?"//":"/"));this.c.j&&(a+=J("Axis: "+this.c));a+=J(this.o);if(this.h.a.length){var b=t(this.h.a,function(a,b){return a+J(b)},"Predicates:");a+=J(b)}return a};function vb(a,b,c,d){this.j=a;this.f=b;this.a=c;this.b=d}vb.prototype.toString=function(){return this.j};var wb={};function V(a,b,c,d){if(wb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new vb(a,b,c,!!d);return wb[a]=b}
V("ancestor",function(a,b){for(var c=new C,d=b;d=d.parentNode;)a.a(d)&&Qa(c,d);return c},!0);V("ancestor-or-self",function(a,b){var c=new C,d=b;do a.a(d)&&Qa(c,d);while(d=d.parentNode);return c},!0);
var lb=V("attribute",function(a,b){var c=new C,d=a.f();if("style"==d&&w&&b.style)return F(c,new x(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof G&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)w?f.nodeValue&&F(c,Da(b,f)):F(c,f);else(f=e.getNamedItem(d))&&(w?f.nodeValue&&F(c,Da(b,f)):F(c,f));return c},!1),tb=V("child",function(a,b,c,d,e){return(w?Ia:Ja).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new C)},!1,!0);V("descendant",B,!1,!0);
var ub=V("descendant-or-self",function(a,b,c,d){var e=new C;A(b,c,d)&&a.a(b)&&F(e,b);return B(a,b,c,d,e)},!1,!0),pb=V("following",function(a,b,c,d){var e=new C;do for(var f=b;f=f.nextSibling;)A(f,c,d)&&a.a(f)&&F(e,f),e=B(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);V("following-sibling",function(a,b){for(var c=new C,d=b;d=d.nextSibling;)a.a(d)&&F(c,d);return c},!1);V("namespace",function(){return new C},!1);
var xb=V("parent",function(a,b){var c=new C;if(9==b.nodeType)return c;if(2==b.nodeType)return F(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&F(c,d);return c},!1),qb=V("preceding",function(a,b,c,d){var e=new C,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,h=f.length;g<h;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var y=0,D=p.length;y<D;y++)b=p[y],A(b,c,d)&&a.a(b)&&F(e,b),e=B(a,b,c,d,e)}return e},!0,!0);
V("preceding-sibling",function(a,b){for(var c=new C,d=b;d=d.previousSibling;)a.a(d)&&Qa(c,d);return c},!0);var yb=V("self",function(a,b){var c=new C;a.a(b)&&F(c,b);return c},!1);function zb(a){n.call(this,1);this.c=a;this.g=a.g;this.b=a.b}m(zb);zb.prototype.a=function(a){return-K(this.c,a)};zb.prototype.toString=function(){return"Unary Expression: -"+J(this.c)};function Ab(a){n.call(this,1);this.c=a}m(Ab);Ab.prototype.a=function(){return this.c};Ab.prototype.toString=function(){return"Number: "+this.c};function Bb(a,b){this.a=a;this.b=b}function Cb(a){for(var b,c=[];;){W(a,"Missing right hand side of binary expression.");b=Db(a);var d=T(a.a);if(!d)break;var e=(d=Ya[d]||null)&&d.w;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].w;)b=new N(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new N(c.pop(),c.pop(),b);return b}function W(a,b){if(ib(a.a))throw Error(b);}function Eb(a,b){var c=T(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Fb(a){a=T(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Gb(a){a=T(a.a);if(2>a.length)throw Error("Unclosed literal string");return new jb(a)}
function Hb(a){var b,c=[],d;if(ob(S(a.a))){b=T(a.a);d=S(a.a);if("/"==b&&(ib(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new mb;d=new mb;W(a,"Missing next location step.");b=Ib(a,b);c.push(b)}else{a:{b=S(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":T(a.a);b=Cb(a);W(a,'unclosed "("');Eb(a,")");break;case '"':case "'":b=Gb(a);break;default:if(isNaN(+b))if(!db(b)&&/(?![0-9])[\w]/.test(d)&&"("==S(a.a,1)){b=T(a.a);
b=cb[b]||null;T(a.a);for(d=[];")"!=S(a.a);){W(a,"Missing function argument list.");d.push(Cb(a));if(","!=S(a.a))break;T(a.a)}W(a,"Unclosed function argument list.");Fb(a);b=new ab(b,d)}else{b=null;break a}else b=new Ab(+T(a.a))}"["==S(a.a)&&(d=new sb(Jb(a)),b=new Za(b,d))}if(b)if(ob(S(a.a)))d=b;else return b;else b=Ib(a,"/"),d=new nb,c.push(b)}for(;ob(S(a.a));)b=T(a.a),W(a,"Missing next location step."),b=Ib(a,b),c.push(b);return new kb(d,c)}
function Ib(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==S(a.a))return d=new U(yb,new G("node")),T(a.a),d;if(".."==S(a.a))return d=new U(xb,new G("node")),T(a.a),d;var f;if("@"==S(a.a))f=lb,T(a.a),W(a,"Missing attribute name");else if("::"==S(a.a,1)){if(!/(?![0-9])[\w]/.test(S(a.a).charAt(0)))throw Error("Bad token: "+T(a.a));c=T(a.a);f=wb[c]||null;if(!f)throw Error("No axis with name: "+c);T(a.a);W(a,"Missing node name")}else f=tb;c=S(a.a);if(/(?![0-9])[\w\*]/.test(c.charAt(0)))if("("==
S(a.a,1)){if(!db(c))throw Error("Invalid node type: "+c);c=T(a.a);if(!db(c))throw Error("Invalid type name: "+c);Eb(a,"(");W(a,"Bad nodetype");e=S(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Gb(a);W(a,"Bad nodetype");Fb(a);c=new G(c,g)}else if(c=T(a.a),e=c.indexOf(":"),-1==e)c=new E(c);else{var g=c.substring(0,e),h;if("*"==g)h="*";else if(h=a.b(g),!h)throw Error("Namespace prefix not declared: "+g);c=c.substr(e+1);c=new E(c,h)}else throw Error("Bad token: "+T(a.a));e=new sb(Jb(a),f.a);return d||
new U(f,c,e,"//"==b)}function Jb(a){for(var b=[];"["==S(a.a);){T(a.a);W(a,"Missing predicate expression.");var c=Cb(a);b.push(c);W(a,"Unclosed predicate expression.");Eb(a,"]")}return b}function Db(a){if("-"==S(a.a))return T(a.a),new zb(Db(a));var b=Hb(a);if("|"!=S(a.a))a=b;else{for(b=[b];"|"==T(a.a);)W(a,"Missing next union location path."),b.push(Hb(a));a.a.a--;a=new rb(b)}return a};function Kb(a){switch(a.nodeType){case 1:return ea(Lb,a);case 9:return Kb(a.documentElement);case 11:case 10:case 6:case 12:return Mb;default:return a.parentNode?Kb(a.parentNode):Mb}}function Mb(){return null}function Lb(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Lb(a.parentNode,b):null};function Nb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=fb(a);if(ib(c))throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=function(){return null};var d=Cb(new Bb(c,b));if(!ib(c))throw Error("Bad token: "+T(c));this.evaluate=function(a,b){var c=d.a(new Q(a));return new Y(c,b)}}
function Y(a,b){if(0==b)if(a instanceof C)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof C))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof C?Sa(a):""+a;break;case 1:this.numberValue=a instanceof C?+Sa(a):+a;break;case 3:this.booleanValue=a instanceof C?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var d=
H(a);c=[];for(var e=I(d);e;e=I(d))c.push(e instanceof x?e.a:e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:d=Ra(a);this.singleNodeValue=d instanceof x?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Y.ANY_TYPE=0;Y.NUMBER_TYPE=1;Y.STRING_TYPE=2;Y.BOOLEAN_TYPE=3;Y.UNORDERED_NODE_ITERATOR_TYPE=4;Y.ORDERED_NODE_ITERATOR_TYPE=5;Y.UNORDERED_NODE_SNAPSHOT_TYPE=6;Y.ORDERED_NODE_SNAPSHOT_TYPE=7;Y.ANY_UNORDERED_NODE_TYPE=8;Y.FIRST_ORDERED_NODE_TYPE=9;function Ob(a){this.lookupNamespaceURI=Kb(a)}
function Pb(a,b){var c=a||k,d=c.Document&&c.Document.prototype||c.document;if(!d.evaluate||b)c.XPathResult=Y,d.evaluate=function(a,b,c,d){return(new Nb(a,c)).evaluate(b,d)},d.createExpression=function(a,b){return new Nb(a,b)},d.createNSResolver=function(a){return new Ob(a)}}var Qb=["wgxpath","install"],Z=k;Qb[0]in Z||!Z.execScript||Z.execScript("var "+Qb[0]);for(var Rb;Qb.length&&(Rb=Qb.shift());)Qb.length||void 0===Pb?Z[Rb]?Z=Z[Rb]:Z=Z[Rb]={}:Z[Rb]=Pb;}).call(this)

wgxpath.install();

relap.ExtConfigurer = ExtConfigurer;

function ExtConfigurer(opt) {
  var cfg = opt.cfg;
  var callbackRegPath = opt.callbackRegPath;
  var callbackReg = opt.callbackReg;
  var extParams = opt.extParams;
  var onExtConfigurerComplete = opt.complete;

  var self = this;

  var params = [];
  var firedAway = false;

  var i = 0;

  for (var key in cfg) {
    var cfgItem = cfg[key];

    switch (cfgItem.type) {
      case 'jsonp':
        scriptRequest({
          url: cfgItem.src,
          callbackParamName: cfgItem.callbackParamName,
          success: makeOnSuccessFunc(key),
          error: makeOnErrorFunc(key),
          complete: makeOnCompleteFunc(key),
          timeout: cfgItem.timeout
        });
        break;
      case 'img':
        loadImg(key);
        break;
      case 'vast2.0':
        loadVast_2_0(key);
        break;
      case 'token':
        copyToken(key);
        break;
      case 'js':
        executeJS(key);
        break;
    }

    i++;
  }

  if (i == 0 && onExtConfigurerComplete) onExtConfigurerComplete();

  function scriptRequest(opt) {
    var url = opt.url || '';
    var callbackParamName = opt.callbackParamName || 'callback';
    var success = opt.success;
    var error = opt.error;
    var complete = opt.complete;
    var timeout = opt.timeout || 500;

    var requestSuccess = false;
    var requestCancelled = false;
    var resp = {};

    var callbackName = 'relapCb' + String(Math.random()).slice(-6);

    url += ~url.indexOf('?') ? '&' : '?';
    url += callbackParamName + '=' + callbackRegPath + '.' + callbackName;
    resp.url = url;

    callbackReg[callbackName] = function(data) {
      delete callbackReg[callbackName];
      requestSuccess = true;

      if (requestCancelled) return;

      resp.data = data;

      if (success) success(resp);
      if (complete) complete(resp);
    };

    var scriptEl = d.createElement('script');

        scriptEl.onreadystatechange = function() {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        this.onreadystatechange = null;
                setTimeout(cleanCallback, 0); 
      }
    };

        scriptEl.onload = scriptEl.onerror = cleanCallback;
    scriptEl.id = callbackName;
    scriptEl.src = url;

    var headEl = d.getElementsByTagName('head')[0];
    if (headEl) headEl.appendChild(scriptEl);
    if (!scriptEl.parentNode) fallbackAppend(scriptEl);

    var timeoutId = setTimeout(cancelRequest, timeout);

    function cleanCallback() {
            removeScriptEl();

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      if (requestSuccess) return;

      delete callbackReg[callbackName];

      if (requestCancelled) return;

      if (error) error(resp);
      if (complete) complete(resp);
    }

    function removeScriptEl() {
      var scriptEl = d.getElementById(callbackName);

      if (scriptEl) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    }

    function cancelRequest() {
      log('JSONP request cancelled for url: ' + url);
      removeScriptEl();

      timeoutId = null;
      requestCancelled = true;

      if (error) error(resp);
      if (complete) complete(resp);
    }

    function fallbackAppend(scriptEl) {
      log('JSONP fallbackAppend');

      tryToAppend();
      var intervalId = setInterval(tryToAppend, 100);

      function tryToAppend() {
        var divs = d.getElementsByTagName('div');

        for (var i = 0; i < divs.length; i++) {
          divs[i].appendChild(scriptEl);
          if (scriptEl.parentNode) {
            clearInterval(intervalId);
            return;
          }
        }
      }
    }
  }

  function makeOnSuccessFunc(cfgId) {
    return function(resp) {
      if (!resp.data) return;
      log('jsonp success: ' + cfgId);

      if (cfgId == 'xV5cwg' || cfgId == '9Y267g' || cfgId == 'JdzEDw' || cfgId == 'FS3Vag') {
        if (resp.data[0] && resp.data[0]['html']) {
          try {
            /* parse + stringify - чтобы убрать лишние переводы строк и пробелы */
            resp.data[0]['html'] = JSON.stringify(
              JSON.parse(
                /* превращаем callbackName(json) в просто json */
                resp.data[0]['html'].replace(/^[^\[{]+|[^\]}]+$/g, '')
              )
            );
          } catch (e) {
            log('jsonp success: cant shorten response of ' + cfgId + ' because of', e);
          }
        }
      }

      var param = {
        'name': 'ext_json_' + cfgId,
        'value': JSON.stringify(resp.data)
      };

      params.push(param);
    };
  }

  function makeOnErrorFunc(cfgId) {
    return function(resp) {
      log('jsonp error: ' + cfgId);
    };
  }

  function makeOnCompleteFunc(cfgId) {
    return function(resp) {
      log('jsonp complete: ' + cfgId);
      cfg[cfgId].loadComplete = true;
      clearTimeout(cfg[cfgId].timeoutId);
      tryToStartWidgetsLoad();
    };
  }

  function loadImg(cfgId) {
    var timeout = cfg[cfgId].timeout || 500;

    var timeoutId = setTimeout(function() {
      cfg[cfgId].loadComplete = true;
      tryToStartWidgetsLoad();
    }, timeout);

    var img = new Image();
    img.onload = img.onerror = function() {
      log('extConfig img loaded/error: ' + cfgId);
      clearTimeout(timeoutId);
      cfg[cfgId].loadComplete = true;
      tryToStartWidgetsLoad();
    };

    img.src = cfg[cfgId].src;
  }

  /* кастомные макросы */
  function replace_custom_macros_vast_vihub_ru(url){
    if(!url.match(/^https?:\/\/vast\.vihub\.ru\//)){
      return url;
    }
    log('[macros:vast_vihub_ru][start]');

    /* https://vast.vihub.ru/?plid=663&startdelay=0&ref={ENCODED_REF_URL} */

    var encoded_ref_url = encodeURIComponent(w.location.toString());
    log('[macros:vast_vihub_ru][encoded_ref_url]', encoded_ref_url);

    var result = url;
    result = result.replace(/\{ENCODED_REF_URL\}/, encoded_ref_url);

    log('[macros:vast_vihub_ru][result]', url, result);

    return result;
  }

  function replace_custom_macros_inv_nets_admixer_net(url){
    if(!url.match(/^https?:\/\/inv-nets\.admixer\.net\//)){
      return url;
    }
    log('[macros:inv_nets_admixer_net][start]');

    /* https://inv-nets.admixer.net/dsp.aspx?rct=3&zone=4ea58399-0515-40f7-be48-39884464d47d&zoneInt=17163&sect=5005&site=4378&rnd=[CACHEBUSTING] */

    var cachebusting = Math.round(Math.random() * 9900000 + 100000);
    log('[macros:inv_nets_admixer_net][cachebusting]', cachebusting);

    var result = url;
    result = result.replace(/\[CACHEBUSTING\]/, cachebusting);

    log('[macros:inv_nets_admixer_net][result]', url, result);

    return result;
  }

  function replace_custom_macros_instreamvideo_ru(url){
    if(!url.match(/^https?:\/\/instreamvideo\.ru\//)){
      return url;
    }
    log('[macros:instreamvideo][start]');
    /* https://instreamvideo.ru/core/vpaid/linear?pid=290&vr=1&rid={rid}&puid7=1&puid8={puid8}&puid10=1&puid11=1&puid12=16&duration={duration} */
    /* https://instreamvideo.ru/core/vpaid/linear?pid=290&vr=1&rid=123&puid7=1&puid8=1&puid10=1&puid11=1&puid12=16&duration=60 */
    var rid = Math.round(Math.random() * 9900000 + 100000);
    log('[macros:instreamvideo][rid]', rid);

    var puids = [
        {a: 30, b: 60, v: 1},
        {a: 61, b: 90, v: 2},
        {a: 91, b: 120, v: 3},
        {a: 121, b: 180, v: 4},
        {a: 181, b: 240, v: 5},
        {a: 241, b: 300, v: 6},
        {a: 301, b: 600, v: 7},
        {a: 601, b: 900, v: 8},
        {a: 901, b: 1800, v: 9},
        {a: 1801, b: 3600, v: 10}
    ];

    var puid = puids[Math.floor(Math.random() * puids.length)];
    log('[macros:instreamvideo][puid]', puid);

    var duration = Math.round(Math.random() * (puid.b - puid.a) + puid.a);
    log('[macros:instreamvideo][duration]', duration);

    var puid8 = 1;
    log('[macros:instreamvideo][puid8]', puid8);

    var result = url;
    result = result.replace(/\{rid\}/, rid);
    result = result.replace(/\{duration\}/, duration);
    result = result.replace(/\{puid8\}/, puid8);

    log('[macros:instreamvideo][result]', url, result);

    return result;
  }

  function loadVast_2_0(cfgId) {
    var totalTimeout = cfg[cfgId].timeout || 500;
    var vastTimeout = cfg[cfgId].vastTimeout || 200;
    debug('vast debug: start', (new Date()).getTime());

    var fetchUrl = cfg[cfgId].src;
    var urlParts = parseURL(fetchUrl);
    if (urlParts.host == 'ad.mail.ru') {
      fetchUrl = fetchUrl.indexOf('?') === -1 ? fetchUrl + '?' : fetchUrl + '&';
      fetchUrl = fetchUrl + 'dl=' + encodeURIComponent(w.location.toString());
    }

    fetchUrl = replace_custom_macros_inv_nets_admixer_net(fetchUrl);
    fetchUrl = replace_custom_macros_instreamvideo_ru(fetchUrl);
    fetchUrl = replace_custom_macros_vast_vihub_ru(fetchUrl);

    if (!w.sessionStorage) {
      log("browser doesn't support sessionStorage: " + cfgId);
      cancelRequest('manual');
      return;
    }

    var vastResults = [],
        request,
        timeoutId = setTimeout(cancelRequest, totalTimeout);
    debug('vast debug: total timeout set', totalTimeout, (new Date()).getTime());

    if (cfg[cfgId]['vengovision']) {
        /*
          нужно слать post запрос и параметризовать его в зависимости от клиента
          http://test.sebbia.com/vengovision/help/mediation_vpaid.html
        */
        var device_id = 'relap';
        var domain = 'relap.io';
        var app_id = '-1';
        if(cfg[cfgId]['vengovision']['device_id']) {
          device_id = cfg[cfgId]['vengovision']['device_id'];
        }
        if(cfg[cfgId]['vengovision']['domain']) {
          domain = cfg[cfgId]['vengovision']['domain'];
        }
        if(cfg[cfgId]['vengovision']['app_id']) {
          app_id = cfg[cfgId]['vengovision']['app_id'];
        }

        var postData = {};
        postData['app_id'] = app_id;
        postData['apiver'] = '3.0';
        postData['libplatform'] = 'Web';
        postData['libver'] = '1.0.20';
        postData['dev_width'] = '1920';
        postData['dev_height'] = '1080';
        postData['dev_density'] = '1';
        postData['domain'] = domain;
        postData['locale'] = 'ru';
        postData['device_id'] = device_id;
        postData['type'] = 'insite';
        postData['response_format'] = 'vpaid';
        request = fetchViaPost('https://api.vengovision.ru/', postData);
    }
    else {
        /* логика для всего остального */
        request = fetch(fetchUrl);
    }
    if (!request) {
      log("browser doesn't support XMLHttpRequest: " + cfgId);
      cancelRequest('manual');
      return;
    }

    function debug() {
      if (cfg[cfgId].debug !== 1) return;
      log.apply(w, arguments);
    }

    function vastTrackErrors() {
      vastResults.forEach(function (result) {
        if (!result['Error']) return;
        result.Error.forEach(function (error) { (new Image()).src = error.src });
      });
    }

    function cancelRequest(manual) {
      debug('vast debug: cancelRequest with manual=', manual ? true : false, (new Date()).getTime());
      clearTimeout(timeoutId);
      if (!manual) log('vast global timeout: ' + cfgId);
      if (!manual) vastTrackErrors();
      if (!manual && request) {
        debug('vast debug: aborting request', (new Date()).getTime());
        request.abort();
      }
      cfg[cfgId].loadComplete = true;
      tryToStartWidgetsLoad();
    }

    function fetch(url) {
      log('vast fetching, url is ' + url + ' : ' + cfgId);
      return ajaxRequest(url, null, onAjaxComplete, vastTimeout);
    }

    function fetchViaPost(url, data) {
      log('vast fetching via post, url is ' + url + ' : ' + cfgId);
      log(data);
      return ajaxRequest(url, data, onAjaxComplete, vastTimeout);
    }

    function onAjaxComplete(event) {
      debug('vast debug: onAjaxComplete', (new Date()).getTime());
      if (!event || !event.type || event.type === 'error' || event.type === 'timeout') {
        log('vast load error: ' + cfgId, event);
        vastTrackErrors();
        cancelRequest('manual');

      } else if (event.type === 'load') {
        if (request.responseXML) {
          log('vast load success: ' + cfgId, request.responseXML);

          var vastParsed = parseVast_2_0(request.responseXML);
          debug('vast debug: vastParsed', vastParsed, (new Date()).getTime());
          if (vastResults.length == 0) { /* we were unable to parse vast for some reason */
            /* Красуля говорил, что если по любой причине не смогли показать vast -
               надо дёргать Error; в случае nobanner во вложенном во враппер vast-е тоже */
            vastTrackErrors();
            cancelRequest('manual');
            return;
          }
          if (!vastParsed) return; /* that means vast was referring to another vast, nested request is in progress */

          var linearVast = linearizeVast_2_0(vastResults);
          debug('vast debug: linearVast', linearVast, (new Date()).getTime());
          /*
            Не будем слать весь список медиа фалов на сервер, выберем один лучший,
            который и будем показывать, его и пошлём.
            Для vpaid это js, а не swf.
            Для не vpaid это первый файл
          */
          var chosen = chooseOnlyOneMedia(linearVast);
          debug('vast debug: chosen', chosen, (new Date()).getTime());
          if(chosen.error) {
            log('Choose only one error: [' + chosen.error_code + ']');
            (new Image()).src = 'https://relap.io/d/c/g?counter=count.partners.vast.' + chosen.error_code;
            vastTrackErrors();
          }
          else {
            linearVast = chosen.data;
            var linearVastJSON = JSON.stringify(linearVast);
            sessionStorage.setItem('ext_json_' + cfgId, linearVastJSON);
            if (sessionStorage.getItem('ext_json_' + cfgId) != linearVastJSON) {
              log('sessionStorage support broken');
              (new Image()).src = 'https://relap.io/d/c/g?counter=count.partners.vast.session_storage_broken';
              vastTrackErrors();
            } else {
              params.push({
                'name': 'ext_json_' + cfgId,
                'value': JSON.stringify(getExtConfig(linearVast))
              });
            }
            debug('vast debug: hooray', (new Date()).getTime());
          }
          cancelRequest('manual');

        } else {
          log('vast load error, vast is not xml: ' + cfgId, request.response);
          vastTrackErrors();
          cancelRequest('manual');

        }
      }
    }

    function ajaxRequest(url, postParams, callback, timeout) {
      if (!w.XMLHttpRequest) return;
      var request = new XMLHttpRequest();
      request.addEventListener('load', callback);
      request.addEventListener('error', callback);
      request.addEventListener('timeout', callback);
      request.withCredentials = true;
      if(postParams) {
        var body = [];
        for (var paramName in postParams) {
          body.push(paramName + '=' + encodeURIComponent(postParams[paramName]));
        }
        body = body.join('&');
        request.open('POST', url);
        request.timeout = timeout || 200;
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(body);
      }
      else {
        request.open('GET', url);
        request.timeout = timeout || 200;
        request.send();
      }
      debug('vast debug: request sent', request, (new Date()).getTime());
      return request;
    }

    /* логика повторяет логику перлового parse в модуле обработки vast 2.0 */
    function parseVast_2_0(xmlDocument) {
      debug('vast debug: parseVast_2_0', (new Date()).getTime());
      var nsResolver = document.createNSResolver(xmlDocument.documentElement);

      var ads = xpathSearch('//Ad', xmlDocument);
      if (ads.length == 0) {
        log('vast parse found no ads: ' + cfgId);
        /*vastResults = [ { 'nobanner': 1 } ];*/
        vastResults = [];
        return;
      }
      if (ads.length > 1) {
        log('vast parse error, more than 1 ad: ' + cfgId);
        vastResults = [];
        return;
      }
      var ad = ads[0];

      var result = {};
      [
        'Error', 'Impression', 'AdParameters', 'ClickThrough', 'ClickTracking',
        { 'node': 'MediaFile', 'attrs': ['type'] },
        { 'node': 'Tracking', 'attrs': ['event'] },
        'VASTAdTagURI', 'StaticResource', 'NonLinearClickThrough'
      ].forEach(function (nodeDefinition) {
        var nodeName, nodeAttrNames;
        if (isString(nodeDefinition)) {
          nodeName = nodeDefinition;
        } else { /* it must be object then */
          nodeName = nodeDefinition.node;
          nodeAttrNames = nodeDefinition.attrs;
        }
        var nodes = xpathSearch('//' + nodeName, ad);
        if (!nodes.length) return;

        /* немного треша и угара */
        nodes.forEach(function (node) {
          var nodeText = node.textContent.trim();
          if (!nodeText) return;

          if (!result[nodeName]) {
            if (nodeName === 'Tracking') {
              result[nodeName] = {};
            } else {
              result[nodeName] = [];
            }
          }
          var nodeResult = { 'src': nodeText };

          if (nodeAttrNames) {
            nodeAttrNames.forEach(function (attrName) {
              var attrText = node.getAttribute(attrName).trim();
              if (!attrText) return;
              if (nodeName === 'Tracking') { /* у Tracking мы должны запрашивать только один атрибут */
                if (!result[nodeName][attrText]) result[nodeName][attrText] = [];
                result[nodeName][attrText].push(nodeResult);
              } else {
                nodeResult[attrName] = attrText;
              }
            });
          }
          if (nodeName !== 'Tracking') {
            result[nodeName].push(nodeResult);
          }
        });

      });
      vastResults.push(result);

      if (result['VASTAdTagURI']) {
        if (vastResults.length >= 3) {
          log('vast error, too many nested vasts: ' + cfgId);
          vastResults = [];
        } else {
          request = fetch(result['VASTAdTagURI'][0].src);
        }
        return;
      }

      if (!result['MediaFile'] && !result['StaticResource'] && !result['nobanner']) {
        log('vast error, bad format: ' + cfgId);
        vastResults = [];
        return;
      }

      return 1;

      function xpathSearch(xpath, node) {
        return nodesSnapshotToArray( xmlDocument.evaluate(xpath, node, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null) );
      }

      function nodesSnapshotToArray(xpathResult) {
        var nodes = [];
        for (var i = 0; i < xpathResult.snapshotLength; i++) {
          nodes.push( xpathResult.snapshotItem(i) );
        }
        return nodes;
      }

      function isString(variable) {
        return (typeof variable === 'string' || variable instanceof String);
      }
    }

    function linearizeVast_2_0(vastResults) {
      debug('vast debug: linearizeVast_2_0', (new Date()).getTime());
      var linearized = {};
      vastResults.forEach(function (result) {
        Object.keys(result).forEach(function (nodeName) {
          var item = result[nodeName];
          if (nodeName === 'nobanner') {
            return {};

          } else if (nodeName === 'Tracking') {
            Object.keys(item).forEach(function (event) {
              var linearized_key = nodeName + '_' + event;
              if (!linearized[linearized_key]) linearized[linearized_key] = [];
              item[event].forEach(function (it) {
                linearized[linearized_key].push(it.src);
              });
            });

          } else if (nodeName === 'MediaFile' || nodeName === 'StaticResource') {
            var linearized_key = nodeName;
            if (!linearized[linearized_key]) linearized[linearized_key] = [];
            item.forEach(function (it) {
              linearized[linearized_key].push(it);
            });

          } else {
            var linearized_key = nodeName;
            if (!linearized[linearized_key]) linearized[linearized_key] = [];
            item.forEach(function (it) {
              linearized[linearized_key].push(it.src);
            });

          }
        });
      });

      return linearized;
    }

    function getExtConfig(linearVast) {
      return {
        'MediaFile'   : linearVast['MediaFile'],
        'ClickThrough': linearVast['ClickThrough']
      };
    }

    function chooseOnlyOneMedia(linearVast) {
      debug('vast debug: chooseOnlyOneMedia', (new Date()).getTime());
      var files = linearVast['MediaFile'];
      if(!files) {
        return {error: true, error_code: 'media_file_not_exists'};  
      }
      if(files.length < 1) {
        return {error: true, error_code: 'media_file_empty'};  
      }
      var found_vpaid_flash = false;
      for(var i = 0; i < files.length; i++) {
        var file = files[i];
        if(file['type'] == 'application/javascript') {
          /* vpaid js */
          linearVast['MediaFile'] = [file];
          return {error: false, data: linearVast};
        }
        else if(file['type'] == 'application/x-shockwave-flash') {
          /* vpaid swf */
          found_vpaid_flash = true;
        }
      }
      /* vpaid flash, такое не поддерживаем */
      if(found_vpaid_flash) {
        return {error: true, error_code: 'media_file_vpaid_swf'};  
      }
      /* не vpaid, возьмём первое что есть */
      linearVast['MediaFile'] = [linearVast['MediaFile'][0]];
      return {error: false, data: linearVast};
    }

    function parseURL(url) {
        var a =  document.createElement('a');
        a.href = url;
        /* ваще не факт, что это работает корректно. взято из
        http://james.padolsey.com/javascript/parsing-urls-with-the-dom/,
        и там слетело экранирование некоторых символов в регекспах, кажется */
        return {
          source: url,
          protocol: a.protocol.replace(':',''),
          host: a.hostname,
          port: a.port,
          query: a.search,
          params: (function(){
            var ret = {},
              seg = a.search.replace(/^\?/,'').split('&'),
              len = seg.length, i = 0, s;
            for (;i<len;i++) {
              if (!seg[i]) { continue; }
              s = seg[i].split('=');
              ret[s[0]] = s[1];
            }
            return ret;
          })(),
          file: (a.pathname.match(/\/([^/?#]+)$/i) || [,''])[1],
          hash: a.hash.replace('#',''),
          path: a.pathname.replace(/^([^/])/,'/$1'),
          relative: (a.href.match(/tps?:\/\/[^/]+(.+)/) || [,''])[1],
          segments: a.pathname.replace(/^\//,'').split('/')
      };
    }
  }

  function copyToken(cfgId) {
    cfg[cfgId].loadComplete = true;
    params.push({ name: cfg[cfgId].name, value: cfg[cfgId].value });
  }

  function executeJS(cfgId) {
    var timeout = cfg[cfgId].timeout || 500;
    var code = cfg[cfgId].code || function(params, finished) { finished() };

    var timeoutId = setTimeout(function() {
      log('executeJS timeout for cfgId: ' + cfgId);
      finished();
    }, timeout);

    log('executeJS started for cfgId: ' + cfgId);
    /* вообще срабатывание таймаута не прервёт выполнение кода... так что если 
       он успеет выполниться до момента срабатывания tryToStartWidgetsLoad,
       то свою работу таки успешно сделает */
    code(params, finished);

    function finished() {
      cfg[cfgId].loadComplete = true;
      clearTimeout(timeoutId);
      log('executeJS finished for cfgId: ' + cfgId);
      tryToStartWidgetsLoad();
    };
  }

  function tryToStartWidgetsLoad() {
    if (!checkAllRequestsComplete() || firedAway) return;

    firedAway = true;

    for (var i = 0; i < params.length; i++) {
      extParams.push(params[i].name + '=' +
        encodeURIComponent(params[i].value));
    }

    /* проверим длину богатств и при необходимости укоротим */
    /* сначала отсортируем по важности - служебное в первую очередь, потом
       токены s2s_prefetch (они короткие), потом мейл, потом критео, потом
       остальное, от длинного к короткому */
    extParams = extParams.sort(function (a, b) {
        return 0 || /* `return` без `0 ||` на той же строке сразу вернул бы undefined */
            /* клиент-сайд проверки для фильтров РК в аукционе */
            a.indexOf('wlabp=')    === 0  ? -1 : b.indexOf('wlabp=')    === 0  ? 1 :
            a.indexOf('wrdflts=')  === 0  ? -1 : b.indexOf('wrdflts=')  === 0  ? 1 :
            /* prefetch */
            a.indexOf('prefetch_') === 0  ? -1 : b.indexOf('prefetch_') === 0  ? 1 :
            /* target_mail_ru_wide */
            a.indexOf('ext_json_JdzEDw=') ? -1 : b.indexOf('ext_json_JdzEDw=') ? 1 :
            /* target_mail_ru */
            a.indexOf('ext_json_xV5cwg=') ? -1 : b.indexOf('ext_json_xV5cwg=') ? 1 :
            /* criteo_com */
            a.indexOf('ext_json_ErGwXA=') ? -1 : b.indexOf('ext_json_ErGwXA=') ? 1 :
            b.length - a.length
    });
    var extParamsLenLimit = 15000, removed = [];
    var extParamsLen = extParams.reduce(function (acc, val) { return acc + val.length }, 0);
    while (extParamsLen > extParamsLenLimit) {
      log('extParams too long: ' + extParamsLen);
      var lastExtParam = extParams.pop();
      /* в силу сортировки extParams элементы тут будут от идти от коротких к длинным */
      removed.push(lastExtParam);
      log('popped element from extParams:', lastExtParam);
      extParamsLen -= lastExtParam.length;
    }
    /* может статься, что мы выкидывали-выкидывали мелочёвку, этого не хватало,
       а потом выкинули какой-нибудь критео и места хватило. настолько хватило,
       что мелочёвку можно попробовать вернуть */
    while (removed.length && extParamsLen < extParamsLenLimit) {
      var shortestRemovedParam = removed.shift();
      if (shortestRemovedParam.length > extParamsLenLimit - extParamsLen) break;
      log('extParams too short, we can add something back: ' + extParamsLen);
      extParams.push(shortestRemovedParam);
      log('pushed element to extParams:', shortestRemovedParam);
      extParamsLen += shortestRemovedParam.length;
    }

    if (onExtConfigurerComplete) onExtConfigurerComplete();

    function checkAllRequestsComplete() {
      for (var key in cfg) {
        if (!cfg[key].loadComplete) {
          return false;
        }
      }

      return true;
    }
  }
}

  
function onImagesComplete(opt) {
  window.relap.getPureWindow(function(pureWindow) {
    var imgElems = opt.imgElems;
    var onComplete = opt.onComplete;
    var timeout;
    var interval = opt.interval || 500;

    if (opt.timeout && isFinite(opt.timeout)) {
      timeout = opt.timeout;
    }

    var complete = false;

    var intervalId = pureWindow.setInterval(function() {
      if (checkImagesComplete(imgElems)) {
        pureWindow.clearInterval(intervalId);

        if (complete) return;

        complete = true;
        log('onImagesComplete: images loaded');
        onComplete(imgElems);
      }
    }, interval);

    if (timeout) {
      pureWindow.setTimeout(function() {
        if (complete) return;

        log('onImagesComplete: images considered complete because of timeout');
        pureWindow.clearInterval(intervalId);
        onComplete(imgElems);
      }, timeout);
    }
  });

  function checkImagesComplete(imgElems) {
    for (var i = 0; i < imgElems.length; i++) {
      var isComplete = imgElems[i].complete;

      if (!isComplete) {
        return false;
      }
    }

    return true;
  }
}

  
function getElemCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = d.body;
  var docEl = d.documentElement;

  var scrollTop = w.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = w.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return {
    top: top,
    left: left
  };
}

  
function onFuncReady(opt) {
  window.relap.getPureWindow(function(pureWindow) {
    var funcName = opt.funcName;
    var args = opt.args;
    var onSuccess = opt.onSuccess;
    var onError = opt.onError;
    var onComplete = opt.onComplete;
    var interval = opt.interval || 500;
    var timeout = opt.timeout || (6 * 1000);

    var complete = false;
    intervalFunc();

    if (!complete) {
      var intervalId = pureWindow.setInterval(intervalFunc, interval);
    }

    var timeoutId = pureWindow.setTimeout(function() {
      if (complete) return;

      log('onFuncReady: timed out, gave up');

      try {
        onError();
        onComplete();
      } catch(e) {
      }
      pureWindow.clearInterval(intervalId);
    }, timeout);

    function intervalFunc() {
      if (checkFuncReady()) {
        pureWindow.clearInterval(intervalId);

        if (complete) return;

        complete = true;
        log('onFuncReady: function is ready');

        try {
          w[funcName].apply(this, args);
          onSuccess();
          onComplete();
        } catch(e) {
        }
      }
    }

    function checkFuncReady() {
      if (!w[funcName]) return false;
      if (typeof w[funcName] !== 'function') return false;

      return true;
    }
  });
}

  
relap.ProtoWidget = ProtoWidget;

function ProtoWidget(opt) {
  var widgetId = opt.widgetId;
  var widgetInstanceId = opt.widgetInstanceId;
  var queryParams = opt.queryParams;
  var seed = opt.seed;
  var rgid = opt.rgid;
  var url = opt.url;
  var widgetHTML = opt.widgetHTML;
  var widgetParams = opt.widgetParams;
  var noHandlers = opt.noHandlers;
  var viewPixelSrc = opt.viewPixelSrc;
  var noAnchorNeeded = opt.noAnchorNeeded || false;
  var executeOnWidgetScriptLoad = opt.executeOnWidgetScriptLoad;
  var executeOnWidgetPreloaderShow = opt.executeOnWidgetPreloaderShow;
  var executeOnWidgetReady = opt.executeOnWidgetReady;
  var executeOnWidgetShown = opt.executeOnWidgetShown;
  var executeOnItemClick = opt.executeOnItemClick;
  var pixelSrcStart = opt.pixelSrcStart;
  var pixelClickParamName = opt.pixelClickParamName;
  var pixelSecretSessionParamName = opt.pixelSecretSessionParamName;
  var pixelSecretSessionParam = opt.pixelSecretSessionParam;
  var popupMobileWindowMaxWidth = opt.widgetParams.popupMobileWindowMaxWidth;
  var popupMobileWindowMaxHeight = opt.widgetParams.popupMobileWindowMaxHeight;
  var gaCfg = {
    onLoad: {
      once: widgetParams.gaLoadOnce,
      category: widgetParams.gaLoadCategory,
      action: widgetParams.gaLoadAction,
      label: widgetParams.gaLoadLabel
    },
    onShow: {
      once: widgetParams.gaShowOnce,
      category: widgetParams.gaShowCategory,
      action: widgetParams.gaShowAction,
      label: widgetParams.gaShowLabel
    },
    onClick: {
      once: widgetParams.gaClickOnce,
      category: widgetParams.gaClickCategory,
      action: widgetParams.gaClickAction,
      label: widgetParams.gaClickLabel,
      valueType: widgetParams.gaClickValueType
    }
  };

  log('gaCfg');
  log(gaCfg);

  var el;
  var elParent;
  var anchorEl;
  var links;
  var topContainerEl;
  var items;
  var fakeItems;
  var elParentWidth;
  var scrollHeight;
  var elTop;
  var debouncedOnScrollFunc;
  var debouncedResizeHandler;
  var ellipsizers = [];
  var imgResizers = [];
  var widgetReady = false;
  var overlayEl;
  var widgetScrolled = false;
  var popupWidgetEl;
  var popupWidgetContentEl;
  var grids = [];
  var widgetCloseBtn;
  var popupContentScaler = {};
  var skip_url = [];

  
  var ROWS;
  var WIDGET_TYPE;
  var RESPONSIVE_TITLE_FONT;
  var HEAD_LINES_COUNT;
  var DESC_LINES_COUNT;
  var CUT_TEXT_UNTIL_THUMBNAIL_BOTTOM;
  var FULL_ITEM_CLICKABLE;
  var PRESERVE_ROWS_QUANTITY;
  var UTM_FROM;
  var UTM_HASH_FROM;
  var SHOW_POS_PERCENT;
  var FIXED_WIDTH;
  var IS_PREVIEW;
  var HORIZONTAL_ALIGN_EL_SELECT;
  var POSITION;
  var CLIENT_SIDE_CROP;
  

  init();

  this.swapRec = swapRec;

  function init() {
    ROWS = widgetParams.rows;
    WIDGET_TYPE = widgetParams.widgetType;
    RESPONSIVE_TITLE_FONT = widgetParams.responsiveTitleFont || false;
    HEAD_LINES_COUNT = widgetParams.headLinesCount || 0;
    DESC_LINES_COUNT = widgetParams.descLinesCount || 0;
    CUT_TEXT_UNTIL_THUMBNAIL_BOTTOM = widgetParams.cutTextUntilThumbnailBottom || false;
    FULL_ITEM_CLICKABLE = widgetParams.clickableItem || false;
    PRESERVE_ROWS_QUANTITY = widgetParams.preserve_rows_quantity || false;
    UTM_FROM = unescapeHTML(widgetParams.utm_from || '');
    UTM_HASH_FROM = unescapeHTML(widgetParams.utm_hash_from || '');
    FIXED_WIDTH = parseFloat(widgetParams.fixedWidth) || null;
    IS_PREVIEW = widgetParams.isPreview || false;
    HORIZONTAL_ALIGN_EL_SELECT = widgetParams.horizontalAlignElSelect || '';
    POSITION = widgetParams.position || '';
    CLIENT_SIDE_CROP = widgetParams.betaClientSideCrop || false;

    anchorEl = d.getElementById(widgetId);

    if (!anchorEl && !noAnchorNeeded) {
      log('relap: no widget anchor in html is found for widget: ' + widgetId + ', exit');
      return;
    }

    el = d.createElement('div');
    el.innerHTML = widgetHTML;

    debugWidget(widgetId, "recommendations_showed", el.getElementsByClassName("js-relap__item").length);
    debugStatus(widgetId, "success", "widget_showed");
    debugEnd(widgetId);

    if (executeOnWidgetScriptLoad) {
      try {
        executeOnWidgetScriptLoad(widgetId);
      } catch(e) {
      }
    }

    if (FIXED_WIDTH) {
      el.style.width = FIXED_WIDTH + 'px';
    }

    switch(WIDGET_TYPE) {
      case 'toster':
      case 'popup':
        handlePopupWidget();
        break;
      case 'plain':
      case 'side':
      case 'inset':
        handleInlineWidget();
        break;
    }

    links = el.getElementsByClassName('js-relap__item-link');

    if (!links.length) {
      log('relap: no js-relap__item-link in html is found for widget: ' + widgetId + ', exit');
      return;
    }

    topContainerEl = el.getElementsByClassName('js-relap__top-container')[0];

    if (!topContainerEl) {
      log('relap: no relap__top-container in html is found for widget: ' + widgetId + ', exit');
      return;
    }

    items = el.getElementsByClassName('js-relap__item');
    fakeItems = el.getElementsByClassName('js-relap__fake-item');

    if (WIDGET_TYPE == 'plain' ||
        WIDGET_TYPE == 'side' ||
        WIDGET_TYPE == 'inset') {
      handleBlockScrolledTo(topContainerEl);
    }

    if (UTM_FROM || UTM_HASH_FROM) {
      addUTMToLinks();
    }

    tryToCreateOverlay();

    var simpleGridElems = el.querySelectorAll('.js-relap__items-simple-grid');

    if (simpleGridElems.length) {
      for (var i = 0; i < simpleGridElems.length; i++) {
        grids.push(new SimpleGrid({
          el: simpleGridElems[i],
          widgetParams: widgetParams,
          PRESERVE_ROWS_QUANTITY: PRESERVE_ROWS_QUANTITY,
          RESPONSIVE_TITLE_FONT: RESPONSIVE_TITLE_FONT,
          FULL_ITEM_CLICKABLE: FULL_ITEM_CLICKABLE,
          refreshImgResizers: refreshImgResizers,
          cutTextBlocks: cutTextBlocks,
        }));
      }
    } else {
      grids.push(new SimpleGrid({
        el: topContainerEl,
        widgetParams: widgetParams,
        PRESERVE_ROWS_QUANTITY: PRESERVE_ROWS_QUANTITY,
        RESPONSIVE_TITLE_FONT: RESPONSIVE_TITLE_FONT,
        FULL_ITEM_CLICKABLE: FULL_ITEM_CLICKABLE,
        refreshImgResizers: refreshImgResizers,
        cutTextBlocks: cutTextBlocks,
      }));
    }

    for (var i = 0; i < items.length; i++) {
      initItem(items[i]);
    }

    var logoLink = el.getElementsByClassName('js-relap__logo')[0];

    if (logoLink && IS_PREVIEW) {
      logoLink.addEventListener('click', previewClickHandler, false);
    }

    w.addEventListener('resize', resizeHandler, false);

    if (WIDGET_TYPE === 'toster' || WIDGET_TYPE === 'popup'){
      w.addEventListener('scroll', onWindowScroll, false);
    }

    if (widgetParams.presetName === 'holderPlates') {
      document.body.addEventListener('mouseleave', mouseleaveHandler, false);
    }

    /*событые очистки handler'ов*/
    d.body.addEventListener('destroyPreview', handleClearHandlers, false);

    debouncedOnScrollFunc = debounce(onWindowScrollInternal, 250);
    debouncedResizeHandler = debounce(resizeWidget, 250);

    prepareWidgetBeforeShow();

    widgetCloseBtn = el.querySelector('.js-relap-widget-close');

    if (widgetCloseBtn) {
      widgetCloseBtn.addEventListener('click', function() {
        el.parentNode.removeChild(el);
      });
    }

    function handlePopupWidget() {
      switch (WIDGET_TYPE) {
        case 'toster':
          el.className = 'relap-' + widgetParams.theme + '__popup-container';

          if (widgetParams.shadow) {
            addClassName(el, 'relap-' + widgetParams.theme + '__with-shadow');
          }

          if (widgetParams.presetName === 'tosterHorizontalPlates') {
            addClassName(el, 'relap-' + widgetParams.theme + '__horizontal-toster');
          }

          switch (widgetParams.position) {
            case 'center':
              addClassName(el, 'relap-' + widgetParams.theme + '__pos-center');
            case 'right':
              addClassName(el, 'relap-' + widgetParams.theme + '__pos-right');
              break;
            case 'left':
              addClassName(el, 'relap-' + widgetParams.theme + '__pos-left');
          }

          /*навешиваем анимацию*/
          addClassName(el, 'relap-' + widgetParams.theme + '__animate');

          elParent = d.body;
          elParent.appendChild(el);
          break;
        case 'popup':
          popupWidgetEl = d.createElement('div');
          popupWidgetEl.className = 'relap-' + widgetParams.theme + '__popup-widget-container';

          if (widgetParams.presetName === 'holderPlates') popupWidgetEl.className += ' relap-' + widgetParams.theme + '__popup-widget-container__holder';

          var fullscreenClassName = function(classname) {
            return widgetParams.presetName === 'fullScreenPopup' && classname !== undefined ? ' relap-' + widgetParams.theme + '__popup-widget'+ (classname === '' ? '' : '-' + classname)  +'-fullscreen ' : '';
          }

          var bgEl = d.createElement('div');
          bgEl.className = 'relap-' + widgetParams.theme + '__popup-widget-bg';

          popupWidgetContentEl = d.createElement('div');
          popupWidgetContentEl.className = 'relap-' + widgetParams.theme + '__popup-widget-content' +
            ' ' + fullscreenClassName('') + 'js-relap-popup-widget-content';

          if (widgetParams.presetName !== 'fullScreenPopup') {
            popupWidgetContentEl.style.minWidth = widgetParams.widgetMinWidth + 'px';
            popupWidgetContentEl.style.maxWidth = widgetParams.widgetMaxWidth + 'px';
          }

          popupWidgetContentEl.appendChild(el);

          addClassName(el, 'relap-' + widgetParams.theme + '__popup-widget-content-inner' + fullscreenClassName('content-inner'));

          popupWidgetEl.appendChild(bgEl);
          popupWidgetEl.appendChild(popupWidgetContentEl);
          elParent = d.body;
          elParent.appendChild(popupWidgetEl);

          break;
      }

      SHOW_POS_PERCENT = widgetParams.showPosPercent || 100;
    }

    function handleInlineWidget() {
      switch (WIDGET_TYPE) {
        case 'plain':
        case 'side':
        case 'inset':
        default:
          el.className = 'relap-' + widgetParams.theme + '-wrapper';
      }

      var similarPagesScripts = d.getElementsByClassName('relap-sp_' + widgetId);

      for (var i = 0; i < similarPagesScripts.length; i++) {
        if (similarPagesScripts[i].getAttribute('data-init')) continue;
        initScript(similarPagesScripts[i]);
      }

      function initScript(scriptEl) {
        scriptEl.setAttribute('data-init', 1);
        elParent = scriptEl.parentNode;
        elParent.insertBefore(el, scriptEl);
      }
    }

    function prepareWidgetBeforeShow() {
      var preloaderEl;

      if (widgetParams.hasPreloader) {
        preloaderEl = createPreloader();
      }

      hideWidget();

      if (executeOnWidgetPreloaderShow) {
        try {
          executeOnWidgetPreloaderShow(preloaderEl);
        } catch(e) {
        }
      }

      onImagesComplete({
        imgElems: el.getElementsByTagName('img'),
        onComplete: function() {
          showWidget();
          onWidgetReady();
          setTimeout(function() {
            resizeWidget(true);
          }, 500);
          setTimeout(function() {
            resizeWidget(true);
          }, 1000);
        },
        timeout: Infinity
      });

      function createPreloader() {
        var el = d.createElement('div');
        var spinnerEl = d.createElement('span');

        el.className = 'relap-' + widgetParams.theme + '__preloader';
        spinnerEl.className = 'relap-' + widgetParams.theme +
          '__preloader-spinner';

        el.appendChild(spinnerEl);

        return el;
      }

      function hideWidget() {
        el.style.display = 'none';
        el.style.position = 'absolute';
        el.style.left = '-99999px';

        if (!preloaderEl) return;

        try {
          el.parentNode.insertBefore(preloaderEl, el);
        } catch(e) {
        }
      }

      function showWidget() {
        el.style.display = '';
        el.style.position = '';
        el.style.left = '';

        if (!preloaderEl || !preloaderEl.parentNode) return;

        try {
          preloaderEl.parentNode.removeChild(preloaderEl);
        } catch(e) {
        }
      }
    }
  }

  function initItem(item) {
    var links = item.getElementsByClassName('js-relap__item-link');
    var innerLinks = item.getElementsByClassName('js-relap-extended-offer-inner-link');

    for (var i = 0; i < links.length; i++) {
      initLink(links[i]);
    }

    for (var i = 0; i < innerLinks.length; i++) {
      initInnerLink(innerLinks[i]);
    }

    initEllipsizer(item);
    loadExternalScripts(item);
    handleOnLoadStatImages(item);

    for (var i = 0; i < grids.length; i++) {
      grids[i].findItems();
      grids[i].update();
    }

    function initLink(link) {
      if (IS_PREVIEW) {
        link.addEventListener('click', previewClickHandler, false);
      } else if (!link.hasAttribute('data-init')) {
        link.addEventListener('mouseup', clickHandler, false);
        link.addEventListener('click', clickHandler, false);
        if (link.hasAttribute('data-inline-video')) {
          var inlineVideoIframe = link.querySelector('iframe');
          if (inlineVideoIframe) {
            /* прячем общую кнопку закрытия, так как для видео есть своя */
            if (widgetCloseBtn) {
              widgetCloseBtn.style.display = 'none';
            }
            /* vpaid работает так ненадёжно, что лучше всё спрятать до поры до времени */
            topContainerEl.style.display = 'none';
            function sendMessageToIframe(message) {
              var ifrm = link.querySelector('iframe');
              if (ifrm !== null) ifrm.contentWindow.postMessage(message, inlineVideoIframe.src);
            }
            function sendVastToIframe(storageKey) {
              var vastConfig = sessionStorage.getItem(storageKey);
              if (vastConfig) sendMessageToIframe(vastConfig);
              sessionStorage.removeItem(storageKey);
            }
            function loadVastConfig(vastLoadConfig) {
              vastLoadConfig = JSON.parse(vastLoadConfig);
              startVideoAt = 0.1;
              var extParams = [];
              var extConfigurer = new w.relap.ExtConfigurer({
                cfg: vastLoadConfig,
                extParams: extParams,
                complete: function() {
                  if (!extParams[0]) return; /* vast не загрузился */
                  /* достаём из extParams путь, по которому сохранён полный vast */
                  sendVastToIframe(extParams[0].split('=', 2)[0]);
                }
              });
            }
            /* включить видео в ифрейме, когда он окажется во viewport, и
               послать событие impression при минимальном пересечении */
            var impression_is_sent = false;
            function checkIframeIsVisibleEnough() {
              var intersection = rectsIntersectPercentage(getElementRect(inlineVideoIframe), getViewportRect());

              if (!isNaN(intersection)) {
                if (!impression_is_sent && intersection > 0) {
                  impression_is_sent = true;
                  sendMessageToIframe('impression');
                }
                if (intersection >= 0.25) {
                  sendMessageToIframe('play');
                } else {
                  sendMessageToIframe('pause');
                }
              }
            }
            function checkWidgetWithinViewport() {
              /* виджет (а именно topContainerEl) с гпмд на данный момент скрыт,
                 поэтому проверяем враппер (который на уровень выше и не скрыт) */
              if ( rectsIntersect(getElementRect(el), getViewportRect()) ) {
                w.removeEventListener('scroll', checkWidgetWithinViewport, false);
                w.removeEventListener('resize', checkWidgetWithinViewport, false);

                var link = findClosestAncestor(inlineVideoIframe, 'a');
                var vastLoadConfig = link.getAttribute('data-vast-load-config');
                if (vastLoadConfig) { /* необычный случай - vast надо загрузить сейчас */
                  link.removeAttribute('data-vast-load-config');
                  loadVastConfig(vastLoadConfig);
                }
              }
            }

            /*
                принять сообщение от ифрейма (и начать проверять, нельзя ли начать
                воспроизведение видео).
            */
            var mouseOverCheckerInterval, mouseIsOverIframe;
            w.addEventListener('message', function (event) {
              if (event.data == 'relap_video_ad_iframe_js_ready') {
                if (link.hasAttribute('data-vast-load-config')) {
                  w.addEventListener('scroll', checkWidgetWithinViewport, false);
                  w.addEventListener('resize', checkWidgetWithinViewport, false);
                  checkWidgetWithinViewport();
                }

                var vastStorageKey = link.getAttribute('data-vast-storage-key');
                if (vastStorageKey) { /* обычный случай - vast уже загружен */
                  sendVastToIframe(vastStorageKey);
                }

              } else if (event.data == 'relap_video_ad_iframe_video_ready') {
                /* для регулировки звука по наведению */
                link.addEventListener('mouseenter', function (event) {
                  mouseIsOverIframe = true;
                  sendMessageToIframe('mouseenter');
                }, false);
                link.addEventListener('mouseleave', function (event) {
                  mouseIsOverIframe = false;
                  sendMessageToIframe('mouseleave');
                }, false);
                /* mouseleave можно и проебать; напишем фолбэк */
                mouseOverCheckerInterval = setInterval(function () {
                  var mouseIsOverIframeFallback = matchesSelector(link, ':hover');
                  if (mouseIsOverIframe && !mouseIsOverIframeFallback) {
                    mouseIsOverIframe = false;
                    sendMessageToIframe('mouseleave');
                  } else if (!mouseIsOverIframe && mouseIsOverIframeFallback) {
                    mouseIsOverIframe = true;
                    sendMessageToIframe('mouseenter');
                  }
                }, 500);
                topContainerEl.style.display = 'block';

                w.addEventListener('scroll', checkIframeIsVisibleEnough, false);
                w.addEventListener('resize', checkIframeIsVisibleEnough, false);
                checkIframeIsVisibleEnough();

              } else if (event.data == 'relap_video_ad_iframe_plays') {
                /*
                  так как сейчас мы останавливаем видео, если перекрытие плеера и окна
                  браузера падает ниже какого-то уровня, то не убираем эти листенеры
                w.removeEventListener('scroll', checkIframeIsVisibleEnough, false);
                w.removeEventListener('resize', checkIframeIsVisibleEnough, false);
                */

              } else if (event.data == 'relap_video_ad_iframe_click') {
                /*
                  отправляем наши пиксели как обычно через обработчик клика,
                  подсунув фейковый объект эвента
                */
                clickHandler.apply(link, [{ isFake: true, openLinkInNewTab: true }]);
                sendMessageToIframe('zerovolume');

              } else if (event.data == 'relap_vpaid_iframe_click') {
                /*
                  с нашей стороны нужно лишь отправить пиксель event click
                  переход на нужную страницу делает vpaid контейнер
                */
                clickHandler.apply(link, [{ vpaidClick: true }]);
                sendMessageToIframe('zerovolume');

              } else if (event.data == 'relap_video_ad_iframe_close') {
                clearInterval(mouseOverCheckerInterval);
                topContainerEl.parentElement.removeChild(topContainerEl);
                w.removeEventListener('scroll', checkIframeIsVisibleEnough, false);
                w.removeEventListener('resize', checkIframeIsVisibleEnough, false);

              } else if (event.data == 'relap_video_ad_iframe_ended') {
                setTimeout(function(){
                  handleRecSwap('1', null, {
                    rid: link.getAttribute('data'),
                    skip_urls: getSkipURL()
                  });
                }, 500);
              }
            }, false);
            /* дополнительно - добавить проверку в widgetShown; а то ифрейм может
               прислать сообщение о готовности раньше, чем виджет прогрузился
               и занял место на экране */
            var oldExecuteOnWidgetShown = executeOnWidgetShown || function () {};
            executeOnWidgetShown = function (el) {
              if (link.hasAttribute('data-vast-load-config')) {
                checkWidgetWithinViewport();
              }
              checkIframeIsVisibleEnough();
              oldExecuteOnWidgetShown(el);
            };
          } else {
            log('relap: no iframe found in video ad widget');
          }
        }
        
        if (link.hasAttribute('data-inline-video-chain')) {
          function sendMessageToIframe(message) {
            var inlineVideoIframe = link.querySelector('iframe');
            if (!inlineVideoIframe) return;
            inlineVideoIframe.contentWindow.postMessage(message, inlineVideoIframe.src);
          }
          w.addEventListener('message', function (event) {
            if (event.data == 'relap_video_ad_iframe_click') {
              /*
                отправляем наши пиксели как обычно через обработчик клика,
                подсунув фейковый объект эвента
              */
              clickHandler.apply(link, [{ isFake: true, openLinkInNewTab: true }]);
              sendMessageToIframe('zerovolume');

            } else if (event.data == 'relap_vpaid_iframe_click') {
              /*
                с нашей стороны нужно лишь отправить пиксель event click
                переход на нужную страницу делает vpaid контейнер
              */
              clickHandler.apply(link, [{ vpaidClick: true }]);
              sendMessageToIframe('zerovolume');
            }
          }, false);
        }
        
        if (link.hasAttribute('data-custom-iframe-rec')) {
          w.addEventListener('message', function (event) {
            var parsedData;

            try {
              parsedData = JSON.parse(event.data);
            } catch (e) {
            }

            if (parsedData &&
                parsedData !== null &&
                typeof parsedData === 'object') {

              var iframeSelector = parsedData.iframeId !== undefined ? '#' + parsedData.iframeId : '.relapCustomIframe';
              var iframeEl = link.parentNode.querySelector(iframeSelector);

              if (parsedData.eventType === 'relapCustomIframeRecClick') {
                if (iframeEl) {
                  clickHandler.apply(link, [{
                    isFake: true,
                    openLinkInNewTab: link.getAttribute('target') === '_blank',
                  }]);
                }
              } else if (parsedData.eventType === 'relapCustomIframeCloseWidget') {
                if (iframeEl) {
                  var parent = iframeEl.parentNode;
                  parent.removeChild(iframeEl);
                }
              } else if (parsedData.eventType === 'relapCustomIframeSetSize') {
                if (iframeEl && parsedData.size !== undefined) {
                  iframeEl.style.height = parsedData.size + 'px';
                }
              } else if (parsedData.eventType === 'relapCustomIframeDomLoaded') {
                /* pass */
              } else if (parsedData.eventType === 'relapCustomIframeRemoveWidget') {
                if (topContainerEl) {
                  clearInterval(mouseOverCheckerInterval);
                  topContainerEl.parentElement.removeChild(topContainerEl);
                  w.removeEventListener('scroll', checkIframeIsVisibleEnough, false);
                  w.removeEventListener('resize', checkIframeIsVisibleEnough, false);

                  topContainerEl = null;
                }
              } else if (parsedData.eventType === 'relapCustomIframeNoSimilarPages') {
                try {
                  executeOnNoSimilarPages(widgetId);
                } catch(e){}
              } else if (parsedData.eventType === 'relapCustomIframeSwapAdPlate') {
                setTimeout(function(){
                  handleRecSwap('1', null, {
                    rid: link.getAttribute('data'),
                    skip_urls: getSkipURL(),
                    is_common_ad: topContainerEl.getAttribute('data-all-plates-is-ad')
                  });
                }, 500);
              }
            }
          }, false);
        }

        link.setAttribute('data-init', 'true');
      }
    }

    function initInnerLink(innerLink) {
      if (IS_PREVIEW) {
        innerLink.addEventListener('click', previewClickHandler, false);
      } else if (!innerLink.hasAttribute('data-init')) {
        innerLink.addEventListener('click', handleInnerLinkClick, false);
        innerLink.setAttribute('data-init', 'true');
      }
    }

    function initEllipsizer(item) {
      if (HEAD_LINES_COUNT || CUT_TEXT_UNTIL_THUMBNAIL_BOTTOM) {
        initTitle();
      }

      if (DESC_LINES_COUNT || CUT_TEXT_UNTIL_THUMBNAIL_BOTTOM) {
        initDescription();
      }

      function initTitle() {
        var title = item
          .getElementsByClassName('js-relap__item-title-text')[0];

        if (!title) return;

        var thumbnail = item
          .getElementsByClassName('js-relap__item-thumbnail')[0];

        var ellipsizerOpts = {
          maxLines: HEAD_LINES_COUNT
        };

        if (CUT_TEXT_UNTIL_THUMBNAIL_BOTTOM && thumbnail) {
          ellipsizerOpts.cutUntilEl = thumbnail;
        }

        if (title.getAttribute('data-ellipsizer-hide-overflowing-items') == 'false') {
          ellipsizerOpts.ellipsizeOverflowingItems = false;
        } else {
          ellipsizerOpts.ellipsizeOverflowingItems = true;
        }

        if (title.getAttribute('data-ellipsizer-own-trim') == 'true') {
          ellipsizerOpts.useOwnTrimFunc = true;
        } else {
          ellipsizerOpts.useOwnTrimFunc = false;
        }

        if (title) {
          ellipsizers.push(new Ellipsizer(title, ellipsizerOpts));
        }
      }

      function initDescription() {
        var descr = item
          .getElementsByClassName('js-relap__item-description')[0];

        if (!descr) return;

        var thumbnail = item
          .getElementsByClassName('js-relap__item-thumbnail')[0];

        var ellipsizerOpts = {
          maxLines: DESC_LINES_COUNT
        };

        if (CUT_TEXT_UNTIL_THUMBNAIL_BOTTOM && thumbnail) {
          ellipsizerOpts.cutUntilEl = thumbnail;
        }

        if (descr.getAttribute('data-ellipsizer-hide-overflowing-items') == 'false') {
          ellipsizerOpts.ellipsizeOverflowingItems = false;
        } else {
          ellipsizerOpts.ellipsizeOverflowingItems = true;
        }

        if (descr.getAttribute('data-ellipsizer-own-trim') == 'true') {
          ellipsizerOpts.useOwnTrimFunc = true;
        } else {
          ellipsizerOpts.useOwnTrimFunc = false;
        }

        if (descr) {
          ellipsizers.push(new Ellipsizer(descr, ellipsizerOpts));
        }
      }
    }

    function loadExternalScripts(item) {
      var scriptLoaderElems = item.querySelectorAll('.js-relap-script-loader');

      for (var i = 0; i < scriptLoaderElems.length; i++) {
        var scripts;

        try {
          scripts = JSON.parse(scriptLoaderElems[i].textContent);
        } catch(e) {
        }

        if (!scripts) continue;

        for (var j = 0; j < scripts.length; j++) {
          var script = document.createElement('script');
          script.src = scripts[j];
          scriptLoaderElems[i].parentNode.insertBefore(script, scriptLoaderElems[i]);
        }
      }
    }

    function handleOnLoadStatImages(item) {
      var links = item.getElementsByClassName('js-relap__item-link');

      for (var i = 0; i < links.length; i++) {
        var onLoadAttr = links[i].getAttribute('data-onload-images');
        if (!onLoadAttr) continue;

        try {
          onLoadArr = JSON.parse(onLoadAttr);
          w.relap.onLoadImages.queue(onLoadArr);
        } catch(e) {
        }
      }

      sendOnLoadGA();


      function sendOnLoadGA() {
        if (!gaCfg.onLoad.category || !gaCfg.onLoad.action) return;
        if (gaCfg.onLoad.once && w.relap.gaEventStatus.onLoad) return;

        w.relap.gaEventStatus.onLoad = true;

        onFuncReady({
          funcName: 'ga',
          args: ['send', {
            'hitType': 'event',
            'eventCategory': gaCfg.onLoad.category,
            'eventAction': gaCfg.onLoad.action,
            'eventLabel': gaCfg.onLoad.label,
            'hitCallback': function() {
              log('ga onLoad sent success!!!');
            }
          }],
          onError: function() {
            log('ga onLoad failed because func is not found for id: ' + widgetId);
          }
        });
      }
    }
  }

  function handleBlockScrolledTo(block) {
    if (!block) return;

    w.addEventListener('scroll', checkBlockScrolledTo, false);
    w.addEventListener('resize', checkBlockScrolledTo, false);
    checkBlockScrolledTo();
  }

  function checkBlockScrolledTo() {
    if (!widgetReady) return;
    if (WIDGET_TYPE == 'toster' || WIDGET_TYPE == 'popup') return;

    try {
      var recGroup = topContainerEl.getAttribute('data');

      if (!rectsIntersect(getViewportRect(), getElementRect(topContainerEl))) return;

      if (!widgetScrolled) { handleWidgetShown() }
      widgetScrolled = true;
      var platesWithOnShow = 0, platesWithOnShowShown = 0, linksSize = links.length, onShowImages = [];
      for (var i = 0; i < linksSize; i++) {
        /*log('checkBlockScrolledTo, link', i);*/
        var link = links[i];
        var onShowAttr = link.getAttribute('data-onshow-images');
        var isAd = link.hasAttribute('data-ad-link');
        var isExchange = link.hasAttribute('data-exchange-link');
        if (onShowAttr || isAd || isExchange) {
          platesWithOnShow++;
          if (link.hasAttribute('data-is-shown')) { platesWithOnShowShown++; }
          else if (rectsIntersect(getViewportRect(), getElementRect(link))) {
            link.setAttribute('data-is-shown', 1);
            platesWithOnShowShown++;
            if (onShowAttr) {
              try {
                var o = JSON.parse(onShowAttr);
                onShowImages = onShowImages.concat(o);
              } catch(e){};
            }
            if (isAd) { onShowImages.push(makeImpPix(link)) }
            if (isExchange) { onShowImages.push(makeExchangePix(link)) }
            /*log('    rectsIntersect, onShowImages so far', onShowImages);*/
          }
        } else { /* nothing */ }
      }
      if (onShowImages.length > 0) { w.relap.onShowImages.queue(onShowImages); }
      /*log('checkBlockScrolledTo ended, platesWithOnShowShown and platesWithOnShow is', platesWithOnShowShown, platesWithOnShow);*/
      if (platesWithOnShowShown >= platesWithOnShow) {
        w.removeEventListener('scroll', checkBlockScrolledTo, false);
        w.removeEventListener('resize', checkBlockScrolledTo, false);
      }
    } catch(e) { log(e) }
  }

  function handleWidgetShown() {
    var recGroup = topContainerEl.getAttribute('data');

    if (!recGroup) return;

    log('widget shown: ' + WIDGET_TYPE + ', id: ' + widgetId);
    topContainerEl.removeAttribute('data');

    var onShowImages = [];
    if (WIDGET_TYPE == 'toster' || WIDGET_TYPE == 'popup') {
      for (var i = 0; i < links.length; i++) {
        var onShowAttr = links[i].getAttribute('data-onshow-images');
        if (onShowAttr) {
          try {
            var o = JSON.parse(onShowAttr);
            onShowImages = onShowImages.concat(o);
          } catch(e) {};
        }
        if (links[i].hasAttribute('data-ad-link')) {
          onShowImages.push(makeImpPix(links[i]));
        }
        if (links[i].hasAttribute('data-exchange-link')) {
          onShowImages.push(makeExchangePix(links[i]));
        }
      }
    }

    w.relap.onShowImages.queue(onShowImages);
    tryToSendViewPixel();

    if (executeOnWidgetShown) {
      try {
        executeOnWidgetShown(el);
      } catch(e) {
      }
    }
    sendOnShowGA();

    function sendOnShowGA() {
      if (!gaCfg.onShow.category || !gaCfg.onShow.action) return;
      if (gaCfg.onShow.once && w.relap.gaEventStatus.onShow) return;

      w.relap.gaEventStatus.onShow = true;

      onFuncReady({
        funcName: 'ga',
        args: ['send', {
          'hitType': 'event',
          'eventCategory': gaCfg.onShow.category,
          'eventAction': gaCfg.onShow.action,
          'eventLabel': gaCfg.onShow.label,
          'hitCallback': function() {
            log('ga onShow sent success!!!');
          }
        }],
        onError: function() {
          log('ga onShow failed because func is not found for id: ' + widgetId);
        }
      });
    }
  }

  function tryToSendViewPixel() {
    if (
      (rectsIntersect(getElementRect(el), getViewportRect()) && WIDGET_TYPE !== 'toster') ||
      (WIDGET_TYPE === 'toster' && hasClassName(el, 'relap-' + widgetParams.theme + '__visible') && el.style.display !== 'none')
    ) {
      w.relap.onShowImages.queue([{src: viewPixelSrc, timeout: 1000}]);
    }
  }

  function makeImpPix (link) {
    return {
      "src": "https://relap.io/api/v1/pixel.gif?event=imp"+
        '&r='+encodeURIComponent(link.getAttribute('data'))+
        '&'+pixelSecretSessionParamName+'='+encodeURIComponent(pixelSecretSessionParam),
      "timeout": 1000
    };
  }
  function makeExchangePix (link) {
    return {
      "src": "https://relap.io/api/v1/pixel.gif?event=exchange_view"+
        '&r='+encodeURIComponent(link.getAttribute('data'))+
        '&'+pixelSecretSessionParamName+'='+encodeURIComponent(pixelSecretSessionParam),
      "timeout": 1000
    };
  }

  function getSkipURL() {
    function deduplicateSkipURLs(arr) {
      var seen = {};
      var out = [];
      var len = arr.length;

      for(var i = 0; i < len; i++) {
        var item = arr[i];

        if(seen[item] !== 1) {
          seen[item] = 1;
          out.push(item);
        }
      }

      return out;
    };

    for (var i = 0; items.length > i; i++) {
      var c = items[i].querySelector('.js-relap__item-link');
      if (c.getAttribute('data-ad-link') === 'true') {
        skip_url.push(c.getAttribute('data-skip-url'));
      };
    };

    return deduplicateSkipURLs(skip_url).join(',');
  }

  /* http://stackoverflow.com/a/30101330/320345 */
  var matchesSelector = (function(ElementPrototype) {
    var fn = ElementPrototype.matches ||
             ElementPrototype.matchesSelector ||
             ElementPrototype.webkitMatchesSelector ||
             ElementPrototype.mozMatchesSelector ||
             ElementPrototype.msMatchesSelector ||
             ElementPrototype.oMatchesSelector ||
             function (s) {
               var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                 i = matches.length;
               while (--i >= 0 && matches.item(i) !== this) {}
               return i > -1;
             };
    return function(element, selector) {
      return fn.call(element, selector);
    };
  })(Element.prototype);

  function findClosestAncestor(el, selector) {
    var limit = 1000;

    while (limit--) {
      el = el.parentElement;

      if (!el) return null;
      if (matchesSelector(el, selector)) return el;
    }

    return null;
  }

  function switchAdPlatesByTimeout(){
    function getAdPlates(){
      var positions = [[], [], []];

      for (var i = 0; items.length > i; i++) {
        var current_item = items[i];
        var current_link = current_item.querySelector('.js-relap__item-link');

        if (current_link.getAttribute('data-ad-link') === 'true' &&
            !current_link.hasAttribute('data-inline-video') &&
            !hasClassName(current_item, 'js-relap__custom-wide-inset-rec-item')) {
          positions[0].push(current_link.getAttribute('data-position'));
          positions[1].push(current_item);
          positions[2].push(current_link.getAttribute('data'));
        };
      };
      return positions;
    }

    var delta = 0;
    var delta_incr = 1 * 1000;
    function handleSwap(num, rid){
      timeouts[num] = setTimeout(function(){
        var obj = {
          rid: rid,
          skip_urls: getSkipURL(),
          is_common_ad: topContainerEl.getAttribute('data-all-plates-is-ad')
        };

        handleRecSwap(num, null, obj);
      }, delay + delta);
      delta += delta_incr;
    }

    function clearTimeouts(num){
      if (num) {
        clearTimeout(timeouts[num]);
      } else {
        for (var i = 0; timeouts.length > i; i++) {
          clearTimeout(timeouts[i]);
        }
      }
    }

    var delay = (widgetParams.swapAdPlatesTimeout == undefined ? 999999 : parseInt(widgetParams.swapAdPlatesTimeout)) * 1000;
    var adPlates = null;
    var timeouts = [];
    var widget_seen = null;
    var change_first = true;
    var change_second = false;
    var need_to_update_adplates = true;
    var defaultIntersectPercentage = widgetParams.swapAdPlatesIntersectPercentage == undefined ? 0.01 : widgetParams.swapAdPlatesIntersectPercentage;

    return function(){
      if (adPlates === null) {
        adPlates = getAdPlates();
      }

      var intersectionPercentage = (rectsIntersectPercentage(getElementRect(el), getViewportRect()) * 100).toFixed();

      if (intersectionPercentage > defaultIntersectPercentage) {
        widget_seen = true;

        if (change_first || change_second) {
          if (adPlates[0].length > 0) {

            for (var i = adPlates[0].length - 1; i >= 0; i--) {
              if (rectsIntersect(getElementRect(adPlates[1][i]), getViewportRect())) {
                handleSwap(adPlates[0][i], adPlates[2][i]);
                adPlates[0].splice(i, 1);

                if (i === 0 && change_second) change_second = false;
              } else {
                clearTimeouts(adPlates[0][i]);
              }
            }
          }
        }
      } else {
        if (change_first && widget_seen) {
          change_second = true;
          change_first = false;

          if (need_to_update_adplates) {
            adPlates = getAdPlates();
            need_to_update_adplates = false;
          }
        }

        clearTimeouts();
      }
    }
  }

  /* https://gist.github.com/scottjehl/2051999 */
  var _viewportSize = null;
  function calcViewportSize() {
    var test = document.createElement( "div" );
    test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
    d.documentElement.insertBefore(test, d.documentElement.firstChild);
    _viewportSize = { width: test.offsetWidth, height: test.offsetHeight };
    d.documentElement.removeChild(test);
    return _viewportSize;
  }
  w.addEventListener('resize', calcViewportSize, false);
  function getViewportRect() {
    var x = getDocScrollLeft();
    var y = getDocScrollTop();
    var size = _viewportSize || calcViewportSize();
    return [x, y, x+size.width, y+size.height];
  }

  function getElementRect(element) {
    var viewport = getViewportRect();
    var rect = element.getBoundingClientRect(); /* relative to viewport */
    return [viewport[0] + rect.left, viewport[1] + rect.top, viewport[0] + rect.right, viewport[1] + rect.bottom];
  }

  function rectsIntersect(a, b) {
    return a[0] < b[2] && a[2] > b[0] && a[1] < b[3] && a[3] > b[1];
  }

  /* на сколько процентов своей площади первый прямоугольник (small) попадает во второй (big) */
  function rectsIntersectPercentage(small, big) {
    var x_overlap = Math.max(0, Math.min(small[2], big[2]) - Math.max(small[0], big[0]));
    var y_overlap = Math.max(0, Math.min(small[3], big[3]) - Math.max(small[1], big[1]));
    return (x_overlap * y_overlap) / ( (small[2]-small[0]) * (small[3]-small[1]) );
  }

  function previewClickHandler(event) {
    event.preventDefault();
  }

  function createOverlayClickHandler(linkEl, overlayEl) {
    return function(event) {
      event.isFake = true;
      event.openLinkInNewTab = true;

      clickHandler.call(linkEl, event);
      setTimeout(function() {
        d.body.removeChild(overlayEl);
      }, 0);
    };
  }

  function clickHandler(event) {
    var self = this;
    var href = this.getAttribute('href');

    if (href === 'javascript:void(0)') {
        return;
    }

    var sbrid = this.getAttribute('data');
    var position = this.getAttribute('data-position');
    var forceOpenLinkInNewTab = event.isFake && event.openLinkInNewTab;
    var eType = event.type;
    var which = event.which;
    var ctrlPushed = event.ctrlKey || event.metaKey;
    var videoSrc = this.getAttribute('data-link-video');
    var seedrSID = this.getAttribute('data-seedr-sid');
    var isTargetBlank = this.getAttribute('target') === '_blank';
    var isAd = this.getAttribute('data-ad-link');
    var onClickAttr = this.getAttribute('data-onclick-images');

    /* клик на видео в vpaid контейнере */
    if (event.vpaidClick) {
        sendClick();
        return;
    }
    if (forceOpenLinkInNewTab) {
      if (w.open(href)) {
        sendClick();
      } else {
        sendClick(true);
      }
      return;
    }

    switch(eType) {
      case 'mouseup':
        if (which == 2) {
          sendClick();
        }
        break;
      case 'click':
        if (isTargetBlank || ctrlPushed) {
          sendClick();
          break;
        }

        if (which == 1) {
          event.preventDefault();

          if (seedrSID || videoSrc) {
            sendClick();
            createVideoPopup();
          } else {
            sendClick(true);
          }
        }
        break;
    }

    function sendClick(locationChange) {
      if (!href) return;

      if (sbrid) {
        self.removeAttribute('data');
        removeItemSbrid(self);

        if (executeOnItemClick) {
          try {
            executeOnItemClick(self, el);
          } catch(e) {
          }
        }

        sendClickToServer(locationChange);

      } else if (locationChange) {
          w.location = href;
      }

      function removeItemSbrid(link) {
        var parentNode = link.parentNode;

        while (parentNode) {

          if (hasClassName(parentNode, 'js-relap__item') ||
          hasClassName(parentNode, 'js-relap__top-container') ||
          parentNode === d.body) {
            break;
          }

          parentNode = parentNode.parentNode;
        }

        if (!hasClassName(parentNode, 'js-relap__item')) return;

        var links = parentNode.getElementsByClassName('js-relap__item-link');
        for (var i = 0; i < links.length; i++) {
          links[i].removeAttribute('data');
        }

        function hasClassName(el, className) {
          if (!el) return false;
          var elClassName = el.className ? el.className : ' ';
          var classes = elClassName.split(' ');

          for (var i = 0; i < classes.length; i++) {
            if (classes[i] == className) return true;
          }

          return false;
        }
      }

      function sendClickToServer(locationChange) {
        var requestStatus = {
          gaComplete: false,
          imgStatComplete: false
        };

        var params = {};
        params.event = 'click';
        params[pixelClickParamName] = sbrid;
        params.url = href;
        params.referrer = w.location.href;
        params[pixelSecretSessionParamName] = pixelSecretSessionParam;

        var finalize = (function(location, locationShouldBeChanged) {
          return function() {
            if (!requestStatus.gaComplete ||
                !requestStatus.imgStatComplete) {
              return;
            }

            log('all stat on click complete');
            if (isAd) {
              
              if ((widgetParams.swapAdPlateByClick == undefined || widgetParams.swapAdPlateByClick == "1") &&
                !self.hasAttribute('data-inline-video')
                && !findClosestAncestor(self, '.js-relap__custom-wide-inset-rec-item')) {
                setTimeout(function() {
                  handleRecSwap(position, event, {
                    rid: (sbrid || ''),
                    skip_urls: getSkipURL(),
                    is_common_ad: topContainerEl.getAttribute('data-all-plates-is-ad')
                  });
                }, 500);
              }
            }

            if (locationShouldBeChanged) {
              w.location = location;
            }
          }
        })(href, locationChange);

        sendOnClickGA();

        try {
          var onClickArr = JSON.parse(onClickAttr);
        } catch(e) {
          onClickArr = [];
        }

        onClickArr.push({
          src: buildRequestURL(pixelSrcStart, params),
          timeout: 1000
        });

        loadImages({
          imagesArr: onClickArr,
          onComplete: function() {
            log('images on click complete');
            requestStatus.imgStatComplete = true;
            finalize();
          }
        });

        function sendOnClickGA() {
          var timeoutId;
          var gaObj;

          if (!gaCfg.onClick.category || !gaCfg.onClick.action) {
            requestStatus.gaComplete = true;
            finalize();
            return;
          }

          if (gaCfg.onClick.once && w.relap.gaEventStatus.onClick) {
            requestStatus.gaComplete = true;
            finalize();
            return;
          }

          w.relap.gaEventStatus.onClick = true;

          timeoutId = setTimeout(function() {
            requestStatus.gaComplete = true;
            finalize();
          }, 1000);

          gaObj = {
            'hitType': 'event',
            'eventCategory': gaCfg.onClick.category,
            'eventAction': gaCfg.onClick.action,
            'eventLabel': gaCfg.onClick.label,
            'hitCallback': function() {
              log('ga onClick sent success!!!');
              clearTimeout(timeoutId);
              requestStatus.gaComplete = true;
              finalize();
            }
          };

          if (gaCfg.onClick.valueType === 'position') {
            gaObj.eventValue = position;
          }

          onFuncReady({
            funcName: 'ga',
            args: ['send', gaObj],
            onError: function() {
              log('ga onLoad failed because func is not found for id: ' + widgetId);
            }
          });
        }

        function loadImages(opt) {
          var imagesArr = opt.imagesArr;
          var onComplete = opt.onComplete;

          var firedAway = false;

          for (var i = 0; i < imagesArr.length; i++) {
            loadImage(imagesArr[i]);
          }

          function loadImage(item) {
            var timeout = item.timeout || 500;

            var timeoutId = setTimeout(function() {
              log('extStat img completed by timeout: ' + item.src);
              item.loadComplete = true;
              tryToComplete();
            }, timeout);

            var img = new Image();
            img.onload = img.onerror = function() {
              log('extStat img loaded/error: ' + item.src);
              clearTimeout(timeoutId);
              item.loadComplete = true;
              tryToComplete();
            };

            img.src = item.src;
          }

          function tryToComplete() {
            if (!checkAllImagesComplete() || firedAway) return;

            firedAway = true;

            if (onComplete) onComplete();

            function checkAllImagesComplete() {
              for (var i = 0; i < imagesArr.length; i++) {
                if (!imagesArr[i].loadComplete) return false;
              }

              return true;
            }
          }
        }
      }
    }

    function createVideoPopup() {
      var popupEl = d.createElement('div');
      popupEl.className = 'relap-' + widgetParams.theme + '__popup-centered';
      popupEl.innerHTML = '<div class=\"relap-' + widgetParams.theme +
        '__popup-centered__bg js-relap__popup-bg\"></div>' +
      '<div class=\"relap-' + widgetParams.theme + '__popup-centered__content\">' +
        '<div class=\"relap-' + widgetParams.theme + '__popup-centered__content__close-link ' +
        'js-relap__popup-close\"></div>' +
        '<div class=\"relap-' + widgetParams.theme +
          '__popup-centered__content__video-iframe-container' +
          ' js-relap__popup-video-container\">' +
        '</div>' +
      '</div>';

      d.body.appendChild(popupEl);

      popupEl.addEventListener('click', onVideoPopupCloseClick, false);

      if (seedrSID) {
        createSeedrPlayer(seedrSID);
        return;
      }

      if (videoSrc) {
        createVideoIframe(videoSrc);
        return;
      }

      function onVideoPopupCloseClick(e) {
        var target = e.target;

        while (target != this) {
          if (hasClassName(target, 'js-relap__popup-bg') ||
              hasClassName(target, 'js-relap__popup-close')) {
            destroyVideoPopup();
          }

          target = target.parentNode;
        }

        function destroyVideoPopup() {
          popupEl.removeEventListener('click', onVideoPopupCloseClick, false);
          d.body.removeChild(popupEl);
        }
      }

      function createSeedrPlayer(seedrSID) {
        var videoContainerEl = popupEl
          .querySelector('.js-relap__popup-video-container');

        if (!videoContainerEl) return;

        var seedrPlayerContainerEl = d.createElement('div');
        seedrPlayerContainerEl.id = '___seedrPlayerContainer';
        seedrPlayerContainerEl.setAttribute('data-gid', seedrSID);

        videoContainerEl.appendChild(seedrPlayerContainerEl);
        initPlayer();

        function initPlayer() {
          w.seedrPlayer = {
            surl: w.top.location.href
          };

          w.onSeedrPlayerAPIPlay = function() {
            
            var img = new Image();
            img.src = href;
          };

          (function (a, b, c, d, e, f, g, h) {
            g = b.createElement(c);
            g.src = d;
            g.type = "application/javascript";
            g.async = !0;
            h = b.getElementsByTagName(c)[0];
            h.parentNode.insertBefore(g, h);
            a[f] = [];
            a[e] = function () {
              a[f].push(Array.prototype.slice.apply(arguments));
            }
          }) (w, d, "script", (d.location.protocol === "https:" ? "https:" : "http:") + "//seedr.com/js/seedr-player.min.js", "SeedrPlayer", "seedrInit");
        }
      }

      function createVideoIframe(iframeSrc) {
        var videoContainerEl = popupEl
          .querySelector('.js-relap__popup-video-container');

        if (!videoContainerEl) return;

        var iframeEl = d.createElement('iframe');
        iframeEl.src = iframeSrc;
        iframeEl.setAttribute('frameborder', 0);
        iframeEl.setAttribute('webkitallowfullscreen', '');
        iframeEl.setAttribute('mozallowfullscreen', '');
        iframeEl.setAttribute('allowfullscreen', '');
        addClassName(iframeEl, 'relap-' + widgetParams.theme +
          '__popup-centered__content__video-iframe');
        addClassName(iframeEl, 'js-relap__popup-video-iframe');

        videoContainerEl.appendChild(iframeEl);
      }
    }
  }

  function handleRecSwap(position, e, params_opts) {
    function isObjEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }

      return JSON.stringify(obj) === JSON.stringify({});
    };

    if (e) e.preventDefault();

    var URLStart = 'https://relap.io/api/v6/similar_pages_ritem_jsonp.js';
    var script = d.createElement('script');
    var params = {
      seed: seed,
      widget_id: widgetId,
      rgid: rgid,
      onlyAdsNeeded: 1,
      url: url,
      limit: 1,
      callback: 'window.relap.swapRec',
      rec_position: position,
      widget_instance_id: widgetInstanceId,
    };
    params[pixelSecretSessionParamName] = pixelSecretSessionParam;

    var payload = merge(queryParams, params);

    try {
      delete payload.wideSlotManager;
    } catch(e) {}

    if (params_opts !== undefined && !isObjEmpty(params_opts)) {
      payload = merge(payload, params_opts);
    }

    /* нужно для обновления плиток по таймауту */
    try {
      delete(payload.adSlotManager);
    } catch(e){};

    script.src = buildRecSrc(URLStart, payload);
    d.body.appendChild(script);
    d.body.removeChild(script);

    function merge(obj1, obj2) {
      var obj = {};

      for (var key in obj1) {
        if (!obj1.hasOwnProperty(key)) continue;
        obj[key] = obj1[key];
      }

      for (var key in obj2) {
        if (!obj2.hasOwnProperty(key)) continue;
        obj[key] = obj2[key];
      }

      return obj;
    }

    function buildRecSrc(URLStart, payload) {
      var paramStr = [];
      var string = '';

      for (var key in payload) {
        paramStr.push(key + '=' + encodeURIComponent(payload[key]));
      }

      var url = URLStart + '?' + paramStr.join('&');

      return url;
    }
  }

  function swapRec(opts) {
    var recHTML = opts.recHTML;
    var recPosition = opts.recPosition;

    var tempEl = d.createElement('div');
    tempEl.innerHTML = recHTML;
    var newItem = tempEl.getElementsByClassName('js-relap__item')[0];

    if (!newItem) return;

    var images = newItem.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      images[i].onload = onImageLoad;
      images[i].onerror = onImageLoad;
    }

    var newLinks = newItem.getElementsByClassName('js-relap__item-link');
    for (var i = 0; i < newLinks.length; i++) {
      newLinks[i].setAttribute('data-position', recPosition);
    }

    var oldElem;

    for (var i = 0; i < items.length; i++) {
      if (i != (recPosition - 1)) continue;
      oldElem = items[i];
      break;
    }

    if (!oldElem) return;

    oldElem.parentElement.replaceChild(newItem, oldElem);

    initItem(newItem);
    items = el.getElementsByClassName('js-relap__item');
    links = el.getElementsByClassName('js-relap__item-link');
    resizeWidget(true);
    handleOnShowPixels(newItem);

    function onImageLoad() {
      initImgResizers();
      resizeWidget(true);
    }

    function handleOnShowPixels(item) {
      var links = item.getElementsByClassName('js-relap__item-link');
      if (!links.length) return;
      var onShowImages = [];

      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var onShowAttr = link.getAttribute('data-onshow-images');
        var isAd = link.hasAttribute('data-ad-link');
        var isExchange = link.hasAttribute('data-exchange-link');

        if (onShowAttr || isAd || isExchange) {
          link.setAttribute('data-is-shown', 1);

          if (onShowAttr) {
            try {
              var o = JSON.parse(onShowAttr);
              onShowImages = onShowImages.concat(o);
            } catch(e){};
          }
          if (isAd) { onShowImages.push(makeImpPix(link)) }
          if (isExchange) { onShowImages.push(makeExchangePix(link)) }
        }
        if (onShowImages.length > 0) { w.relap.onShowImages.queue(onShowImages); }
      }
    }
  }

  function unescapeHTML(str) {
    if (!str) return;

    var div = document.createElement('div');
    div.innerHTML = str;
    return div.firstChild.data;
  }

  function tryToCreateOverlay() {
    overlayEl = document.getElementById('js-relap-overlay');
    if (!overlayEl) createOverlay();
    addHandlers();

    function createOverlay() {
      for (var i = 0; i < items.length; i++) {
        if (!hasClassName(items[i], 'js-relap__with-overlay')) continue;

        overlayEl = document.createElement('div');
        overlayEl.id = 'js-relap-overlay';
        overlayEl.style.position = 'fixed';
        overlayEl.style.top = '0';
        overlayEl.style.bottom = '0';
        overlayEl.style.left = '0';
        overlayEl.style.right = '0';
        overlayEl.style.zIndex = '10000000';
        document.body.appendChild(overlayEl);
        break;
      }
    }

    function addHandlers() {
      if (!overlayEl) return;

      for (var i = 0; i < items.length; i++) {
        if (!hasClassName(items[i], 'js-relap__with-overlay')) continue;

        var linkEl = items[i].querySelector('.js-relap__item-link');
        if (!linkEl) continue;

        if (overlayEl.getAttribute('data-has-handler')) return;

        overlayEl.addEventListener('click', createOverlayClickHandler(linkEl, overlayEl));
        overlayEl.setAttribute('data-has-handler', true);
      }
    }
  }

  function addUTMToLinks() {
    var useHash = false;
    var from = UTM_FROM;

    if (UTM_HASH_FROM) {
      useHash = true;
      from = UTM_HASH_FROM;
    }

    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      var appex;

      if (useHash) {
        appex = '#';
      } else {
        appex = '?';

        if (~href.indexOf('?')) {
          appex = '&';
        }
      }

      href += appex + from;
      links[i].setAttribute('href', href);
    }
  }

  function resizeHandler() {
    tryToSendViewPixel();
    debouncedResizeHandler();
  }

  function handleClearHandlers(event) {
    if (widgetId !== 'preview') return;

    w.removeEventListener('resize', resizeHandler, false);
    w.removeEventListener('scroll', onWindowScroll, false);
    d.body.removeEventListener('destroyPreview', handleClearHandlers, false);
  }

  function isWidgetMonetize(){
    var slots = widgetParams.adSlotManager || widgetParams.advBlocksCount || null;

    if (slots === null) {
      return false;
    } else {
      if (slots instanceof Array) {
        for(var i = 0; slots.length > i; i++) {
          if (slots[i] === 1) return true;
        }
      } else {
        return !!slots;
      }
    }
  };

  function hideWidgetByTimeout(){
    var is_fired = false;

    return function(){
      if (!is_fired) {
        if ( rectsIntersect(getElementRect(el), getViewportRect()) ) {
          is_fired = true;

          setTimeout(function(){
            addClassName(el, 'relap-' + widgetParams.theme + '__hide');

            setTimeout(function(){
              elParent.removeChild(el);
            }, 1000);
          }, widgetParams.autoHideInSec * 1000);
        }
      }
    }
  };

  function onWidgetReady() {
    widgetReady = true;
    resizeWidget(true);
    initImgResizers();
    resizeWidget(true);

    if (widgetParams.autoHideInSec !== undefined && widgetParams.autoHideInSec !== 0) {
      (function(){
        var hwbt = hideWidgetByTimeout();

        hwbt();
        w.addEventListener('scroll', hwbt, false);
        w.addEventListener('resize', hwbt, false);
      }());
    };

    if (isWidgetMonetize()) {
      (function(){
        var iuww = switchAdPlatesByTimeout();

        iuww();
        w.addEventListener('scroll', iuww, false);
        w.addEventListener('resize', iuww, false);
      }())
    }

    if (executeOnWidgetReady) {
      try {
        executeOnWidgetReady(el);
      } catch(e) {
      }
    }

    if (WIDGET_TYPE == 'toster' || WIDGET_TYPE === 'popup') {
      onWindowScroll();
    } else {
      checkBlockScrolledTo();
    }
  }

  function initImgResizers() {
    if (!CLIENT_SIDE_CROP) return;

    var imgElems = el.getElementsByClassName('js-relap__item-thumbnail__img');

    for (var i = 0; i < imgElems.length; i++) {
      imgResizers.push(new ImgResizer({
        img: imgElems[i],
        fullWidth: true
      }));
    }
  }

  function resizeWidget(forced) {
    if (!elParent) return;

    var windowMinWidth = widgetParams.windowMinWidth;
    var windowMaxWidth = widgetParams.windowMaxWidth;
    var windowWidth = w.innerWidth;
    var windowHeight = w.innerHeight;
    var shouldBeHidden = false;

    if (WIDGET_TYPE == 'popup' &&
      ((windowMaxWidth && windowWidth > windowMaxWidth) || (windowMinWidth && windowWidth < windowMinWidth))) {
      shouldBeHidden = true;
    } else
    if (!IS_PREVIEW &&
        ((windowMinWidth && windowWidth < windowMinWidth) ||
        (windowMaxWidth && windowWidth > windowMaxWidth) ||
        (WIDGET_TYPE == 'toster' &&
        (el.offsetHeight > windowHeight || el.offsetWidth > windowWidth)))) {
      shouldBeHidden = true;
    }

    if (shouldBeHidden) {
      el.style.display = 'none';

      if (widgetParams.presetName === 'holderPlates') {
        popupWidgetEl.style.display = 'none';
      }

      if (WIDGET_TYPE == 'popup') {
        d.body.style.overflow = '';
        d.body.style.position = '';
        d.documentElement.style.overflow = '';
        d.documentElement.style.position = '';
      }

      if (WIDGET_TYPE != 'toster') {
        return;
      }
    } else {
      el.style.display = '';

      if (widgetParams.presetName === 'holderPlates') {
        popupWidgetContentEl.style.display = '';
      }
    }

    elParentNewWidth = elParent.clientWidth;

    if (elParentWidth === elParentNewWidth && !forced) return;

    elParentWidth = elParentNewWidth;

    for (var i = 0; i < grids.length; i++) {
      grids[i].update();
    }

    if (popupContentScaler.shouldBeDisabled) {
      if (popupContentScaler.component) {
        popupContentScaler.component.disable();
      }
    } else {
      if (popupContentScaler.component) {
        popupContentScaler.component.update();
      }
    }

    if (WIDGET_TYPE == 'toster') {
      alignElHorizontally();
    }

    function alignElHorizontally() {
      if (!HORIZONTAL_ALIGN_EL_SELECT) return;

      var alignEl = d.querySelector(HORIZONTAL_ALIGN_EL_SELECT);
      if (!alignEl) return;

      var alignElCoords = alignEl.getBoundingClientRect();

      switch(POSITION) {
        case 'left':
          el.style.left = alignElCoords.left + 'px';
          break;
        case 'right':
          var windowWidth = d.documentElement.clientWidth;
          el.style.right = windowWidth - alignElCoords.right + 'px';
          break;
      }
    }
  }

  function refreshImgResizers() {
    for (var i = 0; i < imgResizers.length; i++) {
      imgResizers[i].update();
    }
  }

  function cutTextBlocks(){
    for (var i = 0; i < ellipsizers.length; i++) {
      ellipsizers[i].update();
    }
  }

  function mouseleaveHandler() {
      if (!hasClassName(popupWidgetEl, 'relap-' + widgetParams.theme + '__visible')) {
        var windowMinWidth = widgetParams.windowMinWidth;
        var windowMaxWidth = widgetParams.windowMaxWidth;
        var windowWidth = w.innerWidth;

        if (!IS_PREVIEW &&
          ((windowMinWidth && windowWidth > windowMinWidth) ||
          (windowMaxWidth && windowWidth < windowMaxWidth))) {
          showPopup();
          d.removeEventListener('mouseleave', mouseleaveHandler);
        }
      }
  }

  function onWindowScroll(e) {
    tryToSendViewPixel();
    debouncedOnScrollFunc();
  }

  function debounce(func, wait, immediate) {
    var timeoutId;

    return function() {
      var context = this, args = arguments;

      if (timeoutId) {
        return;
      }

      if (immediate) {
        execute();
        return;
      }

      timeoutId = setTimeout(execute, wait);

      function execute() {
        func.apply(context, args);
        timeoutId = null;
      }
    };
  }

  function onWindowScrollInternal(e) {
    scrollTop = getDocScrollTop();

    scrollHeight = getDocScrollHeight();
    var windowHeight = getWindowHeight();
    var scrolledToHeight = scrollTop + windowHeight;
    var showAtHeight = (SHOW_POS_PERCENT / 100) *
      scrollHeight;

    if (scrolledToHeight >= showAtHeight) {
      if (WIDGET_TYPE === 'toster') showTosterPopup();
      if ((WIDGET_TYPE === 'popup' && widgetParams.presetName !== 'holderPlates') || IS_PREVIEW) showPopup();
      w.removeEventListener('scroll', onWindowScroll, false);
    }
  }

  function showTosterPopup() {
    var tosterCollapsed = false;

    addClassName(el, 'relap-' + widgetParams.theme + '__visible');

    handleWidgetShown();
    refreshImgResizers();
    cutTextBlocks();

    var showHideBtn = el.getElementsByClassName('js-relap__visibility-toggle-btn')[0];
    /*вешаем клик*/
    showHideBtn.addEventListener('click', tosterShowHideHandler, false);

    function tosterShowHideHandler(e){
      var collapsedHeight = showHideBtn.offsetHeight - 10;
      var collapsedBottom = - (el.offsetHeight - collapsedHeight);

      if (tosterCollapsed) {
        /*разворачиваем*/
        el.style.bottom = '';
        tosterCollapsed = false;
        this.removeAttribute('data-collapsed');
      } else {
        /*сворачиваем*/
        el.style.bottom = collapsedBottom + 'px';
        tosterCollapsed = true;
        this.setAttribute('data-collapsed', '');
      }
    }
  }

  function showPopup() {
    addClassName(popupWidgetEl, 'relap-' + widgetParams.theme + '__visible');

    handleWidgetShown();
    refreshImgResizers();
    cutTextBlocks();

    if (widgetParams.presetName !== 'holderPlates') {
      popupContentScaler.component = new Scaler({
        el: el,
        fitInEl: popupWidgetEl,
        fitType: 'height',
      });
    }

    var disableScrollElems = [];

    if (widgetParams.disableScrollSelect) {
      disableScrollElems = d.querySelectorAll(widgetParams.disableScrollSelect);
    }

    if (disableScrollElems.length) {
      for (var i = 0; i < disableScrollElems.length; i++) {
        disableScrollElems[i].style.overflow = 'hidden';
        disableScrollElems[i].style.position = 'relative';
      }
    } else {
      d.documentElement.style.overflow = 'hidden';
      d.documentElement.style.position = 'relative';
      d.body.style.overflow = 'hidden';
      d.body.style.position = 'relative';
    }

    var closeButton = popupWidgetEl.getElementsByClassName('js-relap-popup-widget-close')[0];
    closeButton.addEventListener('click', destroyPopup, false);

    if (widgetParams.presetName !== 'fullScreenPopup') {
      onResize();
      window.addEventListener('resize', onResize);
      var intervalId = setInterval(onResize, 500);
    }

    function destroyPopup(e) {
      e.preventDefault();
      closeButton.removeEventListener('click', destroyPopup);
      clearInterval(intervalId);
      elParent.removeChild(popupWidgetEl);
      window.removeEventListener('resize', onResize);

      if (disableScrollElems.length) {
        for (var i = 0; i < disableScrollElems.length; i++) {
          disableScrollElems[i].style.overflow = '';
          disableScrollElems[i].style.position = '';
        }
      } else {
        d.documentElement.style.overflow = '';
        d.documentElement.style.position = '';
        d.body.style.overflow = '';
        d.body.style.position = '';
      }
    }

    function onResize() {
      var initialTransform = 'translate(-50%, -50%)';
      var popupWidth = popupWidgetEl.offsetWidth;
      var popupHeight = popupWidgetEl.offsetHeight;
      var contentWidth = popupWidgetContentEl.offsetWidth;
      var contentHeight = el.offsetHeight;
      var proportion = popupWidth / contentWidth;

      if (proportion > 1) proportion = 1;
      var translateStr = '';
      var isMobileView = popupWidgetEl.hasAttribute('data-relap-mobile-view');

      if ((document.documentElement.clientWidth < popupMobileWindowMaxWidth ||
          document.documentElement.clientHeight < popupMobileWindowMaxHeight) &&
          widgetParams.presetName !== 'holderPlates') {
        popupContentScaler.shouldBeDisabled = true;
        addClassName(popupWidgetEl, 'relap-' + widgetParams.theme + '__popup-widget-container--mobile');
        popupWidgetEl.setAttribute('data-relap-mobile-view', '');
        popupWidgetEl.style.display = 'none'; 
      } else {
        popupContentScaler.shouldBeDisabled = false;
        translateStr = initialTransform;
        removeClassName(popupWidgetEl, 'relap-' + widgetParams.theme + '__popup-widget-container--mobile');
        popupWidgetEl.removeAttribute('data-relap-mobile-view');
        popupWidgetEl.style.display = ''; 
      }

      if (isMobileView || contentWidth > popupWidth) {
        var cssStr = translateStr + ' scale(' + proportion + ')'
        popupWidgetContentEl.style.WebkitTransform = cssStr;
        popupWidgetContentEl.style.transform = cssStr;
        var newBottom = popupHeight - popupHeight / proportion;
        popupWidgetContentEl.style.bottom = newBottom + 'px';
      } else {
        popupWidgetContentEl.style.WebkitTransform = translateStr;
        popupWidgetContentEl.style.transform = translateStr;
        popupWidgetContentEl.style.bottom = '';
      }
    }
  }

  function handleInnerLinkClick(e) {
    e.preventDefault();
    e.stopPropagation();
    var innerLink = e.currentTarget;
    var href = innerLink.getAttribute('data-href');
    var target = innerLink.getAttribute('data-target');

    if (!href) return;

    if (target == '_blank') {
      w.open(href);
    } else {
      w.location = href;
    }
  }

  function getDocScrollTop() {
    var html = d.documentElement;
    var body = d.body;
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop;

    return scrollTop;
  }

  function getDocScrollLeft() {
    var html = d.documentElement;
    var body = d.body;
    var scrollLeft = html.scrollLeft || body && body.scrollLeft || 0;

    return scrollLeft;
  }

  function getDocScrollHeight() {
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    scrollHeight = Math.max(scrollHeight, clientHeight);

    return scrollHeight;
  }

  function getWindowHeight() {
    var windowHeight = d.documentElement.clientHeight || 0;

    return windowHeight;
  }

  function addClassName(el, className) {
    var classes = el.className ? el.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
      if (classes[i] == className) return;
    }

    classes.push(className);
    el.className = classes.join(' ');
  }

  function removeClassName(el, className) {
    var classes = el.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
      if (classes[i] == className) classes.splice(i--, 1);
    }

    el.className = classes.join(' ');
  }

  function hasClassName(el, className) {
    var classes = el.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
      if (classes[i] == className) return true;
    }

    return false;
  }

  function toggleClassName(el, className) {
    if (hasClassName(el, className)) {
      removeClassName(el, className);
    } else {
      addClassName(el, className);
    }
  }

  
function Ellipsizer(el, opt) {
  if (!el) {
    console.warn('ellipsizer: no el given');
    this.update = function() {
      console.warn('ellipsizer: no el to resize');
    };
    return;
  }

  var items = [];
  var ellipsisChar = opt.ellipsisChar || '&hellip;';
  var maxLines = +opt.maxLines || Infinity;
  var cutUntilEl = opt.cutUntilEl;
  var updateOnWindowResize = opt.updateOnWindowResize || false;
  var ellipsizeOverflowingItems;
  var useOwnTrimFunc = opt.useOwnTrimFunc || false;

  if (opt.hasOwnProperty('ellipsizeOverflowingItems')) {
    ellipsizeOverflowingItems = opt.ellipsizeOverflowingItems;
  } else {
    ellipsizeOverflowingItems = false;
  }

  var elRect;
  var cutUntilLine = Infinity;
  var self = this;

  this.update = update;

  init();

  function init() {
    if (maxLines === Infinity) return;

    var text = el.innerText || el.textContent || '';
    text = trim(text);
    parseText();
    prepareHTML();
    updateElRect();

    if (updateOnWindowResize) {
      window.addEventListener('resize', self.update, false);
    }

    function trim(text) {
      if (useOwnTrimFunc || !text.trim) {
        return text.replace(/^\s+|\s+$/gm, '');
      } else {
        return text.trim();
      }
    }

    function parseText() {
      var words = text.split(' ');
      extractPunctuationMarks(words);

      function extractPunctuationMarks(words) {
        for (var i = 0; i < words.length; i++) {
          var lastChar = words[i][words[i].length - 1];

          if (checkLastCharIsPunctuationMark(words[i])) {
            items.push({
              text: words[i].slice(0, -1)
            });

            items.push({
              text: lastChar,
              isPunctuationMark: true
            });

            continue;
          } 

          items.push({
            text: words[i]
          });

          if (checkGlyph(words[i])) {
            items[items.length - 1].isGlyph = true;
          }
        }

        function checkLastCharIsPunctuationMark(word) {
          var lastChar = word[word.length - 1];

          if (lastChar == '.' || lastChar == ',' ||
              lastChar == ':' || lastChar == '?' ||
              lastChar == '!') {
            return true;
          }

          
          if (lastChar == ';' && !checkGlyph(word)) return true;

          return false;
        }

        function checkGlyph(word) {
          var lastChar = word[word.length - 1];

          if (lastChar == ';' && ~word.lastIndexOf('&')) {
            return true;
          }

          if (word == '—') {
            return true;
          }

          return false;
        }
      }
    }

    function prepareHTML() {
      for (var i = 0; i < items.length; i++) {
        var span = document.createElement('span');

        var text = items[i].text;

        if (i != 0 && !items[i].isPunctuationMark) {
          text = ' ' + text;
        }

        span.innerHTML = text;
        items[i].el = span;
      }

      var ellipsis = document.createElement('span');
      ellipsis.innerHTML = ellipsisChar;

      items.push({
        text: ellipsisChar,
        el: ellipsis,
        isEllipsis: true
      });

      el.innerHTML = '';

      for (var i = 0; i < items.length; i++) {
        el.appendChild(items[i].el);
      }
    }
  }

  function updateElRect() {
    elRect = el.getBoundingClientRect();
  }

  function checkRectsOverflowed(parentRect, childRect) {
    if (childRect.right > parentRect.right ||
        childRect.left < parentRect.left) {
      return true;
    }

    return false;
  }

  function update() {
    showAllWords();
    updateElRect();
    updateItemsInfo();
    hideExcessiveWords();

    function showAllWords() {
      for (var i = 0; i < items.length; i++) {
        items[i].isOverflowed = false;
        items[i].isNotInParent = false;

        
        if (items[i].isEllipsis) {
          items[i].isHidden = true;
          items[i].el.style.display = 'none';
          continue;
        }

        items[i].isHidden = false;
        items[i].el.style.display = '';
      }
    }

    function updateItemsInfo() {
      var top = 0;
      var line = 0;

      if (cutUntilEl) {
        cutUntilLine = cutUntilEl.getBoundingClientRect().bottom;
      }

      for (var i = 0; i < items.length; i++) {
        var rect = items[i].el.getBoundingClientRect();
        items[i].rect = rect;

        if (rect.top !== top) {
          line++;
          top = rect.top;
        }

        items[i].line = line;

        if (rect.bottom > cutUntilLine) {
          items[i].isOverflowed = true;
        }

        if (checkRectsOverflowed(elRect, items[i].rect)) {
          items[i].isNotInParent = true;
        }
      }
    }

    function hideExcessiveWords() {
      var isAnyWordHidden = false;
      var ellipsis = items[items.length - 1];
      var notInParentStart;

      if (ellipsizeOverflowingItems) {
        for (var i = 0; i < items.length; i++) {
          if (!notInParentStart && items[i].isNotInParent &&
              !items[i].isEllipsis) {
            notInParentStart = i;
          }

          if (i >= notInParentStart) {
            items[i].isHidden = true;
            isAnyWordHidden = true;
          }
        }
      }

      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].line > maxLines &&
            !items[i].isEllipsis) {
          items[i].isHidden = true;
          isAnyWordHidden = true;
        }

        if (items[i].isOverflowed &&
            !items[i].isEllipsis) {
          items[i].isHidden = true;
          isAnyWordHidden = true;
        }
      }

      if (isAnyWordHidden) {
        ellipsis.isHidden = false;
        ellipsis.el.style.display = '';

        for (var i = items.length - 1; i >= 0; i--) {
          if (items[i].isHidden) {
            items[i].el.style.display = 'none';
          }
        }

        makeSureEllipsisFits();
      }

      function makeSureEllipsisFits() {
        var lastLineTop = getLastLineTop();

        if (!lastLineTop && !cutUntilLine) return;

        var lastVisibleItemIndex = getLastVisibleItemIndex();

        if (!lastVisibleItemIndex) return;

        updateCutUntilLine();
        updateItemInfo(lastVisibleItemIndex);
        updateEllipsisInfo();
        updateElRect();

        while (items[lastVisibleItemIndex].isOverflowed ||
          items[lastVisibleItemIndex].isNotInParent ||
          ellipsis.rect.top > lastLineTop ||
          items[lastVisibleItemIndex].isPunctuationMark ||
          items[lastVisibleItemIndex].isGlyph) {

          items[lastVisibleItemIndex].isHidden = true;
          items[lastVisibleItemIndex].el.style.display = 'none';

          lastLineTop = getLastLineTop();
          lastVisibleItemIndex = getLastVisibleItemIndex();

          if (!lastVisibleItemIndex) break;

          updateCutUntilLine();
          updateItemInfo(lastVisibleItemIndex);
          updateEllipsisInfo();
          updateElRect();
        }

        function updateEllipsisInfo() {
          updateItemInfo(items.length - 1);
        }

        function updateItemInfo(i) {
          items[i].rect = items[i].el.getBoundingClientRect();

          if (items[i].rect.bottom > cutUntilLine) {
            items[i].isOverflowed = true;
          } else {
            items[i].isOverflowed = false;
          }

          if (!items[i].isHidden &&
              checkRectsOverflowed(elRect, items[i].rect)) {
            items[i].isNotInParent = true;
          } else {
            items[i].isNotInParent = false;
          }
        }

        function updateCutUntilLine() {
          if (cutUntilEl) {
            cutUntilLine = cutUntilEl.getBoundingClientRect().bottom;
          }
        }

        function getLastLineTop() {
          for (var i = 0; i < items.length; i++) {
            if (items[i].line == maxLines &&
                !items[i].isHidden) {
              updateItemInfo(i);
              return items[i].rect.top;
            }
          }

          return Infinity;
        }

        function getLastVisibleItemIndex() {
          for (var i = items.length - 1; i >= 0; i--) {
            if (!items[i].isHidden &&
                !items[i].isEllipsis) {
              return i;
            }
          }

          return null;
        }
      }
    }
  }
}

  
function ImgResizer(opt) {
  var img = opt.img;
  var newAR = opt.aspectRatio || 1;
  var fullWidth = opt.fullWidth;
  var oldAR;
  var focusXpercent = opt.focusXpercent || 50;
  var focusYpercent = opt.focusYpercent || 50;

  var self = this;
  var wrapper;

  this.isReady;
  this.init = init;
  this.update = update;

  init();

  function init() {
    getOldAR();

    var intervalId = setInterval(function() {
      if (oldAR) {
        clearInterval(intervalId);
        self.update();
        self.isReady = true;
        return;
      }

      getOldAR();
    }, 50);

    wrapper = document.createElement('span');
    var imgParent = img.parentNode;
    wrapper.className = 'img-resizer-wrapper';
    wrapper.style.overflow = 'hidden';
    wrapper.style.display = 'inline-block';
    wrapper.style.fontSize = 0;

    if (fullWidth) wrapper.style.width = '100%';

    imgParent.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    var arWidth = img.getAttribute('data-img-resizer-ar-width');
    var arHeight = img.getAttribute('data-img-resizer-ar-height');

    if (arWidth && arHeight) {
      newAR = arWidth / arHeight;
    }

    function getOldAR() {
      if (img.clientWidth && img.clientHeight) {
        oldAR = img.clientWidth / img.clientHeight;
      }
    }
  }

  function update(opt) {
    if (opt) {
      newAR = opt.aspectRatio;
    }

    if (!oldAR) return;

    dropStyles();

    if (newAR > oldAR) {
      makeWider();
      return;
    }

    if (newAR < oldAR) {
      makeTaller();
      return;
    }

    function dropStyles() {
      img.style.marginLeft = '';
      img.style.marginRight = '';
      img.style.marginTop = '';
      img.style.marginBottom = '';
      img.style.width = '';
    }

    function makeWider() {
      var marginTotal = (1 / oldAR - 1 / newAR) * 100;
      var marginTop = marginTotal * focusXpercent / 100;
      var marginBottom = marginTotal - marginTop;

      img.style.marginLeft = 'auto';
      img.style.marginRight = 'auto';
      img.style.marginTop = -marginTop + '%';
      img.style.marginBottom = -marginBottom + '%';
    }

    function makeTaller() {
      var cssWidth = oldAR / newAR * 100;
      var marginTotal = cssWidth - 100;
      var marginLeft = marginTotal * focusYpercent / 100;
      var marginRight = marginTotal - marginLeft;

      img.style.width = cssWidth + '%';
      img.style.marginLeft = -marginLeft + '%';
      img.style.marginRight = -marginRight + '%';
      img.style.marginTop = 'auto';
      img.style.marginBottom = 'auto';
    }
  }
}

  
function SimpleGrid(opt) {
  var el = opt.el;
  var widgetParams = opt.widgetParams;
  var PRESERVE_ROWS_QUANTITY = opt.PRESERVE_ROWS_QUANTITY;
  var RESPONSIVE_TITLE_FONT = opt.RESPONSIVE_TITLE_FONT;
  var FULL_ITEM_CLICKABLE = opt.FULL_ITEM_CLICKABLE;
  var refreshImgResizers = opt.refreshImgResizers;
  var cutTextBlocks = opt.cutTextBlocks;

  var items;
  var fakeItems;
  var rowLength;
  var links;
  var isSimpleGridWide;

  this.findItems = findItems;
  this.update = update;

  init();

  function init() {
    isSimpleGridWide = hasClassName(el, 'js-relap__items-simple-grid-wide');
    findItems();
  }

  function findItems() {
    items = el.getElementsByClassName('js-relap__item');
    fakeItems = el.getElementsByClassName('js-relap__fake-item');
    links = el.getElementsByClassName('js-relap__item-link');
  }

  function update() {
    setGridWidth();

    if (RESPONSIVE_TITLE_FONT) {
      setFontSize();
    }

    if (FULL_ITEM_CLICKABLE) {
      removeItemMinHeight();
    }

    refreshImgResizers();
    cutTextBlocks();

    if (widgetParams.theme === 'default' &&
        (isSimpleGridWide || ~widgetParams.presetName.lastIndexOf('FullPlates'))) {
      var itemEl = items[0];

      if (itemEl &&
          hasClassName(itemEl, 'relap-' + widgetParams.theme + '__wide-inset-mode-adaptive') &&
          !hasClassName(itemEl, 'js-relap__custom-wide-inset-rec-item') &&
          !hasClassName(el, 'relap-' + widgetParams.theme + '__extended-cols')) {
        handleAdaptiveWideInset();
      }

      if (itemEl &&
          hasClassName(itemEl, 'relap-' + widgetParams.theme + '__wide-inset-mode-vertical') &&
          !hasClassName(itemEl, 'js-relap__custom-wide-inset-rec-item') &&
          !hasClassName(el, 'relap-' + widgetParams.theme + '__extended-cols')) {
        handleVerticalWideInset();
      }
    }

    if (FULL_ITEM_CLICKABLE) {
      setItemMinHeight();
    }
  }

  function getRowLength() {
    if (PRESERVE_ROWS_QUANTITY) showAllItems();

    var firstOffsetTop;
    for (var i = 0; i < items.length; i++) {
      var itemOffsetTop = items[i].getBoundingClientRect().top;
      if (i == 0) firstOffsetTop = itemOffsetTop;
      if (firstOffsetTop != itemOffsetTop) {
        break;
      }
    }

    return i;

    function showAllItems() {
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = '';
      }
    }
  }

  function setGridWidth() {
    var maxColumnQuantity = parseFloat(el.getAttribute('data-relap-max-column-quantity'));
    var orphans = 0;
    var fakeItemsNeeded = 0;

    setColumnQuantity(maxColumnQuantity);
    rowLength = getRowLength();
    orphans = items.length % rowLength;

    if (rowLength > maxColumnQuantity) return;

    setColumnQuantity(rowLength);

    if (orphans && !PRESERVE_ROWS_QUANTITY) {
      fakeItemsNeeded = rowLength - orphans;
    }

    hideAllFakeItems();
    showFakeItemsNeeded();

    if (PRESERVE_ROWS_QUANTITY) hideOtherRows();

    function setColumnQuantity(num) {
      el.setAttribute('data-column-quantity', num);
      removePreviousClasses();
      addClassName(el, 'relap-' + widgetParams.theme + '-column-quantity-' + num);

      function removePreviousClasses() {
        var classes = el.className.split(' ');
        var classesToRemove = [];

        for (var i = 0; i < classes.length; i++) {
          if (~classes[i].indexOf('relap-' + widgetParams.theme + '-column-quantity-')) {
            classesToRemove.push(classes[i]);
          }
        }

        for (var i = 0; i < classesToRemove.length; i++) {
          removeClassName(el, classesToRemove[i]);
        }
      }
    }

    function hideOtherRows() {
      for (var i = 0; i < items.length; i++) {
        if (i < rowLength * ROWS) continue;
        items[i].style.display = 'none';
      }
    }

    function hideAllFakeItems() {
      for (var i = 0; i < fakeItems.length; i++) {
        fakeItems[i].style.display = 'none';
      }
    }

    function showFakeItemsNeeded() {
      for (var i = 0; i < fakeItemsNeeded; i++) {
        fakeItems[i].style.display = 'inline-block';
      }
    }
  }

  function setFontSize() {
    var titleElems = el.getElementsByClassName('js-relap__item-title');
    var parentWidth = titleElems[0].parentNode.clientWidth;
    var fontSize = parseFloat(el.getAttribute('data-relap-percent-font-size')) / 100;
    var minFontSizeInPx = parseFloat(el.getAttribute('data-relap-px-min-font-size'));

    for (var i = 0; i < titleElems.length; i++) {
      var fontSizeInPx = parentWidth * fontSize;

      if (fontSizeInPx < minFontSizeInPx) {
        fontSizeInPx = minFontSizeInPx;
      }

      titleElems[i].style.fontSize = fontSizeInPx + 'px';
    }
  }

  function removeItemMinHeight() {
    for (var i = 0; i < links.length; i++) {
      links[i].style.minHeight = '';
    }
  }

  function setItemMinHeight() {
    var maxHeight = 0;
    var maxHeightArr = [];

    for (var i = 0; i < links.length; i++) {
      links[i].style.minHeight = '';
    }

    for (var i = 0; i < links.length; i++) {
      if (i && !(i % rowLength)) {
        maxHeightArr.push(maxHeight);
        maxHeight = 0;
      }

      if (links[i].clientHeight > maxHeight) {
        maxHeight = links[i].clientHeight;
      }
    }

    maxHeightArr.push(maxHeight);

    for (var j = 0, rowIndex = 0; j < links.length; j++) {
      var compStyles = getComputedStyle(links[j]);

      if (j && !(j % rowLength)) rowIndex++;

      links[j].style.minHeight = (maxHeightArr[rowIndex]) + 'px';
    }
  }

  function handleAdaptiveWideInset() {
    var imgEl = el.querySelector('.js-relap__item-thumbnail__img');
    if (!imgEl) return;

    var elWidth = el.clientWidth;
    var imgWidth = imgEl.naturalWidth;
    var extendedOfferEl = el.querySelector('.js-relap__extended-offer');
    var itemTitleEl = el.querySelector('.js-relap__item-title');
    var contentWidth;

    resetAdaptiveClasses();

    if (imgWidth < elWidth) {
      makeStrings();

      if (imgWidth > 300) {
        makeTargetMailStrings();

        if (extendedOfferEl && extendedOfferEl.clientWidth < 250) {
          setThumbnailSizeInStrings(imgWidth);
        }
      } else {
        setThumbnailSizeInStrings(imgWidth);
      }

      if (itemTitleEl) contentWidth = itemTitleEl.clientWidth;
      if (extendedOfferEl) contentWidth = extendedOfferEl.clientWidth;

      if (contentWidth < 300) {
        resetAdaptiveClasses();

        if (imgEl.clientWidth > imgWidth) {
          handleVerticalWideInset();
        }
      }
    }

    if (!extendedOfferEl) return;
    handleExtendedOffer(extendedOfferEl.clientWidth);

    function resetAdaptiveClasses() {
      el.style.width = '';
      unmakeStrings();
      unmakeTargetMailStrings();
      removeImgSizeClass();
    }

    function makeStrings() {
      addClassName(el, 'relap-' + widgetParams.theme + '__view-strings');
      addClassName(el, 'relap-' + widgetParams.theme + '__top-container--adaptive-wide-inset');
    }

    function unmakeStrings() {
      removeClassName(el, 'relap-' + widgetParams.theme + '__view-strings');
      removeClassName(el, 'relap-' + widgetParams.theme + '__top-container--adaptive-wide-inset');
    }

    function setThumbnailSizeInStrings(imgWidth) {
      unmakeTargetMailStrings();

      if (imgWidth > 200) {
        setStringsThumbnailSize(6);
      } else if (imgWidth > 152) {
        setStringsThumbnailSize(5);
      } else if (imgWidth > 116) {
        setStringsThumbnailSize(4);
      } else if (imgWidth > 88) {
        setStringsThumbnailSize(3);
      } else if (imgWidth > 66) {
        setStringsThumbnailSize(2);
      } else {
        setStringsThumbnailSize(1);
      }
    }

    function makeTargetMailStrings() {
      addClassName(el, 'relap-' + widgetParams.theme + '__top-container--target-mail');
      addClassName(el, 'relap-' + widgetParams.theme + '__top-container--string-item-vertical');
    }

    function unmakeTargetMailStrings() {
      removeClassName(el, 'relap-' + widgetParams.theme + '__top-container--target-mail');
      removeClassName(el, 'relap-' + widgetParams.theme + '__top-container--string-item-vertical');
    }

    function setStringsThumbnailSize(size) {
      removeImgSizeClass();
      addClassName(el, 'relap-' + widgetParams.theme + '_img-size-' + size);
    }
    
    function removeImgSizeClass() {
      for (var i = 1; i <= 6; i++) {
        removeClassName(el, 'relap-' + widgetParams.theme + '_img-size-' + i);
      }
    }
  }

  function handleVerticalWideInset() {
    el.style.width = '';

    var imgEl = el.querySelector('.js-relap__item-thumbnail__img');
    if (!imgEl) return;

    var imgWidth = imgEl.naturalWidth;
    var elWidth = el.clientWidth;

    var itemInner = el.querySelector('.js-relap__item-inner');
    var itemInnerComputedStyle = itemInner ? getComputedStyle(itemInner) : {};
    var paddingLeft = isNaN(parseInt(itemInnerComputedStyle.paddingLeft)) ? 0 : parseInt(itemInnerComputedStyle.paddingLeft);
    var paddingRight = isNaN(parseInt(itemInnerComputedStyle.paddingRight)) ? 0 : parseInt(itemInnerComputedStyle.paddingRight);
    var padding = paddingLeft + paddingRight;

    var item = el.querySelector('.js-relap__item');
    var itemComputedStyle = item ? getComputedStyle(item) : {};
    var minWidth = isNaN(parseInt(itemComputedStyle.minWidth)) ? 0 : parseInt(itemComputedStyle.minWidth);

    var newElWidth;

    if (elWidth > (imgWidth + padding)) {
      newElWidth = imgWidth + padding + 'px';
    }

    if (imgWidth + padding < minWidth - padding) {
      newElWidth = minWidth + 'px';
    }

    if (newElWidth) el.style.width = newElWidth;

    var extendedOfferEl = el.querySelector('.js-relap__extended-offer');
    if (!extendedOfferEl) return;
    handleExtendedOffer(extendedOfferEl.clientWidth);
  }

  function handleExtendedOffer(extendedOfferElWidth) {
    if (extendedOfferElWidth < 500) {
      addClassName(el, 'relap-' + widgetParams.theme + '__top-container--string-item-vertical');
    } else {
      removeClassName(el, 'relap-' + widgetParams.theme + '__top-container--string-item-vertical');
    }
  }
}

  

function Scaler(opt) {
  var el = opt.el;
  var fitInEl = opt.fitInEl;
  var fitType = opt.fitType; /* 'width' || 'height' || 'both' */

  var elOriginalSize = {};
  var fitInSize = {};
  var elScaledSize = {};
        
  this.update = update;
  this.disable = disable;

  update();

  function update() {
    elOriginalSize = {
      width: el.offsetWidth,
      height: el.offsetHeight,
    };
                          
    fitInSize = {
      width: fitInEl.offsetWidth,
      height: fitInEl.offsetHeight,
    };
                                              
    calcNewSize();
    scale();
  }

  function calcNewSize() {
    switch(fitType) {
      case 'height':
        if (elOriginalSize.height > fitInSize.height) {
          elScaledSize = scaleToHeight();
        } else {
          elScaledSize = keepOriginal();
        }
        break;
      case 'width':
        if (elOriginalSize.width > fitInSize.width) {
          elScaledSize = scaleToWidth();
        } else {
          elScaledSize = keepOriginal();
        }
        break;
      case 'both':
        if (elOriginalSize.width <= fitInSize.width && elOriginalSize.height <= fitInSize.height) {
          elScaledSize = keepOriginal();
          break;
        }

        var tempSize;

        if (elOriginalSize.width > fitInSize.width) {
          tempSize = scaleToWidth();

          if (tempSize.height > fitInSize.height) {
            elScaledSize = scaleToHeight(tempSize);
          } else {
            elScaledSize = tempSize;
          }

          break;
        }

        if (elOriginalSize.height > fitInSize.height) {
          tempSize = scaleToHeight();
                    
          if (elOriginalSize.width > fitInSize.width) {
            elScaledSize = scaleToWidth(tempSize);
          } else {
            elScaledSize = tempSize;
          }
        }

        break;
      default:
        elScaledSize = keepOriginal();
    }

    function scaleToHeight(argToFitsize) {
      var toFitSize = argToFitsize || elOriginalSize;
      
      return {
        height: fitInSize.height,
        width: fitInSize.height * toFitSize.width / toFitSize.height,
      };
    }

    function scaleToWidth(argToFitsize) {
      var toFitSize = argToFitsize || elOriginalSize;

      return {
        width: fitInSize.width,
        height: fitInSize.width * toFitSize.height / toFitSize.width,
      };
    }
        
    function keepOriginal() {
      return {
        height: elOriginalSize.height,
        width: elOriginalSize.width,
      };
    }
  }

  function scale() {
    var proportion = elScaledSize.width / elOriginalSize.width;

    if (proportion > 1) proportion = 1;
        
    if (proportion == 1) {
      el.style.WebkitTransform = '';
      el.style.transform = '';
    } else {
      el.style.WebkitTransform = 'scale(' + proportion + ')';
      el.style.transform = 'scale(' + proportion + ')';
    }
  }

  function disable() {
    el.style.WebkitTransform = '';
    el.style.transform = '';
  }
}

}

  function calcPageHash() {
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.4.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2016
 * @license MIT
 */
var md5 = (function (root) {
  'use strict';

  var ARRAY_BUFFER = !root.JS_MD5_TEST && typeof ArrayBuffer != 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer'];

  var blocks = [], buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  var createMethod = function () {
    var method = createOutputMethod('hex');
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0;i < OUTPUT_TYPES.length;++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString = typeof(message) != 'string';
    if (notString && message.constructor == root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start;index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start;index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start;index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | (code >> 6);
              buffer8[i++] = 0x80 | (code & 0x3f);
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | (code >> 12);
              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
              buffer8[i++] = 0x80 | (code & 0x3f);
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              buffer8[i++] = 0xf0 | (code >> 18);
              buffer8[i++] = 0x80 | ((code >> 12) & 0x3f);
              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
              buffer8[i++] = 0x80 | (code & 0x3f);
            }
          }
        } else {
          for (i = this.start;index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a, b, c, d, bc, da, blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ (d & (a ^ -271733879))) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ (c & (d ^ a))) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ (b & (c ^ d))) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ (a & (b ^ c))) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ (d & (a ^ b))) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ (c & (d ^ a))) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ (b & (c ^ d))) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ (b & (c ^ d))) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ (b & (c ^ d))) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;

    return HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
       HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
       HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
       HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
       HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
       HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
       HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
       HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
       HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
       HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
       HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
       HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
       HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
       HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
       HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
       HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F];
  };

  Md5.prototype.toString = Md5.prototype.hex;

  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
    return [
      h0 & 0xFF, (h0 >> 8) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 24) & 0xFF,
      h1 & 0xFF, (h1 >> 8) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 24) & 0xFF,
      h2 & 0xFF, (h2 >> 8) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 24) & 0xFF,
      h3 & 0xFF, (h3 >> 8) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 24) & 0xFF
    ];
  };

  Md5.prototype.array = Md5.prototype.digest;

  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  var exports = createMethod();

  /**
   * @method md5
   * @description Md5 hash function, export to global in browsers.
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} md5 hashes
   * @example
   * md5(''); // d41d8cd98f00b204e9800998ecf8427e
   * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
   * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
   *
   * // It also supports UTF-8 encoding
   * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
   *
   * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
   * md5([]); // d41d8cd98f00b204e9800998ecf8427e
   * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
   */
  return exports;
}(this));


        var version = 1;

        var token   = '';

        var title   = '';
        var descr   = '';
        var image   = '';

        var isArticle = '';

	var elem;

        
        if      ( elem = document.querySelector('meta[name="relap-title"]')  ) title = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[property="og:title"]') ) title = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[itemprop="name"]') )     title = elem.getAttribute('content');
        else if ( elem = document.getElementsByTagName('title') ) {

		if ( elem.length > 0 ) title = elem[0].innerText;
	}
        
        if      ( elem = document.querySelector('meta[name="relap-description"]')  ) descr = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[property="og:description"]') ) descr = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[name="description"]')        ) descr = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[itemprop="description"]')    ) descr = elem.getAttribute('content');
        
        if      ( elem = document.querySelector('meta[name="relap-image"]')  ) image = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[property="og:image"]') ) image = elem.getAttribute('content');
        else if ( elem = document.querySelector('meta[itemprop="image"]') )    image = elem.getAttribute('content');

        
        if ( elem = document.querySelector('meta[property="relap:article"]') ) isArticle = elem.getAttribute('content');

        var s = [title, descr, image, isArticle].join("\t");

        var pageHash = md5(s);
        log('pageHash server: 6932e121d9bbf606653e92ca2ae8ff55');
        log('pageHash current: ' + pageHash);

        if ( '6932e121d9bbf606653e92ca2ae8ff55' == pageHash ) return '';

        return pageHash;
}

function getPageHashParam() {

    var pageHash = calcPageHash();

    if ( pageHash ) return '&phash=' + pageHash;

    return '';
}



  })(window, document);
} catch (e) {
  if (window.console && window.console.log && typeof(window.console.log) == 'function') {window.console.log(e);}
}
