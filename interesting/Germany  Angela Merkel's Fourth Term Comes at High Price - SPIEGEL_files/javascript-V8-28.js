

var spnetENV_DEFAULT_DOMAIN = 'www.spiegel.de';
var spnetENV_SERVER         = window.location.protocol + '/' + '/www.spiegel.de';
var spnetENV_SERVER_SSL     = 'https:/' + '/www.spiegel.de';
var spnetENV_SERVER_AUBAPI = 'https:/' + '/aubapi.spiegel.de/spplus/prod/realtime';



var spnetENV_CSS_VERSION='8-28';
var spnetENV_JS_VERSION='8-28';

var spnetENV_JWPLAYER_KEY = '6vGg1pMcuxNYA9KEtHWcw1kNq5bhLmvm7XUGzA==';
var spnetENV_JWPLAYER_ADMESSAGE = 'Anzeige xx s';
var spnetENV_NOFLASHPLAYER_LINK = '<a href="/dienste/a-677871.html">mehr...</a>';
var spnetENV_VIDEOPLAYER_PLAYBUTTON_BIG = '<span class="button btn-video-text"       title="Video">Video</span>';

var spnetENV_ForumSponDeServer = 'http:/'+'/app.forum.spiegel.de';
var spnetENV_SponUploadServer = 'http:/'+'/upl.spiegel.de';
var spnetENV_MapShowCategories = ('true' == 'true');

var _sf_startpt=(new Date()).getTime();
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( !jQuery.migrateMute && window.console && window.console.log ) {
//	window.console.log("JQMIGRATE: Logging is active");
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
//		if (typeof spnetENV_TARGET != 'undefined' || typeof spnetENV_STAGE != 'undefined') {
//			if ( console && console.warn && !jQuery.migrateMute ) {
//				console.warn( "JQMIGRATE: " + msg );
//				if ( jQuery.migrateTrace && console.trace ) {
//					console.trace();
//				}
//			}
//		}
		var timeout = 5000;
		if (typeof spNmAjax == 'function') timeout = 10;
		window.setTimeout(
			function() {
				try {
					spNmAjax({
						'sp.site': '102001',
						'sp.event': 'jqm-01',
						'sp.msg': msg
					});
				} catch (e) {}
			}, timeout);
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') may use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldParseJSON = jQuery.parseJSON,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match;

	if ( selector && typeof selector === "string" && !jQuery.isPlainObject( context ) &&
			(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
		// This is an HTML string according to the "old" rules; is it still?
		if ( selector.charAt( 0 ) !== "<" ) {
			migrateWarn("$(html) HTML strings must start with '<' character");
		}
		if ( match[ 3 ] ) {
			migrateWarn("$(html) HTML text after last tag is ignored");
		}
		// Consistently reject any HTML-like string starting with a hash (#9521)
		// Note that this may break jQuery 1.6.x code that otherwise would work.
		if ( match[ 0 ].charAt( 0 ) === "#" ) {
			migrateWarn("HTML string cannot start with a '#' character");
			jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
		}
		// Now process using loose rules; let pre-1.8 play too
		if ( context && context.context ) {
			// jQuery object as context; parseHTML expects a DOM object
			context = context.context;
		}
		if ( jQuery.parseHTML ) {
			return oldInit.call( this, jQuery.parseHTML( match[ 2 ], context, true ),
					context, rootjQuery );
		}
	}
	return oldInit.apply( this, arguments );
};
jQuery.fn.init.prototype = jQuery.fn;

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json && json !== null ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
			context = jQuerySub( context );
		}

		return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i,
	oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.fn.error = function() {
	var args = Array.prototype.slice.call( arguments, 0);
	migrateWarn("jQuery.fn.error() is deprecated");
	args.splice( 0, 0, "error" );
	if ( arguments.length ) {
		return this.bind.apply( this, args );
	}
	// error event should not bubble to window, although it does pre-1.7
	this.triggerHandler.apply( this, args );
	return this;
};

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, null, elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);


})( jQuery, window );
/*!
 * Spon jquery migration helper
 * provide jQuery.browser
 */

(function( jQuery, window, undefined ) {
	jQuery.uaMatch = function( ua ) {
		ua = ua.toLowerCase();

		var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
			/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
			/(msie) ([\w.]+)/.exec( ua ) ||
			ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
			[];

		return {
			browser: match[ 1 ] || "",
			version: match[ 2 ] || "0"
		};
	};	
	
	if ( !jQuery.browser ) {
		matched = jQuery.uaMatch( navigator.userAgent );
		browser = {};

		if ( matched.browser ) {
			browser[ matched.browser ] = true;
			browser.version = matched.version;
		}

		// Chrome is Webkit, but Webkit is also Safari.
		if ( browser.chrome ) {
			browser.webkit = true;
		} else if ( browser.webkit ) {
			browser.safari = true;
		}

		jQuery.browser = browser;
	}
	
})( jQuery, window );
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( event.wheelDelta ) { delta = event.wheelDelta/120; }
    if ( event.detail     ) { delta = -event.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return $.event.dispatch.apply(this, args);
}

})(jQuery);/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var az,Q=this,Y,ak,v,am,T,Z,y,q,aA,aF,av,i,I,h,j,aa,U,aq,X,t,A,ar,af,an,G,l,au,ay,x,aw,aI,f,L,aj=true,P=true,aH=false,k=false,ap=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aI=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function at(aR){var aM,aO,aN,aK,aJ,aQ,aP=false,aL=false;az=aR;if(Y===c){aJ=D.scrollTop();aQ=D.scrollLeft();D.css({overflow:"hidden",padding:0});ak=D.innerWidth()+f;v=D.innerHeight();D.width(ak);Y=b('<div class="jspPane" />').css("padding",aI).append(D.children());am=b('<div class="jspContainer" />').css({width:ak+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aP=az.stickToBottom&&K();aL=az.stickToRight&&B();aK=D.innerWidth()+f!=ak||D.outerHeight()!=v;if(aK){ak=D.innerWidth()+f;v=D.innerHeight();am.css({width:ak+"px",height:v+"px"})}if(!aK&&L==T&&Y.outerHeight()==Z){D.width(ak);return}L=T;Y.css("width","");D.width(ak);am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aR.contentWidth){T=aR.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/ak;q=Z/v;aA=q>1;aF=y>1;if(!(aF||aA)){D.removeClass("jspScrollable");Y.css({top:0,width:am.width()-f});n();E();R();w();ai()}else{D.addClass("jspScrollable");aM=az.maintainPosition&&(I||aa);if(aM){aO=aD();aN=aB()}aG();z();F();if(aM){N(aL?(T-ak):aO,false);M(aP?(Z-v):aN,false)}J();ag();ao();if(az.enableKeyboardNavigation){S()}if(az.clickOnTrack){p()}C();if(az.hijackInternalLinks){m()}}if(az.autoReinitialise&&!aw){aw=setInterval(function(){at(az)},az.autoReinitialiseDelay)}else{if(!az.autoReinitialise&&aw){clearInterval(aw)}}aJ&&D.scrollTop(0)&&M(aJ,false);aQ&&D.scrollLeft(0)&&N(aQ,false);D.trigger("jsp-initialised",[aF||aA])}function aG(){if(aA){am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=am.find(">.jspVerticalBar");aq=U.find(">.jspTrack");av=aq.find(">.jspDrag");if(az.showArrows){ar=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aE(0,-1)).bind("click.jsp",aC);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aE(0,1)).bind("click.jsp",aC);if(az.arrowScrollOnHover){ar.bind("mouseover.jsp",aE(0,-1,ar));af.bind("mouseover.jsp",aE(0,1,af))}al(aq,az.verticalArrowPositions,ar,af)}t=v;am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});av.hover(function(){av.addClass("jspHover")},function(){av.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);av.addClass("jspActive");var s=aJ.pageY-av.position().top;b("html").bind("mousemove.jsp",function(aK){V(aK.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});o()}}function o(){aq.height(t+"px");I=0;X=az.verticalGutter+aq.outerWidth();Y.width(ak-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aF){am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));an=am.find(">.jspHorizontalBar");G=an.find(">.jspTrack");h=G.find(">.jspDrag");if(az.showArrows){ay=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aE(-1,0)).bind("click.jsp",aC);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aE(1,0)).bind("click.jsp",aC);
if(az.arrowScrollOnHover){ay.bind("mouseover.jsp",aE(-1,0,ay));x.bind("mouseover.jsp",aE(1,0,x))}al(G,az.horizontalArrowPositions,ay,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);h.addClass("jspActive");var s=aJ.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aK){W(aK.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});l=am.innerWidth();ah()}}function ah(){am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aF&&aA){var aJ=G.outerHeight(),s=aq.outerWidth();t-=aJ;b(an).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ak-=aJ;G.parent().append(b('<div class="jspCorner" />').css("width",aJ+"px"));o();ah()}if(aF){Y.width((am.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aF){au=Math.ceil(1/y*l);if(au>az.horizontalDragMaxWidth){au=az.horizontalDragMaxWidth}else{if(au<az.horizontalDragMinWidth){au=az.horizontalDragMinWidth}}h.width(au+"px");j=l-au;ae(aa)}if(aA){A=Math.ceil(1/q*t);if(A>az.verticalDragMaxHeight){A=az.verticalDragMaxHeight}else{if(A<az.verticalDragMinHeight){A=az.verticalDragMinHeight}}av.height(A+"px");i=t-A;ad(I)}}function al(aK,aM,aJ,s){var aO="before",aL="after",aN;if(aM=="os"){aM=/Mac/.test(navigator.platform)?"after":"split"}if(aM==aO){aL=aM}else{if(aM==aL){aO=aM;aN=aJ;aJ=s;s=aN}}aK[aO](aJ)[aL](s)}function aE(aJ,s,aK){return function(){H(aJ,s,this,aK);this.blur();return false}}function H(aM,aL,aP,aO){aP=b(aP).addClass("jspActive");var aN,aK,aJ=true,s=function(){if(aM!==0){Q.scrollByX(aM*az.arrowButtonSpeed)}if(aL!==0){Q.scrollByY(aL*az.arrowButtonSpeed)}aK=setTimeout(s,aJ?az.initialDelay:az.arrowRepeatFreq);aJ=false};s();aN=aO?"mouseout.jsp":"mouseup.jsp";aO=aO||b("html");aO.bind(aN,function(){aP.removeClass("jspActive");aK&&clearTimeout(aK);aK=null;aO.unbind(aN)})}function p(){w();if(aA){aq.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageY-aP.top-I,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageY-aS.top-A/2,aQ=v*az.scrollPagePercent,aR=i*aQ/(Z-v);if(aN<0){if(I-aR>aT){Q.scrollByY(-aQ)}else{V(aT)}}else{if(aN>0){if(I+aR<aT){Q.scrollByY(aQ)}else{V(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}if(aF){G.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageX-aP.left-aa,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageX-aS.left-au/2,aQ=ak*az.scrollPagePercent,aR=j*aQ/(T-ak);if(aN<0){if(aa-aR>aT){Q.scrollByX(-aQ)}else{W(aT)}}else{if(aN>0){if(aa+aR<aT){Q.scrollByX(aQ)}else{W(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(aq){aq.unbind("mousedown.jsp")}}function ax(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(av){av.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aJ){if(!aA){return}if(s<0){s=0}else{if(s>i){s=i}}if(aJ===c){aJ=az.animateScroll}if(aJ){Q.animate(av,"top",s,ad)}else{av.css("top",s);ad(s)}}function ad(aJ){if(aJ===c){aJ=av.position().top}am.scrollTop(0);I=aJ;var aM=I===0,aK=I==i,aL=aJ/i,s=-aL*(Z-v);if(aj!=aM||aH!=aK){aj=aM;aH=aK;D.trigger("jsp-arrow-change",[aj,aH,P,k])}u(aM,aK);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aM,aK]).trigger("scroll")}function W(aJ,s){if(!aF){return}if(aJ<0){aJ=0}else{if(aJ>j){aJ=j}}if(s===c){s=az.animateScroll}if(s){Q.animate(h,"left",aJ,ae)
}else{h.css("left",aJ);ae(aJ)}}function ae(aJ){if(aJ===c){aJ=h.position().left}am.scrollTop(0);aa=aJ;var aM=aa===0,aL=aa==j,aK=aJ/j,s=-aK*(T-ak);if(P!=aM||k!=aL){P=aM;k=aL;D.trigger("jsp-arrow-change",[aj,aH,P,k])}r(aM,aL);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aM,aL]).trigger("scroll")}function u(aJ,s){if(az.showArrows){ar[aJ?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aJ,s){if(az.showArrows){ay[aJ?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aJ){var aK=s/(Z-v);V(aK*i,aJ)}function N(aJ,s){var aK=aJ/(T-ak);W(aK*j,s)}function ab(aW,aR,aK){var aO,aL,aM,s=0,aV=0,aJ,aQ,aP,aT,aS,aU;try{aO=b(aW)}catch(aN){return}aL=aO.outerHeight();aM=aO.outerWidth();am.scrollTop(0);am.scrollLeft(0);while(!aO.is(".jspPane")){s+=aO.position().top;aV+=aO.position().left;aO=aO.offsetParent();if(/^body|html$/i.test(aO[0].nodeName)){return}}aJ=aB();aP=aJ+v;if(s<aJ||aR){aS=s-az.verticalGutter}else{if(s+aL>aP){aS=s-v+aL+az.verticalGutter}}if(aS){M(aS,aK)}aQ=aD();aT=aQ+ak;if(aV<aQ||aR){aU=aV-az.horizontalGutter}else{if(aV+aM>aT){aU=aV-ak+aM+az.horizontalGutter}}if(aU){N(aU,aK)}}function aD(){return -Y.position().left}function aB(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aB()<10)}function B(){var s=T-ak;return(s>20)&&(s-aD()<10)}function ag(){am.unbind(ac).bind(ac,function(aM,aN,aL,aJ){var aK=aa,s=I;Q.scrollBy(aL*az.mouseWheelSpeed,-aJ*az.mouseWheelSpeed,false);return aK==aa&&s==I})}function n(){am.unbind(ac)}function aC(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aJ,aL=[];aF&&aL.push(an[0]);aA&&aL.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aO){if(aO.target!==this&&!(aL.length&&b(aO.target).closest(aL).length)){return}var aN=aa,aM=I;switch(aO.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aO.keyCode;aK();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aJ=aO.keyCode==s&&aN!=aa||aM!=I;return !aJ}).bind("keypress.jsp",function(aM){if(aM.keyCode==s){aK()}return !aJ});if(az.hideFocus){D.css("outline","none");if("hideFocus" in am[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in am[0]){D.attr("hideFocus",false)}}function aK(){var aN=aa,aM=I;switch(s){case 40:Q.scrollByY(az.keyboardSpeed,false);break;case 38:Q.scrollByY(-az.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*az.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*az.scrollPagePercent,false);break;case 39:Q.scrollByX(az.keyboardSpeed,false);break;case 37:Q.scrollByX(-az.keyboardSpeed,false);break}aJ=aN!=aa||aM!=I;return aJ}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aL,aJ,aK=escape(location.hash);try{aL=b(aK)}catch(s){return}if(aL.length&&Y.find(aK)){if(am.scrollTop()===0){aJ=setInterval(function(){if(am.scrollTop()>0){ab(aK,true);b(document).scrollTop(am.position().top);clearInterval(aJ)}},50)}else{ab(aK,true);b(document).scrollTop(am.position().top)}}}}function ai(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ai();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aJ;if(s.length>1){aJ=s[1];if(aJ.length>0&&Y.find("#"+aJ).length>0){ab("#"+aJ,true);return false}}})}function ao(){var aK,aJ,aM,aL,aN,s=false;am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aO){var aP=aO.originalEvent.touches[0];aK=aD();aJ=aB();aM=aP.pageX;aL=aP.pageY;aN=false;s=true}).bind("touchmove.jsp",function(aR){if(!s){return}var aQ=aR.originalEvent.touches[0],aP=aa,aO=I;Q.scrollTo(aK+aM-aQ.pageX,aJ+aL-aQ.pageY);aN=aN||Math.abs(aM-aQ.pageX)>5||Math.abs(aL-aQ.pageY)>5;
return aP==aa&&aO==I}).bind("touchend.jsp",function(aO){s=false}).bind("click.jsp-touchclick",function(aO){if(aN){aN=false;return false}})}function g(){var s=aB(),aJ=aD();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ap.append(Y.children()));ap.scrollTop(s);ap.scrollLeft(aJ)}b.extend(Q,{reinitialise:function(aJ){aJ=b.extend({},az,aJ);at(aJ)},scrollToElement:function(aK,aJ,s){ab(aK,aJ,s)},scrollTo:function(aK,s,aJ){N(aK,aJ);M(s,aJ)},scrollToX:function(aJ,s){N(aJ,s)},scrollToY:function(s,aJ){M(s,aJ)},scrollToPercentX:function(aJ,s){N(aJ*(T-ak),s)},scrollToPercentY:function(aJ,s){M(aJ*(Z-v),s)},scrollBy:function(aJ,s,aK){Q.scrollByX(aJ,aK);Q.scrollByY(s,aK)},scrollByX:function(s,aK){var aJ=aD()+Math[s<0?"floor":"ceil"](s),aL=aJ/(T-ak);W(aL*j,aK)},scrollByY:function(s,aK){var aJ=aB()+Math[s<0?"floor":"ceil"](s),aL=aJ/(Z-v);V(aL*i,aK)},positionDragX:function(s,aJ){W(s,aJ)},positionDragY:function(aJ,s){V(aJ,s)},animate:function(aJ,aM,s,aL){var aK={};aK[aM]=s;aJ.animate(aK,{duration:az.animateDuration,easing:az.animateEase,queue:false,step:aL})},getContentPositionX:function(){return aD()},getContentPositionY:function(){return aB()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aD()/(T-ak)},getPercentScrolledY:function(){return aB()/(Z-v)},getIsScrollableH:function(){return aF},getIsScrollableV:function(){return aA},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:function(){m()},destroy:function(){g()}});at(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);/*! jQuery UI - v1.10.1 -- * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-fade.js, jquery.ui.effect-highlight.js, jquery.ui.effect-slide.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=this.data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(e(r[0]).css("zIndex"),10)||0,e(r).each(function(n){e(this).css("zIndex",t+n)}),this.css("zIndex",t+r.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p)return!1;n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e)t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s);this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p)return;f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)}):r(n.alsoResize)},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)}})})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r,i=this.element[0].nodeName.toLowerCase(),s=i==="textarea",o=i==="input";this.isMultiLine=s?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty();this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){var n={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},r={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open")},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB)return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height(),n.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,o={};e.each(t,function(e,t){i._setOption(e,t),e in n&&(s=!0),e in r&&(o[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_createOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(t){!e(t.target).closest(".ui-dialog").length&&!e(t.target).closest(".ui-datepicker").length&&(t.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal)return;this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()}})})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];n=r.values&&r.values.length||1,i.length>n&&(i.slice(n).remove(),i=i.slice(0,n));for(t=i.length;t<n;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),!this.range||!this.range.length?(this.range=e("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"):this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}),this.range.addClass(n+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):this.range=e([])},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;t==="range"&&this.options.range===!0&&(n==="min"?(this.options.value=this._values(0),this.options.values=null):n==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;if(this.options.values&&this.options.values.length){n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},click:function(e){e.preventDefault()},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.10.1",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return arguments.length>1?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass.apply(this,arguments)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.1",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
/*  http://www.appelsiini.net/projects/lazyload */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);/**
 * jQuery-viewport-checker - v1.8.7 - 2015-12-17
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2015 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},f=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")||-1!=navigator.userAgent.toLowerCase().indexOf("windows phone")?"body":"html";return this.checkElements=function(){var b,g;c.scrollHorizontal?(b=a(f).scrollLeft(),g=b+e.width):(b=a(f).scrollTop(),g=b+e.height),d.each(function(){var d=a(this),f={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(f,c),a.extend(f,h),!d.data("vp-animated")||f.repeat){String(f.offset).indexOf("%")>0&&(f.offset=parseInt(f.offset)/100*e.height);var i=f.scrollHorizontal?d.offset().left:d.offset().top,j=f.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+f.offset,l=f.scrollHorizontal?k+d.width():k+d.height();f.invertBottomOffset&&(l-=2*f.offset),g>k&&l>b?(d.removeClass(f.classToRemove),d.addClass(f.classToAdd),f.callbackFunction(d,"add"),g>=j&&i>=b?d.addClass(f.classToAddForFullView):d.removeClass(f.classToAddForFullView),d.data("vp-animated",!0),f.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(f.classToAdd)})):d.hasClass(f.classToAdd)&&f.repeat&&(d.removeClass(f.classToAdd+" "+f.classToAddForFullView),f.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map
(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function q(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function x(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;x(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);x(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,D=null;function H(){if(null===C){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}C=""!==a.style.font}return C}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",y=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){null===D&&(D=!!window.FontFace);if(D){var J=new Promise(function(a,b){function e(){(new Date).getTime()-E>=y?b():document.fonts.load(I(c,c.family),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){setTimeout(c,y)});Promise.race([K,J]).then(function(){a(c)},function(){b(c)})}else m(function(){function r(){var b;if(b=-1!=f&&
-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==t&&g==t&&h==t||f==u&&g==u&&h==u||f==v&&g==v&&h==v)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=y)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===
a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,r();G=setTimeout(F,50)}}var e=new q(k),n=new q(k),p=new q(k),f=-1,g=-1,h=-1,t=-1,u=-1,v=-1,d=document.createElement("div"),G=0;d.dir="ltr";w(e,I(c,"sans-serif"));w(n,I(c,"serif"));w(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t=e.a.offsetWidth;u=n.a.offsetWidth;v=p.a.offsetWidth;F();z(e,function(a){f=a;r()});w(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;r()});w(n,I(c,'"'+
c.family+'",serif'));z(p,function(a){h=a;r()});w(p,I(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;!function(a,b){"use strict";var c=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},d=function(){var b=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return b&&a("html").css("cursor","pointer").on("click",a.noop),b}(),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}(),f=function(){return!!b.PointerEvent}(),g=function(a,b,d){var e,f=c.menuClass;b.cssArrows&&(f+=" "+c.menuArrowClass),e=d?"addClass":"removeClass",a[e](f)},h=function(b,d){return b.find("li."+d.pathClass).slice(0,d.pathLevels).addClass(d.hoverClass+" "+c.bcClass).filter(function(){return a(this).children(d.popUpSelector).hide().show().length}).removeClass(d.pathClass)},i=function(a,b){var d=b?"addClass":"removeClass";a.children("a")[d](c.anchorClass)},j=function(a){var b=a.css("ms-touch-action"),c=a.css("touch-action");c=c||b,c="pan-y"===c?"auto":"pan-y",a.css({"ms-touch-action":c,"touch-action":c})},k=function(a){return a.closest("."+c.menuClass)},l=function(a){return k(a).data("sfOptions")},m=function(){var b=a(this),c=l(b);clearTimeout(c.sfTimer),b.siblings().superfish("hide").end().superfish("show")},n=function(b){b.retainPath=a.inArray(this[0],b.$path)>-1,this.superfish("hide"),this.parents("."+b.hoverClass).length||(b.onIdle.call(k(this)),b.$path.length&&a.proxy(m,b.$path)())},o=function(){var b=a(this),c=l(b);d?a.proxy(n,b,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(n,b,c),c.delay))},p=function(b){var c=a(this),d=l(c),e=c.siblings(b.data.popUpSelector);return d.onHandleTouch.call(e)===!1?this:void(e.length>0&&e.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type||"pointerdown"===b.type?c.trigger("focus"):a.proxy(m,c.parent("li"))()))},q=function(b,c){var g="li:has("+c.popUpSelector+")";a.fn.hoverIntent&&!c.disableHI?b.hoverIntent(m,o,g):b.on("mouseenter.superfish",g,m).on("mouseleave.superfish",g,o);var h="MSPointerDown.superfish";f&&(h="pointerdown.superfish"),d||(h+=" touchend.superfish"),e&&(h+=" mousedown.superfish"),b.on("focusin.superfish","li",m).on("focusout.superfish","li",o).on(h,"a",c,p)};return{hide:function(b){if(this.length){var c=this,d=l(c);if(!d)return this;var e=d.retainPath===!0?d.$path:"",f=c.find("li."+d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),g=d.speedOut;if(b&&(f.show(),g=0),d.retainPath=!1,d.onBeforeHide.call(f)===!1)return this;f.stop(!0,!0).animate(d.animationOut,g,function(){var b=a(this);d.onHide.call(b)})}return this},show:function(){var a=l(this);if(!a)return this;var b=this.addClass(a.hoverClass),c=b.children(a.popUpSelector);return a.onBeforeShow.call(c)===!1?this:(c.stop(!0,!0).animate(a.animation,a.speed,function(){a.onShow.call(c)}),this)},destroy:function(){return this.each(function(){var b,d=a(this),e=d.data("sfOptions");return e?(b=d.find(e.popUpSelector).parent("li"),clearTimeout(e.sfTimer),g(d,e),i(b),j(d),d.off(".superfish").off(".hoverIntent"),b.children(e.popUpSelector).attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")}),e.$path.removeClass(e.hoverClass+" "+c.bcClass).addClass(e.pathClass),d.find("."+e.hoverClass).removeClass(e.hoverClass),e.onDestroy.call(d),void d.removeData("sfOptions")):!1})},init:function(b){return this.each(function(){var d=a(this);if(d.data("sfOptions"))return!1;var e=a.extend({},a.fn.superfish.defaults,b),f=d.find(e.popUpSelector).parent("li");e.$path=h(d,e),d.data("sfOptions",e),g(d,e,!0),i(f,!0),j(d),q(d,e),f.not("."+c.bcClass).superfish("hide",!0),e.onInit.call(this)})}}}();a.fn.superfish=function(b,d){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist on jQuery.fn.superfish"):c.init.apply(this,arguments)},a.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,onDestroy:a.noop,onHandleTouch:a.noop}}(jQuery,window);var spLanguage = 'de';
var sp_webcfg_global;

if (!window.console) {
    window.console = {};
    window.console.log = function (text) {}
}

function goURL(frmlrname){
	adresse = document.forms[frmlrname].to.options[document.forms[frmlrname].to.selectedIndex].value;
	if(adresse=="") adresse = "javascript:void(0)";
	if(adresse.substr(0,1) == '/') adresse = spnetENV_SERVER + adresse;
	window.location = adresse;
}

function spon_popup(seite,breite,hoehe,scroll,rsize) {
	sbars = (scroll==1)? "yes" : "no";
	rsize = (rsize==1)? "yes" : "no";
	if(seite.substr(0,1) == '/') seite = spnetENV_SERVER + seite;
	var win_name = breite+hoehe;
	var win_attr = "menubar=no,location=no,directories=no,toolbar=no,screenX=0,screenY=0";
	win_attr += ",width=" + breite + ",height=" + hoehe + ",scrollbars=" + sbars + ",resizable=" + rsize;
	sponWin = open(seite,win_name,win_attr);
	if(sponWin != null) sponWin.focus();
}

function spCounterGallery(galleryid) {
	spCounter('/fotostrecke/fotostrecke-' + galleryid + '-count.html');
}
function spCounterFlash(flashid) {
	spCounter('/flash/flash-' + flashid + '-count.html');
}
function spCounter(url) {
	if (typeof(spon_vdz_countframe) != 'undefined') spon_vdz_countframe.location.href = spnetENV_SERVER + url;
}

function SPONgetCookie (name) {
	function SPONgetCookieVal (offset) {
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;
		return unescape(document.cookie.substring(offset, endstr));
	}
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return SPONgetCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

function spGetHashParams() {
	var loc=(document.location+"");
	var pos=loc.indexOf("#");
	if (pos == -1)
		return {};
	var hashQs=loc.substring(pos+1, loc.length);
	return spSplitParams(hashQs);
}

function spGetHashParam(name) {
	try {
		var params=spGetHashParams();
		var param = params[name];
		if (param != null) return param;
	} catch (e) {}
	return null;
}

function spStripHashParams(url) {
	var pos=url.indexOf("#");
	if (pos == -1)
		return url;
	url = url.substring(0,pos);
	return url;
}

function spHasHashParams() {
	var loc=(document.location+"");
	var pos=loc.indexOf("#");
	if (pos == -1)
		return false;
	return true;
}

function spSplitParams(params) {
	var result={};
	var pairs=params.split("&");
	for (var i=0; i < pairs.length; i++) {
		var kv=pairs[i].split("=");
		if (kv.length == 2) 
			result[kv[0]]=decodeURIComponent(kv[1]);
	}
	return result;
}
function spShowOASPos(pos) {
	var color='red';
	if (typeof OAS_listpos != 'undefined' && typeof OAS_allposlist != 'undefined') {
		var searchpos = new RegExp('(^|,)'+pos+'(,|$)');
		if (searchpos.exec(OAS_listpos)) {
			color='lightgreen';
		} else if (searchpos.exec(OAS_allposlist)) {
			color='yellow';
		}
	}
	document.write('<div class="qc-oas-pos '+pos+'" style="background-color:'+color+';">Ad: '+pos+'</div>');
	return 'SHOWPOS';
}


function spOpenLargePicture(page, width, height) {
	spon_popup(page,width+20,height+25,false,false);	
}

function spSetCookie(name, value, daystoexpire, path, domain, secure) {

	var expires = new Date();
	expires.setTime(expires.getTime() + (daystoexpire * 86400000));

	document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
} 

function spGetCookie (name) {
	function SPONgetCookieVal (offset) {
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;
		return unescape(document.cookie.substring(offset, endstr));
	}
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return SPONgetCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

// 
function spHPTeaserInit(allchannels) {
	spHPTeaserLen = {};
	var cookie = SPONgetCookie('spHPTeaser');
	if (cookie != null) {
		var channel = cookie.split(' ');

		for (var i in channel) {
			spHPTeaserLen[channel[i]] = 1;
		}
	}
	var allchannelslist = allchannels.split(' ');
	for (var c in allchannelslist) {
		spHPTeaserToggle(allchannelslist[c],(typeof(spHPTeaserLen[allchannelslist[c]]) == 'undefined' ? 'less' : 'more'),0);
	}
	return false;
}

function spHPTeaserToggle(channelname, what, save) {
	if (typeof(spHPTeaserLen) == 'undefined') {
		spHPTeaserLen = {};
	}
	if (what == 'more') {
		spHPTeaserLen[channelname] = '1';
		document.getElementById('spRTmore_'+channelname).style.display = 'block';
		document.getElementById('spRTless_'+channelname).style.display = 'none';
	} else if (what == 'less'){
		if (typeof(spHPTeaserLen[channelname]) != 'undefined') {
			delete spHPTeaserLen[channelname];
		}
		document.getElementById('spRTmore_'+channelname).style.display = 'none';
		document.getElementById('spRTless_'+channelname).style.display = 'block';
	} else {
		return false;
	}
	
	if (save == 1) {
		var cookie = '';
		for (var c in spHPTeaserLen) {
			cookie = cookie + (cookie.length > 0 ? ' ' : '') + c
		}
		spSetCookie('spHPTeaser',cookie,365);
	}
	return false;
}

function spSetObjectHeight(id,newSize) {
    document.getElementById(id).height = newSize;
}
function spSetObjectSize(id,newWidth,newHeight) {
    document.getElementById(id).height = newHeight;
    document.getElementById(id).width  = newWidth;
}

// 
// 
(function($) {

	var spBrowserDetector = function(options) {

		var settings = $.extend({
			'ua' : navigator.userAgent.toLowerCase(),
			/*  */
			'href' : window.location.href
		}, options);
		
		return {
			getUserAgent : function () {
				return settings.ua;
			},
			isFirefox : function() {
				return settings.ua.search(/firefox/i) > -1;
			},
			isInternetExplorer : function() {
				/*  */
				return !!document.documentMode && !this.isWindowsPhone();
			},
			isEdge : function() {
				/*  */
				return settings.ua.search(/edge/i) > -1 && !this.isWindowsPhone();
			},
			isSafari : function() {
				return settings.ua.search(/safari/i) > -1
					&& !this.isEdge()
					&& !this.isIPhone() && !this.isIPad()
					&& !this.isAndroid() && !this.isAndroid4() && !this.isChrome() 
					&& !this.isBlackBerry() && !this.isOpera();

			},
			isChrome : function() {
				return settings.ua.search(/chrome/i) > -1
					&& !this.isEdge()
					&& !this.isAndroid();
			},
			isOpera : function() {
				return settings.ua.search(/opera/i) > -1;
			},			
			isIDevice : function() {
				return (this.isIPad() || this.isIPhone());
			},
			isAndroid : function() {
				return settings.ua.search(/android/i) > -1;
			},
			isAndroid4 : function() {
				return settings.ua.search(/android 4/i) > -1;
			},
			isBlackBerry : function() {
				return settings.ua.search(/blackberry/i) > -1;
			},
			isIPad : function() {
				return settings.ua.search(/ipad/i) > -1;
			},
			isIPhone : function() {
				return settings.ua.search(/(iphone|ipod)/i) > -1;			
			},

			isWindowsPhone : function() {
				return (settings.ua.search(/windows phone/i) > -1 && settings.ua
						.search(/iemobile/i) > -1)
			},
			isMobileDevice : function() {
				return (this.isIDevice() || this.isAndroid() || this.isWindowsPhone());
			},

			// 
			isTouchDevice : function() {
				//  
				// 
				return false;
				// 
			},

			/*  */
			isWww : function() {
				return settings.href.search(/spiegel.de/i) > -1 && !this.isMobile() && !this.isApp();
			},
			isMobile : function() {
				return settings.href.search(/m.spiegel.de/i) > -1;
			},
			isApp : function() {
				return settings.href.search(/a.spiegel.de/i) > -1;
			},
			
			/*  */ 
			isDevice : function() {
				return this.isIDevice();
			},
			isiPad : function() {
				return this.isIPad();
			},
			isBlackberry : function() {
				return this.isBlackBerry();
			}
		}
	};

	$.fn.spBrowserDetector = function(method) {
		return new spBrowserDetector();
	};
})(jQuery);

var spUA = $().spBrowserDetector();

//
//
function touchDetect() {
	window.addEventListener('touchstart', function onFirstTouch() {
		// 
		document.getElementsByTagName('HTML')[0].classList.add('touch-device');
		// 
		// 
		// 
		// 
		// 
		window.removeEventListener('touchstart', onFirstTouch, false);
	}, false);
}

/*  */

function spUtfSubmit(f) {
	if (navigator.appVersion.toLowerCase().indexOf("msie 6.") > 0 || navigator.appVersion.toLowerCase().indexOf("msie 7.") > 0) {  
		var url=f.action + '?';
		for (i = 0; i < f.elements.length; i++) {
			if (f.elements[i].name != 'undefined' && f.elements[i].name != '') {
				if (i>0) url += '&';
				url += f.elements[i].name + '=' + encodeURIComponent(f.elements[i].value)
			}
		}
		this.location.href=url;
		return false;
	} else {
		return true;
	}
}

function spAjax(url, data, callback) {
	$.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
	})
	.done(function( response ) {
	    callback({ajaxSuccess: true, data: response} );
	})
	.fail(function(response, textStatus, errorThrown) {
		callback({ajaxSuccess: false, text: textStatus, error: errorThrown} );
	});
}

// 
function spLaterpayTooltipOnHover() {
	var tooltipContent = $('<div class="laterpay-tooltip"><div class="strong-div"><strong>Sofort lesen, sp&auml;ter zahlen</strong></div><div class="list"><span class="list-item">Keine Bindung</span><span class="list-item">Keine Vorab-Registrierung</span><span class="list-item">Sie bezahlen erst, wenn Sie eine Summe von f&uuml;nf Euro erreichen</div></div>');
    var tooltipContentBento = $('<div class="laterpay-tooltip"><div class="strong-div"><strong>Das junge Angebot von SPIEGEL ONLINE</strong></div><div class="list"><span class="list-item">Das Beste aus dem Web</span><span class="list-item">Exklusive Storys</span><span class="list-item">Und die News des Tages</div></div>');
    var tooltipContentDaily = $('<div class="laterpay-tooltip"><div class="strong-div"><strong>Das Wichtigste vom Tag, das Beste f&uuml;r den Abend:</strong></div><div class="list"><span class="list-item">Erster Monat gratis</span><span class="list-item">Dann nur 6,99 Euro pro Monat</span><span class="list-item">Jederzeit k&uuml;ndbar</span><span class="list-item">News, Service und Exklusives</div></div>');
    
    var tooltipArea = $('<span class="laterpay-tooltip-area"></span>');
    var tooltipAreaBento = $('<span class="laterpay-tooltip-area"></span>');
	var tooltipAreaDaily = $('<span class="laterpay-tooltip-area"></span>');
   
    if ($('.centerpage').length > 0 || $('#home').length > 0) {
        $('.article-icon-big .article-icon.spiegelplus').append(tooltipArea);

        $('.article-icon-big .article-icon.spiegelplus .laterpay-tooltip-area').hover(
               function () {
                      $(this).append(tooltipContent);
               }, function () {
                      $('.laterpay-tooltip').remove();
               }
        );
        
        $('.article-icon-big .article-icon.bento').append(tooltipAreaBento);

        $('.article-icon-big .article-icon.bento .laterpay-tooltip-area').hover(
               function () {
                      $(this).append(tooltipContentBento);
               }, function () {
                      $('.laterpay-tooltip').remove();
               }
        );
        
        $('.article-icon-big .article-icon.spiegeldaily').append(tooltipAreaDaily);

        $('.article-icon-big .article-icon.spiegeldaily .laterpay-tooltip-area').hover(
               function () {
                      $(this).append(tooltipContentDaily);
               }, function () {
                      $('.laterpay-tooltip').remove();
               }
        );
    }
}

// 
// 
(function() {
	var spiegelsans		= new FontFaceObserver('SpiegelSansWeb');
	var fontawesome		= new FontFaceObserver('FontAwesome');
	var misobold		= new FontFaceObserver('MisoBold');
	var spiegelserif	= new FontFaceObserver('SpiegelSerifWeb');

	if($.cookie('spiegelsans')) {
		document.documentElement.className += ' spiegelsans';
	} else {
		spiegelsans.load().then(function () {
			document.documentElement.className += ' spiegelsans';
			$.cookie('spiegelsans', '1', { expires: 3, path: '/' });
		});
	}

	if($.cookie('fontawesome')) {
		document.documentElement.className += ' fontawesome';
	} else {
		fontawesome.load().then(function () {
			document.documentElement.className += ' fontawesome';
			$.cookie('fontawesome', '1', { expires: 3, path: '/' });
		});
	}

	if($.cookie('misobold')) {
		document.documentElement.className += ' misobold';
	} else {
		misobold.load().then(function () {
			document.documentElement.className += ' misobold';
			$.cookie('misobold', '1', { expires: 3, path: '/' });
		});
	}
	
	if($.cookie('spiegelserif')) {
		document.documentElement.className += ' spiegelserif';
	} else {
		spiegelserif.load().then(function () {
			document.documentElement.className += ' spiegelserif';
			$.cookie('spiegelserif', '1', { expires: 3, path: '/' });
		});
	}
})();


//
function toggleHamburger() {
	$('.js-hamburger > [class*="-icon"]').each(function() {
		$(this).toggleClass('cross-icon hamburger-icon');
	});
}

//
function toggleSubNav() {
	var channelName = '';
	
	$('.js-main-navigation .js-show-sub-nav').each(function() {
		$(this).on('click', function(e) {
			var clicked = $(this).nextAll('.js-channel-sub-nav');
			var visible = $('.js-main-navigation .js-channel-sub-nav.visible');
			visible.not(clicked).removeClass('visible'); // 
			clicked.toggleClass('visible');				 // 
			channelName = $(this).attr('id');
			e.stopPropagation();
		});
	});
	
	//Google Analytics - click on channel
	$('.js-main-navigation > ul > li > a').each(function(){
		$(this).on('click', function(e){
			if(!$(this).hasClass('js-show-sub-nav')) {				
				var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
				var pathname = 'menu > channel: '+ $(this).text().toLowerCase();
				if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
			}
		});
	});
	
	//Google Analytics - click on sub nav in main nav
	$('.js-main-navigation .nav-channel-sub-entry > li > a').each(function(){
		$(this).on('click', function(e){
			var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
			var pathname = 'menu > channel: '+ channelName  + ' | sub: '+ $(this).text().toLowerCase() ;
			if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
		});
	});
	
	//Google Analytics - click on partner sub nav in main nav
	$('.js-main-navigation .nav-channel-partner-entry > li > a').each(function(){
		$(this).on('click', function(e){
			var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
			var pathname = 'menu > channel: '+ channelName + ' | ad: '+ $(this).text().toLowerCase() ;
			if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
		});
	});
}

//
function setGaEventRessort(ressort, sub) {	
	var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
	var pathname = 'menu > channel: '+ ressort + ' | sub: '+ sub;
	if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);

}

//
function setGaEventTopRessort(ressort) {	
	var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
	var menu = (ressort == 'more') ? 'more' : ('top-ressort > channel: '+ ressort);
	if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, menu);	
}

//
function setGaEventHeader(headerNav) {	
	var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
	var menu = 'menu > header: ' + headerNav;
	if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, menu);	
}

//
function hideSubNav() {
	$('.js-main-navigation .js-channel-sub-nav.visible').removeClass('visible');
}

// 
function toggleMainNav(element) {
	element.on('click.hamburger', function(e) {
		toggleHamburger();

		if($('.js-hamburger').is(element)) {
			var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
			var status = $('.js-hamburger .hamburger-icon').length ? 'close' : 'menu';
			if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, status);
		}
		
		hideSubNav();
		$('.js-main-navigation').toggle();
		$('#js-header-search').hide();

		$('.js-main-navigation').on('click.tmp', function(etmp) {
			etmp.stopPropagation();
			$('.js-main-navigation .js-hamburger').off('click.tmp');
		});
		
		if ($('.js-main-navigation').css('display') == 'block') {
			$('body').on('click.hamburger-global', function( event ) {
				$('.js-main-navigation .js-hamburger').click();
			});
		}
		else {
			$('body').off('click.hamburger-global');
		}
		e.stopPropagation();
	});
}


// 
// 
function expandTopNav(element) {
	if (spUA.isIPad() || $('html').hasClass('touch-device')) {
			
        var touches = null;
        
        element.on('click', function(e) {
            var id = $(this).attr("data-cid");
            if(touches != id) {
                e.preventDefault();
                touches = id;
				
				var channelId = $(this).attr('data-cid');
				var subnav = $('.channel-nav > li[data-cid="' + channelId + '"] > .js-channel-sub-nav');
				if(subnav.length > 0 && !$(this).hasClass('js-subnav-inject')) {
					$(this).addClass('js-subnav-inject');
					subnav.clone().appendTo($(this));			
					
					//	Google Analytics - click on sub nav in top nav
					$('.meta-top .js-subnav-inject .nav-channel-sub-entry > li > a').each(function(){
						$(this).on('click', function(e){
							e.stopPropagation();
							var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
							var pathname = 'top-ressort > channel: '+ $(this).closest('ul.nav-channel-sub-entry').parent().attr('id') + ' | sub: '+ $(this).context.innerHTML.toLowerCase() ;
							if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
						});
					});
					
					//Google Analytics - click on sub nav in top nav
					$('.meta-top .js-subnav-inject .nav-channel-partner-entry > li > a').each(function(){
						$(this).on('click', function(e){
							var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
							var pathname = 'top-ressort > channel: '+ $(this).closest('ul.nav-channel-partner-entry').parent().attr('id') + ' | ad: '+ $(this).context.innerHTML.toLowerCase() ;
							if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
						});
					});
				}
			} else {
				e.stopPropagation();
				touches = null;
			}
		});

	} else {
		element.hover(function() {
			var channelId = $(this).attr('data-cid');
			var subnav = $('.channel-nav > li[data-cid="' + channelId + '"] > .js-channel-sub-nav');
			if(subnav.length > 0 && !$(this).hasClass('js-subnav-inject')) {
				$(this).addClass('js-subnav-inject');
				subnav.clone().appendTo($(this));			
				
				//Google Analytics - click on sub nav in top nav
				$('.meta-top .js-subnav-inject .nav-channel-sub-entry > li > a').each(function(){
					$(this).on('click', function(e){
						var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
						var pathname = 'top-ressort > channel: '+ $(this).closest('ul.nav-channel-sub-entry').parent().attr('id') + ' | sub: '+ $(this).context.innerHTML.toLowerCase() ;
						if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
					});
				});
				
				//Google Analytics - click on sub nav in top nav
				$('.meta-top .js-subnav-inject .nav-channel-partner-entry > li > a').each(function(){
					$(this).on('click', function(e){
						var click = $('#js-sticky-header.is-sticky').length ? 'nav-sticky click' : 'nav-top click';
						var pathname = 'top-ressort > channel: '+ $(this).closest('ul.nav-channel-partner-entry').parent().attr('id') + ' | ad: '+ $(this).context.innerHTML.toLowerCase() ;
						if (typeof(ga) == "function") ga('send', 'event', 'Navigation', click, pathname);
					});
				});
			} 
		});
	}
}


$(document).ready(function(){
	touchDetect();

	// 
	if ( $('.accordion-box').length > 0 ) {
		if ( $(this).find('.multi-box-content').length > 1 ) {
			$('.accordion-box').accordion({
				header: ".multi-box-tab",
				heightStyle: "content",
				icons: false
			});
		}
	}

	// 
	if ( $('.asset-multi-tab-box .tabs').length > 0 ) {
		$('.asset-multi-tab-box .tabs').tabs();
	}
	

	// 
	// 
	if ( $('.asset-tab-box .tabs').length > 0 ) {
		var maxCount;
		var loadedTabs=new Array();
		$('.asset-tab-box .tabs').tabs({
			active: 1, // 
			beforeLoad: function (event, ui) {
				if (typeof(maxCount) == 'undefined') {
					if ($('#home').length == 0) {
						maxCount=10;
					} else { 
						maxCount=5;
					}
				}

				var url = ui.ajaxSettings.url;
				var counter = 1;
				var headlinetag, credittag;
				var tabcontent = '';
	
				if ($('#home').length == 0)
					$('.ui-tabs-panel').css('min-height','200px');

				var act=$('.asset-tab-box .tabs').tabs("option", "active");

				if ($.inArray(act, loadedTabs) == -1) {
				
					loadedTabs.push(act);

					$(this).find('.load-icon').show();
					
					$.getJSON(url, function(json) {
					    $.each(json, function() {
		
					    	if ( this.topic == '' ) {
					    		headlinetag = '<span class="asset-headline">'+this.headline+'</span>';
					    	} 
					    	if ( this.channel == '785' && this.topic == '' ) {
					    		headlinetag = '<span class="asset-headline-intro">SATIRE@SPIEGEL ONLINE:</span> <span class="asset-headline">'+this.headline+'</span>';
					    	} else {
					    		headlinetag = '<span class="asset-headline-intro">'+this.topic+':</span> <span class="asset-headline">'+this.headline+'</span>';
					    	}

				    		tabcontent += '<li><div class="item-number">'+counter+'</div><div class="item-text"><a href="'+this.link+'">'+headlinetag+'</a></div></li>';

					    	counter++;
		
					    	if ( counter == '6' && url.match(/[0-9][.json]/) ) {
					    		// 
					    		$(".tabs .load-icon").hide();
					    		return false;
					    	}
					    	else if (!url.match(/[0-9][.json]/) && counter > maxCount) {
					    		$(".tabs .load-icon").hide();
					    		return false;
					    	}

					    });
					    
						ui.panel.html('<ul>');
						ui.panel.find('ul').append( tabcontent );

					}).done(function(){
						$(".tabs .load-icon").hide();
					});
				}
	            return false;
	        }
		});
	}
	
	
	// 
	$('[placeholder]')
		.focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
		    input.val('');
		    input.removeClass('placeholder');
		  }
		})
		.blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		    input.addClass('placeholder');
		    input.val(input.attr('placeholder'));
		  }
		})
		.blur()
		.parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});


	// 
	spInitEtRating();

	// 
	var pageoverscroll = new spPageOverscroll();
	
	// 
	spLaterpayTooltipOnHover();
	
	// 
	if($('.topic-image-header-box img').length == 0) {
		$('.topic-image-header-box-layer').css('width', '820px');
		$('.topic-image-header-box').css('height', $('.topic-image-header-box-layer').height() + 40);
	}
	
	// 
	$('.meta-top').removeClass('no-js');

	// 
	toggleMainNav($('.js-hamburger'));
	toggleMainNav($('.js-hamburger-more'));

	// 
	toggleSubNav();

	//
	expandTopNav($('.meta-top > li[data-cid]'));
    
    // 
    $('.js-main-navigation .nav-1 .js-channel-sub-nav').each(function(e) {
    	if ($(this).find('.nav-channel-partner-entry li').length > 0){
    		$(this).css('width', '445px');
	    }
    });
    
    $('.js-main-navigation .nav-2 .js-channel-sub-nav').each(function(e) {
    	if ($(this).find('.nav-channel-partner-entry li').length > 0){
    		$(this).css('width', '330px');
    	}
    });
    
    // 
    $('.js-main-navigation .js-channel-sub-nav .close-button').each(function() {
    	$(this).click(function() {
    		hideSubNav();
    	});
    });

    // 
    $('#js-sticky-header').stick_in_parent({
		sticky_class: 'is-sticky',
		bottoming: false
	});
    
	$("#js-sticky-header").on("sticky_kit:stick", function() {
		$('#js-header-search').appendTo('#js-sticky-header');
		$('.js-main-navigation').appendTo('#js-sticky-header');
		$('.js-main-navigation .js-hamburger').hide();
	});

	$("#js-sticky-header").on("sticky_kit:unstick", function() {
		$('#js-header-search').appendTo('.header-main');
		$('.js-main-navigation').appendTo('.header-main');
		$('.js-main-navigation .js-hamburger').show();
	});

	// 
	$('#js-sticky-header .search-icon').click(function(e){
		// 
		e.stopPropagation();

		if ($('.search-icon').hasClass('is-inactive')) {
			$('.search-icon.is-inactive').bind("click", function(e) {
				e.preventDefault();
			});
		} else {
			$('#js-header-search').slideToggle();
			$("#js-header-search input[name*='suchbegriff']").focus();
		}
		
		// 
		if($('.js-hamburger .cross-icon').length > 0){
			toggleHamburger();
			$('.js-main-navigation').hide();
		}

		hideSubNav();
	});
	
	// 
	$('#js-close-button').click(function(){
		$('#js-header-search').hide();
	});

	// 
	$('.link-left.is-inactive').bind("click", function(e) {
		e.preventDefault();
	});
	$('.link-right.is-inactive').bind("click", function(e) {
		e.preventDefault();
	});

	// 
	if(!spUA.isIPad()){
		$("img.js-lazy").lazyload({ threshold : 500 });
	} else {
		// 
		$('img.js-lazy').each(function() {
			var source = $(this).attr('data-original');
			if (typeof source != 'undefined' && source !== false) {
				$(this).attr('src', source);
				$(this).removeClass('js-lazy');
			}
		});
	}
	
	// 
	$(document).ready(function() {
		if(sp_webcfg_global.outbrain_recommendations != undefined && sp_webcfg_global.outbrain_recommendations == true) {
			$('#spRecommendations').each(function(i,e){
				var obtype  = $(e).attr("data-obtype");
				var wpre = 'AR';
				var wnum;
				if (obtype == 'nobox') {
					wpre = 'TR';
					wnum = 1;
				} else if (obtype == 'noncompliant') {
					wnum = 4;
				} else if (obtype == 'noarticle') {
					wnum = 5;
				} else {
					if (!$(e).attr("data-assetcount") || $(e).attr("data-assetcount")=="") {
						console.log("NO RECOMMENDATIONS, assetcount not defined");
					} else {
						var count = parseInt($(e).attr("data-assetcount"));
						if 		(count === 0) wnum = '1'
						else if (count >=  4) wnum = '4'
						else if (count === 3) wnum = '3'
						else wnum = '2';
					}
				}
				if (typeof wnum != 'undefined') {
					if ($(e).attr("data-language") == 'en') wnum = parseInt(wnum) + 10;
					var src = 'https://widgets.outbrain.com/hub/index.html';
					var permalink = window.location.protocol + '/'+'/'+ window.location.host + $(e).attr("data-permalink");
	
					var height = (wpre === 'TR' ? '0'  : '630');
					src += '?permalink=' 	+ encodeURIComponent(permalink);
					src += '&widgetId='  	+ encodeURIComponent(wpre + "_" + wnum);
					src += '&fbk=' 			+ '0';
					src += '&ob-template=' 	+ encodeURIComponent('DE_Spiegel.de'); 
					var obframe = $('<iframe>')
									.attr("src",src)
									.attr("frameborder", 	"0")
									.attr("scrolling",		"no")
									.attr("transparent", "transparent")
									.attr("allowTransparency", "true")
									.attr("width", "860")
									.attr("height", height);
					
					$(e).html(obframe);
					if (wpre === 'TR') {
						$(e).hide();
					} else if (typeof spnetENV_STAGE != 'undefined' && spnetENV_STAGE == 'preview') {
						$(e).css('background', 'url("/static/sys/v12/misc/ob-platzhalter.jpg") no-repeat');
					}
					console.log("FILL RECOMMENDATIONS", "permalink="+permalink, "assetcount="+$(e).attr("data-assetcount"), "widgetId="+wpre + "_" + wnum, src);
				};
			});
		} else {
			// 
			console.log("RECOMMENDATIONS OFF by global configuration"); 
		};
	
		// 
		if ($('.article').length > 0) {
			$('.autor-link').each(function() {
				$(this).attr("href", "#");
				$(this).on("click", function(event){
					event.preventDefault();
					var authorId = $(this).attr("data-authorid");
					setAuthorPopupPos($(this), authorId);
					toggleAuthorPopup(authorId);
				});
			});
		}
	});
}); // 

function positionAuthorDetails() {
	$('.author-details').appendTo($('.js-author-details-wrapper'));
}

function toggleAuthorPopup(authorId) {
	var authorPopupClass = ".author-popup-layer.author-"+authorId;
	$(authorPopupClass).toggleClass("is-active");

	$('.is-active').each(function(){
		if(!$(this).hasClass("author-"+authorId)) {
			$(this).removeClass("is-active");
		}
	});
}

function setAuthorPopupPos(author, authorId) {
	var authorPopupClass = ".author-popup-layer.author-"+authorId;
	var authorPopup = $(authorPopupClass);
	var socialBoxPosLeft = author.position().left;
	var socialBoxPosTop = author.position().top;
	var maxPosLeft = $('.column-both').width() - authorPopup.width();

	if (socialBoxPosLeft < maxPosLeft) {
		authorPopup.css({"left": socialBoxPosLeft});
	} else {
		authorPopup.css({"left": maxPosLeft});
	}

	authorPopup.css({"top": (socialBoxPosTop + 30)});
}


function cookieprotect(cbsuccess, cbfail) {
	$.ajax({
		type : "POST",
		url : '/jsapi/usercookie/init.json',
        success: cbsuccess, 
		error: 	 cbfail
	});
}

function submitVote(voteform) {
	if ($(voteform).find("input[type=radio]:checked").length == 0) {
		document.location.href='/forum/votes/vote-' + $(voteform).attr("data-id") + '.html'; 
		return false;
	}; 
	cookieprotect(	function() { $(voteform).unbind("submit")
											.removeAttr("onsubmit")
											.submit(); 
					},
					function() { alert("Ein Fehler ist aufgetreten");}
				);
	return false;
}

// 
function nl_form_submit(thisForm) {
	var email     = $(thisForm).children(".nl-email:first").val();
	var group_id  = $(thisForm).children(".nl-group_id:first").val();
	var language  = $(thisForm).children(".nl-language:first").val();
	var mainDiv   = $(thisForm).parent();
	var iframeDiv = $(mainDiv).children(".js-nl-order-result:first");
	var iframeUrl = 'https://newsletterversand.spiegel.de?action=subscribeinline&newsletter=' + group_id + '&lang=' + language+ '&email=' + email;
	if(group_id == 'verwalten') {
		iframeUrl = 'https://newsletterversand.spiegel.de/list.php?lang=' + language + '&email=' + email;
	}
	// 
	$('<iframe />', {
	    class: 'nl-form-iframe strytl',
	   	src: iframeUrl,
	   	scrolling: 'no'
	}).appendTo(iframeDiv);
	$(mainDiv).children('.js-nl-order-inline').hide();
	iFrameResize({
		heightCalculationMethod: 'lowestElement', 
		inPageLinks: true
	});
	return(false);
}

$(document).ready(function() { 
	 $('form.js-nl-order-inline input.nl-email')
	    .click(function(){
	    	$(this).closest('div.nl-order').find('.js-nl-optin-text').show();
	    });
	$('.js-nl-order-inline').submit(function(e) {
		e.preventDefault();
		nl_form_submit($(this));
		return(false);
	});

	// 
	(function() {
		if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
			var ieClass = parseFloat(RegExp.$1);
			if (typeof ieClass == 'number') {
				// 
				$('html').addClass('msie-' + ieClass);
			}
		} else {
			var edge11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
			if (edge11) {
				// 
				$('html').addClass('msie-edge-11');
			} else {
				return false;
			}
		}
	})();
});

// 
function stickyOff() {
	spSetCookie('stickyHide', true, 90, '/', 'spiegel.de');
	$('.sticky-overlay').hide();
	if (typeof(ga) == "function") ga('send', 'event', 'newContentAlert', 'deactivate',  getFirstFolder(window.location.pathname));
	
}

// 
function stickyClose() {
	$('.sticky-overlay').hide();
	if (typeof(ga) == "function") ga('send', 'event', 'newContentAlert', 'close',  getFirstFolder(window.location.pathname));
}

function stickyOn() {
	spSetCookie('stickyHide', false, -1, '/', 'spiegel.de');
}

function stickyShow() { 
	if (!SPONgetCookie('stickyHide')) {
		$('.sticky-overlay').show();
	}
	if (typeof(ga) == "function") ga('send', 'event', 'newContentAlert', 'show',  getFirstFolder(window.location.pathname));
}

function getFirstFolder(path) {
	var parts = path.split('/');
	if(parts.length>2) return parts[1];
	return "homepage";
}

function spTriggerHpNotifier() {
		if (!SPONgetCookie('stickyHide') && 
			currentHpArticles.articles && 
			sp_webcfg_global.stickyOverlay != undefined &&
			sp_webcfg_global.stickyOverlay == true) {
		
	    var i = setInterval(function () {
	        $.ajax( {
	        	url: "/jsapi/notification/alltops.json", 
	            dataType: 'json',
	            success: function (json) {
	            	var articleids = json.articles;
	            	var stopPolling=false;
	            	if (articleids) {
	            		$.each(articleids, function(i, item) {
	                        if ($.inArray(item, currentHpArticles.articles) < 0) {
	                        	stopPolling=true;
	                        	// 
	                        	window.setTimeout(stickyShow, 30000);
	                        }
	                    });
	            	}
	            	if (stopPolling)
	            		clearInterval(i);
	            },
	            error: function () {
	                clearInterval(i);
	            }
	        });
	    }, 30000);
	}
}

function spTagInDreiMinutenLink() {
	var uagent = navigator.userAgent.toLowerCase();
	var safari = uagent.match(/safari\/(\S+)/);
	var contentHeight = 310;
	
    if(safari) {contentHeight = 355;}
    
    window.open('/schlagzeilen/tagindreiminuten/','SPONPopTop','width=500,height='+contentHeight+',resizable,screenX=150,screenY=100,status=no').focus();
}	

/**
 * 
 */

function topPosterInit(hashParams) { 
	if (typeof hashParams != 'undefined' && hashParams["action"] == '404') {
		$('.top-poster').show();
		$('.top-poster-ai')
			.addClass("spWait")
			.show()
			.append($('<div>')	.addClass("top-poster-ai-content error")
								.load('/static/sys/v12/json/errordoc-404.html', function() {$('.top-poster-ai').removeClass("spWait");})
					);
		return;
	}
	
	var device = spFindDevice(spDeviceConfig, spUA.getUserAgent());
	if (typeof hashParams != 'undefined' && hashParams["ai"] != null) {

		// Mobil leitet weiter zum Artikel
		if (device != null && device.target == 'mobileplus' && !spUA.isiPad()) {
			document.location.href="http://m.spiegel.de/artikel/a-"+hashParams["ai"]+".html#ref="+encodeURIComponent(hashParams["ref"]);
			return;
		}
		
		// Artikel-Anzeige HP-Poster
		$('.top-poster-ai').addClass("spWait")
						   .show();
		$('.top-poster').show();

		$.ajax({
			type: "GET",
			url: "/fragments/article/a-"+hashParams["ai"]+".json",
			success: function(data) {
				
						var hl = $('<a>').attr("href",data.path);
						var hltext = '';
						if (typeof data.topic != 'undefined' && data.topic != "") {
							if (!data.topic.match(/[:?!]$/)) {
								data.topic = data.topic + ":";
							}
							hl.append($('<span>').addClass("headline-intro").text(data.topic + " "));
							hltext = data.topic + " ";
						}
			 		 	hl.append($('<span>').addClass("headline").text(data.title));
			 		 	hltext += data.title;
				
						var contentbox = $('<div>')	.addClass("top-poster-ai-content")
													.addClass(hashParams["aitype"])
													.append($('<div>').addClass("module-title").text("Ihr Artikel"));
						var content = $('<div>').addClass("teaser");
						if (typeof data.imageurl != 'undefined' && data.imageurl != '') {
							content.append(
								$('<div>') 	.addClass("article-image-box box-position thumbsmall asset-align-left")
											.html(
												  $('<a>').attr("href",data.path)
												  		  .attr("title", hltext)
												  		  .html(
												  					$('<img>').attr({
												  										"src": data.imageurl,
												  										"width": "90",
												  										"height": "90",
												  										"alt": ""
												  					})
												  					
												  			)
												  			
												)
							);
						};
						  						
						content.append(
								$('<h2>').addClass("article-title")
								         .html(hl)
						);
						if (typeof data.teaser == 'undefined') data.teaser = "";
						content.append(
								$('<p>').addClass("article-intro")
										.html(data.teaser)
										.append(	" ",
								        		 	$('<a>').attr("href",data.path)
								        		 			.attr("title", hltext)
								        		 			.text("mehr..."),
								        		 	" (",
								        		 	data.date,
								        		 	" Uhr)"
										)
						);
						contentbox.append(content);
						$('.top-poster-ai')	.removeClass("spWait")
											.append(contentbox);
					},
			error: function(data) {
						$('.top-poster-ai').removeClass("spWait").hide();
						$('.top-poster').hide();
						topPosterInit();
					}
		});
	}
	else if (device != null && device.target == 'mobileplus' && !spUA.isiPad()) {
			$('.top-poster').show();
			$('.top-poster-redirect').show();
	}
}
/**
 * @author trixta
 * @version 1.2
 */
(function($){

var mwheelI = {
			pos: [-260, -260]
		},
	minDif 	= 3,
	doc 	= document,
	root 	= doc.documentElement,
	body 	= doc.body,
	longDelay, shortDelay
;

function unsetPos(){
	if(this === mwheelI.elem){
		mwheelI.pos = [-260, -260];
		mwheelI.elem = false;
		minDif = 3;
	}
}

$.event.special.mwheelIntent = {
	setup: function(){
		var jElm = $(this).bind('mousewheel', $.event.special.mwheelIntent.handler);
		if( this !== doc && this !== root && this !== body ){
			jElm.bind('mouseleave', unsetPos);
		}
		jElm = null;
        return true;
    },
	teardown: function(){
        $(this)
			.unbind('mousewheel', $.event.special.mwheelIntent.handler)
			.unbind('mouseleave', unsetPos)
		;
        return true;
    },
    handler: function(e, d){
		var pos = [e.clientX, e.clientY];
		if( this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif ){
            mwheelI.elem = this;
			mwheelI.pos = pos;
			minDif = 250;
			
			clearTimeout(shortDelay);
			shortDelay = setTimeout(function(){
				minDif = 10;
			}, 200);
			clearTimeout(longDelay);
			longDelay = setTimeout(function(){
				minDif = 3;
			}, 1500);
			e = $.extend({}, e, {type: 'mwheelIntent'});
            return $.event.dispatch.apply(this, arguments);
		}
    }
};
$.fn.extend({
	mwheelIntent: function(fn) {
		return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent");
	},
	
	unmwheelIntent: function(fn) {
		return this.unbind("mwheelIntent", fn);
	}
});

$(function(){
	body = doc.body;
	//assume that document is always scrollable, doesn't hurt if not
	$(doc).bind('mwheelIntent.mwheelIntentDefault', $.noop);
});
})(jQuery);

function onPreRenderCallback(renderSlot, bannerDescriptionAPI, renderControlAPI) {
	var options;

	options = bannerDescriptionAPI.getOptions();
	if (options.wrapper && parseInt(options.wrapper) > 0) {
		pushWrapAdDIVs(renderControlAPI, renderSlot.getAttribute('id'), options.wrapad_class, options.header_text);
	}
	
	if (options.hideAffiliateElements && (options.hideAffiliateElements === true || options.hideAffiliateElements === 'true')) {
		hideAffiliateElements();
	}

	if ($(renderSlot).attr('id').substring(0,6) == 'mitte_' || $(renderSlot).attr('id') == 'branded_channel_teaser') {
		
		if (bannerDescriptionAPI.getWidth() > 520) {
			var e = '#' + $(renderSlot).attr('id');
			$(e).addClass('billboard');
		}
	}
}

function onPostRenderCallback(renderSlot, bannerDescriptionAPI, renderControlAPI) {
	
	if ($(renderSlot).attr('id') == 'content_ad_1') {
		(function() {
			var qcBigaHeight = $('.biga-image').height();
			// fallback js-gallery
			if (qcBigaHeight == 0) {
				qcBigaHeight = $('.biga-image.jsActive').height();
			}
			var qcBigaLayer = $('#content_ad_1');
			var qcBigaClose = $('<span/>');
			qcBigaClose.addClass('close-button').attr('id','qcBigaClose');
	
			if (typeof qcBigaHeight == 'number' && qcBigaLayer.length > 0) {
				$('#content_ad_1 .wrapad').prepend($(qcBigaClose));
				$('#qcBigaClose').click(function() { $(qcBigaLayer).hide(); });
				qcBigaLayer.css('height',qcBigaHeight);
				qcBigaLayer.show();
			}
		})();
	}
}


function pushWrapAdDIVs(renderControlAPI, slotName, customWrapAdCssClass, customAdLabel) {
	var wrapAdClasses;
	wrapAdClasses = ['wrapad'];
	var innerWrapAdClasses;
	innerWrapAdClasses = ['innerwrapad'];
	if (slotName !== undefined) {
		wrapAdClasses.push(slotName);
	}
	if (customWrapAdCssClass !== undefined) {
		wrapAdClasses.push(customWrapAdCssClass);
	}
	if (customAdLabel == undefined) {
		innerWrapAdClasses.push('qc-nolabel');
	}
	renderControlAPI.addInnerWrapper(document.createElement('div')).className = wrapAdClasses.join(' ');
	renderControlAPI.addInnerWrapper(document.createElement('div')).className = innerWrapAdClasses.join(' ');
}


function OAS_RICH(pos) {}


var XADI = function(dsblSwitch) {
	var $this = this;
	this.aobj = null;
	this.dsblSwitch = dsblSwitch;
	this.pvars  = {};
	this.suppress  = {};
	this.campaigns = {};
	this.message = function(messagetype, message) {};
	this.debug = false;
	this.showpos = false;
	this.previewprofile = null;
	this.blocked = false;

	var dsabl_sad = {};
	dsabl_sad.hp = typeof sp_webcfg_global.dsabl_sad_hp != 'undefined' ? sp_webcfg_global.dsabl_sad_hp : false;
	dsabl_sad.all = typeof sp_webcfg_global.dsabl_sad != 'undefined' ? sp_webcfg_global.dsabl_sad : false;
	
	this.disabled = function(pos) {
		if (dsabl_sad.all) {
			return "alle Positionen unterdrueckt (GlobalConfig all)!";
		} else 	if (dsblSwitch && dsblSwitch == 'noads') {
			return "alle Positionen unterdrueckt (setup noads)!";
		} else if (dsblSwitch && typeof dsabl_sad[dsblSwitch] != 'undefined' && dsabl_sad[dsblSwitch]) {    	  
			return "alle Positionen unterdrueckt (GlobalConfig switch '"+dsblSwitch+"')!";	
		} else if (pos && $this.suppress[pos]) {    	  
			return "Position '"+pos+"' unterdrueckt (Flags)!";
		} 
		return null;
	};

	this.setSuppressed = function(mode) {
		if (mode == 1) {
			// 
			ADI.suppress 	= {"content_ad_1": true,"mitte_2": true};
		} else if (mode == 2) {
			ADI.suppress 	= {	"layer_ad": true, "oben": true, "mitte_0": true, "content_ad_hp_1": true, "content_ad_1": true, "mitte_2": true, "aaa_skyscraper_left": true,"unten": true,
								"skyscraper": true,"branded_channel_teaser": true,"promotion_ad_1": true,"promotion_ad_2": true		
						  	  };
		}
	};

	this.ad = function(pos) {
		var content = this.disabled(pos);
		if (content === null) {
			if (typeof $this.campaigns[pos] == 'undefined') {
				content = $this.message("error", "Position '"+pos+"' undefiniert!");
				if ($this.showpos) { $('#'+pos).addClass('adition-error'); }
			} else {
				if (typeof adition != 'undefined') {
					if ($this.showpos != '1') {
						adition.srq.push(function(api) { api.renderSlot(pos); });
					}
					if ($this.showpos) { $('#'+pos).addClass('adition-ok'); }
				} else { 
					if ($this.debug) { content = $this.message("error", 'WARNING: adition is ' + typeof adition); }
				}
			}
		} else {
			content = $this.message("info", content);
			if ($this.showpos) { $('#'+pos).addClass('adition-suppressed'); }
		}
		if (content) document.write(content);
		if ($this.showpos) $('#'+pos).addClass('adition-showpos');
	};
	
	this.write = function(pos) {
		document.write('<div class="adition" id="'+pos+'" data-position="'+pos+'"><scr' + 'ipt type="text/javascript">ADI.ad("'+pos+'");</scr' + 'ipt></div>');
		if ($this.debug) {
			 // 
			 // 
		}
	};

	this.setup = function(aobj) {
		// 
		$this.aobj = (typeof aobj != 'undefined' ? aobj : null);
		$this.blocked = ($this.aobj === null);

		var hash = new HashParams();
		$this.previewprofile = hash.value("adition.preview");
	};

	this.campaignsToRender = function() {
		// quickfix: Kampagnen alphanumerisch sortiert initialisieren
		var sorted = [],
			keys   = [],
			k, i, len;

		for (k in $this.campaigns) {
			if (k === 'preroll' || k === 'postroll') continue;
			if ($this.campaigns.hasOwnProperty(k)) keys.push(k);
		}
		keys.sort();
		len = keys.length;
		for (i = 0; i < len; i++) {
			k = keys[i];
			sorted.push({name: k, value: $this.campaigns[k]});
		}
		return sorted;
	}
	
	this.reload = function(adposition) {
		if (typeof adposition == 'undefined') {
			$this.aobj.srq.push(function(api) {
				api.reload();
			});
		} else {
			$this.aobj.srq.push(function(api) {
				api.reload([adposition]).completeRendering();
			});
		}
	}
}

function hideAffiliateElements() {
	$(document).ready(function() {
		$(".asset-affiliatebox .bestelllinks").hide();
		$(".asset-affiliatebox .admarker").hide();
		$("#spRecommendations").attr("data-obtype","nobox");
	});
}

/*** runterschieben Top-Asset bei belegtem Subchannel - wird als Callback aufgerufen ***/
/*** .adition branded_channel_teaser ***/
function spSwitchTopAsset() {
	// Erfurt "CSS-Callback" entfaellt, da keine Spalte mehr vorhanden
	console.log("++++++++++++ WARNING: No CSS callback for Erfurt! ++++++++++++");
	return;
}
var spDeviceConfig ={
	"devices": [
	           {"name": "iPad", "target":"ignore",
	        	"patterngroups": [
	        	                  {"white": ["ipad"]}
	        	                  ]
	           }, 
	           {"name": "iPhone/iPod", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["iphone"]},
	        	                     {"white": ["ipod"]}
	        	                     ]
	           }, 
	           {"name": "OperaMini", "target":"ignore",
	        	   "patterngroups": [
	        	                     {"white": ["opera","mobile"]},
	        	                     {"white": ["opera","mini"]},
	        	                     {"white": ["opera","htc"]}
	        	                     ]
	           },
	           {"name": "AndroidMobile", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["android"]},
	        	                     {"white": ["mobile"]}      	                     
	        	                     ]
	           },
	           {"name": "Android", "target":"ignore",
	        	   "patterngroups": [
	        	                     {"white": ["android"]}
	        	                     ]
	           },
	           {"name": "ChromeOS", "target":"www",
	        	   "patterngroups": [
	        	                     {"white": ["CrOS"], "black": ["Microsoft"]}
	        	                     ]
	           },
	           {"name": "FirefoxOS", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["mobile","firefox/"]},
	        	                     {"white": ["tablet","firefox/"]}
	        	                     ]
	           },
	           {"name": "Windows Phone", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     	{"white": ["Windows Phone", "IEMobile/7"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/8"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/9"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/10"]},
	        	                     	{"white": ["Windows Phone", "IEMobile/11"]}
	        	                     ]
	           },
	           {"name": "Windows Tablet ARM", "target":"www",
	        	   "patterngroups": [
	        	                     	{"white": ["MSIE", " arm"]}
	        	                     ]
	           },
	           {"name": "Blackberry", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     	{"white": ["blackberry","Version/6"]},
	        	                     	{"white": ["blackberry","Version/7"]},
	        	                     	{"white": ["blackberry","Version/8"]},
	        	                     	{"white": ["bb10","Version/10"]}
	        	                     ]
	           },
	           {"name": "OldMobileDevice","target":"mobile",
	        	   "patterngroups": [
									{"white": ["blackberry"]},
									{"white": ["midp"]},
									{"white": ["240x320"]},
									{"white": ["480x640"]},
									{"white": ["netfront"]},
									{"white": ["nokia"]},
									{"white": ["panasonic"]},
									{"white": ["portalmmm"]},
									{"white": ["sharp"]},
									{"white": ["sie-"]},
									{"white": ["sonyericsson"]},
									{"white": ["symbian"]},
									{"white": ["windows ce"]},
									{"white": ["benq"]},
									{"white": ["mda"]},
									{"white": ["mot-"]},
									{"white": ["opera mini"]},
									{"white": ["philips"]},
									{"white": ["pocket pc"]},
									{"white": ["sagem"]},
									{"white": ["samsung"]},
									{"white": ["sda"]},
									{"white": ["sgh-"]},
									{"white": ["vodafone"]},
									{"white": ["xda"]},
									{"white": ["htc"]},
									{"white": ["palm"]},
									{"white": ["webos"]},
									{"white": ["mobile"]},
									{"white": ["mobi"]},
									{"white": ["mini"]},
									{"white": ["XV6850"]},
									{"white": ["plucker"]},
									{"white": ["Phone"]},
									{"white": ["Novarra-Vision"]},	        	                     
	        	                    {"white": ["windows", "mobi"]},
	        	                    {"white": ["opera", "mobi"]},
	        	                    {"white": ["nintendo", "dsi"]}
	        	                     ]
		       },
	           {"name": "Desktop", "target":"www",
	        	   "patterngroups": [
	        	                     {"white": ["Windows"]},
	        	                     {"white": ["Linux"]},
	        	                     {"white": ["konqueror"]},
	        	                     {"white": ["Macintosh"]},
	        	                     {"white": ["mac_powerpc"]}
	        	                     ]
			   }
	           ]
};



function spMobileRedirect(){
	spSetCookie('spSkipDelegation', false, 0, '/', 'spiegel.de');

	var murl = $("#alternate-mobileplus").attr("href");
	if (murl) {
		var redirectHash="spRedirectedFrom=www&referrrer="+document.referrer;
		document.location.href=murl+'#'+redirectHash;
	}
}


function spFindDevice(spDeviceConfig, ua) {
	ua=ua.toLowerCase();
	var devices=spDeviceConfig.devices;
	for (var key in devices) {
		var device=devices[key];

		var patterngroups=device.patterngroups
		for (var p in patterngroups) {

			var  found = true;
			var patternList=patterngroups[p].white
			for (var k in patternList) {
				var pattern=patternList[k].toLowerCase();
				if (ua.indexOf(pattern) == -1) {
					found=false;
					break;
				}
			}
			if (found) {
				var patternList=patterngroups[p].black
				for (var k in patternList) {
					var pattern=patternList[k].toLowerCase();
					if (ua.indexOf(pattern) != -1) {
						found=false;
						break;
					}
				}
			}
			if (found)
				return device;			
		}
	}
	return null;
}window.jwplayer=function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(i,o){for(var a,s,l=0,u=[];l<i.length;l++)s=i[l],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in o)e[a]=o[a];for(n&&n(i,o);u.length;)u.shift().call(null,t)};var i={},r={0:0};return t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void 0!==r[e])r[e].push(n);else{r[e]=[n];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+({1:"provider.hlsjs",2:"provider.shaka",3:"provider.cast",4:"provider.html5",5:"provider.flash",6:"provider.youtube",7:"polyfills.vttrenderer",8:"polyfills.promise",9:"polyfills.intersection-observer",10:"polyfills.base64",11:"vttparser"}[e]||e)+".js",i.appendChild(o)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){e.exports=n(168)},function(e,t,n){var i,r;i=[],r=function(){var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,r=t.slice,o=t.concat,a=n.toString,s=n.hasOwnProperty,l=t.map,u=t.reduce,c=t.forEach,d=t.filter,p=t.every,h=t.some,f=t.indexOf,g=Array.isArray,m=Object.keys,w=i.bind,v=function(e){return e instanceof v?e:this instanceof v?void 0:new v(e)},y=v.each=v.forEach=function(t,n,i){if(null==t)return t;if(c&&t.forEach===c)t.forEach(n,i);else if(t.length===+t.length){for(var r=0,o=t.length;r<o;r++)if(n.call(i,t[r],r,t)===e)return}else for(var a=v.keys(t),r=0,o=a.length;r<o;r++)if(n.call(i,t[a[r]],a[r],t)===e)return;return t};v.map=v.collect=function(e,t,n){var i=[];return null==e?i:l&&e.map===l?e.map(t,n):(y(e,function(e,r,o){i.push(t.call(n,e,r,o))}),i)};var j="Reduce of empty array with no initial value";v.reduce=v.foldl=v.inject=function(e,t,n,i){var r=arguments.length>2;if(null==e&&(e=[]),u&&e.reduce===u)return i&&(t=v.bind(t,i)),r?e.reduce(t,n):e.reduce(t);if(y(e,function(e,o,a){r?n=t.call(i,n,e,o,a):(n=e,r=!0)}),!r)throw new TypeError(j);return n},v.find=v.detect=function(e,t,n){var i;return b(e,function(e,r,o){if(t.call(n,e,r,o))return i=e,!0}),i},v.filter=v.select=function(e,t,n){var i=[];return null==e?i:d&&e.filter===d?e.filter(t,n):(y(e,function(e,r,o){t.call(n,e,r,o)&&i.push(e)}),i)},v.reject=function(e,t,n){return v.filter(e,function(e,i,r){return!t.call(n,e,i,r)},n)},v.compact=function(e){return v.filter(e,v.identity)},v.every=v.all=function(t,n,i){n||(n=v.identity);var r=!0;return null==t?r:p&&t.every===p?t.every(n,i):(y(t,function(t,o,a){if(!(r=r&&n.call(i,t,o,a)))return e}),!!r)};var b=v.some=v.any=function(t,n,i){n||(n=v.identity);var r=!1;return null==t?r:h&&t.some===h?t.some(n,i):(y(t,function(t,o,a){if(r||(r=n.call(i,t,o,a)))return e}),!!r)};v.size=function(e){return null==e?0:e.length===+e.length?e.length:v.keys(e).length},v.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:r.call(e,Math.max(e.length-t,0))},v.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},v.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}};var E=function(e){return null==e?v.identity:v.isFunction(e)?e:v.property(e)},x=function(e){return function(t,n,i){var r={};return n=E(n),y(t,function(o,a){var s=n.call(i,o,a,t);e(r,s,o)}),r}};v.groupBy=x(function(e,t,n){v.has(e,t)?e[t].push(n):e[t]=[n]}),v.indexBy=x(function(e,t,n){e[t]=n}),v.sortedIndex=function(e,t,n,i){n=E(n);for(var r=n.call(i,t),o=0,a=e.length;o<a;){var s=o+a>>>1;n.call(i,e[s])<r?o=s+1:a=s}return o};var b=v.some=v.any=function(t,n,i){n||(n=v.identity);var r=!1;return null==t?r:h&&t.some===h?t.some(n,i):(y(t,function(t,o,a){if(r||(r=n.call(i,t,o,a)))return e}),!!r)};v.contains=v.include=function(e,t){return null!=e&&(e.length!==+e.length&&(e=v.values(e)),v.indexOf(e,t)>=0)},v.pluck=function(e,t){return v.map(e,v.property(t))},v.where=function(e,t){return v.filter(e,v.matches(t))},v.findWhere=function(e,t){return v.find(e,v.matches(t))},v.max=function(e,t,n){if(!t&&v.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var i=-(1/0),r=-(1/0);return y(e,function(e,o,a){var s=t?t.call(n,e,o,a):e;s>r&&(i=e,r=s)}),i},v.difference=function(e){var n=o.apply(t,r.call(arguments,1));return v.filter(e,function(e){return!v.contains(n,e)})},v.without=function(e){return v.difference(e,r.call(arguments,1))},v.indexOf=function(e,t,n){if(null==e)return-1;var i=0,r=e.length;if(n){if("number"!=typeof n)return i=v.sortedIndex(e,t),e[i]===t?i:-1;i=n<0?Math.max(0,r+n):n}if(f&&e.indexOf===f)return e.indexOf(t,n);for(;i<r;i++)if(e[i]===t)return i;return-1};var k=function(){};v.bind=function(e,t){var n,i;if(w&&e.bind===w)return w.apply(e,r.call(arguments,1));if(!v.isFunction(e))throw new TypeError;return n=r.call(arguments,2),i=function(){if(!(this instanceof i))return e.apply(t,n.concat(r.call(arguments)));k.prototype=e.prototype;var o=new k;k.prototype=null;var a=e.apply(o,n.concat(r.call(arguments)));return Object(a)===a?a:o}},v.partial=function(e){var t=r.call(arguments,1);return function(){for(var n=0,i=t.slice(),r=0,o=i.length;r<o;r++)i[r]===v&&(i[r]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return e.apply(this,i)}},v.once=v.partial(v.before,2),v.memoize=function(e,t){var n={};return t||(t=v.identity),function(){var i=t.apply(this,arguments);return v.has(n,i)?n[i]:n[i]=e.apply(this,arguments)}},v.delay=function(e,t){var n=r.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},v.defer=function(e){return v.delay.apply(v,[e,1].concat(r.call(arguments,1)))},v.throttle=function(e,t,n){var i,r,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:v.now(),a=null,o=e.apply(i,r),i=r=null};return function(){var u=v.now();s||n.leading!==!1||(s=u);var c=t-(u-s);return i=this,r=arguments,c<=0?(clearTimeout(a),a=null,s=u,o=e.apply(i,r),i=r=null):a||n.trailing===!1||(a=setTimeout(l,c)),o}},v.keys=function(e){if(!v.isObject(e))return[];if(m)return m(e);var t=[];for(var n in e)v.has(e,n)&&t.push(n);return t},v.invert=function(e){for(var t={},n=v.keys(e),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return t},v.defaults=function(e){return y(r.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},v.extend=function(e){return y(r.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},v.pick=function(e){var n={},i=o.apply(t,r.call(arguments,1));return y(i,function(t){t in e&&(n[t]=e[t])}),n},v.omit=function(e){var n={},i=o.apply(t,r.call(arguments,1));for(var a in e)v.contains(i,a)||(n[a]=e[a]);return n},v.clone=function(e){return v.isObject(e)?v.isArray(e)?e.slice():v.extend({},e):e},v.isArray=g||function(e){return"[object Array]"==a.call(e)},v.isObject=function(e){return e===Object(e)},y(["Arguments","Function","String","Number","Date","RegExp"],function(e){v["is"+e]=function(t){return a.call(t)=="[object "+e+"]"}}),v.isArguments(arguments)||(v.isArguments=function(e){return!(!e||!v.has(e,"callee"))}),v.isFunction=function(e){return"function"==typeof e},v.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},v.isNaN=function(e){return v.isNumber(e)&&e!=+e},v.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==a.call(e)},v.isNull=function(e){return null===e},v.isUndefined=function(e){return void 0===e},v.has=function(e,t){return s.call(e,t)},v.identity=function(e){return e},v.constant=function(e){return function(){return e}},v.property=function(e){return function(t){return t[e]}},v.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},v.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},v.now=Date.now||function(){return(new Date).getTime()},v.result=function(e,t){if(null!=e){var n=e[t];return v.isFunction(n)?n.call(e):n}};var A=0;return v.uniqueId=function(e){var t=++A+"";return e?e+t:t},v}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(8),n(1),n(27),n(32),n(23),n(33),n(14),n(60),n(34),n(63),n(141),n(140)],r=function(e,t,n,i,r,o,a,s,l,u,c,d){var p={};return p.log=function(){window.console&&("object"==typeof console.log?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))},p.between=function(e,t,n){return Math.max(Math.min(e,n),t)},p.foreach=function(e,t){var n,i;for(n in e)"function"===p.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))},p.indexOf=t.indexOf,p.noop=function(){},p.seconds=e.seconds,p.prefix=e.prefix,p.suffix=e.suffix,t.extend(p,o,a,l,n,s,i,r,u,c,d),p}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",MOVE:"move",OUT:"out"},t={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick"};return t.touchEvents=e,t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t=[],n=t.slice,i={on:function(e,t,n){if(!o(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||(this._events[e]=[]);return i.push({callback:t,context:n}),this},once:function(t,n,i){if(!o(this,"once",t,[n,i])||!n)return this;var r=this,a=e.once(function(){r.off(t,a),n.apply(this,arguments)});return a._callback=n,this.on(t,a,i)},off:function(t,n,i){var r,a,s,l,u,c,d,p;if(!this._events||!o(this,"off",t,[n,i]))return this;if(!t&&!n&&!i)return this._events=void 0,this;for(l=t?[t]:e.keys(this._events),u=0,c=l.length;u<c;u++)if(t=l[u],s=this._events[t]){if(this._events[t]=r=[],n||i)for(d=0,p=s.length;d<p;d++)a=s[d],(n&&n!==a.callback&&n!==a.callback._callback||i&&i!==a.context)&&r.push(a);r.length||delete this._events[t]}return this},trigger:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!o(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&a(i,t,this),r&&a(r,arguments,this),this},triggerSafe:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!o(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&s(i,t,this,e),r&&s(r,arguments,this,e),this}},r=/\s+/,o=function(e,t,n,i){if(!n)return!0;if("object"==typeof n){for(var o in n)e[t].apply(e,[o,n[o]].concat(i));return!1}if(r.test(n)){for(var a=n.split(r),s=0,l=a.length;s<l;s++)e[t].apply(e,[a[s]].concat(i));return!1}return!0},a=function(e,t,n){var i,r=-1,o=e.length,a=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++r<o;)(i=e[r]).callback.call(i.context||n);return;case 1:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a);return;case 2:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s);return;case 3:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s,l);return;default:for(;++r<o;)(i=e[r]).callback.apply(i.context||n,t);return}},s=function(e,t,n,i){for(var r,o=-1,a=e.length;++o<a;)try{(r=e[o]).callback.apply(r.context||n,t)}catch(s){console.log('Error in "'+i+'" event handler:',s)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(4),n(3),n(1),n(2)],r=function(e,t,n,i){function r(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]}function o(e){var t=e||window.event;return e instanceof MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)}function a(e,t,n){var i;return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{type:e,target:t.target,currentTarget:n,pageX:i.pageX,pageY:i.pageY}}function s(e){(e instanceof MouseEvent||e instanceof window.TouchEvent)&&(e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault())}var l=t.touchEvents,u="PointerEvent"in window,c="ontouchstart"in window,d=!(u||c&&i.isMobile()),p=i.isFF()&&i.isOSX(),h=function(e,t){function i(e){"touch"!==e.pointerType&&v(l.OVER,e)}function c(e){"touch"!==e.pointerType&&v(l.MOVE,e)}function h(t){(d||u&&"touch"!==t.pointerType&&!e.contains(document.elementFromPoint(t.x,t.y)))&&v(l.OUT,t)}function f(e,t,n){e.removeEventListener(t,n),e.addEventListener(t,n)}function g(n){y=n.target,x=r(n,"X"),k=r(n,"Y"),o(n)||("pointerdown"===n.type&&n.isPrimary?(t.preventScrolling&&(j=n.pointerId,e.setPointerCapture(j)),f(e,"pointermove",m),f(e,"pointercancel",w),"mouse"===n.pointerType&&"OBJECT"===y.nodeName?f(document,"mouseup",w):f(e,"pointerup",w)):"mousedown"===n.type?(f(document,"mousemove",m),p&&"object"===n.target.nodeName.toLowerCase()?f(e,"click",w):f(document,"mouseup",w)):"touchstart"===n.type&&(f(y,"touchmove",m),f(y,"touchcancel",w),f(y,"touchend",w)),t.preventScrolling&&s(n))}function m(e){var n=6;if(E)v(l.DRAG,e);else{var i=r(e,"X"),o=r(e,"Y"),a=i-x,u=o-k;a*a+u*u>n*n&&(v(l.DRAG_START,e),E=!0,v(l.DRAG,e))}t.preventScrolling&&s(e)}function w(n){var i="pointerup"===n.type||"pointercancel"===n.type;i&&t.preventScrolling&&e.releasePointerCapture(j),e.removeEventListener("pointermove",m),e.removeEventListener("pointercancel",w),e.removeEventListener("pointerup",w),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",w),y.removeEventListener("touchmove",m),y.removeEventListener("touchcancel",w),y.removeEventListener("touchend",w),E?v(l.DRAG_END,n):t.directSelect&&n.target!==e||n.type.indexOf("cancel")!==-1||("mouseup"===n.type||"click"===n.type||i&&"mouse"===n.pointerType?v(l.CLICK,n):(v(l.TAP,n),"touchend"===n.type&&s(n))),y=null,E=!1}function v(e,i){var r;if(t.enableDoubleTap&&(e===l.CLICK||e===l.TAP))if(n.now()-A<_){var o=e===l.CLICK?l.DOUBLE_CLICK:l.DOUBLE_TAP;r=a(o,i,b),C.trigger(o,r),A=0}else A=n.now();r=a(e,i,b),C.trigger(e,r)}var y,j,b=e,E=!1,x=0,k=0,A=0,_=300;t=t||{},u?(e.addEventListener("pointerdown",g),t.useHover&&(e.addEventListener("pointerover",i),e.addEventListener("pointerout",h)),t.useMove&&e.addEventListener("pointermove",c)):(d&&(e.addEventListener("mousedown",g),t.useHover&&(e.addEventListener("mouseover",i),e.addEventListener("mouseout",h)),t.useMove&&e.addEventListener("mousemove",c)),e.addEventListener("touchstart",g));var C=this;return this.triggerEvent=v,this.destroy=function(){e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g),y&&(y.removeEventListener("touchmove",m),y.removeEventListener("touchcancel",w),y.removeEventListener("touchend",w),y=null),u&&(t.preventScrolling&&e.releasePointerCapture(j),e.removeEventListener("pointerover",i),e.removeEventListener("pointerdown",g),e.removeEventListener("pointermove",m),e.removeEventListener("pointermove",c),e.removeEventListener("pointercancel",w),e.removeEventListener("pointerout",h),e.removeEventListener("pointerup",w)),e.removeEventListener("click",w),e.removeEventListener("mouseover",i),e.removeEventListener("mousemove",c),e.removeEventListener("mouseout",h),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",w)},this};return n.extend(h.prototype,e),h}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return!!/[\(,]format=m3u8-/i.test(e)&&"m3u8"}var n=function(e){return e.replace(/^\s+|\s+$/g,"")},i=function(e,t,n){for(e=""+e,n=n||"0";e.length<t;)e=n+e;return e},r=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""},o=function(e){if(!e||"rtmp"===e.substr(0,4))return"";var n=t(e);return n?n:(e=e.split("?")[0].split("#")[0],e.lastIndexOf(".")>-1?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)},a=function(e){var t=parseInt(e/3600),n=parseInt(e/60)%60,r=e%60;return i(t,2)+":"+i(n,2)+":"+i(r.toFixed(3),6)},s=function(t,n){if(e.isNumber(t))return t;t=t.replace(",",".");var i=t.split(":"),r=i.length,o=0;if("s"===t.slice(-1))o=parseFloat(t);else if("m"===t.slice(-1))o=60*parseFloat(t);else if("h"===t.slice(-1))o=3600*parseFloat(t);else if(r>1){var a=r-1;4===r&&(n&&(o=parseFloat(i[a])/n),a-=1),o+=parseFloat(i[a]),o+=60*parseFloat(i[a-1]),r>=3&&(o+=3600*parseFloat(i[a-2]))}else o=parseFloat(t);return o},l=function(t,n){return e.map(t,function(e){return n+e})},u=function(t,n){return e.map(t,function(e){return e+n})};return{trim:n,pad:i,xmlAttribute:r,extension:o,hms:a,seconds:s,suffix:u,prefix:l}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){e.exports=n(96)["default"]},,function(e,t){"use strict";function n(e){return c[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function r(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1}function o(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return p.test(e)?e.replace(d,n):e}function a(e){return!e&&0!==e||!(!g(e)||0!==e.length)}function s(e){var t=i({},e);return t._parent=e,t}function l(e,t){return e.path=t,e}function u(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=i,t.indexOf=r,t.escapeExpression=o,t.isEmpty=a,t.createFrame=s,t.blockParams=l,t.appendContextPath=u;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},d=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;t.toString=h;var f=function(e){return"function"==typeof e};f(/x/)&&(t.isFunction=f=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)}),t.isFunction=f;var g=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===h.call(e)};t.isArray=g},,function(e,t,n){var i,r;i=[n(2),n(3),n(5),n(1)],r=function(e,t,n,i){var r=e.noop,o=i.constant(!1),a={supports:o,play:r,load:r,stop:r,volume:r,mute:r,seek:r,resize:r,remove:r,destroy:r,setVisibility:r,setFullscreen:o,getFullscreen:r,getContainer:r,setContainer:o,getName:r,getQualityLevels:r,getCurrentQuality:r,setCurrentQuality:r,getAudioTracks:r,getCurrentAudioTrack:r,setCurrentAudioTrack:r,checkComplete:r,setControls:r,attachMedia:r,detachMedia:r,setState:function(e){var i=this.state||n.IDLE;this.state=e,e!==i&&this.trigger(t.JWPLAYER_PLAYER_STATE,{newstate:e})},sendMediaType:function(e){var n=e[0].type,i="oga"===n||"aac"===n||"mp3"===n||"mpeg"===n||"vorbis"===n;this.trigger(t.JWPLAYER_MEDIA_TYPE,{mediaType:i?"audio":"video"})}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={},n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};return t.utf8ArrayToStr=function(e,t){var n,i,r,o,a,s;for(n="",r=e.length,i=t||0;i<r;)if(o=e[i++],0!==o&&3!==o)switch(o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=String.fromCharCode(o);break;case 12:case 13:a=e[i++],n+=String.fromCharCode((31&o)<<6|63&a);break;case 14:a=e[i++],s=e[i++],n+=String.fromCharCode((15&o)<<12|(63&a)<<6|(63&s)<<0)}return n},t.utf16BigEndianArrayToStr=function(e,t){var n,i,r;for(n="",r=e.length-1,i=t||0;i<r;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;return n},t.syncSafeInt=function(e){var n=t.arrayToInt(e);return 127&n|(32512&n)>>1|(8323072&n)>>2|(2130706432&n)>>3},t.arrayToInt=function(e){for(var t="0x",n=0;n<e.length;n++)t+=e[n].toString(16);return parseInt(t)},t.parseID3=function(i){return e.reduce(i,function(i,r){if(!("value"in r)&&"data"in r&&r.data instanceof ArrayBuffer){var o=r,a=new Uint8Array(o.data),s=a.length;r={value:{key:"",data:""}};for(var l=10;l<14&&l<a.length&&0!==a[l];)r.value.key+=String.fromCharCode(a[l]),l++;var u=19,c=a[u];3!==c&&0!==c||(c=a[++u],s--);var d=0;if(1!==c&&2!==c)for(var p=u+1;p<s;p++)if(0===a[p]){d=p-u;break}if(d>0){var h=t.utf8ArrayToStr(a.subarray(u,u+=d),0);if("PRIV"===r.value.key){if("com.apple.streaming.transportStreamTimestamp"===h){var f=1&t.syncSafeInt(a.subarray(u,u+=4)),g=t.syncSafeInt(a.subarray(u,u+=4));f&&(g+=4294967296),r.value.data=g}else r.value.data=t.utf8ArrayToStr(a,u+1);r.value.info=h}else r.value.info=h,r.value.data=t.utf8ArrayToStr(a,u+1)}else{var m=a[u];1===m||2===m?r.value.data=t.utf16BigEndianArrayToStr(a,u+1):r.value.data=t.utf8ArrayToStr(a,u+1)}}if(n.hasOwnProperty(r.value.key)&&(i[n[r.value.key]]=r.value.data),r.value.info){var w=i[r.value.key];e.isObject(w)||(w={},i[r.value.key]=w),w[r.value.info]=r.value.data}else i[r.value.key]=r.value.data;return i},{})},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(4),n(1)],r=function(e,t,n){var i={},r={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},o=function(o,a){function s(t){c=r.ERROR,u.trigger(e.ERROR,t)}function l(t){c=r.COMPLETE,u.trigger(e.COMPLETE,t)}var u=n.extend(this,t),c=r.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(e){var t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,t},this.makeScriptTag=function(e){var t=document.createElement("script");return t.src=e,t},this.makeTag=a?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(c===r.NEW){var t=i[o];if(t&&(c=t.getStatus(),c<2))return t.on(e.ERROR,s),void t.on(e.COMPLETE,l);var n=document.getElementsByTagName("head")[0]||document.documentElement,u=this.makeTag(o),d=!1;u.onload=u.onreadystatechange=function(e){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,l(e),u.onload=u.onreadystatechange=null,n&&u.parentNode&&!a&&n.removeChild(u))},u.onerror=s,n.insertBefore(u,n.firstChild),c=r.LOADING,i[o]=this}},this.getStatus=function(){return c}};return o.loaderstatus=r,o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t="free",n="premium",i="enterprise",r="platinum",o="ads",a="unlimited",s="trial",l={setup:[t,n,i,o,a,s,r],dash:[n,i,o,a,s,r],drm:[i,o,a,s],hls:[n,o,i,a,s,r],ads:[o,a,s,r,i],casting:[n,i,o,a,s,r],jwpsrv:[t,n,i,o,s,r]},u=function(t){return function(n){return e.contains(l[n],t)}};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";function n(e,t){var r=t&&t.loc,o=void 0,a=void 0;r&&(o=r.start.line,a=r.start.column,e+=" - "+o+":"+a);for(var s=Error.prototype.constructor.call(this,e),l=0;l<i.length;l++)this[i[l]]=s[i[l]];Error.captureStackTrace&&Error.captureStackTrace(this,n),r&&(this.lineNumber=o,this.column=a)}t.__esModule=!0;var i=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,t["default"]=n,e.exports=t["default"]},function(e,t,n){var i,r;i=[],r=function(){return{createId:function(e,t){var n,i=e.kind||"cc";return n=e["default"]||e.defaulttrack?"default":e._id||e.file||e.name||e.label||i+t},createLabel:function(e,t){var n=e.label||e.name||e.language;return n||(n="Unknown CC",t+=1,t>1&&(n+=" ["+t+"]")),{label:n,unknownCount:t}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(20),n(30),n(127),n(46)],r=function(e,t,i,r,o,a){function s(e,t,n,a){var s,u,c=e.responseXML?e.responseXML.firstChild:null;if(c)for("xml"===i.localName(c)&&(c=c.nextSibling);c.nodeType===c.COMMENT_NODE;)c=c.nextSibling;try{if(c&&"tt"===i.localName(c))s=o(e.responseXML),u=this.convertToVTTCues(s),delete t.xhr,n(u);else{var d=e.responseText;d.indexOf("WEBVTT")>=0?l(d,t,n,a):(s=r(d),u=this.convertToVTTCues(s),delete t.xhr,n(u))}}catch(p){delete t.xhr,a(p)}}function l(e,t,i,r){n.e(11,function(require){var o=n(47),a=new o(window),s=[];a.oncue=function(e){s.push(e)},a.onflush=function(){delete t.xhr,i(s)};try{a.parse(e).flush()}catch(l){delete t.xhr,r(l)}})}var u={};return u.loadFile=function(e,n,i){e.xhr=t.ajax(e.file,function(t){s.call(u,t,e,n,i)},i)},u.cancelXhr=function(t){e.each(t,function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})},u.convertToVTTCues=function(t){var n=e.map(t,function(e){return new a(e.begin,e.end,e.text)});return n},u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(8)],r=function(e){return{localName:function(e){return e?e.localName?e.localName:e.baseName?e.baseName:"":""},textContent:function(t){return t?t.textContent?e.trim(t.textContent):t.text?e.trim(t.text):"":""},getChildNode:function(e,t){return e.childNodes[t]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(131),n(132),n(52),n(26)],r=function(e,t,n,i){var r={},o={},a=function(n,i){return o[n]=new e(new t(r),i),o[n]},s=function(e,t,o,a){var s=i.getPluginName(e);r[s]||(r[s]=new n(e)),r[s].registerPlugin(e,t,o,a)};return{loadPlugins:a,registerPlugin:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{repo:"http://ssl.p.jwpcdn.com/player/v/",SkinsIncluded:["seven"],SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"],dvrSeekLimit:-25}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(8),n(68)],r=function(e,t){function n(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join("")}function i(t,n,i){if(""===n||void 0===n||null===n)return"";var r=i?" !important":"";return"string"==typeof n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n+r:0===n||"z-index"===t||"opacity"===t?""+n+r:/color/i.test(t)?"#"+e.pad(n.toString(16).replace(/^0x/i,""),6)+r:Math.ceil(n)+"px"+r}var r=function(e,n,i){i=i||"all-players";var r="";if("object"==typeof n){var a=document.createElement("div");o(a,n),r="{"+a.style.cssText+"}"}else"string"==typeof n&&(r=n);t.style([[e,e+r]],i)},o=function(e,t){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var r,o={};for(r in t)o[r]=i(r,t[r]);for(var a=0;a<e.length;a++){var s,l=e[a];if(void 0!==l&&null!==l)for(r in o)s=n(r),l.style[s]!==o[r]&&(l.style[s]=o[r])}}},a=function(e,t){o(e,{transform:t,webkitTransform:t,msTransform:t,mozTransform:t,oTransform:t})},s=function(e,t){var n="rgb";e?(e=String(e).replace("#",""),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2])):e="000000";var i=[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)];return void 0!==t&&100!==t&&(n+="a",i.push(t/100)),n+"("+i.join(",")+")"};return{css:r,style:o,clearCss:t.clear,transform:a,hexToRgba:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return"7.8.1+commercial_v7-8-1.139.commercial.169552.jwplayer.b14929.freewheel.7e90fa.googima.808f05.vast.87d283.analytics.fdf5f2.plugin-gapro.7e936b.plugin-related.940118.plugin-sharing.8c44f9.vr-plugin.5ca0dc.hls.js."}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(39),n(123),n(1),n(4),n(139),n(3),n(5)],r=function(e,t,n,i,r,o,a,s){var l=function(){function o(e,t){var n=i.extend({},t,{type:e});switch(e){case"flashThrottle":var r="resume"!==t.state;this.set("flashThrottle",r),this.set("flashBlocked",r);break;case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":return void this.set(e,t[e]);case"mute":return void(this.get("autostartMuted")||this.set(e,t[e]));case a.JWPLAYER_MEDIA_TYPE:return void(this.mediaModel.get("mediaType")!==t.mediaType&&(this.mediaModel.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));case a.JWPLAYER_PLAYER_STATE:return void this.mediaModel.set("state",t.newstate);case a.JWPLAYER_MEDIA_BUFFER:this.set("buffer",t.bufferPercent);case a.JWPLAYER_MEDIA_META:var o=t.duration;i.isNumber(o)&&!i.isNaN(o)&&(this.mediaModel.set("duration",o),this.set("duration",o));break;case a.JWPLAYER_MEDIA_BUFFER_FULL:this.mediaModel.get("playAttempt")?this.playVideo():this.mediaModel.on("change:playAttempt",function(){this.playVideo()},this);break;case a.JWPLAYER_MEDIA_TIME:this.mediaModel.set("position",t.position),this.set("position",t.position),i.isNumber(t.duration)&&(this.mediaModel.set("duration",t.duration),this.set("duration",t.duration));break;case a.JWPLAYER_PROVIDER_CHANGED:this.set("provider",d.getName());break;case a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality,t.levels),this.mediaModel.set("levels",t.levels);break;case a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality,t.levels),this.persistQualityLevel(t.currentQuality,t.levels);break;case a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack,t.tracks),this.mediaModel.set("audioTracks",t.tracks);break;case a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack,t.tracks);break;case"subtitlesTrackChanged":this.persistVideoSubtitleTrack(t.currentTrack,t.tracks);break;case"visualQuality":var s=i.extend({},t);this.mediaModel.set("visualQuality",s);break;case"autoplayFailed":this.set("autostartFailed",!0)}this.mediaController.trigger(e,n)}function l(){return!!e.isIOS()&&!(e.isIOS(6)||e.isIOS(7)||e.isIOS(8)||e.isIOS(9))}var c,d,p=this,h=e.noop;this.mediaController=i.extend({},r),this.mediaModel=new u,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(e){return i.extend(this.attributes,e,{item:0,state:s.IDLE,flashBlocked:!1,fullscreen:!1,scrubbing:!1,duration:0,position:0,buffer:0}),this.updateProviders(),this},this.getConfiguration=function(){return i.omit(this.clone(),["mediaModel"])},this.updateProviders=function(){c=new t(this.getConfiguration())},this.setQualityLevel=function(e,t){e>-1&&t.length>1&&"youtube"!==d.getName().name&&this.mediaModel.set("currentLevel",parseInt(e))},this.persistQualityLevel=function(e,t){var n=t[e]||{},i=n.label;this.set("qualityLabel",i)},this.setCurrentAudioTrack=function(e,t){e>-1&&t.length>0&&e<t.length&&this.mediaModel.set("currentAudioTrack",parseInt(e))},this.onMediaContainer=function(){var e=this.get("mediaContainer");h.setContainer(e)},this.changeVideoProvider=function(e){if(this.off("change:mediaContainer",this.onMediaContainer),d&&(d.off(null,null,this),d.getContainer()&&d.remove(),delete d.instreamMode),!e)return d=h=e,void this.set("provider",void 0);h=new e(p.get("id"),p.getConfiguration());
var t=this.get("mediaContainer");t?h.setContainer(t):this.once("change:mediaContainer",this.onMediaContainer),this.set("provider",h.getName()),h.getName().name.indexOf("flash")===-1&&(this.set("flashThrottle",void 0),this.set("flashBlocked",!1)),d=h,d.volume(p.get("volume")),d.mute(this.autoStartOnMobile()||p.get("mute")),d.on("all",o,this),this.get("instreamMode")===!0&&(d.instreamMode=!0),this.set("renderCaptionsNatively",d.renderNatively)},this.destroy=function(){this.off(),d&&(d.off(null,null,this),d.destroy())},this.getVideo=function(){return d},this.setFullscreen=function(e){e=!!e,e!==p.get("fullscreen")&&p.set("fullscreen",e)},this.chooseProvider=function(e){return c.choose(e).provider},this.setItemIndex=function(e){var t=this.get("playlist");e=parseInt(e,10)||0,e=(e+t.length)%t.length,this.set("item",e),this.set("playlistItem",t[e]),this.setActiveItem(t[e])},this.setActiveItem=function(t){this.mediaModel.off(),this.mediaModel=new u,this.set("mediaModel",this.mediaModel),this.set("position",t.starttime||0),this.set("minDvrWindow",t.minDvrWindow),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.setProvider(t)},this.setProvider=function(e){var t=e&&e.sources&&e.sources[0];if(void 0!==t){var n=this.chooseProvider(t);n&&h instanceof n||p.changeVideoProvider(n),h&&(h.init&&h.init(e),this.trigger("itemReady",e))}},this.getProviders=function(){return c},this.resetProvider=function(){h=null},this.setVolume=function(e){e=Math.round(e),this.set("volume",e),d&&d.volume(e);var t=0===e;t!==this.get("mute")&&this.setMute(t)},this.setMute=function(t){if(e.exists(t)||(t=!(this.get("autostartMuted")||this.get("mute"))),this.set("mute",t),d&&d.mute(t),!t){var n=Math.max(10,this.get("volume"));this.set("autostartMuted",!1),this.setVolume(n)}},this.loadVideo=function(t){if(!t){var n=this.get("item");t=this.get("playlist")[n]}this.set("position",t.starttime||0),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.mediaModel.set("playAttempt",!0),this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,{playReason:this.get("playReason")}),d.load(t)},this.stopVideo=function(){d&&d.stop()},this.playVideo=function(){d.play()},this.persistCaptionsTrack=function(){var e=this.get("captionsTrack");e?this.set("captionLabel",e.name):this.set("captionLabel","Off")},this.setVideoSubtitleTrack=function(e,t){this.set("captionsIndex",e),e&&t&&e<=t.length&&t[e-1].data&&this.set("captionsTrack",t[e-1]),d&&d.setSubtitlesTrack&&d.setSubtitlesTrack(e)},this.persistVideoSubtitleTrack=function(e,t){this.setVideoSubtitleTrack(e,t),this.persistCaptionsTrack()},this.setNextUp=function(e){this.set("nextUp",e)},this.autoStartOnMobile=function(){return this.get("autostart")&&!this.get("sdkplatform")&&(l()&&e.isSafari()||e.isAndroid()&&e.isChrome())&&(!this.get("advertising")||this.get("advertising").autoplayadsmuted)}},u=l.MediaModel=function(){this.set("state",s.IDLE)};return i.extend(l.prototype,o),i.extend(u.prototype,o),l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(8)],r=function(e){var t={},n=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return t.getPluginPathType=function(t){if("string"==typeof t){t=t.split("?")[0];var i=t.indexOf("://");if(i>0)return n.ABSOLUTE;var r=t.indexOf("/"),o=e.extension(t);return!(i<0&&r<0)||o&&isNaN(o)?n.RELATIVE:n.CDN}},t.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},t.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return function(){return i(e)}}var n={},i=e.memoize(function(e){var t=navigator.userAgent.toLowerCase();return null!==t.match(e)}),r=n.isInt=function(e){return parseFloat(e)%1===0};n.isFlashSupported=function(){var e=n.flashVersion();return e&&e>=11.2},n.isFF=t(/gecko\//i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS X/i);var o=n.isEdge=function(e){return i(e?new RegExp("\\sedge\\/"+e,"i"):/\sEdge\/\d+/i)},a=n.isIETrident=t(/trident\/.+rv:\s*11/i),s=n.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),i(new RegExp("msie\\s*"+e,"i"))):i(/msie/i)};n.isChrome=function(){return i(/\s(?:Chrome|CriOS)\//i)&&!n.isEdge()},n.isIE=function(e){return e?(e=parseFloat(e).toFixed(1),e>=12?o(e):e>=11?a():s(e)):o()||a()||s()},n.isSafari=function(){return i(/safari/i)&&!i(/chrome/i)&&!i(/crios/i)&&!i(/chromium/i)&&!i(/android/i)};var l=n.isIOS=function(e){return i(e?new RegExp("iP(hone|ad|od).+\\s(OS\\s"+e+"|.*\\sVersion/"+e+")","i"):/iP(hone|ad|od)/i)};n.isAndroidNative=function(e){return u(e,!0)};var u=n.isAndroid=function(e,t){return!(t&&i(/chrome\/[123456789]/i)&&!i(/chrome\/18/))&&(e?(r(e)&&!/\./.test(e)&&(e=""+e+"."),i(new RegExp("Android\\s*"+e,"i"))):i(/Android/i))};return n.isMobile=function(){return l()||u()},n.isIframe=function(){return window.frameElement&&"IFRAME"===window.frameElement.nodeName},n.flashVersion=function(){if(n.isAndroid())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){try{if(e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(i){return 0}return e}return 0},n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=window.chrome,t={};return t.NS="urn:x-cast:com.longtailvideo.jwplayer",t.debug=!1,t.availability=null,t.available=function(n){n=n||t.availability;var i="available";return e&&e.cast&&e.cast.ReceiverAvailability&&(i=e.cast.ReceiverAvailability.AVAILABLE),n===i},t.log=function(){if(t.debug){var e=Array.prototype.slice.call(arguments,0);console.log.apply(console,e)}},t.error=function(){var e=Array.prototype.slice.call(arguments,0);console.error.apply(console,e)},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(5)],r=function(e){function t(t){return t===e.COMPLETE||t===e.ERROR?e.IDLE:t}return function(e,n,i){if(n=t(n),i=t(i),n!==i){var r=n.replace(/(?:ing|d)$/,""),o={type:r,newstate:n,oldstate:i,reason:e.mediaModel.get("state")};"play"===r?o.playReason=e.get("playReason"):"pause"===r&&(o.pauseReason=e.get("pauseReason")),this.trigger(r,o)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(8)],r=function(e,t){function n(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var r=1;if(n[0].indexOf(" --> ")>0&&(r=0),n.length>r+1&&n[r+1]){var o=n[r],a=o.indexOf(" --> ");a>0&&(t.begin=i(o.substr(0,a)),t.end=i(o.substr(a+5)),t.text=n.slice(r+1).join("\r\n"))}return t}var i=e.seconds;return function(e){var i=[];e=t.trim(e);var r=e.split("\r\n\r\n");1===r.length&&(r=e.split("\n\n"));for(var o=0;o<r.length;o++)if("WEBVTT"!==r[o]){var a=n(r[o]);a.text&&i.push(a)}return i}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(51),n(130)],r=function(e,t,n){var i={sources:[],tracks:[],minDvrWindow:120};return function(r){r=r||{},e.isArray(r.tracks)||delete r.tracks;var o=e.extend({},i,r);e.isObject(o.sources)&&!e.isArray(o.sources)&&(o.sources=[t(o.sources)]),e.isArray(o.sources)&&0!==o.sources.length||(r.levels?o.sources=r.levels:o.sources=[t(r)]);for(var a=0;a<o.sources.length;a++){var s=o.sources[a];if(s){var l=s["default"];l?s["default"]="true"===l.toString():s["default"]=!1,o.sources[a].label||(o.sources[a].label=a.toString()),o.sources[a]=t(o.sources[a])}}return o.sources=e.compact(o.sources),e.isArray(o.tracks)||(o.tracks=[]),e.isArray(o.captions)&&(o.tracks=o.tracks.concat(o.captions),delete o.captions),o.tracks=e.compact(e.map(o.tracks,n)),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(8),n(1),n(138)],r=function(e,t,n){var i={};i.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},i.styleDimension=function(e){return e+(e.toString().indexOf("%")>0?"":"px")};var r=function(e){return t.isString(e.className)?e.className.split(" "):[]},o=function(t,n){n=e.trim(n),t.className!==n&&(t.className=n)};return i.classList=function(e){return e.classList?e.classList:r(e)},i.hasClass=n.hasClass,i.addClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");t.each(a,function(e){t.contains(i,e)||i.push(e)}),o(e,i.join(" "))},i.removeClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");o(e,t.difference(i,a).join(" "))},i.replaceClass=function(e,t,n){var i=e.className||"";t.test(i)?i=i.replace(t,n):n&&(i+=" "+n),o(e,i)},i.toggleClass=function(e,n,r){var o=i.hasClass(e,n);r=t.isBoolean(r)?r:!o,r!==o&&(r?i.addClass(e,n):i.removeClass(e,n))},i.emptyElement=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},i.addStyleSheet=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},i.empty=function(e){if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])},i.bounds=function(e){var t={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))return t;var n=e.getBoundingClientRect(),i=window.pageYOffset,r=window.pageXOffset;return n.width||n.height||n.left||n.top?(t.left=n.left+r,t.right=n.right+r,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.right-n.left,t.height=n.bottom-n.top,t):t},i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(34)],r=function(e,t){function n(e){return/^(?:(?:https?|file)\:)?\/\//.test(e)}function i(t){return e.some(t,function(e){return"parsererror"===e.nodeName})}var r={};return r.getAbsolutePath=function(e,i){if(t.exists(i)||(i=document.location.href),t.exists(e)){if(n(e))return e;var r,o=i.substring(0,i.indexOf("://")+3),a=i.substring(o.length,i.indexOf("/",o.length+1));if(0===e.indexOf("/"))r=e.split("/");else{var s=i.split("?")[0];s=s.substring(o.length+a.length+1,s.lastIndexOf("/")),r=s.split("/").concat(e.split("/"))}for(var l=[],u=0;u<r.length;u++)r[u]&&t.exists(r[u])&&"."!==r[u]&&(".."===r[u]?l.pop():l.push(r[u]));return o+a+"/"+l.join("/")}},r.getScriptPath=e.memoize(function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var i=t[n].src;if(i&&i.indexOf(e)>=0)return i.substr(0,i.indexOf(e))}return""}),r.parseXML=function(e){var t=null;try{"DOMParser"in window?(t=(new window.DOMParser).parseFromString(e,"text/xml"),(i(t.childNodes)||t.childNodes&&i(t.childNodes[0].childNodes))&&(t=null)):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(n){}return t},r.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e},r.parseDimension=function(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e},r.timeFormat=function(t,n){if(t<=0&&!n||e.isNaN(parseInt(t)))return"00:00";var i=t<0?"-":"";t=Math.abs(t);var r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),a=Math.floor(t%60);return i+(r?r+":":"")+(o<10?"0":"")+o+":"+(a<10?"0":"")+a},r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={};return t.exists=function(e){switch(typeof e){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1}return!0},t.isHTTPS=function(){return 0===window.location.href.indexOf("https")},t.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},t.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},t.youTubeID=function(e){var t=/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);return t?t.slice(1).join("").replace("?",""):""},t.typeOf=function(t){if(null===t)return"null";var n=typeof t;return"object"===n&&e.isArray(t)?"array":n},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(62),n(7),n(94),n(2)],r=function(e,t,n,i){var r=e.extend({constructor:function(e,t){this.className=e+" jw-background-color jw-reset",this.orientation=t,this.dragStartListener=this.dragStart.bind(this),this.dragMoveListener=this.dragMove.bind(this),this.dragEndListener=this.dragEnd.bind(this),this.tapListener=this.tap.bind(this),this.setup()},setup:function(){var e={"default":this["default"],className:this.className,orientation:"jw-slider-"+this.orientation};this.el=i.createElement(n(e)),this.elementRail=this.el.getElementsByClassName("jw-slider-container")[0],this.elementBuffer=this.el.getElementsByClassName("jw-buffer")[0],this.elementProgress=this.el.getElementsByClassName("jw-progress")[0],this.elementThumb=this.el.getElementsByClassName("jw-knob")[0],this.userInteract=new t(this.element(),{preventScrolling:!0}),this.userInteract.on("dragStart",this.dragStartListener),this.userInteract.on("drag",this.dragMoveListener),this.userInteract.on("dragEnd",this.dragEndListener),this.userInteract.on("tap click",this.tapListener)},dragStart:function(){this.trigger("dragStart"),this.railBounds=i.bounds(this.elementRail)},dragEnd:function(e){this.dragMove(e),this.trigger("dragEnd")},dragMove:function(e){var t,n,r=this.railBounds=this.railBounds?this.railBounds:i.bounds(this.elementRail);"horizontal"===this.orientation?(t=e.pageX,n=t<r.left?0:t>r.right?100:100*i.between((t-r.left)/r.width,0,1)):(t=e.pageY,n=t>=r.bottom?0:t<=r.top?100:100*i.between((r.height-(t-r.top))/r.height,0,1));var o=this.limit(n);return this.render(o),this.update(o),!1},tap:function(e){this.railBounds=i.bounds(this.elementRail),this.dragMove(e)},limit:function(e){return e},update:function(e){this.trigger("update",{percentage:e})},render:function(e){e=Math.max(0,Math.min(e,100)),"horizontal"===this.orientation?(this.elementThumb.style.left=e+"%",this.elementProgress.style.width=e+"%"):(this.elementThumb.style.bottom=e+"%",this.elementProgress.style.height=e+"%")},updateBuffer:function(e){this.elementBuffer.style.width=e+"%"},element:function(){return this.el}});return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(62),n(2)],r=function(e,t){var n=e.extend({constructor:function(e,t,n){this.el=document.createElement("div"),this.el.className="jw-icon jw-icon-tooltip "+e+" jw-button-color jw-reset jw-hidden",t&&(this.el.setAttribute("tabindex","0"),this.el.setAttribute("role","button"),this.el.setAttribute("aria-label",t)),n===!0?this.el.setAttribute("aria-hidden","false"):this.el.setAttribute("aria-hidden","true"),this.container=document.createElement("div"),this.container.className="jw-overlay jw-reset",this.openClass="jw-open",this.componentType="tooltip",this.el.appendChild(this.container)},addContent:function(e){this.content&&this.removeContent(),this.content=e,this.container.appendChild(e)},removeContent:function(){this.content&&(this.container.removeChild(this.content),this.content=null)},hasContent:function(){return!!this.content},element:function(){return this.el},openTooltip:function(e){this.trigger("open-"+this.componentType,e,{isOpen:!0}),this.isOpen=!0,t.toggleClass(this.el,this.openClass,this.isOpen)},closeTooltip:function(e){this.trigger("close-"+this.componentType,e,{isOpen:!1}),this.isOpen=!1,t.toggleClass(this.el,this.openClass,this.isOpen)},toggleOpenState:function(e){this.isOpen?this.closeTooltip(e):this.openTooltip(e)}});return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(16)],r=function(e,t){var n,i=[{configName:"clearkey",keyName:"org.w3.clearkey"},{configName:"widevine",keyName:"com.widevine.alpha"},{configName:"playready",keyName:"com.microsoft.playready"}],r=[],o={},a=function(t){var n=t.get("playlist");return!!t.get("drm")||e.some(n,function(t){return!!t.drm||e.some(t.sources,function(e){return!!e.drm})})},s=function(e){return new Promise(function(t,n){var i;try{i=new window.MSMediaKeys(e)}catch(r){}i?t():n()})},l=function(t){var a=s;return navigator.requestMediaKeySystemAccess&&(a=navigator.requestMediaKeySystemAccess.bind(navigator)),n?n.then(t):(e.forEach(i,function(e){var t=a(e.keyName,[{}]).then(function(){o[e.configName]=!0},function(){o[e.configName]=!1});r.push(t)}),n=Promise.all(r).then(t))},u=function(){return!!navigator.requestMediaKeySystemAccess&&!!MediaKeySystemAccess.prototype.getConfiguration||!!window.MSMediaKeys},c=function(e){return o[e]},d=function(t){n||console.error('DRM only supported with "drm" block in initial setup.',t);var i=e.keys(t);return e.some(i,function(e){return c(e)})};return{containsDrm:a,probe:function(e,n){u()&&t(n)("drm")?l(e):e()},anySupported:d,isSupported:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(27),n(16),n(1),n(135),n(37)],r=function(e,t,n,i,r){function o(){return!!window.MediaSource&&!!window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')}function a(i,o){if(e.isSafari())return!1;var a=t(o);if(!a("dash"))return!1;if(i.drm&&!r.anySupported(i.drm))return!1;var s=window.MediaSource;if(!window.HTMLVideoElement||!s)return!1;var l=!0;return i.mediaTypes&&(l=n.all(i.mediaTypes,function(e){return s.isTypeSupported(e)})),l&&("dash"===i.type||"mpd"===i.type||(i.file||"").indexOf("mpd-time-csf")>-1)}var s=n.find(i,n.matches({name:"flash"})),l=s.supports;s.supports=function(n,i){if(!e.isFlashSupported()||n.drm)return!1;var r=n&&n.type;if("hls"===r||"m3u8"===r){var o=t(i);return o("hls")}return l.apply(this,arguments)};var u=n.find(i,n.matches({name:"html5"})),c=u.supports;return u.supports=function(e,n){var i=c.apply(this,arguments);if(i&&e.drm&&"hls"===e.type){var r=t(n),o=r("drm");if(o&&e.drm.fairplay){var a=window.WebKitMediaKeys;return a&&a.isTypeSupported&&a.isTypeSupported("com.apple.fps.1_0","video/mp4")}return o}return i},i.push({name:"shaka",supports:a}),i.push({name:"hlsjs",supports:function(n,i){if((e.isChrome()||e.isFF())&&o()&&!e.isMobile()&&!n.drm){var r=n&&n.type,a=n&&n.file;if(a.indexOf(".m3u8")>-1||"hls"===r||"m3u8"===r){var s=t(i);return s("hls")}}}}),i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(136),n(1),n(38)],r=function(e,t){function i(e,n,i){var r=t.indexOf(e,t.findWhere(e,{name:i})),o=t.indexOf(e,t.findWhere(e,{name:n})),a=e.splice(o,1)[0];e.splice(r,0,a)}var r,o=e.registerProvider,a=e.prototype.reorderProviders;return t.extend(e.loaders,{shaka:function(e){n.e(2,function(require){var t=n(72);o(t),e(t)})},hlsjs:function(e){n.e(1,function(require){var t=n(43);t["default"]&&(t=t["default"]),t.setEdition&&t.setEdition(r),o(t),e(t)})}}),t.extend(e.prototype,{reorderProviders:function(e){var t=a.call(this,e);return"flash"!==e&&i(t,"hlsjs","flash"),t},providerSupports:function(e,t){return r=this.config.edition,e.supports(t,r)}}),e}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}t.__esModule=!0,t.HandlebarsEnvironment=r;var o=n(11),a=n(17),s=i(a),l=n(99),u=n(97),c=n(107),d=i(c),p="4.0.5";t.VERSION=p;var h=7;t.COMPILER_REVISION=h;var f={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=f;var g="[object Object]";r.prototype={constructor:r,logger:d["default"],log:d["default"].log,registerHelper:function(e,t){if(o.toString.call(e)===g){if(t)throw new s["default"]("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===g)o.extend(this.partials,e);else{if("undefined"==typeof t)throw new s["default"]('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===g){if(t)throw new s["default"]("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var m=d["default"].log;t.log=m,t.createFrame=o.createFrame,t.logger=d["default"]},function(e,t,n){var i,r;i=[n(2),n(1)],r=function(e,t){function i(n){t.each(n,function(t,i){n[i]=e.serialize(t)})}function r(e){return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e}function o(t,n){if(n.toString().indexOf("%")===-1)return 0;if("string"!=typeof t||!e.exists(t))return 0;if(/^\d*\.?\d+%$/.test(t))return t;var i=t.indexOf(":");if(i===-1)return 0;var r=parseFloat(t.substr(0,i)),o=parseFloat(t.substr(i+1));return r<=0||o<=0?0:o/r*100+"%"}var a={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:"uniform",mute:!1,volume:90,width:480,height:270,localization:{play:"Play",playback:"Start playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed captions",audioTracks:"Audio tracks",replay:"Replay",buffer:"Loading",more:"More",liveBroadcast:"Live broadcast",loadingAd:"Loading ad",rewind:"Rewind 10s",nextUp:"Next Up",related:"Related"},renderCaptionsNatively:!1},s=function(s,l){var u=l&&l.getAllItems(),c=t.extend({},(window.jwplayer||{}).defaults,u,s);i(c),c.localization=t.extend({},a.localization,c.localization);var d=t.extend({},a,c);"."===d.base&&(d.base=e.getScriptPath("jwplayer.js")),d.base=(d.base||e.loadFrom()).replace(/\/?$/,"/"),n.p=d.base,d.width=r(d.width),d.height=r(d.height);var p=e.getScriptPath("jwplayer.js")||d.base;if(d.flashplayer=d.flashplayer||p+"jwplayer.flash.swf",d.flashloader=d.flashloader||p+"jwplayer.loader.swf","http:"===window.location.protocol&&(d.flashplayer=d.flashplayer.replace("https","http"),d.flashloader=d.flashloader.replace("https","http")),d.aspectratio=o(d.aspectratio,d.width),t.isObject(d.skin)&&(d.skinUrl=d.skin.url,d.skinColorInactive=d.skin.inactive,d.skinColorActive=d.skin.active,d.skinColorBackground=d.skin.background,d.skin=t.isString(d.skin.name)?d.skin.name:a.skin),t.isString(d.skin)&&d.skin.indexOf(".xml")>0&&(console.log("JW Player does not support XML skins, please update your config"),d.skin=d.skin.replace(".xml","")),d.aspectratio||delete d.aspectratio,!d.playlist){var h=t.pick(d,["title","description","type","mediaid","image","file","sources","tracks","preload"]);d.playlist=[h]}return d};return s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i;i=function(){function e(e){if("string"!=typeof e)return!1;var t=o[e.toLowerCase()];return!!t&&e.toLowerCase()}function t(e){if("string"!=typeof e)return!1;var t=a[e.toLowerCase()];return!!t&&e.toLowerCase()}function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}function i(i,o,a){var s=this,l=/MSIE\s8\.0/.test(navigator.userAgent),u={};l?s=document.createElement("custom"):u.enumerable=!0,s.hasBeenReset=!1;var c="",d=!1,p=i,h=o,f=a,g=null,m="",w=!0,v="auto",y="start",j=50,b="middle",E=50,x="middle";if(Object.defineProperty(s,"id",n({},u,{get:function(){return c},set:function(e){c=""+e}})),Object.defineProperty(s,"pauseOnExit",n({},u,{get:function(){return d},set:function(e){d=!!e}})),Object.defineProperty(s,"startTime",n({},u,{get:function(){return p},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");p=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",n({},u,{get:function(){return h},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");h=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",n({},u,{get:function(){return f},set:function(e){f=""+e,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",n({},u,{get:function(){return g},set:function(e){g=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",n({},u,{get:function(){return m},set:function(t){var n=e(t);if(n===!1)throw new SyntaxError("An invalid or illegal string was specified.");m=n,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",n({},u,{get:function(){return w},set:function(e){w=!!e,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",n({},u,{get:function(){return v},set:function(e){if("number"!=typeof e&&e!==r)throw new SyntaxError("An invalid number or illegal string was specified.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",n({},u,{get:function(){return y},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");y=n,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",n({},u,{get:function(){return j},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");j=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",n({},u,{get:function(){return b},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");b=n,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",n({},u,{get:function(){return E},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");E=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",n({},u,{get:function(){return x},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");x=n,this.hasBeenReset=!0}})),s.displayState=void 0,l)return s}if(window.VTTCue)return window.VTTCue;var r="auto",o={"":!0,lr:!0,rl:!0},a={start:!0,middle:!0,end:!0,left:!0,right:!0};return i.prototype.getCueAsHTML=function(){var e=window.WebVTT;return e.convertCueToDOMTree(window,this.text)},i}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},,function(e,t,n){var i,r;i=[n(8),n(20),n(128),n(129),n(31)],r=function(e,t,n,i,r){function o(t){for(var o={},s=0;s<t.childNodes.length;s++){var l=t.childNodes[s],c=u(l);if(c)switch(c.toLowerCase()){case"enclosure":o.file=e.xmlAttribute(l,"url");break;case"title":o.title=a(l);break;case"guid":o.mediaid=a(l);break;case"pubdate":o.date=a(l);break;case"description":o.description=a(l);break;case"link":o.link=a(l);break;case"category":o.tags?o.tags+=a(l):o.tags=a(l)}}return o=i(t,o),o=n(t,o),new r(o)}var a=t.textContent,s=t.getChildNode,l=t.numChildren,u=t.localName,c={};return c.parse=function(e){for(var t=[],n=0;n<l(e);n++){var i=s(e,n),r=u(i).toLowerCase();if("channel"===r)for(var a=0;a<l(i);a++){var c=s(i,a);"item"===u(c).toLowerCase()&&t.push(o(c))}}return t},c}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(48),n(2),n(3),n(4),n(1)],r=function(e,t,n,i,r,o){var a=function(){function a(r){var a=n.tryCatch(function(){var n,a=r.responseXML?r.responseXML.childNodes:null,s="";if(a){for(var c=0;c<a.length&&(s=a[c],8===s.nodeType);c++);"xml"===e.localName(s)&&(s=s.nextSibling),"rss"===e.localName(s)&&(n={playlist:t.parse(s)})}if(!n)try{var d=JSON.parse(r.responseText);if(o.isArray(d))n={playlist:d};else{if(!o.isArray(d.playlist))throw null;n=d}}catch(p){return void l("Not a valid RSS/JSON feed")}u.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)});a instanceof n.Error&&l()}function s(e){l("Playlist load error: "+e)}function l(e){u.trigger(i.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var u=o.extend(this,r);this.load=function(e){n.ajax(e,a,s)},this.destroy=function(){this.off()}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(31),n(51),n(1),n(39)],r=function(e,t,n,i){function r(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=t.choose(i);if(r)return{type:i.type,provider:r.providerToCheck}}return null}function o(e,t){return n.isUndefined(e)?t:e}var a=function(t){return t=n.isArray(t)?t:[t],n.compact(n.map(t,e))};a.filterPlaylist=function(e,t,i,r,a,u,c){var d=[];return n.each(e,function(e){e=n.extend({},e),e.allSources=s(e.sources,i,e.drm||r,e.preload||a,o(e.withCredentials,c)),e.sources=l(e.allSources,t),e.sources.length&&(e.file=e.sources[0].file,(e.preload||a)&&(e.preload=e.preload||a),(e.feedid||u)&&(e.feedid=e.feedid||u),d.push(e))}),d};var s=function(e,i,r,a,s){return n.compact(n.map(e,function(e){if(n.isObject(e)){void 0!==i&&null!==i&&(e.androidhls=i),(e.drm||r)&&(e.drm=e.drm||r),(e.preload||a)&&(e.preload=e.preload||a);var l=o(e.withCredentials,s);return n.isUndefined(l)||(e.withCredentials=l),t(e)}}))},l=function(e,t){t&&t.choose||(t=new i({primary:t?"flash":null}));var o=r(e,t);if(!o)return[];var a=o.provider,s=o.type;return n.filter(e,function(e){return e.type===s&&t.providerSupports(a,e)})};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(8),n(1)],r=function(e,t,n){var i={"default":!1},r=function(r){if(r&&r.file){var o=n.extend({},i,r);o.file=t.trim(""+o.file);var a=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(a.test(o.type)&&(o.mimeType=o.type,o.type=o.type.replace(a,"$1")),e.isYouTube(o.file)?o.type="youtube":e.isRtmp(o.file)?o.type="rtmp":o.type||(o.type=t.extension(o.file)),o.type){switch(o.type){case"m3u8":case"vnd.apple.mpegurl":o.type="hls";break;case"dash+xml":o.type="dash";break;case"smil":o.type="rtmp";break;case"m4a":o.type="aac"}return n.each(o,function(e,t){""===e&&delete o[t]}),o}}};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(26),n(3),n(4),n(15),n(1)],r=function(e,t,n,i,r,o){var a={FLASH:0,JAVASCRIPT:1,HYBRID:2},s=function(s){function l(){switch(t.getPluginPathType(s)){case t.pluginPathType.ABSOLUTE:return s;case t.pluginPathType.RELATIVE:return e.getAbsolutePath(s,window.location.href)}}function u(){o.defer(function(){m=r.loaderstatus.COMPLETE,g.trigger(n.COMPLETE)})}function c(){m=r.loaderstatus.ERROR,g.trigger(n.ERROR,{url:s})}var d,p,h,f,g=o.extend(this,i),m=r.loaderstatus.NEW;this.load=function(){if(m===r.loaderstatus.NEW){if(s.lastIndexOf(".swf")>0)return d=s,m=r.loaderstatus.COMPLETE,void g.trigger(n.COMPLETE);if(t.getPluginPathType(s)===t.pluginPathType.CDN)return m=r.loaderstatus.COMPLETE,void g.trigger(n.COMPLETE);m=r.loaderstatus.LOADING;var e=new r(l());e.on(n.COMPLETE,u),e.on(n.ERROR,c),e.load()}},this.registerPlugin=function(e,t,i,o){f&&(clearTimeout(f),f=void 0),h=t,i&&o?(d=o,p=i):"string"==typeof i?d=i:"function"==typeof i?p=i:i||o||(d=e),m=r.loaderstatus.COMPLETE,g.trigger(n.COMPLETE)},this.getStatus=function(){return m},this.getPluginName=function(){return t.getPluginName(s)},this.getFlashPath=function(){if(d)switch(t.getPluginPathType(d)){case t.pluginPathType.ABSOLUTE:return d;case t.pluginPathType.RELATIVE:return s.lastIndexOf(".swf")>0?e.getAbsolutePath(d,window.location.href):e.getAbsolutePath(d,l())}return null},this.getJS=function(){return p},this.getTarget=function(){return h},this.getPluginmode=function(){return void 0!==typeof d&&void 0!==typeof p?a.HYBRID:void 0!==typeof d?a.FLASH:void 0!==typeof p?a.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new p(e,t,n)},this.getURL=function(){return s}};return s}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,function(e,t,n){var i,r;i=[n(27)],r=function(e){return function(t){if("hls"===t.type){if(t.androidhls===!1&&e.isAndroid())return!1;var n=e.isAndroidNative;if(n(2)||n(3)||n("4.0"))return!1;if(e.isAndroid()&&!e.isFF())return!0}return null}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(1),n(33)],r=function(e,t){function n(e){e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort()}function i(t,i){return function(r){var o=r.currentTarget||i.xhr;if(clearTimeout(i.timeoutId),i.retryWithoutCredentials&&i.xhr.withCredentials){n(o);var a=e.extend({},i,{xhr:null,withCredentials:!1,retryWithoutCredentials:!1});return void d(a)}i.onerror(t,i.url,o)}}function r(e){return function(t){var n=t.currentTarget||e.xhr;if(4===n.readyState){if(clearTimeout(e.timeoutId),n.status>=400){var i;return i=404===n.status?"File not found":""+n.status+"("+n.statusText+")",e.onerror(i,e.url,n)}if(200===n.status)return o(e)(t)}}}function o(e){return function(n){var i=n.currentTarget||e.xhr;if(clearTimeout(e.timeoutId),
e.responseType){if("json"===e.responseType)return a(i,e)}else{var r,o=i.responseXML;if(o)try{r=o.firstChild}catch(l){}if(o&&r)return s(i,o,e);if(u&&i.responseText&&!o&&(o=t.parseXML(i.responseText),o&&o.firstChild))return s(i,o,e);if(e.requireValidXML)return void e.onerror("Invalid XML",e.url,i)}e.oncomplete(i)}}function a(t,n){if(!t.response||e.isString(t.response)&&'"'!==t.responseText.substr(1))try{t=e.extend({},t,{response:JSON.parse(t.responseText)})}catch(i){return void n.onerror("Invalid JSON",n.url,t)}return n.oncomplete(t)}function s(t,n,i){var r=n.documentElement;return i.requireValidXML&&("parsererror"===r.nodeName||r.getElementsByTagName("parsererror").length)?void i.onerror("Invalid XML",i.url,t):(t.responseXML||(t=e.extend({},t,{responseXML:n})),i.oncomplete(t))}var l=function(){},u=!1,c=function(e){var t=document.createElement("a"),n=document.createElement("a");t.href=location.href;try{return n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host}catch(i){}return!0},d=function(t,a,s,d){e.isObject(t)&&(d=t,t=d.url);var p,h=e.extend({xhr:null,url:t,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,timeoutId:-1,oncomplete:a||l,onerror:s||l,mimeType:d&&!d.responseType?"text/xml":"",requireValidXML:!1,responseType:d&&d.plainText?"text":""},d);if("XDomainRequest"in window&&c(t))p=h.xhr=new window.XDomainRequest,p.onload=o(h),p.ontimeout=p.onprogress=l,u=!0;else{if(!("XMLHttpRequest"in window))return void h.onerror("",t);p=h.xhr=new window.XMLHttpRequest,p.onreadystatechange=r(h)}var f=i("Error loading file",h);p.onerror=f,"overrideMimeType"in p?h.mimeType&&p.overrideMimeType(h.mimeType):u=!0;try{t=t.replace(/#.*$/,""),p.open("GET",t,!0)}catch(g){return f(g),p}if(h.responseType)try{p.responseType=h.responseType}catch(g){}h.timeout&&(h.timeoutId=setTimeout(function(){n(p),h.onerror("Timeout",t,p)},h.timeout),p.onabort=function(){clearTimeout(h.timeoutId)});try{h.withCredentials&&"withCredentials"in p&&(p.withCredentials=!0),p.send()}catch(g){f(g)}return p};return{ajax:d,crossdomain:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(4),n(1)],r=function(e,t,n){function i(e,t,n){var i=document.createElement("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function r(r,o,l,u){var c;if(u=u||"opaque",e.isMSIE()){var d=document.createElement("div");o.appendChild(d),d.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+l+'" name="'+l+'" tabindex="0"><param name="movie" value="'+r+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+u+'"><param name="bgcolor" value="'+s+'"><param name="menu" value="false"></object>';for(var p=o.getElementsByTagName("object"),h=p.length;h--;)p[h].id===l&&(c=p[h])}else c=document.createElement("object"),c.setAttribute("type","application/x-shockwave-flash"),c.setAttribute("data",r),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("bgcolor",s),c.setAttribute("id",l),c.setAttribute("name",l),i(c,"allowfullscreen","true"),i(c,"allowscriptaccess","always"),i(c,"wmode",u),i(c,"menu","false"),o.appendChild(c,o);return c.className="jw-swf jw-reset",c.style.display="block",c.style.position="absolute",c.style.left=0,c.style.right=0,c.style.top=0,c.style.bottom=0,e.isIE()&&"PointerEvent"in window&&(c.style.pointerEvents="none"),n.extend(c,t),c.queueCommands=!0,c.triggerFlash=function(t){var i=this;if("setup"!==t&&i.queueCommands||!i.__externalCall){for(var r=i.__commandQueue,o=r.length;o--;)r[o][0]===t&&r.splice(o,1);return r.push(Array.prototype.slice.call(arguments)),i}var s=Array.prototype.slice.call(arguments,1),l=e.tryCatch(function(){if(s.length){for(var e=s.length;e--;)"object"==typeof s[e]&&n.each(s[e],a);var r=JSON.stringify(s);i.__externalCall(t,r)}else i.__externalCall(t)});return l instanceof e.Error&&(console.error(t,l),"setup"===t)?(l.name="Failed to setup flash",l):i},c.__commandQueue=[],c}function o(e){e&&e.parentNode&&(e.style.display="none",e.parentNode.removeChild(e))}function a(e,t,n){e instanceof window.HTMLElement&&delete n[t]}var s="#000000";return{embed:r,remove:o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(1)],r=function(e,t){function n(){}var i=function(e,n){var i,r=this;i=e&&t.has(e,"constructor")?e.constructor:function(){return r.apply(this,arguments)},t.extend(i,r,n);var o=function(){this.constructor=i};return o.prototype=r.prototype,i.prototype=new o,e&&t.extend(i.prototype,e),i.__super__=r.prototype,i};return n.extend=i,t.extend(n.prototype,e),n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(22),n(1),n(34),n(33),n(24)],r=function(e,t,n,i,r){var o={};return o.repo=t.memoize(function(){var t=r.split("+")[0],i=e.repo+t+"/";return n.isHTTPS()?i.replace(/^http:/,"https:"):i}),o.versionCheck=function(e){var t=("0"+e).split(/\W/),n=r.split(/\W/),i=parseFloat(t[0]),o=parseFloat(n[0]);return!(i>o)&&!(i===o&&parseFloat("0"+t[1])>parseFloat(n[1]))},o.loadFrom=function(){return o.repo()},o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t=function(){var t={},n={},i={},r={};return{start:function(n){t[n]=e.now(),i[n]=i[n]+1||1},end:function(i){if(t[i]){var r=e.now()-t[i];n[i]=n[i]+r||r}},dump:function(){return{counts:i,sums:n,events:r}},tick:function(t,n){r[t]=n||e.now()},between:function(e,t){return r[t]&&r[e]?r[t]-r[e]:-1}}};return t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return document.createElement("video")}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){var t=function(t,n,i){var r=document.createElement("div");return r.className="jw-icon jw-icon-inline jw-button-color jw-reset "+t,r.setAttribute("role","button"),r.setAttribute("tabindex","0"),i&&r.setAttribute("aria-label",i),r.style.display="none",n&&new e(r).on("click tap",function(){n()}),{element:function(){return r},toggle:function(e){e?this.show():this.hide()},show:function(){r.style.display=""},hide:function(){r.style.display="none"}}};return t}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i;i=function(require,e,t){function n(e,t){r(t,o(e))}function i(e){var t=c[e];if(t){for(var n=Object.keys(t),i=0;i<n.length;i+=1)for(var r=t[n[i]],o=0;o<r.parts.length;o+=1)r.parts[o]();delete c[e]}}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=(c[e]||{})[i.id];if(r){for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(e,i.parts[o]))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(l(e,i.parts[o]));c[e]=c[e]||{},c[e][i.id]={id:i.id,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],s=r[2],l={css:a,media:s};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function a(e){h().appendChild(e)}function s(e){var t=document.createElement("style");return t.type="text/css",t.setAttribute("data-jwplayer-id",e),a(t),t}function l(e,t){var n,i,r,o=d[e];o||(o=d[e]={element:s(e),counter:0});var a=o.counter++;return n=o.element,i=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0),i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media)return;i(t=e)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}var c={},d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=p(function(){return document.head||document.getElementsByTagName("head")[0]});t.exports={style:n,clear:i};var f=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=[n(116),n(21),n(1)],r=function(e,t,n){var i=e.selectPlayer,r=function(){var e=i.apply(this,arguments);return e?e:{registerPlugin:function(e,n,i){"jwpsrv"!==e&&t.registerPlugin(e,n,i)}}};return n.extend(e,{selectPlayer:r})}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(2),n(74),n(16)],r=function(e,t,n){var i="invalid",r="RnXcsftYjWRDA^Uy",o=function(o){function a(o){e.exists(o)||(o="");try{o=t.decrypt(o,r);var a=o.split("/");s=a[0],"pro"===s&&(s="premium");var c=n(s);if(a.length>2&&c("setup")){l=a[1];var d=parseInt(a[2]);d>0&&(u=new Date,u.setTime(d))}else s=i}catch(p){s=i}}var s,l,u;this.edition=function(){return u&&u.getTime()<(new Date).getTime()?i:s},this.token=function(){return l},this.expiration=function(){return u},a(o)};return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e){return window.atob(e)},t=function(e){return unescape(encodeURIComponent(e))},n=function(e){try{return decodeURIComponent(escape(e))}catch(t){return e}},i=function(e){for(var t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t},r=function(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};return{decrypt:function(o,a){if(o=String(o),a=String(a),0==o.length)return"";for(var s,l,u=i(e(o)),c=i(t(a).slice(0,16)),d=u.length,p=u[d-1],h=u[0],f=2654435769,g=Math.floor(6+52/d),m=g*f;0!=m;){l=m>>>2&3;for(var w=d-1;w>=0;w--)p=u[w>0?w-1:d-1],s=(p>>>5^h<<2)+(h>>>3^p<<4)^(m^h)+(c[3&w^l]^p),h=u[w]-=s;m-=f}var v=r(u);return v=v.replace(/\0+$/,""),n(v)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(159),n(3),n(170)],r=function(e,t,n){var i=function(i,r){var o=new e(i,r),a=o.setup;return o.setup=function(){a.call(this),r.on("change:skipButton",this.onSkipButton,this),r.on("change:castActive change:playlistItem",this.showDisplayIconImage,this)},o.showDisplayIconImage=function(e){var t=e.get("castActive"),n=e.get("playlistItem"),i=o.controlsContainer().getElementsByClassName("jw-display-icon-container")[0];t&&n&&n.image?(i.style.backgroundImage='url("'+n.image+'")',i.style.backgroundSize="contain"):(i.style.backgroundImage="",i.style.backgroundSize="")},o.onSkipButton=function(e,t){t?this.addSkipButton():this._skipButton&&(this._skipButton.destroy(),this._skipButton=null)},o.addSkipButton=function(){this._skipButton=new n(this.instreamModel),this._skipButton.on(t.JWPLAYER_AD_SKIPPED,function(){this.api.skipAd()},this),this.controlsContainer().appendChild(this._skipButton.element())},o};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,function(e,t,n){t=e.exports=n(82)(),t.push([e.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url("+n(84)+") format('woff'),url("+n(83)+') format(\'truetype\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-rewind:before{content:"\\E900"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#212121}.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2.5em}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container,.jw-display-icon-container .jw-icon,.jw-dock .jw-dock-button,.jw-logo,.jw-media,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.75em;width:3.75em;margin:-1.875em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2.5em}.jw-breakpoint-0 .jw-display-icon-container{height:44px;width:44px;margin:-22px auto 0}.jw-breakpoint-0 .jw-display-icon-container .jw-icon{font-size:22px}.jw-breakpoint-1 .jw-display-icon-container{height:55px;width:55px;margin:-27.5px auto 0}.jw-breakpoint-1 .jw-display-icon-container .jw-icon{font-size:35.2px}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;bottom:0;height:2.5em;width:100%;padding:0 .5em}.jw-controlbar .jw-hidden{display:none}.jw-background-color{background-color:rgba(33,33,33,.8)}.jw-slider-horizontal{background-color:transparent}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .5em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2.5em;position:relative;line-height:2.5em;vertical-align:middle;cursor:pointer;padding:0 .5em}.jw-icon-inline,.jw-icon-tooltip{min-width:1.5625em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-button-color{color:hsla(0,0%,100%,.6)}.jw-button-color:hover{color:#fff}.jw-button-color:focus{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:hsla(0,0%,100%,.6)}.jw-toggle:focus{outline:none;color:#fff}.jw-dock{clear:right;margin:.75em;display:block;opacity:1}.jw-breakpoint-0 .jw-dock{margin:.225em .1125em}.jw-breakpoint-1 .jw-dock{margin:.45em .225em}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;height:2.5em;margin:.5em;position:relative;width:2.5em}.jw-breakpoint-0 .jw-dock-button{margin:0 .1125em;height:44px;width:44px}.jw-breakpoint-1 .jw-dock-button{margin:0 .225em;height:44px;width:44px}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{height:1em;width:100%;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:hsla(0,0%,100%,.2)}.jw-buffer{background-color:hsla(0,0%,100%,.3)}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{height:.25em;background-color:rgba(33,33,33,.9);border-radius:25%;width:.5em}.jw-knob{background-color:#fff;width:.5em;height:.5em;border-radius:.25em}.jw-slider-horizontal{height:.25em}.jw-slider-horizontal.jw-slider-volume{width:4em}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-horizontal .jw-knob{top:-.125em;margin-left:-.25em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.25em}.jw-slider-vertical{padding:1em 1em 0;position:absolute}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.25em}.jw-slider-vertical .jw-slider-container{height:4em}.jw-slider-vertical .jw-knob{right:0;left:-.125em}.jw-slider-time{width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;width:100%;height:inherit;text-align:center;display:none;max-height:81.375%;line-height:1.3em;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-text-track-display{font-size:inherit;line-height:1.3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:81.375%;line-height:1.3em}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden{display:none}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;bottom:1.25em;padding:.5em;border-radius:.25em}.jw-time-tip .jw-text{color:#fff;line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2.5em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:hsla(0,0%,100%,.6);padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#fff}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-controlbar .jw-option.jw-active-option{color:#fff}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em;padding:.5em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:hsla(0,0%,100%,.6);vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-nextup-container{-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;background-color:transparent;bottom:3em;cursor:pointer;max-width:300px;min-width:200px;opacity:0;position:absolute;right:.5em;-webkit-transform:translateY(5px);transform:translateY(5px);-webkit-transition:all .15s ease;transition:all .15s ease;visibility:hidden;width:40%}.jw-nextup-container-visible{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-nextup{border-radius:0;overflow:hidden;position:relative}.jw-nextup-header{background:rgba(33,33,33,.8);box-sizing:border-box;color:#fff;font-size:12px;font-weight:700;line-height:normal;padding:8px}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff;overflow:hidden}.jw-nextup-thumbnail{background-position:50%;background-size:cover;display:none;float:left;height:60px;width:45%}.jw-nextup-thumbnail-visible{display:block}.jw-nextup-title{box-sizing:border-box;float:left;font-size:12px;font-weight:700;line-height:1.3;overflow:hidden;padding:5px 6px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-thumbnail-visible+.jw-nextup-title{height:60px;white-space:normal;width:55%}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000);bottom:0;content:\'\';height:30px;left:0;position:absolute;width:100%}.jw-nextup-close{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale;border:none;color:hsla(0,0%,100%,.6);font-size:13px;opacity:0;position:absolute;right:5px;top:6px;-webkit-transition:color .15s ease,opacity .15s ease,visibility .15s ease;transition:color .15s ease,opacity .15s ease,visibility .15s ease;visibility:hidden}.jw-nextup-close:before{content:"\\E615"}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{opacity:1;visibility:visible}.jw-autostart-mute{min-width:1.75em;text-align:left;position:absolute;bottom:.5em;right:.5em;height:44px;width:44px;text-align:center}.jw-autostart-mute:before{content:"\\E612"}.jw-autostart-mute.jw-off:before{content:"\\E611"}.jw-autostart-mute:before{background-color:rgba(33,33,33,.8);padding:5px 4px 5px 6px}.jw-flag-autostart .jw-controlbar,.jw-flag-autostart .jw-nextup{display:none}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-paused .jw-autostart-mute{display:none}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline-block;height:auto;line-height:2.5em;margin:0 -.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-live.jw-breakpoint-0 .jw-text-alt{max-width:80px}.jwplayer.jw-flag-live.jw-breakpoint-1 .jw-text-alt{max-width:150px}.jwplayer.jw-flag-live.jw-breakpoint-2 .jw-text-alt{max-width:250px}.jwplayer.jw-flag-live.jw-breakpoint-3 .jw-text-alt{max-width:370px}.jwplayer.jw-flag-live.jw-breakpoint-4 .jw-text-alt{max-width:470px}.jwplayer.jw-flag-live.jw-breakpoint-5 .jw-text-alt{max-width:630px}.jwplayer.jw-flag-live.jw-breakpoint-6 .jw-text-alt{max-width:790px}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-nextup-container,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-nextup-container{bottom:.5em}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-nextup-container,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:81.375%}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jwplayer.jw-flag-media-audio .jw-autostart-mute{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-autostart-mute,.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline-block;height:auto;line-height:2.5em;margin:0 -.5em;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads.jw-breakpoint-0 .jw-text-alt{max-width:80px}.jwplayer.jw-flag-ads.jw-breakpoint-1 .jw-text-alt{max-width:150px}.jwplayer.jw-flag-ads.jw-breakpoint-2 .jw-text-alt{max-width:250px}.jwplayer.jw-flag-ads.jw-breakpoint-3 .jw-text-alt{max-width:370px}.jwplayer.jw-flag-ads.jw-breakpoint-4 .jw-text-alt{max-width:470px}.jwplayer.jw-flag-ads.jw-breakpoint-5 .jw-text-alt{max-width:630px}.jwplayer.jw-flag-ads.jw-breakpoint-6 .jw-text-alt{max-width:790px}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-controlbar,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}.jw-flag-controls-disabled.jwplayer .jw-captions{max-height:none}.jw-flag-controls-disabled.jwplayer video::-webkit-media-text-track-container{max-height:none}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch.jw-breakpoint-4 .jw-controlbar,.jw-flag-touch.jw-breakpoint-4 .jw-plugin,.jw-flag-touch.jw-breakpoint-4 .jw-skip,.jw-flag-touch.jw-breakpoint-5 .jw-controlbar,.jw-flag-touch.jw-breakpoint-5 .jw-plugin,.jw-flag-touch.jw-breakpoint-5 .jw-skip,.jw-flag-touch.jw-breakpoint-6 .jw-controlbar,.jw-flag-touch.jw-breakpoint-6 .jw-plugin,.jw-flag-touch.jw-breakpoint-6 .jw-skip,.jw-flag-touch.jw-breakpoint-7 .jw-controlbar,.jw-flag-touch.jw-breakpoint-7 .jw-plugin,.jw-flag-touch.jw-breakpoint-7 .jw-skip{font-size:1.5em}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-captions{bottom:4.25em}.jw-flag-touch.jw-breakpoint-4 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-5 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-6 video::-webkit-media-text-track-container,.jw-flag-touch.jw-breakpoint-7 video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:inline-block}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-dock,.jwplayer.jw-flag-audio-player .jw-nextup-container,.jwplayer.jw-flag-audio-player .jw-preview,.jwplayer.jw-flag-audio-player .jw-title{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{vertical-align:middle;display:table;height:100%;left:0;bottom:0;margin:0;width:100%;min-width:100%}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-audio-player .jw-icon-inline{height:auto;line-height:normal}.jwplayer.jw-flag-audio-player .jw-group{vertical-align:middle}.jwplayer.jw-flag-audio-player .jw-controlbar-center-group{padding-bottom:2px}.jw-breakpoint-0 .jw-nextup-container,.jw-breakpoint-0 .jw-text-duration,.jw-breakpoint-0 .jw-text-elapsed,.jw-breakpoint-1 .jw-nextup-container,.jw-breakpoint-1 .jw-text-duration,.jw-breakpoint-1 .jw-text-elapsed{display:none}.jw-skin-seven .jw-color-active,.jw-skin-seven .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-skin-seven .jw-color-inactive,.jw-skin-seven .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-skin-seven .jw-active-option{background-color:hsla(0,0%,100%,.1)}.jw-skin-seven .jw-display-icon-container{display:table;font-size:20px;border-radius:3.5em}.jw-skin-seven .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-skin-seven .jw-display-icon-container>.jw-icon{color:hsla(0,0%,100%,.9);font-size:1.7em}.jw-skin-seven.jw-state-idle .jw-display-icon-container>.jw-icon{padding-left:4px}.jw-skin-seven .jw-dock-button{border-radius:2.5em}.jw-skin-seven .jw-menu{padding:0}.jw-skin-seven .jw-dock .jw-overlay,.jw-skin-seven .jw-skip{border-radius:.5em}.jw-skin-seven .jw-text{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.jw-skin-seven.jw-breakpoint-0 .jw-display-icon-container .jw-icon{font-size:22px}.jw-skin-seven.jw-breakpoint-1 .jw-display-icon-container .jw-icon{font-size:35.2px}',""]);
},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){e.exports=n.p+"jw-icons.ttf"},function(e,t,n){e.exports=n.p+"jw-icons.woff"},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){return'<div class="jw-skip jw-background-color jw-hidden jw-reset">\n    <span class="jw-text jw-skiptext jw-reset"></span>\n    <span class="jw-icon-inline jw-skip-icon jw-reset"></span>\n</div>'},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o;return'<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset" role="button" tabindex="0" aria-label="'+e.escapeExpression((o=null!=(o=n.ariaLabel||(null!=t?t.ariaLabel:t))?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"ariaLabel",hash:{},data:r}):o))+'"></div>\n</div>\n'},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({1:function(e,t,n,i,r){var o,a,s=null!=t?t:{};return'    <div class="jw-dock-button jw-background-color jw-reset'+(null!=(o=n["if"].call(s,null!=t?t.btnClass:t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.noop,data:r}))?o:"")+'" button="'+e.escapeExpression((a=null!=(a=n.id||(null!=t?t.id:t))?a:n.helperMissing,"function"==typeof a?a.call(s,{name:"id",hash:{},data:r}):a))+'">\n        <div class="jw-icon jw-dock-image jw-reset" '+(null!=(o=n["if"].call(s,null!=t?t.img:t,{name:"if",hash:{},fn:e.program(4,r,0),inverse:e.noop,data:r}))?o:"")+'></div>\n        <div class="jw-arrow jw-reset"></div>\n'+(null!=(o=n["if"].call(s,null!=t?t.tooltip:t,{name:"if",hash:{},fn:e.program(6,r,0),inverse:e.noop,data:r}))?o:"")+"    </div>\n"},2:function(e,t,n,i,r){var o;return" "+e.escapeExpression((o=null!=(o=n.btnClass||(null!=t?t.btnClass:t))?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"btnClass",hash:{},data:r}):o))},4:function(e,t,n,i,r){var o;return"style='background-image: url(\""+e.escapeExpression((o=null!=(o=n.img||(null!=t?t.img:t))?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"img",hash:{},data:r}):o))+"\")'"},6:function(e,t,n,i,r){var o;return'        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">'+e.escapeExpression((o=null!=(o=n.tooltip||(null!=t?t.tooltip:t))?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"tooltip",hash:{},data:r}):o))+"</span>\n        </div>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o;return'<div class="jw-dock jw-reset">\n'+(null!=(o=n.each.call(null!=t?t:{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+"</div>"},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o,a=null!=t?t:{},s=n.helperMissing,l="function",u=e.escapeExpression;return'<div id="'+u((o=null!=(o=n.id||(null!=t?t.id:t))?o:s,typeof o===l?o.call(a,{name:"id",hash:{},data:r}):o))+'"class="jw-skin-'+u((o=null!=(o=n.skin||(null!=t?t.skin:t))?o:s,typeof o===l?o.call(a,{name:"skin",hash:{},data:r}):o))+' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">'+u((o=null!=(o=n.title||(null!=t?t.title:t))?o:s,typeof o===l?o.call(a,{name:"title",hash:{},data:r}):o))+'</div>\n        <div class="jw-title-secondary jw-reset">'+u((o=null!=(o=n.body||(null!=t?t.body:t))?o:s,typeof o===l?o.call(a,{name:"body",hash:{},data:r}):o))+'</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div>\n        </div>\n    </div>\n</div>\n'},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){return'<div class="jw-logo jw-reset"></div>'},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({1:function(e,t,n,i,r){var o,a=e.escapeExpression;return"        <li class='jw-text jw-option jw-item-"+a((o=null!=(o=n.index||r&&r.index)?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"index",hash:{},data:r}):o))+" jw-reset'>"+a(e.lambda(null!=t?t.label:t,t))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o;return'<ul class="jw-menu jw-background-color jw-reset">\n'+(null!=(o=n.each.call(null!=t?t:{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+"</ul>"},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o=e.lambda,a=e.escapeExpression;return'<div class="jw-nextup jw-reset">\n    <div class="jw-nextup-tooltip jw-reset">\n        <div class="jw-nextup-header jw-reset">\n            '+a(o(null!=t?t.nextUpText:t,t))+'\n        </div>\n        <div class="jw-nextup-body jw-background-color jw-reset">\n            <div class="jw-nextup-thumbnail jw-reset"></div>\n            <div class="jw-nextup-title jw-reset">'+a(o(null!=t?t.title:t,t))+'</div>\n        </div>\n    </div>\n    <button class="jw-nextup-close"></button>\n</div>\n'},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o;return'<div id="'+e.escapeExpression((o=null!=(o=n.id||(null!=t?t.id:t))?o:n.helperMissing,"function"==typeof o?o.call(null!=t?t:{},{name:"id",hash:{},data:r}):o))+'" class="jwplayer jw-reset jw-state-idle" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n</div>'},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({1:function(e,t,n,i,r){var o,a,s=null!=t?t:{},l=n.helperMissing,u="function",c=e.escapeExpression;return'        <li class="jw-reset'+(null!=(o=n["if"].call(s,null!=t?t.featured:t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.noop,data:r}))?o:"")+'">\n            <a href="'+c((a=null!=(a=n.link||(null!=t?t.link:t))?a:l,typeof a===u?a.call(s,{name:"link",hash:{},data:r}):a))+'" class="jw-reset" target="_top">\n'+(null!=(o=n["if"].call(s,null!=t?t.showLogo:t,{name:"if",hash:{},fn:e.program(4,r,0),inverse:e.noop,data:r}))?o:"")+"                "+c((a=null!=(a=n.title||(null!=t?t.title:t))?a:l,typeof a===u?a.call(s,{name:"title",hash:{},data:r}):a))+"\n            </a>\n        </li>\n"},2:function(e,t,n,i,r){return" jw-featured"},4:function(e,t,n,i,r){return'                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o;return'<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n'+(null!=(o=n.each.call(null!=t?t:{},null!=t?t.items:t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?o:"")+"    </ul>\n</div>"},useData:!0})},function(e,t,n){var i=n(9);e.exports=(i["default"]||i).template({compiler:[7,">= 4.0.0"],main:function(e,t,n,i,r){var o,a=null!=t?t:{},s=n.helperMissing,l="function",u=e.escapeExpression;return'<div class="'+u((o=null!=(o=n.className||(null!=t?t.className:t))?o:s,typeof o===l?o.call(a,{name:"className",hash:{},data:r}):o))+" "+u((o=null!=(o=n.orientation||(null!=t?t.orientation:t))?o:s,typeof o===l?o.call(a,{name:"orientation",hash:{},data:r}):o))+' jw-reset" aria-hidden="true">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>'},useData:!0})},,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(){var e=new s.HandlebarsEnvironment;return h.extend(e,s),e.SafeString=u["default"],e.Exception=d["default"],e.Utils=h,e.escapeExpression=h.escapeExpression,e.VM=g,e.template=function(t){return g.template(t,e)},e}t.__esModule=!0;var a=n(44),s=r(a),l=n(110),u=i(l),c=n(17),d=i(c),p=n(11),h=r(p),f=n(109),g=r(f),m=n(108),w=i(m),v=o();v.create=o,w["default"](v),v["default"]=v,t["default"]=v,e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){a["default"](e)}t.__esModule=!0,t.registerDefaultDecorators=r;var o=n(98),a=i(o)},function(e,t,n){"use strict";t.__esModule=!0;var i=n(11);t["default"]=function(e){e.registerDecorator("inline",function(e,t,n,r){var o=e;return t.partials||(t.partials={},o=function(r,o){var a=n.partials;n.partials=i.extend({},a,t.partials);var s=e(r,o);return n.partials=a,s}),t.partials[r.args[0]]=r.fn,o})},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){a["default"](e),l["default"](e),c["default"](e),p["default"](e),f["default"](e),m["default"](e),v["default"](e)}t.__esModule=!0,t.registerDefaultHelpers=r;var o=n(100),a=i(o),s=n(101),l=i(s),u=n(102),c=i(u),d=n(103),p=i(d),h=n(104),f=i(h),g=n(105),m=i(g),w=n(106),v=i(w)},function(e,t,n){"use strict";t.__esModule=!0;var i=n(11);t["default"]=function(e){e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse,o=n.fn;if(t===!0)return o(this);if(t===!1||null==t)return r(this);if(i.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var a=i.createFrame(n.data);a.contextPath=i.appendContextPath(n.data.contextPath,n.name),n={data:a}}return o(t,n)})},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(11),o=n(17),a=i(o);t["default"]=function(e){e.registerHelper("each",function(e,t){function n(t,n,o){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!o,c&&(u.contextPath=c+t)),l+=i(e[t],{data:u,blockParams:r.blockParams([e[t],t],[c+t,null])})}if(!t)throw new a["default"]("Must pass iterator to #each");var i=t.fn,o=t.inverse,s=0,l="",u=void 0,c=void 0;if(t.data&&t.ids&&(c=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(u=r.createFrame(t.data)),e&&"object"==typeof e)if(r.isArray(e))for(var d=e.length;s<d;s++)s in e&&n(s,s,s===e.length-1);else{var p=void 0;for(var h in e)e.hasOwnProperty(h)&&(void 0!==p&&n(p,s-1),p=h,s++);void 0!==p&&n(p,s-1,!0)}return 0===s&&(l=o(this)),l})},e.exports=t["default"]},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(17),o=i(r);t["default"]=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t["default"]},function(e,t,n){"use strict";t.__esModule=!0;var i=n(11);t["default"]=function(e){e.registerHelper("if",function(e,t){return i.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||i.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],i=0;i<arguments.length-1;i++)t.push(arguments[i]);var r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log.apply(e,t)})},e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t["default"]},function(e,t,n){"use strict";t.__esModule=!0;var i=n(11);t["default"]=function(e){e.registerHelper("with",function(e,t){i.isFunction(e)&&(e=e.call(this));var n=t.fn;if(i.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&(r=i.createFrame(t.data),r.contextPath=i.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:i.blockParams([e],[r&&r.contextPath])})})},e.exports=t["default"]},function(e,t,n){"use strict";t.__esModule=!0;var i=n(11),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=i.indexOf(r.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=r.lookupLevel(e),"undefined"!=typeof console&&r.lookupLevel(r.level)<=e){var t=r.methodMap[e];console[t]||(t="log");for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];console[t].apply(console,i)}}};t["default"]=r,e.exports=t["default"]},function(e,t){(function(n){"use strict";t.__esModule=!0,t["default"]=function(e){var t="undefined"!=typeof n?n:window,i=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=i),e}},e.exports=t["default"]}).call(t,function(){return this}())},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){var t=e&&e[0]||1,n=w.COMPILER_REVISION;if(t!==n){if(t<n){var i=w.REVISION_CHANGES[n],r=w.REVISION_CHANGES[t];throw new m["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+r+").")}throw new m["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function a(e,t){function n(n,i,r){r.hash&&(i=f.extend({},i,r.hash),r.ids&&(r.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,i,r);var o=t.VM.invokePartial.call(this,n,i,r);if(null==o&&t.compile&&(r.partials[r.name]=t.compile(n,e.compilerOptions,t),o=r.partials[r.name](i,r)),null!=o){if(r.indent){for(var a=o.split("\n"),s=0,l=a.length;s<l&&(a[s]||s+1!==l);s++)a[s]=r.indent+a[s];o=a.join("\n")}return o}throw new m["default"]("The partial "+r.name+" could not be compiled when running in runtime-only mode")}function i(t){function n(t){return""+e.main(r,t,r.helpers,r.partials,a,l,s)}var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o.data;i._setup(o),!o.partial&&e.useData&&(a=d(t,a));var s=void 0,l=e.useBlockParams?[]:void 0;return e.useDepths&&(s=o.depths?t!==o.depths[0]?[t].concat(o.depths):o.depths:[t]),(n=p(e.main,n,r,o.depths||[],a,l))(t,o)}if(!t)throw new m["default"]("No environment passed to template");if(!e||!e.main)throw new m["default"]("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r={strict:function(e,t){if(!(t in e))throw new m["default"]('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++)if(e[i]&&null!=e[i][t])return e[i][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:f.escapeExpression,invokePartial:n,fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,i,r){var o=this.programs[e],a=this.fn(e);return t||r||i||n?o=s(this,e,a,t,n,i,r):o||(o=this.programs[e]=s(this,e,a)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=f.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler};return i.isTop=!0,i._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,t.helpers),e.usePartial&&(r.partials=r.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=r.merge(n.decorators,t.decorators)))},i._child=function(t,n,i,o){if(e.useBlockParams&&!i)throw new m["default"]("must pass block params");if(e.useDepths&&!o)throw new m["default"]("must pass parent depths");return s(r,t,e[t],n,0,i,o)},i}function s(e,t,n,i,r,o,a){function s(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return a&&t!==a[0]&&(s=[t].concat(a)),n(e,t,e.helpers,e.partials,r.data||i,o&&[r.blockParams].concat(o),s)}return s=p(n,s,e,a,i,o),s.program=t,s.depth=a?a.length:0,s.blockParams=r||0,s}function l(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function u(e,t,n){n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;if(n.fn&&n.fn!==c&&(n.data=w.createFrame(n.data),i=n.data["partial-block"]=n.fn,i.partials&&(n.partials=f.extend({},n.partials,i.partials))),void 0===e&&i&&(e=i),void 0===e)throw new m["default"]("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function c(){return""}function d(e,t){return t&&"root"in t||(t=t?w.createFrame(t):{},t.root=e),t}function p(e,t,n,i,r,o){if(e.decorator){var a={};t=e.decorator(t,a,n,i&&i[0],r,o,i),f.extend(t,a)}return t}t.__esModule=!0,t.checkRevision=o,t.template=a,t.wrapProgram=s,t.resolvePartial=l,t.invokePartial=u,t.noop=c;var h=n(11),f=r(h),g=n(17),m=i(g),w=n(44)},function(e,t){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t["default"]=n,e.exports=t["default"]},,function(e,t,n){var i,r;i=[n(21),n(1)],r=function(e,t){return function(n,i){var r=["seek","skipAd","stop","playlistNext","playlistPrev","playlistItem","resize","addButton","removeButton","registerPlugin","attachMedia","next"];t.each(r,function(e){n[e]=function(){return i[e].apply(i,arguments),n}}),n.registerPlugin=e.registerPlugin}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t,n){var i=["buffer","controls","position","duration","fullscreen","volume","mute","item","stretching","playlist","captions"];e.each(i,function(e){var i=e.slice(0,1).toUpperCase()+e.slice(1);t["get"+i]=function(){return n._model.get(e)}});var r=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],o=["setControls","setFullscreen","setVolume","setMute","setCues","setCaptions"];e.each(r,function(e){t[e]=function(){return n[e]?n[e].apply(n,arguments):null}}),e.each(o,function(e){t[e]=function(){return n[e].apply(n,arguments),t}}),t.getPlaylistIndex=t.getItem}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(5),n(4),n(2),n(64),n(1),n(166),n(112),n(113),n(115),n(24)],r=function(e,t,n,i,r,o,a,s,l,u,c){var d=function(d,p){var h,f=this,g=!1,m={};o.extend(this,n),this.utils=i,this._=o,this.Events=n,this.version=c,this.trigger=function(e,t){t=o.isObject(t)?o.extend({},t):{},t.type=e;var i=window.jwplayer;return i&&i.debug?n.trigger.call(f,e,t):n.triggerSafe.call(f,e,t)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var w=function(){h=new a(d),s(f,h),l(f,h),h.on(e.JWPLAYER_PLAYLIST_ITEM,function(){m={}}),h.on(e.JWPLAYER_MEDIA_META,function(e){o.extend(m,e.metadata)}),h.on(e.JWPLAYER_READY,function(e){g=!0,v.tick("ready"),e.setupTime=v.between("setup","ready")}),h.on("all",f.trigger)};w(),u(this),this.id=d.id;var v=this._qoe=new r;v.tick("init");var y=function(){g=!1,m={},f.off(),h&&h.off(),h&&h.playerDestroy&&h.playerDestroy()};return this.getPlugin=function(e){return f.plugins&&f.plugins[e]},this.addPlugin=function(e,t){this.plugins=this.plugins||{},this.plugins[e]=t,this.onReady(t.addToPlayer),t.resize&&this.onResize(t.resizeHandler)},this.setup=function(e){return v.tick("setup"),y(),w(),i.foreach(e.events,function(e,t){var n=f[e];"function"==typeof n&&n.call(f,t)}),e.id=f.id,h.setup(e,this),f},this.qoe=function(){var t=h.getItemQoe(),n=v.between("setup","ready"),i=t.between(e.JWPLAYER_MEDIA_PLAY_ATTEMPT,e.JWPLAYER_MEDIA_FIRST_FRAME);return{setupTime:n,firstFrame:i,player:v.dump(),item:t.dump()}},this.getContainer=function(){return h.getContainer?h.getContainer():d},this.getMeta=this.getItemMeta=function(){return m},this.getPlaylistItem=function(e){if(!i.exists(e))return h._model.get("playlistItem");var t=f.getPlaylist();return t?t[e]:null},this.getRenderingMode=function(){return"html5"},this.load=function(e){return h.load(e),f},this.play=function(e,n){if(o.isBoolean(e)||(n=e),n||(n={reason:"external"}),e===!0)return h.play(n),f;if(e===!1)return h.pause(n),f;switch(e=f.getState()){case t.PLAYING:case t.BUFFERING:h.pause(n);break;default:h.play(n)}return f},this.pause=function(e){return o.isBoolean(e)?this.play(!e):this.play()},this.createInstream=function(){return h.createInstream()},this.castToggle=function(){h&&h.castToggle&&h.castToggle()},this.playAd=this.pauseAd=i.noop,this.remove=function(){return p(f),f.trigger("remove"),y(),f},this};return d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(3)],r=function(e,t){return function(n){var i={onBufferChange:t.JWPLAYER_MEDIA_BUFFER,onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,onError:t.JWPLAYER_ERROR,onSetupError:t.JWPLAYER_SETUP_ERROR,onFullscreen:t.JWPLAYER_FULLSCREEN,onMeta:t.JWPLAYER_MEDIA_META,onMute:t.JWPLAYER_MEDIA_MUTE,onPlaylist:t.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:t.JWPLAYER_PLAYLIST_COMPLETE,onReady:t.JWPLAYER_READY,onResize:t.JWPLAYER_RESIZE,onComplete:t.JWPLAYER_MEDIA_COMPLETE,onSeek:t.JWPLAYER_MEDIA_SEEK,onTime:t.JWPLAYER_MEDIA_TIME,onVolume:t.JWPLAYER_MEDIA_VOLUME,onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:t.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,onControls:t.JWPLAYER_CONTROLS,onQualityLevels:t.JWPLAYER_MEDIA_LEVELS,onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:t.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,onAdError:t.JWPLAYER_AD_ERROR,onAdClick:t.JWPLAYER_AD_CLICK,onAdImpression:t.JWPLAYER_AD_IMPRESSION,onAdTime:t.JWPLAYER_AD_TIME,onAdComplete:t.JWPLAYER_AD_COMPLETE,onAdCompanions:t.JWPLAYER_AD_COMPANIONS,onAdSkipped:t.JWPLAYER_AD_SKIPPED,onAdPlay:t.JWPLAYER_AD_PLAY,onAdPause:t.JWPLAYER_AD_PAUSE,onAdMeta:t.JWPLAYER_AD_META,onCast:t.JWPLAYER_CAST_SESSION,onAudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:t.JWPLAYER_AUDIO_TRACKS},r={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};e.each(r,function(t,i){n[i]=e.partial(n.on,t,e)}),e.each(i,function(t,i){n[i]=e.partial(n.on,t,e)})}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(114),n(1),n(39),n(38),n(21)],r=function(e,t,n,i,r){var o=[],a=0,s=function(t){var n,i;return t?"string"==typeof t?(n=l(t),n||(i=document.getElementById(t))):"number"==typeof t?n=o[t]:t.nodeType&&(i=t,n=l(i.id)):n=o[0],n?n:i?u(new e(i,c)):{registerPlugin:r.registerPlugin}},l=function(e){for(var t=0;t<o.length;t++)if(o[t].id===e)return o[t];return null},u=function(e){return a++,e.uniqueId=a,o.push(e),e},c=function(e){for(var t=o.length;t--;)if(o[t].uniqueId===e.uniqueId){o.splice(t,1);break}},d={selectPlayer:s,registerProvider:n.registerProvider,availableProviders:i,registerPlugin:r.registerPlugin};return s.api=d,d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(167),n(4),n(1),n(3)],r=function(e,t,n,i){var r=function(t,r,o,a){function s(){p("Setup Timeout Error","Setup took longer than "+m+" seconds to complete.")}function l(){n.each(g,function(e){e.complete!==!0&&e.running!==!0&&null!==t&&c(e.depends)&&(e.running=!0,u(e))})}function u(e){var n=function(t){t=t||{},d(e,t)};e.method(n,r,t,o,a)}function c(e){return n.all(e,function(e){return g[e].complete})}function d(e,t){"error"===t.type?p(t.msg,t.reason):"complete"===t.type?(clearTimeout(h),f.trigger(i.JWPLAYER_READY)):(e.complete=!0,l())}function p(e,t){clearTimeout(h),f.trigger(i.JWPLAYER_SETUP_ERROR,{message:e+": "+t}),f.destroy()}var h,f=this,g=e.getQueue(),m=30;this.start=function(){h=setTimeout(s,1e3*m),l()},this.destroy=function(){clearTimeout(h),this.off(),g.length=0,t=null,r=null,o=null}};return r.prototype=t,r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(19),n(18)],r=function(e,t,n){var i=function(i,r){function o(e){if(e.tracks.length){for(var t=e.tracks||[],n=0;n<t.length;n++){var i=t[n];v[i._id]||p(i)}var r=h();f(),this.setCaptionsList(r)}}function a(e,t){m=t,w=[],v={},y={},j=0}function s(e){a(r,e);var n=e.tracks,i=n&&n.length;if(!r.get("renderCaptionsNatively")&&i){var o,s;for(o=0;o<i;o++)s=n[o],l(s.kind)&&!v[s._id]&&(p(s),t.loadFile(s,u.bind(null,s),c))}var d=h();f(),this.setCaptionsList(d)}function l(e){return"subtitles"===e||"captions"===e}function u(e,t){e.data=t}function c(t){e.log("CAPTIONS("+t+")")}function d(e,t){var n=null;0!==t&&(n=w[t-1]),e.set("captionsTrack",n)}function p(e){if(e.data=e.data||[],e.name=e.label||e.name||e.language,e._id=n.createId(e,w.length),!e.name){var t=n.createLabel(e,j);e.name=t.label,j=t.unknownCount}w.push(e),v[e._id]=e}function h(){for(var e=[{id:"off",label:"Off"}],t=0;t<w.length;t++)e.push({id:w[t]._id,label:w[t].name||"Unknown CC"});return e}function f(){var e=0,t=r.get("captionLabel");if("Off"===t)return void r.set("captionsIndex",0);for(var n=0;n<w.length;n++){var i=w[n];if(t&&t===i.name){e=n+1;break}i["default"]||i.defaulttrack||"default"===i._id?e=n+1:i.autoselect}g(e)}function g(e){w.length?r.setVideoSubtitleTrack(e,w):r.set("captionsIndex",e)}r.on("change:playlistItem",a,this),r.on("change:captionsIndex",d,this),r.on("itemReady",s,this),r.mediaController.on("subtitlesTracks",o,this);var m={},w=[],v={},y={},j=0;this.getCurrentIndex=function(){return r.get("captionsIndex")},this.getCaptionsList=function(){return r.get("captionsList")},this.setCaptionsList=function(e){r.set("captionsList",e)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(45),n(120),n(1),n(117),n(118),n(25),n(125),n(50),n(49),n(2),n(75),n(4),n(29),n(5),n(3),n(154)],r=function(e,t,i,r,o,a,s,l,u,c,d,p,h,f,g,m){function w(e){return function(){var t=Array.prototype.slice.call(arguments,0);this._model.getVideo()?this["_"+e].apply(this,t):this.eventsQueue.push([e,t])}}function v(e){return e===f.LOADING||e===f.STALLED?f.BUFFERING:e}var y=function(e){this.originalContainer=this.currentContainer=e,this.eventsQueue=[],i.extend(this,p),this._model=new a};return y.prototype={play:w("play"),pause:w("pause"),seek:w("seek"),stop:w("stop"),load:w("load"),playlistNext:w("next"),playlistPrev:w("prev"),playlistItem:w("item"),setCurrentCaptions:w("setCurrentCaptions"),setCurrentQuality:w("setCurrentQuality"),setFullscreen:w("setFullscreen"),setup:function(a,p){function m(e,t){pe.triggerAfterReady(e,t)}function w(){oe=null,ie.on("all",m,pe),pe.showView(ie.element()),i.defer(y)}function y(){pe.trigger(g.JWPLAYER_READY,{setupTime:0}),pe.triggerAfterReady=pe.trigger;for(var e=0;e<me.length;e++){var t=me[e];pe.trigger(t.type,t.args)}var n=p.getPlugin("related");n&&n.on("nextUp",ue.setNextUp,ue),ne()&&(c.isMobile()&&he().video?j(he().video):pe.play({reason:"autostart"}))}function j(e){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?b(e):n.e(9,function(require){n(54),b(e)})}function b(e){le=new window.IntersectionObserver(x,{threshold:.5}),le.observe(e)}function E(){le.disconnect(),le=void 0}function x(e){if(e&&e.length){var t=he().video,n=e[0],i={reason:"autoplay"};n.target===t&&n.intersectionRatio>=.5?pe.play(i):pe.pause(i)}}function k(e){var t=ue.getProviders(),n=t.required(e,ue.get("primary"));return t.load(n).then(function(){pe.getProvider()||(ue.setProvider(ue.get("playlistItem")),A())})}function A(){for(;pe.eventsQueue.length>0;){var e=pe.eventsQueue.shift(),t=e[0],n=e[1]||[];pe["_"+t].apply(pe,n)}}function _(e){switch(ue.get("state")===f.ERROR&&ue.set("state",f.IDLE),ue.set("preInstreamState","instream-idle"),R(!0),ne()&&ue.once("itemReady",P),pe.trigger("destroyPlugin",{}),typeof e){case"string":C(e);break;case"object":var t=D(e);t&&N(0);break;case"number":N(e)}}function C(e){var t=new u;t.on(g.JWPLAYER_PLAYLIST_LOADED,function(e){_(e.playlist)}),t.on(g.JWPLAYER_ERROR,function(e){e.message="Error loading playlist: "+e.message,this.triggerError(e)},this),t.load(e)}function L(){return pe._instreamAdapter&&pe._instreamAdapter.getState()}function T(){var e=L();return i.isString(e)?e:ue.get("state")}function P(e){var t;if(e&&ue.set("playReason",e.reason),ue.get("state")!==f.ERROR){var n=L();if(i.isString(n))return p.pauseAd(!1);if(ue.get("state")===f.COMPLETE&&(R(!0),N(0)),!ce&&(ce=!0,pe.trigger(g.JWPLAYER_MEDIA_BEFOREPLAY,{playReason:ue.get("playReason")}),ce=!1,se))return se=!1,void(ae=null);if(M()){if(0===ue.get("playlist").length)return!1;t=c.tryCatch(function(){ue.loadVideo()})}else ue.get("state")===f.PAUSED&&(t=c.tryCatch(function(){ue.playVideo()}));return!(t instanceof c.Error)||(pe.triggerError(t),ae=null,!1)}}function R(e){ue.off("itemReady",P);var t=!e;ae=null;var n=c.tryCatch(function(){ue.stopVideo()},pe);return n instanceof c.Error?(pe.triggerError(n),!1):(t&&(de=!0),ce&&(se=!0),!0)}function I(e){ae=null,e&&(ue.set("pauseReason",e.reason),!le||"interaction"!==e.reason&&"external"!==e.reason||E());var t=L();if(i.isString(t))return p.pauseAd(!0);switch(ue.get("state")){case f.ERROR:return!1;case f.PLAYING:case f.BUFFERING:var n=c.tryCatch(function(){he().pause()},this);if(n instanceof c.Error)return pe.triggerError(n),!1;break;default:ce&&(se=!0)}return!0}function M(){var e=ue.get("state");return e===f.IDLE||e===f.COMPLETE||e===f.ERROR}function S(e){ue.get("state")!==f.ERROR&&(ue.get("scrubbing")||ue.get("state")===f.PLAYING||P(!0),he().seek(e))}function O(e,t){R(!0),ue.get("state")===f.ERROR&&ue.set("state",f.IDLE),N(e),P(t)}function D(e){var t=l(e);return t=l.filterPlaylist(t,ue.getProviders(),ue.get("androidhls"),ue.get("drm"),ue.get("preload"),ue.get("feedid"),ue.get("withCredentials")),ue.set("playlist",t),i.isArray(t)&&0!==t.length?(k(t),!0):(pe.triggerError({message:"Error loading playlist: No playable sources found"}),!1)}function N(e){ue.setItemIndex(e)}function Y(e){O(ue.get("item")-1,e||{reason:"external"})}function F(e){O(ue.get("item")+1,e||{reason:"external"})}function W(){if(M()){if(de)return void(de=!1);ae=W;var e=ue.get("item");return e===ue.get("playlist").length-1?void(ue.get("repeat")?F({reason:"repeat"}):(le&&E(),ue.set("state",f.COMPLETE),pe.trigger(g.JWPLAYER_PLAYLIST_COMPLETE,{}))):void F({reason:"playlist"})}}function J(e){he()&&(e=parseInt(e,10)||0,he().setCurrentQuality(e))}function B(){return he()?he().getCurrentQuality():-1}function V(){if(this._model)return this._model.getConfiguration()}function z(){if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");var e=U();if(e){var t=B(),n=e[t];if(n)return{level:i.extend({index:t},n),mode:"",reason:""}}return null}function U(){return he()?he().getQualityLevels():null}function H(e){he()&&(e=parseInt(e,10)||0,he().setCurrentAudioTrack(e))}function G(){return he()?he().getCurrentAudioTrack():-1}function K(){return he()?he().getAudioTracks():null}function q(e){e=parseInt(e,10)||0,ue.persistVideoSubtitleTrack(e),
pe.trigger(g.JWPLAYER_CAPTIONS_CHANGED,{tracks:X(),track:e})}function Q(){return re.getCurrentIndex()}function X(){return re.getCaptionsList()}function $(){var e=ue.getVideo();if(e){var t=e.detachMedia();if(t instanceof HTMLVideoElement)return t}return null}function Z(){var e=c.tryCatch(function(){ue.getVideo().attachMedia()});return e instanceof c.Error?void c.log("Error calling _attachMedia",e):void("function"==typeof ae&&ae())}function ee(e){i.isBoolean(e)||(e=!ue.get("fullscreen")),ue.set("fullscreen",e),this._instreamAdapter&&this._instreamAdapter._adModel&&this._instreamAdapter._adModel.set("fullscreen",e)}function te(){var e=p.getPlugin("related");e&&e.next()}function ne(){return ue.get("autostart")&&!c.isMobile()||ue.autoStartOnMobile()}var ie,re,oe,ae,se,le,ue=this._model,ce=!1,de=!1,pe=this,he=function(){return ue.getVideo()},fe=new s;fe.track(ue);var ge=new e(a,fe),me=[];ue.setup(ge,fe),ie=this._view=new d(p,ue),oe=new r(p,ue,ie,D),oe.on(g.JWPLAYER_READY,w,this),oe.on(g.JWPLAYER_SETUP_ERROR,this.setupError,this),ue.mediaController.on("all",m,this),ue.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE,function(){i.defer(W)}),ue.mediaController.on(g.JWPLAYER_MEDIA_ERROR,this.triggerError,this),ue.on("change:flashBlocked",function(e,t){if(!t)return void this._model.set("errorEvent",void 0);var n=!!e.get("flashThrottle"),i={message:n?"Click to run Flash":"Flash plugin failed to load"};n||this.trigger(g.JWPLAYER_ERROR,i),this._model.set("errorEvent",i)},this),ue.on("change:state",h,this),ue.on("change:castState",function(e,t){pe.trigger(g.JWPLAYER_CAST_SESSION,t)}),ue.on("change:fullscreen",function(e,t){pe.trigger(g.JWPLAYER_FULLSCREEN,{fullscreen:t}),t&&le&&E()}),ue.on("itemReady",function(){pe.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM,{index:ue.get("item"),item:ue.get("playlistItem")})}),ue.on("change:playlist",function(e,t){t.length&&pe.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED,{playlist:t})}),ue.on("change:volume",function(e,t){pe.trigger(g.JWPLAYER_MEDIA_VOLUME,{volume:t})}),ue.on("change:mute",function(e,t){pe.trigger(g.JWPLAYER_MEDIA_MUTE,{mute:t})}),ue.on("change:controls",function(e,t){pe.trigger(g.JWPLAYER_CONTROLS,{controls:t})}),ue.on("change:scrubbing",function(e,t){t?I():P()}),ue.on("change:captionsList",function(e,t){try{pe.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST,{tracks:t,track:Q()})}catch(n){c.log("Error with captionsList event:",n)}}),ue.on("change:mediaModel",function(e){e.mediaModel.on("change:state",function(t,n){var i=v(n);e.set("state",i)})}),re=new o(p,ue),this.triggerAfterReady=function(e,t){me.push({type:e,args:t})},this._play=P,this._pause=I,this._seek=S,this._stop=R,this._load=_,this._next=F,this._prev=Y,this._item=O,this._setCurrentCaptions=q,this._setCurrentQuality=J,this._setFullscreen=ee,this.detachMedia=$,this.attachMedia=Z,this.getCurrentQuality=B,this.getQualityLevels=U,this.setCurrentAudioTrack=H,this.getCurrentAudioTrack=G,this.getAudioTracks=K,this.getCurrentCaptions=Q,this.getCaptionsList=X,this.getVisualQuality=z,this.getConfig=V,this.getState=T,this.setVolume=ue.setVolume.bind(ue),this.setMute=ue.setMute.bind(ue),this.getProvider=function(){return ue.get("provider")},this.getWidth=function(){return ue.get("containerWidth")},this.getHeight=function(){return ue.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=ie.resize,this.getSafeRegion=ie.getSafeRegion,this.setCues=ie.addCues,this.setCaptions=ie.setCaptions,this.next=te,this.addButton=function(e,t,n,r,o){var a={img:e,tooltip:t,callback:n,id:r,btnClass:o},s=ue.get("dock");s=s?s.slice(0):[],s=i.reject(s,i.matches({id:a.id})),s.push(a),ue.set("dock",s)},this.removeButton=function(e){var t=ue.get("dock")||[];t=i.reject(t,i.matches({id:e})),ue.set("dock",t)},this.checkBeforePlay=function(){return ce},this.getItemQoe=function(){return ue._qoeItem},this.setControls=function(e){i.isBoolean(e)||(e=!ue.get("controls")),ue.set("controls",e);var t=ue.getVideo();t&&t.setControls(e)},this.playerDestroy=function(){this.stop(),this.showView(this.originalContainer),ie&&ie.destroy(),ue&&ue.destroy(),oe&&(oe.destroy(),oe=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return ue.getVideo().checkComplete()},this.createInstream=function(){return this.instreamDestroy(),this._instreamAdapter=new t(this,ue,ie),this._instreamAdapter},this.skipAd=function(){this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function(){pe._instreamAdapter&&pe._instreamAdapter.destroy()},oe.start()},showView:function(e){(document.documentElement.contains(this.currentContainer)||(this.currentContainer=document.getElementById(this._model.get("id")),this.currentContainer))&&(this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(e,this.currentContainer),this.currentContainer=e)},triggerError:function(e){this._model.set("errorEvent",e),this._model.set("state",f.ERROR),this._model.once("change:state",function(){this._model.set("errorEvent",void 0)},this),this.trigger(g.JWPLAYER_ERROR,e)},setupError:function(e){var t=e.message,n=c.createElement(m(this._model.get("id"),this._model.get("skin"),t)),r=this._model.get("width"),o=this._model.get("height");c.style(n,{width:r.toString().indexOf("%")>0?r:r+"px",height:o.toString().indexOf("%")>0?o:o+"px"}),this.showView(n);var a=this;i.defer(function(){a.trigger(g.JWPLAYER_SETUP_ERROR,{message:t})})}},y}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(122),n(121),n(3),n(5),n(2),n(4),n(1)],r=function(e,t,n,i,r,o,a){function s(n){var i="",r=n.get("provider");return r&&(i=r.name),i.indexOf("flash")>=0?t:e}var l={skipoffset:null,tag:null},u=function(e,o,u){function c(){y._adModel.set("state","buffering"),o.set("skipButton",!1),j++;var e,t=h[j];f&&(e=f[j]),E.loadItem(t,e)}function d(e,t){"complete"!==e&&(t=t||{},b.tag&&!t.tag&&(t.tag=b.tag),this.trigger(e,t),"mediaError"!==e&&"error"!==e||h&&j+1<h.length&&c())}function p(e){y._adModel.set("duration",e.duration),y._adModel.set("position",e.position)}var h,f,g,m,w,v=s(o),y=new v(e,o),j=0,b={},E=this,x=a.bind(function(e){e=e||{},e.hasControls=!!o.get("controls"),this.trigger(n.JWPLAYER_INSTREAM_CLICK,e),y&&y._adModel&&(y._adModel.get("state")===i.PAUSED?e.hasControls&&y.instreamPlay():y.instreamPause())},this),k=a.bind(function(){y&&y._adModel&&y._adModel.get("state")===i.PAUSED&&o.get("controls")&&(e.setFullscreen(),e.play())},this);this.type="instream",this.init=function(){g=o.getVideo(),m=o.get("position"),w=o.get("playlist")[o.get("item")],y.on("all",d,this),y.on(n.JWPLAYER_MEDIA_TIME,p,this),y.on(n.JWPLAYER_MEDIA_COMPLETE,A,this),y.init(),g.detachMedia(),o.mediaModel.set("state",i.BUFFERING),e.checkBeforePlay()||0===m&&!g.checkComplete()?(m=0,o.set("preInstreamState","instream-preroll")):g&&g.checkComplete()||o.get("state")===i.COMPLETE?o.set("preInstreamState","instream-postroll"):o.set("preInstreamState","instream-midroll");var t=o.get("state");return t!==i.PLAYING&&t!==i.BUFFERING||g.pause(),u.setupInstream(y._adModel),y._adModel.set("state",i.BUFFERING),u.clickHandler().setAlternateClickHandlers(r.noop,null),this.setText(o.get("localization").loadingAd),this};var A=function(e){var t={};b.tag&&(t.tag=b.tag),h&&j+1<h.length?(this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),c()):(e.type===n.JWPLAYER_MEDIA_COMPLETE&&(this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{})),this.destroy())};this.loadItem=function(e,i){if(r.isAndroid(2.3))return void this.trigger({type:n.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"});var s=e;a.isArray(e)?(h=e,f=i,e=h[j],f&&(i=f[j])):s=[e];var u=this,c=o.getProviders(),d=v===t?"flash":void 0,p=c.required(s,d);o.set("hideAdsControls",!1),c.load(p).then(function(){if(null!==y){u.trigger(n.JWPLAYER_PLAYLIST_ITEM,{index:j,item:e}),b=a.extend({},l,i),y.load(e),u.addClickHandler();var t=e.skipoffset||b.skipoffset;t&&u.setupSkipButton(t,b)}})},this.setupSkipButton=function(e,t,n){o.set("skipButton",!1),n&&(A=n),y._adModel.set("skipMessage",t.skipMessage),y._adModel.set("skipText",t.skipText),y._adModel.set("skipOffset",e),o.set("skipButton",!0)},this.applyProviderListeners=function(e){y.applyProviderListeners(e),this.addClickHandler()},this.play=function(){y.instreamPlay()},this.pause=function(){y.instreamPause()},this.addClickHandler=function(){u.clickHandler().setAlternateClickHandlers(x,k),y.on(n.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(e){var t=n.JWPLAYER_AD_SKIPPED;this.trigger(t,e),A.call(this,{type:t})},this.metaHandler=function(e){e.width&&e.height&&u.resizeMedia()},this.destroy=function(){if(this.off(),o.set("skipButton",!1),y){u.clickHandler()&&u.clickHandler().revertAlternateClickHandlers(),o.off(null,null,y),y.instreamDestroy(),u.destroyInstream(),y=null,e.attachMedia();var t=o.get("preInstreamState");switch(t){case"instream-preroll":case"instream-midroll":var n=a.extend({},w);n.starttime=m,o.loadVideo(n),r.isMobile()&&o.mediaModel.get("state")===i.BUFFERING&&g.setState(i.BUFFERING),g.play();break;case"instream-postroll":case"instream-idle":g.stop()}}},this.getState=function(){return!(!y||!y._adModel)&&y._adModel.get("state")},this.setText=function(e){u.setAltText(e?e:"")},this.hide=function(){o.set("hideAdsControls",!0)}};return a.extend(u.prototype,o),u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(25),n(29),n(3),n(5),n(2),n(1)],r=function(e,t,n,i,r,o,a){var s=function(e,i){this.model=i,this._adModel=(new t).setup({id:i.get("id"),volume:i.get("volume"),fullscreen:i.get("fullscreen"),mute:i.get("mute")}),this._adModel.on("change:state",n,this);var r=e.getContainer();this.swf=r.querySelector("object")};return s.prototype=a.extend({init:function(){if(o.isChrome()){var e=-1,t=!1;this.swf.on("throttle",function(n){if(clearTimeout(e),"resume"===n.state)t&&(t=!1,this.instreamPlay());else{var i=this;e=setTimeout(function(){i._adModel.get("state")===r.PLAYING&&(t=!0,i.instreamPause())},250)}},this)}this.swf.on("instream:state",this.stateHandler,this).on("instream:time",function(e){this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this).on("instream:complete",function(e){this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)},this).on("instream:error",function(e){this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),this.swf.triggerFlash("instream:init"),this.applyProviderListeners=function(e){this.model.on("change:volume",function(t,n){e.volume(n)},this),this.model.on("change:mute",function(t,n){e.mute(n)},this),e.volume(this.model.get("volume")),e.mute(this.model.get("mute")),e.off(),e.on(i.JWPLAYER_PLAYER_STATE,this.stateHandler,this),e.on(i.JWPLAYER_MEDIA_TIME,function(e){this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this)}},stateHandler:function(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:this._adModel.set("state",e.newstate)}},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(e){this.swf.triggerFlash("instream:load",e)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},e),s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4),n(29),n(3),n(5),n(25)],r=function(e,t,n,i,r,o){var a=function(a,s){function l(t){var r=t||p.getVideo();if(h!==r){if(h=r,!r)return;r.off(),r.on("all",function(t,n){n=e.extend({},n,{type:t}),this.trigger(t,n)},f),r.on(i.JWPLAYER_MEDIA_BUFFER_FULL,d),r.on(i.JWPLAYER_PLAYER_STATE,u),r.attachMedia(),r.volume(s.get("volume")),r.mute(s.get("mute")||s.get("autostartMuted")),p.on("change:state",n,f)}}function u(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:p.set("state",e.newstate)}}function c(e){s.trigger(e.type,e),f.trigger(i.JWPLAYER_FULLSCREEN,{fullscreen:e.jwstate})}function d(){p.getVideo().play()}var p,h,f=e.extend(this,t);return a.on(i.JWPLAYER_FULLSCREEN,function(e){this.trigger(i.JWPLAYER_FULLSCREEN,e)},f),this.init=function(){p=(new o).setup({id:s.get("id"),volume:s.get("volume"),fullscreen:s.get("fullscreen"),mute:s.get("mute")||s.get("autostartMuted"),instreamMode:!0}),p.on("fullscreenchange",c),this._adModel=p},f.load=function(e){p.set("item",0),p.set("playlistItem",e),p.setActiveItem(e),l(),p.off(i.JWPLAYER_ERROR),p.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},f),p.loadVideo(e)},f.applyProviderListeners=function(e){l(e),e.off(i.JWPLAYER_ERROR),e.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},f),s.on("change:volume",function(e,t){h.volume(t)},f),s.on("change:mute",function(e,t){h.mute(t)},f),s.on("change:autostartMuted",function(e,t){t||h.mute(s.get("mute"))},f)},this.instreamDestroy=function(){p&&(p.off(),this.off(),h&&(h.detachMedia(),h.off(),p.getVideo()&&h.destroy()),p=null,a.off(null,null,this),a=null)},f.instreamPlay=function(){p.getVideo()&&p.getVideo().play(!0)},f.instreamPause=function(){p.getVideo()&&p.getVideo().pause(!0)},f};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(64),n(3),n(1)],r=function(e,t,n){function i(e){e.mediaController.off(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,e._onPlayAttempt),e.mediaController.off(t.JWPLAYER_PROVIDER_FIRST_FRAME,e._triggerFirstFrame),e.mediaController.off(t.JWPLAYER_MEDIA_TIME,e._onTime)}function r(e){i(e),e._triggerFirstFrame=n.once(function(){var n=e._qoeItem;n.tick(t.JWPLAYER_MEDIA_FIRST_FRAME);var r=n.between(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,t.JWPLAYER_MEDIA_FIRST_FRAME);e.mediaController.trigger(t.JWPLAYER_MEDIA_FIRST_FRAME,{loadTime:r}),i(e)}),e._onTime=a(e._triggerFirstFrame),e._onPlayAttempt=function(){e._qoeItem.tick(t.JWPLAYER_MEDIA_PLAY_ATTEMPT)},e.mediaController.on(t.JWPLAYER_MEDIA_PLAY_ATTEMPT,e._onPlayAttempt),e.mediaController.once(t.JWPLAYER_PROVIDER_FIRST_FRAME,e._triggerFirstFrame),e.mediaController.on(t.JWPLAYER_MEDIA_TIME,e._onTime)}function o(n){function i(n,i,o){n._qoeItem&&o&&n._qoeItem.end(o.get("state")),n._qoeItem=new e,n._qoeItem.tick(t.JWPLAYER_PLAYLIST_ITEM),n._qoeItem.start(i.get("state")),r(n),i.on("change:state",function(e,t,i){n._qoeItem.end(i),n._qoeItem.start(t)})}n.on("change:mediaModel",i)}var a=function(e){var t=0;return function(n){var i=n.position;i>t&&e(),t=i}};return{model:o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(21),n(49),n(15),n(61),n(22),n(1),n(2),n(3)],r=function(e,t,i,r,o,a,s,l){function u(){var e={LOAD_PROMISE_POLYFILL:{method:c,depends:[]},LOAD_BASE64_POLYFILL:{method:d,depends:[]},LOADED_POLYFILLS:{method:p,depends:["LOAD_PROMISE_POLYFILL","LOAD_BASE64_POLYFILL"]},LOAD_PLUGINS:{method:h,depends:["LOADED_POLYFILLS"]},INIT_PLUGINS:{method:f,depends:["LOAD_PLUGINS","SETUP_VIEW"]},LOAD_SKIN:{method:E,depends:["LOADED_POLYFILLS"]},LOAD_PLAYLIST:{method:m,depends:["LOADED_POLYFILLS"]},CHECK_FLASH:{method:w,depends:["LOADED_POLYFILLS"]},FILTER_PLAYLIST:{method:v,depends:["LOAD_PLAYLIST","CHECK_FLASH"]},SETUP_VIEW:{method:x,depends:["LOAD_SKIN"]},SET_ITEM:{method:k,depends:["INIT_PLUGINS","FILTER_PLAYLIST"]},SEND_READY:{method:A,depends:["SETUP_VIEW","SET_ITEM"]}};return e}function c(e){window.Promise?e():n.e(8,function(require){n(55),e()})}function d(e){window.btoa&&window.atob?e():n.e(10,function(require){n(53),e()})}function p(e){e()}function h(t,n){window.jwplayerPluginJsonp=e.registerPlugin,C=e.loadPlugins(n.get("id"),n.get("plugins")),C.on(l.COMPLETE,t),C.on(l.ERROR,a.partial(g,t)),C.load()}function f(e,t,n){delete window.jwplayerPluginJsonp,C.setupPlugins(n,t),e()}function g(e,t){_(e,"Could not load plugin",t.message)}function m(e,n){var i=n.get("playlist");a.isString(i)?(L=new t,L.on(l.JWPLAYER_PLAYLIST_LOADED,function(t){n.set("playlist",t.playlist),n.set("feedid",t.feedid),e()}),L.on(l.JWPLAYER_ERROR,a.partial(y,e)),L.load(i)):e()}function w(e,t,n){var i="flash"===t.get("primary"),o=s.flashVersion();if(i&&o){var a=n.getContainer(),l=a.parentElement;l||e();var u=document.createElement("div");u.id=t.get("id");var c=""+u.id+"-"+Math.random().toString(16).substr(2),d=t.get("flashloader"),p=t.get("width"),h=t.get("height");s.style(u,{position:"relative",width:p.toString().indexOf("%")>0?p:p+"px",height:h.toString().indexOf("%")>0?h:h+"px"});var f=r.embed(d,u,c,null);l.replaceChild(u,a);var g=function(){clearTimeout(m),f.embedCallback=null,e()};f.embedCallback=g;var m=setTimeout(function(){t.set("primary",void 0),t.updateProviders(),g()},1500)}else e()}function v(e,t,n,i,r){var o=t.get("playlist"),a=r(o);a?e():y(e)}function y(e,t){t&&t.message?_(e,"Error loading playlist",t.message):_(e,"Error loading player","No playable sources found")}function j(e,t){if(a.contains(o.SkinsLoadable,e))return t+"skins/"+e+".css"}function b(e){for(var t=document.styleSheets,n=0,i=t.length;n<i;n++)if(t[n].href===e)return!0;return!1}function E(e,t){var n=t.get("skin"),r=t.get("skinUrl");if(a.contains(o.SkinsIncluded,n))return void e();if(r||(r=j(n,t.get("base"))),a.isString(r)&&!b(r)){t.set("skin-loading",!0);var s=!0,u=new i(r,s);u.addEventListener(l.COMPLETE,function(){t.set("skin-loading",!1)}),u.addEventListener(l.ERROR,function(){t.set("skin","seven"),t.set("skin-loading",!1)}),u.load()}a.defer(function(){e()})}function x(e,t,n,i){i.setup(),e()}function k(e,t){t.once("itemReady",e),t.setItemIndex(t.get("item"))}function A(e){e({type:"complete"})}function _(e,t,n){e({type:"error",msg:t,reason:n})}var C,L;return{getQueue:u,error:_}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e){return"jwplayer."+e}function i(){return e.reduce(this.persistItems,function(e,i){var r=l[n(i)];return r&&(e[i]=t.serialize(r)),e},{})}function r(e,t){try{l[n(e)]=t}catch(i){var r=window.jwplayer;r&&r.debug&&console.error(i)}}function o(){e.each(this.persistItems,function(e){l.removeItem(n(e))})}function a(){this.persistItems=["volume","mute","captionLabel","qualityLabel"]}function s(t){e.each(this.persistItems,function(e){t.on("change:"+e,function(t,n){r(e,n)})})}var l={removeItem:t.noop};try{l=window.localStorage}catch(u){}return e.extend(a.prototype,{getAllItems:i,track:s,clear:o}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(69),n(2)],r=function(e,t){return n.p=t.loadFrom(),e.selectPlayer}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(8)],r=function(e){function t(e){e||n()}function n(){throw new Error("Invalid DFXP file")}var i=e.seconds;return function(r){t(r);var o=[],a=r.getElementsByTagName("p"),s=30,l=r.getElementsByTagName("tt");if(l&&l[0]){var u=parseFloat(l[0].getAttribute("ttp:frameRate"));isNaN(u)||(s=u)}t(a),a.length||(a=r.getElementsByTagName("tt:p"),a.length||(a=r.getElementsByTagName("tts:p")));for(var c=0;c<a.length;c++){for(var d=a[c],p=d.getElementsByTagName("br"),h=0;h<p.length;h++){var f=p[h];f.parentNode.replaceChild(r.createTextNode("\r\n"),f)}var g=d.innerHTML||d.textContent||d.text||"",m=e.trim(g).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(m){var w=d.getAttribute("begin"),v=d.getAttribute("dur"),y=d.getAttribute("end"),j={begin:i(w,s),text:m};y?j.end=i(y,s):v&&(j.end=j.begin+i(v,s)),o.push(j)}}return o.length||n(),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(8),n(2)],r=function(e,t,n){var i="jwplayer",r=function(r,o){for(var a=[],s=[],l=t.xmlAttribute,u="default",c="label",d="file",p="type",h=0;h<r.childNodes.length;h++){var f=r.childNodes[h];if(f.prefix===i){var g=e.localName(f);"source"===g?(delete o.sources,a.push({file:l(f,d),"default":l(f,u),label:l(f,c),type:l(f,p)})):"track"===g?(delete o.tracks,s.push({file:l(f,d),"default":l(f,u),kind:l(f,"kind"),label:l(f,c)})):(o[g]=n.serialize(e.textContent(f)),"file"===g&&o.sources&&delete o.sources)}o[d]||(o[d]=o.link)}if(a.length)for(o.sources=[],h=0;h<a.length;h++)a[h].file.length>0&&(a[h][u]="true"===a[h][u],a[h].label.length||delete a[h].label,o.sources.push(a[h]));if(s.length)for(o.tracks=[],h=0;h<s.length;h++)s[h].file.length>0&&(s[h][u]="true"===s[h][u],s[h].kind=s[h].kind.length?s[h].kind:"captions",s[h].label.length||delete s[h].label,o.tracks.push(s[h]));return o};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(20),n(8),n(2)],r=function(e,t,n){function i(e){for(var t=[],n=0;n<s(e);n++){var i=e.childNodes[n];"jwplayer"===i.prefix&&"mediatypes"===o(i).toLowerCase()&&t.push(a(i))}return t}var r=t.xmlAttribute,o=e.localName,a=e.textContent,s=e.numChildren,l="media",u=function(e,t){function c(e){var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}var d,p,h="tracks",f=[];for(p=0;p<s(e);p++)if(d=e.childNodes[p],d.prefix===l){if(!o(d))continue;switch(o(d).toLowerCase()){case"content":if(r(d,"duration")&&(t.duration=n.seconds(r(d,"duration"))),r(d,"url")){t.sources||(t.sources=[]);var g={file:r(d,"url"),type:r(d,"type"),width:r(d,"width"),label:r(d,"label")},m=i(d);m.length&&(g.mediaTypes=m),t.sources.push(g)}s(d)>0&&(t=u(d,t));break;case"title":t.title=a(d);break;case"description":t.description=a(d);break;case"guid":t.mediaid=a(d);break;case"thumbnail":t.image||(t.image=r(d,"url"));break;case"player":break;case"group":u(d,t);break;case"subtitle":var w={};w.file=r(d,"url"),w.kind="captions",r(d,"lang").length>0&&(w.label=c(r(d,"lang"))),f.push(w)}}for(t.hasOwnProperty(h)||(t[h]=[]),p=0;p<f.length;p++)t[h].push(f[p]);return t};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={kind:"captions","default":!1},n=function(n){if(n&&n.file)return e.extend({},t,n)};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(26),n(2),n(3),n(4),n(1),n(15)],r=function(e,t,n,i,r,o){function a(e,t,n){return function(){var i=e.getContainer().getElementsByClassName("jw-overlays")[0];i&&(i.appendChild(n),n.left=i.style.left,n.top=i.style.top,t.displayArea=i)}}function s(e){function t(){var t=e.displayArea;t&&e.resize(t.clientWidth,t.clientHeight)}return function(){t(),setTimeout(t,400)}}var l=function(l,u){function c(){m||(m=!0,g=o.loaderstatus.COMPLETE,f.trigger(n.COMPLETE))}function d(){if(!v&&(u&&0!==r.keys(u).length||c(),!m)){var i=l.getPlugins();h=r.after(w,c),r.each(u,function(r,a){var s=e.getPluginName(a),l=i[s],u=l.getJS(),c=l.getTarget(),d=l.getStatus();d!==o.loaderstatus.LOADING&&d!==o.loaderstatus.NEW&&(u&&!t.versionCheck(c)&&f.trigger(n.ERROR,{message:"Incompatible player version"}),h())})}}function p(e){if(!v){var i="File not found";e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{message:i}),d()}}var h,f=r.extend(this,i),g=o.loaderstatus.NEW,m=!1,w=r.size(u),v=!1;this.setupPlugins=function(n,i){var o=[],u=l.getPlugins(),c=i.get("plugins");r.each(c,function(i,l){var d=e.getPluginName(l),p=u[d],h=p.getFlashPath(),f=p.getJS(),g=p.getURL();if(h){var m=r.extend({name:d,swf:h,pluginmode:p.getPluginmode()},i);o.push(m)}var w=t.tryCatch(function(){if(f){var e=c[g];if(!e)return void t.log("JW Plugin already loaded",d,g);var i=document.createElement("div");i.id=n.id+"_"+d,i.className="jw-plugin jw-reset";var o=r.extend({},e),l=p.getNewInstance(n,o,i);l.addToPlayer=a(n,l,i),l.resizeHandler=s(l),n.addPlugin(d,l,i)}});w instanceof t.Error&&t.log("ERROR: Failed to load "+d+".")}),i.set("flashPlugins",o)},this.load=function(){if(t.exists(u)&&"object"!==t.typeOf(u))return void d();g=o.loaderstatus.LOADING,r.each(u,function(e,i){if(t.exists(i)){var r=l.addPlugin(i);r.on(n.COMPLETE,d),r.on(n.ERROR,p)}});var e=l.getPlugins();r.each(e,function(e){e.load()}),d()},this.destroy=function(){v=!0,this.off()},this.getStatus=function(){return g}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(26),n(52)],r=function(e,t){var n=function(n){this.addPlugin=function(i){var r=e.getPluginName(i);return n[r]||(n[r]=new t(i)),n[r]},this.getPlugins=function(){return n}};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[],r=function(){return{}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(58),n(2),n(1),n(65)],r=function(e,t,n,i){var r=[{name:"youtube",supports:function(e){return t.isYouTube(e.file,e.type)}},{name:"html5",supports:function(n){var r={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},o=n.file,a=n.type,s=e(n);if(null!==s)return s;if(t.isRtmp(o,a))return!1;if(!r[a])return!1;if(i.canPlayType){var l=i.canPlayType(r[a]);return!!l}return!1}},{name:"flash",supports:function(e){var i={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},r=n.keys(i);if(!t.isFlashSupported())return!1;var o=e.file,a=e.type;return!!t.isRtmp(o,a)||n.contains(r,a)}}];return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(13),n(38),n(134),n(1),n(137)],r=function(e,t,i,r,o){function a(e){this.config=e||{},this.providers=this.reorderProviders(this.config.primary)}a.loaders={html5:function(e){n.e(4,function(require){var t=n(71);s(t),e(t)})},flash:function(e){n.e(5,function(require){var t=n(57);s(t),e(t)})},youtube:function(e){n.e(6,function(require){var t=n(59);s(t),e(t)})}};var s=a.registerProvider=function(n){var a=n.getName().name;if(!i[a]){if(!r.find(t,r.matches({name:a}))){if(!r.isFunction(n.supports))throw{message:"Tried to register a provider with an invalid object"};t.unshift({name:a,supports:n.supports})}o(n.prototype,e),i[a]=n}};return r.extend(a.prototype,{load:function(e){return Promise.all(r.map(e,function(e){return new Promise(function(t){var n=a.loaders[e.name];n?n(t):t()})}))},reorderProviders:function(e){var n=r.clone(t);if("flash"===e){var i=r.indexOf(n,r.findWhere(n,{name:"flash"})),o=n.splice(i,1)[0],a=r.indexOf(n,r.findWhere(n,{name:"html5"}));n.splice(a,0,o)}return n},providerSupports:function(e,t){return e.supports(t)},required:function(e,t){var n=this,i=this.reorderProviders(t);return e=e.slice(),r.compact(r.map(i,function(t){for(var i=!1,r=e.length;r--;){var o=e[r],a=n.providerSupports(t,o.sources[0]);a&&e.splice(r,1),i=i||a}if(i)return t}))},choose:function(e){e=r.isObject(e)?e:{};for(var t=this.providers.length,n=0;n<t;n++){var o=this.providers[n];if(this.providerSupports(o,e)){var a=t-n-1;return{priority:a,name:o.name,type:e.type,providerToCheck:o,provider:i[o.name]}}}return null}}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t){return e.each(Array.prototype.slice.call(arguments,1),function(e){if(e)for(var n in e)n in t||(t[n]=e[n])}),t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{hasClass:function(e,t){var n=" "+t+" ";return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){var n=e.extend({get:function(e){return this.attributes=this.attributes||{},this.attributes[e]},set:function(e,t){if(this.attributes=this.attributes||{},this.attributes[e]!==t){var n=this.attributes[e];this.attributes[e]=t,this.trigger("change:"+e,this,t,n)}},clone:function(){return e.clone(this.attributes)}},t);return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={};return t.isDvr=function(e,t){return Math.abs(e)>=Math.max(t,0)},t.streamType=function(n,i){var r=e.isUndefined(i)?120:i,o="VOD";return n===1/0?o="LIVE":n<0&&(o=t.isDvr(n,r)?"DVR":"LIVE"),o},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e,n,i){n=n||this,i=i||[];var r=window.jwplayer;if(r&&r.debug)return e.apply(n,i);try{return e.apply(n,i)}catch(o){return new t(e.name,o)}},t=function(e,t){this.name=e,this.message=t.message||t.toString(),this.error=t};return{tryCatch:e,Error:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(1)],r=function(e){return function(t,n,i){var r="jw-breakpoint-",o=n,a=i;r+=o>=1280?"7":o>=960?"6":o>=800?"5":o>=640?"4":o>=540?"3":o>=420?"2":o>=320?"1":"0",e.replaceClass(t,/jw-breakpoint-\d+/,r),e.toggleClass(t,"jw-orientation-portrait",a>o)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(23),n(5),n(1)],r=function(e,t,i,r){var o=t.style,a={back:!0,fontSize:14,fontFamily:"Arial,sans-serif",fontOpacity:100,color:"#FFF",backgroundColor:"#000",backgroundOpacity:100,edgeStyle:null,windowColor:"#FFF",windowOpacity:0,preprocessor:r.identity},s=function(s){function l(e,n,i){if(t.css("#"+e+" .jw-text-track-display",n,e),t.css("#"+e+" .jw-text-track-cue",i,e),t.css("#"+e+" .jw-video::-webkit-media-text-track-display",n,e),t.css("#"+e+" .jw-video::cue",i,e),i.backgroundColor){var r="{background-color: "+i.backgroundColor+" !important;}";t.css("#"+e+" .jw-video::-webkit-media-text-track-display-backdrop",r,e)}}function u(e,n,i){var r=t.hexToRgba("#000000",i);"dropshadow"===e?n.textShadow="0 2px 1px "+r:"raised"===e?n.textShadow="0 0 5px "+r+", 0 1px 5px "+r+", 0 2px 5px "+r:"depressed"===e?n.textShadow="0 -2px 1px "+r:"uniform"===e&&(n.textShadow="-2px 0 1px "+r+",2px 0 1px "+r+",0 -2px 1px "+r+",0 2px 1px "+r+",-1px 1px 1px "+r+",1px 1px 1px "+r+",1px -1px 1px "+r+",1px 1px 1px "+r)}function c(e){f=e,this.selectCues(p,f)}function d(){s.get("renderCaptionsNatively")||n.e(7,function(require){v=n(56)})}var p,h,f,g,m,w,v,y={};g=document.createElement("div"),g.className="jw-captions jw-reset",this.show=function(){g.className="jw-captions jw-captions-enabled jw-reset"},this.hide=function(){g.className="jw-captions jw-reset"},this.populate=function(e){return h=[],p=e,e?void this.selectCues(e,f):(h=[],void this.renderCues())},this.resize=function(){var e=g.clientWidth,t=Math.pow(e/400,.6);if(t){var n=y.fontSize*t;o(g,{fontSize:Math.floor(2*n)/2+"px"})}this.renderCues(!0)},this.renderCues=function(e){e=!!e,v&&v.WebVTT.processCues(window,h,g,e)},this.selectCues=function(e,t){var n,i;e&&e.data&&t&&(i=this.getAlignmentPosition(e,t),i!==!1&&(n=this.getCurrentCues(e.data,i),this.updateCurrentCues(n),this.renderCues(!0)))},this.getCurrentCues=function(e,t){return r.filter(e,function(e){return t>=e.startTime&&(!e.endTime||t<=e.endTime)})},this.updateCurrentCues=function(e){return e.length?r.difference(e,h).length&&(m.className="jw-captions-window jw-reset jw-captions-window-active",h=e):h=[],h},this.getAlignmentPosition=function(e,t){var n=e.source,i=t.metadata;return n?!(!i||!r.isNumber(i[n]))&&i[n]:e.embedded&&t.duration<0?t.position-t.duration:t.position},this.clear=function(){e.empty(g)},this.setContainerHeight=function(e){o(g,{height:e})},this.setup=function(e,n){m=document.createElement("div"),w=document.createElement("span"),m.className="jw-captions-window jw-reset",w.className="jw-captions-text jw-reset",y=r.extend({},a,n);var i=y.fontOpacity,c=y.windowOpacity,d=y.edgeStyle,p=y.backgroundColor,h={},f={color:t.hexToRgba(y.color,i),fontFamily:y.fontFamily,fontStyle:y.fontStyle,fontWeight:y.fontWeight,textDecoration:y.textDecoration};c&&(h.backgroundColor=t.hexToRgba(y.windowColor,c)),u(d,f,i),y.back?f.backgroundColor=t.hexToRgba(p,y.backgroundOpacity):null===d&&u("uniform",f),o(m,h),o(w,f),l(e,h,f),m.appendChild(w),g.appendChild(m),this.populate(s.get("captionsTrack")),s.set("captions",y)},this.element=function(){return g},s.on("change:playlistItem",function(){f=null,h=[]},this),s.on("change:captionsTrack",function(e,t){this.populate(t)},this),s.mediaController.on("seek",function(){h=[]},this),s.mediaController.on("time seek",c,this),s.mediaController.on("subtitlesTrackData",function(){this.selectCues(p,f)},this),s.on("change:state",function(e,t){
switch(t){case i.IDLE:case i.ERROR:case i.COMPLETE:this.hide();break;default:this.show()}},this),s.on("itemReady",d,this)};return s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(3),n(4),n(1)],r=function(e,t,n,i){var r=function(r,o,a){function s(e){if(!r.get("flashBlocked"))return c?void c(e):void f.trigger(e.type===t.touchEvents.CLICK?"click":"tap")}function l(){return d?void d():void f.trigger("doubleClick")}var u,c,d,p={enableDoubleTap:!0,useMove:!0};i.extend(this,n),u=o,this.element=function(){return u};var h=new e(u,i.extend(p,a));h.on("click tap",s),h.on("doubleClick doubleTap",l),h.on("move",function(){f.trigger("move")}),h.on("over",function(){f.trigger("over")}),h.on("out",function(){f.trigger("out")}),this.clickHandler=s;var f=this;this.setAlternateClickHandlers=function(e,t){c=e,d=t||null},this.revertAlternateClickHandlers=function(){c=null,d=null}};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(30)],r=function(e,t,n){function i(e,t){this.time=e,this.text=t,this.el=document.createElement("div"),this.el.className="jw-cue jw-reset"}e.extend(i.prototype,{align:function(e){if("%"===this.time.toString().slice(-1))this.pct=this.time;else{var t=this.time/e*100;this.pct=t+"%"}this.el.style.left=this.pct}});var r={loadChapters:function(e){t.ajax(e,this.chaptersLoaded.bind(this),this.chaptersFailed,{plainText:!0})},chaptersLoaded:function(t){var i=n(t.responseText);e.isArray(i)&&(e.each(i,this.addCue,this),this.drawCues())},chaptersFailed:function(){},addCue:function(e){this.cues.push(new i(e.begin,e.text))},drawCues:function(){var t=this._model.mediaModel.get("duration");if(!t||t<=0)return void this._model.mediaModel.once("change:duration",this.drawCues,this);var n=this;e.each(this.cues,function(e){e.align(t),e.el.addEventListener("mouseover",function(){n.activeCue=e}),e.el.addEventListener("mouseout",function(){n.activeCue=null}),n.elementRail.appendChild(e.el)})},resetChapters:function(){e.each(this.cues,function(e){e.el.parentNode&&e.el.parentNode.removeChild(e.el)},this),this.cues=[]}};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(36),n(2),n(1),n(7),n(90)],r=function(e,t,n,i,r){var o=e.extend({setup:function(e,o,a){a=a||{},this.iconUI||(this.iconUI=new i(this.el,{useHover:!0,directSelect:!0}),this.toggleValueListener=this.toggleValue.bind(this),this.toggleOpenStateListener=this.toggleOpenState.bind(this),this.openTooltipListener=this.openTooltip.bind(this),this.closeTooltipListener=this.closeTooltip.bind(this),this.selectListener=this.select.bind(this)),this.reset(),e=n.isArray(e)?e:[],t.toggleClass(this.el,"jw-hidden",e.length<2);var s=e.length>2||2===e.length&&a&&a.toggle===!1,l=!s&&2===e.length;if(t.toggleClass(this.el,"jw-toggle",l||!!a.isToggle),t.toggleClass(this.el,"jw-button-color",!l),this.isActive=s||l,s){t.removeClass(this.el,"jw-off"),this.iconUI.on("tap",this.toggleOpenStateListener).on("over",this.openTooltipListener).on("out",this.closeTooltipListener);var u=r(e),c=t.createElement(u);this.addContent(c),this.contentUI=new i(this.content).on("click tap",this.selectListener)}else l&&this.iconUI.on("click tap",this.toggleValueListener);this.selectItem(o)},toggleValue:function(){this.trigger("toggleValue")},select:function(e){if(e.target.parentElement===this.content){var i=t.classList(e.target),r=n.find(i,function(e){return 0===e.indexOf("jw-item")});r&&(this.trigger("select",parseInt(r.split("-")[2])),this.closeTooltipListener())}},selectItem:function(e){if(this.content)for(var n=0;n<this.content.children.length;n++)t.toggleClass(this.content.children[n],"jw-active-option",e===n);t.toggleClass(this.el,"jw-off",0===e)},reset:function(){t.addClass(this.el,"jw-off"),this.iconUI.off(),this.contentUI&&this.contentUI.off().destroy(),this.removeContent()}});return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(32),n(7),n(1),n(2),n(91)],r=function(e,t,n,i,r){var o=function(e,t,n,i){this._model=e,this._api=t,this._nextButton=n,this._playerElement=i,this.nextUpText=e.get("localization").nextUp,this.state="tooltip"};return n.extend(o.prototype,{setup:function(){this.container=document.createElement("div"),this.container.className="jw-nextup-container jw-reset";var e=i.createElement(r());this.addContent(e),this.closeButton=this.content.querySelector(".jw-nextup-close"),this.tooltip=this.content.querySelector(".jw-nextup-tooltip"),this.showNextUp=!1,this.streamType=void 0,this._model.on("change:mediaModel",this.onMediaModel,this),this._model.on("change:streamType",this.onStreamType,this),this._model.on("change:nextUp",this.onNextUp,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this.onMediaModel(this._model,this._model.get("mediaModel")),new t(this.closeButton,{directSelect:!0}).on("click tap",this.hide,this),new t(this.tooltip).on("click tap",this.click,this),new t(this._nextButton.element(),{useHover:!0,directSelect:!0}).on("click tap",this.click,this).on("over",this.show,this).on("out",this.hoverOut,this)},loadThumbnail:function(e){return this.nextUpImage=new Image,this.nextUpImage.onload=function(){this.nextUpImage.onload=null}.bind(this),this.nextUpImage.src=e,{backgroundImage:'url("'+e+'")'}},click:function(){this.state="tooltip",this._api.next(),this.hide()},show:function(){"opened"===this.state||this.hideToolTip||(e.addClass(this.container,"jw-nextup-container-visible"),e.addClass(this._playerElement,"jw-flag-nextup"))},hide:function(){e.removeClass(this.container,"jw-nextup-container-visible"),e.removeClass(this.container,"jw-nextup-sticky"),e.removeClass(this._playerElement,"jw-flag-nextup"),"opened"===this.state&&(this.state="closed")},hoverOut:function(){"opened"!==this.state&&this.hide()},showTilEnd:function(){"opened"!==this.state&&"closed"!==this.state&&(e.addClass(this.container,"jw-nextup-sticky"),this.show(),this.state="opened")},setNextUpItem:function(t){var n=this;setTimeout(function(){if(n.hideToolTip=!(t.title||t.image),!n.hideToolTip){if(n.thumbnail=n.content.querySelector(".jw-nextup-thumbnail"),e.toggleClass(n.thumbnail,"jw-nextup-thumbnail-visible",!!t.image),t.image){var r=n.loadThumbnail(t.image);i.style(n.thumbnail,r)}n.header=n.content.querySelector(".jw-nextup-header"),n.header.innerText=n.nextUpText,n.title=n.content.querySelector(".jw-nextup-title");var o=t.title;n.title.innerText=o?i.createElement(o).textContent:""}},500)},onNextUp:function(e,t){return t?(this.showNextUp=!0,this._nextButton.toggle(!0),void this.setNextUpItem(t)):(this._nextButton.toggle(!1),void(this.showNextUp=!1))},onDuration:function(e,t){if(t){var n=i.seconds(e.get("nextupoffset")||-10);n<0&&(n+=t),this.offset=n}},onMediaModel:function(e,t){t.on("change:state",function(e,t){"complete"===t&&(this.state="tooltip",this.hide())},this)},onElapsed:function(e,t){"VOD"===this.streamType&&this.showNextUp&&t>=this.offset?this.showTilEnd():"opened"!==this.state&&"closed"!==this.state||(this.state="tooltip",this.hide())},onStreamType:function(e,t){this.streamType=t},element:function(){return this.container},addContent:function(e){this.content&&this.removeContent(),this.content=e,this.container.appendChild(e)},removeContent:function(){this.content&&(this.container.removeChild(this.content),this.content=null)}}),o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(30)],r=function(e,t,n){function i(e){this.begin=e.begin,this.end=e.end,this.img=e.text}var r={loadThumbnails:function(e){e&&(this.vttPath=e.split("?")[0].split("/").slice(0,-1).join("/"),this.individualImage=null,t.ajax(e,this.thumbnailsLoaded.bind(this),this.thumbnailsFailed.bind(this),{plainText:!0}))},thumbnailsLoaded:function(t){var r=n(t.responseText);e.isArray(r)&&(e.each(r,function(e){this.thumbnails.push(new i(e))},this),this.drawCues())},thumbnailsFailed:function(){},chooseThumbnail:function(t){var n=e.sortedIndex(this.thumbnails,{end:t},e.property("end"));n>=this.thumbnails.length&&(n=this.thumbnails.length-1);var i=this.thumbnails[n].img;return i.indexOf("://")<0&&(i=this.vttPath?this.vttPath+"/"+i:i),i},loadThumbnail:function(t){var n=this.chooseThumbnail(t),i={display:"block",margin:"0 auto",backgroundPosition:"0 0"},r=n.indexOf("#xywh");if(r>0)try{var o=/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(n);n=o[1],i.backgroundPosition=o[2]*-1+"px "+o[3]*-1+"px",i.width=o[4],i.height=o[5]}catch(a){return}else this.individualImage||(this.individualImage=new Image,this.individualImage.onload=e.bind(function(){this.individualImage.onload=null,this.timeTip.image({width:this.individualImage.width,height:this.individualImage.height})},this),this.individualImage.src=n);return i.backgroundImage='url("'+n+'")',i},showThumbnail:function(e){this.thumbnails.length<1||this.timeTip.image(this.loadThumbnail(e))},resetThumbnails:function(){this.timeTip.image({backgroundImage:"",width:0,height:0}),this.thumbnails=[]}};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(22),n(35),n(36),n(145),n(148)],r=function(e,t,n,i,r,o,a){var s=r.extend({setup:function(){this.text=document.createElement("span"),this.text.className="jw-text jw-reset",this.img=document.createElement("div"),this.img.className="jw-reset";var e=document.createElement("div");e.className="jw-time-tip jw-background-color jw-reset",e.appendChild(this.img),e.appendChild(this.text),t.removeClass(this.el,"jw-hidden"),this.addContent(e)},image:function(e){t.style(this.img,e)},update:function(e){this.text.innerHTML=e}}),l=i.extend({constructor:function(t,n){this._model=t,this._api=n,this.timeTip=new s("jw-tooltip-time"),this.timeTip.setup(),this.cues=[],this.seekThrottled=e.throttle(this.performSeek,400),this._model.on("change:playlistItem",this.onPlaylistItem,this).on("change:position",this.onPosition,this).on("change:duration",this.onDuration,this).on("change:buffer",this.onBuffer,this),i.call(this,"jw-slider-time","horizontal")},setup:function(){i.prototype.setup.apply(this,arguments),this._model.get("playlistItem")&&this.onPlaylistItem(this._model,this._model.get("playlistItem")),this.elementRail.appendChild(this.timeTip.element()),this.el.addEventListener("mousemove",this.showTimeTooltip.bind(this),!1),this.el.addEventListener("mouseout",this.hideTimeTooltip.bind(this),!1)},limit:function(t){if(this.activeCue&&e.isNumber(this.activeCue.pct))return this.activeCue.pct;var i=this._model.get("duration"),r=this._model.get("streamType");if("DVR"===r){var o=(1-t/100)*i,a=this._model.get("position"),s=Math.min(o,Math.max(n.dvrSeekLimit,a)),l=100*s/i;return 100-l}return t},update:function(e){this.seekTo=e,this.seekThrottled(),i.prototype.update.apply(this,arguments)},dragStart:function(){this._model.set("scrubbing",!0),i.prototype.dragStart.apply(this,arguments)},dragEnd:function(){i.prototype.dragEnd.apply(this,arguments),this._model.set("scrubbing",!1)},onSeeked:function(){this._model.get("scrubbing")&&this.performSeek()},onBuffer:function(e,t){this.updateBuffer(t)},onPosition:function(e,t){this.updateTime(t,e.get("duration"))},onDuration:function(e,t){this.updateTime(e.get("position"),t)},updateTime:function(e,t){var n=0;if(t){var i=this._model.get("streamType");"DVR"===i?n=(t-e)/t*100:"VOD"===i&&(n=e/t*100)}this.render(n)},onPlaylistItem:function(t,n){this.reset(),t.mediaModel.on("seeked",this.onSeeked,this);var i=n.tracks;e.each(i,function(e){e&&e.kind&&"thumbnails"===e.kind.toLowerCase()?this.loadThumbnails(e.file):e&&e.kind&&"chapters"===e.kind.toLowerCase()&&this.loadChapters(e.file)},this)},performSeek:function(){var e,t=this.seekTo,n=this._model.get("duration"),i=this._model.get("streamType");0===n?this._api.play():"DVR"===i?(e=(100-t)/100*n,this._api.seek(e)):(e=t/100*n,this._api.seek(Math.min(e,n-.25)))},showTimeTooltip:function(e){var i=this._model.get("duration");if(0!==i){var r=t.bounds(this.elementRail),o=e.pageX?e.pageX-r.left:e.x;o=t.between(o,0,r.width);var a=o/r.width,s=i*a;i<0&&(s=i-s);var l;if(this.activeCue)l=this.activeCue.text;else{var u=!0;l=t.timeFormat(s,u),i<0&&s>n.dvrSeekLimit&&(l="Live")}this.timeTip.update(l),this.showThumbnail(s),t.addClass(this.timeTip.el,"jw-open"),this.timeTip.el.style.left=100*a+"%"}},hideTimeTooltip:function(){t.removeClass(this.timeTip.el,"jw-open")},reset:function(){this.resetChapters(),this.resetThumbnails()}});return e.extend(l.prototype,o,a),l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(36),n(35),n(7),n(2)],r=function(e,t,n,i){var r=e.extend({constructor:function(r,o,a){this._model=r,e.call(this,o,a,!0),this.volumeSlider=new t("jw-slider-volume jw-volume-tip","vertical"),this.addContent(this.volumeSlider.element()),this.volumeSlider.on("update",function(e){this.trigger("update",e)},this),i.removeClass(this.el,"jw-hidden"),new n(this.el,{useHover:!0,directSelect:!0}).on("click",this.toggleValue,this).on("tap",this.toggleOpenState,this).on("over",this.openTooltip,this).on("out",this.closeTooltip,this),this._model.on("change:volume",this.onVolume,this)},toggleValue:function(){this.trigger("toggleValue")}});return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(1),n(4),n(22),n(7),n(35),n(149),n(146),n(150),n(66)],r=function(e,t,n,i,r,o,a,s,l,u){function c(e,t){var n=document.createElement("span");return n.className="jw-text jw-reset "+e,t&&n.setAttribute("role",t),n}function d(e,t){var n=new s(e,t);return n}function p(e,n){var i=document.createElement("div");return i.className="jw-group jw-controlbar-"+e+"-group jw-reset",t.each(n,function(e){e.element&&(e=e.element()),i.appendChild(e)}),i}function h(t,n){this._api=t,this._model=n,this._isMobile=e.isMobile(),this._localization=this._model.get("localization"),this.setup()}return t.extend(h.prototype,n,{setup:function(){this.build(),this.initialize()},build:function(){var n,i,r,s=new a(this._model,this._api),h=this._localization.play,f=this._localization.next,g=this._localization.volume,m=this._localization.rewind;this._isMobile||(n=new o("jw-slider-volume","horizontal"),i=new l(this._model,"jw-icon-volume",g)),this._model.get("sdkplatform")||e.isIOS(8)||e.isIOS(9)||(r=u("jw-icon-volume",this._api.setMute,g)),this.elements={alt:c("jw-text-alt","status"),play:u("jw-icon-playback",this._api.play.bind(this,{reason:"interaction"}),h),rewind:u("jw-icon-rewind",this.rewind.bind(this),m),next:u("jw-icon-next",null,f),elapsed:c("jw-text-elapsed","timer"),time:s,duration:c("jw-text-duration","timer"),hd:d("jw-icon-hd",this._localization.hd),cc:d("jw-icon-cc",this._localization.cc),audiotracks:d("jw-icon-audio-tracks",this._localization.audioTracks),mute:r,volume:n,volumetooltip:i,cast:u("jw-icon-cast jw-off",this._api.castToggle,this._localization.cast),fullscreen:u("jw-icon-fullscreen",this._api.setFullscreen,this._localization.fullscreen)},this.layout={left:[this.elements.play,this.elements.rewind,this.elements.elapsed],center:[this.elements.time,this.elements.alt],right:[this.elements.duration,this.elements.next,this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.mute,this.elements.cast,this.elements.volume,this.elements.volumetooltip,this.elements.fullscreen]},this.menus=t.compact([this.elements.hd,this.elements.cc,this.elements.audiotracks,this.elements.volumetooltip]),this.layout.left=t.compact(this.layout.left),this.layout.center=t.compact(this.layout.center),this.layout.right=t.compact(this.layout.right),this.el=document.createElement("div"),this.el.className="jw-controlbar jw-background-color jw-reset",this.elements.left=p("left",this.layout.left),this.elements.center=p("center",this.layout.center),this.elements.right=p("right",this.layout.right),this.el.appendChild(this.elements.left),this.el.appendChild(this.elements.center),this.el.appendChild(this.elements.right)},initialize:function(){this.elements.play.show(),this.elements.fullscreen.show(),this.elements.mute&&this.elements.mute.show(),this.onVolume(this._model,this._model.get("volume")),this.onPlaylistItem(),this.onMediaModel(this._model,this._model.get("mediaModel")),this.onCastAvailable(this._model,this._model.get("castAvailable")),this.onCastActive(this._model,this._model.get("castActive")),this.onCaptionsList(this._model,this._model.get("captionsList")),this._model.on("change:volume",this.onVolume,this),this._model.on("change:mute",this.onMute,this),this._model.on("change:playlistItem",this.onPlaylistItem,this),this._model.on("change:mediaModel",this.onMediaModel,this),this._model.on("change:castAvailable",this.onCastAvailable,this),this._model.on("change:castActive",this.onCastActive,this),this._model.on("change:duration",this.onDuration,this),this._model.on("change:position",this.onElapsed,this),this._model.on("change:fullscreen",this.onFullscreen,this),this._model.on("change:captionsList",this.onCaptionsList,this),this._model.on("change:captionsIndex",this.onCaptionsIndex,this),this._model.on("change:streamType",this.onStreamTypeChange,this),this.elements.volume&&this.elements.volume.on("update",function(e){var t=e.percentage;this._api.setVolume(t)},this),this.elements.volumetooltip&&(this.elements.volumetooltip.on("update",function(e){var t=e.percentage;this._api.setVolume(t)},this),this.elements.volumetooltip.on("toggleValue",function(){this._api.setMute()},this)),this.elements.hd.on("select",function(e){this._model.getVideo().setCurrentQuality(e)},this),this.elements.hd.on("toggleValue",function(){this._model.getVideo().setCurrentQuality(0===this._model.getVideo().getCurrentQuality()?1:0)},this),this.elements.cc.on("select",function(e){this._api.setCurrentCaptions(e)},this),this.elements.cc.on("toggleValue",function(){var e=this._model.get("captionsIndex");this._api.setCurrentCaptions(e?0:1)},this),this.elements.audiotracks.on("select",function(e){this._model.getVideo().setCurrentAudioTrack(e)},this),new r(this.elements.duration).on("click tap",function(){if("DVR"===this._model.get("streamType")){var e=this._model.get("position");this._api.seek(Math.max(i.dvrSeekLimit,e))}},this),new r(this.el).on("click tap drag",function(){this.trigger("userAction")},this),t.each(this.menus,function(e){e.on("open-tooltip",this.closeMenus,this)},this)},onCaptionsList:function(e,t){var n=e.get("captionsIndex");this.elements.cc.setup(t,n,{isToggle:!0})},onCaptionsIndex:function(e,t){this.elements.cc.selectItem(t)},onPlaylistItem:function(){this.elements.time.updateBuffer(0),this.elements.time.render(0),this.elements.duration.innerHTML="00:00",this.elements.elapsed.innerHTML="00:00",this.elements.audiotracks.setup()},onMediaModel:function(e,n){n.on("change:levels",function(e,t){this.elements.hd.setup(t,e.get("currentLevel"))},this),n.on("change:currentLevel",function(e,t){this.elements.hd.selectItem(t)},this),n.on("change:audioTracks",function(e,n){var i=t.map(n,function(e){return{label:e.name}});this.elements.audiotracks.setup(i,e.get("currentAudioTrack"),{toggle:!1})},this),n.on("change:currentAudioTrack",function(e,t){this.elements.audiotracks.selectItem(t)},this)},onVolume:function(e,t){this.renderVolume(e.get("mute"),t)},onMute:function(e,t){this.renderVolume(t,e.get("volume"))},renderVolume:function(t,n){this.elements.mute&&e.toggleClass(this.elements.mute.element(),"jw-off",t),this.elements.volume&&this.elements.volume.render(t?0:n),this.elements.volumetooltip&&(this.elements.volumetooltip.volumeSlider.render(t?0:n),e.toggleClass(this.elements.volumetooltip.element(),"jw-off",t))},onCastAvailable:function(e,t){this.elements.cast.toggle(t)},onCastActive:function(t,n){e.toggleClass(this.elements.cast.element(),"jw-off",!n)},onElapsed:function(t,n){var i,r=t.get("duration");i="DVR"===t.get("streamType")?"-"+e.timeFormat(-r):e.timeFormat(n),this.elements.elapsed.innerHTML=i},onDuration:function(t,n){var i;i="DVR"===t.get("streamType")?"Live":e.timeFormat(n),this.elements.duration.innerHTML=i},onFullscreen:function(t,n){e.toggleClass(this.elements.fullscreen.element(),"jw-off",n)},element:function(){return this.el},setAltText:function(e){this.elements.alt.innerHTML=e},addCues:function(e){this.elements.time&&(t.each(e,function(e){this.elements.time.addCue(e)},this),this.elements.time.drawCues())},closeMenus:function(e){t.each(this.menus,function(t){e&&e.target===t.el||t.closeTooltip(e)})},hideComponents:function(){this.closeMenus()},rewind:function(){var e=this._model.get("position"),t=this._model.get("duration"),n=e-10,i=0;"DVR"===this._model.get("streamType")&&(i=t),this._api.seek(Math.max(n,i))},onStreamTypeChange:function(e){var t=e.get("streamType");this.elements.rewind.toggle("LIVE"!==t),"DVR"===t&&(this.elements.duration.innerHTML="Live")}}),h}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(4),n(7),n(86),n(1)],r=function(e,t,n,i,r){var o=function(o){r.extend(this,t),this.model=o,this.el=e.createElement(i({ariaLabel:this.model.get("localization").playback}));var a=this;this.iconUI=new n(this.el).on("click tap",function(e){a.trigger(e.type)}),this.model.on("change:state",function(e,t){var n=a.el.getElementsByClassName("jw-icon-display");if(n.length){var i=a.model.get("localization"),r=i.playback;switch(t){case"buffering":r=i.buffer;break;case"playing":r=i.pause;break;case"complete":r=i.replay;break;case"error":r=""}""===r?n[0].removeAttribute("aria-label"):n[0].setAttribute("aria-label",r)}})};return r.extend(o.prototype,{element:function(){return this.el}}),o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(87),n(2),n(1),n(7)],r=function(e,t,n,i){var r=function(e){this.model=e,this.setup(),this.model.on("change:dock",this.render,this)};return n.extend(r.prototype,{setup:function(){var n=this.model.get("dock"),r=this.click.bind(this),o=e(n);this.el=t.createElement(o),new i(this.el).on("click tap",r)},getDockButton:function(e){return t.hasClass(e.target,"jw-dock-button")?e.target:t.hasClass(e.target,"jw-dock-text")?e.target.parentElement.parentElement:e.target.parentElement},click:function(e){var t=this.getDockButton(e),i=t.getAttribute("button"),r=this.model.get("dock"),o=n.findWhere(r,{id:i});o&&o.callback&&o.callback(e)},render:function(){var n=this.model.get("dock"),i=e(n),r=t.createElement(i);this.el.innerHTML=r.innerHTML},element:function(){return this.el}}),r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(88)],r=function(e){function t(t,n,i,r){return e({id:t,skin:n,title:i,body:r})}return t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(2),n(3),n(1),n(4),n(89)],r=function(e,t,n,i,r,o){var a=t.style,s={linktarget:"_blank",margin:8,hide:!1,position:"top-right"},l=function(l){var u,c,d=new Image,p=i.extend({},l.get("logo"));return i.extend(this,r),this.setup=function(r){if(c=i.extend({},s,p),c.hide="true"===c.hide.toString(),u=t.createElement(o()),c.file){c.hide&&t.addClass(u,"jw-hide"),t.addClass(u,"jw-logo-"+(c.position||s.position)),"top-right"===c.position&&(l.on("change:dock",this.topRight,this),l.on("change:controls",this.topRight,this),this.topRight(l)),l.set("logo",c),d.onload=function(){var e={backgroundImage:'url("'+this.src+'")',width:this.width,height:this.height};if(c.margin!==s.margin){var t=/(\w+)-(\w+)/.exec(c.position);3===t.length&&(e["margin-"+t[1]]=c.margin,e["margin-"+t[2]]=c.margin)}a(u,e),l.set("logoWidth",e.width)},d.src=c.file;var h=new e(u);h.on("click tap",function(e){t.exists(e)&&e.stopPropagation&&e.stopPropagation(),this.trigger(n.JWPLAYER_LOGO_CLICK,{link:c.link,linktarget:c.linktarget})},this),r.appendChild(u)}},this.topRight=function(e){var t=e.get("controls"),n=e.get("dock"),i=t&&(n&&n.length||e.get("sharing")||e.get("related"));a(u,{top:i?"3.5em":0})},this.element=function(){return u},this.position=function(){return c.position},this.destroy=function(){d.onload=null},this};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e,t){t.off("change:mediaType",null,this),t.on("change:mediaType",function(t,n){"audio"===n&&this.setImage(e.get("playlistItem").image)},this)}function i(e,n){var i=e.get("autostart")&&!t.isMobile()||e.get("item")>0;return i?(this.setImage(null),e.off("change:state",null,this),void e.on("change:state",function(e,t){"complete"!==t&&"idle"!==t&&"error"!==t||(this.setImage(n.image),this.resize(null,null,e.get("stretching")))},this)):void this.setImage(n.image)}var r=function(e){this.model=e,e.on("change:playlistItem",i,this),e.on("change:mediaModel",n,this)};return e.extend(r.prototype,{setup:function(e){this.el=e;var t=this.model.get("playlistItem");t&&this.setImage(t.image)},setImage:function(n){var i=this.image;i&&(i.onload=null,this.image=null),this.model.off("change:state",null,this);var r="";e.isString(n)&&(r='url("'+n+'")',i=this.image=new Image,i.src=n),t.style(this.el,{backgroundImage:r})},resize:function(e,n,i){if("uniform"===i){if(e&&(this.playerAspectRatio=e/n),!this.playerAspectRatio)return;var r=this.image,o=null;if(r){if(0===r.width){var a=this;return void(r.onload=function(){a.resize(e,n,i)})}var s=r.width/r.height;Math.abs(this.playerAspectRatio-s)<.09&&(o="cover")}t.style(this.el,{backgroundSize:o})}},element:function(){return this.el}}),r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(93),n(1),n(7),n(24)],r=function(e,t,n,i,r){var o=function(){};return n.extend(o.prototype,{buildArray:function(){var t=r.split("+"),n=t[0],i={items:[{title:"Powered by JW Player "+n,featured:!0,showLogo:!0,link:"https://jwplayer.com/learn-more"}]},o=n.indexOf("-")>0,a=t[1];if(o&&a){var s=a.split(".");i.items.push({title:"build: ("+s[0]+"."+s[1]+")",link:"#"})}var l=this.model.get("provider");if(l&&l.name.indexOf("flash")>=0){var u="Flash Version "+e.flashVersion();i.items.push({title:u,link:"http://www.adobe.com/software/flash/about/"})}return i},buildMenu:function(){var n=this.buildArray();return e.createElement(t(n))},updateHtml:function(){this.el.innerHTML=this.buildMenu().innerHTML},rightClick:function(e){return this.lazySetup(),!this.mouseOverContext&&(this.hideMenu(),this.showMenu(e),!1)},getOffset:function(e){for(var t=e.target,n=e.offsetX||e.layerX,i=e.offsetY||e.layerY;t!==this.playerElement;)n+=t.offsetLeft,i+=t.offsetTop,t=t.parentNode;return{x:n,y:i}},showMenu:function(t){var n=this.getOffset(t);return this.el.style.left=n.x+"px",this.el.style.top=n.y+"px",e.addClass(this.playerElement,"jw-flag-rightclick-open"),e.addClass(this.el,"jw-open"),clearTimeout(this._menuTimeout),this._menuTimeout=setTimeout(this.hideMenu.bind(this),3e3),!1},hideMenu:function(){return this.elementUI.off("out",this.hideMenu,this),this.mouseOverContext?void this.elementUI.on("out",this.hideMenu,this):(e.removeClass(this.playerElement,"jw-flag-rightclick-open"),void e.removeClass(this.el,"jw-open"))},lazySetup:function(){this.el||(this.el=this.buildMenu(),this.layer.appendChild(this.el),this.hideMenuHandler=this.hideMenu.bind(this),this.addOffListener(this.playerElement),this.addOffListener(document),this.model.on("change:provider",this.updateHtml,this),this.elementUI=new i(this.el,{useHover:!0}).on("over",function(){this.mouseOverContext=!0},this).on("out",function(){this.mouseOverContext=!1},this))},setup:function(e,t,n){this.playerElement=t,this.model=e,this.mouseOverContext=!1,this.layer=n,t.oncontextmenu=this.rightClick.bind(this)},addOffListener:function(e){e.addEventListener("mousedown",this.hideMenuHandler),e.addEventListener("touchstart",this.hideMenuHandler),e.addEventListener("pointerdown",this.hideMenuHandler)},removeOffListener:function(e){e.removeEventListener("mousedown",this.hideMenuHandler),e.removeEventListener("touchstart",this.hideMenuHandler),e.removeEventListener("pointerdown",this.hideMenuHandler)},destroy:function(){clearTimeout(this._menuTimeout),this.el&&(this.hideMenu(),this.elementUI.off(),this.removeOffListener(this.playerElement),this.removeOffListener(document),this.hideMenuHandler=null,this.el=null),this.playerElement&&(this.playerElement.oncontextmenu=null,this.playerElement=null),this.model&&(this.model.off("change:provider",this.updateHtml),this.model=null)}}),o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){var n=function(e){this.model=e,this.model.on("change:playlistItem",this.playlistItem,this)};return e.extend(n.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(e){this.el=e;var t=this.el.getElementsByTagName("div");this.title=t[0],this.description=t[1],this.model.get("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem")),this.model.on("change:logoWidth",this.update,this),this.model.on("change:dock",this.update,this)},update:function(e){var n={paddingLeft:0,paddingRight:0},i=e.get("controls"),r=e.get("dock"),o=e.get("logo");if(o){var a=1*(""+o.margin).replace("px",""),s=e.get("logoWidth")+(isNaN(a)?0:a);"top-left"===o.position?n.paddingLeft=s:"top-right"===o.position&&(n.paddingRight=s)}if(i&&r&&r.length){var l=56*r.length;n.paddingRight=Math.max(n.paddingRight,l)}t.style(this.el,n)},playlistItem:function(e,t){if(e.get("displaytitle")||e.get("displaydescription")){var n="",i="";t.title&&e.get("displaytitle")&&(n=t.title),t.description&&e.get("displaydescription")&&(i=t.description),this.updateText(n,i)}else this.hide()},updateText:function(e,t){this.title.innerHTML=e,this.description.innerHTML=t,this.title.firstChild||this.description.firstChild?this.show():this.hide()},element:function(){return this.el}}),n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(3),n(4),n(22),n(5),n(143),n(144),n(152),n(153),n(155),n(151),n(156),n(171),n(158),n(147),n(1),n(92),n(142),n(66)],r=function(e,t,i,r,o,a,s,l,u,c,d,p,h,f,g,m,w,v,y){var j=e.style,b=e.bounds,E=e.isMobile(),x=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],k=function(k,A){function _(t){var n=0,i=A.get("duration"),o=A.get("position");"DVR"===A.get("streamType")&&(n=i,i=Math.max(o,r.dvrSeekLimit));var a=e.between(o+t,n,i);k.seek(a)}function C(t){var n=e.between(A.get("volume")+t,0,100);k.setVolume(n)}function L(e){return!e.ctrlKey&&!e.metaKey&&!!A.get("controls")}function T(e){if(!L(e))return!0;switch(Ee||oe(),e.keyCode){case 27:k.setFullscreen(!1);break;case 13:case 32:k.play({reason:"interaction"});break;case 37:Ee||_(-5);break;case 39:Ee||_(5);break;case 38:C(10);break;case 40:C(-10);break;case 67:var t=k.getCaptionsList(),n=t.length;if(n){var i=(k.getCurrentCaptions()+1)%n;k.setCurrentCaptions(i)}break;case 77:k.setMute();break;case 70:k.setFullscreen();break;default:if(e.keyCode>=48&&e.keyCode<=59){var r=e.keyCode-48,o=r/10*A.get("duration");k.seek(o)}}return/13|32|37|38|39|40/.test(e.keyCode)?(e.preventDefault(),!1):void 0}function P(){qe=!1,e.removeClass(we,"jw-no-focus")}function R(e){e.target&&e.target.blur&&e.target.blur()}function I(){qe=!0,e.addClass(we,"jw-no-focus")}function M(){qe||P(),Ee||oe()}function S(){var e=b(we),n=Math.round(e.width),i=Math.round(e.height);He(ze),n&&i&&(n!==je||i!==be)&&(je=n,be=i,clearTimeout(Ve),Ve=setTimeout(Z,50),A.set("containerWidth",n),A.set("containerHeight",i),v(we,n,i),Qe.trigger(t.JWPLAYER_RESIZE,{width:n,height:i}))}function O(){document.body.contains(we)&&(He(ze),ze=Ue(S))}function D(t,n,i){var r={color:t,borderColor:t,stroke:t},o={color:n,borderColor:n,stroke:n};e.css("#"+i+" .jw-color-active",r,i),e.css("#"+i+" .jw-color-active-hover:hover",r,i),e.css("#"+i+" .jw-color-inactive",o,i),e.css("#"+i+" .jw-color-inactive-hover:hover",o,i)}function N(t,n){n=n||!1,e.toggleClass(we,"jw-flag-casting",n)}function Y(t,n){e.toggleClass(we,"jw-flag-cast-available",n),e.toggleClass(ve,"jw-flag-cast-available",n)}function F(t,n){e.replaceClass(we,/jw-stretch-\S+/,"jw-stretch-"+n)}function W(e){e&&!E&&(e.element().addEventListener("mousemove",V,!1),e.element().addEventListener("mouseout",z,!1))}function J(){A.get("state")!==o.IDLE&&A.get("state")!==o.COMPLETE&&A.get("state")!==o.PAUSED||!A.get("controls")||k.play({reason:"interaction"}),Be?re():oe();
}function B(e){e.link?(k.pause(!0),k.setFullscreen(!1),window.open(e.link,e.linktarget)):A.get("controls")&&k.play({reason:"interaction"})}function V(){clearTimeout(Fe)}function z(){oe()}function U(e){Qe.trigger(e.type,e)}function H(t,n){n?(Se&&Se.destroy(),e.addClass(we,"jw-flag-flash-blocked")):(Se&&Se.setup(A,we,we),e.removeClass(we,"jw-flag-flash-blocked"))}function G(){A.get("controls")&&k.setFullscreen()}function K(){var n=we.getElementsByClassName("jw-overlays")[0];n.addEventListener("mousemove",oe),Ae=new s(A,ye,{useHover:!0}),Ae.on("click",function(){U({type:t.JWPLAYER_DISPLAY_CLICK}),A.get("controls")&&k.play({reason:"interaction"})}),Ae.on("tap",function(){U({type:t.JWPLAYER_DISPLAY_CLICK}),J()}),Ae.on("doubleClick",G),Ae.on("move",oe),Ae.on("over",oe);var i=new l(A);i.on("click",function(){U({type:t.JWPLAYER_DISPLAY_CLICK}),k.play({reason:"interaction"})}),i.on("tap",function(){U({type:t.JWPLAYER_DISPLAY_CLICK}),J()}),e.isChrome()&&!e.isMobile()&&i.el.addEventListener("mousedown",function(){var e=A.getVideo(),t=e&&0===e.getName().name.indexOf("flash");if(t){var n=function(){document.removeEventListener("mouseup",n),i.el.style.pointerEvents="auto"};this.style.pointerEvents="none",document.addEventListener("mouseup",n)}}),ve.appendChild(i.element()),Ce=new u(A),Le=new c(A),Le.on(t.JWPLAYER_LOGO_CLICK,B);var r=document.createElement("div");r.className="jw-controls-right jw-reset",Le.setup(r),r.appendChild(Ce.element()),ve.appendChild(r),Ie=new a(A),Ie.setup(we.id,A.get("captions")),ve.parentNode.insertBefore(Ie.element(),Te.element());var o=A.get("height");E&&("string"==typeof o||o>=1.5*Je)?e.addClass(we,"jw-flag-touch"):(Se=new h,Se.setup(A,we,we)),xe=new d(k,A),xe.on(t.JWPLAYER_USER_ACTION,oe),A.on("change:scrubbing",ge),A.autoStartOnMobile()&&(Re=y("jw-autostart-mute jw-off",ee,A.get("localization").volume),Re.show(),ve.appendChild(Re.element()),xe.renderVolume(!0,A.get("volume")),e.addClass(we,"jw-flag-autostart"),A.set("autostartMuted",!0),A.on("change:autostartFailed",ee),A.on("change:autostartMuted",ee),A.on("change:mute",ee)),Pe=new g(A,k,xe.elements.next,we),Pe.setup(),ve.appendChild(Pe.element()),ve.appendChild(xe.element()),we.addEventListener("focus",M),we.addEventListener("blur",P),we.addEventListener("keydown",T),we.onmousedown=I,we.onmouseup=R}function q(t,n,i){var r,o=we.className;i=!!i,i&&(o=o.replace(/\s*aspectMode/,""),we.className!==o&&(we.className=o),j(we,{display:"block"},i)),e.exists(t)&&e.exists(n)&&(A.set("width",t),A.set("height",n)),r={width:t},e.hasClass(we,"jw-flag-aspect-mode")||(r.height=n),A.get("aspectratio")&&me(),j(we,r,!0),Q(n),Z(t,n)}function Q(t){if(Me=X(t),xe&&!Me){var n=Ee?Ee:A;he(n,n.get("state"))}e.toggleClass(we,"jw-flag-audio-player",Me)}function X(e){if(A.get("aspectratio"))return!1;if(m.isString(e)&&e.indexOf("%")>-1)return!1;var t=m.isNumber(e)?e:A.get("containerHeight");return $(t)}function $(e){return e&&e<=Je*(E?1.75:1)}function Z(t,n){if(!t||isNaN(Number(t))){if(!ye)return;t=ye.clientWidth}if(!n||isNaN(Number(n))){if(!ye)return;n=ye.clientHeight}ke&&ke.resize(t,n,A.get("stretching")),e.isMSIE(9)&&document.all&&!window.atob&&(t=n="100%");var i=A.getVideo();if(i){var r=i.resize(t,n,A.get("stretching"));r&&(clearTimeout(Ve),Ve=setTimeout(Z,250)),A.get("aspectratio")&&me(),Ie.resize()}}function ee(){var t=!A.get("autostartFailed"),n=A.get("mute");t&&(n=!1),A.off("change:autostartFailed",ee),A.off("change:mute",ee),A.off("change:autostartMuted",ee),A.set("autostartFailed",void 0),A.set("autostartMuted",void 0),k.setMute(n),xe.renderVolume(n,A.get("volume")),Re.hide(),e.removeClass(we,"jw-flag-autostart")}function te(){if(Ke){var e=document.fullscreenElement||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.msFullscreenElement;return!(!e||e.id!==A.get("id"))}return Ee?Ee.getVideo().getFullScreen():A.getVideo().getFullScreen()}function ne(e){var t=A.get("fullscreen"),n=void 0!==e.jwstate?e.jwstate:te();t!==n&&A.set("fullscreen",n),clearTimeout(Ve),Ve=setTimeout(Z,200)}function ie(t,n){n?(e.addClass(t,"jw-flag-fullscreen"),j(document.body,{"overflow-y":"hidden"}),oe()):(e.removeClass(t,"jw-flag-fullscreen"),j(document.body,{"overflow-y":""})),Z()}function re(){Be=!1,clearTimeout(Fe),xe.hideComponents(),e.addClass(we,"jw-flag-user-inactive"),Ie.renderCues(!0)}function oe(){Be||(e.removeClass(we,"jw-flag-user-inactive"),Ie.renderCues(!0)),Be=!0,clearTimeout(Fe),Fe=setTimeout(re,We)}function ae(){k.setFullscreen(!1)}function se(){_e&&_e.setState(A.get("state")),le(A,A.mediaModel.get("mediaType")),A.mediaModel.on("change:mediaType",le,this)}function le(t,n){var i="audio"===n,r=A.getVideo(),o=r&&0===r.getName().name.indexOf("flash");e.toggleClass(we,"jw-flag-media-audio",i),i&&!o?we.insertBefore(ke.el,ye):we.insertBefore(ke.el,Ie.element())}function ue(t,n){var i=t.get("minDvrWindow"),r=e.streamType(n,i),o="LIVE"===r;t.set("streamType",r),e.toggleClass(we,"jw-flag-live",o),Qe.setAltText(o?t.get("localization").liveBroadcast:"")}function ce(e,t){return t?void(t.name?Te.updateText(t.name,t.message):Te.updateText(t.message,"")):void Te.playlistItem(e,e.get("playlistItem"))}function de(){var e=A.getVideo();return!!e&&e.isCaster}function pe(){e.replaceClass(we,/jw-state-\S+/,"jw-state-"+Oe)}function he(e,t){Oe=t,clearTimeout(Ge),t===o.PLAYING?fe(e,t):Ge=setTimeout(function(){fe(e,t)},33)}function fe(t,n){if(e.toggleClass(we,"jw-flag-dragging",t.get("scrubbing")),pe(),de())return void e.addClass(ye,"jw-media-show");switch(n){case o.PLAYING:Z();break;case o.PAUSED:oe()}}function ge(e){he(e,e.get("state"))}function me(){var e=we.getElementsByClassName("jw-aspect")[0];Ie.setContainerHeight(e.offsetHeight)}var we,ve,ye,je,be,Ee,xe,ke,Ae,_e,Ce,Le,Te,Pe,Re,Ie,Me,Se,Oe,De,Ne,Ye,Fe=-1,We=E?4e3:2e3,Je=40,Be=!1,Ve=-1,ze=-1,Ue=window.requestAnimationFrame||function(e){return window.setTimeout(e,17)},He=window.cancelAnimationFrame||window.clearTimeout,Ge=-1,Ke=!1,qe=!1,Qe=m.extend(this,i);window.webpackJsonpjwplayer&&n(161),this.model=A,this.api=k,we=e.createElement(w({id:A.get("id")})),e.isIE()&&e.addClass(we,"jw-ie");var Xe=A.get("width"),$e=A.get("height");j(we,{width:Xe.toString().indexOf("%")>0?Xe:Xe+"px",height:$e.toString().indexOf("%")>0?$e:$e+"px"}),Ne=we.requestFullscreen||we.webkitRequestFullscreen||we.webkitRequestFullScreen||we.mozRequestFullScreen||we.msRequestFullscreen,Ye=document.exitFullscreen||document.webkitExitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen,Ke=Ne&&Ye,this.onChangeSkin=function(t,n){e.replaceClass(we,/jw-skin-\S+/,n?"jw-skin-"+n:"")},this.handleColorOverrides=function(){function t(t,i,r){if(r){t=e.prefix(t,"#"+n+" ");var o={};o[i]=r,e.css(t.join(", "),o,n)}}var n=A.get("id"),i=A.get("skinColorActive"),r=A.get("skinColorInactive"),o=A.get("skinColorBackground");t([".jw-toggle",".jw-button-color:hover"],"color",i),t([".jw-active-option",".jw-progress"],"background",i),t([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-tooltip-title",".jw-skip .jw-skip-icon"],"color",r),t([".jw-cue",".jw-knob"],"background",r),t([".jw-background-color",".jw-tooltip-title"],"background",o),D(i,r,n)},this.setup=function(){this.handleColorOverrides(),A.get("skin-loading")===!0&&(e.addClass(we,"jw-flag-skin-loading"),A.once("change:skin-loading",function(){e.removeClass(we,"jw-flag-skin-loading")})),this.onChangeSkin(A,A.get("skin"),""),A.on("change:skin",this.onChangeSkin,this),ye=we.getElementsByClassName("jw-media")[0],ve=we.getElementsByClassName("jw-controls")[0];var n=we.getElementsByClassName("jw-preview")[0];ke=new p(A),ke.setup(n);var i=we.getElementsByClassName("jw-title")[0];Te=new f(A),Te.setup(i),K(),oe(),A.set("mediaContainer",ye),A.mediaController.on("fullscreenchange",ne);for(var r=x.length;r--;)document.addEventListener(x[r],ne,!1);window.removeEventListener("resize",O),window.addEventListener("resize",O,!1),E&&(window.removeEventListener("orientationchange",O),window.addEventListener("orientationchange",O,!1)),A.on("change:errorEvent",ce),A.on("change:controls",Ze),Ze(A,A.get("controls")),A.on("change:state",he),A.on("change:duration",ue,this),A.on("change:flashBlocked",H),H(A,A.get("flashBlocked")),k.onPlaylistComplete(ae),k.onPlaylistItem(se),A.on("change:castAvailable",Y),Y(A,A.get("castAvailable")),A.on("change:castActive",N),N(A,A.get("castActive")),A.on("change:hideAdsControls",function(t,n){e.toggleClass(we,"jw-flag-ads-hide-controls",n)}),A.get("stretching")&&F(A,A.get("stretching")),A.on("change:stretching",F),he(A,o.IDLE),A.on("change:fullscreen",et),W(xe),W(Le);var a=A.get("aspectratio");if(a){e.addClass(we,"jw-flag-aspect-mode");var s=we.getElementsByClassName("jw-aspect")[0];j(s,{paddingTop:a})}k.on(t.JWPLAYER_READY,function(){S(),q(A.get("width"),A.get("height"))})};var Ze=function(t,n){if(n){var i=Ee?Ee.get("state"):A.get("state");he(t,i)}e.toggleClass(we,"jw-flag-controls-disabled",!n)},et=function(t,n){var i=A.getVideo();n&&A.get("autostartMuted")&&ee(),Ke?(n?Ne.apply(we):Ye.apply(document),ie(we,n)):e.isIE()?ie(we,n):(Ee&&Ee.getVideo()&&Ee.getVideo().setFullscreen(n),i.setFullscreen(n)),i&&0===i.getName().name.indexOf("flash")&&i.setFullscreen(n)};this.resize=function(e,t){var n=!0;q(e,t,n),S()},this.resizeMedia=Z,this.reset=function(){document.contains(we)&&we.parentNode.replaceChild(De,we),e.emptyElement(we)},this.setupInstream=function(t){this.instreamModel=Ee=t,Ee.on("change:controls",Ze,this),Ee.on("change:state",he,this),e.addClass(we,"jw-flag-ads"),oe()},this.setAltText=function(e){xe.setAltText(e)},this.destroyInstream=function(){if(Ee&&(Ee.off(null,null,this),Ee=null),this.setAltText(""),e.removeClass(we,["jw-flag-ads","jw-flag-ads-hide-controls"]),A.set("hideAdsControls",!1),A.getVideo){var t=A.getVideo();t.setContainer(ye)}ue(A,A.get("duration")),Ae.revertAlternateClickHandlers()},this.addCues=function(e){xe&&xe.addCues(e)},this.clickHandler=function(){return Ae},this.controlsContainer=function(){return ve},this.getContainer=this.element=function(){return we},this.getSafeRegion=function(t){var n={x:0,y:0,width:A.get("containerWidth")||0,height:A.get("containerHeight")||0},i=A.get("dock");return i&&i.length&&A.get("controls")&&(n.y=Ce.element().clientHeight,n.height-=n.y),t=t||!e.exists(t),t&&A.get("controls")&&(n.height-=xe.element().clientHeight),n},this.setCaptions=function(e){Ie.clear(),Ie.setup(A.get("id"),e),Ie.resize()},this.destroy=function(){clearTimeout(Ge),clearTimeout(Ve),clearTimeout(Fe),window.removeEventListener("resize",O),window.removeEventListener("orientationchange",O);for(var t=x.length;t--;)document.removeEventListener(x[t],ne,!1);A.mediaController&&A.mediaController.off("fullscreenchange",ne),we.removeEventListener("keydown",T,!1),Se&&Se.destroy(),_e&&(A.off("change:state",_e.statusDelegate),_e.destroy(),_e=null),Ee&&this.destroyInstream(),Le&&Le.destroy(),e.clearCss(A.get("id"))}};return k}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i=n(81);"string"==typeof i&&(i=[["all-players",i,""]]),n(68).style(i,"all-players"),i.locals&&(e.exports=i.locals)},function(e,t,n){var i,r;i=[n(69),n(1),n(24),n(2),n(8),n(7),n(73),n(15),n(74),n(65),n(3),n(5),n(50),n(31),n(28),n(48),n(21)],r=function(e,t,n,i,r,o,a,s,l,u,c,d,p,h,f,g,m){var w={};return w.api=e,w._=t,w.version=n,w.utils=t.extend(i,r,{canCast:f.available,key:a,extend:t.extend,scriptloader:s,rssparser:g,tea:l,UI:o}),w.utils.css.style=w.utils.style,w.vid=u,w.events=t.extend({},c,{state:d}),w.playlist=t.extend({},p,{item:h}),w.plugins=m,w.cast=f,w}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(119),n(16),n(169)],r=function(e,t,i){var r=e.prototype.setup;return e.prototype.setup=function(e,o){e.analytics&&(e.sdkplatform=e.sdkplatform||e.analytics.sdkplatform),r.apply(this,arguments);var a=this._model.get("edition"),s=t(a),l=this._model.get("cast"),u=this;s("casting")&&l&&l.appid&&n.e(3,function(require){var e=n(70);u._castController=new e(u,u._model),u.castToggle=u._castController.castToggle.bind(u._castController)});var c=i.setup();this.once("ready",c.onReady,this),o.getAdBlock=c.checkAdBlock},e}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(73),n(16),n(1),n(2),n(63),n(124),n(37)],r=function(e,t,i,r,o,a,s){function l(e,t,n){if(t){var i=t.client;delete t.client,/\.(js|swf)$/.test(i||"")||(i=o.repo()+n),e[i]=t}}function u(e,n){var r=i.clone(n.get("plugins"))||{},a=n.get("edition"),s=t(a),u=/^(vast|googima|freewheel)$/,c=/\.(js|swf)$/,d=o.repo(),p=i.clone(n.get("advertising"));if(s("ads")&&p&&(c.test(p.client)?r[p.client]=p:u.test(p.client)&&(r[d+p.client+".js"]=p),delete p.client),s("jwpsrv")){var h=n.get("analytics");i.isObject(h)||(h={}),l(r,h,"jwpsrv.js")}l(r,n.get("ga"),"gapro.js"),l(r,n.get("sharing"),"sharing.js");var f=n.get("related"),g=i.isObject(f),m=n.get("visualplaylist")!==!1||g;g||(f={disableRelated:!0}),f.showDockButton=m,l(r,f,"related.js");var w=n.get("mobileSdk");if(!w){var v=n.get("playlist");i.some(v,function(e){if(e.stereomode&&e.stereomode.length>0)return l(r,n.get("vr")||{},"vr.js"),!0})}n.set("plugins",r),e()}function c(t,i){var s=i.get("key")||window.jwplayer&&window.jwplayer.key,l=new e(s),u=l.edition();if(i.set("key",s),i.set("edition",u),"unlimited"===u){var c=r.getScriptPath("jwplayer.js");if(!c)return void a.error(t,"Error setting up player","Could not locate jwplayer.js script tag");n.p=c,r.repo=o.repo=o.loadFrom=function(){return c}}i.updateProviders(),"invalid"===u?a.error(t,"Error setting up player",(void 0===s?"Missing":"Invalid")+" license key"):t()}function d(e,t){s.containsDrm(t)?s.probe(e,t.get("edition")):e()}function p(){var e=a.getQueue();return e.CHECK_KEY={method:c,depends:["LOADED_POLYFILLS"]},e.PROBE_DRM_SUPPORT={method:d,depends:["CHECK_KEY"]},e.FILTER_PLUGINS={method:u,depends:["CHECK_KEY"]},e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"),e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"),e.SETUP_VIEW.depends.push("CHECK_KEY"),e}return{getQueue:p}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(126),n(162),n(1)],r=function(e,t,n){var i=window,r=n.extend(e,t);return"function"==typeof i.define&&i.define.amd&&i.define([],function(){return r}),i.jwplayer?i.jwplayer:r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){function e(){var e=document.createElement("div");return e.className=n,e.innerHTML="&nbsp;",e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.background="transparent",e}function t(){function t(){var e=this,t=e._view.element();t.appendChild(a),r=!0,i()&&e.trigger("adBlock")}function i(){return!!r&&(!!o||(""!==a.innerHTML&&a.className===n&&null!==a.offsetParent&&0!==a.clientHeight||(o=!0),o))}var r=!1,o=!1,a=e();return{onReady:t,checkAdBlock:i}}var n="afs_ads";return{setup:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(3),n(7),n(4),n(1),n(85)],r=function(e,t,n,i,r,o){var a=function(e){this.model=e,this.setup()};return r.extend(a.prototype,i,{setup:function(){this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=this.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));var t=o();this.el=e.createElement(t),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=r.once(this.skipAd.bind(this)),new n(this.el).on("click tap",r.bind(function(){this.skippable&&this.skipAdOnce()},this)),this.model.on("change:duration",this.onChangeDuration,this),this.model.on("change:position",this.onChangePosition,this),this.onChangeDuration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.model.get("position"))},updateMessage:function(e){this.skiptext.innerHTML=e},updateCountdown:function(e){this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-e)))},onChangeDuration:function(t,n){if(n){if(this.waitPercentage){if(!n)return;this.itemDuration=n,this.setWaitTime(this.waitPercentage),delete this.waitPercentage}e.removeClass(this.el,"jw-hidden")}},onChangePosition:function(t,n){this.waitTime-n>0?this.updateCountdown(n):(this.updateMessage(this.skipMessage),this.skippable=!0,e.addClass(this.el,"jw-skippable"))},element:function(){return this.el},setWaitTime:function(t){if(r.isString(t)&&"%"===t.slice(-1)){var n=parseFloat(t);return void(this.itemDuration&&!isNaN(n)?this.waitTime=this.itemDuration*n/100:this.waitPercentage=t)}r.isNumber(t)?this.waitTime=t:"string"===e.typeOf(t)?this.waitTime=e.seconds(t):isNaN(Number(t))?this.waitTime=0:this.waitTime=Number(t)},skipAd:function(){this.trigger(t.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage}}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(157),n(1)],r=function(e,t){var n=function(){};return t.extend(n.prototype,e.prototype,{buildArray:function(){var t=e.prototype.buildArray.apply(this,arguments);if(this.model.get("abouttext")){t.items[0].showLogo=!1,t.items.push(t.items.shift());var n={title:this.model.get("abouttext"),link:this.model.get("aboutlink")||t.items[0].link};t.items.unshift(n)}return t}}),n}.apply(t,i),!(void 0!==r&&(e.exports=r))}]);
///Class spEndScreen
/**
 * Alle Methoden um einen Endscreen anzuzeigen.
 */
var spEndScreen;
spEndScreen = function (currentVideoId, wrapperElemId) {
    var instance = this;
    this.wrapperElemId = wrapperElemId;
    this.isHidden = true;
    this.wrapperElem = $('#' + wrapperElemId);
    this.currentVideoId = currentVideoId;
    this.videoInfo = window.spVideoInfo[instance.currentVideoId];

    this.getEndscreenElem = function () {
        // support legacy function call without specific ID
        if (!instance.wrapperElemId || instance.wrapperElemId === '')
            return $('.video-end-screen').first();
        else
            return $('#' + instance.wrapperElemId + ' .video-end-screen');
    };

    this.startNextVideo = function (nextvideoOid) {
        if (nextvideoOid && nextvideoOid !== '') {
            var nextVideoId = nextvideoOid.split("_")[1];
            var callbacks = instance.videoInfo.callbacks;
            var followUp = instance.videoInfo.followUp;
            followUp = (followUp && followUp.length > 0) ? followUp.slice(1) : null;
            if (callbacks && callbacks.onVideoChanged)
                callbacks.onVideoChanged(instance.currentVideoId, nextVideoId);

            this.wrapperElem.data('currentVideoId', nextVideoId);
            spGetVideoDataAndInsertPlayer(this.wrapperElemId, nextVideoId, true, 'auto', true, true, followUp, callbacks);
        }
    };

    this.animateProgressbar = function (element, waitTime) {
        element.find('div').width('0px');
        element.find('div').animate({width: element.width()}, waitTime, 'linear');
    };

    this.animatePreviewImage = function (endscreenElem) {
        var videopicWraper = endscreenElem.find('.video-pic');
        var videopic = videopicWraper.children('img').first().clone();
        videopic.addClass('video-end-screen-animation-image');
        videopic.css({
            position: 'absolute',
            width: videopicWraper.width(),
            height: videopicWraper.height(),
            top: '0px'
        });
        videopicWraper.append(videopic);
        videopic.animate({
            width: instance.wrapperElem.width(),
            height: instance.wrapperElem.height(),
            left: '-60px',
            top: '-25px'
        }, 500, 'linear');
    };

    /** EndScreen anzeigen && Video erneut abspielen*/
    this.toggleEndScreen = function () {
        $('.video-end-screen-animation-image').remove();
        var endScreenElem = instance.getEndscreenElem();
        /**waitTime before next video*/
        var waitTime = 5000;

        if (!endScreenElem.is(':visible')) {
            instance.showEndScreen();
            if (spEndScreen.allowContinousPlay()) {
                var nextVideoOid = instance.wrapperElem.find('.video-end-screen .video-meta').attr('data-nextvideoid');
                if (nextVideoOid) {
                    instance.animateProgressbar(endScreenElem.find('.video-next-progressbar'), waitTime);
                    setTimeout(function () {
                        setTimeout(function () {
                            if (endScreenElem.is(':visible')) {
                                instance.startNextVideo(nextVideoOid, instance.wrapperElem, instance.wrapperElemId);
                            }
                        }, 500);
                        instance.animatePreviewImage(endScreenElem);

                    }, waitTime);
                }
            }
        } else {
            instance.hideEndScreen();
        }
    };

    this.showEndScreen = function () {
        instance.isHidden = false;
        var endScreenElem = instance.getEndscreenElem();
        endScreenElem.fadeToggle(300);
        instance.wrapperElem.find('.jwplayer').addClass('jw-state-endscreen');
        instance.wrapperElem.find('.jw-icon.jw-icon-playback').on('click touchstart', instance.restartVideoCallback);
    };

    this.hideEndScreen = function () {
        instance.isHidden = true;
        var endScreenElem = instance.getEndscreenElem();
        endScreenElem.fadeToggle(300).delay(300);
        instance.wrapperElem.find('.jwplayer').removeClass('jw-state-endscreen');
        instance.wrapperElem.find('.jw-icon.jw-icon-playback').off('click touchstart', instance.restartVideoCallback);
        $('.video-end-screen-animation-image').remove();
    };

    this.restartVideoCallback = function () {
        // set flag to notify player that the next "play" is actually a replay, needed explicitly because
        //   with continuous play, player is actually paused 0.5 secs before the end = JW Player never reaches "onComplete" callback!
        $('#' + instance.wrapperElemId + ' .jwplayer').data('isReplay', true);
        spRestartVideo(instance.wrapperElemId);
        instance.hideEndScreen();
    };

    /**
     * @param currentVideoId
     */
    this.findNextVideoAndCreateEndscreen = function () {
        var callback = function (recommendations) {
            var nextVideoId = instance.findNextVideo(recommendations);
            instance.createEndScreen(nextVideoId);
        };
        if (instance.videoInfo.followUp && instance.videoInfo.followUp.length > 0){
            var nextVideoId = instance.findNextVideo(instance.videoInfo.followUp);
            if(!nextVideoId) instance.videoInfo.followUp=null;
            instance.createEndScreen(nextVideoId);
        }
        else if (window.spVideoInfo[instance.currentVideoId].recommendations)
            callback(instance.videoInfo.recommendations);
        else
            $.getJSON('/video/recommendation-' + instance.currentVideoId + '.json').done(function (data) {
                // store recommendation info for future access
            	instance.videoInfo.recommendations = data.recommendations;
                callback(data.recommendations);
            });

    };

    /** get the first not-played-video */
    this.findNextVideo = function (recommendations) {
        var res = null;
        $.each(recommendations, function (i, oid) {
            var id = (('' + oid).indexOf("_") === -1) ? oid : oid.split("_")[1];
            var videoInfo = window.spVideoInfo[id];
            if (!videoInfo || (videoInfo.status && videoInfo.status !== 'finished' && !videoInfo.error)) {
                res = id;
                return false;// break;
            }else{
            	if(!videoInfo.error){
            	    recommendations.splice(i, 1);
            		videoInfo.error = 'already finished';
                	if (isDebuging) console.log('video ' + id + ' could not played with Continous Play: "already finished"');
                }
            }
        });
        return res;
    };

    this.createEndScreen = function (nextVideoId) {
        if(!nextVideoId) instance.findNextVideoAndCreateEndscreen(instance.currentVideoId, instance.wrapperElem);
        else
        // read video asset data via JSON service
        $.getJSON('/video/video-' + nextVideoId + '.json')
            .done(function (videoData) {
                // init video info
                if (!window.spVideoInfo) window.spVideoInfo = [];
                if (!window.spVideoInfo[nextVideoId]) window.spVideoInfo[nextVideoId] = {};
                
                var nextVideoInfo = window.spVideoInfo[nextVideoId];
                if (nextVideoInfo.status && nextVideoInfo.status === 'finished')
                    nextVideoInfo.error = 'already finished';
                if (!videoData.image) // keine Videos mit pics
                    nextVideoInfo.error = 'no Image -> No Continous Play';
                if (videoData.displaycategoryid == 130) // Keine UEFA Videos
                    nextVideoInfo.error = ' UEFA Videos -> No Continous Play';
                if (window.videoIsEmbedded === true && !videoData.embeddable) // not embeddable abfragen
                    nextVideoInfo.error = 'not embeddable -> No Continous Play';
                if (nextVideoInfo.error) {
                    if (isDebuging)console.log('video ' + nextVideoId + ' could not played with Continous Play: "' + nextVideoInfo.error + '"');
                    instance.findNextVideoAndCreateEndscreen(instance.currentVideoId, instance.wrapperElem);
                } else {
                    nextVideoInfo.status = 'initialized';
                    if(isDebuging) console.log('status ' + nextVideoId+' '+window.spVideoInfo[nextVideoId].status);
                    nextVideoInfo.videoData = videoData;
                    if (window.spVideoInfo[instance.currentVideoId].followupVideoCount === undefined)
                        window.spVideoInfo[instance.currentVideoId].followupVideoCount = 0;
                    nextVideoInfo.followupVideoCount = window.spVideoInfo[instance.currentVideoId].followupVideoCount + 1;

                    var title = spCreateVideoTitle(videoData.thema, videoData.headline);
                    var html =
                        '	<a href="' + videoData.socialUrl + '" target="_top" title="' + title + '" class="recommended-video">\n' +
                        '		<div class="video-pic image-buttons-panel" />' +
                        '		<div class="video-meta" data-nextvideoid="flashvideo_' + nextVideoId + '">\n' +
                        '			NÄCHSTES VIDEO\n' +
                        '			<span class="video-date-time">' + videoData.duration + ' Min.</span>\n' +
                        '			<strong class="clearfix">' + title + '</strong>\n' +
                        '			<div class="video-next-progressbar"><div></div></div>\n' +
                        '		</div>\n' +
                        '	</a>';
                    var videoElements = instance.wrapperElem.parent().find('.video-elements');
                    var endScreenWrapper = videoElements.find('.video-end-screen');
                    if (endScreenWrapper.length <= 0) {
                        endScreenWrapper = $('<div class="video-end-screen jw-skin-spon" />');
                        videoElements.append(endScreenWrapper);
                    }
                    endScreenWrapper.html(html);

                    // add share buttons from player
                    var touchabilityClass = 'jw-' + ('ontouchstart' in document.createElement('div') ? '' : 'un') + 'touchable';
                    videoElements.find('.video-end-screen .sharebuttons-placeholder').replaceWith(
                        $('<div class="jw-skin-spon ' + touchabilityClass + '"><div class="jw-dock"></div></div>')
                    );
                    videoElements.find('.video-end-screen .jw-dock').append(videoElements.find('.jw-dock-right').clone());
                    videoElements.find('.video-end-screen .jw-icon-hd').remove();
                    videoElements.find('.video-end-screen .jw-icon-share, .video-end-screen .jw-shares').addClass('jw-open');
                    spAddVideoImageToEndscreen(videoData, videoElements);
                }
            });
    };
};
//static variables and functions
	/**
	 * @returns true if ContinousPlay is activated
	 */
	spEndScreen.allowContinousPlay = function(){
		return (sp_webcfg_global.videoContinousPlay === undefined ||sp_webcfg_global.videoContinousPlay === true);
	};
	spEndScreen.isFollowupVideo = function(videoInfo){
		if (videoInfo === undefined) return false;
		if ($.isArray(videoInfo))
			return videoInfo.filter(function(value) { return value !== undefined; }).length > 1;
		else 
			return spJsHelper.count(videoInfo) > 1;
	};

/// end Class spEndScreen
var spMinVideoIdForMobileDevices = 58671;
var isDebuging = window.location.hash.indexOf('#debug') > -1;
if(isDebuging) {
	$.ajaxSetup({
	    async: false
	});
}

// if we're in an Iframe, get SPON interface from parent window
// this is fatal if video is embedded by a third party site (x-domain, spon embed videos), so try-catch Bug 38750
var spInterface;
if (window.parent.location != window.location) {
	try {
		spInterface = window.parent.$().spInterface;
	}
	catch(e) {
		console.log("Error while trying to load spInterface from parent: " + e.message);
	}
}

// if spUA is not defined, we're likely in an Iframe, so let's try it via SPON interface
if (!window.spUA && spInterface)
	window.spUA = spInterface('getBrowserDetector');

function isValidPluginVersion() {
	var fpversion = swfobject.getFlashPlayerVersion();
	var configuredVersion = sp_webcfg_global.flash.pluginversion;
	if((fpversion.major > configuredVersion.major) || ((fpversion.major == configuredVersion.major) && (fpversion.minor >= configuredVersion.minor))) {
		/* ab Version 11 alles ok, wenn Version 10 mindestens minor release 1 */
		return true;
	} else {
		return false;
	}
}


/**
 * Read video data & use that to insert a player for that video inside provided HTML element
 * @param  {String}   wrapperElemId  ID of HTML element where video player should be generated
 * @param  {Int}      videoId        ID of video to show
 * @param  {Boolean}  showAds        Whether or not to allow ads
 * @param  {mixed}    embedWidth     Sets width of the player in pixels, or "auto" to determine from wrapper element
 * @param  {Boolean}  autoplay       Whether to start video right away (only if supported by the device!)
 * @param  {Boolean}  showEndScreen  Whether to show related videos on video-end
 * @param  {Boolean|Array} followUp  indicate if another video should be played after this (may contains an array of videos or boolean)
 */
/* ##### NOTICE ##### This function must be callable from external h5app interface!
 *                    Don't just rename it or change parameters without consulting the producing department,
 *                    and make sure to test the h5app interface against the new changes!
 */
function spGetVideoDataAndInsertPlayer(wrapperElemId, videoId, showAds, embedWidth, autoplay, showEndScreen, followUp, callbacks) {
	// check mandatory params
	if (!wrapperElemId || wrapperElemId === '' || !videoId || videoId === '') return false;
	// set defaults
	showAds = (typeof showAds === 'undefined') ? false : showAds;
	embedWidth = (typeof embedWidth === 'undefined') ? 'auto' : embedWidth;
	autoplay = (typeof autoplay === 'undefined') ? false : autoplay;
	showEndScreen = (typeof showEndScreen === 'undefined') ? false : showEndScreen;

	// verify that the wrapper element exists
	if ($('#' + wrapperElemId).length < 1) {
		console.error('spGetVideoDataAndInsertPlayer: no HTML element with provided wrapperElemId found: ' + wrapperElemId);
		return false;
	}

	// get width of wrapper element to determine player size
	if (!embedWidth || embedWidth === '' || embedWidth === 0 || embedWidth === 'auto') {
		embedWidth = $('#' + wrapperElemId).width();
		if (!embedWidth || embedWidth === 0)
			embedWidth = 640;  // if for any reason, no width could be determined, fall back to default
	}
	var embedHeight = Math.ceil(embedWidth / (16/9));  // when in doubt, rounds to 1px more cause black bars are more acceptible on top/bottom than left/right

	// prepare video info object to hold data about this video
	if (!window.spVideoInfo)
		window.spVideoInfo = {};
	if (!window.spVideoInfo[videoId])
		window.spVideoInfo[videoId] = {};
	if(followUp) {
	    var seen = {videoId:true};//
	    followUp = followUp.filter(function(item) {return seen.hasOwnProperty(item) ? false : (seen[item] = true);});
	    window.spVideoInfo[videoId].followUp = followUp;
	}
	if(callbacks)window.spVideoInfo[videoId].callbacks = callbacks;
	// edge case: if we are creating a player for the same video twice (or more times), we don't need to reload video data!
	if (window.spVideoInfo[videoId].videoData) {
		spPrepareVideoData(wrapperElemId, videoId, window.spVideoInfo[videoId].videoData, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
	}else{
		// read video asset data via JSON service
		$.getJSON('/video/video-' + videoId + '.json')
			.done(function(videoData) {
				// store video info for future access
				window.spVideoInfo[videoId].videoData = videoData;
				window.spVideoInfo[videoId].status='initialized';
				if(isDebuging) console.log('status ' + videoId+' '+window.spVideoInfo[videoId].status);
				spPrepareVideoData(wrapperElemId, videoId, window.spVideoInfo[videoId].videoData, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
			});
	}
}


/**
 * @param {String} spPrerollAdTag
 * @param {String} spPostrollAdTag
 * @return {void}
 */
function spInitHomad(spPrerollAdTag, spPostrollAdTag){
	if (spPrerollAdTag != '' && spPostrollAdTag != '') {
		
		var exportz = exportz || {};

		(function(exports) {
	    "use strict";
	    var conf = {
		    'globalConfig': "http://s3.amazonaws.com/homad-global-configs.schneevonmorgen.com/global_config.json"
		    , 'clientConfig': "/static/flash/flashvideo/homadconfig-smartclip.json"
		    , 'prechecked': false
		    , 'prerollAdTag': spPrerollAdTag
		    , 'postrollAdTag': spPostrollAdTag
		    , 'startPlayer': ''
		    , 'onFailure' : null
	    };
		(function () {var bcvjs = function () {if (!window['videojs'] || !window['videojs'].Player || !window['videojs'].Player.prototype || !window['videojs'].Player.prototype.play) {window.setTimeout(bcvjs, 5);} else {window['videojs'].Player.prototype.oldPlay = window['videojs'].Player.prototype.play;window['videojs'].Player.prototype.play = function () {if (document.hd_ready) {if (this.techCall) {this.techCall("play");} else {if (this.oldPlay) {this.oldPlay();}}} else {window.setTimeout(function () {this.play()}.bind(this), 5);}return this;}}};bcvjs();})();var y=y||{};
		(function(v){v=v||{};(function(k){function r(){}k.c=r;r.prototype={b:function(a){a=a||10;for(var d="",e=0;e<a;e++)d+=String.fromCharCode((.5>Math.random()?65:97)+Math.floor(26*Math.random()));return d},l:function(a){function d(g){var c="",a,b;for(a=7;0<=a;a--)b=g>>>4*a&15,c+=b.toString(16);return c}function e(c,a){return c<<a|c>>>32-a}var b,f,l=Array(80),t=1732584193,n=4023233417,p=2562383102,c=271733878,w=3285377520,g,m,h,q,k;g=a.length;var u=[];for(b=0;b<g-3;b+=4)f=a.charCodeAt(b)<<24|a.charCodeAt(b+
		1)<<16|a.charCodeAt(b+2)<<8|a.charCodeAt(b+3),u.push(f);switch(g%4){case 0:b=2147483648;break;case 1:b=a.charCodeAt(g-1)<<24|8388608;break;case 2:b=a.charCodeAt(g-2)<<24|a.charCodeAt(g-1)<<16|32768;break;case 3:b=a.charCodeAt(g-3)<<24|a.charCodeAt(g-2)<<16|a.charCodeAt(g-1)<<8|128}for(u.push(b);14!=u.length%16;)u.push(0);u.push(g>>>29);u.push(g<<3&4294967295);for(a=0;a<u.length;a+=16){for(b=0;16>b;b++)l[b]=u[a+b];for(b=16;79>=b;b++)l[b]=e(l[b-3]^l[b-8]^l[b-14]^l[b-16],1);f=t;g=n;m=p;h=c;q=w;for(b=
		0;19>=b;b++)k=e(f,5)+(g&m|~g&h)+q+l[b]+1518500249&4294967295,q=h,h=m,m=e(g,30),g=f,f=k;for(b=20;39>=b;b++)k=e(f,5)+(g^m^h)+q+l[b]+1859775393&4294967295,q=h,h=m,m=e(g,30),g=f,f=k;for(b=40;59>=b;b++)k=e(f,5)+(g&m|g&h|m&h)+q+l[b]+2400959708&4294967295,q=h,h=m,m=e(g,30),g=f,f=k;for(b=60;79>=b;b++)k=e(f,5)+(g^m^h)+q+l[b]+3395469782&4294967295,q=h,h=m,m=e(g,30),g=f,f=k;t=t+f&4294967295;n=n+g&4294967295;p=p+m&4294967295;c=c+h&4294967295;w=w+q&4294967295}return(d(t)+d(n)+d(p)+d(c)+d(w)).toLowerCase()},g:function(a){for(var d=
		"",e,b,f,l,k,n,p=0;p<a.length;)e=a.charCodeAt(p++),b=a.charCodeAt(p++),f=a.charCodeAt(p++),l=e>>2,e=(e&3)<<4|b>>4,k=(b&15)<<2|f>>6,n=f&63,isNaN(b)?k=n=64:isNaN(f)&&(n=64),d=d+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n);return d}}})(v);
		var z=v.c||z;new z;var x=new z;(function(k){function r(){}k.f=r;r.prototype={i:function(a){var d=0,e,b,f;if(0==a.length)return d;e=0;for(f=a.length;e<f;e++)b=a.charCodeAt(e),d=(d<<5)-d+b,d|=0;return Math.abs(d)},h:function(){return Math.round(Date.now()/1E3/3600/24)+navigator.appCodeName+navigator.appName+navigator.appVersion+navigator.userAgent+navigator.platform+(navigator.language||navigator.m||"x")},a:function(a){a=parseInt(a);if(65<=a&&90>=a||97<=a&&122>=a)return String.fromCharCode(a);if(0>=
		a)return"";if(65>a)return this.a(a+65);if(90<a)return this.a(Math.round(a/2))},reverse:function(a){for(var d="",e=a.length-1,d="";0<=e;d+=a[e--]);return d},j:function(){for(var a=this.i(this.h()+""),a=(a+""+this.reverse(a+"")).match(/.{1,2}/g),d="",e=0;e<a.length;e++)d+=this.a(a[e]);0==d.length&&(d="zork");return d}}})(v);var A=v.f||A;(function(){function k(){if(l)conf.startPlayer&&eval(conf.startPlayer),document.fp_error=!0,document.hd_ready=!0;else{var c=document.createElement("script");c.type=
		"text/javascript";c.src="http://s3.amazonaws.com/homad-global-configs.schneevonmorgen.com/hd-main.js?cache="+x.b(10);c.onerror=a;document.head.firstChild?document.head.insertBefore(c,document.head.firstChild):document.head.appendChild(c);var c=new A,b=document.createEvent("CustomEvent");b.initCustomEvent(c.j(),!1,!1,conf);window.setInterval(function(){window.dispatchEvent(b)},500)}}function r(){if(n){var c="fail-init-100.gif"+b();e(n,function(){},function(){},{homad_url_prefix_alias:p,homad_url_suffix_base64:x.g(c),
		homad_url_suffix:c})}if(t&&"function"===typeof t)t();else{for(var c=document.getElementsByTagName("video"),a=0;a<c.length;a++)c[a].parentNode.removeChild(c[a]);c=function(){for(var a=document.getElementsByTagName("video"),c=0;c<a.length;c++)a[c].parentNode.removeChild(a[c]);a=document.getElementsByTagName("object");for(c=0;c<a.length;c++)a[c].parentNode.removeChild(a[c]);a=document.getElementsByClassName("video-wrapper");for(c=0;c<a.length;c++)a[c]&&a[c].parentNode&&a[c].parentNode.removeChild(a[c]);
		a=document.getElementsByClassName("videoplayer");for(c=0;c<a.length;c++)a[c]&&a[c].parentNode&&a[c].parentNode.removeChild(a[c]);if(window.self!=window.top)for(a=window.document;a.hasChildNodes();)a.removeChild(a.lastChild)};c();window.setTimeout(c,500);window.setTimeout(c,1500)}}function a(){var a=document.createElement("script");a.type="text/javascript";a.src="http://hgc.svonm.com/hd-main.js?cache="+x.b(10);a.onerror=r;document.head.firstChild?document.head.insertBefore(a,document.head.firstChild):
		document.head.appendChild(a)}function d(a){l||(l=!f(a.enabled));k()}function e(a,b,e,d){var h=new XMLHttpRequest;h.onreadystatechange=function(){if(b&&4==h.readyState&&200==h.status){var a={};try{a=JSON.parse(h.responseText)}catch(c){a.enabled="false"}b(a)}e&&4==h.readyState&&200!=h.status&&e(h)};try{if(d){h.open("POST",a,!0);a=d;d="";for(var f in a)d+="&"+f+"="+encodeURIComponent(a[f]);d=d.substr(1);h.setRequestHeader("Content-type","application/x-www-form-urlencoded");h.send(d)}else h.open("GET",
		a,!0),h.send()}catch(k){e&&e(h)}}function b(){var a="?c=unknown";window&&window.location&&window.location.hostname&&(a="?c="+window.location.hostname);return a}function f(a){return"True"==a||"true"==a||1==a||"1"==a||1==a}var l=!1,t=conf.onFailure,n="",p="";e(conf.globalConfig,function(a){l?k():l=!f(a.enabled)});e(conf.clientConfig,function(a){a&&a.server&&a.server[0]&&(n=(a.server[1]+"").replace("[hash]",x.l((new Date).getTime()+"")),p="homadvastimpressions");l?k():(l=!f(a.enabled))?k():e(a.config,
		d,k)},r)})()}).call(y,y);
		}.bind(exportz))(exportz);
	}
}

/**
 * 
 * @param {String} wrapperElemId ID of HTML element where video player should be generated
 * @param {Int} videoId ID of video to show
 * @param {Object} videoData the ServerData of the Video
 * @param {Boolean} showAds Whether or not to allow ads
 * @param {Int}  embedWidth Width of player in pixels
 * @param {Int}  embedHeight Height of player in pixels
 * @param {Boolean} autoplay Whether to start video right away (only if supported by the device!)
 * @param {Boolean} showEndScreen Whether to show related videos on video-end
 * @return {void}
 */
function spPrepareVideoData(wrapperElemId, videoId, videoData, showAds, embedWidth, embedHeight, autoplay, showEndScreen){
	// determine pre- & postrolls if desired
	window.spVideoInfo[videoId].prerollGateway = '';
	window.spVideoInfo[videoId].postrollGateway = '';
	window.spVideoInfo[videoId].overlayGateway = '';
	var randomsuffix  = '';
	var inventorytype = '';
	if (videoData.adinfo.adserver == 'smartclip') {
		randomsuffix  = '&rnd='+(Math.random().toString(36)+'00000000000000000').slice(2, 18);
		inventorytype = '&itype=Desktop';
	}
	$.each(videoData.adinfo.campaigns, function(i, val) {
		if (val.position && val.position !== '' && val.vastUrl && val.vastUrl !== '') {
			switch (val.position) {
				case 'preroll':
					window.spVideoInfo[videoId].prerollGateway = val.vastUrl + inventorytype + randomsuffix;
					break;
	
				case 'postroll':
					window.spVideoInfo[videoId].postrollGateway = val.vastUrl + inventorytype + randomsuffix;
					break;
	
				case 'video_overlay':
					window.spVideoInfo[videoId].overlayGateway = val.vastUrl;
					break;
			}
		}
	});
	
	// init homad
	// only postroll if no endscreen (and continous play)
	spInitHomad(window.spVideoInfo[videoId].prerollGateway, (showEndScreen?null:window.spVideoInfo[videoId].postrollGateway));
	
	// set language
	window.spVideoInfo[videoId].language = videoData.categoryid == 49 ? 'en' : 'de';
	// set date
	var dateParts = videoData.datum.substr(0, 10).split('-');
	window.spVideoInfo[videoId].formattedDate = window.spVideoInfo[videoId].language == 'en'
		? dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0]
		: dateParts[2] + '.' + dateParts[1] + '.' + dateParts[0];
	
	// if an image is assigned to this video, get its details
	window.spVideoInfo[videoId].poster = '';
	if (videoData.image) {
		// read video image asset data via JSON service
		$.getJSON('/jsapi/assetlist/image/' + videoData.image + '-videoposter16.json')
			.done(function(imageData) {
				// store image info for future access
				window.spVideoInfo[videoId].imageData = imageData;
				if (imageData[videoData.image])
					window.spVideoInfo[videoId].poster = imageData[videoData.image].url;
				spCreateVideoPlayerFramework(wrapperElemId, videoId, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
			});
	} else
		spCreateVideoPlayerFramework(wrapperElemId, videoId, showAds, embedWidth, embedHeight, autoplay, showEndScreen);
}

function spUpdateVideoMetaData(videoId, wrapperElem){
	var videoInfo = window.spVideoInfo[videoId];
	wrapperElem.closest('.video-player');
}

function spCreateVideoTitle(thema, headline){
	return (thema + ': ' + headline).replace(/\"/g, "");
}

function spAddVideoImageToEndscreen(videoData, playerWrapperElem){
	if(!videoData) {
		if(isDebuging)console.log("in spAddVideoImage(): videoData empty");
		return false;
	}
	// read video image asset data via JSON service and add to Informations
	$.getJSON('/jsapi/assetlist/image/' + videoData.image + '-videoposter16.json').done(function(imageData) {
			var linktext = spCreateVideoTitle(videoData.thema, videoData.headline);
			// store image info for future access
			window.spVideoInfo[videoData.videoid].imageData = imageData;
			if (imageData[videoData.image]){
				var url = imageData[videoData.image].url;
				window.spVideoInfo[videoData.videoid].poster = url;
				var html = 
					  '<div>\n'
					+ '   <img src="' + url + '" alt="Video &quot;' + linktext + '&quot;" />\n'
					+ '   <span class="image-buttons">\n'
					+ '      <span class="btn-play-video button" title="Video abspielen..."></span>\n'
					+ '   </span>\n'
					+ '</div>\n';
				playerWrapperElem.find('.video-end-screen .video-pic').html(html);
			}
		});
}

/**
 * Create the HTML necessary to service as starting point for the video player
 * for a particular video
 * 
 * @param {String} wrapperElemId ID of HTML element where video player should be generated
 * @param {Int} videoId ID of video to show
 * @param {Boolean} showAds Whether or not to allow ads
 * @param {Int} embedWidth Width of player in pixels
 * @param {Int} embedHeight Height of player in pixels
 * @param {Boolean} autoplay Whether to start video right away (only if supported by the device!)
 * @param {Boolean} showEndScreen Whether to show related videos on video-end
 * @return {void}
 */
function spCreateVideoPlayerFramework(wrapperElemId, videoId, showAds, embedWidth, embedHeight, autoplay, showEndScreen) {
	var videoInfo = window.spVideoInfo[videoId];

	var html5PlayerContainer =
		'<div class="videoplayer-placeholder"></div>';

	var videoErrorPlaceholder = 
		'<div class="video-player-error"></div>';

	var startScreenHtml =
		'<div class="video-start-screen">' + 
			(videoInfo.poster !== '' ? '<img class="video-poster" src="' + videoInfo.poster + '" alt=""/>' : '') + 
			'<span class="image-buttons">' + spnetENV_VIDEOPLAYER_PLAYBUTTON_BIG + '</span>' + 
		'</div>';

	// put all player parts into player wrapper element
	var playerWrapperElem = $('#' + wrapperElemId);
	playerWrapperElem
		.addClass('videoplayer-wrapper videoplayer-framework')
		.data('currentVideoId', videoId)   // indicate which video is currently loaded here
		.css({
			width: embedWidth
		})
		.html('')    // empty wrapper before insertion of new framework elements
		.append(
			$('<div/>')
				.addClass('video-elements')
				.css({
					width: embedWidth,
					height: embedHeight
				})
				.html(
					html5PlayerContainer +
					videoErrorPlaceholder +
					startScreenHtml
				)
		)
		.data('videoTitle', videoInfo.videoData.thema.trim() + ': ' + videoInfo.videoData.headline.trim())
		.data('videoTeaser', videoInfo.videoData.teaser)
		.data('videoDate', videoInfo.formattedDate)
		.data('videoLanguage', videoInfo.language)
		.data('videoEmbeddable', videoInfo.videoData.embeddable == 'true')
		.data('videoSocialUrl', videoInfo.videoData.socialUrl)
		.data('videoShortUrl', videoInfo.videoData.shortUrl);

	// append video credit text if necessary
	if (videoInfo.videoData.credit !== '') {
		if (playerWrapperElem.find('.asset-credit').length)
			playerWrapperElem.find('.asset-credit').html(videoInfo.videoData.credit);
		else if (playerWrapperElem.parent().find('.asset-credit').length)
			playerWrapperElem.parent().find('.asset-credit').html(videoInfo.videoData.credit);
		else
			playerWrapperElem.append('<div class="asset-credit">' + videoInfo.videoData.credit + '</div>');
	}
	
	
	// callback to play the video
	var firstPlay = true;
	playerWrapperElem.find('.video-start-screen').on('click', function() {
		$(this).fadeOut(300).delay(300);
		var wrapperElemId = $(this).parents('.videoplayer-wrapper').first().attr('id');
		if (firstPlay) {
			// track user-initiated first plays only - replays are tracked automatically via JW Player callbacks
			// other uses of dynamically created videoplayer (i.e. on video slider) are usually generated with autoplay active
			//   & handle tracking themselves, outside of this function
			if (!autoplay) spTrackIvwVideo();
			spStartVideoPlayerInFramework(wrapperElemId, showAds, showEndScreen);
			firstPlay = false;
		} else
			spRestartVideo(wrapperElemId);
	});
	if (autoplay)
		playerWrapperElem.find('.video-start-screen').click();
}

/**
 * Starts videoplayer inside HTML framework previously created
 * @param  {String}  wrapperElemId  ID of HTML wrapper element of videoplayer framework
 * @param  {Boolean} showAds        Whether or not to allow ads
 * @param  {Boolean} showEndScreen  Whether to show related videos on video-end
 * @return {void}
 */
function spStartVideoPlayerInFramework(wrapperElemId, showAds, showEndScreen) {

	var wrapperElem = $('#' + wrapperElemId);
	var videoId = wrapperElem.data('currentVideoId');
	var videoInfo = window.spVideoInfo[videoId];
	var videoElementsWrapper = wrapperElem.find('.video-elements').first();

	// setup callback function for end of video

	var callbacks = $.extend({},videoInfo.callbacks);
	if (showEndScreen) {
		callbacks.onFinalEnd = function() {
			var endScreen = wrapperElem.data("endScreen");
            videoInfo.status = 'finished';
            if(isDebuging) console.log('status ' + videoId+' '+window.spVideoInfo[videoId].status);
			if(endScreen) endScreen.toggleEndScreen();
		};
	} else {
		callbacks.onFinalEnd = function() {
			$('#' + wrapperElemId + ' .video-start-screen').fadeIn(300).delay(300);
		};
	}

	spStartVideo({
		wrapperElemId:		wrapperElemId,
		videoId:			videoId,
		videoFilename:		{
			hq:					videoInfo.videoData.hqfilename,
			sq:					videoInfo.videoData.sqfilename
		},
		poster:				videoInfo.poster,
		prerollGateway:		videoInfo.prerollGateway,
		postrollGateway:	videoInfo.postrollGateway,
		overlayGateway:		videoInfo.overlayGateway,
		allowAds:			showAds && videoInfo.videoData.allowads,
		credit:				videoInfo.videoData.credit,
		displaycat:			videoInfo.videoData.displaycategoryid,
		videocat:			videoInfo.videoData.categoryid,
		server:				videoInfo.videoData.cdnhost,
		trackingsize:		'gross',
		autoplay:			true,  // autoplay always true, because "true autoplay" behaviour is handled in createVideoPlayer() already
		callbacks:			callbacks,
		embedWidth:			videoElementsWrapper.width(),
		embedHeight:		videoElementsWrapper.height(), 
		showEndScreen:		showEndScreen,
		isFollowupVideo:	spEndScreen.isFollowupVideo(window.spVideoInfo) 
	});
}

/**
 * Remove videoplayer and the corresponding framework
 * @param  {String}  wrapperElemId  ID of HTML wrapper element of videoplayer framework
 * @return {void}
 */
/* ##### NOTICE ##### This function must be callable from external h5app interface!
 *                    Don't just rename it or change parameters without testing the h5app interface against the new changes!
 */
function spRemoveVideoPlayerWithFramework(wrapperElemId) {
	// check mandatory params
	if (!wrapperElemId || wrapperElemId === '') return false;
	// verify that the wrapper element exists
	var wrapperElem = $('#' + wrapperElemId);
	if (wrapperElem.length < 1) {
		if(isDebuging) console.error('spRemoveVideoPlayerWithFramework: no HTML element with provided wrapperElemId found: ' + wrapperElemId);
		return false;
	}

	// remove the player itself
	var jwplayerInstance = wrapperElem.find('.jwplayer').data('playerInstance');
	if (jwplayerInstance)
		jwplayerInstance.remove();

	// cleanup HTML changes to wrapper element which were done by the player framework creation process
	wrapperElem
		.removeClass('videoplayer-wrapper videoplayer-framework')
		.removeData('currentVideoId')
		.css({width: ''})
		.html('');
}

/**
 * Main videoplayer function to set up the player with all variables & behaviour like event handling, extra UI elements etc
 * @param  {Object}  config  The configuration object, can hold the following parameters (for defaults, see at start of function):
 *                   {
 *                       wrapperElemId    ID of HTML element wrapping parts (player placeholder, error field, start- & endscreen)
 *                       videoId          ID of video which should be played
 *                       videoFilename
 *                       {
 *                           hq           name of video file to be used for high quality
 *                           sq           name of video file to be used for standard quality
 *                       }
 *                       poster           image to be shown by player at start, when autoplay is off
 *                       prerollGateway   VAST URL for preroll ad
 *                       postrollGateway  VAST URL for postroll ad
 *                       overlayGateway   VAST URL for overlay ad (in-stream)
 *                       overlayStartAt   how many seconds into content video until overlay is shown
 *                       allowAds         whether to show ads
 *                       credit           tracking info
 *                       displaycat       tracking info
 *                       videocat         tracking info
 *                       server           videoserver URL to be used
 *                       trackingsize     parameter to distinguish different player styles (i.e. centerpage vs iframe vs embed etc)
 *                       autoplay         whether to play video on page load (not possible on mobile devices due to hardware restrictions)
 *                       callbacks
 *                       {
 *                           onAdStart    fires at the beginning of each pre/postroll ad
 *                           onAdEnd      fires at the end of each pre/postroll ad
 *                           onVideoEnd   fires at the end of the content video (but before postroll, if there is one)
 *                           onFinalEnd   fires at the end of everything including postroll
 *                       }
 *                       embedWidth       width of player
 *                       embedHeight      height of player
 *                   }
 * @return {void}
 */
function spStartVideo(config) {
	// set config param defaults
	var defaults = {
		prerollGateway:		'',
		postrollGateway:	'',
		overlayGateway:		'',
		overlayStartAt:		7,
		allowAds:			false,
		autoplay:			true,
		callbacks: 			{},
		embedWidth:			640,
		embedHeight:		360,
		showEndScreen:		true,
		isFollowupVideo:	false
	};
	config = $.extend({}, defaults, config);
	
	// make sure we have a wrapper ID
	if (!config.wrapperElemId || config.wrapperElemId === '') return false;
	
	if(!window.spVideoInfo)
		window.spVideoInfo = [];
	if(!window.spVideoInfo[config.videoId])
		window.spVideoInfo[config.videoId] = {};
	
	var videoInfo = window.spVideoInfo[config.videoId];
	
	// detect if we're inside an iframe
	var isInIframe = window.parent != window.self;
	
	// special hash param switches to affect ads & statistics
	var hashParams = (typeof spGetHashParams === 'function' ? spGetHashParams() : []);
	// extra ref parameter for statistics
	var refParam = hashParams.ref !== null ? hashParams.ref : '';

	// deactivating ads, also possible through ADI
	if (hashParams["adition.keinevideowerbung"] == "1" || (typeof ADI == 'object' && ADI.disabled())) {
		config.prerollGateway	= "";
		config.postrollGateway	= "";
		config.overlayGateway	= "";
	}
	// setting extra parameter "videobelegung"
	if (hashParams["adition.videobelegung"] && hashParams["adition.videobelegung"] !== '') {
		if (config.prerollGateway)	config.prerollGateway	+= '&prf[videobelegung]=' + hashVideoBelegung;
		if (config.postrollGateway)	config.postrollGateway	+= '&prf[videobelegung]=' + hashVideoBelegung;
		if (config.overlayGateway)	config.overlayGateway	+= '&prf[videobelegung]=' + hashVideoBelegung;
	}

	var wrapperElem = $('#' + config.wrapperElemId);
	wrapperElem.data('currentVideoId', config.videoId); // sicher stellen, dass hier tatsächlich die aktuelle ID steht
	
	if (!wrapperElem.length) return false;   // wrapper element not found
	var html5PlayerWrapperId = wrapperElem.find('.videoplayer-placeholder').attr('id');
	if (!html5PlayerWrapperId) {
		// assign an ID to player wrapper element, because JW player needs an ID for setup
		var playerIdCount = 1;
		// make sure the ID doesn't exist yet
		while ($('#spVideoplayer-' + playerIdCount).length)
			playerIdCount++;
		html5PlayerWrapperId = 'spVideoplayer-' + playerIdCount;
		wrapperElem.find('.videoplayer-placeholder').attr('id', html5PlayerWrapperId);
	}

	
	if ((spUA.isIDevice() || spUA.isAndroid()) && parseInt(config.videoId) < spMinVideoIdForMobileDevices) {
		// this video is limited to desktop
		wrapperElem.find('.video-player-error')
			.html('Dieses Video steht für iOS- & Android-Geräte nicht zur Verfügung.')
			.show();
	} else if (!document.createElement('video').canPlayType && !isValidPluginVersion()) {
		// no HTML5 video possible & Flash version not sufficient for fallback play
		var fpversion = swfobject.getFlashPlayerVersion();
		wrapperElem.find('.video-player-error')
			.html('Dieses Video benötigt mindestens Version ' + sp_webcfg_global.flash.pluginversion.major + '.' + sp_webcfg_global.flash.pluginversion.minor + ' des Flash-Plugins. Gefundene Version: ' + fpversion.major + '.' + fpversion.minor + '.' + fpversion.release + ' ' + spnetENV_NOFLASHPLAYER_LINK)
			.show();
	} else {
		// make sure a filname is provided (note: JW Player can only play videofiles directly, no video ID HTML redirect possible)
		if (config.videoFilename === null || config.videoFilename === '') return;

		// get video data
		var videoData = wrapperElem.data();

		var infoWindow = '';
		{
			infoWindow = $('<div class="jw-infowindow">')
			infoWindow.append(
					$('<a class="jw-spon-logo" href="/"'+(isInIframe ? ' target="_blank"' : '')+'/>').append(
						'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8CAIAAABZ6yszAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABqNJREFUeNrsWHtQlFUU5wPcNWHZLRd8sJAsNqYCImqmloPMoAwa4vgqZ5xqMh9pDmJUOlPjTJYPAh/ZhJNFYYiPatQcxrerJMrLmHgEaVqAASPgsvjaNXY7H4c9e/d+HxvqX07fnTs7997vnsfv3HvOuWcFh8Ph9Tg3b6/HvCkAFAAKAAWAAkABoABQACgAHuPmS6PWyipru4X9po+KUGk0f5+/ICVTawP6R4ys3bu/o64BVzShhsGTJtbm7ZcVM/bd1Pu3b9d8l8eKGDxpAvSO+vravAM9UYF0lwIOx9j3VnN7BKwHQPvvp0zjvumeGTq/0LQz0CDLfe65kwVpa5uKinE6cPxz49ak/ZQ8V3bzkhsNh5NmN14o4tZfOiiq7oGqdHNmWXomuyJ/hcgwaBW/wYNgbL58BVe6bRxiwK84tVksgdFRfoMGwthHrYbxE/37PzX8WZYPnBJJQu39DcEsE7AuSwX7OSo4WL+BA3A8YNwYGZSOrnb958IsfTB0nJZsymCnOK7KzmGnjUXFtPPwzDn4qfFiEUvYUlFJUxzAfpYJToEVTlurazgqqTJc85U9u7DEhH5BgZ69x2G3s1ZwLroVqP7BwWPSUmXJX0zfAL9wbkhPnDxTeXJibNXf7O5p643yX92+srrS2KkK7YRIMCRhKsvnz6PH7zQ1c7cAB1cPHWkqKpGl6i2AgrQ17HTEawtpXJObB10qVVYV4gPOzalSkfUlBRawdGD0KPpUlrGVrvuDAQBfwTMlY7O6kl8OmjiBwig5omyjOwCcuU+RS98MT05iLSUIQjfV6pR+XS7bz+m4D3wCaHK4AFIAoD0EZnk2Aq8K7rT8VWdamfr73gMYLrGhad2O2kllnDkDIpJItWJV+fbPk/MPSUXBDbyUsTVoTMwLG9e7AEA+Qo7snel9E7ydGd1bYNfvd3Q0Fl78b3KBo7oF0aynzeA/cEFIIn8CkDjEmF3oyr7NJaU4uFXf0FHfANmAPolpsuA8DNqvXoOsHBI3pTZ3H+vEnLMiZy5O3G1p+S1nD+vELBXgJ2WQELQXMfv4yANg0x62g4nJOAAV/UMM7C0CAGiq241NoHpAaCjskQ0G4tmo+tht992eBl2+dLP2MlGRE1ODBEX7WZ4UxLsB6CNGhsTF2jpuuS6Dw2FMmi6NMuwMHDQoJhqNoR8VqQrQQPQQvH3oSohBScw2orDJGZtqdufRdYd1tU47fOECOL0BY2NEKqfoLgq7VxcViGB5djO0d1LsEpT/RhUASkHDN/D6BtNZcA9teBikW01IiFseyT86JDGBI6FiCAsdqFGo0IHwoNIGdGcbZp19UUuTOkUecGJQQFpsoSD+BIBsV7Cx6utvg0ZHG2In1588sydmwqnFy20McWn6FliRwobsePqtlaTrpcxtUKbAw9hNaoC2OjuHW4cphVFWv8K1H5Z9uoVWftm2A3aChtcLzp9asrzBdM6tHqBXOPyyr21czB39PK38EJ8IKzV5+7h3efGGdKjpaIoFhvT5Ll3Ht74Mw082Q6cpVgU4ttTVkZ6uEzg4fVbEotfZaghLpInr14llq9NIEK2fnhZvejuVMxv3HHigBrWrlKGHBpeK9PSmy/PPnTthMxKlu4ctmC+m8ewcWon/KksbbpSK1A0NfzgAc0zHgRYYwl2XvvB6FYXQafSREdIdKo0G0i2xgxzZXHoJRGqNYSDS9S4QhABj2MMB8FGpZp85BgO4hIRBTMwSDPBUg37ijaUk182Jre3mnitIt5rLt2/f2aePoguiSH3EiEe5RcBwjiwGSU0C/V5bm9oZLbzZsqO1okqW+92WNrVOx1W9ffz8WJEqrdbrEQCgvxHDTqtVdg8CiN2ewfsARuKrR/KlNF3Buy58VpL0PceKtLW3P7TqZHIXw9ipNovFgxPzPgBLEIIuH/hRGgqKP9robwge9vI8z2Y79uoidh3xkGaQSVgHtblnJTZJIUPzlT8qdu7qDWbXJRv3fpo+KhL8snRTBgoA259ctKyxqHiu6QRtgwDMGZswsH+0tFRWw++1/GPACnr5ji9QS3S+lsoqKVqWYexnmdxpW81mfAcgE6oc+Oc0nACcw73WNsxww16ZF7Vsses0Pt5Yd/yU+kkd1Oxc/geTgFp4UID8bEqa1dzenSntdugJudkwg/V7bTd14cbRKStAUahRmkvKRIbvrOIYgq5WiwUZAvML69Zbb5rRTI7OztD4uPEfrFXqAQWAAkABoABQACgAFAAKAAWAAuB/DeBfAQYAebFN04q4zbsAAAAASUVORK5CYII="/>'
					));
			infoWindow.append('<div class="jw-info-title">'+videoData.videoTitle+'</div>');
			var text = $('<div class="jw-info-text" />');
			if (videoData.videoTeaser && videoData.videoTeaser !== '')
				text.append('<p>'+videoData.videoTeaser+'</p>');
			if (videoData.videoArticleUrl && videoData.videoArticleUrl !== '') {
				if($('#video-embed-player').length) {
					text.append('<a href="http://www.spiegel.de'+videoData.videoArticleUrl+'" target="_blank">Zum Artikel</a>');	
				} else {
					text.append('<a href="'+videoData.videoArticleUrl+'" target="_top">Zum Artikel</a>');
				}
			}
			
			
			text.append('<span class="jw-info-date">'+videoData.videoDate+'</span>');
			infoWindow.append(text);
		}
		
		// set generic player options
		jwplayer.key = spnetENV_JWPLAYER_KEY;
		var jwplayerOptions = {
			flashplayer:	'/static/flash/flashvideo/jwplayer7.8.1.flash.swf',
			primary:		'html5',
			image:			config.poster,
			title:			infoWindow.html(),
			mediaid:		config.videoId,
			width:			config.embedWidth,
			height:			config.embedHeight,
			autostart:		config.autoplay,
			ga:				{},    // enable Google Analytics, uses the GA JS already on the page
			skin: {
				name:			'spon'
			},
			sharing: {
				link: decodeURIComponent(videoData.videoSocialUrl),
    			heading: 'Video Teilen',
			    sites: ['facebook','twitter','googleplus',
			            {
			    			label: 'mail',
			    			icon: '',
							src: function() {
			    				if ($('#video-inline-player').length || ($(this).parents('.videoplayer-framework').length && isInIframe))
									parent.spOpenSendForm('de', 'video', null, {videoId: config.videoId});
								else
									spOpenSendForm('de', 'video');
			    			}
			            },
			            {
			    			label: 'embed',
			    			icon: '',
	    					src: function() {
	    	                    if ($('#video-inline-player').length || ($(this).parents('.videoplayer-framework').length && isInIframe))
	    	                        parent.spOpenEmbedForm(config.videoId, videoData.videoEmbeddable);
	    	                    else
	    	                        spOpenEmbedForm(config.videoId, videoData.videoEmbeddable);
			    			}
						}
			    	]
			  }
		};
		
		// read cookie for HQ/SQ
		var qualityCookieName = 'sponVideoplayerQuality';
		var playerQuality = 'hq';
		if ($.cookie(qualityCookieName))
			playerQuality = $.cookie(qualityCookieName);
		else
			$.cookie(qualityCookieName, playerQuality, { expires: 365, path: '/' });

		// set video sources
		if (typeof config.videoFilename == 'object') {
			jwplayerOptions.sources = [];
			// check all quality levels that we're expecting
			$.each(['sq', 'hq'], function(i, quality) {
				if (config.videoFilename[quality] !== '') {
					var sourceInfo = {file: config.server + config.videoFilename[quality]};
					// set this quality as default if quality read from cookie matches
					if (playerQuality == quality)
						sourceInfo['default'] = true;
					jwplayerOptions.sources.push(sourceInfo);
				}
			});
		} else {
			// legacy: videoFilename is a single string
			jwplayerOptions.file = config.server + config.videoFilename;
		}

		if (config.showEndScreen) {
			var endScreen = new spEndScreen(config.videoId, config.wrapperElemId);
			wrapperElem.data("endScreen", endScreen);

			if (config.showEndScreen && spEndScreen.allowContinousPlay()) {
				if(isDebuging)
					endScreen.findNextVideoAndCreateEndscreen();
				else 
					// load endscreen asyncronously, cause it's not needed for the beginning of video anyway 
					setTimeout(function(){endScreen.findNextVideoAndCreateEndscreen();},300);
			}
		}
			
		
		if (config.allowAds && (config.prerollGateway !== '' || config.postrollGateway !== '' || config.overlayGateway !== '')) {
			// set player options for VAST ads
			jwplayerOptions.advertising = {
				client:		'vast',
				admessage:	spnetENV_JWPLAYER_ADMESSAGE,
				schedule:	{}
			};
			if (config.prerollGateway !== '')
				jwplayerOptions.advertising.schedule.preroll	= { offset: 'pre',  tag: config.prerollGateway };
			if (config.postrollGateway !== '' && !spEndScreen.allowContinousPlay())
				jwplayerOptions.advertising.schedule.postroll	= { offset: 'post', tag: config.postrollGateway };
			if (config.overlayGateway !== '')
				jwplayerOptions.advertising.schedule.overlay	= { offset: config.overlayStartAt, type: 'nonlinear', tag: config.overlayGateway };
		}else if(isDebuging){
				if (config.allowAds)
					console.log('no Ads allowed');
				else
					console.log('no AdGateways in config');
			}

		// instantiate player
		var jwplayerInstance = jwplayer(html5PlayerWrapperId).setup(jwplayerOptions);

		jwplayerInstance.addButton(
			'/static/sys/pixel.gif',
			'Info', 
			function() {
				$('.jw-title').toggle()
			},
			'info'
		);
		
		
		
		
		jwplayerInstance.on('ready', function() {
			var playerElem = $('#' + this.id);

			// store player instance from JW Player setup for future reference (i.e. removing player)
			playerElem.data('playerInstance', jwplayerInstance);

			// detect if we're on a touch device
			var touchabilityClass = 'jw-'+('ontouchstart' in document.createElement('div') ? '' : 'un')+'touchable';
			playerElem.addClass(touchabilityClass);



			// move duration display over to left group
			playerElem.find('.jw-text-duration').detach().appendTo(playerElem.find('.jw-controlbar-left-group'));

			// hover handler for icons, cause JW Player has a bug when keeping controls open (won't happen on hover for dock icons)
			playerElem.on('mouseenter', '.jw-icon', function() {
				playerElem.addClass('jw-flag-icon-hover');
			});
			playerElem.on('mouseleave', '.jw-icon', function() {
				playerElem.removeClass('jw-flag-icon-hover');
			});

			// add left dock with info button & addtional text
			playerElem.find('.jw-dock').append('<div class="jw-dock-left jw-reset"></div>');
			playerElem.find('.jw-dock-left').append('<div class="jw-icon jw-icon-info jw-button-color"></div>');


			playerElem.find('.jw-dock-left').append(infoWindow);

			// click handler for info window
			playerElem.on('click touchstart', '.jw-icon-info', function() {
				$(this).add(playerElem.find('.jw-infowindow')).toggleClass('jw-open');
				playerElem.toggleClass('jw-flag-infowindow-open');
			});

			// flags to make sure that tracking is happening only once
			playerElem.data({
				startTracked:	false,
				endTracked:		false
			});
			
		});

		
		
		// define function for Netmind tracking (depends on whether we're in an Iframe or on a normal page)
		var doNmTracking = function(trackingParams) {

			// modify default tracking params by the ones passed to this function
			trackingParams = $.extend({
				'sp.atyp':				33,
				'sp.videocredit':		config.credit,
				'sp.df':				config.trackingsize,
				'sp.videodisplaycatid':	config.displaycat,
				'sp.videocatid':		config.videocat,
				'sp.aid':				config.videoId,
				'sp.followupVideo':		config.isFollowupVideo,
				'sp.channel':			781
			}, trackingParams);

			if (!window.spNmAjax && spInterface)
				spInterface('reCountPage', {newParamsOnly: true, params: trackingParams});
			else
				spNmAjax(trackingParams);
		};

		var doTrackEnd = function() {
			doNmTracking({
				'sp.site':	1001,
				'sp.event':	'end'
			});
			if (typeof(ga) == "function") 
				ga('send', 'event', 'video', 'continous:end', (config.isFollowupVideo?(window.spVideoInfo[config.videoId].followupVideoCount):0) ,{
					  nonInteraction: true
				});
			else 
				if(isDebuging)console.log('ga not a function');
			if (typeof config.callbacks.onVideoEnd === 'function')
				config.callbacks.onVideoEnd();
		};
		var doTrackStart = function() {
			doNmTracking({
				'ref':		refParam,
				'sp.site':	1
			});
			
			if (typeof(ga) == "function") 
				ga('send', 'event', 'video', 'continous:start', (config.isFollowupVideo?(window.spVideoInfo[config.videoId].followupVideoCount):0) ,{
					  nonInteraction: true
				});
			else
				if(isDebuging)console.log('ga not a function');
		}; 
		
		// callback for start of video
		jwplayerInstance.on('play', function() {
			var playerElem = $('#' + this.id);

			if (window.spVideoInfo[config.videoId].followupVideoCount === undefined)
				window.spVideoInfo[config.videoId].followupVideoCount = 0;
			// move HD button over to dock, each time a new video plays - because JW Player puts it back into the controlbar on each new video
			playerElem.find('.jw-icon-hd').detach().prependTo(playerElem.find('.jw-dock-right'));

			window.spVideoInfo[config.videoId].status='started';
			if(isDebuging) console.log('status ' + config.videoId+' '+window.spVideoInfo[config.videoId].status);;
			window.videoStarted=true;
			// only track once! onPlay fires every time the player state switches to PLAYING (= also when unpausing the video)
			// onPlay does NOT fire on preroll - howevery this is desired, cause we want to track the actual content video
			if (!playerElem.data('startTracked')) {
				playerElem.data('startTracked', true);
				doTrackStart();
				

				// also track usage of SQ quality
				if (playerQuality == 'sq') {
					doNmTracking({
						'sp.site':			1001,
						'sp.videoquality':	'sq'
					});
				}
			}

			// on "play" events that are actually triggered for a replay, we need to clear some flags & track the video again
			if (playerElem.data('isReplay')) {
				playerElem.removeData('isReplay');

				spResetJwPlayerVars(config.wrapperElemId);
				spTrackIvwVideo();
			}
		});

		// callback for end of video (fires AFTER end of postroll, if there is one!)
		jwplayerInstance.on('complete', function() {
			var playerElem = $('#' + this.id);

			// if video end hasn't been tracked before (= if there is no postroll), track it now
			if (!playerElem.data('endTracked'))
				doTrackEnd();

			window.spVideoInfo[config.videoId].status='finished';
			if(isDebuging) console.log('status ' + config.videoId+' '+window.spVideoInfo[config.videoId].status);
			// set flag to notify player that the next "play" event is actually a "replay" & needs additional treatment
			playerElem.data('isReplay', true);

			if (typeof config.callbacks.onFinalEnd === 'function')
				config.callbacks.onFinalEnd();
		});

		jwplayerInstance.on('adError', function(e) {
			if (isDebuging) {
				console.log('adError:' + e.message);
				console.log(e);
			}
			if (typeof(ga) == "function") 
				ga('send', 'event', 'video', 'adError', e.message, {
					  nonInteraction: true
				});
		});
		
		jwplayerInstance.on('adImpression', function(e) {
			var playerElem = $('#' + this.id);
			
			// always hide the dock & shares
			playerElem.find('.jw-icon-share, .jw-shares').removeClass('jw-open-forced');
			playerElem.find('.jw-dock, .jw-controlbar').removeAttr('style');

			// if we're at postroll start: track main content video end, because onComplete fires after postroll
			if (e.adposition == 'post') {
				// if endscreen is present, hide share buttons cause they don't really make sense after a postroll
				wrapperElem.find('.video-end-screen').addClass('jw-after-postroll');
				// make sure we don't track the video-end again on completion of postroll (which is when the JW Player "onComplete" fires)
				playerElem.data('endTracked', true);
				doTrackEnd();
			}

			if (typeof config.callbacks.onAdStart === 'function')
				config.callbacks.onAdStart();
		});

		jwplayerInstance.on('adComplete', function() {
			if (typeof config.callbacks.onAdEnd === 'function')
				config.callbacks.onAdEnd();
			if (typeof(ga) == "function") 
				ga('send', 'event', 'video', 'continous:adComplete', (config.isFollowupVideo?(window.spVideoInfo[config.videoId].followupVideoCount):0) ,{
					  nonInteraction: true
				});
			else 
				if(isDebuging)console.log('ga not a function');
		});

		jwplayerInstance.on('time', function(player) {
			var playerElem = $('#' + this.id);

			// force display of controls, dock & shares when in last part of video
			if (player.position > player.duration - 3) {
				playerElem.find('.jw-icon-share, .jw-shares').addClass('jw-open-forced');
				playerElem.find('.jw-dock, .jw-controlbar').show();
			} else {
				playerElem.find('.jw-icon-share, .jw-shares').removeClass('jw-open-forced');
				playerElem.find('.jw-dock, .jw-controlbar').removeAttr('style');
			}

			if (config.showEndScreen && player.position > player.duration - 0.5) {
				$('#' + config.wrapperElemId + ' .jwplayer').data('playerInstance').pause();
				window.videoStarted=false;
				// if video end hasn't been tracked before (= if there is no postroll), track it now
				if (!playerElem.data('endTracked')){
					doTrackEnd();
				}
	            videoInfo.status = 'finished';
	            if(isDebuging) console.log('status ' + config.videoId+' '+window.spVideoInfo[config.videoId].status);
				endScreen.toggleEndScreen();
			}
		});

		jwplayerInstance.on('levelsChanged', function(e) {
			// track a change in quality when HQ/SQ is clicked
			var playerQuality = e.currentQuality == 1 ? 'hq' : 'sq';
			$.cookie(qualityCookieName, playerQuality, { expires: 365, path: '/' });
			// when switching to SQ we have to track explicitly, because the JW "onPlay" 1st tracking point was already fired
			if (playerQuality == 'sq') {
				doNmTracking({
					'sp.site': 1001,
					'sp.videoquality': 'sq'
				});
			}
		});

		// callback for errors, to display user-friendly info
		jwplayerInstance.on('error setupError', function(e) {
			$('#' + this.id).hide();

			if (isDebuging) console.log('Error: ' + e.message);
			var hasGeoBlocking = $('.video-player').hasClass('video-player-geoblocking');
			var errorText = hasGeoBlocking
				? 'Dieses Video ist leider an Ihrem Standort nicht verfügbar.'
				: 'Leider steht für dieses Video keine auf Ihrem Gerät abspielbare Datei zur Verfügung.';

			wrapperElem.find('.video-player-error')
				.html(errorText)
				.show();
		});
	}

}


function spResetJwPlayerVars(wrapperElemId) {
	// reset tracking flags
	$('#' + wrapperElemId + ' .jwplayer').data({
		startTracked:	false,
		endTracked:		false
	});
	// also make sure that endscreen dock items are visible again
	$('#' + wrapperElemId + ' .video-end-screen').removeClass('jw-after-postroll');
}

function spTrackIvwVideo() {
	if (!window.spIvwReload && spInterface)
		// make sure IVW reload is also possible when we're inside an Iframe
		spInterface('reCountPage', {countNM: false, countIVW: true, newIvwCode: 'spon-www-781-6414'});
	else {
		// hard-coded IVW-profile to track videos
		if (typeof iom != 'undefined') {
			iom.c({
				st: 'spiegel',
				cp: 'spon-www-781-6414',
				sv: 'ke'
			}, 1);
		}
	}
}

function spRestartVideo(wrapperElemId) {
	// check if there's a JW Player instance
	if (typeof jwplayer === 'function') {
		// restart the player inside provided wrapper element
		spResetJwPlayerVars(wrapperElemId);
		var player = $('#' + wrapperElemId + ' .jwplayer').data('playerInstance');
		player.seek(0);
		player.play(true);
	} else {
		// no JW Player & no flash player = other (maybe legacy) video methods - to be sure we do a full page reload in this instance!
		document.location.reload();
	}

	return false;
}

/// start Class spJsHelper
	var spJsHelper = function() {};
	spJsHelper.count = function(obj) {
	    if (obj.__count__ !== undefined) { // Old FF
	        return obj.__count__;
	    }
	    if (Object.keys) { // ES5 
	        return Object.keys(obj).length;
	    }
	    // Everything else:
	    var c = 0, p;
	    for (p in obj) {
	        if (obj.hasOwnProperty(p)) {
	            c += 1;
	        }
	    }
	    return c;
	}
/// end Class spJsHelper

// Embedding-Dialog
function spConfigureVideoEmbed(videoId, action){
	var aspectRatio		= 16 / 9;
	var userWidthValue	= 640;
	var userHeightValue	= Math.ceil(userWidthValue / aspectRatio + 1);   // add 1 to make sure video border is shown on all sides
	var userWidthElem	= $('#spVideoEmbedSourceWidth');
	var userHeightElem	= $('#spVideoEmbedSourceHeight');
	var errorElem		= $('#spVideoEmbedErrorMessage');
	var hasError		= {
		width:				false,
		height:				false
	};
	var limits			= {
		width: {
			min:			400,
			max:			1000
		},
		height: {
			min:			226,
			max:			564
		}
	};

	switch (action) {
		case 'breite':
			userWidthValue = userWidthElem.val().trim();
			if (!userWidthValue.match(/^[0-9]{3,4}$/) || userWidthValue < limits.width.min || userWidthValue > limits.width.max) {
				hasError.width = true;
				errorElem.html('Ungültiger Wert!\nBitte geben Sie eine Breite zwischen '+limits.width.min+' und '+limits.width.max+' an.');
			} else {
				hasError.width = false;
				// calc height from provided width
				userHeightValue = Math.ceil(userWidthValue / aspectRatio + 1);
			}
			break;

		case 'hoehe':
			userHeightValue = userHeightElem.val().trim();
			if (!userHeightValue.match(/^[0-9]{3}$/) || userHeightValue < limits.height.min || userHeightValue > limits.height.max) {
				hasError.height = true;
				errorElem.html('Ungültiger Wert!\nBitte geben Sie eine Höhe zwischen '+limits.height.min+' und '+limits.height.max+' an.');
			} else {
				hasError.height = false;
				// calc width from provided height
				userWidthValue = Math.floor((userHeightValue - 1) * aspectRatio);
			}
			break;
	}

	// set input field values & state
	userWidthElem
		.toggleClass('error', hasError.width)
		.val(userWidthValue);
	userHeightElem
		.toggleClass('error', hasError.height)
		.val(userHeightValue);
	errorElem.toggle(hasError.width || hasError.height);

	// set embed code, if no errors encountered (otherwise empty)
	var embedCode = (hasError.width || hasError.height) ? '' : '<iframe width="' + userWidthValue + '" height="' + userHeightValue + '" frameborder="0" scrolling="no" border="0" allowfullscreen src="http://www.spiegel.de/video/embedurl/video-' + videoId + '-' + userWidthValue + '_000_fff.html"></iframe>';
	$('#spVideoEmbedSourceArea').val(embedCode);
}

function spOpenEmbedForm(assetId, isEmbeddable){
	spOpenPopupLayer2(
		'js-'+(isEmbeddable ? 'embed' : 'shorturl')+'-video-popup-layer',
		null,
		(isEmbeddable ? 'Einbetten & ' : '') + 'Kurz-URL',
		'/video/embeddialog-' + assetId + '.html' + (isEmbeddable ? '#spAllowEmbed=true' : '')
	);

	var offset = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		offset = window.pageYOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		offset = document.body.scrollTop;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		offset = document.documentElement.scrollTop;
	}
	if (offset > 500) scrollTo(0,0);
}

function spDetectVideoContext(action){
	var getSendFormPopup = document.getElementById('send-form-popup');
	var SendFormPopupLocation = document.location.href.indexOf("videoversand");
	if(SendFormPopupLocation >= 0 || action == 'byFunction'){
		if(getSendFormPopup.className != 'spSendVideoFormPopup'){
			getSendFormPopup.className = 'spSendVideoFormPopup';
		}
	}
}

function spIpadRemoveOldVideolinks(){
	if ( spUA.isIDevice() || spUA.isAndroid() ){
		$('.js-no-ipad-video').remove();
	}
}

function spShowInlineVideo(pane) {
	var teasercontent 	= pane.find(".spPanoPlayerTeaser");
	var pic     		= pane.find(".spPanoPlayerTeaserPic");
	var credit  		= pane.find(".asset-credit");
	var newpane = $('<iframe>')
					.attr("src","/video/video-" + pane.attr("data-assetid") + "-inline.html")
					.attr("frameborder","0")
					.attr("scrolling","no")
					.attr("allowfullscreen", "")
					.attr("width", pic.width())
					.attr("height", pic.height() + credit.height());

	pane.append(newpane);
	teasercontent.hide();
}

function spHideInlineVideo(videoid) {
	var pane = 		$("#spPanoPlayerInline-"+videoid);
	pane.find(".spPanoPlayerTeaser").show();
	pane.find("iframe").remove();
}




$(document).ready(function(){
	if( (spUA.isIDevice() || spUA.isAndroid()) && $('body').attr('id') && $('body').attr('id').toLowerCase().match('video') !== null){
		var bbtn = document.getElementsByClassName('spIEsixPng'); // get BigButton // ACHTUNG :: .spIEsixPng gibt es bald nicht mehr
		for(var i=0; i<bbtn.length; i++){
		   if(bbtn[i].width == 113 && bbtn[i].height == 50 && bbtn[i].style.display != 'block'){
		        bbtn[i].style.display='block';
		    }
		}
		var sbtn = document.getElementsByClassName('btn-play-video'); // get SmallButton
		for(var i=0; i<sbtn.length; i++){
		   if(sbtn[i].style.display != 'block'){
		        sbtn[i].style.display='block';
		    }
		}
	}
});

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();function spSynchDatumBis(FORM)
{
    if (FORM.suchzeitraum.selectedIndex == 0)
    {
        // Nichts tun
    }
    else
    {                            // - Bis-Datum aus Rollo-Wert errechnen
        FORM.spSearchFromDate.value = getDatumFromKey(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        FORM.spSearchToDate.value = getDatumBisKey(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        if (FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value == "all")
        {
            FORM.spSearchToDate.value = "";
        }
    }
}

function spSynchDatumBisInternational(FORM)
{
    if (FORM.suchzeitraum.selectedIndex == 0)
    {
        // Nichts tun
    }
    else
    {                            // - Bis-Datum aus Rollo-Wert errechnen
        FORM.spSearchFromDate.value = getDatumFromKeyInternational(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        FORM.spSearchToDate.value = getDatumBisKeyInternational(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        if (FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value == "all")
        {
            FORM.spSearchToDate.value = "";
        }
    }
}


function getDatumBisKey(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "all"      : ret = "";             break;
        case "2005"      : ret = "31.12.2004";     break;
        case "2000"       : ret = "31.12.1999";     break;
        case "1995"     : ret = "31.12.1994";     break;
        case "1990"     : ret = "31.12.1989";     break;
        case "1980"     : ret = "31.12.1979";     break;
        case "1970"     : ret = "31.12.1969";     break;
        case "1960"     : ret = "31.12.1959";     break;
        default           : ret = "";             break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumBisKeyInternational(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "all"      : ret = "";             break;
        case "2005"      : ret = "12/31/2004";     break;
        case "2000"       : ret = "12/31/1999";     break;
        case "1995"     : ret = "12/31/1994";     break;
        case "1990"     : ret = "12/31/1989";     break;
        case "1980"     : ret = "12/31/1979";     break;
        case "1970"     : ret = "12/31/1969";     break;
        case "1960"     : ret = "12/31/1959";     break;
        default           : ret = "";             break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumFromKey(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "week"   : ret = datum7Tage;     break;
        case "month"   : ret = datum30Tage;     break;
        case "year"      : ret = datum1Jahr;     break;
        case "ab2005"      : ret = "01.01.2005";     break;
        default           : ret = "";         break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumFromKeyInternational(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "week"   : ret = datum7TageInternational;     break;
        case "month"   : ret = datum30TageInternational;     break;
        case "year"      : ret = datum1JahrInternational;     break;
        case "ab2005"      : ret = "01/01/2005";     break;
        default           : ret = "";         break; // tt.mm.jjjj
    }

    return ret;
}

//-------------------------------------
//value-Werte fuer DATUM_ROLLO-Optionen
var datumHeute = "";
var datumGestern = "";
var datum7Tage = "";
var datum7TageInternational = "";
var datum30Tage = "";
var datum30TageInternational = "";
var datum90Tage = "";
var datum1Jahr = "";
var datum1JahrInternational = "";
var datum2Jahre = "";
var datum3Jahre = "";

makeValues_Datum_Rollo();
//-------------------------------------


function makeValues_Datum_Rollo()
{
    //      --- option-value-Werte fuer Rollo vb bzw. DATUM_ROLLO
    var dateNow = new Date();                  // Datum-heute, Typ Date
    var milliNow = dateNow.getTime();           // Datum-heute in Millisek. seit Computers Geburt

    var dateX = new Date();                  // Hilfsvar., Typ Date
    var milliX = 0;

    milliX = milliNow - 1000 * 60 * 60 * 24;    // vor 1 Tag: 7Tage*24Std*60min*60sec*1000ms
    dateX.setTime(milliX);                  // Date-Objekt
    datumGestern = date2datumAnzeige(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 7;    // vor 7 Tagen: 7Tage*24Std*60min*60sec*1000ms
    dateX.setTime(milliX);                  // Date-Objekt
    datum7Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'
    datum7TageInternational = date2datumAnzeigeInternational(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 30;   // vor 30 Tagen
    dateX.setTime(milliX);                  // Date-Objekt
    datum30Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'
    datum30TageInternational = date2datumAnzeigeInternational(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 90;   // vor 90 Tagen
    dateX.setTime(milliX);                  // Date-Objekt
    datum90Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'

    var yearNow = dateNow.getYear();    // numer. iijj oder jj
    if (yearNow < 1900)
        yearNow += 1900;                  // num iijj

    var monthNow = dateNow.getMonth() + 1;
    if (monthNow < 10)
        monthNow = "0" + monthNow;        // mm

    var dayNow = dateNow.getDate();
    if (dayNow < 10)
        dayNow = "0" + dayNow;            // tt

    var monthLastYear = "" + monthNow;
    var dayLastYear = "" + dayNow;

    if (monthNow == "02" && dayNow == "29")
    {
        monthLastYear = "03";
        dayLastYear = "01";
    }

    datumHeute = dayNow + "." + monthNow + "." + yearNow;
    datum1Jahr = dayLastYear + "." + monthLastYear + "." + (yearNow - 1);
    datum1JahrInternational = monthLastYear + "/" + dayLastYear + "/" + (yearNow - 1);
    datum2Jahre = dayLastYear + "." + monthLastYear + "." + (yearNow - 2);
    datum3Jahre = dayLastYear + "." + monthLastYear + "." + (yearNow - 3);
}

function date2datumAnzeige(dateObj)

    //      // Rein: Objekt, das mit dateObj = new Date(); def. wurde
    //      // Raus: String 'tt.mm.iijj' fuer FROM/TO_DATE_DISPLAY
{
    var yearDisplay = dateObj.getYear();
    if (yearDisplay < 1900) yearDisplay += 1900;

    var monthDisplay = dateObj.getMonth() + 1;
    if (monthDisplay < 10) monthDisplay = "0" + monthDisplay;

    var dayDisplay = dateObj.getDate();
    if (dayDisplay < 10) dayDisplay = "0" + dayDisplay;

    var dateDisplay = dayDisplay + "." + monthDisplay + "." + yearDisplay;
    return dateDisplay;
}

function date2datumAnzeigeInternational(dateObj)

    //      // Rein: Objekt, das mit dateObj = new Date(); def. wurde
    //      // Raus: String 'tt.mm.iijj' fuer FROM/TO_DATE_DISPLAY
{
    var yearDisplay = dateObj.getYear();
    if (yearDisplay < 1900) yearDisplay += 1900;

    var monthDisplay = dateObj.getMonth() + 1;
    if (monthDisplay < 10) monthDisplay = "0" + monthDisplay;

    var dayDisplay = dateObj.getDate();
    if (dayDisplay < 10) dayDisplay = "0" + dayDisplay;

    var dateDisplay = monthDisplay + "/" + dayDisplay + "/" + yearDisplay;
    return dateDisplay;
}


// search-form-multiple
function enableAllFields() {
    
    
    $('form[name="suchformbox"]').prop('disabled', false);
}

function submitFormWithPage(page) {
    if (page != 1) {
        document.suchformbox.pageNumber.value = page;
    } else {
        document.suchformbox.pageNumber.disabled = true;
    }

    if (document.suchformbox.fromDate.value == "") {
        document.suchformbox.fromDate.disabled = true;
    }

    if (document.suchformbox.toDate.value == "") {
        document.suchformbox.toDate.disabled = true;
    }

    if (document.suchformbox.suchzeitraum.value == "") {
        document.suchformbox.suchzeitraum.disabled = true;
    }

    if (typeof document.suchformbox.quellenGroup != 'undefined') {
        var q0 = document.suchformbox.quellenGroup[0].checked;
        var q1 = document.suchformbox.quellenGroup[1].checked;
        var q2 = document.suchformbox.quellenGroup[2].checked;

        if (q0 && q1 && q2) {
            document.suchformbox.quellenGroup[0].disabled = true;
            document.suchformbox.quellenGroup[1].disabled = true;
            document.suchformbox.quellenGroup[2].disabled = true;
        }
    }

    if (document.suchformbox.suchbereich.value == "dokumenttext") {
        document.suchformbox.suchbereich.disabled = true;
    }

    // special selector for search on "einestages", can choose to serach in whole archive instead
    if (typeof document.suchformbox.wo != 'undefined' && document.suchformbox.wo.value == 'archiv')
        suchactionchange('archiv');

    document.suchformbox.submit();
}

// Weitere Suchoptionenen auf Wirtschaft
function suchactionchange(suchtype) {

	if(suchtype == 'wirtschaft') {
		var suchtype = 'archiv';
	}
	if(suchtype == 'einestages') {
		var suchtype = 'einestages';
	}

	$(".search-form-multiple input:radio[name='wo']").each(function(){
		if( $(this).is(':checked') ) {
			suchtype = $(this).val();
		}
	});
	
	if(suchtype == 'kurse') {
		$('.search-form-multiple')
		.attr("action", 'http://boersen.manager-magazin.de/mm/kurse_einzelkurs_suche.htn')
		.attr("method", "get")
		.attr("target", "Boerse");
	} 
	if(suchtype == 'einestages') {
		$('.search-form-multiple')
		.attr("action", spnetENV_SERVER + '/suche/einestages/index.html')
		.attr("method", "get")
		.attr("target", "");
	} else {
		$('.search-form-multiple')
		.attr("action", spnetENV_SERVER + '/suche/index.html')
		.attr("method", "get")
		.attr("target", "");
	}

	return true;
}

$(document).ready(function(){

	$('.commonpager').each(function (index, obj) {
		var $obj=$(this);

		var $enableTouch = $obj.attr('data-enable-touch');
		if ($enableTouch)
			$enableTouch = $enableTouch=='true';
		
		var $pages = $obj.find('.commonpager-page');
		if ($pages.length > 1) {
			var swipe=$obj.Swipe({
				continuous: true,
				startSlide: 0,
				speed: 250,
				enabletouch: $enableTouch,
				callback: function(index, element) {
					var $beforeSlide = $obj.attr('data-commonpager-beforeslide');
					if ($beforeSlide != null) {
						$[$beforeSlide]($obj, 'loadImages', index);
						$obj.removeAttr('data-commonpager-beforeslide');
					}
					else {
						$.loadImages($obj, index);
					}

					var $callback = $obj.attr('data-commonpager-callback');
					if ($callback != null) {
						$[$callback]($obj, index);
					}
					
					//remove & add active
					$obj.find('.commonpager-indicator .bullet.active, .commonpager-pagelink.active').removeClass('active');
					
					$obj.find('.commonpager-indicator .bullet').eq(index).addClass("active");
					$obj.find('.commonpager-pagelink[data-pagenum='+index+']').addClass("active");
					
				}
			}).data('Swipe');
			
			// Load Images
			$.loadImages=function(obj, index) {
				$(obj).find('.commonpager-page').eq(index).find('img[data-src]').each( function() {
					$(this).attr('src', $(this).attr('data-src'));
					$(this).attr('data-src', null);
				});					
			}
			

			
			// construct and append buttons
			$obj.find('.commonpager-indicator').each(function() {
				var $indicator = $(this);
				var pager='<span class="button back link-left"> </span>';
				$obj.find('.commonpager-pages>div').each(function(index,bullet){
					if (index==0)
						pager+='<span class="bullet active">&bull;</span>';
					else
						pager+='<span class="bullet">&bull;</span>';
				});
				pager+='<span class="button fwd link-right"> </span>';
				$indicator.append(pager);

				// buttons
				$obj.find('.fwd').bind('click', function(){swipe.next();});
				$obj.find('.back').bind('click', function(){swipe.prev();});

				// bullets
				$obj.find('.bullet').each(function(index, bullet) {
					$(this).bind('click', function(){swipe.slide(index);});
				});				
			});

			// events for pagelinks
			$obj.find('.commonpager-pagelink').each(function() {
				$(this).bind('click', function(){swipe.slide(parseInt($(this).attr('data-pagenum')));});
			});
			
			
			// set display block;
			$obj.find('.commonpager-pages>div').addClass("initialized");
		}
	
	});

});var spTmpImgSetToLoad;
//Muss ausserhalb des spEnhPaginators stehen, da per timeout aufgerufen...
function spLoadDeferImgSet(prefix) {
	for (var i=0; i < spTmpImgSetToLoad.length; i++) {
		var imgElement=document.getElementById(prefix + i);
		if (imgElement != null)
			imgElement.src = spTmpImgSetToLoad[i];
	}
}
var spEnhPaginator = function(paginatorId, imageSets) {
	this.pages=[];
	this.controls=[];
	this.imageSets=imageSets;
	this.completedImageSets=(imageSets != null) ? new Array(imageSets.length) : null;
	this.index=0;
	this.paginatorId=paginatorId;
	this.imageSetToLoad=null;
	this.currentPage=null;
	this.currentControl=null;
	this.initDone=false;
	this.onChangePage=null;
}
spEnhPaginator.prototype = {
		checkInit: function() {
	if (!this.initDone) {
		var container=document.getElementById(this.paginatorId);
		var pagesTmp=container.getElementsByTagName('DIV');
		for (key=0; key < pagesTmp.length; key++) {
			if (pagesTmp[key].className == 'paginator-page') {
				this.pages.push(pagesTmp[key]);
			}
		}
		var elementCounter=container.getElementsByTagName('li');
		for (i=0; i < elementCounter.length; i++) {
			if (elementCounter[i].className == 'paginator-control list-float-left' || elementCounter[i].className == 'paginator-control active list-float-left') {
				this.controls.push(elementCounter[i]);
			}
		}
		this.currentPage=this.pages[this.index];
		this.currentControl=this.controls[this.index];
		this.initDone=true;
	}
},
showNext: function(element) {
	this.checkInit();
	var oldIndex = this.index++;
	if (this.index >= this.pages.length)
		this.index = 0;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
showPrev: function(element) {
	this.checkInit();
	var oldIndex = this.index--;
	if (this.index < 0)
		this.index = this.pages.length - 1;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
showNum: function(element) {
	this.checkInit();
	var oldIndex = this.index;
	this.index = arguments[0];
	if (this.index < 0)
		this.index = this.pages.length - 1;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
switchToNewIndex: function(newPage) {
	this.currentPage.style.display='none';
	if (this.currentControl != null)
		this.currentControl.className = 'paginator-control list-float-left';
	this.currentPage=this.pages[this.index];
	this.currentControl=this.controls[this.index];
	this.currentPage.style.display='block';
	if (this.currentControl != null)
		this.currentControl.className = 'paginator-control active list-float-left';
	this.checkLoadImages();
},
checkLoadImages: function() {
	if (this.imageSets != null) {
		var imageSetIndex=this.index-1;
		if (this.imageSets[imageSetIndex] != null && !this.completedImageSets[imageSetIndex]) {
			spTmpImgSetToLoad=this.imageSets[imageSetIndex];
			window.setTimeout("spLoadDeferImgSet('" + this.paginatorId + imageSetIndex + "')", 20);
			this.completedImageSets[imageSetIndex]=true;
		}
	}
}
}
function spVideoGet(videoId) {
	if (navigator.appName.indexOf("Microsoft") != -1)
		return window[videoId];
	else
		return document[videoId];
}
function spVpPaginatorOnChangePage(element) {
	if (element == null || element.childNodes == null || element.childNodes.length == 0)
		return;
	var node=element.firstChild;
	while (node != null) {
		if (node.nodeName.toUpperCase() == "OBJECT") {
			var v=spVideoGet(node.id);
			if (v != null) {
				try {
					v.stopVideo();
					return;
				}
				catch(e) {
				}
			}
		}
		else if (node.childNodes != null && node.childNodes.length > 0)
			spVpPaginatorOnChangePage(node);
		node=node.nextSibling;
	}
}

function spVgWortCount(token) {
	document.write('<div style="display:none;"><img src="http://spiegel.met.vgwort.de/na/'+token+'" width="1" height="1" alt="" align="right" /></div>');
}
/**
 * Event handler function tests where the user clicked
 * and acts	according to this
 */
function spMouseUpEvent(e) {
	if (!e) var e = window.event;
	if (e.target) targ = e.target;
	else if (e.srcElement) targ = e.srcElement;
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode;

	if (targ.id == "spTopicBoxToggleLink_" + spHpTopicBoxCurrentElement || targ.id == "spTopicBoxToggleLinkMore_" + spHpTopicBoxCurrentElement) {
		spStopMouseEvent();
		return false;
	}
	if (spHpTopicBoxCurrentElement && targ.id == "spSubjectBox_"+spHpTopicBoxCurrentElement) {
		return false;
	}


	var isHpTopicboxDiv = false;
	while(targ != null) {
		if (spHpTopicBoxCurrentElement && targ.id == "spSubjectBox_"+spHpTopicBoxCurrentElement) {
			isHpTopicboxDiv=true;
			break;
		}
		targ = targ.parentNode;
	}

	if (!isHpTopicboxDiv) {
		spHpTopicBoxToggle(spHpTopicBoxCurrentElement, false);
		spStopMouseEvent();
	}
	return false;
}

/**
 * starts EventHandling
 */
function spStartMouseEvent(){
	if (document.addEventListener) { // DOM Level 2 Event Model
		document.addEventListener("mouseup", spMouseUpEvent, true);
	}
	else if (document.attachEvent) { // IE 5+ Event Model
		document.attachEvent("onmouseup", spMouseUpEvent);
	}
	else { // IE 4 Event Model
		document.onmouseup=spMouseUpEvent;
	}
}
/**
 * stops EventHandling
 * spOldHandler is a hack for EI4 Event Model
 */
var spOldHandler = document.onmouseup;	// Eventhandler for EI 4 StopEvent
function spStopMouseEvent() {
//	Unregister the capturing event handlers.
	if (document.removeEventListener) { // DOM Event Model
		document.removeEventListener("mouseup", spMouseUpEvent, true);
	}
	else if (document.detachEvent) { // IE 5+ Event Model
		document.detachEvent("onmouseup", spMouseUpEvent);
	}
	else { // IE 4 Event Model
		document.onmouseup = spOldHandler;
	}
}



/**
 * 
 * @return
 */
var spHpTopicBoxState=false;
function spHpTopicBoxToggle(spElementName) {
	
	if (!spHpTopicBoxState) {
		spHpTopicBoxSetDisplay(spElementName, true);
		spStartMouseEvent();
	}
	else
		spHpTopicBoxSetDisplay(spElementName, false);
}
/**
 * 
 * @param spDisplay
 * @return
 */
var spHpTopicBoxCurrentElement=null;
function spHpTopicBoxSetDisplay(spElementName, spDisplay) {
	
	spHpTopicBoxElement = document.getElementById("spSubjectBox_"+spElementName).style;
	spHpTopicBoxElement.display = (spDisplay ? "block" : "none");
	spHpTopicBoxState=spDisplay;
	spHpTopicBoxCurrentElement=spElementName
}


/**
 * Simple in_array function
 * @param haystack (Array)
 * @param needle (Object)
 * @return
 */
function spInArray(haystack, needle) {
	for (var i in haystack) {
		if (haystack[i] == needle)
			return true;
	}
	return false;
}
function spOpenPopupLayer2(classname, openerObject, headline, framelocation)  {
	var popup = document.getElementById('js-popup-layer');
	var html = '<a href="javascript:spClosePopupLayer();" class="close-button"><\/a>';
	html += '<div class="form-title">' + headline + '</div>';
	html += '<iframe id="popup-layer-iframe" src="' + framelocation + '" scrolling="no" frameborder="0"></iframe>';
	html = '<div class="popup-layer-skin">' + html + '</div>';
	popup.innerHTML = html;
	popup.className = classname;
	
	var o = 100;
	
	if (openerObject != null) {
		var oPopup   = $("#js-popup-layer").offset().top;
		var hPopup	 = $("#js-popup-layer").height();
		var oWindow  = $(document).scrollTop();
		var oElement = $(openerObject).offset().top;
		var hElement = $(openerObject).height();

		o = oElement - hPopup + hElement + 50;	// Fenster über das Ausrichtungsobjekt legen, 50px sind der Rand des Popups
		if (o < oWindow + 50) o = oWindow + 50;		// runter, wenn außerhalb des Sichtbereichs
		
	} else {
		// default
		var oWindow  = $(document).scrollTop();
		if (o < oWindow + 50) oWindow = $(window).scrollTop(0) + 50;		// scrollen, wenn außerhalb des Sichtbereichs
	}
	$("#js-popup-layer").css({"top" : o + "px"});
}

function spOpenPopupLayer3(classname, openerObject, headline, framelocation)  {
	var popup = $('#js-popup-layer');
	var closer = $('<div>')	.addClass("closer")
							.on("click", function() {spClosePopupLayer()});

	var html = '';
	if (headline) {
		html += '<div class="form-title">' + headline + '</div>';
	}
	if (framelocation) {
		html += '<iframe id="popup-layer-iframe" src="' + framelocation + '" scrolling="no" frameborder="0"></iframe>';
	}
	
	var content = 	$('<div>')	.addClass("popup-layer-skin")
								.html(html)
								.prepend(closer);	

	popup	.html(content)
			.removeClass()
		 	.addClass(classname)
		 	.addClass("closable");
	
	var x = 100;
	var y = 100;
	var w = 300;
	
	if (openerObject != null) {
		x = $(openerObject).offset().left - 5;			
		y = $(openerObject).offset().top - 5;
		w = $(openerObject).outerWidth() + 10;
	}
	popup.offset({top: y, left: x})
		 .width(w)

	return popup;
}

function spClosePopupLayer()  {
	$("#js-popup-layer")	.removeClass()
							.empty();
}

function spBestsellerShoplinkInit() {
	$('.spBestsellerEntry.shoplinked').each( function(index, elem) {
		var asin = $(elem).attr("data-asin");
		var isbn = $(elem).attr("data-isbn");
		var item = $(elem).attr("data-item");
		$(elem).append($('<div>').addClass("shopicon").html('<img src="/static/sys/v10/bestseller/warenkorb.png"></div>'));
		if (item == 'Buch') {
			$(elem).find(".cover, .shopicon, .bsttitel, .bstautor").each(function(i,e) {
				$(e)	.unbind("click")
						.bind("click", function() {
											var popup = spOpenPopupLayer3('bestseller', elem);
											var content = $(popup).find(".popup-layer-skin");
											var headline = $('<div>')	.addClass("spBestsellerHeadline")
																		.text(item + ' bestellen');
	
											var newcontent = $('<div>')	.addClass("spBestsellerEntry")
																		.append($(elem).find(".cover").clone())
																		.append($(elem).find(".bsttitel").clone())
																		.append($(elem).find(".bstautor").clone())
																		.append($(elem).find(".zus").clone());
	
											var links = $('<div>')	.addClass("spBestsellerShopLinks")
																	.append($('<div>').addClass("spBestsellerShopLink amazon")		.html($('<a>').text("Bestellen").attr("target","_blank").attr("href","http://www.amazon.de/dp/"+asin+"/ref=nosim?tag=wwwspiegelde-21&ascsubtag=bestseller")))
																	.append($('<div>').addClass("spBestsellerShopLink buchhandel")	.html($('<a>').text("Bestellen").attr("target","_blank").attr("href","https://www.buchhandel.de/buch/"+isbn+"?MVB-Kennnummer=5265725")));
	
											content.append(headline);
											content.append(links);
											content.append(newcontent);
											
											// teilweise ausserhalb des Blickfelds? Rein!
											var oPopup   = $(popup).offset().top;
											var hPopup	 = $(popup).height();
											var oWindow  = $(document).scrollTop();
											var hWindow	 = $(window).height();
											
											console.log(oPopup, hPopup, oWindow, hWindow);
											var screendiff = (oPopup + hPopup) - (oWindow + hWindow);  
											if (screendiff > 0) {
												 $('html, body').animate({ scrollTop: oPopup - hWindow + hPopup + 20}, 'slow');
											}
											oPopup   = $(popup).offset().top;
											oWindow  = $(document).scrollTop();
											if (oPopup < oWindow) {
												 $('html, body').animate({ scrollTop: oPopup-20}, 'slow');
											}
									    });
		    });
		} else {
			$(elem).find(".cover, .shopicon, .bsttitel, .bstautor").each(function(i,e) {
				$(e)	.unbind("click")
						.bind("click", function() {
											window.open("http://www.amazon.de/dp/"+asin+"/ref=nosim?tag=wwwspiegelde-21&ascsubtag=bestseller")
					    				});
		    });
		}
	});
}
function spMSisLoggedIn()  {
	return SPONgetCookie('boLIstatus') || (SPONgetCookie('digasnet.cookie.loginname') && SPONgetCookie('digasnet.cookie.passwd'));
}

function spMSLogin2(openerObject, backUrl, feature, language)  {
	var headline;
	var framelocation = spnetENV_SERVER_SSL;
	var pagename = "login.html"
	if (language == 'en') {
		framelocation += '/international/login/';
	} else {
		framelocation += '/meinspiegel/';
		language = 'de';
	}
	if (backUrl == null) {
		if (feature != null) {
			backUrl = framelocation + feature + '.html';
			if ( spMSisLoggedIn() )	{
				top.location.href = backUrl;
			} else {
				framelocation += pagename + '?feature=' + feature + '&backUrl=' + framelocation + feature + '.html';
			}
		} else {
			framelocation += pagename;
		}
	} else {
		framelocation += pagename + '?backUrl=' + escape(backUrl);
	}
	document.location.href = framelocation;
	return false;
}

function spUpdateMSLoginLinks()  {
	var $links = $(".login-links");
	var language = $links.hasClass('english') ? 'en' : 'de';
	var basepath = language == 'en' ? '/international/login' : '/meinspiegel';
	var divContainer = '';
	if ( language=='en' )	{
		if ( spMSisLoggedIn() )	{
			divContainer += '<a class="button" onclick="spMSLogout(\''+language+'\')">My SPIEGEL<\/a>';
		} else {
			divContainer += '<a class="button" onclick="spMSLogin2(null, null, null, \'en\'); return false;" href="' + spnetENV_SERVER + '/international/login/login.html">Sign in<\/a>';
		}
	} else {
		
		if ( spMSisLoggedIn() )	{
			divContainer += '<a class="button" onclick="spMSLogout(\''+language+'\'); return false;">Mein Spiegel<\/a>';
		} else {
			divContainer += '<a class="button" onclick="spMSLogin2(); return false;" href="' + spnetENV_SERVER + '/meinspiegel/login.html">Anmelden<\/a>';
		}
	}
	$links.html(divContainer);
}


function spUpdateForumLoginLinks()  {
	var $links = $("#js-default-message");
	if ( spMSisLoggedIn() )	{
		$links.hide();
	}
}

/**
 * funktion, die benutzt wird um die Passwortstärke bei Registrierung und Passwort ändern Dialogen anzuzeigen 
 * @param pwd
 * @returns {Boolean}
 */
function showStrength(pwd)
{	 							
	var result = zxcvbn(pwd);
	if (pwd.length > 0)
	{
		// score 0 bis 4
		var strengthText;
		switch (result.score)
		{
			case 0: strengthText = 'Sehr unsicher'; break
			case 1: strengthText = 'unsicher'; break
			case 2: strengthText = 'mittelm&auml;&szlig;ig'; break
			case 3: strengthText = 'sicher'; break
			case 4: strengthText = 'Sehr sicher'; break
		}

		$("#passwordStrengthBar").removeClass("bg0 bg1 bg2 bg3 bg4").addClass(function(index) {return "bg"+result.score;});
		$("#strengthText").html( strengthText );
	} else {
		$("#passwordStrengthBar").attr("class", "strengthBar bg0");
		$("#strengthText").html("");
	}
		 		
	return false;
}

// Standard-Event-Login
function spEventLoggedIn() {
//	console.log("Standard-loggedIn");
	spUpdateMSLoginLinks();
	spClosePopupLayer();
}

function spMSLogout(language) {

	var divContainer = '<span class="close-button"></span>';
	var backurl = window.location.href.replace(/(\&|#)sp\.goto\.\w+=\d+\&?/,'$1');
	backurl = backurl.replace(/(#|\&)$/,'');
	if (language == 'en') {
		divContainer += '<a href="/international/login/">My SPIEGEL</a>';
		divContainer += '<a class="logout" href="' + spnetENV_SERVER + '/international/login/logout.html?backUrl=' + escape(backurl) + '">Sign out</a>';
	}
	else {
		divContainer += '<a href="/meinspiegel/">Mein Spiegel</a>';
		divContainer += '<a class="logout" href="' + spnetENV_SERVER + '/meinspiegel/logout.html?backUrl=' + escape(backurl) + '">Abmelden</a>';
	}
	$('.login-context').html(divContainer);
	$('.login-context').show();
	$('.login-context .close-button').click(function(){
		$('.login-context').hide();
		$('.login-context').html('');
	});
}

// ready
$(document).ready(function() {
	$(document).bind('spLoggedIn', spEventLoggedIn);
});

 function spOpenSendForm(language, which, element, extraParams)  {
	// assert object for extraParams
	extraParams = $.extend({}, extraParams);
	var headline;
	var framelocation;
	if (which == 'video') {
        framelocation = spnetENV_SERVER + '/videoversand/index-' + language + '.html';
        if (language == 'en') {
            headline = 'Recommend this video by mail';
        } else {
            headline = 'Dieses Video versenden';
        }
        // inline video uses the send form of the parent, because the space inside inline iframe is usually too small
        // to ensure correct linking, pass video ID to popup explicitly
        if (extraParams.videoId && extraParams.videoId != '')
        	framelocation += '#spMetadataAssetTypeId=33&spMetadataAssetId=' + extraParams.videoId;

        spOpenPopupLayer2('js-send-video-popup-layer', null, headline, framelocation);
	}
	else if (which == 'grossbild') {
		framelocation = spnetENV_SERVER + '/empfehlen/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Recommend this picture by mail';
		} else {
			headline = 'Dieses Bild versenden';
		}
		spOpenPopupLayer2('send-form-popup-layer', null, headline, framelocation);
	}
	else if (which == 'fotostrecke') {
		framelocation = spnetENV_SERVER + '/empfehlen/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Recommend this picture by mail';
		} else {
			headline = 'Dieses Bild versenden';
		}
		spOpenPopupLayer2('send-form-popup-layer', null, headline, framelocation);
	}  
	else {
		framelocation = spnetENV_SERVER + '/artikelversand/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Send this article';
		} else {
			headline = 'Artikel versenden';
		}
		spOpenPopupLayer2('send-form-popup-layer', element, headline, framelocation);
	}
}

// Note(ACP): Die beiden Dialoge zum senden und embedden von Videos wird's bei NexxOmnia nicht mehr geben.
// Aber Artikel kann man weiterhin versenden, darum ist der Rest vom JS weiterhin (weitgehend) nötig.
function spDetectVideoContext(action){
	var getSendFormPopup = document.getElementById('send-form-popup');
	var SendFormPopupLocation = document.location.href.indexOf("videoversand");
	var EmbedVideoPopupLocation = document.location.href.indexOf("embeddialog");
	if(SendFormPopupLocation >= 0 || action == 'byFunction'){
		if(getSendFormPopup.className != 'js-send-video-form-popup'){
			getSendFormPopup.className = 'js-send-video-form-popup';
		}
	}else if(EmbedVideoPopupLocation >= 0 || action == 'byFunction'){
		if(getSendFormPopup.className != 'js-embed-video-popup-layer'){
			getSendFormPopup.className = 'js-embed-video-popup-layer';
		}
	}
}

function spSendFormSetAction(form, language)  {
	if (form.action == '') {
		var action = spnetENV_SERVER + '/artikelversand/';
		var hashParams = spGetHashParams();
		var assetId = parent.spMetadataAssetId;

        if (parent.spPageType == 'bild') {
            action = '/empfehlen/send/bild-';
            assetId = parent.spArticleId + '_' + parent.spImageId; 
        }
        else if (parent.spPageType == 'grossbild') {
            action = '/empfehlen/send/grossbild-';
            assetId = parent.spArticleId + '_' + parent.spImageId; 
        }
        else if (parent.spPageType == 'fotostrecke') {
            action = '/empfehlen/send/fotostrecke-';
            assetId = parent.spGalleryId + '_' + parent.spImageNum; 
        }
        else if (parent.spMetadataAssetTypeId == '29') {
			action += 'print/d-';
        }
        else if (parent.spMetadataAssetTypeId == '33' || (hashParams.spMetadataAssetTypeId && hashParams.spMetadataAssetTypeId == '33')) {
            action = '/video/send/video-';
            spDetectVideoContext('byFunction');
            if (hashParams.spMetadataAssetId && hashParams.spMetadataAssetId != '')
            	assetId = hashParams.spMetadataAssetId;
        }
		else {
			action += 'online/a-';
		}
		action += assetId + '-' + language + '.html';
		form.action = action;
	}
}

function spAutoOpenSendForm(language, which)  {
	var sendarticle = spGetHashParam("sp.sendarticle");
	if (sendarticle == null) return;
	spOpenSendForm(language, which, null);
}

function spOpenFeedbackForm(scrollelem, language)  {
	var headline;
	var framelocation;
	framelocation = spnetENV_SERVER + '/feedback/index-' + language + '.html';
	if (language == 'en') {
		headline = 'Letter to the editor';
	} else {
		headline = 'Feedback geben';
	}
	spOpenPopupLayer2('feedback-popup-layer', scrollelem, headline, framelocation);
}



function blogLoginCheck(fromElement) {
	if (spMSisLoggedIn()) {
		spBlogShowMessage('msg',spBlogCommentsPhrase.pruefelogin);
		var loggedIn = false;

		spAjax(spBlogCommentsPhrase.msprefix +  "forum/checkalias.json",null,function(response) {
			if (response.ajaxSuccess) {
				if (response.data.statuscode == 0) {
	   	 			spBlogOpenForm(fromElement, response.data)
	   	 		} else if (response.data.statuscode == 2) {
	   	 			spBlogLogin(fromElement);
	   	 		} else if (response.data.statuscode == 3) {
	   	 			spBlogShowMessage('err', response.data.message);
	   	 			spBlogLogin(fromElement);
	   	 		} else {
	   	 			spBlogShowMessage('err', 'Fehler - Statuscode ' + response.data.statuscode + ' - '+response.data.message);
	   	 		}
			} else {
	 			spBlogShowMessage('err', 'Ajax-Fehler: ' + response.errormessage);
			}
		});
	} else {
		spBlogLogin(fromElement);
	}
	spBlogShowMessage('msg','');
	return false;
}

function spBlogLogin(fromElement) {
	$(document).unbind("spLoggedIn");
	$(document).bind('spLoggedIn', function(){fromElement.click();});
	$(document).bind('spLoggedIn', spEventLoggedIn);
	spMSLogin2(fromElement,spStripHashParams(window.location.href)+'#sp.goto.blogcomment='+$(document).scrollTop(),null, spBlogCommentsPhrase.language);
}

function spBlogOpenForm(fromElement, forumresponse) {
	$(".js-blog-login-check").unbind('click');
	$("#js-comments-box-form-entry-submit").unbind('click').bind('click', 	function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});
	$("#js-article-comments-box-form form").unbind('submit').bind('submit', function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});

	$("#js-default-message").hide();

	if (!forumresponse.isForumuser) {
		spBlogShowMessage('msg', spBlogCommentsPhrase.ersterbeitrag);
		$("#js-comments-box-form-entry-alias").show();
		$("#js-comments-box-form-entry-alias input").val(forumresponse.suggestedAlias);
	} else {
		spBlogShowMessage('msg', spBlogCommentsPhrase.willkommen + ' ' + forumresponse.forumAlias);
	}
	fromElement.focus();
	fromElement.click();
}

function spGotoBlogComment(){
	var scroll = spGetHashParam("sp.goto.blogcomment");
	if (scroll != null) {
		scrollTo(0,scroll);
		blogLoginCheck($("#js-article-comments-box-form-subject input"));		
	}
}


function spBlogFormSubmit(form) {
	if (spMSisLoggedIn()) {
		// Submit deaktivieren
		$("#js-article-comments-box-form form").unbind('submit');
		$("#js-comments-box-form-entry-submit").unbind('click');
		$("#js-comments-box-form-entry-submit").addClass('spInaktiv');

		spBlogShowMessage('msg', spBlogCommentsPhrase.sendebeitrag);
		var formdata = $(form).serialize();	
		spAjax(spBlogCommentsPhrase.msprefix + "forum/postblogcomment.json",formdata,function(response) {
			if (response.ajaxSuccess) {
    	 		if (response.data.statuscode == 0) {
            	 	spBlogShowMessage('ok', spBlogCommentsPhrase.sendebeitragok);
            		$("#js-article-comments-box-form form").hide();
            		$("#js-default-message").hide();
    	 		} else if (response.data.statuscode == 2 || response.data.statuscode == 3) {
    	 			spBlogShowMessage('err', spBlogCommentsPhrase.loginexpired);
    	 			$("#js-default-message").show();    	 			
    	 			spBlogLogin($("#js-comments-box-form-entry-submit"));
    	 		} else if (response.data.statuscode == 5 && response.data.errors.length > 0) {
   	 				spBlogShowMessage('err', response.data.errors[0].message);
    	 		} else {
    	 			spBlogShowMessage('err', response.data.message);
    	 		}
			} else {
 				spBlogShowMessage('err', 'Ajax-Fehler: ' + response.error + ' - ' + response.text);
			}
		});
	} else {
		spBlogShowMessage('err', spBlogCommentsPhrase.loginexpired);
		$("#js-default-message").show();		
		spBlogLogin($("#js-comments-box-form-entry-submit"));
	}
	return false;
}

function spBlogShowMessage(cssClass, message) {
	if (message == '') {
		$("#js-message").html('');
	} else if (cssClass == 'err') {
		$("#js-message").html('');
		alert(message);
		// Submit wieder aktivieren
		$("#js-comments-box-form-entry-submit").unbind('click').bind('click', 	function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});
		$("#js-article-comments-box-form form").unbind('submit').bind('submit', function(event){spBlogFormSubmit($("#js-article-comments-box-form form"));});
		$("#js-comments-box-form-entry-submit").removeClass('spInaktiv');
	} else {
		$("#js-message").html('<span class="spMessageEntry_'+cssClass+'">'+message+'</span>');
	}
}

function hideComment(quote) {
	$(quote).parent().parent().find(".js-article-post-teaser").show();
	$(quote).parent().parent().find(".js-article-post-full-text").hide();
}

function showComment(quote) {
	$(quote).parent().parent().find(".js-article-post-teaser").hide();
	$(quote).parent().parent().find(".js-article-post-full-text").show();
}

function spPrepareQuotes() {
	$(".spForumQuoteHeadline").each( function() {
		var quote = $(this).html();
		quote = '[' + quote + '<a class="spForumQuoteShowLink" onclick="showForumQuotes(this);">' + spBlogCommentsPhrase.showquote + '</a>]';
		$(this).html(quote);
	});

	$(".js-article-post-teaser.js-article-post-more").each( function() {
		var teaser = $(this).html();
		teaser = teaser + '<a class="show-text-arrow plus-fa" title="' + spBlogCommentsPhrase.showcomment + '" onclick="showComment(this);"></a>';
		$(this).html(teaser);
	});

	$(".js-article-post-teaser.js-article-post-more").next().each( function() {
		var fullText = $(this).html();
		fullText = fullText + '<a class="show-text-arrow minus-fa" title="' + spBlogCommentsPhrase.hidecomment + '"onclick="hideComment(this);"></a>';
		$(this).html(fullText);
	});
}

function showForumQuotes(quote) {
	$(quote).parent().parent().find(".spForumQuoteText").css("display","block").show();
	$(quote).hide();
}


/* Paginator */

var spBCPager = function(element, forum, threadid, entries) {
	var pp = this;

	this.pager = element;
	this.step=5;
	this.entries=entries;
	this.forum = forum;
	this.threadid = threadid;
	this.pageElement = $(element).find(".js-article-comments-box-content");
	this.currentOffset=null;
	this.setPos(1);
	this.comments = false;

	$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
		$(this).bind("click", function(ev) { pp.prev() });
	});
	$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
		$(this).bind("click", function(ev) { pp.next() });
	});
	$(pp.pager).find(".js-article-comments-box-page-first").each( function() {
		$(this).bind("click", function(ev) { pp.first() });
	});
	$(pp.pager).find(".js-article-comments-box-page-last").each( function() {
		$(this).bind("click", function(ev) { pp.last() });
	});
	$(pp.pager).find(".js-article-comments-toggle-all").each( function() {
		$(this).bind("click", function(ev) { pp.toggleComments() });
	});
}

spBCPager.prototype = {
		offset: function(pos) {
			var pp = this;

			if (pos > this.entries) pos=this.entries - this.entries % this.step;
			if (pos < 1) pos=1;
			
			if (pos != this.currentOffset) {
				var url = "/fragments/community/" + this.forum + "-" + this.threadid + "-" + pos + ".html";
				$("body").addClass("spWait");
				$.ajax({
					type: "GET",
					url: url,
					success: function(data) {
								$(pp.pageElement).each(function(){
									$(this).html(data);
									spPrepareQuotes();
								});
								pp.setPos(pos);
								$("body").removeClass("spWait");

							},
					error: function(data) {
								$("body").removeClass("spWait");
							}
				});
			}
		},
		next: function() {
			this.offset(this.currentOffset + this.step);
		},
		prev: function() {
			this.offset(this.currentOffset - this.step);
		},
		first: function() {
			this.offset(1);
		},
		last: function() {
			this.offset((this.entries-1) - ((this.entries-1) % this.step) + 1);
		},
		setpage: function(page) {
			var p = parseInt(page);
			if (!isNaN(p)) {
				var newoffset = (p-1) * this.step + 1;
				if (newoffset < 1 ) this.first()
				else if (newoffset > this.entries) this.last()
				else this.offset(newoffset);
			}
		},
		setPos: function(pos) {
			var pp = this;
			if (pos == 1) {
				$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
					$(this).hide();
				});				
				$(pp.pager).find(".js-article-comments-box-page-first").each( function() {
					$(this).hide();
				});				
			} else if (pp.currentOffset == null || pp.currentOffset == 1) {
				$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
					$(this).show();
				});
				$(pp.pager).find(".js-article-comments-box-page-first").each( function() {
					$(this).show();
				});				
			}
			if (pos > pp.entries-pp.step) {
				$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
					$(this).hide();
				});				
				$(pp.pager).find(".js-article-comments-box-page-last").each( function() {
					$(this).hide();
				});				
			} else if (pp.currentOffset == null || pp.currentOffset > pp.entries-pp.step) {
				$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
					$(this).show();
				});
				$(pp.pager).find(".js-article-comments-box-page-last").each( function() {
					$(this).show();
				});
			}
			var techpos = pos-1;
			var techentries = this.entries-1;
			var seite  = (techpos - techpos % this.step) / this.step + 1;
			var seiten = (techentries - techentries % this.step) / this.step + 1;

			$(pp.pager).find("span.js-article-comments-box-page-count").each( function() {
				$(this).html(spBlogCommentsPhrase.seite + ' ' + seite + ' ' + spBlogCommentsPhrase.von + ' ' + seiten);
			});				
			this.currentOffset = pos;
		},

		toggleComments: function() {
			var pp=this;
			pp.comments = pp.comments ? false : true;
			if (pp.comments) {
				$(pp.pager).addClass('js-show-all-comments');
				$(".js-article-post-teaser.js-article-post-more").each( function() {
					$(this).hide();
				});
				$(".js-article-post-teaser.js-article-post-more").next().each( function() {
					$(this).show();
				});
				$(pp.pager).find(".js-article-comments-toggle-all").each( function() {
					$(this).html(spBlogCommentsPhrase.closecomments);
				});
			} else {
				$(pp.pager).removeClass('js-show-all-comments');
				$(".js-article-post-teaser.js-article-post-more").each( function() {
					$(this).show();
				});
				$(".js-article-post-teaser.js-article-post-more").next().each( function() {
					$(this).hide();
				});
				$(pp.pager).find(".js-article-comments-toggle-all").each( function() {
					$(this).html(spBlogCommentsPhrase.opencomments);
				});
			}
		}
}

function spReplaceCommentsBoxPageNavBarAnchors(){
	if($('.js-article-comments-box-nav > .js-forum-pager').length > 0){
		$('.js-article-comments-box-nav > .js-forum-pager').each(function(index){
		    if(index < 1){
		    	var countLinks = $(this).children('a').length;
		    	$('.js-article-comments-box-nav > .js-forum-pager').children('a').each(function(index){
		            if(index < countLinks){
		                $(this).attr('href', 'javascript:void(0);');
		            }
		    	});
			}
		});
	}
}

function spShowForumUserPage(fromElement) {
	if (spMSisLoggedIn()) {
		spAjax(spBlogCommentsPhrase.msprefix +  "forum/checkalias.json",null,function(response) {
			if (response.ajaxSuccess) {
				if (response.data.statuscode == 0) {
	   	 			document.location.href = "/forum/member-" + response.data.userId + ".html";
	   	 			return false;
	   	 		} else {
	   	 			spBlogLogin(fromElement);
	   	 		}
			} else {
	 			spBlogShowMessage('err', 'Ajax-Fehler');
			}
		});
	} else {
		spBlogLogin(fromElement);
	}
	return false;
}


//ready
$(document).ready(function() {
	$(".js-blog-login-check").bind('click', function(event){ blogLoginCheck(this); });
	$("#js-article-comments-box-form form").bind('submit', function(event){ blogLoginCheck(this); });
	spPrepareQuotes();
	$("#js-article-comments-box-form").show();
	spReplaceCommentsBoxPageNavBarAnchors();
	
	
	$('.js-article-comments-toggle-all').click(function(){
		$('.js-article-comments-toggle-all').toggleClass('plus-fa minus-fa');
	});
	
});

function epubContentToggle() {
	document.getElementById('js-epub-content-hidden').style.display = 'block';
	document.getElementById('js-epub-content-toggle').style.display = 'none';
}

function spShowMapMarker(a) {
	// zeigt Map-Marker, wenn Karte auf der Seite, ansonsten Deep-Link
	if (spMap != 'undefined') {
		document.location.hash = a.hash;
		var id = spGetHashParam('id');
		var lat = spGetHashParam('lat');
		var lng = spGetHashParam('lng');
		var zoom = spGetHashParam('zoom');
		spMap.showUserContent(id, lng, lat, zoom, true, true);
		return false;
	} else {
		return true;
	}
}

//----- social bar 10/2015: ----- 
$(document).ready(function(){
	if("ontouchstart" in document.documentElement) {
		$('div.social-button-more').on('click', function(e) {
			$(this).parent().children('.social-bar-expandx').show();
		});
		$('.social-bar-expandx').on('click', function(e) {
			$('.social-bar-expandx').hide();
		});
	}
	else {
		$('div.social-button-more').mouseenter(function() {
			$(this).parent().children('.social-bar-expandx').fadeIn("fast");
		});
		$('.social-bar-expandx').mouseleave(function() {
			$('.social-bar-expandx').hide();
		});
		$('div.social-button-more').on('click', function() {
			$(this).parent().children('.social-bar-expandx').show();
		});
		$('.social-bar-expandx').on('click', function() {
			$('.social-bar-expandx').hide();
		});
	}
	$('a.social-button-facebook').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'Facebook', 'Share',  window.location.pathname);
		e.preventDefault();
		spon_popup( $(this).attr('href'),650,425,0,0 );
		return false;
	});
	$('a.social-button-twitter').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'Twitter', 'Tweet',  window.location.pathname);
		e.preventDefault();
		spon_popup( $(this).attr('href'),550,485,0,0 );
		return false;
	});
	$('a.social-button-email').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'E-Mail', 'Share',  window.location.pathname);
	});
	$('a.social-button-googleplus').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'Google', 'Share',  window.location.pathname);
		e.preventDefault();
		spon_popup( $(this).attr('href'),600,400,0,0 );
		return false;
	});
	$('a.social-button-linkedin').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'LinkedIn', 'Share',  window.location.pathname);
		e.preventDefault();
		spon_popup( $(this).attr('href'),600,400,0,0 );
		return false;
	});
	$('a.social-button-tumblr').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'Tumblr', 'Share',  window.location.pathname);
		e.preventDefault();
		spon_popup( $(this).attr('href'),600,400,0,0 );
		return false;
	});
	$('a.social-button-pinterest').on('click', function(e) {
		if (typeof(ga) == "function") ga('send', 'social', 'Pinterest', 'Share',  window.location.pathname);
		e.preventDefault();
		var pinterest_url = $(this).attr('href');
		var og_image_url = $('meta[property=og\\:image]').attr('content');
		if(og_image_url) {
			pinterest_url = pinterest_url.replace(/media=.*&description=/, 'media='+og_image_url+'&description=');
		}
		spon_popup(pinterest_url ,750,600,0,0 );
		return false;
	});
});


/* countpixel @ iPad galleries */
function spTabletGallCounterPix(pageCount, imgId){
	spIvwReload();
	spNmReloadMergeParams({'sp.picturesid':imgId, 'sp.part':pageCount});
}



// BACKOFFICE
//#################################################################


$(document).ready(function(){

	//----- toggle Optional Fields
	
	if ( $('.ms-optional-fields-head').hasClass('active') ) {
		$('.ms-optional-fields').slideDown('slow');
	}
	
	$('.ms-optional-fields-head').on('click', function(){
		var $optFields = $('.ms-optional-fields');

		if ( $optFields.hasClass('active') ) {
			$optFields.removeClass('active').slideUp('slow');
			$('#show-optional').val('0');
			$(this).removeClass('active');
		} else {
			$optFields.addClass('active').slideDown('slow');
			$('#show-optional').val('1');
			$(this).addClass('active');
		}
	});	
})

/*
Bestseller
 */
function spBestsellerShoplinkInit2() {
	$('.content').each( function(index, elem) {
		var asin = $(elem).attr("data-asin");
		var isbn = $(elem).attr("data-isbn");
		$(elem).find(".bestseller-popup-link").each(function(i,e) {
			$(e)	.unbind("click")
					.bind("click", function() {
                                        var popup = spOpenPopupLayer3('Bestseller', elem);
                                        var content = $(popup).find(".popup-layer-skin");
                                        var popupContent = $(elem).find(".bestseller-popup-content").clone();
                                        content.append(popupContent);
                                        popupContent.css("display", "block");
                                        popup.css("display", "block");
                                        return false;
								    });
	    });
        $(elem).find(".bestseller-amazon-link").each(function(i,e) {
      			$(e)	.unbind("click")
      					.bind("click", function() {
							window.open("http://www.amazon.de/dp/"+asin+"/ref=nosim?tag=wwwspiegelde-21&ascsubtag=bestseller")
						});
      	    });
	});
}


function spPageOverscroll() {
	if(sp_webcfg_global && sp_webcfg_global.pageOverscroll) {
		var ao 		= this;
		ao.activated = false;
		ao.div 	= $("#page-overscroll-area");
		if (ao.div.length == 0) return null;
		// exclude mobile devices (window height problem)
		if (spUA == null || spUA.isMobileDevice()) return null;

		this.init = function() {
			$(window).bind("scroll.spPageOverscroll", ao.checkposition);
//			console.log("spPageOverscroll BOUND CHECKPOSITION");
			ao.div.empty();
			ao.adjustposition('init'); 
		};
		
		this.checkposition = function() {
			//console.log("spPageOverscroll checking position: ", $(window).scrollTop());

			if (!ao.activated) {
				if ($(window).scrollTop() + $(window).height()*2 > ao.div.offset().top) {
					// erst laden und aktivieren, wenn in die zweite Haelfte gescrollt wurde...
					//console.log("spPageOverscroll loading...");
					
					ao.adjustposition('checkposition');

					ao.div.addClass("grid-homepage")
					   .append(
							   		$("<div>")	.attr("id", "page-overscroll-area-outer")
							   					.load("/fragments/centerpage/page-overscroll.html", ao.activateoverscroll())
							  );

				}
			}
		};

		this.adjustposition = function(where) {
			//console.log("adjust position ("+where+")", ($(window).scrollTop() + $(window).height()), ao.div.offset().top);
 			if (($(window).scrollTop() + $(window).height()) >= ao.div.offset().top) {
				// wenn schon beim aktivieren die Position zu tief ist, auf die Startkante scrollen
				$(window).scrollTop(ao.div.offset().top - $(window).height());
				//console.log("spPageOverscroll adjust too low scrollposition... ("+where+")");
			}
		};
		
		this.activateoverscroll = function() {
			//console.log("spPageOverscroll start activation");
			
			var indicator = 	$("<div>")	.attr("id", "page-overscroll-area-level")
		   									.append($("<div>").attr("id","page-overscroll-area-level-indicator"))
		   									.append($("<div>")
		   												.attr("id","page-overscroll-area-level-text")
		   												.html("zur Startseite")
		   												.on("click", function(){
		   																	document.location.href = '/#ref=page-overscroll-click';
		   																	$("#page-overscroll-area-level").addClass("active");
		   															 })
		   											);

			ao.div.prepend(indicator);
			ao.indicatorheight = indicator.outerHeight();
			ao.indicatorInnerHeight = indicator.height();

			
			$(window).unbind('scroll.spPageOverscroll');
			window.setTimeout(function() {
				$(window).bind("scroll.spPageOverscroll", ao.checkoverscroll);
				ao.activated = true;
				//console.log("spPageOverscroll activated");
				// $(window).trigger("scroll");
				// ao.checkoverscroll();
				ao.adjustposition('activate');
			}, 200);
		};

		this.checkoverscroll = function() {
			var footerBottom = $("#footer");
			var start 	= Math.round(footerBottom.offset().top + footerBottom.outerHeight() - window.innerHeight - ao.indicatorheight/2);
			var scrollPos = $(window).scrollTop();
			var go 		= Math.round(ao.div.offset().top + ao.div.outerHeight() - window.innerHeight);
			//console.log("spPageOverscroll start",start,"bottom",bottom,"go", go);
			$("#page-overscroll-area-level").css("display", "inline-block");

			if(scrollPos >= start){
				//(console.log("spPageOverscroll scrollPos > start");
				var indicate = -195 + ((scrollPos - start) / ao.div.height()) * ao.indicatorInnerHeight;
				ao.div.find("#page-overscroll-area-level-indicator").css("background-position", "0 " + indicate + "px");
				//console.log("spPageOverscroll indicate",indicate,"indheight",ao.indicatorheight,"indinnerheight",ao.indicatorInnerHeight);
				if(scrollPos>=start+ao.indicatorheight+15) {
					//console.log("spPageOverscroll get sticky, top:", leveltop);
					ao.div.addClass("sticky");
				} else {
					//console.log("spPageOverscroll get floating");
					ao.div.removeClass("sticky");	
				}
		    
				if (scrollPos >= go) {
					$(window).unbind('scroll.spPageOverscroll');
					ao.div.find("#page-overscroll-area-level-indicator").css("background-position", "0 0");
					$("#page-overscroll-area-level").addClass("active");
					//console.log("spPageOverscroll - fired and UNBOUND");
					document.location.href = '/#ref=page-overscroll';
				}			
			} else {
		    	//console.log("spPageOverscroll not visible");
				ao.div.removeClass("sticky");	
				ao.div.find("#page-overscroll-area-level-indicator").css("background-position", "0 -200px");
		    }
		};
		
		ao.init();
	}
}


// Location-Change-Forms
function spLocationselect(select) {
	var url = $(select).val();
	window.location.href=url;
	return false;
}

// einestages - pruefen, ob Artikel bereits bewertet wurde
var spArticleRatingStorage="spArticleRating";
function spInitEtRating() {
	
	var articleid = $(".js-article-rating").attr("data-articleid");

	var canRate = true;

	var ratedArticles = getRatingStorage(spArticleRatingStorage);
	
	if (ratedArticles != null) {
		var tmprating=ratedArticles[articleid];
		if (tmprating > 0)
			canRate = false;
	}
	else {
		ratedArticles = new Object();
	}
		


	if (canRate) {

		$('.js-article-rating span').each(function(){
			var that=this;
			$(that).bind('click', function () {
				
				var rating=$(this).attr("data-id");

				onRate(articleid, rating);
				
				ratedArticles[articleid]=rating;

				if (spHasStore())
					localStorage.setItem(spArticleRatingStorage, JSON.stringify(ratedArticles));
			});
			
			$(that).parent().bind('mouseover', function () {
				$(this).parent().addClass('on-hover');
			});
			$(that).parent().bind('mouseout', function () {
				$(this).parent().removeClass('on-hover');
			});
			
		});
		
		canRate = false;
	} else {
		$('.js-article-rating span').each(function(){
			
			var that=this;
			
			$(that).unbind('click');
			$(that).parent()
				.unbind('mouseover')
				.unbind('mouseout')
				.parent().removeClass('on-hover');
			
			$(that).bind('click', function () {
				if ($('.article-rating .small-info').length > 0) {
					$('.article-rating .small-info').each(function() {
						$(this).remove();
					});
				}
				$('.article-rating').append('<span class="small-info">Sie haben diesen Artikel bereits bewertet.</span>');
			});
		});
	}
}

//einestages - Artikel Bewertungen auslesen
function spEvaluateRating(data) {

	var ratingText = 'Bewertungen';
	var averageRating = '';
	var averageRatingRounded = '';
	var tmpClass = $('.js-article-rating').attr("class").match(/average[\w-]*\b/);
	
//	$.each( data, function( key, val ) {
		averageRating = Math.round(data.averageRating * 10) / 10;
		averageRatingRounded = Math.round(data.averageRating);
		
		if(data.ratingCount) {
			if(data.ratingCount == 1) {
				ratingText = 'Bewertung';
			}
			$('.article-rating-text').text(averageRating + ' ('+ data.ratingCount + ' ' + ratingText + ')');
		} else {
			$('.article-rating-text').text('Artikel bewerten');
		}
		
		$('.js-article-rating').removeClass(tmpClass[0]);
		
		switch (averageRatingRounded) {
			case 1:
				$('.js-article-rating').addClass('average-rating-1');
				break;
			case 2:
				$('.js-article-rating').addClass('average-rating-2');
				break;
			case 3:
				$('.js-article-rating').addClass('average-rating-3');
				break;
			case 4:
				$('.js-article-rating').addClass('average-rating-4');
				break;
			case 5:
				$('.js-article-rating').addClass('average-rating-5');
				break;
			default:
				break;
		}
//	});
}

// einestages - Artikel bewerten
function onRate(articleID, rating) {
	
	var ratedArticles = getRatingStorage(spArticleRatingStorage);

	if (ratedArticles != null)
		var storedRating=ratedArticles[articleID];

	cookieprotect( function(){
						$.ajax({
							type : "POST",
							url : '/setrating/artikel/' + articleID + '-' + rating + '.json',
							dataType : "json"
						})
						
						// Artikel bewerten
						.done(function( data ) {
							$('.article-rating .small-info').remove();
							if (data.logMessage == 'REJECT') {
								$('.article-rating').append('<span class="small-info">Der Artikel wurde von Ihnen bereits bewertet.</span>');
							} else {
								$('.article-rating').append('<span class="small-info">Vielen Dank. Ihre Bewertung wurde gespeichert.</span>');
								spInitEtRating();
								spEvaluateRating(data);
							}
						})
						
						.fail(function() {
							// Artikel wurde schon bewertet
							if (storedRating > 0 ) {
								$('.article-rating .small-info').remove();
								$('.article-rating').append('<span class="small-info">Der Artikel wurde von Ihnen bereits bewertet.</span>');
							} else {
								$('.article-rating .small-info').remove();
								$('.article-rating').append('<span class="small-info">Es ist ein Fehler aufgetreten.</span>');
							}
						});
					},
					function() { 
						$('.article-rating .small-info').remove();
						$('.article-rating').append('<span class="small-info">Es ist ein Fehler aufgetreten.</span>');
					}
	);
}

/**
 * 
 * @param storageName
 * @returns
 */
function getRatingStorage(storageName) {
	if(spHasStore()) {
		var store = null;
		try {
			store = localStorage.getItem(storageName);
		} catch(e) {
			return null;
		}
		if (store != null) {
			store = $.parseJSON(store);
		}
		
		if (typeof store == "object" && store != null) {
			return store;
		}
	}
	return null;
}

function spHasStore() {
	return typeof(Storage)!=="undefined";
}/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

function Swipe(container, options) {

  "use strict";

  // utilities
  var noop = function() {}; // simple no operation function
  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution

  options = options || {};

  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    //
    touch: (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) && options.enabletouch,
    transitions: (function(temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
      return false;
    })(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element=$(container).find('.commonpager-pages')[0];
  //var element = container.children[0];
  var slides, slidePos, width, length;
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
//    width = container.getBoundingClientRect().width || container.offsetWidth;
    width = $(slides[0]).width();
    
    element.style.width = (slides.length * width) + 'px';

    // stack elements
    var pos = slides.length;
    while(pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = (pos * -width) + 'px';
        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
      }

    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index-1), -width, 0);
      move(circle(index+1), width, 0);
    }

    if (!browser.transitions) element.style.left = (index * -width) + 'px';

    container.style.visibility = 'visible';

  }

  function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

  }

  function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length;

  }

  function slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;
    
    if (browser.transitions) {

      var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to =  -direction * slides.length + to;

      }

      var diff = Math.abs(index-to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
            
      to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
      
    } else {     
      
      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {
	  
	//console.log("move: " +index + " | " +dist +" | "+speed);
    translate(index, dist, speed);
    slidePos[index] = dist;

  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration = 
    style.MozTransitionDuration = 
    style.msTransitionDuration = 
    style.OTransitionDuration = 
    style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform = 
    style.MozTransform = 
    style.OTransform = 'translateX(' + dist + 'px)';

  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;

    }
    
    var start = +new Date;
    
    var timer = setInterval(function() {

      var timeElap = +new Date - start;
      
      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;

      }

      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

    }, 4);

  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {

    interval = setTimeout(next, delay);

  }

  function stop() {

    delay = 0;
    clearTimeout(interval);

  }


  // setup initial vars
  var start = {};
  var delta = {};
  var isScrolling;      

  // setup event capturing
  var events = {

    handleEvent: function(event) {

      switch (event.type) {
        case 'touchstart': this.start(event); break;
        case 'touchmove': this.move(event); break;
        case 'touchend': offloadFn(this.end(event)); break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
        case 'resize': offloadFn(setup.call()); break;
      }

      if (options.stopPropagation) event.stopPropagation();

    },
    start: function(event) {

      var touches = event.touches[0];
      
//      options.beforestart && options.beforestart(index, slides[index], this);
      
//      move(0, -20, speed)
//      move(1, -20, speed)
//      move(2, -40, speed)
      
      // measure start values
      start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date

      };
      
      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);

    },
    move: function(event) {

      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if ( typeof isScrolling == 'undefined') {
        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling 
        event.preventDefault();

        // stop slideshow
        stop();

        // increase resistance if first or last slide
        if (options.continuous) { // we don't add resistance at the end

          translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

        } else {

          delta.x = 
            delta.x / 
              ( (!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?                      
              ( Math.abs(delta.x) / width + 1 )      // determine resistance level
              : 1 );                                 // no resistance if false
          
          // translate 1:1
          translate(index-1, delta.x + slidePos[index-1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index+1, delta.x + slidePos[index+1], 0);
        }

      }

    },
    end: function(event) {

//    	options.beforeend && options.beforeend(index, slides[index]);
    	
      // measure duration
      var duration = +new Date - start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide = 
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds = 
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;
      
      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index-1), -width, 0);
              move(circle(index+2), width, 0);

            } else {
              move(index-1, -width, 0);
            }

            move(index, slidePos[index]-width, speed);
            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
            index = circle(index+1);  
                      
          } else {
            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index+1), width, 0);
              move(circle(index-2), -width, 0);

            } else {
              move(index+1, width, 0);
            }

            move(index, slidePos[index]+width, speed);
            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
            index = circle(index-1);

          }

          options.callback && options.callback(index, slides[index]);

        } else {

          if (options.continuous) {

            move(circle(index-1), -width, speed);
            move(index, 0, speed);
            move(circle(index+1), width, speed);

          } else {

            move(index-1, -width, speed);
            move(index, 0, speed);
            move(index+1, width, speed);
          }

        }

      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)

    },
    transitionEnd: function(event) {
      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
        
        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

      }

    }

  }

  // trigger setup
  setup();

  // start auto slideshow if applicable
  if (delay) begin();


  // add event listeners
  if (browser.addEventListener) {
    
    // set touchstart event on element    
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);

  } else {

    window.onresize = function () { setup() }; // to play nice with old IE

  }

  // expose the Swipe API
  return {
    setup: function() {

      setup();

    },
    slide: function(to, speed) {
      
      // cancel slideshow
      stop();
      
      slide(to, speed);

    },
    prev: function() {

      // cancel slideshow
      stop();

      prev();

    },
    next: function() {

      // cancel slideshow
      stop();

      next();

    },
    getPos: function() {

      // return current index position
      return index;

    },
    getNumSlides: function() {
      
      // return total number of slides
      return length;
    },
    kill: function() {

      // cancel slideshow
      stop();

      // reset element
      element.style.width = 'auto';
      element.style.left = 0;

      // reset slides
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];
        slide.style.width = '100%';
        slide.style.left = 0;

        if (browser.transitions) translate(pos, 0, 0);

      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);

      }
      else {

        window.onresize = null;

      }

    }
  }

}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}// function spInitGa(p) {
//     if(!p || !p.googleanalytics || !p.googleanalytics.ignore) {
//         if( sp_webcfg_global.google_analytics != undefined && sp_webcfg_global.google_analytics == true) {
//             (function(i,s,o,g,r,a,m){
//                 i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//             })(window,document,'script','https:/'+'/www.google-analytics.com/analytics.js','ga');
//             ga('create', 'UA-26045149-1', 'auto');
//             ga("set", "anonymizeIp", true);
//             ga('set', 'dimension1', window.location.hash);
//             ga('set', 'forceSSL', true);
//         }
//     };
// }

function spDoGa(p) {
	/* Meetrics */
    if(!p || !p.meetrics || !p.meetrics.ignore) {
		if( sp_webcfg_global.meetricsMX != undefined && sp_webcfg_global.meetricsMX != '') {
			(function() {
			  var mwa = document.createElement('script');
			  mwa.type = 'text/javascript'; mwa.async = true;
			  mwa.src = ('https:' == document.location.protocol ? 'https:/'+'/' : 'http:/'+'/') + sp_webcfg_global.meetricsMX;
			  var n = document.getElementsByTagName('script')[0];
			  n.parentNode.insertBefore(mwa, n);
			})();
		}
    };
    
	/* Google Analytics */
    if(!p || !p.googleanalytics || !p.googleanalytics.ignore) {
		if( sp_webcfg_global.google_analytics != undefined && sp_webcfg_global.google_analytics == true) {
			(function(i,s,o,g,r,a,m){
				i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			 })(window,document,'script','https:/'+'/www.google-analytics.com/analytics.js','ga');
	        ga('create', 'UA-26045149-1', 'auto');
	        ga("set", "anonymizeIp", true);
			ga('set', 'dimension1', window.location.hash);
            ga('set', 'forceSSL', true);

	        if(p && p.googleanalytics && p.googleanalytics.isCenterpage)
	        {
	            spDoGoogleEnhancedEcommerce();
	        }
	
	        if(p && p.googleanalytics && p.googleanalytics.ignoreQueryParameters){
	        	ga('send', 'pageview', {'location': location.href.replace(location.search, '')});
	        }else{
	        	ga('send', 'pageview');
	        }
	        
		}
    };

	/* Outbrain */
    if(!p || !p.outbrain || !p.outbrain.ignore) {
		if(sp_webcfg_global.outbrain_vr != undefined && sp_webcfg_global.outbrain_vr == true && 'http:' == document.location.protocol) {
			var automate = (p && p.outbrain && p.outbrain.isHomepage ? p.outbrain.isHomepage : false);
			var _vrq = window._vrq = [];
			_vrq.push(['id', 768]);
			_vrq.push(['automate', automate]);
			_vrq.push(['track', function(){}]);
			(function(d, a){
				var s = d.createElement(a),
				x = d.getElementsByTagName(a)[0];
				s.async = true;
				s.src = 'http://a.visualrevenue.com/vrs.js';
				x.parentNode.insertBefore(s, x);
			})(document, 'script');
		}
    };
	
}

function spDoGoogleEnhancedEcommerce()
{
    console.log("tracking laterpay events for centerpage/homepage");
    ga('require', 'ec');
    var usedPositions = [];
    $('.js-lp-article-link').each(function (index, elem)
                                  {
                                      var position = $(elem).attr("data-lp-position");
                                      if (position != null)
                                      {
                                          var id = $(elem).attr("data-lp-article-id");
                                          var url = window.location.href;
                                          var indexBegin = url.indexOf("spiegel.de/");
                                          var indexEnd = url.indexOf("/", indexBegin + 11);
                                          if (indexBegin > -1 && indexEnd > -1)
                                          {
                                              var list = url.substring(indexBegin + 11, indexEnd);
                                          }
                                          else {
                                              list = 'home';
                                          }
                                          if($.inArray(position, usedPositions) < 0) {
                                              ga("ec:addImpression", {
                                                  "id": id,
                                                  'list': list,
                                                  'position': position
                                              });
                                              console.log("send tracking event for article " + id + ", on position " + position);
                                              usedPositions.push(position);
                                          }
                                          //eventhandler für klick auf den artikellink
                                          $(elem).click(function ()
                                                        {
                                                            ga("ec:addProduct", {
                                                                "id": id,
                                                                'list': list,
                                                                'position': position
                                                            });
                                                            ga('ec:setAction', 'click', {list: list});
                                                            ga('send', 'event', 'EC-Action', 'todetailclick', id);
                                                            console.log("send tracking event for click on article link " + id + ", on position " + position);
                                                        });
                                      }
                                  });
}/* Notifier Top- und Eilmeldungen */
function Notifier() {
	var that = this;

	that.isStarted = false;
	that.isStartable = false;
	that.needsPermission = false;

	that.notifiedList = [];
	that.notifiedCount = 0;
	that.timer = null;
	that.refreshFrequency = 60000; // ms
	that.retryFrequency = 150000; // ms
	that.retry = false;
	that.token = null;
	that.icon = '/static/sys/v12/logo/favicon/touch-icon60.png';
	that.checkTopsFirst = true;

	that.addToList = function(articles) {
		if (typeof articles == "String") {articles = [articles];}
		var notify = [];

		for (var i=0; i<articles.length; i++) {
			var aid = articles[i];
//			console.log("SUCHE "+aid+" in",that.notifiedList);
			var pos = $.inArray(aid, that.notifiedList);
			if (pos == -1) {
				that.notifiedList.unshift(aid);
				notify.push(aid);
			} else {
//				console.log("Artikel #"+aid+" schon notified...",that.notifiedList, articles);
				if (pos > 10) {
					that.notifiedList.splice(pos,1);
					that.notifiedList.unshift(aid);
//					console.log("Artikel #"+aid+" von position "+pos+" an den Anfang notifiedList verschoben",that.notifiedList);
				}
			}
		}
		while (that.notifiedList.length > 20) that.notifiedList.pop(); 
		that.saveTops();
		return notify;
	};

	that.init = function() {
		that.notificationType = that.getNotificationType();
		that.isStarted = false;
		that.isStartable = false;
		that.needsPermission = false;

		if (that.notificationType) {
			if (that.hasPermission() == null) {
				that.needsPermission = true;
				$('.top-poster-startpage-content-notifier').show();
				$('.notifierstartbutton')	
					.text('Benachrichtigungen starten')
					.removeClass('disabled')
					.click(function() {that.requestPermission(that.init)});
			} else if (that.hasPermission()) {
				that.isStartable = true;
				that.start();
				$('.notifierstartbutton')	
					.text('Benachrichtigungen sind eingeschaltet')
					.addClass('disabled')
					.unbind('click');
			} else {
				$('.notifierstartbutton')	
					.text('Benachrichtigungen sind ausgeschaltet')
					.addClass('disabled')
					.unbind('click');
//				console.log("NOTIFIER NOT STARTED (no permission)");
			}
		} else {
			$('.notifierstartbutton')	
				.text('Ihr Browser unterstuetzt diese Funktion nicht')
				.addClass('disabled')
				.unbind('click');

//			console.log("NOTIFIER NOT STARTED (Browser does not support notifications)");
		}


	
	}

	
	that.start = function() {

		// read or generate token
		that.token = sessionStorage.getItem("token");
		if (that.token == null) {
			that.token = Math.floor(Math.random()*9999999999999999) + "-" + new Date().getTime();
			sessionStorage.setItem("token",that.token);
//			console.log("NEW NOTIFIER SESSSION: ",that.token);
		} else {
//			console.log("NOTIFIER SESSSION FOUND: ",that.token);
		}
		
		// check if another instance is active
//		console.log("activeToken", localStorage.getItem("token"))
		var lastUpdate = 0; 
		var item;
		try {
			item = localStorage.getItem("token");
		} catch(e) {
			return;
		}
		
		if (item != null) {
			if (that.token != localStorage.getItem("token")) {
				// check last update - if too old, set this session active
				if (localStorage.getItem("last") != null) {
					lastUpdate = new Date().getTime() - localStorage.getItem("last"); 
					if (lastUpdate < that.refreshFrequency * 2) {
//						console.log("NOTIFIER NOT STARTED (other session active)");
						that.checkTopsFirst = false;
						that.retry();
						return;
					} else {
//						console.log("last update of active session too old ("+lastUpdate+" ms) - set this session active");
						if (lastUpdate > 21600000) {
							// letztes Update > 6h -> keine Notification beim Start
//							console.log ("letztes Update > 6h -> keine Notification beim Start");
							that.checkTopsFirst = true;
						} else {
							that.checkTopsFirst = false;
						}
					}
				} else {
//					console.log("no last update found");
				}
			} else {
//				console.log("this token is marked active");
				lastUpdate = new Date().getTime() - localStorage.getItem("last"); 
				that.checkTopsFirst = false;
			}
		} else {
//			console.log("no active token found");
		}
		
		if (that.hasPermission() == null) {
			that.requestPermission(that.start);
//			console.log("NOTIFIER NOT YET STARTED (waiting for permission)");
			return;
		}
		
		if (that.hasPermission()) {
			that.updateNotifiedList();
			var realRefreshTime = that.refreshFrequency - lastUpdate;
			if (realRefreshTime <= 0) {
				that.refresh();
			} else {
				that.timer = setTimeout(that.refresh, realRefreshTime);
			}
//			console.log("NOTIFIER STARTED! lastUpdate: "+lastUpdate+", refresh in "+ realRefreshTime +"ms");
		} else {
//			console.log("NOTIFIER NOT STARTED (no permission)");
			return;
		}
	}

	that.stop = function() {
		if (that.timer != null)  {
			that.timer = clearTimeout(that.timer);
//			console.log("NOTIFIER STOPPED!");
		}
	}
	
	that.retry = function() {
//		console.log("Retry to start notifier in "+ that.retryFrequency + " ms");
		setTimeout(function(){that.start()}, that.retryFrequency);
	}

	that.updateNotifiedList = function() {
//		console.log("updateNotifiedList");
		localStorage.setItem("token",that.token);
		var notified = localStorage.getItem("Notifier.tops");
		if (notified != null) {
			that.notifiedList = notified.split(",");
//			console.log("NOTIFIED from localStorage:" , that.notifiedList)
		}
		 if (notified == null || that.checkTopsFirst) {
			that.getTops(function(tops) {
				that.addToList(tops);
			});
//			console.log("NOTIFIED get/save:" , that.notifiedList)
		}
	}
	that.refresh = function() {
//		console.log("REFRESH");
		that.getTops(function(tops) {
			var notify = that.addToList(tops);
			for (var i=0; i<notify.length; i++) {
				var aid = notify[i];
				$.ajax({
					type: "GET",
					url: spnetENV_SERVER + "/fragments/article/a-"+aid+".json",
					success: function(data) {
								var headline = data.topic;
								if (typeof headline != 'undefined' && headline != "" && !data.topic.match(/[:?!]$/)) {
									headline += ":";
								}
								headline += " " + data.title;
								// that.notify(headline,data.teaser);
								that.notify(headline, '');
							}
				});
			}
		});
		that.timer = setTimeout(that.refresh, that.refreshFrequency);
	}

	that.getNotificationType = function() {
		try {
			localStorage.setItem("test","1");
			localStorage.removeItem("test");
		}
		catch (e) {
			return 0;
		}

		// FF hart rausnehmen
		if (spUA.isFirefox())
			return 0;

		// (FF + Chrome + Safari)
		if (typeof window.Notification != 'undefined' && typeof window.Notification.permission != 'undefined') 
			return 1;
		

		// (Safari)
		if (window.webkitNotifications) 
			return 2;

//		if ('localStorage' in window && window['localStorage'] !== null && 'sessionStorage' in window && window['sessionStorage'] !== null)
//			return 3; // Test alert
		return 0;
	}

	that.getTops = function(callback) {
//		console.log("GET TOPS...");
		$.ajax({
			type: "GET",
			url: spnetENV_SERVER + "/jsapi/notification/top.json",
			success: function(data) {
						if (typeof callback != 'undefined') callback(data.articles);
					}
		});
	}
	
	that.saveTops = function() {
		localStorage.setItem("Notifier.tops", that.notifiedList.join(","));
		localStorage.setItem("last",new Date().getTime());
//		console.log("SAVED NOTIFIEDLIST: ", that.notifiedList.join(","));
	}
	
	that.hasPermission = function() {
		var p = null;
		if (that.notificationType == 1) {
//			alert("Notificaton.permission = "+Notification.permission)
			if (Notification.permission === "granted") {
				p = true
			} else if (Notification.permission === "denied") {
				p = false;
			}
		} else if(that.notificationType == 2) {
//			alert("window.webkitNotifications.checkPermission() = "+window.webkitNotifications.checkPermission());
			if (window.webkitNotifications.checkPermission() == 0) {
				p = true
			} else if (window.webkitNotifications.checkPermission() == 2) {
				p = false;
			}
		} else if(that.notificationType == 3) {
			p = sessionStorage.getItem("hasPermission");
		}
//		console.log("PERMISSION: ", p);
		return p;
	}

	that.requestPermission = function(callback) {
//		console.log("Requesting permission for notifications.");
		if (that.notificationType == 1) {
			Notification.requestPermission(callback);
		} else if(that.notificationType == 2) {
			webkitNotifications.requestPermission(callback); 
		} else if(that.notificationType == 3) {
			var c = confirm("Moechten Sie einen Hinweis bei neuen Nachrichten auf unserer Startseite bekommen?");
			sessionStorage.setItem("hasPermission", c);
			if (callback) callback();
		}
	}
	
	that.showHp = function() {
//		console.log("Show HP");
		var loc = document.location.pathname;
		document.location.href="/#ref=notification";
		if (loc == '/') document.location.reload();
		window.focus();
	}

	that.notify = function(title, text) {
		var notification = null;
		if (that.notificationType == 1) {
			var options = {};
			options['body'] = text;
			options['icon'] = that.icon;
			
			notification= new Notification(title, options);
			notification.onclick = that.showHp;
		} else if (that.notificationType == 2) {
			notification =  window.webkitNotifications.createNotification(that.icon, title, text);
			notification.onclick = that.showHp;
			notification.show();
		} else if (that.notificationType == 3) {
			var c = confirm(title + "\n" + text + "\n\n" + "Auf der Startseite anzeigen?");
			if (c) that.showHp();
		} else {
			return;
		}
		that.notifiedCount++;
//		console.log("NOTIFY: "+notification);
	}
};

$(document).ready( function() {
	var noti = new Notifier();
	noti.init();

});/* Paginator Memberposts */

function MemberPostPaginator(element, entries, userid) {
	var pp = this;

	this.pager = element;
	this.step = 20;
	this.entries = entries;
	this.pageElement = $(element).find("#memberPostList");
	this.currentOffset = null;
	this.setPos(0);
	this.userid = userid

	$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
		$(this).bind("click", function(ev) { pp.prev() });
	});
	$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
		$(this).bind("click", function(ev) { pp.next() });
	});
}

MemberPostPaginator.prototype.offset = function(pos) {
	var pp = this;

	if (pos > this.entries) {
		pos = this.entries - this.entries % this.step;
	}
	if (pos < 0) {
		pos = 0;
	}
	
	if (pos != this.currentOffset) {
		var url = "/components/forum/memberposts-" + this.userid;
		if(pos > 0) {
			url += "-" + pos;
		}
		url += ".html";
		$("body").addClass("spWait");
		$.ajax({
			type: "GET",
			url: url,
			success: function(data) {
						pp.pageElement.replaceWith(data);
						pp.pageElement = $(pp.pager).find("#memberPostList");
						pp.setPos(pos);
						$("body").removeClass("spWait");

					},
			error: function(data) {
						$("body").removeClass("spWait");
					}
		});
	}
}

MemberPostPaginator.prototype.next = function() {
	this.offset(this.currentOffset + this.step);
}

MemberPostPaginator.prototype.prev = function() {
	this.offset(this.currentOffset - this.step);
}

MemberPostPaginator.prototype.setPos = function(pos) {
	var pp = this;
	if (pos == 0) {
		$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
			$(this).hide();
		});					
	} else if (pp.currentOffset == null || pp.currentOffset == 0) {
		$(pp.pager).find(".js-article-comments-box-page-prev").each( function() {
			$(this).show();
		});	
	}
	if (pos > pp.entries - pp.step) {
		$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
			$(this).hide();
		});					
	} else if (pp.currentOffset == null || pp.currentOffset > pp.entries - pp.step) {
		$(pp.pager).find(".js-article-comments-box-page-next").each( function() {
			$(this).show();
		});
	}		
	this.currentOffset = pos;
}

function initForumChooser() {
	$('#chooserButton').click(function() { $('#chooserList').toggle(); });
	$('body').click(
		function(e) {
			if(e.target.id != 'chooserButton') {
				$('#chooserList').hide();
			}
		}
	);
}

function initFileUploader(uploadServer, maxFilecount) {
	fileCount = 0;
	var sponMapUploadButton = $('#threadUploadButton').empty();
	sponMapUploadButton.html('<input id="fileupload" type="file" multiple="multiple" name="qqfile" />Datei ausw&auml;hlen');
	$('#fileupload').fileupload({
		url: uploadServer + '/upload.php',
		dataType: 'json',
		dropZone: null,
		pasteZone: null,
		done: function (e, data) {
			if(data.result.success == true || data.result.success == 1) {
				var errorContainer = $('#forumNewThreadDialog .result');
				errorContainer.empty();
	    		errorContainer.hide();
				
				fileCount++;
				if (fileCount <= maxFilecount) {
					htmlid = "imageUpload-" + data.result.filename;
					var uploadDiv = $('<div id="' + htmlid + '" class="uploadthumb"></div>').appendTo('#uploadedImages');
					var close = $('<a>').appendTo(uploadDiv);
					close.click(function(event) {
						event.preventDefault();
						$(this).parent().remove();
						fileCount--;
						enableUpload();
					});
					
					uploadDiv.append('<img id="' + data.result.filename + '" src="' + uploadServer + "/public/tmpthumb/" + data.result.filename + '"/>');
				} else {
					fileCount = maxFilecount;
				}
				if(fileCount == maxFilecount) {
					disableUpload();
				}
			} else if (data.result.error.length > 0) {
				var errorContainer = $('#forumNewThreadDialog .result');
	    		errorContainer.html(data.result.error);
	    		errorContainer.css('float', 'left');
	    		errorContainer.show();
			}
			setTimeout(function() { $('#progress .bar').css('width', '0%'); }, 500);
        },
        submit: function(e, data) {
        	if(fileCount >= maxFilecount) {
				return false;
			}
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .bar').css('width', progress + '%');
        }
	});
	$('#fileupload').fileupload('option', {
	    xhrFields: {
	        withCredentials: true
	    }
	});
	$('#fileupload').fileupload(
	    'option',
	    'redirect',
	    location.protocol + '//' + location.hostname + '/result/postresult.html?%s'
	);
}

function disableUpload() {
	$('#fileupload').prop('disabled', true);
	$('#threadUploadButton').css({ color: '#ccc', cursor: 'auto' });
}

function enableUpload() {
	$('#fileupload').prop('disabled', false);
	$('#threadUploadButton').css({ color: '#900', cursor: 'pointer' });
}

function openPostGallery(postid, index) {
	var gallery = $('#postgallery' + postid);
	gallery.css("display","block");
	
	var scrollable = gallery.find('.scrollable').data('scrollable');
	var count = scrollable.getSize();
	var pos = scrollable.getIndex() + 1;
	
	gallery.find('#postGalleryPosition').html(pos + " von " + count);
	if (count > 1) {
		gallery.find('#postGalleryPrev').click(function(){ scrollable.prev(); });
		gallery.find('#postGalleryNext').click(function(){ scrollable.next(); });				
	} else {
		gallery.find('#postGalleryPrev').empty();
		gallery.find('#postGalleryNext').empty();
	}
				
	$("#postGalleryDialog").overlay({
		fixed: false,
		left: 0, // "center",
		top: 102,
		close: $(".closeDialog"),
		closeOnClick: true,
		load: true,
		mask: {
			color: "#000",
			loadSpeed: 200,
			opacity: 0.6
		},
		onClose: function(e) {
			gallery.find('#postGalleryPrev').unbind("click");
			gallery.find('#postGalleryNext').unbind("click");
			$(".postGallery").css("display","none");
		}
	});
	$("#postGalleryDialog").data("overlay").load();
	scrollable.seekTo(index);
}/* allgemeine Tools */
function HashParams() {
	var loc=(document.location+"");
	this.url = loc;
	this.hashQueryString = null;
	this.params = {};
	
	var pos=loc.indexOf("#");

	if (pos > -1) {
		this.hashQueryString = loc.substring(pos+1, loc.length);
		this.url 		 	 = loc.substring(0,pos);
		
		var pairs=this.hashQueryString.split("&");
		for (var i=0; i < pairs.length; i++) {
			var kv=pairs[i].split("=");
			if (kv.length == 2) 
				this.params[kv[0]]=decodeURIComponent(kv[1]);
		}
	}

	this.exist = function(which) {
		if (typeof which == 'undefined') {
			return (Object.keys(this.params).length > 0);
		} else {
			return (typeof this.params[which] != 'undefined');
		}
	}
	
	this.value = function(which) {
		return this.params[which];
	}
}/* allgemeiner Forms-Processor */
function FormsProcessor(id) {
	var that = this;

	that.id = id;
	that.processor = $("#"+id);
	that.form = $("#"+id+" form.forms-processor-form");
	that.box = $("#"+id+" .forms-messagebox")
	that.config = {};

	that.okmessage = '<strong>Ihre Nachricht wurde versandt</strong>';
	that.errormessage = '<strong>Ihre Nachricht konnte nicht versandt werden!</strong> Ein unbekannter Fehler ist aufgetreten';
	
	that.init = function(jsonconfig) {
		if (jsonconfig) {
			that.config = jsonconfig;
			if (jsonconfig.errormessage)
				that.errormessage = jsonconfig.errormessage;
			if (jsonconfig.okmessage)
				that.okmessage = jsonconfig.okmessage;
		}
		
		$(that.form).bind("submit", function(e) { that.send(); return false; });
		$(that.form).find("select.update").bind("change", function(e) { that.update(this) });
		$(that.form).find("textarea").val(function(index, value){ return $.trim(value); });
		
		// Pre-Select?
		var hashparams = new HashParams();
		if (hashparams.exist()) {
			$(that.form).find("select").each(function() {
				var elem = $(this);
				var name = elem.attr("name");
				if (elem.is(":visible")) {
					if (hashparams.exist("fp-"+name)) {
						elem.find("option[data-value='" + hashparams.value("fp-"+name) + "']").attr('selected',true);
						elem.trigger("change");
					}
				}
			});
		}
	}

	that.update = function(element) {

		$(that.box).empty()
		   .removeClass("messagebox")
		   .removeClass("ok")
		   .removeClass("error");
			
		var active_formpart = $(element).parent();
		var todo = $(active_formpart).find('select.update option:selected');
		
		// Felder trimmen
		$(that.form).find("textarea, input").val(function(index, value){ return $.trim(value); });
			
		// formparts nach dem aktuellen ausblenden und resetten
		var fparts = $(active_formpart).find('~ .formpart');
		$(fparts).hide();
		$(fparts).find(".error").removeClass("error");
		$(fparts).find('select.update').prop('selectedIndex',0);
		$(fparts).find('select.update option.info').show();
						
		// Display-Eigenschaften
		var allparts = $(that.form).find('.formpart');
		$(allparts).find(".formelement").removeClass("show")
									  	.removeClass("hide")
	  									.removeClass("req")
	  									.removeClass("noreq");
														
		var info = that.config;	

		$(allparts).filter(":visible").each(function(i, part) {
			var partkey = $(part).find('select.update option:selected').attr("data-value");
			$(part).find(".infobox").remove();
			if (partkey == null) {
				return true; // continue;
			}
			info = info[partkey];
			if (info == null) {
				return false; // break
			}
			if (info["display"]) {
				$.each(info["display"], function(key, value) {
					$('.formelement[data-id='+key+']').addClass(value ? 'show' : 'hide');
			    });
			}
			if (info["require"]) {
			    $.each(info["require"], function(key, value) {
			    	$('.formelement[data-id='+key+']').addClass(value ? 'req' : 'noreq');
			    });
			}
	
			if (info["infobox"]) {
				$(part).append($('<div>').addClass("infobox").html(info["infobox"]));
			}
	
		});
		
		// bitte waehlen etc. ausblenden
		if (!$(todo).hasClass("info")) {
			$(active_formpart).find('select.update option.info').hide();
		}
		
		// Folge-Formpart einblenden
		if ($(todo).attr("data-formpart")) {
			$(that.form).find('.formpart[data-id='+$(todo).attr("data-formpart")+']').show();
		}
		if ($(todo).attr("data-action") == "send") {
			$(that.form).find('.formpart[data-id=send]').show();
		}
		
		// wenn letztes element aus dem Sichtbereich geraten ist: scrollen
		var screenY	= $(document).scrollTop();
		var screenH = $(window).height();
		var screenE = $(element).offset().top;
		if (screenE < screenY+100) {
			$('html, body').animate({
			    scrollTop: screenE-100
			});
		}
		return false;
	};

	
	that.send = function() {
	
		that.disable();

		$(that.box).empty()
		   .removeClass("messagebox")
		   .removeClass("ok")
		   .removeClass("error");
		
		var postdata = {};
		var errordata = {};
		var isError = false;
		
		// check required
		var allparts = $(that.form).find('.formpart').filter(":visible");
		
		// trimmen
		$(allparts).find("textarea, input").val(function(index, value){ return $.trim(value); });
		// error reset
		$(allparts).find(".error").removeClass("error");
		

		$(allparts).each(function(i, part) {
			var fields = $(part).find(".required, .req").not(".noreq").find("[name]").filter(":visible");
			$(fields).each( function(i, field) {
				if ($(field).val() == '') {
					$(field).addClass("error")
					 		.focus(function() {$(this).removeClass("error")});
					isError = true;
				}
			});
		});
		if (isError) {
			$(that.box)	.addClass("messagebox error")
						.html(that.errormessage);
			that.enable();
		} else {

			$(allparts).each(function(i, part) {
				var fields = $(part).find("[name]").filter("input, textarea").filter(":visible");
				$(fields).each( function(i, field) {
					if ($(field).attr("type") == 'checkbox') {
						postdata[$(field).attr("name")] = $(field).is(':checked') ? 'ja' : 'nein';
					} else {
						if (postdata[$(field).attr("name")]) 
							postdata[$(field).attr("name")] += "\n\n" + $(field).val();
						else 
							postdata[$(field).attr("name")] = $(field).val();
					}
				});
			});

			// Konfiguration auslesen
			postdata["forms-config-xmlid"]  = $(that.processor).attr("data-forms-config-xmlid");
			postdata["forms-config-formid"] = that.id;
			
			var formsConfigPath = "";
			$(allparts).find('select.config').each(function(i, elem) {
				if (formsConfigPath != "") formsConfigPath +="&";
				formsConfigPath += $(elem).attr("name") + "=" + $(elem).find("option:selected").attr("data-value"); 
			});
			postdata["forms-config-path"] = formsConfigPath; 

			var formsConfigLabel = "";
			$(allparts).find("[name][data-label]").each(function(i, elem) {
				if (formsConfigLabel != "") formsConfigLabel +="&";
				formsConfigLabel += $(elem).attr("name") + "=" + $(elem).attr("data-label"); 
			});
			postdata["forms-config-label"] = formsConfigLabel;
			
			// reCaptcha
			$(that.form).find('#g-recaptcha-response').each(function(i, field) {
				postdata["g-recaptcha-response"] = $(field).val();				
			}); 
			
			$.ajax({
				type : "POST",
				url : $(that.processor).attr("data-forms-action"),
				contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				dataType : "json",
				data: postdata
			})
			
			.done(function( data ) {
							if (data.errormessage) {
								$(that.box).addClass("messagebox error")
										   .html(data.errormessage);
								if (typeof grecaptcha != 'undefined') grecaptcha.reset();
							} else if (data.rawmail) {
								$(that.box).addClass("messagebox ok")
										   .html("Auf diesem System werden keine Mails verschickt..<br />Hier die Mail samt Headern:<br /><br />")
										   .append($('<pre>').text(data.rawmail));
							} else {
								$(that.box).html(that.okmessage)
										   .addClass("messagebox ok");
								$(that.form).remove();
							};
							that.enable(); 

			})
			
			.fail(function(data) {
							var msg;
							var resp = data.responseText;
							if (resp.status.errormessageinternal) {
								msg = resp.status.errormessageinternal;
							} else {
								msg = 'Ein Fehler ist aufgetreten.';
							}
							$(that.box)	.html('<strong>'+msg+'</strong>')
										.addClass("messagebox error");

							that.enable();

			});
		}
		return false;
	};
	
	that.disable = function() {

		$(that.processor).addClass("wait")
						 .find("input[type=submit]").addClass("disabled");
	}
	that.enable = function() {

		$(that.processor).removeClass("wait")
		 				 .find("input[type=submit]").removeClass("disabled");
		
		if ($(that.box).hasClass("messagebox")) {

			// Mitte des Screens
			var screenY	= $(document).scrollTop();
			var screenH = $(window).height();
			var boxY    = $(that.processor).offset().top;
			var boxH    = $(that.processor).height();

			var bestPos = boxY - (screenH-boxH)/2;
			if (bestPos < 0) bestPos = 0;
			if (bestPos > boxY) bestPos = boxY -100;

			if (screenY > boxY || screenY+screenH < boxY+boxH+100) {
				$('html, body').animate({
				    scrollTop: bestPos
				});
			}
		}

	}

};

var SPLaterpay = (function ()
{
    var ecLoaded = false;

    $(document).ready(function ()
    {
        addTrackingInfo();
    });

    return {
        callback: {
            hasAccess: function ()
            {
                console.log("[SP+] User has access");
                deobfuscateText();
                handleTrackingEvent("User has Access", null);
            },
            handleTrackingEvent: function (eventAction, done, data)
            {
                return handleTrackingEvent(eventAction, done, data);
            }
        }
    };

    function deobfuscateText()
    {
        $('p.js-spiegelplus-obfuscated-intro').each(function (index, elem)
                               {
                                   $(elem).remove();
                               });
        $('p.obfuscated').each(function (index, elem)
                               {
                                   replaceTextContent(elem);
                                   $(elem).removeClass("obfuscated").addClass("deobfuscated");
                               });
        $('div.obfuscated-content').each(function (index, elem)
                                         {
                                             $(elem).removeClass("obfuscated-content").addClass("deobfuscated-content");
                                         });
    }

    function replaceTextContent(elem)
    {
        $(elem).contents()
                .filter(function ()
                        {
                            return this.nodeType === 3;
                        })
                .replaceWith(function ()
                             {
                                 var obfuscatedText = this.data;
                                 var deobfuscatedText = "";
                                 for (var i = 0; i < obfuscatedText.length; i++)
                                 {
                                     var charValue = obfuscatedText.charCodeAt(i);
                                     if (charValue == 177)
                                     {
                                         deobfuscatedText += '&';
                                     }
                                     else if (charValue == 178)
                                     {
                                         deobfuscatedText += '!';
                                     }
                                     else if (charValue == 180)
                                     {
                                         deobfuscatedText += ';';
                                     }
                                     else if (charValue == 181)
                                     {
                                         deobfuscatedText += '=';
                                     }
                                     else if (charValue == 32)
                                     {
                                         deobfuscatedText += ' ';
                                     }
                                     else if (charValue > 33)
                                     {
                                         deobfuscatedText += String.fromCharCode(charValue - 1);
                                     }
                                 }
                                 return deobfuscatedText;
                             })
                .end()
                .filter(function ()
                        {
                            return this.nodeType === 1
                            		&& !$(this).hasClass("text-link")
                                    && !$(this).hasClass("text-link-int")
                                    && !$(this).hasClass("text-link-ext")
                                    && !$(this).hasClass("lp-text-link-int")
                                    && !$(this).hasClass("lp-text-link-ext")
                                    && !$(this).hasClass("spCelink");
                        })
                .each(function ()
                      {
                          replaceTextContent(this);
                      });
    }

    function handleTrackingEvent(eventAction, done, data)
    {
        console.log("[SP+] handle tracking event " + eventAction);
        if (typeof ga == "undefined")
        {
            (function(i,s,o,g,r,a,m){
          			i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          		 })(window,document,'script','https:/'+'/www.google-analytics.com/analytics.js','ga');
          		ga('create', 'UA-26045149-1', 'auto');
                ga("set", "anonymizeIp", true);
        }
        if (!ecLoaded)
        {
            ga('require', 'ec');
            ecLoaded = true;
        }
        var elem = $("body");
        var id = $(elem).attr("data-lp-article-id");
        var category = $(elem).attr("data-lp-channel");
        var brand = $(elem).attr("data-lp-brand");
        var title = JSON.stringify($(".article-title").text());

        if ("Paid Content Replacement Show" == eventAction)
        {
            ga('ec:addProduct', {
                'id': id,
                'name': title,
                'category': category,
                'brand': brand,
                'variant': ''
            });
            ga('ec:setAction', 'detail');
            ga('send', 'pageview');
        }
        else if ("Paid Content Purchase" == eventAction)
        {
            var price = data.price.EUR;
            ga('ec:addProduct', {
                'id': id,
                'name': title,
                'category': category,
                'brand': brand,
                'variant': '',
                'price': price,
                'quantity': 1
            });
            ga('ec:setAction','checkout', {
                'step': 1
            });
            ga('send', 'event', 'EC-Action', 'checkout', id);
        }
        else if ("Paid Content Purchase Complete" == eventAction)
        {
            $(document).ready(function ()
              {
                  var elem = $("body");
                  var id = $(elem).attr("data-lp-article-id");
                  var category2 = $(elem).attr("data-lp-channel");
                  var brand = $(elem).attr("data-lp-brand");
                  var coupon = 'credit';
                  var isWochenpass = 'N';
                  var price = data.price.EUR;
                  var googlePrice = 0;
                  if (typeof price != "undefined")
                  {
                      googlePrice = price / 100.0;
                  }
                  if (data.purchaseType == 'sis')
                  {
                      console.log("[SP+] wochenpass purchased ");
                      coupon = 'nocredit';
                      isWochenpass = 'Y';
                  }
                  var title = JSON.stringify($(".article-title").text());
                  if(typeof ga != "undefined")
                  {
                      ga('ec:addProduct', {
                          'id': id,
                          'name': title,
                          'category': category2,
                          'brand': brand,
                          'variant': '',
                          'price': googlePrice,
                          'quantity': 1
                      });
                      ga('ec:setAction', 'purchase', {
                          'id': id,
                          'affiliation': 'Laterpay',
                          'revenue': googlePrice,
                          'coupon': coupon
                      });
                      ga('send', 'event', 'EC-Action', 'conversion', id);
                      console.log("[SP+] ga called with price " + googlePrice);
                  }
                  //send request to aws for realtime dashboard
                  var aubApiUrl = spnetENV_SERVER_AUBAPI + "?callback=?&cid=" + id + "&p=" + price + "&wp=" + isWochenpass;
                  var gaCookieValue = $.cookie("_ga");
                  if (typeof gaCookieValue != "undefined")
                  {
                      aubApiUrl = aubApiUrl + "&gaid=" + gaCookieValue;
                  }
                  if (typeof aditionUser != "undefined") {
                      console.log( "[SP+] adition user id is " + aditionUser);
                      aubApiUrl = aubApiUrl + "&usrid1=" + aditionUser;
                  }
                  console.log("[SP+] calling aubapi url " + aubApiUrl);
                  $.getJSON(aubApiUrl, new function(){
                        console.log("[SP+] call to aubapi successfull ");
                  })
                          .success(function() {
                              console.log( "[SP+] call to aubapi successfull (second output)" );
                            })
                          .error(function() {
                              console.log( "[SP+] error while calling aubapi" );
                          });
              });


        }
        else if ("User has Access" == eventAction)
        {
            ga('send', 'event', 'EC-Action', 'view', id);
        }
        if (done != null)
        {
            done();
        }

        return false;
    }

    function addTrackingInfo()
    {
        $('.listbox-kacheln .js-lp-article-link').each(function (index, elem)
                               {
                                   var parent = $(elem).parent();
                                   var position;
                                   if(parent.hasClass("full"))
                                   {
                                       position = "full";
                                   }
                                   else if(parent.hasClass("half") && parent.hasClass("left"))
                                   {
                                       position = "half-left";
                                   }
                                   else if(parent.hasClass("half") && parent.hasClass("right"))
                                   {
                                       position = "half-right";
                                   }

                                   var str = $(elem).attr("href");
                                   var begin = str.lastIndexOf('-a-');
                                   var end = str.lastIndexOf('.html');
                                   var id = str.slice(begin + 3, end);

                                   ga("ec:addImpression", {
                                       "id": id,
                                       'list': 'Artikel Empfehlung',
                                       'position': position
                                   });
                                   console.log("[SP+] send tracking event for article empfehlung " + id + ", on position " + position);
                                   //eventhandler für klick auf den artikellink
                                   $(elem).click(function ()
                                                 {
                                                     ga("ec:addProduct", {
                                                         "id": id,
                                                         'list': 'Artikel Empfehlung',
                                                         'position': position
                                                     });
                                                     ga('ec:setAction', 'click', {list: 'Artikel Empfehlung'});
                                                     ga('send', 'event', 'EC-Action', 'todetailclick', id);
                                                     console.log("[SP+] send tracking event for click on article link in Artikel Empfehlung, id:" + id + ", on position " + position);
                                                 });
                               });
    }

})();

var SPLaterpayCallbackHasAccess = function ()
{
    return SPLaterpay.callback.hasAccess();
};

var SPLaterpayCallbackTrackingEvent = function (eventAction, done, data)
{
    return SPLaterpay.callback.handleTrackingEvent(eventAction, done, data);
};




// 

// 
function spCounterContentainer(contentainerid) {
//	spCounter('/count/contentainer/0,,' + contentainerid + ',00.html');
}

//

// "slick" slider library -> no longer in Delivery
$.fn.slick = function() {
	if (console && console.warn)
		console.warn('Call to old "slick" JS library - please remove!');
	return false;
};
// "iScroll" div-overflow scrolling workaround for iOS devices -> no longer in delivery
iScroll = function() {
	if (console && console.warn)
		console.warn('Call to old "iScroll" JS library - please remove!');
	return false;
};

// still used by some files on static, to open videos on button-click
function spOpenVideo(e, videoId) {
	location.href = '/video/video-' + videoId + '.html';
}

// used by somewhat asset @ videoCP
function spClientIsIDevice() {
	return spUA.isIDevice();
}

// ABD-Status deprecated mit 8.20
function spGetAbdStatus() {
	return -9;
};

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
// 
// 
// 
// 

(function(){
    $(document).ready(function() {
        // 
        initSlider($(".js-slider-footer"), 5);   		// 
        initSlider($(".js-video-slider"), 4);          	// 
        
        $(".js-slider-cuponation ul.bxslider").bxSlider({
        	 minSlides: 2,
        	 maxSlides: 2,
        	 slideWidth: 380,
        	 slideMargin: 20,
        	 responsive: false,
        	 auto: true,
        	 pause: 5000,
             prevText: '<i class="fa fa-angle-left fa-3x"></i>',
             nextText: '<i class="fa fa-angle-right fa-3x"></i>'
        });
        
        $(".js-listbox-slider").each(function() {
        	var elem = $(this);
        	elem.find("ul.bxslider").bxSlider({
		       	minSlides: 1,
		    	maxSlides: 1,
		    	slideWidth: 520,
	            prevText: '<i class="fa fa-angle-left fa-2x"></i>',
	            nextText: '<i class="fa fa-angle-right fa-2x"></i>',
	            onSlideAfter: function($slideElem) {
					spIvwReload();
	   				spNmReloadMergeParams({"sp.df" : $(elem).attr('data-count-df')});
	            }
        	});
        });
        
        /**
         * 
         * 
         * 
         * 
         */
        function initSlider($slider, slidesAtOnce) {
            var $sliderWrapper = $slider.find('.bxslider'),
                lazyloaded = false;

            var options = {
                speed: 999,
                slideMargin: 5,
                minSlides: slidesAtOnce,
                maxSlides: slidesAtOnce,
                slideWidth: 312,   // no strict value (adapts to space), but still mandatory for multiple slides at once!
                prevText: '<i class="fa fa-angle-left fa-3x"></i>',
                nextText: '<i class="fa fa-angle-right fa-3x"></i>',
                onSlideBefore: function($slideElem) {
                    if (lazyloaded) return;
                    // if slider contains any lazy-loaded images, make sure to force loading before slide,
                    // because the slide "clones" that make looped sliders possible will otherwise remain un-lazy-loaded
                    $slideElem.parent().find('img.js-lazy').each(function() {
                        var src = $(this).data('original');
                        if (typeof src != 'undefined' && src !== '') {
                            $(this).attr('src', src);
                            $(this).removeClass('js-lazy');
                        }
                    });
                    lazyloaded = true;
                }
            };

            // check if any empty ad positions are inside slider elements & remove those, so that the slider is consistent
            $slider.find('.adition').each(function() {
                if (!$(this).children(':not(script)').length)
                    $(this).parents('.slider_item').first().remove();
            });

            // also make sure to remove any videos that are not working on mobile devices
            spIpadRemoveOldVideolinks();
            var itemsPerSlides=slidesAtOnce;
            var callbacks = {
                	onVideoChanged:function(oldVideoId, newVideoId){
                        $sliderWrapper.find('.slider_item').removeClass('item_active');
                        var currentSliderItem = $sliderWrapper.find('.slider_item:not(.bx-clone)[data-video="'+newVideoId+'"]');
                        currentSliderItem.addClass('item_active');
                        var index = $sliderWrapper.find('.slider_item:not(.bx-clone)').index(currentSliderItem);
                        var first = $sliderWrapper.getCurrentSlide(slidesAtOnce) * itemsPerSlides;
                        var firstNext = $sliderWrapper.getCurrentSlide(slidesAtOnce) * itemsPerSlides + itemsPerSlides;
                        if(index < first || index >= firstNext)
                        	$sliderWrapper.goToSlide(Math.floor(index/itemsPerSlides)); 
                	}};
            // when a detail video container is present, we're dealing with a video slider & need more treatment
            if ($slider.find('.slider_detail').length > 0) {
                var preventIvw = false;
                $slider.find('.slider_detail').one('click', function() {
                    var videoId = $(this).find(".panel").data("video");
                    var playlist = jQuery.makeArray($sliderWrapper.find('.slider_item:not(.bx-clone)[data-video="'+videoId+'"]').nextAll().map(function(index, elm){return $(elm).data("video")}));
                    spGetVideoDataAndInsertPlayer( "js-video-slider-video",  Number(videoId), true, 860, true, true, playlist, callbacks);

                    
                    // in case of autoplay, this first play of the big video must not be tracked!
                    if (preventIvw)
                        preventIvw = false;
                    else
                        spTrackIvwVideo();
                });

                // on video centerpage, autoplay of big featured video is desired
                if (window.videosliderAutoplay) {
                    preventIvw = true;
                    $slider.find('.slider_detail .panel').trigger('click');
                }

                $sliderWrapper.find('.slider_item').on('click', function() {
                	// findet alle Videos, die im Slider nach diesem kommen
                	var playlist = jQuery.makeArray($(this).nextAll().map(function(index, elm){return $(elm).data("video")}))
                	       .concat(jQuery.makeArray($(this).prevAll().map(function(index, elm){return $(elm).data("video")})).reverse());
                    // don't restart already active video
                    if ($(this).hasClass('item_active')) return false;

                    // videos on slider thumbanils can always be tracked, because those will never autoplay
                    spTrackIvwVideo();

                    // move marker of active video to this one
                    $sliderWrapper.find('.slider_item').removeClass('item_active');
                    $(this).addClass('item_active');

                    // instantiate new player with proper video in detail container
                    // (params: wrapperElemId, videoId, showAds, embedWidth, autoplay, showEndScreen)
                    spGetVideoDataAndInsertPlayer( "js-video-slider-video", Number($(this).data("video")), true, 860, true, true, playlist, callbacks);
                }).first().addClass('item_active');
            }
            $sliderWrapper.bxSlider(options);
        }

    });


}());
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
