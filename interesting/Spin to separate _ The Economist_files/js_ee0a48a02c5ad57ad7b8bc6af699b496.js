/* global brightcove, Econ */

(function (brightcove) {
  "use strict";

  // Determines if brightcove videos are rendered via flash or html5.
  // Flash players don't require api calls to resize the player.
  Econ.bcIsFlashPlayer = function() {
    return typeof brightcove !== 'undefined' &&
           typeof brightcove.internal !== 'undefined' &&
           typeof brightcove.internal._instances !== 'undefined' &&
           Econ.isEmptyObject(brightcove.internal._instances);
  };

})(brightcove);
;
/* global Drupal, jQuery */

(function (Drupal, $) {
  "use strict";

  var ecCookieMessageName;

  Drupal.cookieMessage = Drupal.cookieMessage || {};

  /**
   * Function to show cookie message based on user's region.
   */
  Drupal.cookieMessage.show = function() {
    // Make sure we have a cookie message to show.
    if (typeof Drupal.settings.ecCookieMessage === "undefined") {
      return;
    }
    // Set the cookie to say its been seen.
    ecCookieMessageName = Drupal.settings.ecCookieMessage.cid + Drupal.settings.ecCookieMessage.version;

    // Expires in 10 years: 10 * 365
    $.cookie(ecCookieMessageName, "1", {path:'/', expires:3650});
  };

  /**
   * Set the messages based on the javascript user's region.
   */
  Drupal.behaviors.cookieMessageDisplay = function(context) {
    if (context !== document) {
      return;
    }

    Drupal.cookieMessage.show();
  };

  Drupal.behaviors.ecCookieMessaging = function(context) {
    // Sets a persistent cookie for current user.
    $('.ec-cookie-message a.dismiss-messages', context).click(function(e) {
      e.preventDefault();
      var link = $(this).attr('href');
      $.ajax({
        url: link
      });
      $('#ec-cookie-messages-container').fadeOut(600, function() {
        $(this).remove();
      });
    });
  };
})(Drupal, jQuery);

;
/* global jQuery, Econ */

(function (Econ, $) {
  "use strict";

  Drupal.messages = Drupal.messages || {};

  /**
   * Function to show message based on user's region.
   */
  Drupal.messages.show = function(region) {
    var region_selector = 'message-region-' + region;
    var class_region_selector = '.' + region_selector;
    // Loop over messages present, to see if they are currently hidden and should be shown.
    $('div.ec-messages').each(function(index) {
      if ($(this).is(class_region_selector)) {
        $(this).removeClass(region_selector).addClass('ec-messages-processed');
      }
    });
  };

  /**
   * Set the messages based on the javascript user's region.
   */
  Drupal.behaviors.messagesDisplay = function(context) {
    if (context !== document) {
      return;
    }

    var region = '';

    if (!Econ.user.loaded) {
      $(Econ.user).bind('load', function() {
        // Default to NA if we can't geodetect the user's region.
        region = Econ.user.user.country.region !== false ? Econ.user.user.country.region : 'NA';
        Drupal.messages.show(region);
      });
    }
    else {
      region = Econ.user.user.country.region;
      Drupal.messages.show(region);
    }
  };

  Drupal.behaviors.ec_messaging = function(context) {
    // Sets a persistent cookie for current user.
    $('.ec-messages a.dismiss-messages', context).click(function() {
      var link = $(this).attr('href');
      $.ajax({
        url: link
      });
    });
  };
})(Econ, jQuery);

