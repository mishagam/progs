//Dailymotion plugin for Waywire HTML5 Player

(function() {
    var e = document.createElement('script'); e.async = true;
    e.src = document.location.protocol + '//api.dmcdn.net/all.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
}());

//shim
window.dmAsyncInit = function(){};

var outer;

define(['dailymotion', 'magstats'], function(dailymotion, magstats){
	 var DailyMotionWrapper = function(){
        //Events we want to listen for from the DailyMotion player
        this.events = ['ready', 'play', 'playing', 'pause', 'ended', 'canplay', 'canplaythrough' 
                        ,'timeupdate', 'progress', 'seeking', 'seeked', 'volumechange', 'durationchange',
                         'fullscreenchange','error'];
        this.player = null;
        
        var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol + '//api.dmcdn.net/all.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
	 };

	DailyMotionWrapper.prototype.bindEventListeners = function(){
        if (this.player !== null){
            var that = this;
            for (var i = 0; i < this.events.length; i++){
                this.player.addEventListener(this.events[i], function(e){
                    that.onEvent(e);
                });
            };
        };
	};

	DailyMotionWrapper.prototype.buildAndInjectPlayer = function(video_id, container, autoplay){
		var player = document.createElement('video');
		container.appendChild(player);
		console.log(autoplay);
        this.player = DM.player(player, {video: video_id, width: container.offsetWidth, height: container.offsetHeight, params: {autoplay: 1}});
	};

    //Takes DOM devent object as arg
    DailyMotionWrapper.prototype.onEvent = function(ev){
        magstats.logThirdPartyEvent(ev.type);
        switch(ev.type){
            case 'ready':

                break;
            case 'play':

                break;
            case 'playing':

                break;
            case 'pause':

                break;
            case 'ended':

                break;
            case 'canplay':

                break;
            case 'canplaythrough':

                break;
            case 'timeupdate':

                break;
            case 'progress':

                break;
            case 'seeking':

                break;
            case 'seeked':

                break;
            case 'volumechange':

                break;
            case 'durationchange':

                break;
            case 'fullscreenchange':

                break;
            case 'error':
                console.log("Dailymotion player error", ev);
                break;
            default:
                console.log("Unrecognized event");
        };
    };

	DailyMotionWrapper.prototype.setContainerElement = function(){

	};

	 return new DailyMotionWrapper();
});

