(function(){var g,h=this;function m(a){return void 0!==a}function aa(a,b){var c=a.split("."),d=h;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&m(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}function ba(a){a.Fa=function(){return a.Ka?a.Ka:a.Ka=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"array"==ca(a)}function u(a){return"string"==typeof a}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ka;return w.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Fb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pb=function(a,c,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];return b.prototype[c].apply(a,k)}};x.b={};x.b.Nb=2E3;x.b.Mb=10;x.b.Lb="last_visit";x.b.o={ya:"v",Da:"rn",Ca:"pid",Ea:"rid",Za:"ce",Wa:"bs",ob:"rf",eb:"en",kb:"pt",pb:"sr",Ya:"cd",hb:"la",gb:"ja",Ra:"acn",Sa:"an",mb:"pl",sb:"tz",lb:"url",fb:"fv",qb:"sv",ma:"cv",Ba:"le",D:"et",ib:"lv",rb:"sp",Xa:"ch",$:"bl"};function na(a){this.a=void 0;this.a=("https:"===h.location.protocol?"https:":"http:")+"//kraken.rambler.ru/cnt/?";this.ka=(new Date/1E3).toString()+"-"+x.C.va().toString();this.version=oa.version;a?(this.u=a.project,this.A=a.attributes_dataset||[],this.P=a.splits||[],this.K=a.chapters||[],this.B=a.custom_vars||void 0):(this.u=oa.u,this.A=[],this.P=[],this.K=[],this.B=void 0)}
var oa={Qb:"//kraken.rambler.ru/cnt/?",version:"0.0.5",ka:void 0,Ub:"//kraken.rambler.ru/cnt/?",Ob:"//kraken.rambler.ru/cnt/?",u:-1,Tb:"actual",P:void 0,K:void 0,A:[]};g=na.prototype;g.version=void 0;g.u=void 0;g.ka=void 0;g.A=void 0;g.P=void 0;g.K=void 0;g.B=void 0;g.wa=function(a){this.name=a};x.La={};x.La.Hb=function(a,b){function c(){e=h.setTimeout(d,1E3);a.apply(null,k)}function d(){e=null;f&&(f=!1,c())}b&&(a=w(a,b));var e=null,f=!1,k=[];return function(a){k=arguments;e?f=!0:c()}};x.C={};x.C.va=function(){return Math.round(2147483647*Math.random())};function pa(a,b){this.b=a;this.a=b}pa.prototype.toString=function(){return this.b+"x"+this.a};x.h={};x.h.TIMEOUT=1E3;x.h.send=function(a,b){x.h.Bb(a,b)};x.h.Bb=function(a,b){function c(a){a.src="";d&&(clearTimeout(d),d=null);a.onload=function(){};a.onabort=function(){};a.onerror=function(){};b.error()}var d,e=new Image;e.onload=w(function(){d&&(clearTimeout(d),d=null);b.Pa()},this,e);e.onerror=w(c,this,e);e.onabort=w(c,this,e);e.src=a;d=setTimeout(function(a){return w(c,this,a)}(e),x.h.TIMEOUT)};x.h.Sb=function(a,b){console.log(a);b.Pa()};function A(){this.a=[];this.C=!1;this.b=0;this.c=!1;this.h=0}ba(A);A.prototype.s=function(){0===this.a.length?this.C=!1:x.h.send(this.a[0],{Pa:w(this.Y,this),error:w(this.W,this)})};A.prototype.Y=function(){this.c=!1;this.b=this.h=0;this.a.shift();this.s()};A.prototype.W=function(){5<=this.h++?(this.c=!1,this.b=this.h=0):(this.c||(this.c=!0,this.a[0]+="&retry=1"),this.b+=250,h.setTimeout(w(this.s,this),this.b))};x.a={};x.a.f={};x.a.f.Ta=!1;x.a.f.nb="Silverlight Plug-In";x.a.f.Z="application/x-silverlight";x.a.f.jb=[x.a.f.Z,x.a.f.Z+"-2",x.a.f.Z+"-2-b2",x.a.f.Z+"-2-b1"];x.a.f.Va="AgControl.AgControl";x.a.f.T=!1;x.a.f.da="";
x.a.f.ta=function(){var a=h.navigator;if(a.plugins&&a.plugins.length){var b=a.plugins[x.a.f.nb];b&&(x.a.f.T=!0,b.description&&(x.a.f.da=x.a.f.pa(b.description)))}else if(a.mimeTypes&&a.mimeTypes.length)for(var c=x.a.f.jb,b=0;b<c.length;b++){var d=a.mimeTypes[c[b]];if(d&&d.enabledPlugin){x.a.f.T=!!d.enabledPlugin;x.a.f.T&&(x.a.f.da=x.a.f.pa(d.enabledPlugin.description));break}}else{a=[0,0,0,0];try{c=new ActiveXObject(x.a.f.Va);x.a.f.T=!0;for(b=0;b<a.length;b++){for(var e=0,f=1048575,k=0;e<f;)d=a[b]=
e+(f-e>>1),c.IsVersionSupported(a.join("."))?(k=d,e=d+1):f=d;a[b]=k}x.a.f.da=x.a.f.pa(a.join("."))}catch(l){}}};x.a.f.pa=function(a){return"1.0.30226.2"==a?"2.0.30226.2":a};x.a.f.Ta||x.a.f.ta();x.a.f.Kb=x.a.f.T;x.a.f.VERSION=x.a.f.da;function ra(){0!=sa&&(this[da]||(this[da]=++ea));this.a=this.a;this.b=this.b}var sa=0;ra.prototype.a=!1;var ta;function ua(){return!0};function va(a,b){this.type=a;this.b=this.target=b}va.prototype.sa=function(){};var Aa="closure_listenable_"+(1E6*Math.random()|0),Ba=0;function Ca(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.ca=!!d;this.fa=e;++Ba;this.N=this.ba=!1}function Da(a){a.N=!0;a.listener=null;a.a=null;a.src=null;a.fa=null};function Ea(a,b){this.b=a;this.a=b}g=Ea.prototype;g.clone=function(){return new Ea(this.b,this.a)};g.toString=function(){return"("+this.b+" x "+this.a+")"};g.X=function(){return!(this.b*this.a)};g.ceil=function(){this.b=Math.ceil(this.b);this.a=Math.ceil(this.a);return this};g.floor=function(){this.b=Math.floor(this.b);this.a=Math.floor(this.a);return this};g.round=function(){this.b=Math.round(this.b);this.a=Math.round(this.a);return this};function Fa(a){var b=arguments.length;if(1==b&&q(arguments[0]))return Fa.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};Fa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function Ga(a){this.a=a}var Ha=/\s*;\s*/;g=Ga.prototype;g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');m(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(la()+1E3*c)).toUTCString();this.a.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(Ha),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};g.m=function(){return Ia(this).keys};g.i=function(){return Ia(this).values};g.X=function(){return!this.a.cookie};g.V=function(){return this.a.cookie?(this.a.cookie||"").split(Ha).length:0};g.l=function(a){return m(this.get(a))};
g.clear=function(){for(var a=Ia(this).keys,b=a.length-1;0<=b;b--){var c=a[b];this.l(c);this.set(c,"",0,void 0,void 0)}};function Ia(a){a=(a.a.cookie||"").split(Ha);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}var Ja=new Ga(document);Ja.b=3950;function Ka(a){Ka[" "](a);return a}Ka[" "]=function(){};var La=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function Ma(a,b){return a<b?-1:a>b?1:0}function Na(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};var B=Array.prototype,Oa=B.indexOf?function(a,b,c){return B.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=B.forEach?function(a,b,c){B.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function E(a){return B.concat.apply(B,arguments)}
function Pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Qa(a,b){return a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())};function Ra(a){this.src=a;this.a={};this.b=0}function Sa(a,b,c,d,e){var f=b.toString();b=a.a[f];b||(b=a.a[f]=[],a.b++);var k=Ta(b,c,d,e);-1<k?(a=b[k],a.ba=!1):(a=new Ca(c,a.src,f,!!d,e),a.ba=!1,b.push(a));return a}function Ua(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Oa(d,b),f;(f=0<=e)&&B.splice.call(d,e,1);f&&(Da(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}function Ta(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.N&&f.listener==b&&f.ca==!!c&&f.fa==d)return e}return-1};function F(a,b){this.b={};this.a=[];this.h=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof F)e=a.m(),d=a.i();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)this.set(e[c],d[c])}}g=F.prototype;g.V=function(){return this.c};g.i=function(){Va(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};
g.m=function(){Va(this);return this.a.concat()};g.l=function(a){return G(this.b,a)};g.X=function(){return 0==this.c};g.clear=function(){this.b={};this.h=this.c=this.a.length=0};function Va(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];G(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],G(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return G(this.b,a)?this.b[a]:b};
g.set=function(a,b){G(this.b,a)||(this.c++,this.a.push(a),this.h++);this.b[a]=b};g.forEach=function(a,b){for(var c=this.m(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new F(this)};function G(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function I(a){this.a=new F;this.b=new F;this.c=a||!1}g=I.prototype;g.w=0;g.J=0;g.V=function(){return this.w};g.X=function(){return 0===this.w};g.l=function(a){a=J(this,a);return this.a.l(a)||this.b.l(a)};function Wa(a,b){b=J(a,b);return a.a.l(b)}function Xa(a,b){b=J(a,b);return a.b.l(b)}g.m=function(){for(var a=this.a.i(),b=this.b.i(),c=this.a.m(),d=this.b.m(),e=[],f=0;f<d.length;f++)for(var k=b[f],l=0;l<k.length;l++)e.push(d[f]);for(f=0;f<c.length;f++)for(k=a[f],l=0;l<k.length;l++)e.push(c[f]);return e};
g.i=function(a){var b=[];if(a)Wa(this,a)&&(b=E(b,this.a.get(J(this,a)))),Xa(this,a)&&(b=E(b,this.b.get(J(this,a))));else{a=this.a.i();for(var c=this.b.i(),d=0;d<c.length;++d)b=E(b,c[d]);for(d=0;d<a.length;d++)b=E(b,a[d])}return b};g.get=function(a,b){var c=a?this.i(a):[];return 0<c.length?c[0]:b};g.set=function(a,b){a=J(this,a);Wa(this,a)&&(this.w-=this.a.get(a).length);this.a.set(a,[b]);this.w++;return this};function L(a,b,c){b=J(a,b);Xa(a,b)&&(a.J-=a.a.get(b).length);a.b.set(b,[c]);a.J++}
g.clone=function(){var a=new I;this.a&&(a.a=this.a.clone(),a.w=this.w);this.b&&(a.b=this.b.clone(),a.J=this.J);return a};
g.toString=function(){if(!this.w&&!this.J)return"";for(var a=[],b=this.a.m(),c=this.b.m(),d=void 0,e=void 0,f=d=void 0,k=0;k<c.length;++k)for(var d=c[k],e=encodeURIComponent(String(d)),d=this.i(d),l=0;l<d.length;++l)f=e,""!==d[l]&&(f+="="+encodeURIComponent(String(d[l]))),a.push(f);for(k=0;k<b.length;++k)for(d=b[k],e=encodeURIComponent(String(d)),d=this.i(d),l=0;l<d.length;++l)f=e,""!==d[l]&&(f+="="+encodeURIComponent(String(d[l]))),a.push(f);return a.join("&")};
function J(a,b){var c=String(b);a.c&&(c=c.toLowerCase());return c};x.Y={};x.Y.Qa=function(a){var b=new I,c;for(c in a)a.hasOwnProperty(c)&&b.set(c,a[c]);return b};var M=!1,N="";function Ya(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
if(navigator.plugins&&navigator.plugins.length){var Za=navigator.plugins["Shockwave Flash"];Za&&(M=!0,Za.description&&(N=Ya(Za.description)));navigator.plugins["Shockwave Flash 2.0"]&&(M=!0,N="2.0.0.11")}else if(navigator.mimeTypes&&navigator.mimeTypes.length){var $a=navigator.mimeTypes["application/x-shockwave-flash"];(M=$a&&$a.enabledPlugin)&&(N=Ya($a.enabledPlugin.description))}else try{var ab=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),M=!0,N=Ya(ab.GetVariable("$version"))}catch(a){try{ab=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),M=!0,N="6.0.21"}catch(b){try{ab=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),M=!0,N=Ya(ab.GetVariable("$version"))}catch(c){}}}var bb=N;var O;a:{var db=h.navigator;if(db){var eb=db.userAgent;if(eb){O=eb;break a}}O=""};var fb=-1!=O.indexOf("Opera")||-1!=O.indexOf("OPR"),P=-1!=O.indexOf("Trident")||-1!=O.indexOf("MSIE"),Q=-1!=O.indexOf("Gecko")&&-1==O.toLowerCase().indexOf("webkit")&&!(-1!=O.indexOf("Trident")||-1!=O.indexOf("MSIE")),R=-1!=O.toLowerCase().indexOf("webkit"),gb=R&&-1!=O.indexOf("Mobile");function hb(){var a=h.document;return a?a.documentMode:void 0}
var ib=function(){var a="",b;if(fb&&h.opera)return a=h.opera.version,"function"==ca(a)?a():a;Q?b=/rv\:([^\);]+)(\)|;)/:P?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:R&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(O))?a[1]:"");return P&&(b=hb(),b>parseFloat(a))?String(b):a}(),jb={};
function S(a){var b;if(!(b=jb[a])){b=0;for(var c=La(String(ib)).split("."),d=La(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var k=c[f]||"",l=d[f]||"",qa=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");do{var t=qa.exec(k)||["","",""],D=r.exec(l)||["","",""];if(0==t[0].length&&0==D[0].length)break;b=Ma(0==t[1].length?0:parseInt(t[1],10),0==D[1].length?0:parseInt(D[1],10))||Ma(0==t[2].length,0==D[2].length)||Ma(t[2],D[2])}while(0==b)}b=jb[a]=0<=b}return b}
var kb=h.document,lb=kb&&P?hb()||("CSS1Compat"==kb.compatMode?parseInt(ib,10):5):void 0;x.c={};x.c.Ua=!1;x.c.xa=!1;x.c.tb=x.c.Ua||x.c.xa;
x.c.ready=function(a){function b(){c||(c=!0,a())}var c=!1;if(document.addEventListener)document.addEventListener("DOMContentLoaded",function(){b()},!1);else if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top){var d=function(){if(!c&&document.body)try{document.documentElement.doScroll("left"),b()}catch(a){setTimeout(d,0)}};d()}document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&b()})}window.addEventListener?window.addEventListener("load",
b,!1):window.attachEvent&&window.attachEvent("onload",b)};x.c.Ia=function(a){a=a||h;var b=a.document;if(R&&!gb){m(a.innerHeight)||(a=h);var b=a.innerHeight,c=a.document.documentElement.scrollHeight;a==a.top&&c<b&&(b-=15);return new pa(a.innerWidth,b)}a=x.c.ub(b)?b.documentElement:b.body;return new pa(a.clientWidth,a.clientHeight)};x.c.ub=function(a){return x.c.tb?x.c.xa:"CSS1Compat"==a.compatMode};!Q&&!P||P&&P&&9<=lb||Q&&S("1.9.1");P&&S("9");function mb(a,b){return u(b)?a.getElementById(b):b}function nb(a){this.a=a||h.document||document}nb.prototype.Ia=function(a){a||(a=this.a,a=a.parentWindow||a.defaultView);a=(a||window).document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Ea(a.clientWidth,a.clientHeight)};
nb.prototype.contains=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var ob=!P||P&&9<=lb,pb=P&&!S("9");!R||S("528");Q&&S("1.9b")||P&&S("8")||fb&&S("9.5")||R&&S("528");Q&&!S("8")||P&&S("9");function qb(a,b){va.call(this,a?a.type:"");this.b=this.target=null;this.ra=this.qa=0;this.a=null;if(a){this.a=a;this.type=a.type;this.target=a.target||a.srcElement;this.b=b;var c=a.relatedTarget;if(c&&Q)try{Ka(c.nodeName)}catch(d){}Object.defineProperties?Object.defineProperties(this,{qa:{configurable:!0,enumerable:!0,get:this.Ga,set:this.Db},ra:{configurable:!0,enumerable:!0,get:this.Ha,set:this.Eb}}):(this.qa=this.Ga(),this.ra=this.Ha());a.defaultPrevented&&this.sa()}}ma(qb,va);g=qb.prototype;
g.sa=function(){qb.Fb.sa.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,pb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};g.Ga=function(){return R||void 0!==this.a.offsetX?this.a.offsetX:this.a.layerX};g.Db=function(a){Object.defineProperties(this,{qa:{writable:!0,enumerable:!0,configurable:!0,value:a}})};g.Ha=function(){return R||void 0!==this.a.offsetY?this.a.offsetY:this.a.layerY};
g.Eb=function(a){Object.defineProperties(this,{ra:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var rb="closure_lm_"+(1E6*Math.random()|0),sb={},tb=0;function ub(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)ub(a,b[f],c,d,e);else if(c=vb(c),a&&a[Aa])Sa(a.G,String(b),c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,k=wb(a);k||(a[rb]=k=new Ra(a));c=Sa(k,b,c,d,e);c.a||(d=xb(),c.a=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(yb(b.toString()),d),tb++)}}
function xb(){var a=zb,b=ob?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Ab(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)Ab(a,b[f],c,d,e);else(c=vb(c),a&&a[Aa])?(a=a.G,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Ta(f,c,d,e),-1<c&&(Da(f[c]),B.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=wb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Ta(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Bb(c))}
function Bb(a){if("number"!=typeof a&&a&&!a.N){var b=a.src;if(b&&b[Aa])Ua(b.G,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.ca):b.detachEvent&&b.detachEvent(yb(c),d);tb--;(c=wb(b))?(Ua(c,a),0==c.b&&(c.src=null,b[rb]=null)):Da(a)}}}function yb(a){return a in sb?sb[a]:sb[a]="on"+a}function Cb(a,b,c,d){var e=!0;if(a=wb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.ca==c&&!f.N&&(f=Db(f,d),e=e&&!1!==f)}return e}
function Db(a,b){var c=a.listener,d=a.fa||a.src;a.ba&&Bb(a);return c.call(d,b)}
function zb(a,b){if(a.N)return!0;if(!ob){var c;if(!(c=b))a:{c=["window","event"];for(var d=h,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new qb(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(qa){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.b;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;0<=k;k--){c.b=e[k];var l=Cb(e[k],f,!0,c),d=d&&l}for(k=0;k<e.length;k++)c.b=e[k],l=Cb(e[k],f,!1,
c),d=d&&l}return d}return Db(a,new qb(b,this))}function wb(a){a=a[rb];return a instanceof Ra?a:null}var Eb="__closure_events_fn_"+(1E9*Math.random()>>>0);function vb(a){if("function"==ca(a))return a;a[Eb]||(a[Eb]=function(b){return a.handleEvent(b)});return a[Eb]};function Fb(a){this.c=a;this.b=[];this.a={};ub(h.document,"click",this.h,!0,this)}Fb.prototype.S=function(a){var b=[],c=void 0;C(a,function(a){c=Na(a);this.a[c].length&&b.push(c+"::"+this.a[c].reverse().join("::"));this.a[c]=[]},this);a=new I;var d=x.b.o;b.length&&(a.set(d.D,"cl"),a.set(d.$,JSON.stringify(b)));return a};function Gb(a,b){var c=void 0;C(b,function(a){c=Na(a);-1===Oa(this.b,c)&&(this.b.push(c),this.a[c]=[])},a)}
Fb.prototype.h=function(a){for(a=a.target;a!==h.document;)Hb(this,a),a=a.parentNode;Ib(this.c,"updated")};function Hb(a,b){var c=void 0;C(a.b,function(a){(c=Qa(b,a))&&this.a[a].push(c)},a)};function Jb(a){this.h=a;this.a=0;la();this.b=!0;h.setTimeout(w(this.c,this),Kb(this));a=x.La.Hb(this.s,this);ub(window,Lb,a,!1,this)}var Mb=[0,10,30,60,120,180,240,300,360,420,480,540,600,720,840,960,1080,1200],Lb=["click","mousemove","wheel","touchstart"];Jb.prototype.s=function(){this.b=!0};function Kb(a){return++a.a>=Mb.length?12E4:1E3*(Mb[a.a]-Mb[a.a-1])}Jb.prototype.c=function(){this.b&&(Ib(this.h,"ping"),this.b=!1);h.setTimeout(w(this.c,this),Kb(this))};function Nb(){ra.call(this);this.G=new Ra(this)}ma(Nb,ra);Nb.prototype[Aa]=!0;Nb.prototype.removeEventListener=function(a,b,c,d){Ab(this,a,b,c,d)};function Ib(a,b){var c=a.G.a[String(b)];if(c)for(var c=c.concat(),d=!0,e=0;e<c.length;++e){var f=c[e];if(f&&!f.N&&0==f.ca){var k=f.listener,l=f.fa||f.src;f.ba&&Ua(a.G,f);d=!1!==k.call(l,void 0)&&d}}};function Ob(){this.Aa=new I;this.a=void 0;var a=this.Aa,b=x.b.o;a.set(b.D,"pv");a.set(b.Wa,x.c.Ia());a.set(b.Za,navigator.cookieEnabled?1:0);var c=h.document;c&&(a.set(b.ob,c.referrer||""),a.set(b.eb,c.characterSet||c.charset||""),a.set(b.kb,c.title.substring(0,255)));if(c=h.screen)a.set(b.pb,c.width+"x"+c.height),a.set(b.Ya,c.colorDepth+"-bit");if(c=h.navigator)a.set(b.hb,c.language||c.browserLanguage||""),a.set(b.gb,c.javaEnabled()?1:0),a.set(b.Ra,c.appCodeName),a.set(b.Sa,c.appName),a.set(b.mb,
c.platform);a.set(b.sb,(new Date).getTimezoneOffset());a.set(b.fb,ac());a.set(b.qb,x.a.f.VERSION);a.set(b.ib,bc(this))}function bc(a){if(!a.a){a.a=Ja.get("last_visit");var b=new Date;Ja.set("last_visit",b.getTime()+6E4*b.getTimezoneOffset()+"::"+b.getTime(),864E5)}return a.a||""}function ac(){var a=bb.match(/[\d]+/g);if(!a||!a.length)return"";a.length=3;return a[0]+"."+a[1]+" r"+a[2]};var cc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function dc(a){if(ec){ec=!1;var b=h.location;if(b){var c=b.href;if(c&&(c=(c=dc(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw ec=!0,Error();}}return a.match(cc)}var ec=R;function fc(a,b){var c;a instanceof fc?(this.H=m(b)?b:a.H,gc(this,a.O),this.la=a.la,this.U=a.U,hc(this,a.ja),this.ia=a.ia,ic(this,a.a.clone()),this.ea=a.ea):a&&(c=dc(String(a)))?(this.H=!!b,gc(this,c[1]||"",!0),this.la=jc(c[2]||""),this.U=jc(c[3]||"",!0),hc(this,c[4]),this.ia=jc(c[5]||"",!0),ic(this,c[6]||"",!0),this.ea=jc(c[7]||"")):(this.H=!!b,this.a=new kc(null,0,this.H))}g=fc.prototype;g.O="";g.la="";g.U="";g.ja=null;g.ia="";g.ea="";g.H=!1;
g.toString=function(){var a=[],b=this.O;b&&a.push(lc(b,mc,!0),":");if(b=this.U){a.push("//");var c=this.la;c&&a.push(lc(c,mc,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.ja;null!=b&&a.push(":",String(b))}if(b=this.ia)this.U&&"/"!=b.charAt(0)&&a.push("/"),a.push(lc(b,"/"==b.charAt(0)?nc:oc,!0));(b=this.a.toString())&&a.push("?",b);(b=this.ea)&&a.push("#",lc(b,pc));return a.join("")};g.clone=function(){return new fc(this)};
function gc(a,b,c){a.O=c?jc(b,!0):b;a.O&&(a.O=a.O.replace(/:$/,""))}function hc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.ja=b}else a.ja=null}function ic(a,b,c){b instanceof kc?(a.a=b,qc(a.a,a.H)):(c||(b=lc(b,rc)),a.a=new kc(b,0,a.H))}function jc(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}function lc(a,b,c){return u(a)?(a=encodeURI(a).replace(b,sc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function sc(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mc=/[#\/\?@]/g,oc=/[\#\?:]/g,nc=/[\#\?]/g,rc=/[\#\?@]/g,pc=/#/g;function kc(a,b,c){this.a=a||null;this.b=!!c}
function T(a){if(!a.g&&(a.g=new F,a.j=0,a.a))for(var b=a.a.split("&"),c=0;c<b.length;c++){var d=b[c].indexOf("="),e=null,f=null;0<=d?(e=b[c].substring(0,d),f=b[c].substring(d+1)):e=b[c];e=decodeURIComponent(e.replace(/\+/g," "));e=X(a,e);d=a;f=f?decodeURIComponent(f.replace(/\+/g," ")):"";T(d);d.a=null;var e=X(d,e),k=d.g.get(e);k||d.g.set(e,k=[]);k.push(f);d.j++}}g=kc.prototype;g.g=null;g.j=null;g.V=function(){T(this);return this.j};
function tc(a,b){T(a);b=X(a,b);if(a.g.l(b)){a.a=null;a.j-=a.g.get(b).length;var c=a.g;G(c.b,b)&&(delete c.b[b],c.c--,c.h++,c.a.length>2*c.c&&Va(c))}}g.clear=function(){this.g=this.a=null;this.j=0};g.X=function(){T(this);return 0==this.j};g.l=function(a){T(this);a=X(this,a);return this.g.l(a)};g.m=function(){T(this);for(var a=this.g.i(),b=this.g.m(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.i=function(a){T(this);var b=[];if(u(a))this.l(a)&&(b=E(b,this.g.get(X(this,a))));else{a=this.g.i();for(var c=0;c<a.length;c++)b=E(b,a[c])}return b};g.set=function(a,b){T(this);this.a=null;a=X(this,a);this.l(a)&&(this.j-=this.g.get(a).length);this.g.set(a,[b]);this.j++;return this};g.get=function(a,b){var c=a?this.i(a):[];return 0<c.length?String(c[0]):b};
g.toString=function(){if(this.a)return this.a;if(!this.g)return"";for(var a=[],b=this.g.m(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.i(d),f=0;f<d.length;f++){var k=e;""!==d[f]&&(k+="="+encodeURIComponent(String(d[f])));a.push(k)}return this.a=a.join("&")};g.clone=function(){var a=new kc;a.a=this.a;this.g&&(a.g=this.g.clone(),a.j=this.j);return a};function X(a,b){var c=String(b);a.b&&(c=c.toLowerCase());return c}
function qc(a,b){b&&!a.b&&(T(a),a.a=null,a.g.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(tc(this,b),tc(this,e),0<a.length&&(this.a=null,this.g.set(X(this,e),Pa(a)),this.j+=a.length))},a));a.b=b};function uc(){this.a=this.b=void 0;this.ta()}uc.prototype.getData=function(){return this.a};uc.prototype.S=function(){this.b=new fc(h.location.href);var a=this.b.a;C(a.m(),function(b){0==b.lastIndexOf("utm_",0)&&this.a.set(b.split("_").join("."),a.get(b))},this)};uc.prototype.ta=function(){this.a=new I;this.S()};
var vc=function(){function a(a,c){if(!a)return[];if(a.constructor==Array)return a;if(!u(a))return[a];if(u(c)&&(c=mb(document,c),!c))return[];c=c||document;var e=c.ownerDocument||c.documentElement;U=c.contentType&&"application/xml"==c.contentType||fb&&(c.doctype||"[object XMLDocument]"==e.toString())||!!e&&(H?e.xml:c.xmlVersion||e.xmlVersion);return(e=d(a)(c))&&e.ga?e:b(e)}function b(a){if(a&&a.ga)return a;var b=[];if(!a||!a.length)return b;a[0]&&b.push(a[0]);if(2>a.length)return b;v++;if(H&&U){var c=
v+"";a[0].setAttribute("_zipIdx",c);for(var d=1,e;e=a[d];d++)a[d].getAttribute("_zipIdx")!=c&&b.push(e),e.setAttribute("_zipIdx",c)}else if(H&&a.vb)try{for(d=1;e=a[d];d++)wa(e)&&b.push(e)}catch(f){}else for(a[0]&&(a[0]._zipIdx=v),d=1;e=a[d];d++)a[d]._zipIdx!=v&&b.push(e),e._zipIdx=v;return b}function c(a,b){if(!b)return 1;var c=Dc(a);return b[c]?0:b[c]=1}function d(a,b){if(Rb){var c=Sb[a];if(c&&!b)return c}if(c=Tb[a])return c;var c=a.charAt(0),f=-1==a.indexOf(" ");0<=a.indexOf("#")&&f&&(b=!0);if(!Rb||
b||-1!=">~+".indexOf(c)||H&&-1!=a.indexOf(":")||Ub&&0<=a.indexOf(".")||-1!=a.indexOf(":contains")||-1!=a.indexOf("|=")){var Qb=a.split(/\s*,\s*/);return Tb[a]=2>Qb.length?e(a):function(a){for(var b=0,c=[],d;d=Qb[b++];)c=c.concat(e(d)(a));return c}}var k=0<=">~+".indexOf(a.charAt(a.length-1))?a+" *":a;return Sb[a]=function(b){try{if(9!=b.nodeType&&!f)throw"";var c=b.querySelectorAll(k);H?c.vb=!0:c.ga=!0;return c}catch(e){return d(a,!0)(b)}}}function e(a){var b=Vb(La(a));if(1==b.length){var c=f(b[0]);
return function(a){if(a=c(a,[]))a.ga=!0;return a}}return function(a){a=ha(a);for(var c,d,e=b.length,Pb,K,k=0;k<e;k++){K=[];c=b[k];d=a.length-1;0<d&&(Pb={},K.ga=!0);d=f(c);for(var l=0;c=a[l];l++)d(c,K,Pb);if(!K.length)break;a=K}return K}}function f(a){var b=Wb[a.M];if(b)return b;var c=a.Ja,c=c?c.ha:"",d=r(a,{L:1}),e="*"==a.tag,f=document.getElementsByClassName;if(c)f={L:1},e&&(f.tag=1),d=r(a,f),"+"==c?b=qa(d):"~"==c?b=l(d):">"==c&&(b=k(d));else if(a.id)d=!a.Ma&&e?ua:r(a,{L:1,id:1}),b=function(b,c){var e;
e=b?new nb(9==b.nodeType?b:b.ownerDocument||b.document):ta||(ta=new nb);e=mb(e.a,a.id);var f;if((f=e&&d(e))&&!(f=9==b.nodeType)){for(f=e.parentNode;f&&f!=b;)f=f.parentNode;f=!!f}if(f)return ha(e,c)};else if(f&&/\{\s*\[native code\]\s*\}/.test(String(f))&&a.v.length&&!Ub)var d=r(a,{L:1,v:1,id:1}),Ec=a.v.join(" "),b=function(a,b){for(var c=ha(0,b),e,f=0,ga=a.getElementsByClassName(Ec);e=ga[f++];)d(e,a)&&c.push(e);return c};else e||a.Ma?(d=r(a,{L:1,tag:1,id:1}),b=function(b,c){for(var e=ha(0,c),f,ga=
0,K=b.getElementsByTagName(a.oa());f=K[ga++];)d(f,b)&&e.push(f);return e}):b=function(b,c){for(var d=ha(0,c),e,f=0,ga=b.getElementsByTagName(a.oa());e=ga[f++];)d.push(e);return d};return Wb[a.M]=b}function k(a){a=a||ua;return function(b,d,e){for(var f=0,k=b[Xb];b=k[f++];)ia(b)&&(!e||c(b,e))&&a(b,f)&&d.push(b);return d}}function l(a){return function(b,d,e){for(b=b[ja];b;){if(ia(b)){if(e&&!c(b,e))break;a(b)&&d.push(b)}b=b[ja]}return d}}function qa(a){return function(b,d,e){for(;b=b[ja];)if(!ya||wa(b)){e&&
!c(b,e)||!a(b)||d.push(b);break}return d}}function r(a,b){if(!a)return ua;b=b||{};var c=null;b.L||(c=V(c,wa));b.tag||"*"!=a.tag&&(c=V(c,function(b){return b&&b.tagName==a.oa()}));b.v||C(a.v,function(a,b){var d=new RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=V(c,function(a){return d.test(a.className)});c.count=b});b.I||C(a.I,function(a){var b=a.name;cb[b]&&(c=V(c,cb[b](b,a.value)))});b.aa||C(a.aa,function(a){var b,d=a.na;a.type&&Yb[a.type]?b=Yb[a.type](d,a.ua):d.length&&(b=Fc(d));b&&(c=V(c,b))});b.id||a.id&&
(c=V(c,function(b){return!!b&&b.id==a.id}));c||"default"in b||(c=ua);return c}function t(a){return za(a)%2}function D(a){return!(za(a)%2)}function za(a){var b=a.parentNode,c=0,d=b[Xb],e=a._i||-1,f=b._l||-1;if(!d)return-1;d=d.length;if(f==d&&0<=e&&0<=f)return e;b._l=d;e=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[ja])ia(b)&&(b._i=++c,a===b&&(e=c));return e}function Zb(a){for(;a=a[ja];)if(ia(a))return!1;return!0}function $b(a){for(;a=a[Gc];)if(ia(a))return!1;return!0}function W(a,b){return a?"class"==
b?a.className||"":"for"==b?a.htmlFor||"":"style"==b?a.style.cssText||"":(U?a.getAttribute(b):a.getAttribute(b,2))||"":""}function wa(a){return 1==a.nodeType}function V(a,b){return a?b?function(){return a.apply(window,arguments)&&b.apply(window,arguments)}:a:b}function Vb(a){function b(){0<=r&&(n.id=c(r,p).replace(/\\/g,""),r=-1);if(0<=t){var a=t==p?null:c(t,p);0>">~+".indexOf(a)?n.tag=a:n.ha=a;t=-1}0<=xa&&(n.v.push(c(xa+1,p).replace(/\\/g,"")),xa=-1)}function c(b,d){return La(a.slice(b,d))}a=0<=">~+".indexOf(a.slice(-1))?
a+" * ":a+" ";for(var d=[],e=-1,f=-1,k=-1,l=-1,xa=-1,r=-1,t=-1,v="",y="",D,p=0,H=a.length,n=null,z=null;v=y,y=a.charAt(p),p<H;p++)"\\"!=v&&(n||(D=p,n={M:null,I:[],aa:[],v:[],tag:null,ha:null,id:null,oa:function(){return U?this.zb:this.tag}},t=p),0<=e?"]"==y?(z.na?z.ua=c(k||e+1,p):z.na=c(e+1,p),!(e=z.ua)||'"'!=e.charAt(0)&&"'"!=e.charAt(0)||(z.ua=e.slice(1,-1)),n.aa.push(z),z=null,e=k=-1):"="==y&&(k=0<="|~^$*".indexOf(v)?v:"",z.type=k+y,z.na=c(e+1,p-k.length),k=p+1):0<=f?")"==y&&(0<=l&&(z.value=c(f+
1,p)),l=f=-1):"#"==y?(b(),r=p+1):"."==y?(b(),xa=p):":"==y?(b(),l=p):"["==y?(b(),e=p,z={}):"("==y?(0<=l&&(z={name:c(l+1,p),value:null},n.I.push(z)),f=p):" "==y&&v!=y&&(b(),0<=l&&n.I.push({name:c(l+1,p)}),n.Ma=n.I.length||n.aa.length||n.v.length,n.Rb=n.M=c(D,p),n.zb=n.tag=n.ha?null:n.tag||"*",n.tag&&(n.tag=n.tag.toUpperCase()),d.length&&d[d.length-1].ha&&(n.Ja=d.pop(),n.M=n.Ja.M+" "+n.M),d.push(n),n=null));return d}function ha(a,b){var c=b||[];a&&c.push(a);return c}var Ub=R&&"BackCompat"==document.compatMode,
H=P&&!S("9"),Xb=document.firstChild.children?"children":"childNodes",U=!1,Yb={"*=":function(a,b){return function(c){return 0<=W(c,a).indexOf(b)}},"^=":function(a,b){return function(c){return 0==W(c,a).indexOf(b)}},"$=":function(a,b){return function(c){c=" "+W(c,a);return c.lastIndexOf(b)==c.length-b.length}},"~=":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+W(b,a)+" ").indexOf(c)}},"|=":function(a,b){b=" "+b;return function(c){c=" "+W(c,a);return c==b||0==c.indexOf(b+"-")}},"=":function(a,
b){return function(c){return W(c,a)==b}}},ya="undefined"==typeof document.firstChild.nextElementSibling,ja=ya?"nextSibling":"nextElementSibling",Gc=ya?"previousSibling":"previousElementSibling",ia=ya?wa:ua,cb={checked:function(){return function(a){return a.checked||a.attributes.checked}},"first-child":function(){return $b},"last-child":function(){return Zb},"only-child":function(){return function(a){return $b(a)&&Zb(a)?!0:!1}},empty:function(){return function(a){var b=a.childNodes;for(a=a.childNodes.length-
1;0<=a;a--){var c=b[a].nodeType;if(1===c||3==c)return!1}return!0}},contains:function(a,b){var c=b.charAt(0);if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},not:function(a,b){var c=Vb(b)[0],d={L:1};"*"!=c.tag&&(d.tag=1);c.v.length||(d.v=1);var e=r(c,d);return function(a){return!e(a)}},"nth-child":function(a,b){if("odd"==b)return t;if("even"==b)return D;if(-1!=b.indexOf("n")){var c=b.split("n",2),d=c[0]?"-"==c[0]?-1:parseInt(c[0],10):1,e=c[1]?parseInt(c[1],10):
0,f=0,k=-1;0<d?0>e?e=e%d&&d+e%d:0<e&&(e>=d&&(f=e-e%d),e=e%d):0>d&&(d*=-1,0<e&&(k=e,e=e%d));if(0<d)return function(a){a=za(a);return a>=f&&(0>k||a<=k)&&a%d==e};b=e}var l=parseInt(b,10);return function(a){return za(a)==l}}},Fc=H?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return U?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}},Wb={},Tb={},Sb={},Rb=!!document.querySelectorAll&&(!R||S("526")),v=0,Dc=H?function(a){return U?
a.getAttribute("_uid")||a.setAttribute("_uid",++v)||v:a.uniqueID}:function(a){return a._uid||(a._uid=++v)};a.I=cb;return a}();aa("goog.dom.query",vc);aa("goog.dom.query.pseudos",vc.I);function wc(){this.a=void 0;this.b=[];xc(this)}wc.prototype.S=function(a){var b=[];C(a,function(a){a=yc(this,a);b=E(b,a)},this);if(!b.length)return null;var c=void 0;a=x.b.o;for(var d=[],c=0,e=[],f=0,k=b.length;f<k;++f)1E3>=c+b[f].length?(e.push(b[f]),c+=b[f].length):(c=new I,c.set(a.D,"bv"),c.set(a.$,JSON.stringify(e)),d.push(c),e=[b[f]],c=b[f].length);0<e.length&&(c=new I,c.set(a.D,"bv"),c.set(a.$,JSON.stringify(e)),d.push(c));return d};
function yc(a,b){var c=[],d=void 0,e=void 0,f=void 0,k=[],c=a.a("[data-"+b+"]",void 0);if(0==c.length)return[];d=Na(b);C(c,function(a){f=this.a("[data-"+b+"]",a);if(!(f.length||0<=Oa(this.b,a))){this.b.push(a);for(var c=d,r=[],t=void 0;a!==h.document;)(t=Qa(a,c))&&r.push(t),a=a.parentNode;e=r.reverse().join("::");k.push(String(d).replace(/([A-Z])/g,"-$1").toLowerCase()+"::"+e)}},a);return k}function xc(a){a.a=function(a,c){return vc(a,c)}};function zc(){Nb.call(this);this.a=this.b=this.c=void 0;this.c=new Ob;this.b=new wc;this.a=new Fb(this);new Jb(this);new uc}ma(zc,Nb);ba(zc);function Ac(a,b){var c=a.c.Aa.clone(),d=x.b.o;if(b.B){var e=x.Y.Qa(b.B);c.set(d.ma,e.toString())}q(b.P)&&b.P.length&&c.set(d.rb,JSON.stringify(b.P));q(b.K)&&b.K.length&&c.set(d.Xa,JSON.stringify(b.K));return"pv"===c.get("et",null)&&5<c.V()?c:null};function Y(a,b){this.c=b;this.a=new na(a);this.h=A.Fa();this.b=zc.Fa();!this.c&&Bc(this);x.c.ready(w(this.ab,this,a))}g=Y.prototype;g.wa=function(a){this.a.wa(a)};g.Oa=function(a){this.a.u=a};g.xb=function(){return this.a.u};g.za=function(a,b){var c=this.a;c.B=c.B||{};c.B[a]=b};g.cb=function(a){return this.a.B[a]};g.Gb=function(a){this.za("__uid",a)};g.Ib=function(a){Bc(this,1,a)};g.Jb=function(a,b){var c=mb(document,a);c&&1===c.nodeType?c.innerHTML=Cc(this,!1):Bc(this,0,b)};
g.wb=function(a){(a=mb(document,a))&&1===a.nodeType&&(a.innerHTML=Cc(this,!0))};function Hc(a,b){if(0!==b.V()){var c=x.b.o;L(b,c.Ca,a.a.u);L(b,c.Ea,a.a.ka);L(b,c.ya,a.a.version);L(b,c.Da,x.C.va());c=b.toString();if(""!==c){var d=a.h;d.a.push(a.a.a+c);d.C||(d.C=!0,d.s())}}}g.Cb=function(a){if("object"===typeof a){var b=new I;a=x.Y.Qa(a);var c=x.b.o;b.set(c.D,c.ma);b.set(c.ma,a.toString());Hc(this,b)}};
function Bc(a,b,c){var d=Ac(a.b,a.a);(b||0==b)&&d.set(x.b.o.Ba,b);c&&d.set(x.b.o.lb,c);d&&Hc(a,d)}function Cc(a,b){var c=new I;b||(c=Ac(a.b,a.a));var d=x.b.o;L(c,d.Ba,b?2:0);L(c,d.ya,a.a.version);L(c,d.Ca,a.a.u);L(c,d.Da,x.C.va());L(c,d.Ea,a.a.ka);return'<a href="http://top100.rambler.ru'+(a.a.u?"/home?id="+a.a.u:"")+'" target="_blank"><img src="'+(a.a.a+c.toString())+'" title="Rambler\'s Top100" alt="Rambler\'s Top100" border="0" /></a>'}
g.R=function(){var a;a=this.a;a=a.A?this.b.b.S(a.A):null;var b=x.b.o,c=void 0;if(a)for(var d=0,e=a.length;d<e;++d)c=a[d],c.X()||"bv"===c.get(b.D)&&!c.l(b.$)||Hc(this,c)};g.ab=function(){if(!this.c){var a=this.a;a.A&&Gb(this.b.a,a.A);Sa(this.b.G,"updated",this.$a,!1,this);Sa(this.b.G,"ping",this.bb,!1,this);this.R();h.setTimeout(w(this.R,this),1E3);h.setTimeout(w(this.R,this),2E3);h.setTimeout(w(this.R,this),4E3);h.setTimeout(w(this.R,this),8E3)}};
g.$a=function(){var a=this.b.a.S(this.a.A);a&&Hc(this,a)};g.bb=function(){var a=new I;a.set(x.b.o.D,"ping");Hc(this,a)};Y.prototype.sendCustomVars=Y.prototype.Cb;x.Vb={};function x(a,b){if(b)return new Y(a,b);a&&a.project&&!x.s[a.project]&&(x.s[a.project]=new Y(a,b));return x.s[a.project]}x.s={};x.Wb={};x.yb=0;x.W=function(a,b){var c=void 0!==a?a:"~"+x.yb++,d=new x({},!0);x.s[c]=d;d.wa(c);b&&d.Oa(b);return d};x.Ab=function(a){return x.W(void 0,a)};x.Na=function(a){a=a||"";return x.s[a]||x.W(a)};window.Cerber=x;window.top100=x;var Z=Y.prototype;Z.setAccount=Z.Oa;Z.getAccount=Z.xb;Z.trackPageview=Z.Ib;Z.trackPageviewByLogo=Z.Jb;Z.drawLogoTo=Z.wb;
Z.setCustomVar=Z.za;Z.getCustomVar=Z.cb;Z.sync=Z.Gb;window._top100={};window._top100.createTracker=x.W;window._top100.getTrackerByName=x.Na;window._top100.getTracker=x.Ab;top100Queue=function(){};top100Queue.prototype.push=function(a){for(var b=arguments,c=0;c<b.length;c++)try{if("function"===typeof b[c])b[c]();else{var d="",e=b[c][0],f=e.lastIndexOf(".");0<f&&(d=e.substring(0,f),e=e.substring(f+1));var k=x.Na(d);k[e].apply(k,b[c].slice(1))}}catch(l){}};top100.F="_top100q";
if(window[top100.F]&&q(window[top100.F])){var Ic=new top100Queue;for(window[top100.F]=window[top100.F].reverse();window[top100.F].length;)Ic.push(window[top100.F].pop());window[top100.F]=Ic};})();