;
// We use a function to redirect the current page to the offline page. We need
// to do this because some browsers use their internal cache that gets priorty
// on the FALLBACK declaration in the manifest file.
var ecoRedirectClient = function(){
  // This function is used to replace the unreliable navigator.onLine.
  // This will return false if the server doesn't respond.
  // See http://www.louisremi.com/2011/04/22/navigator-online-alternative-serverreachable/
  // the following function has been grabbed from the abve blog post.
  var serverReachable = function () {

    // IE vs. standard XHR creation
    var x = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" ), s;
    x.open(
      // Requesting the headers is faster, and just enough.
      "HEAD",
      // Append a random string to the current hostname,
      // to make sure we're not hitting the cache.
      "//" + window.location.hostname + "/ServerReachable.html?rand=" + Math.random(),
      // Make a synchronous request.
      false
    );
    try {
      x.send();
      s = x.status;
      // Make sure the server is reachable.
      return ( s >= 200 && s < 300 || s === 304 );
    // Catch network & other problems.
    }
    catch (e) {
      return false;
    }
  }

  return serverReachable();
};
;
if (window['Modernizr'] != undefined && Modernizr.localstorage && window.applicationCache != undefined) {
  // We need to prevent FF to cache the offline page. We use this very bad looking
  // test. We do two requests to be sure that the server is not reachable.
  if (localStorage.getItem("offlineEnabled")) {
    if (ecoRedirectClient() === false) {
      if (ecoRedirectClient() === false) {
        window.location="/offline?rand=" + Math.random();
      }
    }
  }
  
  // This function is used to add/update users' local storage with new articles.
  Drupal.behaviors.offlineContent = function(context) {
    var jsonList, offlineState, now, lastUpdate, nextCheck, url, state, message;
    var offlineEnabled = localStorage.getItem("offlineEnabled");
    var offlineBtn = $("#offline-btn", context);
    var disabledCopy = "Disable offline reading";
    var activeCopy = 'Activate offline reading';
    var menuElm = $('#masthead-offline a', context);
    var spanElm = function(state) {return '<span class="' + state + '">' + state + '</span>'};
    var iframe = '<iframe src="/sites/all/modules/ec_offline/offline/connection-state.html" scrolling="no" frameborder="0" style="display:none"></iframe>';
    var messageBox = function(message) {return '<div class="offline-msg"><span></span><div class="close">Close</div><p>' + message + '</p></div>'};
    var confirmMsg = 'Congratulations! You can now read The Economist blogs when you are offline. Simply go to www.economist.com/offline or bookmark this page.';
    var errorMsg = 'There\'s been an issue with your activation please check our <a href="/help/offline">offline help pages</a> for a solution';
    // Display the correct state in the masthead.
    if (offlineEnabled) {
      offlineBtn
      .addClass("ec-button disable-offline")
      .text(disabledCopy);
      appendIframe();
      $('#masthead-offline:not(".activated")', context).addClass('activated');
    }
    else {
      offlineBtn
      .addClass("ec-button enable-offline")
      .text(activeCopy);
      menuElm.append(spanElm('off'));
    }
    // Click events to toggle the active/disabled state for the buttons on the
    // /offline page.
    $('.enable-offline').live('click', function(){
      localStorage.setItem("offlineEnabled", true);
      localStorage.setItem("justActive", true);
      $(this).addClass('disable-offline').removeClass("enable-offline").text(disabledCopy);
      $('.off', menuElm).remove();
      menuElm.addClass('activated-now');
      appendIframe();
    });
    $('.disable-offline').live('click', function(){
      $(this).addClass('enable-offline').removeClass("disable-offline").text(activeCopy);
      $('#masthead-offline', context).addClass('activated');
      showOfflineState('off');
      $('.offline-msg').remove();
    });

    // Retrieve the json object and append the iFrame that holds the manifest.
    // The reason we are using an iFrame is to avoid the appcache to cache the
    // current page. Also once the appcache has been cached it requires the reload
    // of the page in order to trigger the updated state.
    function appendIframe() {
      now = Drupal.settings.offline.now;
      lastUpdate = localStorage.getItem("offlineLastUpdate") || 0;
      nextCheck = parseInt(lastUpdate, 10) + (3*60*60);
      url =  "/off-line/blog_posts";
      // We want to be sure that the user has offline mode enabled and that
      // 3 hours have passed since last time an update was performed.
      if (now > nextCheck) {
        $.getJSON(url,function(json) {
          jsonList = json.nodes;
          localStorage.setItem("offlineArticles", JSON.stringify(jsonList));
          localStorage.setItem("offlineLastUpdate", now);
        });
      }
      if (!$('#offline-frame').length) {
        $('body').append(iframe);
      }
    }
    // This renders the offline link in the masthead.
    function showOfflineState(state) {
      if ($('span', menuElm).length) {
        $('span', menuElm).replaceWith(spanElm(state));
      }
      else {
        menuElm.append(spanElm(state));
      }
      if (state == 'off') {
        localStorage.removeItem("offlineEnabled");
        offlineBtn.addClass('enable-offline').removeClass("disable-offline").text(activeCopy);
      }
      // Display a confirm box message when the user activates the offline feature.
      if ($('a.activated-now').length){
        message = (state == 'on') ? confirmMsg : errorMsg;
        if (!$('.offline-msg').length) {
          $('#masthead-offline').append(messageBox(message));
        }
        $('div.close').click(function(){$('.offline-msg').remove();});
        menuElm.removeClass('activated-now');
      }
    }

    // Let's retrieve the status of the appcache state. We use the postMessage
    // method to pass the state value from the frame to the parent.
    function receiveMessage(event) {
      // This is needed to prevent the listener to accept messages coming outside
      // our domain.
      if (event.origin !== 'http://' + window.location.hostname) {
        return;
      }
      offlineState = event.data;
      showOfflineState(offlineState);
    }
    // This listener awaits for the state message coming from the iFrame.
    window.addEventListener("message", receiveMessage, false);
  };
}
else {
  $('ul',  $('#ec-offline-online .right-column')).after('<p class="no-support">Sorry. Your browser does not support the offline feature.</p>')
}
;
Drupal.settings.omniture = Drupal.settings.omniture || {};

