(function(){var h=void 0,j=true,l=null,m=false,n=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};function p(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ba(){}function ca(a){var b=[];q(new ba,a,b);return b.join("")}
function q(a,b,c){switch(typeof b){case "string":r(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==l){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),q(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),r(e,c),c.push(":"),q(a,f,c),d=","));c.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var s={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},da=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function r(a,b){b.push('"',a.replace(da,function(a){if(a in s)return s[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return s[a]=e+b.toString(16)}),'"')};function t(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}function u(a){return typeof a!=="undefined"}function w(a){return typeof a==="string"}function x(){return(new Date).getTime()}function z(a,b){if((!!a&&a.constructor===Object)===j)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===m)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===m)break}}
function A(a,b){var c;a:{c=0;for(var d=a.length;c<d;c++)if(b(a[c]))break a;c=-1}if(c>-1)return a[c]}var B=n.setInterval,D=n.clearInterval,E=n.setTimeout;function ea(a){E(a,0)}function fa(){var a=u(n.XDomainRequest);return u(n.XMLHttpRequest)&&"withCredentials"in new n.XMLHttpRequest?new n.XMLHttpRequest:a?new n.XDomainRequest:l}
function ga(a,b,c){var d=fa();d===l?c(l):(F(function(){d.open("GET",a,j)}),d.onload=function(){d.responseText?b(d):c(d)},d.onerror=function(){c(d,"onerror")},d.timeout=1E3,d.ontimeout=function(){c(d,"timeout")},ea(function(){F(function(){d.send(l)})}))}function F(a){try{a()}catch(b){}};var G={};G.B=function(){try{G.create("_cb_test","1",1);var a=G.a("_cb_test");G.remove("_cb_test");return a==="1"}catch(b){return m}};G.a=function(a){a+="=";var b="";z(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),m});return b};
G.create=function(a,b,c){var d=n._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(x()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};G.remove=function(a){return G.a(a)?G.create(a,"",-86400):""};var H={};H.b=function(a){var b=n._sf_async_config;if(!a&&b&&b.noCookies)return l;if(H.b.l!==h)return H.b.l;var a=x()+"",c,d;try{if((d=n.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return H.b.l=d}catch(e){}return H.b.l=l};H.a=function(a){var b=H.b();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&x()>c)?(H.remove(a),""):b.getItem(a)||""};
H.create=function(a,b,c){var d=H.b();if(d){var e=new Date;e.setTime(x()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};H.remove=function(a){var b=H.b();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function I(a){this.p=a||"";this.M=H.b()!==l||G.B();this.J=m;ha(this)}
function ha(a){if(!G.a("_cb_ls")){var b=H.b()!==l,c=G.a("_SUPERFLY_lockout");c&&z(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_lockout",c,600,j)});var d=G.a("_chartbeat3");d&&(a.create("_v__chartbeat3",d,34128E3,j),G.remove("_chartbeat3"));b&&((b=G.a("_chartbeat2"))&&a.create("_chartbeat2",b,34128E3,j),(b=G.a("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,34128E3,j),(b=G.a("_chartbeat5"))&&a.create("_chartbeat5",b,60,j));G.create("_cb_ls","1",34128E3)}}
I.prototype.create=function(a,b,c,d){a=d?a:this.p+a;(H.b()?H:G).create(a,b,c);H.b()&&G.create(a,b,c)};I.prototype.a=function(a,b){var a=b?a:this.p+a,c=(H.b()?H:G).a(a);if(!c&&H.b()&&(c=G.a(a))&&G.a("_cb_ls")){this.J=j;var d;switch(a){case "_SUPERFLY_lockout":d=600;break;case "_chartbeat4":d=60;break;case "_cb_cp":d=60;break;case "_chartbeat3":d=34128E3;break;default:d=34128E3}H.create(a,c,d)}return c};I.prototype.remove=function(a,b){a=b?a:this.p+a;(H.b()?H:G).remove(a);H.b()&&G.remove(a)};function ia(a){var b=ja;a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return l;var c,d=a.ownerDocument.documentElement,e=0,f=u(10)?11:-1;w(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return l}function ja(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")};var ka="z";function J(){u(n._cb_shared)||(n._cb_shared={});return n._cb_shared};function K(a,b){var c=J(),c=(u(h)&&!u(c.m)?h:c.m)||[];c.push.apply(c,arguments);J().m=c};function la(){var a=l;z(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical"){var c=b.href,d="",e="",f="",g="";if(c){g=document.createElement("a");b=n.location;if(!/^https?:/.test(c)&&c.indexOf("javascript:")!==0)if(c.indexOf("//")===0)c=b.protocol+c;else if(c.indexOf("/")===0)d=b.protocol,d=(e=b.port)?d==="http:"&&e==="80"||d==="https:"&&e==="443":j,d=d?"":b.port,c=b.protocol+"//"+b.hostname+(d?":"+d:"")+c;else{d=document.baseURI||b.href;e=d.indexOf("?");e===-1&&(e=d.indexOf("#"));
if(e===-1)e=d.length;e=d.lastIndexOf("/",e);c=e===-1?"/"+c:d.substr(0,e)+"/"+c}g.href=c;d=g.pathname;e=g.search;f=g.protocol;g=g.hash;d.charAt(0)!=="/"&&(d="/"+d);if(f==="")f=b.protocol;f==="javascript:"&&(g=d="")}a=L(d)+e+g;return m}});return a}for(var M={},N=0;N<81;N++)M["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(N)]=j;function ma(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return M[c]?String.fromCharCode(c):"%"+b.toUpperCase()}
function L(a){if(!w(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,ma);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};function na(a){var b,c;b=a.domain;c=n.location.hostname.replace(/^www\./,"");return(n.location.protocol==="https:"?"https:":"http:")+"//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host="+encodeURIComponent(b)+"&domain="+encodeURIComponent(c)+"&path="+encodeURIComponent(a.path)}
function oa(a,b,c){var d,e,f;ga(a,function(a){var g;g=(a=p(a.responseText))&&a.constructor===Object&&w(a.status)&&(a.data&&a.data.constructor===Object||a.data===l)?{C:a.status,f:a.data,N:a.code,O:a.message}:l,a=g;if(a===l)c();else if(a.C==="success"){d={};f=e=0;if(a.f)a.f.experiments&&(d=a.f.experiments),u(a.f.probability_is_lift)&&(e=a.f.probability_is_lift),u(a.f.probability_is_control)&&(f=a.f.probability_is_control);b(d,[e,f])}else c()},c)}
function pa(a,b,c){var d=[],e=b.e;if(e==="l"||e==="c")b=new O("lift_exp","","",b,e),b.i=j,d.push(b);return d=d.concat(qa(a,c,e))}function ra(a,b){var c=[new P("l",a[0],""),new P("c",a[1],""),new P("m",1-a[0]-a[1],"")];return Q(c,b.lift_exp)||c[2]}function qa(a,b,c){var d=[];z(a,function(a,f){var g=sa(f,a,c,b[f]);u(g)&&d.push(g)});return d}
function sa(a,b,c,d){var e=b.location,f,g=b.metadata;if(w(g)&&g.length>0)(g=p(g))&&g.version==2&&(f=g.sub_location);f=u(f)?f:"";var i=[];z(b.variants,function(a,b){i.push(new P(b,parseFloat(a.probability),a.content))});if(b=Q(i,d))return new O(a,e,f,b,c)}function Q(a,b){var c;u(b)&&(c=A(a,function(a){return a.e===b}));u(c)||(c=ta(a));return c}function ta(a){var b=Math.random();return A(a,function(a){b-=a.G;return b<0})}
function ua(a,b,c){var d=n.location.href,e=[encodeURIComponent(a),encodeURIComponent(d),b].join(",");z(c,function(a){e+=","+a.e+","+a.h.e});return e}function va(a,b){if(a===b)return j;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return m;if(c.pop()!==d.pop())return m}return j}
function wa(){var a=n.document.head||n.document.getElementsByTagName("head")[0],b=n.document.createElement("style");b.id="chartbeat-flicker-control-style";b.type="text/css";b.styleSheet?b.styleSheet.cssText="body { visibility: hidden !important; }":b.appendChild(document.createTextNode("body { visibility: hidden !important; }"));a.appendChild(b)}function R(){return n.document.getElementById("chartbeat-flicker-control-style")||n.document.getElementById("chartbeat-body-hider")}
function xa(){var a=R();a&&a.parentNode.removeChild(a)}function O(a,b,c,d,e){this.e=a;this.D=b;this.K=c;this.h=d;this.o=e;this.i=m}function P(a,b,c){this.e=a;this.G=b;this.content=c}function ya(a){var b={};b.s=a.status;b.c=a.code;b.m=a.message;var c=l;if(a.data!==l)c={},c.s=a.data.I,c.g=a.data.o,c.m=a.data.F;b.d=c;return b}function za(a){if(n.document&&n.document.body)a();else var b=B(function(){n.document&&n.document.body&&(D(b),a())},50)};var Aa=function(){var a=/^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,b=/^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/;return function(c,d){var e=l;a:{for(var e=0,f=c.indexOf("/"),g=c.indexOf("'"),i=[];f!==-1;)if(g!==-1&&g<f){g=c.indexOf("'",g+1);if(g==-1){e=l;break a}f=c.indexOf("/",g+1);g=c.indexOf("'",g+1)}else i.push(c.substring(e,f)),e=f+1,f=c.indexOf("/",e);e<c.length&&i.push(c.substring(e,c.length));e=i}if(!e||e.length==0)return d?d:l;var k,o,y,v,C,g=e.shift();if(d)f=d;else{if(g===
"body")f=document.body;else{k=a.exec(g);if(!k)return l;f=document.getElementById(k[1]);if(!f)return l;o=k[2];k=k[3];if(o&&(o==="href"?f.href:f.getAttribute(o))!==k)return l}g=e.shift()}for(;u(g);){k=b.exec(g);if(!k)return l;g=k[1];i=parseInt(k[2],10);o=k[3];k=k[4];if(isNaN(i))return l;y=f.children;C=y.length;if(C===0)return l;for(v=0;v<C;v++){if(y[v].nodeName&&y[v].nodeName.toLowerCase()===g&&(i--,i===0)){f=y[v];if(o&&(o==="href"?f.href:f.getAttribute(o))!==k)return l;break}if(v===C-1)return l}g=
e.shift()}return f}}();function S(a){this.r=a;this.k=[];var b=this.r,a=b.topStorageDomain,b=b.domain,c=n.location.hostname;this.L=a?a:va(c,b)?b:c.replace(/^www\./,"");this.A=new I("_t_");this.j=T;a=ka;J()[a]=j}
function Ba(a){if(!a.v){a.v=j;var b=a.z,c=a.t,d=a.A.a("tests"),e={};d.length>0&&(e=p(d));var f=ra(c,e);a.k=pa(b,f,e);var g=a.k,i={domain:"."+a.L,u:6E4,path:"/"};a.n=function(a){var b,a=a||window.event;if(b=!a?l:ia(a.target||a.srcElement))if(a=Ca(b,g),a.length){var c;if(b===l||typeof b==="undefined")c="unknown";else if(b.tagName==="A"&&b.href)c=b.href;c=ua(c,a[0].o,a);a=(a=G.a("_chartbeat6"))?a.split("::"):[];a.length>=10&&a.splice(0,a.length-10+1);a.push(c);c="_chartbeat6="+a.join("::");a="";i&&i.constructor===
Object&&(i.u&&(b=new Date,b.setTime(b.getTime()+i.u),a+="; expires="+b.toGMTString()),i.domain&&(a+="; domain="+i.domain),i.path&&(a+="; path="+i.path));document.cookie=c+a}};a=t(function(){var a=this.n,b=n.document.body;b.addEventListener?b.addEventListener("click",a,j):b.attachEvent&&b.attachEvent("onclick",a);Da(this,g,f.e)},a);za(a)}}
function Da(a,b,c){var d=x(),e=t(function(){var a=x()-d>=5E3,e=n.document.readyState==="complete",i;a||(i=Ea(b,c));if(a||i||e)D(this.q),Fa(this)},a);a.q=B(e,50);e()}function Fa(a){xa();var b={},c=[],d=m,e="m";z(a.k,function(a){if(a.e==="lift_exp")e=a.h.e;a.i?(d=j,b[a.e]=a.h.e):c.push(a.e)});if(d)b.lift_exp=e,a.A.create("tests",ca(b),3600),e==="m"&&delete b.lift_exp;var f={status:Ga,data:l,code:h,message:h};a.j!==T?(f.status=Ha,f.code=a.j):(a={I:b,o:e,F:c},f.status=Ia,f.data=a);K(["t",ya(f)])}
function Ja(a){var b=a.r;K(["v",function(){a.terminate();Ka(a,b)}])}S.prototype.H=function(a){if(Object.prototype.toString.call(a)==="[object Array]"&&w(a[0])&&a[0]==="readyForTesting")a[1]?Ba(this):this.w=m};function La(a){a.j=Ma;Fa(a)}S.prototype.terminate=function(){this.j=T;var a=this.n,b=n.document.body;b.removeEventListener?b.removeEventListener("click",a,j):b.detachEvent&&b.detachEvent("onclick",a);this.n=h;D(this.q);this.t=this.z=this.k=this.q=l;this.v=m};
function Ka(a,b){Ja(a);if(H.a("_cb_ip")==="1")La(a);else{var c=na(b);if(u(c))u(b.flickerControl)||(b.flickerControl=j),b.flickerControl&&(E(xa,1E3),R()||wa()),oa(c,function(b,c){a.z=b;a.t=c;a.w=j;for(var f=t(a.H,a),g=n._cbm||[];g.length;)f(g.shift());n._cbm={push:f};a.w&&Ba(a)},function(){})}}
function Ea(a,b){var c=j;z(a,function(a){if(!a.i){var e=Aa(a.D);if(e)var f=Aa(a.K,e);if(!e||!f)c=m;else{if(b!=="c"){var g=a.h.content,i;if("textContent"in f)f.textContent=g;else{for(i=f.firstChild;i;)f.removeChild(i),i=f.firstChild;f.appendChild(n.document.createTextNode(g))}}a.anchor=e;a.i=j}}});return c}
function Ca(a,b){var c=[],d,e=101,f=m;z(b,function(b){if(b.e==="lift_exp")c.push(b);else if(!f)if(b.anchor===a)d=b,f=j;else if(b.anchor.href===a.href){var i;var k=b.anchor.getBoundingClientRect(),o=a.getBoundingClientRect();k.right-k.left>0&&k.bottom-k.top>0&&o.right-o.left>0&&o.bottom-o.top>0?(i=Math.max(k.left,o.left)-Math.min(k.right,o.right),k=Math.max(k.top,o.top)-Math.min(k.bottom,o.bottom),i=i<=0?Math.max(k,0):k<=0?i:Math.sqrt(i*i+k*k)):i=h;i<e&&(d=b,e=i)}});d&&c.push(d);return c}
var T=0,Ma=2,Ia="s",Ha="e",Ga="f";var U=n._sf_async_config;U.domain=U.domain||n.location.hostname;U.domain=U.domain.replace(/^www\./,"");var V;a:{var W=l;if(U.useCanonical&&(W=la())){V=W;break a}var X=n.location,W=L(X.pathname),Y=X.search||"",Y=Y.replace(/PHPSESSID=[^&]+/,""),Z=/&utm_[^=]+=[^&]+/ig,$=Z.exec(X.search);$&&(Y=Y.replace(Z,""));Z=/\?utm_[^=]+=[^&]+(.*)/i;($=Z.exec(Y))&&(Y=Y.replace(Z,$[1]!=""?"?"+$[1]:""));V=W+Y}U.path=U.path||V;var Na=new S(U);Ka(Na,U);})();