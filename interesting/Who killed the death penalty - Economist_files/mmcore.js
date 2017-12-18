/*! mmapi v1.5 Copyright 2006-2015 Maxymiser Inc */
/*v1.5.16.6895*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(a,D){function K(b){this.enableUtility=function(a){var d=b.getParam("un",b.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+a+"($|,)")).test(d)||(d=d.split(","),d.push(a),b.setParam("un",d.join(",").replace(/(^,)|(,$)/g,""),b.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(a){var d=b.getParam("un",b.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+a+"($|,)")).test(d)&&(d=d.replace(new RegExp("(^|,)"+a+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),b.setParam("un",d,b.baseStorage.storeStrategy.persistent));return this};this.enable=function(){b.enable();return this};this.disable=function(){b.disable();return this};this.getConfig=function(){return{storageType:b.storageType,cprefix:b.cprefix,domain:b.domain,baseContentUrl:b.baseContentUrl,cookie_domain:b.cookie_domain,srv:b.srv,async:b.async,beforeInit:b.beforeInit,beforeRequest:b.beforeRequest,afterResponse:b.afterResponse,afterResponseExecution:b.afterResponseExecution}}}function P(b){var a=
this,d=b.domain,m=encodeURIComponent,w=decodeURIComponent;a.set=function(a,b,k,l){l||(b=m(b));a=m(a)+"="+b+";domain="+d+";path=/";k?(b=new Date,b.setTime(b.getTime()+864E5*k),k=";expires="+b.toGMTString()):k="";document.cookie=a+k;return this};a.remove=function(b){a.set(b,"",-1);return this};a.get=function(b,a){var d=new RegExp("(?:^|; )"+m(b).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)"),d=(document.cookie.match(d)||[,""])[1];return a?d:w(d)}}function S(b){function l(b){for(var a={},d="",
k=0,e;e=A.getItem(b+k++);)d+=e;"cookie"==z&&(d=decodeURIComponent(d));try{a=JSON.parse(d)}catch(n){}return a}function d(){r=l(H);k=l(E);F&&"cookie"!==z&&(t.set(v+"store.s","s"),F=!1,k={});var b=(new Date).getTime(),a=r[n],d;for(d in a)a.hasOwnProperty(d)&&u(a[d]).e<=b&&delete a[d];w();r[n]=r[n]||{};k[n]=k[n]||{}}function m(b,a,d){a=JSON.stringify(a);var k="{}"===a,e=0;for("cookie"==z&&(a=encodeURIComponent(a));A.getItem(b+e);)A.removeItem(b+e++);if(!k)for(e=0;k=a.substr(3E3*e,3E3);)A.setItem(b+e++,
k,d)}function w(){m(H,r);m(E,k,0)}function u(a){var b=a.indexOf("|");return{v:JSON.parse(a.substring(b+1,a.length)),e:a.substring(0,b)}}if(!/^(cookie)$/.test(b.type))throw"(mm module: storage) Invalid storage type: "+b.type;var r,k,z=b.type||"cookie",v=b.cprefix+".",H=v+"store.p.",E=v+"store.s.",t=new P({domain:b.domain}),n=b.namespace||"def",F=!t.get(v+"store.s"),A="local"===z&&a.localStorage?a.localStorage:"session"===z&&a.sessionStorage?a.sessionStorage:{setItem:function(a,b,d){t.set(a,b,d==D?
365:d,!0)},getItem:function(a){return t.get(a,!0)},removeItem:function(a){t.remove(a)}};this.get=function(a){d();var b=r[n],l=k[n],x={},e;for(e in b)b.hasOwnProperty(e)&&(x[e]=b[e]);for(e in l)l.hasOwnProperty(e)&&(x[e]=l[e]);if(!a){a={};for(var m in x)x.hasOwnProperty(m)&&(a[m]=u(x[m]).v);return a}return(x[a]?u(x[a]):0).v};this.set=function(a,b,l){d();var m=r[n],e=k[n];delete m[a];delete e[a];null!==b&&b!==D&&(l?(e=new Date,e.setTime(e.getTime()+864E5*l),b=e.getTime()+"|"+JSON.stringify(b),m[a]=
b):e[a]="0|"+JSON.stringify(b));w();return this};this.removeAll=function(){d();r[n]={};k[n]={};w();return this};this.testStorage=function(){var a=(""+Math.random()).substring(0,5);t.set(v+"tst",a,10);a=t.get(v+"tst",!0)===a?1:0;t.remove(v+"tst");return a};d()}function T(b){function l(c){return"function"===typeof c}function d(c){return"string"===typeof c}function m(c,h){if(y[c])for(var a=y[c].length-1;0<=a;a--)y[c][a].call({},h)}function w(c){if(B){var h=document.getElementsByTagName("head")[0];h.insertBefore(c,
h.lastChild)}else document.write(c.outerHTML||(new XMLSerializer).serializeToString(c))}function G(c,h){var a=document.createElement("script");a.type="text/javascript";a.id=h;a.src=c;return a}function r(c){if("object"!==typeof c)return c;if(c.constructor===Array)return c.join(";");var a=[],g;for(g in c)if(c.hasOwnProperty(g))if(c[g].constructor===Array)for(var b in c[g])c[g].hasOwnProperty(b)&&a.push(g+"="+c[g][b]);else a.push(g+"="+encodeURIComponent(c[g]));return a.join(";")}function k(c){c=c?F(c):
{};var a={};d(c["mm-dlp-api"])&&(a.fv={ref:c["original-ref"].substring(0,256),url:c["original-url"].substring(0,1024)},a.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(a.fv.url)[0]);for(var b in c){var f=c[b];c.hasOwnProperty(b)&&"mmcore."===b.substring(0,7)&&(a[b.substring(7)]=f)}return a}function z(){var c="mmRequestCallbacks["+C+"]",h={},g=a.screen;h.fv={dmn:b.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:g.width,scrh:g.height,clrd:g.colorDepth,cok:p[q.persistent].testStorage()};
h.lver="1.5";h.jsncl=c;h.ri=C;return h}function v(c,h){var g=c&&c.Packages||[],f=g.length;if(0<f){a.mmInitCallback=function(b){b(e,c,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0});0===--f&&(h(),a.mmInitCallback=D)};for(var d=0;d<g.length;d++){var k=G(0===g[d].indexOf("//")?g[d]:b.baseContentUrl+g[d],"mmpack."+d);w(k)}}else h()}function H(c){c=document.getElementById(c);c.parentNode?c.parentNode.removeChild(c):c&&c.removeAttribute("src")}function E(c,h,b){c=(Q[c-1]=h)&&h.PersistData||
[];for(var f=c.length;f--;)e.setParam(c[f].Name,c[f].Value,q.persistent,c[f].Expiration);if(h.hasOwnProperty("mmcoreResponse")&&d(h.mmcoreResponse)&&a.hasOwnProperty("mmcore"))try{Function(h.mmcoreResponse).call(a)}catch(U){u.log(U)}m("response",h);b(!!h);m("responseExecuted",h)}function t(c,b){var g=G(c,"mmrequest."+C);(function(c,b){a.mmRequestCallbacks[c]=function(h){H(g.id);1===c?v(h,function(){E(c,h,b);B=!0;var g=k(document.location.search).origin;g&&a.parent&&a.parent.postMessage&&a.parent.postMessage(JSON.stringify({hash:"unhide",
command:"unhide",data:{}}),g)}):E(c,h,b);delete a.mmRequestCallbacks[c]}})(C,b);g.setAttribute("onerror","window['mmRequestCallbacks']["+C+"](false);");w(g);C++}function n(){var c={};this.get=function(a){return a?c[a]:c};this.set=function(a,b){c[a]=b};this.removeAll=function(){c={}}}function F(c){c=c.split(/\?|&/);for(var a={},b,f=0;f<c.length;f++)c[f]&&(b=c[f].split("="),a[b[0]]=decodeURIComponent(b[1]||""));return a}function A(c){var a={};c=F(c);I||(a.pageid=c.pageid);a.jsver=c.jsver;var b,f,e;
if(e=c.uv){a.uv={};var d=decodeURIComponent(e).split(/;/);for(e=0;e<d.length;e++)b=d[e].split("="),f=b[0].replace(/^\s+|\s+$/gm,""),b=b[1],0<f.length&&(a.uv.hasOwnProperty(f)||(a.uv[f]=[]),a.uv[f].push(b))}if(e=c.uat)for(a.uat={},d=decodeURIComponent(e).split(/;/),e=0;e<d.length;e++)b=d[e].split("="),f=b[0].replace(/^\s+|\s+$/gm,""),b=b[1],0<f.length&&(a.uat[f]=b);if(e=c.ids)for(a.ids={},d=e.split(/;/),e=0;e<d.length;e++)b=d[e].split("="),f=b[0],b=b[1],f&&b&&(a.ids[f]=decodeURIComponent(b));if(c=
c.rul)for(a.rul=[],c=c.split(/;/),e=0;e<c.length;e++)(b=c[e])&&a.rul.push(b);return a}function K(){if(a.hasOwnProperty("mmcore")){var c=a.mmcore;c.server=b.srv;e.CGRequestInternal=e.CGRequest;e.CGRequest=function(a,b){I=!0;N=a;O=b;c.CGRequest()};var h=c._Tag;c._Tag=function(a){if(-1==a.indexOf(b.srv))h.apply(c,arguments);else{c._Clear.call(c);var d=e.mergeParams(O,A(a));R=B;I||(B=c._async);e.CGRequestInternal(N,d);B=R;O=N=D;I=!1}};var d=c.SetCookie;c.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||
d.apply(c,arguments)}}}function L(c){return c||a.location.hostname.replace(/^www\./i,"")}function M(c,a,b){var f="";0<a.length&&"."!=a.substring(a.length-1)&&(f=".");a=a+f+b;f=c.get(a);d(f)&&f&&(e.setParam(b,f,q.persistent,365),c.remove(a))}function x(c){var b;b=a.hasOwnProperty("mmcore")&&a.mmcore.cookie_domain?a.mmcore.cookie_domain:c.hasOwnProperty("mmcoreCookieDomain")&&d(c.mmcoreCookieDomain)?c.mmcoreCookieDomain:c.cookie_domain;c=a.hasOwnProperty("mmcore")&&a.mmcore.cprefix?a.mmcore.cprefix:
c.hasOwnProperty("mmcoreCprefix")&&d(c.mmcoreCprefix)?c.mmcoreCprefix:c.cprefix+".";b=new P({domain:L(b)});M(b,c,"pd");M(b,c,"srv");M(b,"","mmid")}this.version="1.5";var e=this,Q=[],C=1,B=!1,y={},p=[],J,q={persistent:0,deferredRequest:1,request:2,page:3},N,O,R,I=!1;this.baseStorage=function(c){return new S({type:b.storageType,namespace:c,domain:L(b.cookie_domain),cprefix:b.cprefix})};this.baseStorage.storeStrategy=q;this.mergeParams=function(c,a){c="undefined"===typeof c?{}:c;a="undefined"===typeof a?
{}:a;if("object"!==typeof a)return a;var b={},d;if("object"===typeof c)for(d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);for(d in a)a.hasOwnProperty(d)&&(b[d]=b[d]?b[d].constructor===Array&&a[d].constructor===Array?b[d].concat(a[d]):e.mergeParams(b[d],a[d]):a[d]);return b};this.CGRequest=function(c,d){c=c||function(){};d=d||{};a.mmRequestCallbacks=a.mmRequestCallbacks||{};m("request");var g=e.mergeParams(z(),e.mergeParams(e.mergeParams(p[q.persistent].get(),e.mergeParams(p[q.deferredRequest].get(),e.mergeParams(p[q.page].get(),
p[q.request].get()))),k(location.search))),f=[],l=b.srv,g=e.mergeParams(g,d),n;for(n in g)g.hasOwnProperty(n)&&f.push(encodeURIComponent(n)+"="+encodeURIComponent(r(g[n])));p[q.deferredRequest].removeAll();p[q.request].removeAll();t(l+f.join("&"),c);return this};this.getResponses=function(){return Q};this.setParam=function(a,b,d,e){p[d].set(a,b,e);return this};this.getParam=function(a,b){return p[b].get(a)};this.removeParam=function(a,b){p[b].set(a,null,-1);return this};this.on=function(a,b){y[a]&&
y[a].push(b);return e};this.disable=function(){J.set("disabled",1,0);return this};this.enable=function(){J.set("disabled",null,-1);return this};(function(b){function h(){e.on("request",function(){try{var a=b.beforeRequest;l(a)&&a.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===typeof c?1:c,d)})}catch(d){u&&u.log(d)}});e.on("response",function(a){try{var d=b.afterResponse;l(d)&&d.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===typeof c?1:c,d)},a)}catch(f){u&&u.log(f)}});
e.on("responseExecuted",function(a){try{var d=b.afterResponseExecution;l(d)&&d.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===typeof c?1:c,d)},a)}catch(f){u&&u.log(f)}});try{var f=b.beforeInit;f&&"function"===typeof f&&f.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===typeof c?1:c,d)})}catch(g){u&&u.log(g)}b.hasOwnProperty("mmcoreUrl")&&d(b.mmcoreUrl)&&b.mmcoreUrl?(a.mmcoreInitCallback=function(d){x(b);K();e.CGRequest(function(){l(d)&&d.apply(a.mmcore,arguments)},
m);delete a.mmcoreInitCallback},w(G(b.mmcoreUrl,"mmcoreIntegration"))):(x(b),e.CGRequest(D,m))}for(var g in b)b.hasOwnProperty(g)&&(e[g]=b[g]);var f=k(document.location.search);e.calcCookieDomain=L(e.cookie_domain);B="boolean"===typeof b.async?b.async:!1;J=e.baseStorage("ls");if(1!=(f.disabled||J.get("disabled"))){p[q.persistent]=e.baseStorage("mmparams.p");p[q.deferredRequest]=e.baseStorage("mmparams.d");p[q.request]=new n;p[q.page]=new n;y.request=[];y.response=[];y.responseExecuted=[];var m={};
g=k(document.referrer).pruh;var f=f.pruh,r=a.mmpruh,t=e.getParam("pruh",0),v=(g?g+",":"")+(f?f+",":"")+(r?r+",":"")+(t?t:"");v?(a.mmInitCallback=function(a){a(e,v,h)},w(G(b.baseContentUrl+"utils/pruh.js","MM.PRUH"))):h()}})(b);return this}if(!a.mmsystem){var u=a.console||{log:function(){},error:function(){}},V=new T({
 storageType:'cookie',
 cprefix:'mmapi',
 domain:'economist.com',
 baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
 cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
 srv:'//service.maxymiser.net/cg/v5/?',
 async:false,
 mmcoreUrl:'//service.maxymiser.net/cdn/economist/js/mmcore_old.js',
 mmcoreCookieDomain:"." + location.host.match(/\w*\.\w*$/)[0],
 mmcoreCprefix:'mmcore.',
 beforeInit:function( getParam, setParam ){   },
 beforeRequest:function( getParam, setParam ){   },
 afterResponse:function( getParam, setParam, genInfo ){   },
 afterResponseExecution:function( getParam, setParam, genInfo ){   }
});a.mmsystem=new K(V)}})(window);