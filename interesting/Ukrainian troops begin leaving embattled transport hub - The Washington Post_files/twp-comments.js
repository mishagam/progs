(function() {	
	var isSSL = (window.location.protocol.indexOf('https')) < 0?false:true;
	var wpostServerSsl = 'https://ssl.washingtonpost.com/wpost';
	TWP = window.TWP || {};
	TWP.base = TWP.base || 'http://www.washingtonpost.com';
	TWP.wpostCssBase = TWP.wpostCssBase || 'http://css.washingtonpost.com';
	TWP.wpostJsBase = TWP.wpostJsBase || 'http://js.washingtonpost.com';
	TWP.wpostJsBaseSsl = TWP.wpostJsBaseSsl || 'https://ssl.washingtonpost.com';	
	TWP.jsCacheBuster = TWP.jsCacheBuster || '20150217103600';
	TWP.cssCacheBuster = TWP.cssCacheBuster || '20141201130100';
	TWP.ScriptLoader = TWP.ScriptLoader || {};
	TWP.ScriptLoader.completeEvents = TWP.ScriptLoader.completeEvents || [];
	var hscriptArray = [];
	window.head_conf  = {head: "TWPHead"};
	 
		
	var startEvent = '';
	var completeEvent = '';	
	
	var jsList = '';
	
				jsList = jsList + '|<script type="text/cjs" data-cjssrc="http://js.washingtonpost.com/wpost/js/combo?token=20150217103600&c=true&m=true&context=eidos&r=/echo2/v2/core/date.format.js&r=/plugin/plugin.lockfixed.js&r=/plugin/plugin.jquery.echo-container-3.1.0.js&r=/echo2/v2/core/utils.js&r=/util/util.url-1.0.0.js&r=/plugin/jquery.json-2.3.js"></script>|<script type="text/cjs" data-cjssrc="http://cdn.echoenabled.com/sdk/v3/loader.js?token=20140821132000"></script>|<script type="text/cjs" data-cjssrc="http://cdn.echoenabled.com/sdk/v3/backplane.js?token=20140821132000"></script>|<script type="text/cjs" data-cjssrc="http://cdn.echoenabled.com/sdk/v3/third-party/jquery.pack.js?token=20140821132000"></script>|<script type="text/cjs" data-cjssrc="http://cdn.echoenabled.com/sdk/v3/environment.pack.js?token=20140821132000"></script>|<script type="text/cjs" data-cjssrc="http://js.washingtonpost.com/wpost/js/combo?token=20150217103600&c=true&m=true&context=eidos&r=/echo2/v3.1/core/twp_comments_echo2_config.js&r=/echo2/v3.1/plugins/twp_community-flag.js&r=/echo2/v3.1/plugins/twp_stream.js&r=/echo2/v3.1/plugins/twp_submit.js&r=/wapo/wapo_echo_addon.js&r=/echo2/v3.1/core/twp_comments_echo2.js"></script>|<script type="text/cjs" data-cjssrc="http://cdn.echoenabled.com/apps/echo/conversations/v1.3.8/app.js"></script>';			
			
	
	var cssList = '';
	
				cssList = cssList + '|<link rel="stylesheet" type="text/css" href="http://css.washingtonpost.com/wpost/css/combo?token=20141201130100&inttoken=201410130600&c=true&m=true&context=eidos&r=/echo2/v3.1.1/twp_comments_echo2.css" />';
	
	if (typeof jQuery == 'undefined'){
		
		var jsJQuery = '|<script type="text/cjs" data-cjssrc="http://js.washingtonpost.com/wpost/js/combo?token=20150217103600&c=true&m=true&context=eidos&r=/jquery-1.7.1.js"></script>';				
		hscriptArray.push(jsJQuery.substring(jsJQuery.indexOf('src="')+5,jsJQuery.indexOf('"></script>')));
	}
			
	
	var tmpArray = cssList.split('|');
	for (i=0;i<tmpArray.length;i++){
		var tmpFile = tmpArray[i].substring(tmpArray[i].indexOf('href="')+6,tmpArray[i].lastIndexOf('/>')).replace(/[" >]/g,'');
		if (tmpFile != ''){
			hscriptArray.push(tmpFile);
		};
	}	

	
	tmpArray = jsList.split('|');
	for (i=0;i<tmpArray.length;i++){
		var scriptSrc = tmpArray[i].substring(tmpArray[i].indexOf('src="')+5,tmpArray[i].indexOf('"></script>'));
		if (scriptSrc != ''){
			hscriptArray.push(scriptSrc);
		};	
	}

	

	var _load = function (hscriptArray,startEvent,completeEvent){
		if (typeof startEvent != 'undefined' && startEvent != ''){
			if (jQuery.inArray( 'onTwp' + startEvent, TWP.ScriptLoader.completeEvents ) >= 0) {
				TWPHead.load(hscriptArray,function(){
					if (typeof completeEvent !== 'undefined'){TWP.ScriptLoader.completeEvents.push('onTwp' + completeEvent)};	
				});
			};
		} else {
			TWPHead.load(hscriptArray,function(){
				if (typeof completeEvent !== 'undefined'){TWP.ScriptLoader.completeEvents.push('onTwp' + completeEvent)};	
			});
		}	
	}
	
	if (typeof window.TWPHead == 'undefined') {
		  		
		jsHeadJs = '|<script type="text/cjs" data-cjssrc="http://js.washingtonpost.com/pb/resources/js/head.min.js"></script>';		
		var jsscript = document.createElement('script');
		jsscript.onload = jsscript.onreadystatechange = 
			function(){
				if ( this.readyState && this.readyState != "complete" && this.readyState != "loaded" ) {
					return; 
				}			
				_load(hscriptArray,startEvent,completeEvent);
			}
		jsscript.src = jsHeadJs.substring(jsHeadJs.indexOf('src="')+5,jsHeadJs.indexOf('"></script>'));
		if (isSSL) {
			jsscript.src = jsscript.src.replace(TWP.wpostJsBase,TWP.wpostJsBaseSsl);
		}
		var jssib = document.getElementsByTagName('script')[0];
		jssib.parentNode.insertBefore(jsscript, jssib);
	} else {
		_load(hscriptArray,startEvent,completeEvent);
	}	
})();


