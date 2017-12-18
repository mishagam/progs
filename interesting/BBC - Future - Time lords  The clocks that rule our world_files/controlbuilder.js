/*
Magnify Player Controls Builder Plugin v. 0.1.0
*/

define(['controlbuilder'], function(controlbuilder){
	var ControlBuilder = function(){
		this.id_suffix = null;

		this.class_names = {
			play_button: "video-play-button",
			mute_button: "video-mute-button",
			time_display: "video-time-display",
			fullscreen_button: "video-fullscreen-button",
			volume_slider: "video-volume-slider",
			pause_button: "video-pause-button",
			skip_button: "video-skip-button",
			time_slider: "video-time-slider"
		};
	};

	//Id suffix corresponding to ID of player - allows multiple players and controls on one page without conflict
	ControlBuilder.prototype.setIdSuffix = function(id_suffix){
		this.id_suffix = id_suffix;
	};

	//Shortcut method to build a simple element with one class name and a standardized id
	ControlBuilder.prototype.quickElementBuild = function(type, classname){
		var new_element = document.createElement(type);
		new_element.setAttribute('class', classname);
		new_element.id = classname + '-' + this.id_suffix;
		return new_element;
	};

	ControlBuilder.prototype.buildPlayButton = function(class_name){
		class_name = class_name || this.class_names.play_button;
		var play_button = this.quickElementBuild('span', class_name);
		play_button.innerHTML = '<i class="fa fa-play fa-2x control"></i>';
		return play_button;
	};

	ControlBuilder.prototype.buildPauseButton = function(class_name){
		class_name = class_name || this.class_names.pause_button;
		var pause_button = this.quickElementBuild('span', class_name);
		pause_button.innerHTML = '<i class="fa fa-pause fa-2x control"></i>';
		return pause_button;
	};

	ControlBuilder.prototype.buildMuteButton = function(class_name){
		class_name = class_name || this.class_names.mute_button;
		var mute_button = this.quickElementBuild('span', class_name);
		mute_button.innerHTML = '<i class="fa fa-volume-up fa-2x control"></i>';
		return mute_button;
	};

	ControlBuilder.prototype.buildTimeDisplay = function(class_name){
		class_name = class_name || this.class_names.time_display;
		var time_display = this.quickElementBuild('span', class_name);
		return time_display;
	};

	ControlBuilder.prototype.buildFullscreenButton = function(class_name){
		class_name = class_name || this.class_names.fullscreen_button;
		var fullscreen_button = this.quickElementBuild('span', class_name);
		fullscreen_button.innerHTML = '<i class="fa fa-arrows-alt fa-2x control"></i>';
		return fullscreen_button;
	};

	ControlBuilder.prototype.buildTimeSlider = function(class_name){
		class_name = class_name || this.class_names.time_slider;
		var time_slider = this.quickElementBuild('progress', class_name);
		return time_slider;
	};

	//TODO: Needs IE9 fallback, since input type 'range' is not supported in IE9-
	ControlBuilder.prototype.buildVolumeSlider = function(class_name){
		class_name = class_name || this.class_names.volume_slider;
		var volume_slider = this.quickElementBuild('input', class_name);
		volume_slider.setAttribute('type', 'range');
		volume_slider.setAttribute('min', 0);
		volume_slider.setAttribute('max', 1);
		volume_slider.setAttribute('step', 0.05);
		return volume_slider;
	};

	ControlBuilder.prototype.buildSkipButton = function(class_name){
		class_name = class_name || this.class_names.skip_button;
		var skip_button = this.quickElementBuild('span', class_name);
		return skip_button;
	};

	return new ControlBuilder(); 
});