var availableOmnitureVarsForDebug;

Drupal.behaviors.omniture = function(context) {
  var $context = $(context);
  // This section handles click tracking of forms, e.g. Post a comment.
  // Below is the format that it expects.
  // Drupal.settings.omniture.click_tracking[] = { selector: selector, event: event, name: name, ... }
  var trackingCode = Drupal.settings.omniture.click_tracking;

  if (trackingCode) {

    $.each(trackingCode, function(k, v) {

      // Append an onclick function to the button if form_id exists in the DOM.
      var ltData = this;
      var selector = ltData.selector;
      // Verify if we are using tracking via css selector or we are using the
      // HTML data- attribute instead.
      selector = (selector == "data-ec-omniture") ? selector = "[data-ec-omniture='" + this.name + "']" : selector;
      selector = selector + ':not(.omniture-tagged)';
      // Check if there is any tagged element on the page.
      if (availableOmnitureVarsForDebug != true && $(selector).length) {
        availableOmnitureVarsForDebug = true;
      };

      if (Drupal.settings.omniture.debug == true) {
        // Enable the inline tracking debug.
        Drupal.omniture.debugVars(selector, ltData.name, trackingCode[k]);
      }
      // Add a class to any tagged element and bind the event.
      $context.find(selector).bind(ltData.event, function(e) {
        // Append tracking code to elements.
        Drupal.omniture.trackClick(this, ltData.name, trackingCode[k]);
      }).addClass('omniture-tagged omniture-tagged-' + k);
      
    });
  }
};

// Enable the omniture button for debugging/trace tracking code on page's elmts.
Drupal.behaviors.enableDebug = function(context) {
  if (Drupal.settings.omniture.debug == true && availableOmnitureVarsForDebug == true) {
    if (!$('.omiture-elements').length) {
      $('#page').prepend('<div class="omiture-elements">Omniture elements</div>');
    }
    $('.omiture-elements', context).click(function() {
      var activeText = $('.omiture-elements').text();
      $('.omiture-elements').toggleClass('omniture-elements-on').text(activeText == "Omniture elements" ? "Omniture elements on" : "Omniture elements");
      $('.omniture-tagged').toggleClass('omniture-tagged-on');
    });
  }
}

