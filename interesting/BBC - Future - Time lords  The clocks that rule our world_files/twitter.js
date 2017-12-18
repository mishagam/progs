/*
Magnify Player Twitter Plugin v. 0.0.1
*/

define(['twitter'], function(twitter){
	var TwitterModule = function(){
		this.init = null;
		this.intent_url = "https://twitter.com/intent/tweet";
		this.default_window_params = "height=400,width=600,top=500,left=500";

		this.class_names = {
			tweet_button: "waywire-tweet-button"
		};
	};

	TwitterModule.prototype.buildTweetButton = function(class_name){
		class_name = class_name || this.class_names.tweet_button;
		var new_tweet_button = document.createElement('span');
		new_tweet_button.innerHTML = '<i class="fa fa-twitter fa-2x"></i>';
		new_tweet_button.setAttribute('class', class_name);
		return new_tweet_button;
	};

	TwitterModule.prototype.tweetSomething = function(thing){
		var url = this.intent_url;
		var url_params = "";
		url += "?";
		url_params += this.urify('text', thing.text);
		url_params += this.urify('hashtags', thing.hashtags);
		url += url_params;
		this.openTweetWindow(url);
	};

	TwitterModule.prototype.openTweetWindow = function(url, params){
		params = params || this.default_window_params;
		var window_name = "WaywireTwitterWindow";
		url = url || this.intent_url;
		window.open(url, window_name, params);
	};

	TwitterModule.prototype.urify = function(prop, val){
		return (prop + "=" + encodeURIComponent(val) + "&");
	};

	return new TwitterModule(); 
});