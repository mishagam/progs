/**
 * (c) Copyright Weborama S.A.
 * All rights reserved
 * 
 * It is illegal to modify, disassemble, sell, copy or publish  this software
 * or any part thereof. The use of this software is only permitted with the
 * prior and express written permission of Weborama S.A.
 * 
 * For more information please contact: support@weborama.nl
 * 
 * @date: 2017-07-04 09:53:37
 * @version: 1.0.3.152.3
 */
var screenad=function(){"use strict";function e(e,n,t,o){e.attachEvent?e.attachEvent("on"+n,t):(void 0===o&&(o=!1),e.addEventListener(n,t,o))}function n(e,n,t,o){e.attachEvent?e.detachEvent("on"+n,t):(void 0===o&&(o=!1),e.removeEventListener(n,t,o))}function t(e){window.console&&window.console.log&&window.console.log(e)}function o(e,n,t){function o(o){(e||n.isPreviewer||t)&&window.console&&window.console.error&&window.console.error(o)}return{scr_is:function(e,n,t){var o;for(o=0;o<n.length;o+=1)e(n[o],t)},scr_isNumber:function(){this.scr_is(function(e){(isNaN(e)||parseFloat(e)!=e)&&o("`"+e+"` is not a number")},arguments)},scr_isBoolean:function(){this.scr_is(function(e){"boolean"!=typeof e&&o("`"+e+"` is not a boolean")},arguments)},scr_inRegex:function(){var e=Array.prototype.slice.call(arguments,0,arguments.length-1),n=arguments[arguments.length-1];this.scr_is(function(e){for(var t=!1,r=0;r<n.length;r++){var i=n[r];if(i instanceof RegExp&&i.test(e)){t=!0;break}}t||o("`"+e+"` is not a valid value")},e)},scr_isVarName:function(){var e=Array.prototype.slice.call(arguments);return e.push([/[\w\d_-]+/]),this.scr_inRegex.apply(this,e)},scr_isReportingEvent:function(){var e=Array.prototype.slice.call(arguments);return e.push([/^[a-z0-9 #\*-_%:=\+\?&\/,]+$/i]),this.scr_inRegex.apply(this,e)},scr_isNumOrAutoOrPercentage:function(){var e=Array.prototype.slice.call(arguments);return e.push([/^([+-]?\d*\.?\d+%?)$|^auto$/]),this.scr_inRegex.apply(this,e)}}}function r(e,n){var t=e.os={},o=e.browser={},r=n.match(/WebKit\/([\d.]+)/),i=n.match(/chrome\/([\d.]+)/i),s=n.match(/(Android)\s+([\d.]+)/)||n.match(/android/i),c=n.match(/(iPad).*OS\s([\d_]+)/),a=!c&&n.match(/(iPhone\sOS)\s([\d_]+)/),d=n.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=d&&n.match(/TouchPad/),l=n.match(/gecko/i),m=n.match(/msie/i)||n.match(/Trident/),f=n.match(/Edge\/([\d.]+)/),p=n.match(/(BlackBerry).*Version\/([\d.]+)/);o.webkit=!!r&&!f,o.chrome=!!i&&!f,o.msie=!!m,o.msedge=!!f,o.gecko=!(!l||r||m||f),o.webkit&&(o.version=o.engineVersion=r[1]),o.msedge&&(o.version=parseFloat(f[1])),o.chrome&&(o.version=parseFloat(i[1])),o.gecko?o.version=o.engineVersion=parseFloat(n.slice(n.indexOf("rv:")+3)):o.msie&&(n.toLowerCase().indexOf("msie")!==-1?o.version=parseFloat(n.toLowerCase().match(/msie ([\d.\d]+)/i)[1]):o.version=parseFloat(n.slice(n.indexOf("rv:")+3)),o.engineVersion="function"==typeof window.ScriptEngineMajorVersion&&window.ScriptEngineMajorVersion()>5?window.ScriptEngineMajorVersion():document.documentMode?8:o.version,o.documentMode=o.version>=7&&void 0!==document.documentMode&&document.documentMode),s&&(t.android=!0,t.version=parseFloat(s[2])),a&&(t.ios=!0,t.version=parseFloat(a[2].replace(/_/g,".")),t.iphone=!0),c&&(t.ios=!0,t.version=parseFloat(c[2].replace(/_/g,".")),t.ipad=!0),d&&(t.webos=!0,t.version=d[2]),u&&(t.touchpad=!0),p&&(t.blackberry=!0,t.version=parseFloat(p[2]))}function i(e){var n,t,o,r={};for(t=0;t<e.length;t++){o=e[t];for(n in o)r[n]=o[n]}return r}function s(t){function o(){var e,n,o="scr_scrollHideFixDiv";t.os.ios&&parseFloat(t.os.version)<=4.1&&!document.getElementById(o)&&(e=document.createElement("div"),e.style.overflow="hidden",e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.id=o,n=document.createElement("video"),n.style.position="absolute",n.style.top="0px",n.style.visibility="hidden",n.style.display="none",t.os.version>=4?n.style["-webkit-transform"]="translateX(2024px)":n.style.left="2400px",e.appendChild(n),document.body.appendChild(e))}function r(){l||(a=setInterval(function(){"waitingforshow"===u&&(document.body.style.display="block",u="idle",clearInterval(a))},150))}function i(){l||"hidden"===u||(u="hidden",document.body.style.display="none",d.command("scrollhide"))}function s(){l||"waitingforshow"===u||(d.command("scrollshow"),u="waitingforshow")}function c(e){(t.os.ios||t.os.android&&(t.os.version>=2.2||t.browser.gecko))&&e.preventDefault()}var a,d,u="idle",l=!1;return{setScreenad:function(e){d=e},scr_enableScrollHide:function(){try{o(),e(document.documentElement,"touchstart",r),e(document.documentElement,"touchmove",i),e(document.documentElement,"touchend",s),e(document.documentElement,"touchcancel",s),e(document.documentElement,"touchleave",s)}catch(n){}},scr_disableScrollHide:function(){try{n(document.documentElement,"touchstart",r),n(document.documentElement,"touchmove",i),n(document.documentElement,"touchend",s),n(document.documentElement,"touchcancel",s),n(document.documentElement,"touchleave",s),s()}catch(e){}},scr_setBlockPageTouches:function(t){!t&&l?(n(document.documentElement,"touchmove",c,{passive:!1}),l=!1):t&&!l&&(e(document.documentElement,"touchmove",c,{passive:!1}),l=!0)}}}function c(e,n,t){function o(){window.scrollTo(1,0),setTimeout(function(){window.scrollTo(0,0)},200)}function r(){c.conf_autozoom&&(u.scr_antizoom===!0||"100%"===u.scr_width&&"100%"===u.scr_height)?s(document.documentElement,1/c.zoom):c.conf_autozoom&&s(document.documentElement,1)}function i(){try{var e=document.body.style.width;document.body.style.width="10"+Math.round(10*Math.random())/10+"%",setTimeout(function(){document.body.style.width=e},0)}catch(n){}}function s(t,o){n.scr_isNumber(o),t===document.documentElement&&e.browser.msie===!0&&document.documentMode&&document.documentMode<=8&&(t=document.body||t),t.style.OTransform?(t.style.OTransformOrigin="left top",t.style.OTransform="scale("+o+")"):e.browser.msie===!0&&9===document.documentMode?(t.style.msTransformOrigin="left top",t.style.msTransform="scale("+o+")"):e.browser.msedge||e.browser.gecko||e.browser.msie===!0&&document.documentMode>=10?(t.style.transformOrigin="left top",t.style.transform="scale("+o+")"):c.conf_forcestylezoom!==!0&&(e.os.ios||e.os.android&&e.os.version<=4)?(t.style.webkitTransformOrigin="left top",t.style.webkitTransform="scale("+o+")"):t.style.zoom=100*o+"%",t!==document.documentElement&&t!==document.body||!(c.conf_forcestylezoom!==!0&&(e.os.ios||e.os.android&&e.os.version<=4)||e.browser.gecko||e.browser.msedge||e.browser.msie===!0&&document.documentMode>=8)||(t.style.width=t.style.height=100/o+"%")}var c,d=!1,u={};return{setScreenad:function(e){c=e},scr_autoZoomHandler:r,scr_redrawOnResize:i,scr_scrollOnResize:o,scr_position:function(e){if(void 0===e&&d)e=a(u),c.command("position:"+encodeURIComponent(e));else if("string"==typeof e&&e.length>10)c.command("position:"+encodeURIComponent(e));else if("object"==typeof e)return;r(),t.redrawonresize&&i(),t.scrollonresize&&this.scr_scrollOnResize()},scr_resize:function(e,t,o){n.scr_isNumber(e,t),o=o?o:"self",c.command(o+">resize:"+e+","+t)},scr_setAlign:function(e,t){n.scr_inRegex(e,t,[/^#?[0-9a-z_-]+$/i]),u.scr_hor=e,u.scr_ver=t,d=!0},scr_setClip:function(e,t,o,r){n.scr_isNumOrAutoOrPercentage(e,t,o,r),u.scr_clipx1=e,u.scr_clipy1=t,u.scr_clipx2=o,u.scr_clipy2=r,d=!0},scr_setSize:function(e,t){n.scr_isNumOrAutoOrPercentage(e,t),u.scr_width=e,u.scr_height=t,d=!0},scr_setOffset:function(e,t){n.scr_isNumber(e,t),u.scr_x=e||0,u.scr_y=t||0,d=!0},scr_setSticky:function(e){n.scr_isBoolean(e),u.scr_sticky=e,d=!0},scr_setHideElements:function(e){n.scr_isBoolean(e),u.scr_hide=e,d=!0},scr_setSmooth:function(e){n.scr_isNumber(e),u.scr_smooth=e,d=!0},scr_setAntiZoom:function(e){n.scr_isBoolean(e),u.scr_antizoom=e,d=!0},scr_setZIndex:function(e){n.scr_isNumber(e),c.command("zindex:"+e)}}}function a(e){var n="";return void 0!==e.scr_hor&&(n+="hor="+e.scr_hor+"&"),void 0!==e.scr_ver&&(n+="ver="+e.scr_ver+"&"),void 0!==e.scr_width&&(n+="width="+e.scr_width+"&"),void 0!==e.scr_height&&(n+="height="+e.scr_height+"&"),void 0!==e.scr_x&&(n+="offx="+e.scr_x+"&"),void 0!==e.scr_y&&(n+="offy="+e.scr_y+"&"),void 0!==e.scr_sticky&&(n+="sticky="+e.scr_sticky+"&"),void 0!==e.scr_hide&&(n+="hide="+e.scr_hide+"&"),void 0===e.scr_clipx1&&void 0===e.scr_clipy1&&void 0===e.scr_clipx2&&void 0===e.scr_clipy2||(n+="cliprect="+e.scr_clipx1+","+e.scr_clipy1+","+e.scr_clipx2+","+e.scr_clipy2+"&"),void 0!==e.scr_smooth&&(n+="smooth="+e.scr_smooth+"&"),void 0!==e.scr_antizoom&&(n+="antizoom="+e.scr_antizoom+"&"),void 0!==e.scr_stagealign&&(n+="stagealign="+e.scr_stagealign+"&"),n}function d(e){parent.postMessage("screenad"+e,"*")}function u(e,n,t,o){function r(){i&&i.disconnect()}var i,s;if(MutationObserver){i=new MutationObserver(function(t){t.forEach(function(t){t.addedNodes&&t.addedNodes[0]&&n.length!==s&&(e(),s=n.length,0!==o&&s===o&&r())})});var c={childList:!0,attributes:!1,characterData:!1,subtree:!0},a=document.body;i.observe(a,c),t&&setTimeout(function(){r()},t)}}function l(){function a(){return{conf_autopreload:!0,conf_autozoom:!1,isPreviewer:"undefined"!=typeof M.scrpreviewer,deviceType:H,originalWidth:U,originalHeight:F,browserheight:1,browserwidth:1,mousex:0,mousey:0,bannerx:0,bannery:0,pagex:0,pagey:0,scrollx:0,scrolly:0,bannerwidth:0,bannerheight:0,zoom:1,hasVisibility:!1,isShowing:!1,isSynced:!1,isPreloaded:!1,screenorientation:"portrait",state:"default",STATE_DEFAULT:"default",STATE_EXPANDED:"expanded",SCREEN_ORIENTATION_PORTRAIT:"portrait",SCREEN_ORIENTATION_LANDSCAPE:"landscape",DEVICE_TABLET:"tablet",DEVICE_MOBILE:"mobile",DEVICE_DESKTOP:"desktop",isIOS:S,vars:M,shared:v,browser:N,angle:function(e,n,t,o){return Y.scr_isNumber(e,n,t,o),180*Math.atan2(o-n,t-e)/Math.PI},distance:function(e,n,t,o){return Y.scr_isNumber(e,n,t,o),Math.sqrt(Math.pow(t-e,2)+Math.pow(o-n,2))},fixVideoElements:w,mouseAngle:function(){return Z.mouseAngleTo(0,0)},mouseAngleTo:function(e,n){return Z.angle(e,n,Z.mousex,Z.mousey)},mouseDistance:function(){return Z.mouseDistanceTo(0,0)},mouseDistanceTo:function(e,n){return Z.distance(e,n,Z.mousex,Z.mousey)},log:function(e){t(e)},command:d,conf:function(e,n){if(!e)throw"The conf method needs a `key` param";if(n!==!0&&n!==!1&&"auto"!==n)throw'The conf method only accepts true, false or "auto" as second parameter.';Z.command("conf_"+e+":"+n)},click:function(e){B?(e="string"!=typeof e?"default":e,window.alert("WEBORAMA CLICK\n--------------------------\nclick: "+e+"\nurl: "+R["default"===e?0:parseInt(e.substr(5),10)])):L.useAdapter?Z.command("click:"+(encodeURI(e)||"default")):e&&!e.match(/^[A-Za-z0-9]+$/)?(x(e),Z.event("scrc#custom")):"string"==typeof e?("default"===e?x(R[0]):0===e.indexOf("extra")&&x(R[parseInt(e.substr(5),10)]),Z.event("scrc#"+e)):(x(R[0]),Z.event("scrc")),l(Z.CLICK_OUT)},event:function(e){Y.scr_isReportingEvent(e),Z.command("event:"+e)},startTimer:function(e){Y.scr_isReportingEvent(e),Z.command("starttimer:"+e)},stopTimer:function(e){Y.scr_isReportingEvent(e),Z.command("stoptimer:"+e)},close:function(e){Z.command(("string"==typeof e?e+">":"")+"close")},hide:function(e){Z.command(("string"==typeof e?e+">":"")+"hide")},show:function(e){Z.command(("string"==typeof e?e+">":"")+"show")},resize:k.scr_resize,position:k.scr_position,setClip:k.scr_setClip,setSize:k.scr_setSize,setAlignment:k.scr_setAlign,setOffset:k.scr_setOffset,setSticky:k.scr_setSticky,setHideElements:k.scr_setHideElements,setSmooth:k.scr_setSmooth,setAntiZoom:k.scr_setAntiZoom,setZIndex:k.scr_setZIndex,setElementZoom:k.scr_setElementZoom,hideNavBar:function(){Z.command("hidenavbar")},postclick:function(){Z.command("postclick")},proceed:function(){Z.command("proceed")},setVariable:function(e,n,t){Y.scr_isVarName(e),t=t?t:"all";try{Z.command(t+">setvariable:"+e+"="+n)}catch(o){}},setPreloaded:function(){y()},executeScript:function(e,n){b(e,n)},makeCall:function(e){Z.command("makecall:"+encodeURIComponent(e))},sendSMS:function(e,n){Z.command("sendsms:"+encodeURIComponent(e)+","+encodeURIComponent(n))},createCalendarEvent:function(e,n,t){function o(e){return e.getUTCFullYear()+(e.getUTCMonth()<9?"0":"")+(e.getUTCMonth()+1)+e.getUTCDate()+"T"+e.getUTCHours()+(0===e.getUTCMinutes()?"0":"")+e.getUTCMinutes()+(0===e.getUTCSeconds()?"0":"")+e.getUTCSeconds()+"Z"}var r;L.useAdapter?Z.command("createevent:"+encodeURIComponent(e.toString())+","+encodeURIComponent(n)+","+encodeURIComponent(t)):(r="BEGIN:VCALENDAR\nVERSION:2.0\nMETHOD:PUBLISH\nBEGIN:VEVENT\nDTSTART:"+o(e)+"\nDTEND:"+o(e)+"\nLOCATION:\nDTSTAMP:"+o(new Date)+"\nSUMMARY:"+n+"\nDESCRIPTION:"+t+"\nCLASS:PUBLIC\nBEGIN:VALARM\nTRIGGER:"+o(e)+"\nACTION:DISPLAY\nDESCRIPTION:Reminder\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR",(S>=6||!Z.browser.os.android&&!S)&&(window.location="data:text/calendar;charset=utf8,"+encodeURIComponent(r)))},sendMail:function(e,n,t,o,r){Z.command("sendmail:"+encodeURIComponent(e)+","+encodeURIComponent(n||"")+","+encodeURIComponent(t||"")+","+encodeURIComponent(o||"")+","+encodeURIComponent(r||""))},blockTouches:function(){C.scr_setBlockPageTouches(!0),t("The command 'screenad.blockTouches()' will be deprecated in SI 1.0.4. Please use 'screenad.setBlockPageTouches(true)' instead.")},unblockTouches:function(){C.scr_setBlockPageTouches(!1),t("The command 'screenad.unblockTouches()' will be deprecated in SI 1.0.4. Please use 'screenad.setBlockPageTouches(false)' instead.")},setBlockPageTouches:function(e){Y.scr_isBoolean(e),C.scr_setBlockPageTouches(e)},settings:{set fixVideosWatcher(e){return A.fixVideosWatcher.setter(e)},get fixVideosWatcher(){return A.fixVideosWatcher.getter()},set fixVideosWatcherTimeout(e){return A.fixVideosWatcherTimeout.setter(e)},get fixVideosWatcherTimeout(){return A.fixVideosWatcherTimeout.getter()},set fixVideosWatcherStopAfter(e){return A.fixVideosWatcherStopAfter.setter(e)},get fixVideosWatcherStopAfter(){return A.fixVideosWatcherStopAfter.getter()},set fixVideos(e){return A.fixVideos.setter(e)},get fixVideos(){return A.fixVideos.getter()},set trackExternalMouse(e){return A.trackExternalMouse.setter(e)},get trackExternalMouse(){return A.trackExternalMouse.getter()}},wallpaper:function(e,n){var t=e?":"+e+","+n:"";Z.command("wallpaper"+t)},STATE_CHANGE:"stateChange",RESIZE:"resize",VISIBILITY_CHANGE:"visibilityChange",ORIENTATION_CHANGE:"orientationChange",HIDE:"hide",SHOW:"show",SET_VARIABLE:"setvariable",PRELOAD_COMPLETE:"preload_complete",SYNC:"synchronized",CLICK_OUT:"clickout",TILT:"tilt",SCROLL:"scroll",MOUSE_MOVE:"mousemove",MOUSE_LEAVE:"mouseleave",addEventListener:function(e,n){if(e===Z.TILT&&j.devicemotion)window.addEventListener("devicemotion",O,!1);else if(e===Z.TILT&&!L.useAdapter)return!1;return P.push({scr_event:e,scr_callback:n}),!0},removeEventListener:function(e,n){var t;for(t=P.length-1;t>0;t--)if(P[t].scr_event===e&&P[t].scr_callback===n)return P.splice(t,1),!0;return!1},supportsTilt:function(){return!(!j.devicemotion&&!L.useAdapter)},onResize:function(){},onStateChange:function(e){},onOrientationChange:function(){},onVisibilityChange:function(){},onHide:function(){},onShow:function(){},onSetVariable:function(e){},onPreloadComplete:function(){},onSync:function(){},onClickOut:function(){},onMouseMove:function(e){},onMouseLeave:function(){},onScroll:function(){},onTilt:function(e,n,t){}}}function l(e,n){var t,o=0,r={};switch(e){case Z.RESIZE:Z.onResize();break;case Z.ORIENTATION_CHANGE:r.orientation=n,Z.onOrientationChange(r);break;case Z.VISIBILITY_CHANGE:r.hasVisibility=n,Z.onVisibilityChange(r);break;case Z.HIDE:Z.onHide();break;case Z.MOUSE_MOVE:r=n,Z.onMouseMove();break;case Z.MOUSE_LEAVE:Z.onMouseLeave();break;case Z.SHOW:Z.onShow();break;case Z.SYNC:Z.isSynced=!0,Z.onSync();break;case Z.PRELOAD_COMPLETE:Z.isPreloaded=!0,Z.onPreloadComplete();break;case Z.CLICK_OUT:Z.onClickOut();break;case Z.SCROLL:Z.onScroll();break;case Z.SET_VARIABLE:r=n,Z.onSetVariable(r);break;case Z.STATE_CHANGE:r=n,Z.onStateChange(r);break;case Z.TILT:t=n.split(",")||[],r={x:parseFloat(t[0])||0,y:parseFloat(t[1])||0,z:parseFloat(t[2])||0},Z.onTilt(r)}for(o=0;o<P.length;o++)if(P[o].scr_event===e)try{P[o].scr_callback(r)}catch(i){}}function m(){l(Z.MOUSE_MOVE,{mousex:Z.mousex,mousey:Z.mousey})}function f(e){var n,t,o,r,i,s,c=[],a="",d=!1,u=!1;try{c=e.data.split("|")}catch(f){}for(n in c){o=c[n],r=o.split(":")[0];try{a=o.split(":")[1].split(",")}catch(p){}if(0===r.indexOf("screenad_mouse"))Z.mousex=parseInt(a[0],10),Z.mousey=parseInt(a[1],10),m();else if(0===r.indexOf("screenad_resize"))i=a,Z.browserwidth===parseInt(i[0],10)&&Z.browserheight===parseInt(i[1],10)&&Z.zoom===parseFloat(i[2])||(d=!0),Z.browserwidth=parseInt(i[0],10),Z.browserheight=parseInt(i[1],10),Z.zoom=parseFloat(i[2]),Z.screenorientation!==i[3]&&(d=!0,Z.screenorientation=i[3],l(Z.ORIENTATION_CHANGE,Z.screenorientation)),d&&l(Z.RESIZE);else if(0===r.indexOf("screenad_showing")){if(t=!!parseInt(a,10),t===Z.isShowing)return;Z.isShowing=t,l(t?Z.SHOW:Z.HIDE)}else 0===r.indexOf("screenad_visibility")?Z.hasVisibility!==Boolean(parseInt(a,10))&&(Z.hasVisibility=!!parseInt(a,10),l(Z.VISIBILITY_CHANGE,Z.hasVisibility)):0===r.indexOf("screenad_adapter")?L={useAdapter:!0,type:a[0],version:a[1]}:0===r.indexOf("screenad_scrollhide")?1===parseInt(a,10)?C.scr_enableScrollHide():C.scr_disableScrollHide():0===r.indexOf("screenad_synchronized")?l(Z.SYNC):0===r.indexOf("screenad_setvariable")?(Z.vars[a[0].split("=")[0]]=a[0].split("=")[1],l(Z.SET_VARIABLE,a[0].split("=")[0])):0===r.indexOf("screenad_callsharedmethod")?"function"==typeof Z.shared[a[0]]&&(void 0!==a[1]?Z.shared[a[0]](JSON.parse(decodeURIComponent(a[1]))):Z.shared[a[0]]()):0===r.indexOf("screenad_scriptcallback")?void 0!==a[0]&&(s=D[a[0]],delete D[a[0]],s(decodeURIComponent(a[1]))):0===r.indexOf("screenad_statechange")?void 0!==a[0]&&Z.state!==a[0]&&(Z.state=a[0],l(Z.STATE_CHANGE,a[0])):0!==r.indexOf("screenad_tilt")||j.devicemotion?0===r.indexOf("screenad_clicks")?R=JSON.parse(decodeURIComponent(a)):0===r.indexOf("screenad_bannerx")?Z.bannerx!==parseInt(a,10)&&(Z.bannerx=parseInt(a,10)):0===r.indexOf("screenad_bannery")?Z.bannery!==parseInt(a,10)&&(Z.bannery=parseInt(a,10)):0===r.indexOf("screenad_bannerwidth")?Z.bannerwidth!==parseInt(a,10)&&(Z.bannerwidth=parseInt(a,10)):0===r.indexOf("screenad_bannerheight")?Z.bannerheight!==parseInt(a,10)&&(Z.bannerheight=parseInt(a,10)):0===r.indexOf("screenad_pagex")?Z.pagex!==parseInt(a,10)&&(Z.pagex=parseInt(a,10)):0===r.indexOf("screenad_pagey")?Z.pagey!==parseInt(a,10)&&(Z.pagey=parseInt(a,10)):0===r.indexOf("screenad_scrollx")?Z.scrollx!==parseInt(a,10)&&(Z.scrollx=parseInt(a,10),u=!0):0===r.indexOf("screenad_scrolly")&&Z.scrolly!==parseInt(a,10)&&(Z.scrolly=parseInt(a,10),u=!0):l(Z.TILT,a[0]+","+a[1]+","+a[2])}u&&l(Z.SCROLL)}function b(e,n){var t="";"function"==typeof n&&(t=(new Date).getTime().toString()+Math.ceil(1e3*Math.random()),D[t]=n,t=","+t),e=encodeURIComponent(e),Z.command("executescript:"+e+t)}function _(){try{document.getElementsByTagName("html").item(0).style.overflow="hidden",document.getElementsByTagName("body").item(0).style.overflow="hidden"}catch(e){}}function g(){var e=document.createElement("meta"),n=document.getElementsByTagName("head"),t=n&&n[0];t&&(e.name="referrer",e.content="origin",t.appendChild(e))}function w(){var e,n,t,o=document.getElementsByTagName("video");if(Z.settings.fixVideos!==!1){for(e=0;e<o.length;e++)t=o[e],t.hasAttribute("data-weborama-videoplayer")||(n=new Z.video.VideoPlayer({fromExisting:t}));Z.settings.fixVideosWatcher===!1||V||(V=new u(w,o,Z.settings.fixVideosWatcherTimeout,Z.settings.fixVideosWatcherStopAfter))}}function y(){Z.isPreloaded===!1&&(Z.command("preloaded"),l(Z.PRELOAD_COMPLETE))}function E(){Z.conf_autopreload===!0&&y()}function T(){var n=!N.browser.msie||"interactive"===document.readyState||"complete"===document.readyState;W===!1&&n&&(W=!0,N.browser.msie&&document.documentMode>5&&document.documentMode<9&&(document.body.style.position="relative"),(N.os.ios||N.os.android&&N.os.version<4)&&(document.body.style.height="100%"),w(),g(),void 0!==Z.hasVisibility&&l(Z.VISIBILITY_CHANGE,Z.hasVisibility),e(document.documentElement,"mouseleave",function(){l(Z.MOUSE_LEAVE)}),e(document.documentElement,"mousemove",function(e){Z.mousex=e.clientX,Z.mousey=e.clientY,m()}))}function I(){T();var e=window.AdobeEdge;e&&e.bootstrapCallback?e.bootstrapCallback(function(n){e.getComposition(n).readyCalled?E():(window.$||e.$)(document).bind("compositionReady",function(){E()})}):E(),j.redrawonresize&&Z.addEventListener(Z.RESIZE,k.scr_redrawOnResize),j.scrollonresize&&Z.addEventListener(Z.RESIZE,k.scr_scrollOnResize),j.setoverflowhidden&&_()}function O(e){var n="";try{n=(e.accelerationIncludingGravity.x||0)+","+(e.accelerationIncludingGravity.y||0)+","+(e.accelerationIncludingGravity.z||0)}catch(t){}l(Z.TILT,n)}function x(e){if(Z.browser.os.ios){var n=document.createElement("a");n.target="_blank",n.href=e,n.click()}else z.open(e)}var S,C,A,k,V,N={},R=[],M=[],L={useAdapter:!1,type:"none",version:0},P=[],z=window,D={},B=!1,U=0,F=0,H="unknown",j={},W=!1,G=!1,Z={},Y=o(B,M,G);d("version:interface#1.0.3");var $={create:function(e){return i([new p,e])}};A={fixVideosWatcher:$.create({validate:function(e){if("boolean"!=typeof e)throw"screenad.settings.fixVideosWatcher should be a boolean"},value:!0}),fixVideosWatcherTimeout:$.create({validate:function(e){if("number"!=typeof e)throw"screenad.settings.fixVideosWatcherTimeout should be a number"},value:5e3}),fixVideosWatcherStopAfter:$.create({validate:function(e){if("number"!=typeof e)throw"screenad.settings.fixVideosWatcherStopAfter should be a number"},value:1}),fixVideos:$.create({validate:function(e){if("boolean"!=typeof e)throw"screenad.settings.fixVideos should be a boolean"},value:!0}),trackExternalMouse:$.create({onSet:function(e){this.value!==e&&d("trackmouse:"+e)},validate:function(e){if("boolean"!=typeof e)throw"screenad.settings.trackExternalMouse should be a boolean"},value:!1})},r(N,navigator.userAgent),C=s(N),k=new c(N,Y,j),N.__detect=r,S=!!N.os.ios&&N.os.version,j.redrawonresize=N.os.android&&parseFloat(N.os.version)<=2.4?1:0,j.scrollonresize=N.os.android&&N.browser.gecko?1:0,j.setoverflowhidden=N.os.android&&N.browser.gecko?1:0,j.devicemotion=!!window.DeviceMotionEvent;var J=h(document.location.search+document.location.hash);return R=J.parse("clicks=",JSON.parse,R),B=J.parse("scrdebug=",J.parseBool,B),G=J.parse("scrwebodomain=",J.parseBool,G),U=J.parse("scrwidth=",J.parseDecimal,U),F=J.parse("scrheight=",J.parseDecimal,F),H=J.parse("scrdevtype=",J.noop,H),M=J.parse("vars=",J.scr_argsToArray,M),e(window,"message",f),e(window,"load",I),e(document,"DOMContentLoaded",T),N.browser.msie&&e(document,"readystatechange",T),e(window,"unload",function(){n(window,"message",f)}),P.push({scr_event:"resize",scr_callback:k.scr_autoZoomHandler}),Z=a(),k.setScreenad(Z),C.setScreenad(Z),Z}function m(e){function n(n){function r(){c.received=!0}function i(){e.executeScript("JSON.stringify(window['_ + "+n+"'])",function(e){if("undefined"!==e){var t=new Event(n);window.dispatchEvent(Object.assign(t,JSON.parse(e)))}})}function s(){void 0===c.received&&(e.executeScript("function ensureSerializable(obj){if (Object.keys(obj).length > 1){return obj;}var toParse = Object.getPrototypeOf(obj),ret = {};for (var prop in toParse){if(toParse.hasOwnProperty(prop)){ret[prop] = obj[prop];}}return ret;}window.addEventListener('"+n+"',function(e) {window['_ + "+n+"'] = ensureSerializable(e);}, true);"),setInterval(i,1e3/24)),window.removeEventListener(n,r)}var c=t[n]=t[n]||{};c.executed||(c.executed=!0,o(n,r),setTimeout(s,300))}if(e.browser.os.ios&&parseFloat(e.browser.os.version)>=9){var t={},o=window.addEventListener,r={devicemotion:n,deviceorientation:n};window.addEventListener=function(e,n,t){r[e]&&r[e](e,n,t),o(e,n,t)}}}function f(t){function o(){return t.deviceType!==t.DEVICE_MOBILE||t.browser.os.ios&&t.browser.os.version>=10||t.browser.os.android&&t.browser.browser.version>=53}return function(r){function i(){return h&&void 0!==h.duration&&h.duration>1}function s(e){return!("string"!=typeof e||!e.match(/^[a-z0-9_]+$/i))}function c(e){t.event(e+"#"+x)}function a(e){e===!0&&w===!1?(w=!0,c("video_fullscreen")):e===!1&&w===!0&&(w=!1,c("video_exitfullscreen"))}function d(e,n){var o=document.createElement("source");o.src=e,n&&(o.type=n),e.indexOf(".webm")!==-1&&t.browser.os.android&&parseFloat(t.browser.os.version)>=4.1&&t.browser.browser.webkit===!0&&t.browser.browser.chrome===!1&&h.childNodes.length>0?h.insertBefore(o,h.childNodes[0]):(e.indexOf(".ogv")!==-1||e.indexOf(".ogg")!==-1)&&t.browser.browser.gecko===!0&&h.childNodes.length>0?h.insertBefore(o,h.childNodes[0]):h.appendChild(o)}function u(){var e;if(void 0!==r.videoFiles)for(e=0;e<r.videoFiles.length;e++)d(r.videoFiles[e].src||"",r.videoFiles[e].type)}function l(){var e,n,t,o,r=!0;for(o=h.getElementsByTagName("source"),e=0;e<o.length;e++)n=o[e],void 0!==n.type&&n.type.indexOf("mp4")!==-1?t=n.src:n.src.indexOf(".mp4")===-1&&n.src.indexOf(".m4v")===-1&&n.src.indexOf(".f4v")===-1||(r=!1);r&&void 0!==t&&d(t)}function m(){(t.browser.os.android&&parseFloat(t.browser.os.version)<=2.2||t.browser.browser.msie&&9===t.browser.browser.engineVersion&&r.poster)&&e(h,"click",S.scr_onClick)}function f(){t.browser.browser.gecko?e(h,"play",S.scr_onPlaying):(e(h,"playing",S.scr_onPlaying),t.browser.browser.msie||e(h,"seeked",S.scr_onPlaying)),e(h,"pause",S.scr_onPause),e(h,"timeupdate",S.scr_onTimeUpdate),e(h,"ended",S.scr_onEnded),setTimeout(function(){e(h,"volumechange",S.scr_onVolumeChange)},250),void 0!==document.fullscreenEnabled?document.addEventListener("fullscreenchange",S.scr_onFullscreenChange,!1):void 0!==document.webkitFullscreenEnabled?document.addEventListener("webkitfullscreenchange",S.scr_onFullscreenChange,!1):void 0!==document.mozFullScreenEnabled?document.addEventListener("mozfullscreenchange",S.scr_onFullscreenChange,!1):setInterval(S.scr_fullscreenChecker,1e3)}function p(){m(),t.browser.browser.msie===!1&&l(),t.browser.os.android===!0||t.browser.os.ios===!0?h.setAttribute("preload","none"):h.setAttribute("preload","metadata"),h.setAttribute("autobuffer","false")}var h,v,b=0,_=0,g="scr_idle",w=!1,y=0,E=0,T=4,I=!1,O=!1,x="video",S={scr_onPlaying:function(){O===!1&&(O=!0,setTimeout(function(){O=!1},1e3),"scr_idle"===g&&h.paused!==!0?(g="scr_playing",c("video_play")):"scr_ended"===g?(h.ended!==!0&&h.currentTime<h.duration-1.5&&h.paused!==!0&&(g="scr_playing"),+new Date>b+1500+1e3*Math.min(h.currentTime,2)?(c("video_replay"),E=_):h.ended!==!0&&h.currentTime<h.duration-1.5&&E>0&&_<E&&(_=E,c("video_loop"))):"scr_paused"===g&&h.paused!==!0&&(g="scr_playing",c("video_resume")),t.browser.browser.msie&&S.scr_fullscreenChecker())},scr_onPause:function(){!I&&i()&&h.currentTime<h.duration-1&&"scr_playing"===g&&(g="scr_paused",c("video_pause"))},scr_onTimeUpdate:function(e){var n,t=h.currentTime,o=h.duration;i()&&(t=o>=t?t:o,"scr_idle"!==g&&"scr_ended"!==g&&"scr_paused"!==g||S.scr_onPlaying(e),n=Math.min(T,Math.floor(t*T/(o-1.5))),y<n&&n!==1/0&&(c(n===T?"video_complete":"video_progress_"+100*n/T),y=n),n===T&&S.scr_onEnded(e))},scr_onEnded:function(){I||(I=!0,setTimeout(function(){I=!1},1750),g="scr_ended",E++),b=+new Date},scr_onVolumeChange:function(){void 0!==v&&v===(h.muted||!h.volume)||(v=h.muted||!h.volume,c(v===!1?"video_unmute":"video_mute"))},scr_onFullscreenChange:function(){var e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||null,n=e===h;n!==w&&a(n)},scr_fullscreenChecker:function(){var e=t.browser.browser.webkit&&h.webkitDisplayingFullscreen===!0&&0===window.screenTop&&0===window.screenY,n=t.browser.browser.msie&&h.clientWidth===screen.availWidth,o=t.browser.browser.msie&&t.deviceType===t.DEVICE_MOBILE&&document.msHidden===!0&&document.activeElement===h,r=e||n||o;w!==r&&a(r)},scr_onClick:function(){t.browser.browser.msie&&9===t.browser.browser.engineVersion&&u(),h.play(),n(h,"click",S.scr_onClick)}};return function(){if(r.autoplay=r.autoplay||!1,s(r.reference)&&(x=r.reference),r.fromExisting)h=r.fromExisting;else{h=document.createElement("video"),r.width&&h.setAttribute("width",r.width),r.height&&h.setAttribute("height",r.height),void 0!==r.controls&&r.controls===!1||h.setAttribute("controls","true"),void 0!==r.loop&&r.loop===!0&&h.setAttribute("loop","true"),void 0!==r.poster&&"string"==typeof r.poster&&h.setAttribute("poster",r.poster),void 0!==r.playsinline&&r.playsinline!==!0||(h.setAttribute("webkit-playsinline","true"),h.setAttribute("playsinline","true")),(r.autoplay===!0&&o()||"force"===r.autoplay)&&h.setAttribute("autoplay","true"),(void 0===r.muted&&r.autoplay!==!1||void 0!==r.muted&&r.muted===!0)&&(h.setAttribute("muted","true"),v=!0,(t.browser.browser.gecko===!0||9===t.browser.browser.engineVersion||t.browser.browser.msedge)&&(h.muted=!0)),u();try{r.prependTo?r.prependTo.insertBefore(h,r.prependTo.childNodes[0]||null):r.appendTo&&r.appendTo.appendChild(h)}catch(e){}}h.setAttribute("data-weborama-videoplayer",!0),p(),f()}(),{getVideoElement:function(){return h}}}}var p=function(){return{onSet:function(){},onGet:function(){},validate:function(){},value:!0,setter:function(e){return this.validate(e),this.onSet(e),this.value=e,e},getter:function(){return this.onGet(),this.value}}},h=function(e){function n(e){return parseInt(e,10)}return{parse:function(n,t,o){var r=e.indexOf(n);if(r===-1)return o;var i=decodeURIComponent(e.substr(r+n.length).split("&")[0]);return t(i)},parseDecimal:n,parseBool:function(e){return 1===n(e)},scr_argsToArray:function(e){var n,t,o,r={};for(n=e.split("&"),o=0;o<n.length;o++)n[o].indexOf("=")!==-1&&(t=n[o].split("="),r[t[0]]=t[1]);return r},noop:function(e){return e}}},v=function(){var e=function(e,n){void 0!==n?(n=encodeURIComponent(JSON.stringify(n)),e="callsharedmethod:"+e+","+n):e="callsharedmethod:"+e,d(e)};return{callMethod:e}}(),b=function(){var e=l();return m(e),e.video=e.lib=e.video||{},e.video.VideoPlayer=f(e),e.video.Video=e.video.VideoPlayer,e}();return b}();