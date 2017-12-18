/*
Magnify Player AOL API wrapper Plugin v. 0.1.0
*/

define(['aol'], function(aol){
	 var AOLWrapper = function(){
        this.init = null;
        this.container_element = null;
        this.player = null;
        this.sid = 1266;
	 };
	 
	 AOLWrapper.prototype.setContainerElement = function(element, player_widget_type){
		this.container_element = element;
		this.player_widget_type = player_widget_type;
	};
	
	/*
	AOLWrapper.prototype.buildAndInjectPlayer = function(video_id, player_id, width, height, autoplay){
		var aspect_ratio = width/height;
		var videoHeight = height * $(this.container_element).width() / width
		if (window.innerWidth > 580) {
			var adjusted_height = $(this.container_element).height();
		} else {
			var adjusted_height = videoHeight;
		}
		var object = document.createElement('object');
		object.id = player_id;
		var full_screen_param = document.createElement('param');
		full_screen_param.setAttribute('name', 'allowfullscreen');
		full_screen_param.setAttribute('value', 'true');
		var script_access_param = document.createElement('param');
		script_access_param.setAttribute('name', 'allowScriptAccess');
		script_access_param.setAttribute('value', 'always');
		var movie_param = document.createElement('param');
		movie_param.setAttribute('name', 'movie');
		movie_param.setAttribute('value', 'http://www.5min.com/Embeded/' + video_id + '/');
		var embed = document.createElement('embed');
		embed.src = 'http://www.5min.com/Embeded/' + video_id + '/';
		embed.setAttribute('type', 'application/x-shockwave-flash');
		embed.setAttribute('allowfullscreen', 'true');
		embed.setAttribute('allowScriptAccess', 'always');
		embed.setAttribute('autoStart', true);
		embed.style.width = '100%';
		embed.style.height = adjusted_height + 'px';
		object.appendChild(full_screen_param);
		object.appendChild(script_access_param);
		object.appendChild(movie_param);
		object.appendChild(embed);
		this.container_element.appendChild(object);		
		if (videoHeight > $(this.container_element).height()) {
			adjusted_height = $(this.container_element).height();
			width = aspect_ratio * adjusted_height;
			embed.style.width = width + 'px';
			embed.style.height = adjusted_height + 'px';
			this.container_element.appendChild(object);
		}
	};
	*/

	// Use script to automatically generate object so that autoplay works.
	AOLWrapper.prototype.buildAndInjectPlayer = function(video_id, player_id, width, height, autoplay){
		var aspect_ratio = width/height;
		var videoHeight = height * $(this.container_element).width() / width;
		if (this.player_widget_type == "mvp" && this.container_element.offsetWidth < 581) {
			if (videoHeight > $(this.container_element).height()) {
				adjusted_height = $(this.container_element).height();
			} else {
				var adjusted_height = videoHeight;
			}
		} else {
			var adjusted_height = $(this.container_element).height();
		}
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://pshared.5min.com/Scripts/PlayerSeed.js?sid=' + this.sid + '&amp;playList=' + video_id + '&amp;autoStart=true&amp;width=' + this.container_element.offsetWidth + '&amp;height=' + adjusted_height;
		this.container_element.appendChild(script);	
	};
	
	 return new AOLWrapper();
});

