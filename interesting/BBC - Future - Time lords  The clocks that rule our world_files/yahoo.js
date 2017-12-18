/*
Magnify Player Yahoo API wrapper Plugin v. 0.1.0
*/

define(['yahoo'], function(aol){
	 var YahooWrapper = function(){
        this.container_element = null;
	 };
	 
	 YahooWrapper.prototype.setContainerElement = function(element){
		this.container_element = element;
	};
	
	
	YahooWrapper.prototype.buildAndInjectPlayer = function(video_id, player_id, width, height){
		var aspect_ratio = width/height;
		var videoHeight = height * $(this.container_element).width() / width
		if (window.innerWidth > 580) {
			var adjusted_height = $(this.container_element).height();
		} else {
			var adjusted_height = videoHeight;
		}
		player_id = player_id;
		var player_iframe = document.createElement('iframe');
		this.iframe_id = player_id;
		player_iframe.id = this.iframe_id;
		player_iframe.width = width;
		//player_iframe.height = "100vh !important";
		player_iframe.src = "https://screen.yahoo.com/baja_playlist_single_video/" + video_id + ".html?format=embed&player_autoplay=true";
		player_iframe.setAttribute('seamless', "true");
		player_iframe.setAttribute('onload', "document.getElementById('" + player_iframe.id + "').height = 100vh");
		player_iframe.style.width = '100%';
		player_iframe.style.height = adjusted_height + 'px';
		player_iframe.frameBorder = 0;
		this.player_iframe = player_iframe;
		this.container_element.appendChild(player_iframe);
		if (videoHeight > $(this.container_element).height()) {
			adjusted_height = $(this.container_element).height();
			width = aspect_ratio * adjusted_height;
			player_iframe.style.width = width + 'px';
			player_iframe.style.height = adjusted_height + 'px';
			this.container_element.appendChild(player_iframe);
		} 
	};
	
	 return new YahooWrapper();
});