// This function sends the link_name to both the Custom Link Tracking and
// to the Omniture var associated with the form.
Drupal.omniture = {};
Drupal.omniture.trackClick = function(obj, name, options) {
  if (typeof s_gi == "function") {
    var options = options || {};
    var edge_server = options.edge_server || Drupal.settings.omniture.edge_server;
    var s = s_gi(edge_server);
    var element = obj ? obj : true;

    s.linkTrackVars = [];
    if (options.link_track_vars) {
      s.linkTrackVars = options.link_track_vars.split(',');
    }
    
    if (options.events) {
      s.linkTrackEvents = options.events;
      s.events = options.events;
      if ($.inArray('events', s.linkTrackEvents) != -1) {
        s.linkTrackVars.push('events');
      }
    }
    else {
      s.linkTrackEvents = 'None';
    }

    for (var p in options) {
      if (p.indexOf('prop') == 0 || p.indexOf('eVar') == 0) {
        s[p] = options[p];
        if ($.inArray(p, s.linkTrackEvents) != -1) {
          s.linkTrackVars.push(p);
        }
      }
    }

    s.linkTrackVars =  s.linkTrackVars.join(',');
    s.link_track_vars = name; // Why is this here?

    // Fires a custom event also.
    // @see https://developer.mozilla.org/hwois en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
    // Fire an event so that others can catch this if they want.
    var event = document.createEvent('Event');
    event.initEvent('ecOmnitureClick', true, true);
    event.ecOmnitureClickData = {
      "clickData": options,
      "omnitureObject": s
    };
    document.dispatchEvent(event);

    s.tl(options.skipDelay ? true : element, 'o', name);
  }
};

// This function is used to display omniture variables attached to elements to
// facilitate the debugging and maintainance process.
Drupal.omniture.debugVars = function(selector, name, omniVars) {
  // Add the debugging functionality.
  $(selector).mouseover(function() {
    var elm = $(this);
    var top = elm.offset().top;
    var height = (elm.height() == 0) ? 20 : elm.height();
    var left = elm.offset().left;
    if (elm.hasClass('omniture-tagged-on')) {
      if (!$('.omniture-wrapper').length) {
        var omniList = "<ul class='omniture-display'>";
        for (var vars in omniVars) {
          omniList += "<li>" + vars + "= " + omniVars[vars] + "</li>";
        }
        omniList += "</ul>";
        $('body').append(omniList);
        $('.omniture-display').css({'top': + (top + height), 'left': + left});
      }
    }
  }).mouseout(function(){$('.omniture-display').remove()});
};


Drupal.behaviors.socialButtons = function(context) {
  if (context != document) {
    return;
  }

  // Add the callback function for when the user clicks on the twttr btn.
  if (typeof twttr != "undefined") {
    twttr.ready(function(twttr) {
      twttr.events.bind('click', function(intent_event) {
        clickEventToAnalytics(intent_event, 'twitter');
      });
    });
  }
  
  // Initiate the Facebook like button, then provide a callback function when the
  // user clicks it.
  if (typeof FB != "undefined") {
    FB.Event.subscribe('edge.create', function(href, widget) {
      // We use the wrapping div/element as we don't put the data-ec-omniture-frame on the
      // fb-like link.
      clickEventToAnalytics(widget, 'facebook');
    });
  }
  
  // Provide the debug functionality for the social buttons.
  $("[data-ec-omniture-frame]").each(function(){
    availableOmnitureVarsForDebug = true;
    var $this = $(this);
    var thisElm = $this.attr('data-ec-omniture-frame');
    $this.addClass('omniture-tagged');
    var trackingCode = Drupal.settings.omniture['click_tracking_' + thisElm];
    if (trackingCode) {
      Drupal.omniture.debugVars($this, trackingCode.name, trackingCode[0]);
    }
  });
}


// This functions takes care of tracking clicks coming from Twitter and Facebook
// buttons via callback functions.
function clickEventToAnalytics(settings, network) {
  var trackingCode;
  
  if (network == 'twitter') {
    if (settings.target.tagName.toLowerCase() == 'a') {
      return false;
    }
    
    var elmToTrack = settings.target;
    elmToTrack = elmToTrack.parentNode.attributes['data-ec-omniture-frame'];
    if (elmToTrack) {
      trackingCode = Drupal.settings.omniture['click_tracking_' + elmToTrack.value][0];
    }
  }
  else if (network == 'facebook') {
    elmToTrack = settings.parentNode.attributes['data-ec-omniture-frame'];
    if (elmToTrack) {
      trackingCode = Drupal.settings.omniture['click_tracking_' + elmToTrack.value][0];
    }
  }
  else if (network == 'plusone') {
    if (settings.state == 'off') {
      return false
    };
    trackingCode = Drupal.settings.omniture['click_tracking_footer_plusone'][0];
  }
  
  if (trackingCode) {
    Drupal.omniture.trackClick(true, trackingCode.name, trackingCode);
  }
}

