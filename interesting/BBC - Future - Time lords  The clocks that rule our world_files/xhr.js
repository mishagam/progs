/*
Magnify Player XmlHttpRequest Plugin v. 0.0.1

This plugin is intended to serve as a helper for Ajax calls, in lieu of using jQuery
*/

define(['xhr'], function(xhr){
	var XhrWrapper = function(){

	};

	XhrWrapper.prototype.ajax = function(params_obj){
		var new_request = new XMLHttpRequest();
		var request_data = {};
		new_request.onload = params_obj.success || function(){};
		new_request.open(params_obj.method, params_obj.url, true);
		
		if (typeof params_obj.content_type !=='undefined'){
			new_request.setRequestHeader("Content-type", params_obj.content_type);
		};

		if (typeof params_obj.data !=='undefined'){
			new_request.setRequestHeader("Content-type", 'application/json;charset=UTF-8');
			request_data = JSON.stringify(params_obj.data);
		} else if (typeof params_obj.params !=='undefined'){
			request_data = params_obj.params;
		};

		new_request.send(request_data);
	};

	return new XhrWrapper(); 
});