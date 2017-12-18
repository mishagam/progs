/*
Magnify Player Vimeo API wrapper Plugin v. 0.1.0
*/

define(['vimeo', 'magstats', 'xhr'], function(vimeo, magstats, xhr){
	var VimeoWrapper = function(){
		this.init = null;
		this.container_element = null;
		this.url = null;
		this.is_on_ios = false;
	};

	VimeoWrapper.prototype.bindEventListeners = function(){
		var ___onMessageReceived = this.onMessageReceived;
		var bound_onMessageReceived = ___onMessageReceived.bind(this);

		var ___outer = this;
		if (window.addEventListener){
    		window.addEventListener('message', bound_onMessageReceived, false);
		}
		else {
		    window.attachEvent('onmessage', bound_onMessageReceived, false);
		};
	};

	VimeoWrapper.prototype.setContainerElement = function(element){
		this.container_element = element;
	};

	VimeoWrapper.prototype.setiOS = function(bool){
		this.is_on_ios = bool;
	};

	VimeoWrapper.prototype.onMessageReceived = function(e){
	    var data = JSON.parse(e.data);
	    
	    var that = this;
	    switch (data.event) {
	        case 'ready':
	            that.onReady();
	            break;
	           
	        case 'playProgress':
	            that.onPlayProgress(data.data);
	            break;
	            
	        case 'pause':
	            that.onPause();
	            break;
	           
	        case 'finish':
	            that.onFinish();
	            break;

	        case 'play':
	        	that.onPlay();
	        	break;
	    }
	};

	VimeoWrapper.prototype.onReady = function(){
	    this.postToIframe('addEventListener', 'pause');
	    this.postToIframe('addEventListener', 'play');
		this.postToIframe('addEventListener', 'finish');
		this.postToIframe('addEventListener', 'playProgress');

		if (this.is_on_ios==false){
			this.postToIframe('play', '');
		};
	};

	VimeoWrapper.prototype.onPlay = function(ev){
		this.logThirdPartyEvent('play', this);
	};

	VimeoWrapper.prototype.onPlayProgress = function(data){
		//do nothing
	};

	VimeoWrapper.prototype.onPause = function(){
		this.logThirdPartyEvent('pause', this);
	};

	VimeoWrapper.prototype.onFinish = function(){
		this.logThirdPartyEvent('complete', this);
	};

	VimeoWrapper.prototype.buildAndInjectPlayer = function(video_id, player_id, width, height){
		var aspect_ratio = width/height;
		if (window.innerWidth > 580) {
			var adjusted_height = $(this.container_element).height();
		} else {
			var adjusted_height = height * $(this.container_element).width() / width;
		}
		player_id = player_id;
		var player_iframe = document.createElement('iframe');
		this.iframe_id = player_id;
		player_iframe.id = this.iframe_id;
		player_iframe.width = width;
		player_iframe.height = height;
		player_iframe.src = "https://player.vimeo.com/video/" + video_id + "?api=1&autoplay=true";
		player_iframe.setAttribute('seamless', "true");
		player_iframe.setAttribute('autoplay', '1');
		player_iframe.style.width = '100%';
		player_iframe.style.height = adjusted_height + 'px';
		player_iframe.frameBorder = 0;
		this.url = "http://player.vimeo.com/video/" + video_id;
		this.player_iframe = player_iframe;
		this.container_element.appendChild(player_iframe);
		if (adjusted_height > $(this.container_element).height()) {
			adjusted_height = $(this.container_element).height();
			width = aspect_ratio * adjusted_height;
			player_iframe.style.width = width + 'px';
			player_iframe.style.height = adjusted_height + 'px';
			this.container_element.appendChild(player_iframe);
		} 
	};

	VimeoWrapper.prototype.postToIframe = function(action, value){
	    var data = { method: action };
	    
	    if (value) {
	        data.value = value;
	    }
	    
	    var that = this;
	    if (typeof this.url !=='undefined'){
	    	this.player_iframe.contentWindow.postMessage(JSON.stringify(data), that.url);
		} else {
			//do nothing
		}
	};

	return new VimeoWrapper(); 
});
