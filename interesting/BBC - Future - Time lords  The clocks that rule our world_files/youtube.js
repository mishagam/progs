/*
Magnify Player Youtube API wrapper Plugin v. 0.1.0

Adapted from magnify_youtube_player_integration.js
*/

var onYouTubeIframeAPIReady = function(){
    //dummy function; gets assigned later
};

var outer, progress_timer, FiredEvents = [];

define(['youtube', 'magstats'], function(youtube, magstats){
    var YoutubeWrapper = function(){
        this.init = null;
        outer = this;
        this.player_states = {
            "-1": "unstarted",
            "0": "ended",
            "1": "play",
            "2": "paused",
            "3": "buffering",
            "5": "videocued"
        };

    };

    onYouTubeIframeAPIReady = function(){
        outer.youtubeAPIReady();
    };

    YoutubeWrapper.prototype.ytInit = function(container, player_id, width, height, video_id, stats_obj, autoplay, player_widget_type, magnify_player){
        window.Magnify = window.Magnify || {};
        window.Magnify.yt_params = {};
        window.Magnify.yt_params.container = container;
        window.Magnify.yt_params.player_id = player_id;
        var player_cont = document.createElement('div');
        player_cont. id  = window.Magnify.yt_params.player_id;
        window.Magnify.yt_params.container.appendChild(player_cont);
        window.Magnify.yt_params.width = width;
        window.Magnify.yt_params.height = height;
        window.Magnify.yt_params.video_id = video_id;
        //window.Magnify.yt_params.autoplay = autoplay;
        window.Magnify.yt_params.autoplay = 1;
        window.Magnify.yt_params.player_widget_type = player_widget_type;
        window.Magnify.yt_params.magnify_player = magnify_player;
        window.Magnify.yt_params.stats_obj = stats_obj;
        if (typeof YT !=='undefined'){
            this.youtubeAPIReady();
        } else {
            var tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    };

    YoutubeWrapper.prototype.youtubeAPIReady = function(){
        var that = this;
        var ___ytPlayerStateChange = this.ytPlayerStateChange;
        var bound_ytPlayerStateChange = ___ytPlayerStateChange.bind(this);
        
        if (window.Magnify.yt_params.player_widget_type === 'mvp') {
            // Build iframe manually for instant access to video for swapping with mvp.
            var player = document.createElement('iframe');
            var aspect_ratio = window.Magnify.yt_params.width/window.Magnify.yt_params.height;
            if (window.innerWidth > 580) {
                var adjusted_height = $(window.Magnify.yt_params.container).height();
            } else {
                var adjusted_height = window.Magnify.yt_params.height * $(window.Magnify.yt_params.container).width() / window.Magnify.yt_params.width;
            }
            player.id = window.Magnify.yt_params.player_id;
            player.style.width = '100%';
            player.style.height = adjusted_height + 'px';
            player.src = "https://www.youtube.com/embed/" + window.Magnify.yt_params.video_id + "?autoplay=" + window.Magnify.yt_params.autoplay + "&enablejsapi=1";
            player.setAttribute('seamless', "true");
            player.frameBorder = 0;
            window.Magnify.yt_params.container.appendChild(player);
            if (adjusted_height > $(window.Magnify.yt_params.container).height()) {
                adjusted_height = $(window.Magnify.yt_params.container).height();
                //window.Magnify.yt_params.width = aspect_ratio * adjusted_height;
                //player.style.width = window.Magnify.yt_params.width + 'px';
                player.style.height = adjusted_height + 'px';
                this.container_element.appendChild(player);
            } 
        } else {
            // Build video with iframe api for access to event listeners
            var yt_player = new YT.Player(window.Magnify.yt_params.player_id, {
                //playerVars: { 'autoplay': window.Magnify.yt_params.autoplay },
                playerVars: { 'autoplay': 1 },
                height: '100%',
                width: '100%',
                videoId: window.Magnify.yt_params.video_id,
                events: {
                    'onReady': that.onYoutubeIframePlayerReady,
                    'onStateChange': bound_ytPlayerStateChange
                }
            });
        }
    };

    YoutubeWrapper.prototype.onYoutubeIframePlayerReady = function(event){
        var userAgent = window.navigator.userAgent;

        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) ||  userAgent.match(/Android/i)) {
            console.log("is iOS/Android.  Do not play");
            // do not play video automatically, because this will break the player on iOS. Instead we have to wait for the user to initiate the playback - Apple's rules.
            // event.target.playVideo();
        }
        else {
            console.log("is not iOS/Android.  Play");
            event.target.playVideo();
        }
    };

    YoutubeWrapper.prototype.ytPlayerStateChange = function(event){
        var that = this;
        magstats.logThirdPartyEvent(that.player_states[ event.data.toString() ]);


        if (event.data == YT.PlayerState.PLAYING) {
            var playerTotalTime = event.target.getDuration();

            // Sets a timer to check video play percentage
            progress_timer = setInterval(function() {
                var playerCurrentTime = event.target.getCurrentTime();
                var playerPercentage  = (playerCurrentTime / playerTotalTime) * 100;
                var ev = process_video_percentage( playerPercentage, magstats );
                if ( typeof ev !== 'undefined' && FiredEvents[ev] !== 1 ) {
                    FiredEvents[ev] = 1;
                    magstats.logThirdPartyEvent( ev, window.Magnify.yt_params.magnify_player);
                }
            }, 1000);

        } else if (typeof progress_timer !== 'undefined' ) { clearTimeout(progress_timer) }

        // Increments video 100% watched
        // Clears flags
        if (event.data == YT.PlayerState.ENDED) {
            var ev = process_video_percentage(100);
            if ( typeof ev !== 'undefined' ) magstats.logThirdPartyEvent( ev, window.Magnify.yt_params.magnify_player);
            FiredEvents = [];
        }
    };

    return new YoutubeWrapper(); 
});
