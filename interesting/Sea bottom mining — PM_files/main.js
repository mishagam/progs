function switchHref(a,b,c){if(!isMobileDevice){var d=b?a.getAttribute("data-url"):a.getAttribute("data-url-go"),e=b?a.getAttribute("data-url-go"):a.getAttribute("data-url");a.href=d,c||setTimeout(function(){a.href=e},1e3)}}"undefined"==typeof adriver&&(adriver=function(){});var globalPZ=1,globalKeyword=Math.floor(9*Math.random())+1,ar_custom=[];ar_custom[50]=1,ar_custom[95]=document.referrer.match(/^https?:\/\/[^\/]*rambler\.ru/)?1:0;var scrollIndex=1,ua=navigator.userAgent.toLowerCase(),isMobileDevice,isAndroid;isMobileDevice=/android|ipod|iphone|htc|windowsmobile|windows phone|windows ce|symbian|opera mini|opera mobi|mobile|ipad|tablet/.test(ua),isAndroid=ua.indexOf("android")>-1;