function clickEventToAnalyticsPlusOne(s) {
  clickEventToAnalytics(s, 'plusone');
};
/** Copyright (c) 2015 Sailthru, Inc. | Revision: 6e6eaafb9aa37749e5f6fbf3332758841cbfd6d8 | Generated: Mon May 18 11:59:26 EDT 2015 **/
/** Taken from http://ak.sail-horizon.com/scout/v1.js, modified by AJP and Sailthru to eliminate mousedown JS error until we upgrade jQuery **/
SailthruScout={config:{numVisible:10},allContent:[],visibleContent:[],lastIndex:-1,setup:function(options){for(var k in options){SailthruScout.config[k]=options[k]}if(options.renderItem){SailthruScout.renderItem=options.renderItem}if(options.jQuery){SailthruScout.jq=options.jQuery}else{if(window.jQuery){SailthruScout.jq=window.jQuery}else{if(window.$){SailthruScout.jq=window.$}}}SailthruScout.fetchContent(SailthruScout.config.numVisible+5);var set_scout_vars="var scoutElem=document.getElementById('sailthru-scout');var parentDiv=this.parentNode;var index=Array.prototype.indexOf.call(scoutElem.querySelectorAll('.content-item'),parentDiv);var id=SailthruScout.visibleContent[index].id;var url=SailthruScout.visibleContent[index].url;";function mousedown_handler(){eval(set_scout_vars);SailthruScout.track(id,"mhit",{index:index,url:url});return true}function hide_handler(){return true}if(typeof(SailthruScout.jq().on)==="function"){SailthruScout.jq(document).on("mousedown","#sailthru-scout a",mousedown_handler);SailthruScout.jq(document).on("click","#sailthru-scout .hide",hide_handler)}else{SailthruScout.jq("#sailthru-scout a").live("mousedown",mousedown_handler);SailthruScout.jq("#sailthru-scout .hide").live("click",hide_handler)}},track:function(e,d,a){if(window.location.protocol==="https:"){var c="https://horizon.sailthru.com/horizon/recommendtrack?d="+SailthruScout.config.domain+"&event="+d}else{var c="http://"+SailthruScout.config.domain+"/horizon/recommendtrack?event="+d}if(e){c+="&id="+e}if(SailthruScout.method){c+="&method="+SailthruScout.method}if(SailthruScout.config.trackType){c+="&type="+encodeURIComponent(SailthruScout.config.trackType)}if(a){for(var b in a){c+="&"+b+"="+encodeURIComponent(a[b])}}if(SailthruScout.config.useFullUrl){c+="&from_url="+encodeURIComponent(document.location)}c+="&cb="+Math.random();SailthruScout.jq("body").append('<img id="st-track-px" src="'+c+'" />')},debug:function(){console.log("ALL CONTENT");for(var a=0;a<SailthruScout.allContent.length;a++){console.log(SailthruScout.allContent[a].url)}console.log("VISIBLE CONTENT");for(var a=0;a<SailthruScout.visibleContent.length;a++){console.log(SailthruScout.visibleContent[a].url)}},renderItem:function(a,b){return SailthruScout.defaultItemRender(a,b)},defaultItemRender:function(b,c){var a="";a+='<div class="content-item">';a+='<div class="hide">X</div>';if(b.image){a+='<div class="image"><a href="'+b.url+'" target="_blank"><img src="'+b.image.thumb+'" /></a></div>'}a+='<div class="title"><a href="'+b.url+'" target="_blank">'+b.title+"</a></div>";a+="</div>";return a},contentItemExists:function(b){if(!b){return false}for(var a=0;a<SailthruScout.allContent.length;a++){if(SailthruScout.allContent[a].url==b.url){return true}}return false},addContentItem:function(a){if(!a){return false}if(SailthruScout.contentItemExists(a)){return}a.index=SailthruScout.allContent.length;SailthruScout.allContent.push(a)},refreshVisibleItems:function(){if(SailthruScout.visibleContent.length<SailthruScout.config.numVisible){var d=SailthruScout.lastIndex;SailthruScout.visibleContent=SailthruScout.visibleContent.concat(SailthruScout.allContent.slice(d+1,d+1+SailthruScout.config.numVisible-SailthruScout.visibleContent.length));if(SailthruScout.visibleContent.length){SailthruScout.lastIndex=Math.max(SailthruScout.lastIndex,SailthruScout.visibleContent[SailthruScout.visibleContent.length-1].index)}var b="";for(var a=0;a<SailthruScout.visibleContent.length;a++){var c=SailthruScout.visibleContent[a];b+=SailthruScout.renderItem(c,a)}SailthruScout.jq("#sailthru-scout").html(b);SailthruScout.jq(".sailthru-scout-loaded").show()}},removeContentItem:function(b){var a=SailthruScout.jq(b).parents(".content-item").index();SailthruScout.visibleContent.splice(a,1);SailthruScout.jq(b).parents(".content-item").fadeOut(500,function(){SailthruScout.refreshVisibleItems()});if(SailthruScout.allContent.length<SailthruScout.lastIndex+3){SailthruScout.fetchContent(SailthruScout.allContent.length+10)}},fetchContent:function(b){if(window.location.protocol==="https:"){var a="https://horizon.sailthru.com/horizon/recommend?format=jsonp&d="+SailthruScout.config.domain+"&number="+b+"&nospider=1"}else{var a="http://"+SailthruScout.config.domain+"/horizon/recommend?format=jsonp&number="+b+"&nospider=1"}if(SailthruScout.config.includeConsumed){a+="&include_consumed=1"}if(SailthruScout.config.noPageview){a+="&nopageview=1"}if(SailthruScout.config.useStoredTags){a+="&use_stored_tags=1"}if(SailthruScout.config.filter&&SailthruScout.config.filter.tags){tags=SailthruScout.config.filter.tags instanceof Array?SailthruScout.config.filter.tags.join(","):SailthruScout.config.filter.tags;tags=encodeURIComponent(tags);a+="&filter[tags]="+tags}if(SailthruScout.config.useFullUrl){a+="&url="+encodeURIComponent(document.location)}if(SailthruScout.config.alternateJsonpMode){SailthruScout.jq("body").append('<script type="text/javascript" src="'+a+'&callback=SailthruScout.fetchContentCallback"><\/script>')}else{SailthruScout.jq.ajax({url:a,dataType:"jsonp",success:SailthruScout.fetchContentCallback})}},fetchContentCallback:function(b){if(!SailthruScout.method&&b.method){SailthruScout.method=b.method;var c="";for(var a=0;a<b.content.length;a++){c+=","+b.content[a].id}c=c.substring(1);SailthruScout.track(null,"mshow",{ids:c,visible:SailthruScout.config.numVisible})}for(var a=0;a<b.content.length;a++){SailthruScout.addContentItem(b.content[a])}SailthruScout.refreshVisibleItems()},jq:null};;
/* global jQuery, SailthruScout */

