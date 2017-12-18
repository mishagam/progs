/*
Magnify Player Showmaker wrapper Plugin
*/

define(['showmaker'], function(showmaker){
	 var ShowmakerWrapper = function(){
        this.container_element = null;
	 };
	 
	 ShowmakerWrapper.prototype.setContainerElement = function(element){
		this.container_element = element;
	};
	
	
	ShowmakerWrapper.prototype.buildAndInjectPlayer = function(video_id, player_id, width, height, autoplay, hostname){
		player_id = player_id;
                autoplay_param = autoplay ? "autoplay=true" : "";
		var player_iframe = document.createElement('iframe');
		this.iframe_id = player_id;
		player_iframe.id = this.iframe_id;
		player_iframe.width = "100%";
		player_iframe.src = "http://" + hostname + "/show/" + video_id + "?" + autoplay_param + "&title=false&description=false";
		player_iframe.setAttribute('seamless', "true");
		player_iframe.frameBorder = 0;
		this.container_element.appendChild(player_iframe);
	};
	
	 return new ShowmakerWrapper();
});
