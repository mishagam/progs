			
// Copyright 2006-2015 ClickTale Ltd., US Patent Pending
// PID: 49
// Generated on: 12/15/2015 5:36:10 AM (UTC 12/15/2015 11:36:10 AM)



(function(){var e=!0,f=!1,j=this;var m,n,o,p;function q(){return j.navigator?j.navigator.userAgent:null}p=o=n=m=f;var r;if(r=q()){var s=j.navigator;m=0==r.indexOf("Opera");n=!m&&-1!=r.indexOf("MSIE");o=!m&&-1!=r.indexOf("WebKit");p=!m&&!o&&"Gecko"==s.product}var t=m,u=n,v=p,w=o,x;
a:{var y="",z;if(t&&j.opera)var A=j.opera.version,y="function"==typeof A?A():A;else if(v?z=/rv\:([^\);]+)(\)|;)/:u?z=/MSIE\s+([^\);]+)(\)|;)/:w&&(z=/WebKit\/(\S+)/),z)var B=z.exec(q()),y=B?B[1]:"";if(u){var C,D=j.document;C=D?D.documentMode:void 0;if(C>parseFloat(y)){x=""+C;break a}}x=y}var E={};
function F(a){var b;if(!(b=E[a])){b=0;for(var c=(""+x).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(c.length,d.length),i=0;0==b&&i<g;i++){var h=c[i]||"",Q=d[i]||"",R=RegExp("(\\d*)(\\D*)","g"),S=RegExp("(\\d*)(\\D*)","g");do{var k=R.exec(h)||["","",""],l=S.exec(Q)||["","",""];if(0==k[0].length&&0==l[0].length)break;b=((0==k[1].length?0:parseInt(k[1],10))<(0==l[1].length?0:parseInt(l[1],10))?-1:(0==k[1].length?0:parseInt(k[1],10))>
(0==l[1].length?0:parseInt(l[1],10))?1:0)||((0==k[2].length)<(0==l[2].length)?-1:(0==k[2].length)>(0==l[2].length)?1:0)||(k[2]<l[2]?-1:k[2]>l[2]?1:0)}while(0==b)}b=E[a]=0<=b}return b}var G={};function H(){G[9]||(G[9]=u&&!!document.documentMode&&9<=document.documentMode)};!u||H();!u||H();u&&F("8");!w||F("528");v&&F("1.9b")||u&&F("8")||t&&F("9.5")||w&&F("528");!v||F("8");function I(a,b,c,d,g){a&&b&&("undefined"==typeof c&&(c=1E3),"undefined"==typeof d&&(d=20),0>--d?"function"===typeof g&&g():b()?a():setTimeout(function(){I(a,b,c,d,g)},c))};function J(a){function b(){c||(c=e,a())}var c=f;if("complete"===document.readyState||"interactive"===document.readyState)b();else{if(document.addEventListener)document.addEventListener("DOMContentLoaded",b,f);else if(document.attachEvent){try{var d=null!=window.frameElement}catch(g){}if(document.documentElement.doScroll&&!d){var i=function(){if(!c)try{document.documentElement.doScroll("left"),b()}catch(a){setTimeout(i,10)}};i()}document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&
b()})}if(window.addEventListener)window.addEventListener("load",b,f);else if(window.attachEvent)window.attachEvent("onload",b);else{var h=window.onload;window.onload=function(){h&&h();b()}}}};function K(a){"function"===typeof ClickTaleExec&&ClickTaleExec(a)}function L(a,b){"function"===typeof ClickTaleEvent&&(b?L.b[a]!==e&&(L.b[a]=e,ClickTaleEvent(a)):ClickTaleEvent(a))}L.b={};function M(a,b){"function"===typeof window.ClickTaleRegisterElementAction&&ClickTaleRegisterElementAction(a,b)}window.ClickTaleDetectAgent&&window.ClickTaleDetectAgent()&&window.ClickTaleDetectAgent();var N=L;var P="",T={index:[{selector:'section#homepage2-zone-1 div.column.zn__column--idx-2 iframe[id^="google_ads_iframe"]:visible',height:"250",width:"300",event:"Homepage: right hand top placement (300x250)"}],article:[{selector:'section.zn--idx-0 .zn__containers .column iframe[id^="google_ads_iframe"]:visible',height:"250",width:"300",event:"Article pages: right hand top placement (300x250)"},{selector:'.ad--epic [data-ad-id="ad_bnr_atf_01"] iframe[id^="google_ads_iframe"]:visible, .ad--epic .ad-ad_bnr_atf_01 iframe[id^="google_ads_iframe"]:visible',
event:"Article pages: the top banner placement"}],"section front":[{selector:'section.zn--idx-0 .zn__containers .column iframe[id^="google_ads_iframe"]:visible',height:"250",width:"300",event:"Section Fronts: the right hand top placement (300x250)"},{selector:'section.zn--idx-3 .zn__containers .column iframe[id^="google_ads_iframe"]:visible',height:"250",width:"300",event:"Section Fronts: the right hand second placement on the page (below the fold) (300x250)"}]};
window.ct_readCookie=function(a){for(var a=a+"=",b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};function U(a){return 0<a.length}
window.pathOverride=function(){if(window.jQuery&&0<jQuery("body > div#cnn_hdr").length){var a=jQuery("body > div#cnn_hdr").index("body>div");window.ClickTaleSettings&&(window.ClickTaleSettings.ElementPathRewriter=function(b,c){jQuery(b).index("body>div");0<jQuery(b).parent("body").length&&c[0].p>=a&&(c[0].p-=a);return c})}};function V(a,b){jQuery(document).one("mouseup",function(c){a===c.target&&b()})}
function W(){var a=["#cvp_1"],b;for(b in a){var c=[];c[b]=new window.MutationObserver(function(a){a.forEach(function(a){a=jQuery(a.target);a.is("#cvp_1")&&"fixed"==a.css("position")&&(N("Article - Pinned player",e),c[b].disconnect())})});var d={attributes:e,attributeFilter:["style"],characterData:e,characterDataOldValue:e,attributeOldValue:e},g;(g=document.querySelector(a[b]))&&c[b].observe(g,d)}}
function X(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=e;"/"==document.location.pathname&&U(document.querySelectorAll('section.zn-empty[class*="zn--idx"]'))&&N("Short Version");0<jQuery("#cvp_1").length&&window.MutationObserver&&W();jQuery(document).mousedown(function(a){a=jQuery(a.target).closest(".OUTBRAIN");a.length&&(a=a.attr("data-widget-id"))&&""!=a&&N("Outbrain: Action:"+a)});jQuery(document).on("mousedown","input, a, button",function(a){var b=a.target;jQuery(b);jQuery(this);
1===a.which&&b!=this&&V(b,function(a,b){return function(){var c={},d;for(d in a)c[d]=a[d];c.target=b;c.srcElement=b;"function"===typeof window.ClickTaleRegisterElementAction&&(ClickTaleRegisterElementAction("mouseover",c),ClickTaleRegisterElementAction("click",c))}}(a,this))});window.htmlArrived=function(){if(window.jQuery&&window.cnnPageName&&"CNN Home Page"==window.cnnPageName&&0<jQuery("body > div#cnn_hdr").length&&0<jQuery("#cnn_mOvrlycntr").length||window.jQuery&&0<jQuery('meta[content="article"]').length&&
0<jQuery("body > div#cnn_hdr").length&&0<jQuery("#cnn_mOvrlycntr").length)if(N("version 5"),-1<document.location.href.toLowerCase().indexOf("cnn.com")){window.cnnPageName&&"CNN Home Page"==window.cnnPageName&&N("Home page");var a=0,b=setInterval(function(){0<jQuery('meta[content="article"]').length&&0<jQuery("body > div#cnn_mOvrlycntr").length&&0<jQuery("body > div#cnn_hdr").length?(N("Article Page"),clearInterval(b)):100<a&&clearInterval(b);a+=1},300),c=0,d=setInterval(function(){0<jQuery(".no-border.no-pad-right:eq(1)>a").length&&
"Log out"==jQuery(".no-border.no-pad-right:eq(1)>a").text()?(N("Login User",e),clearInterval(d)):100<c&&clearInterval(d);c+=1},300),g=0,i=setInterval(function(){0<jQuery(".cnnvideo_playcontainer.cnnvideo_click_standard").length?(jQuery(document).on("mousedown",".cnnvideo_playcontainer.cnnvideo_click_standard",function(a){var b=jQuery(".cnnvideo_playcontainer.cnnvideo_click_standard").index(this);if(0<jQuery(".cnnvideo_playcontainer.cnnvideo_click_standard:eq("+b+")").closest("a").length){var b=jQuery(".cnnvideo_playcontainer.cnnvideo_click_standard:eq("+
b+")").closest("a")[0],c={},d;for(d in a)c[d]=a[d];c.target=b;c.srcElement=b;M("mouseover",c);M("click",c)}}),clearInterval(i)):100<g&&clearInterval(i);g+=1},300);jQuery("#us-menu>li").on("mousedown",function(a){var b=jQuery(this).index();if("a"!=a.target.nodeName.toLowerCase()&&0<jQuery("#us-menu>li").eq(b).find("a").length){var b=jQuery("#us-menu>li").eq(b).find("a")[0],c={},d;for(d in a)c[d]=a[d];c.target=b;c.srcElement=b;M("mouseover",c);M("click",c)}});setTimeout(function(){jQuery(".cnn_mtpmorebtn").one("mousedown",
function(){N("More Clicked")});jQuery(document).on("input",".ftr-search-tfield>input",function(){var a=jQuery(".ftr-search-tfield>input").index(this),b=jQuery(".ftr-search-tfield>input").eq(a).val();K("jQuery('.ftr-search-tfield>input:eq("+a+")').val('"+b+"');");N("Interacted With Search",e)})},3E3);window.bufferMovie=function(){jQuery("#cnnCVP1").on("onContentPause",function(){N("Stop Video",e);h=f});jQuery("#cnnCVP1").on("onContentBegin",function(){h=e})};var h=f;window.startIntervalMovie=function(){var a=
10,b=setInterval(function(){h==e&&N("Video "+a+" seconds");(h==f||110<a)&&clearInterval(b);a+=10},1E4)};var O=f;jQuery(document).on("mousedown",".cnnvideo_playcontainer.cnnvideo_click_standard",function(){O=h=e;N("Start Video Pressed On Play",e)});jQuery("#cnnCVP1").on("onContentBegin",function(){h=e;setTimeout(function(){if(0<jQuery(".cnn_mtt1img").length){var a=jQuery(".cnn_mtt1img").html().replace(/"/g,"'").replace(/(\r\n|\n|\r)/gm," ").replace(/<script.*?<\/script>/gi,"<script><\/script>");K("jQuery('.cnn_mtt1img').html(\""+
a+'");')}},100);O==f&&N("Start Video Onload",e)});jQuery("#cnnCVP1").one("onContentBuffering",function(){h=e;window.startIntervalMovie&&window.startIntervalMovie();window.bufferMovie&&window.bufferMovie()})}};("/us"==document.location.pathname||"/world"==document.location.pathname||"/tech"==document.location.pathname||"/health"==document.location.pathname||"/living"==document.location.pathname||"/entertainment"==document.location.pathname)&&N("Section Fronts Page");typeof window.CNN&&"contentModel"in
window.CNN&&"article"==window.CNN.contentModel.pageType&&N("Article template");if(window.CNN&&window.CNN.omniture&&window.CNN.omniture.template_type&&(P=window.CNN.omniture.template_type)){N("Template: "+P);var a=T[P];if(a)for(var b=0;b<a.length;b++){var c=a[b];U(jQuery(c.selector).filter(function(){return(c.height?this.height===c.height:e)&&(c.width?this.width===c.width:e)}))&&N(c.event)}}var d=0,g=setInterval(function(){0<jQuery(".pg-rail-tall__head div.media__video").length&&(0<jQuery("#large-media_0 object").length&&
(N("autoplay video"),clearInterval(g)),0<jQuery("#large-media_0--thumbnail>img").length&&(N("no autoplay video"),clearInterval(g)),d+=1);30<d&&clearInterval(g)},300);jQuery("body").hasClass("pg-homepage")&&jQuery("h2.banner-text>strong").length&&(a=jQuery("h2.banner-text>strong").text(),N("us home page - "+a));var i=0,h=setInterval(function(){window.jQuery&&0<jQuery("body > div#cnn_hdr").length&&0<jQuery("#cnn_mOvrlycntr").length?(clearInterval(h),window.htmlArrived&&window.htmlArrived()):100<i&&
clearInterval(h);i+=1},300)}}
(function(a){function b(){2==++window.okToStartOn2&&a()}window.okToStartOn2=0;J(function(){b()});if("undefined"!==typeof window.ClickTaleIsRecording&&window.ClickTaleIsRecording()===e)b();else{var c=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return c.apply(this,arguments)}}})(function(){var a=0,b=setInterval(function(){window.jQuery&&window.cnnPageName&&"CNN Home Page"==window.cnnPageName&&0<jQuery("body > div#cnn_hdr").length&&0<jQuery("#cnn_mOvrlycntr").length||
window.jQuery&&0<jQuery('meta[content="article"]').length&&0<jQuery("body > div#cnn_hdr").length&&0<jQuery("#cnn_mOvrlycntr").length?(clearInterval(b),window.ZoeFlag||(window.ZoeFlag=e,window.pathOverride&&window.pathOverride())):100<a&&clearInterval(b);a+=1},300);I(X,function(){return window.jQuery&&"function"===typeof jQuery.fn.on?e:f},250,40)});})();
