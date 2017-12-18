// var Magnify = window.Magnify defined in Public/js/new_magnify_player

Magnify.VastClient = function(player_container, player_element, ad_tag, pipeline, player_source) {
	var adsManager;
	var adsLoader;
	var adDisplayContainer;
	var intervalTimer;
	
	var videoContent = player_element;
	
	//var play_count = 0;
	
	function isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	
	var contentEndedListener = function() {
		adsLoader.contentComplete();
		if (pipeline=='upload' && isMobile() /*&& play_count < 1*/) {
			newplayer.preroll_done = true;
			//play_count++;	
			videoContent.src = player_source;
	        videoContent.load();
	        videoContent.setAttribute("controls", "true");
	        newplayer.player.style.visibility = "visible"
	        videoContent.play();
		} else {
			newplayer.refreshPlayer();
		}
		
	};
	
	function createAdDisplayContainer() {
	  // We assume the adContainer is the DOM id of the element that will house
	  // the ads.
	  adDisplayContainer =
	      new google.ima.AdDisplayContainer(
	          player_container,
	          videoContent);
	}
	
	function requestAds() {
	  // Create the ad display container.
	  createAdDisplayContainer();
	  // Initialize the container, if requestAds is invoked in a user action.
	  // This is only needed on iOS/Android devices.
	  adDisplayContainer.initialize();
	  // Create ads loader.
	  adsLoader = new google.ima.AdsLoader(adDisplayContainer);
	  // Listen and respond to ads loaded and error events.
	  adsLoader.addEventListener(
	      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
	      onAdsManagerLoaded,
	      false);
	  adsLoader.addEventListener(
	      google.ima.AdErrorEvent.Type.AD_ERROR,
	      onAdError,
	      false);
	
	  // An event listener to tell the SDK that our content video
	  // is completed so the SDK can play any post-roll ads.
	  videoContent.addEventListener('ended', contentEndedListener);
	
	  // Request video ads.
	  var adsRequest = new google.ima.AdsRequest();
	  //adsRequest.adTagUrl = ad_tag;
	  adsRequest.adTagUrl = ad_tag;
	  // Specify the linear and nonlinear slot sizes. This helps the SDK to
	  // select the correct creative if multiple are returned.
	  adsRequest.linearAdSlotWidth = player_container.offsetWidth;
	  adsRequest.linearAdSlotHeight = player_container.offsetHeight;
	
	  adsRequest.nonLinearAdSlotWidth = 640;
	  adsRequest.nonLinearAdSlotHeight = 150;
	
	  adsLoader.requestAds(adsRequest);
	}
	
	function onAdsManagerLoaded(adsManagerLoadedEvent) {
	  // Get the ads manager.
	  adsManager = adsManagerLoadedEvent.getAdsManager(
	      videoContent);  // See API reference for contentPlayback
	
	  // Add listeners to the required events.
	  adsManager.addEventListener(
	      google.ima.AdErrorEvent.Type.AD_ERROR,
	      onAdError);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
	      onContentPauseRequested);
	  adsManager.addEventListener(
	     google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
	      onContentResumeRequested);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
	      onAdEvent);
	
	  // Listen to any additional events, if necessary.
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.LOADED,
	      onAdEvent);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.STARTED,
	      onAdEvent);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.COMPLETE,
	      onAdEvent);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.SKIPPED,
	      onAdEvent);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.FIRST_QUARTILE,
	      onAdEvent);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.MIDPOINT,
	      onAdEvent);
	  adsManager.addEventListener(
	      google.ima.AdEvent.Type.THIRD_QUARTILE,
	      onAdEvent);
	
	  try {
	    // Initialize the ads manager. Ad rules playlist will start at this time.
	    adsManager.init(player_container.offsetWidth, player_container.offsetHeight, google.ima.ViewMode.NORMAL);
	    // Call play to start showing the ad. Single video and overlay ads will
	    // start at this time; the call will be ignored for ad rules.
	    adsManager.start();
	  } catch (adError) {
	    // An error may be thrown if there was a problem with the VAST response.
	  }
	}
	
	function onAdEvent(adEvent) {
	  // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
	  // don't have ad object associated.
	  var ad = adEvent.getAd();
	  var ad_data = adEvent.getAdData();
	  switch (adEvent.type) {
	    case google.ima.AdEvent.Type.LOADED:
	      // This is the first event sent for an ad - it is possible to
	      // determine whether the ad is a video ad or an overlay.
	      if (!ad.isLinear()) {
	        // Position AdDisplayContainer correctly for overlay.
	        // Use ad.width and ad.height.
	      }
	      break;
	    case google.ima.AdEvent.Type.STARTED:
	      // This event indicates the ad has started - the video player
	      // can adjust the UI, for example display a pause button and
	      // remaining time.
	      if (ad.isLinear()) {
	        // For a linear ad, a timer can be started to poll for
	        // the remaining time.
	        intervalTimer = setInterval(
	            function() {
	              var remainingTime = adsManager.getRemainingTime();
	            },
	            300); // every 300ms
	      }
	      break;
	    case google.ima.AdEvent.Type.COMPLETE:
	      // This event indicates the ad has finished - the video player
	      // can perform appropriate UI actions, such as removing the timer for
	      // remaining time detection.
	      if (ad.isLinear()) {
	        clearInterval(intervalTimer);
	      }
	      contentEndedListener();
	      break;
	    case google.ima.AdEvent.Type.SKIPPED:
	      // This event indicates the ad has been skipped - the video player
	      // can perform appropriate UI actions, such as removing the timer for
	      // remaining time detection.
	      if (ad.isLinear()) {
	        clearInterval(intervalTimer);
	      }
	      contentEndedListener();
	      break;
	    case google.ima.AdEvent.Type.FIRST_QUARTILE:
	      // This event indicates the ad has reached 25% completion
	      //console.log("first quartile");
	      break;
	    case google.ima.AdEvent.Type.MIDPOINT:
	      // This event indicates the ad has reached 50% completion
	      //console.log("second quartile");
	      break;
	    case google.ima.AdEvent.Type.THIRD_QUARTILE:
	      // This event indicates the ad has reached 75% completion
	      //console.log("thrid quartile");
	      break;
	  }
	}
	
	function onAdError(adErrorEvent) {
	  // Handle the error logging.
	  console.log("adErrorEvent", adErrorEvent.getError());
	  if (adErrorEvent.getError().b == 403 || (/Safari/.test(navigator.userAgent) && adErrorEvent.getError().b == 301)) {
	  	  if (isMobile()) {
		 	  newplayer.refreshPlayer();
	  	  } else {
		  	  newplayer.panic();
	  	  }
	  } else if (adErrorEvent.getError().b == 402 && isMobile()) {
		  // Do nothing for timeout add on mobile (this may be a bug in ima)
	  } else {
		  newplayer.refreshPlayer();
	  }
	}
	
	function onContentPauseRequested() {
	  videoContent.removeEventListener('ended', contentEndedListener);
	  videoContent.pause();
	  // This function is where you should setup UI for showing ads (e.g.
	  // display ad timer countdown, disable seeking etc.)
	  // setupUIForAds();
	}
	
	function onContentResumeRequested() {
	  videoContent.addEventListener('ended', contentEndedListener);
	  videoContent.play();
	  // This function is where you should ensure that your UI is ready
	  // to play content. It is the responsibility of the Publisher to
	  // implement this function when necessary.
	  // setupUIForContent();
	}
	
	//Kick off the ads request
	var starter = document.getElementById("play_button");
	var splash = document.getElementById("splash_image");
	if(isMobile()) {
		requestAds();
		starter.addEventListener("click", function() {
			newplayer.raiseEvent("startPlayer");
			starter.style.visibility = "hidden";
			splash.style.visibility = "hidden";
			newplayer.player.style.visibility = "visible"
			videoContent.play();
		})
	} else {
		starter.addEventListener("click", function() {
			newplayer.raiseEvent("startPlayer");
			starter.style.visibility = "hidden";
			splash.style.visibility = "hidden";
			//newplayer.player.style.visibility = "visible"
			requestAds();
		})
	}
}