(function ($) {
  "use strict";

  $(document).ready(function() {
    // For Sailthru Scout reference, see 
    // http://getstarted.sailthru.com/onsite-new/scout/scout-module/
    SailthruScout.setup({
      domain: 'horizon.economist.com',
      numVisible: 9,
      renderItem: function(item, pos) {
        var html = "",
          url = item.url,
          flytitle = item.vars.sailthru_flytitle,
          title = item.title,
          image = item.image.full;

        if (pos === 0) {
          html += '<h3>More from the Economist</h3>';
        }

        if (pos < 3) {
          url += "?fsrc=permar|image" + (pos+1);
        }
        else {
          url += "?fsrc=permar|text" + (pos-2);
        }

        html += '<div class="content-item content-item-' +  (pos < 3 ? 'image' : 'text') + '">';
        html += '<a href="' + url + '" >';
        if (pos < 3) {
          html += '<div class="image"><img src="' + image + '" /></div>';
        }
        html += '<div class="title">';
        if (flytitle) {
          html += "<strong>" + flytitle + "</strong>: ";
        }
        html += title + '</div>';
        html += '</a></div>';
        return html;
      }
    });
  });
})(jQuery);;
if ($('#rolling_eco').length) {
  var banner = new js_rolling('rolling_eco');
  banner.set_direction(4);
  banner.move_gap = 10;
  banner.time_dealy = 3;
  banner.time_dealy_pause = 5000;
  banner.start();
}

;
