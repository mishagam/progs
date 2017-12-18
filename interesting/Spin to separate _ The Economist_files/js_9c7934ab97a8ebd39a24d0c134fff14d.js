/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = true;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  // Execute all of them.
  jQuery.each(Drupal.behaviors, function() {
    this(context);
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim(xmlhttp.responseText)) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message.replace(/\n/g, '<br />');
}

// Global Killswitch on the <html> element
$(document.documentElement).addClass('js');
// Attach all behaviors.
$(document).ready(function() {
  Drupal.attachBehaviors(this);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
/* global Econ, googletag */

window.Econ = Econ || {};
Econ.gpt = Econ.gpt || {};
Econ.gpt.preRender = Econ.gpt.preRender || {};
Econ.gpt.postRender = Econ.gpt.postRender || {};

(function ($) {
  "use strict";
  if (window.GPTservicesEnabled === true) {
    return;
  }
  window.GPTservicesEnabled = true;
  var initGoogleTags = function() {
    /**
     * There are situations where the cmd tag has not been loaded yet.
     * So, we do a short timeout if we find the pubads service is
     * not yet available.
     */
    if (typeof googletag === "undefined" || typeof googletag.pubads === "undefined") {
      var initFunc = initGoogleTags;
      setTimeout(initFunc, 10);
      return;
    }

    $.each(Econ.gpt.attach, function(i, objf) {
      objf(googletag);
    });
  };

  initGoogleTags();
})(jQuery);

;
(function(window) {
  'use strict';

  // Create a namespace to shield our functions.
  var Econ = window.Econ = window.Econ || {},
      document = window.document,
      $ = window.jQuery,
      Drupal = window.Drupal,
      overlays = [],
      overlayShowing = false;

  // Overlay framework.
  Econ.showOverlay = function(initFunction) {
    Econ.queueOverlay(initFunction);
    // We are a loaded document, so just queue their item and call displayOverlay.
    if (window.document.readyState === "interactive" || window.document.readyState === "complete") {
      Econ.displayOverlay();
    }
  };

  // Expose the overlayShowing var.
  Econ.overlayIsShowing = function() {
    return overlayShowing;
  };

  Econ.queueOverlay = function(initFunction) {
    var weight = 0;
    if (arguments.length >= 2) {
      weight = Number(arguments[1]);
    }
    overlays.push({initFunction: initFunction, weight: weight});
  };
  // This orders the overlay and displays it.
  Econ.displayOverlay = function() {
    if (overlayShowing) {
      return !overlayShowing;
    }
    var highestOverlay, i = 0, removeIdx = 0;
    if (overlays.length === 0) {
      return;
    }
    // Order the overlays by weight.
    highestOverlay = overlays[0];
    for (i = 1; i < overlays.length; i++) {
      // Set the < if you want the first one (FIFO) of the same weight to win, else <= for the last one (LIFO) to win.
      if (overlays[i].weight < highestOverlay.weight) {
        highestOverlay = overlays[i];
        removeIdx = i;
      }
    }
    // Call the overlays function. We place in a try/catch as a 3rd party could use this and put in bad code.
    try {
      highestOverlay.initFunction();
      overlayShowing = true;
      overlays = overlays.splice(removeIdx, 1);
      return !overlayShowing;
    }
    catch (e) {
      return null;
    }
  };

  // Copy value from a field to textarea
  Econ.insertToTxtarea = function(textarea, val) {
    var sel, t_start, t_end, val_start, val_end;
    if (document.selection) {
      sel = document.selection.createRange();
      textarea.focus();
      sel.text = val;
      return;
    }
    if (textarea.selectionStart || textarea.selectionStart === 0) {
      t_start = textarea.selectionStart;
      t_end = textarea.selectionEnd;
      val_start = textarea.value.substring(0, t_start);
      val_end = textarea.value.substring(t_end, textarea.value.length);
      textarea.value = val_start + val + val_end;
    }
    else {
      textarea.value += val;
    }
  };


  // Create the main validateForm object.
  Econ.validateForm = function(submitBtn) {
    this.submitBtn = submitBtn;
    this.error = function(msg) {
      return '<span class="error-msg">' + msg + '</span>';
    };
    this.errorSelector = '.error-msg';
  };

  // Create the textareaMaxlength prototype.
  Econ.validateForm.prototype.textareaMaxlength = function(field, maxlength) {
    var errorMsg = this.error('You have exceeded ' + maxlength + ' characters.'),
        errorSelector = this.errorSelector,
        submitBtn = this.submitBtn,
        textLength;
    field.keyup(function() {
      var $this = $(this),
              parent = $this.parent();
      textLength = $(this).val().length;
      if (textLength > maxlength) {
        $(errorSelector, parent).remove();
        // Display an error if you type more than maxlength characters.
        $this.before(errorMsg);
        // Disable submit btn to avoid multiple submissions.
        submitBtn.attr('disabled', 'disabled');
      } else {
        $(errorSelector, parent).remove();
        submitBtn.attr('disabled', '');
      }
    });
    return this;
  };

  // Create the emptyForm prototype.
  Econ.validateForm.prototype.emptyForm = function(field) {
    var errorMsg = this.error('This field is required.'),
        errorSelector = this.errorSelector,
        submitBtn = this.submitBtn,
        elmLength;
    return submitBtn.click(function() {
      var fieldParent = field.parent();
      if (field.length) {
        elmLength = $.trim(field.val()).length;
        if (elmLength > 0) {
          $(errorSelector, fieldParent).remove();
        } else {
          if (!$(errorSelector, fieldParent).length) {
            field.before(errorMsg);
          }
          return false;
        }
      }
      return true;
    });
  };

  // Return true = touch based devices.
  Econ.isTouchDevice = function() {
    return (window.ontouchstart !== undefined || window.navigator.msMaxTouchPoints);
  };

  // Return touchstart  || click according to the device supported event.
  Econ.addTouchStartEvent = function() {
    var touchEvent;
    if (window.ontouchstart !== undefined) {
      touchEvent = 'touchstart';
    }
    if (window.navigator.msMaxTouchPoints) {
      touchEvent = 'click';
    }
    return touchEvent;
  };

  // Return true if the object passed is empty. jQuery from version 1.4 has implemented the isEmptyObject(object) method
  // (http://api.jquery.com/jQuery.isEmptyObject/) when/if we update the jQuery library this function can be replaced
  // with the isEmptyObject method.
  Econ.isEmptyObject = function(o) {
    var p;
    for (p in o) {
      if (o.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  };

  // Includes a javascript file in another js file. It use the ajax method in sync
  // mode (note async = false). This because we need to be sure that the file is
  // loaded before moving to the rest of the script execution. The downside
  // of course is that if the file doesn't exists the page will be stack (js
  // single threaded).
  Econ.includeJsFile = function(script) {
    $.ajax({
      url: script,
      dataType: "script",
      async: false,
      error: function() {
        throw new Error("Could not load script " + script);
      },
      cache: false
    });
  };

  /**
   * Append a js file via <script> to the <head>.
   *
   * @param src the source of the js file.
   * @param id
   *   The id to assign to the <script> tag to avoid to add multiple times the
   *   same file.
   */
  Econ.appendJSFileHeader = function(src, id) {
    var js, d = document, s = 'script', fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.src = src;
    js.id = id;
    fjs.parentNode.appendChild(js, fjs);
  };

  // Create a character counter to append to text and textarea fields.
  Drupal.behaviors.charCount = function(context) {
    // Pass the selectors to the function via Drupal add_js.
    var fieldsSettings = (Drupal.settings.charCount !== undefined) ? Drupal.settings.charCount.targets : false;

    // Return the number of characters.
    function countChars(chars, maxVal) {
      var countedChars;
      // Remove all the HTML tags and HTML entities.
      chars = chars.replace(/<[a-zA-Z][^<>]*?>/g, '').replace(/&nbsp;|&#160;/gi, ' ');
      countedChars = chars.length;
      if (maxVal) {
        countedChars = (chars.length > maxVal) ? '<span style="color:#ff0000">' + countedChars + '</span>' : countedChars;
      }
      return countedChars;
    }
    // Append the counter to the field.
    function appendChars($elm, target_id, maxVal) {
      $elm.keyup(function() {
        // Get the current chars counter.
        var counterBox = $(".counter-box-" + target_id);
        // Update the chars counter box with the new chars value.
        counterBox.empty().append("Chars: " + countChars($(this).val(), maxVal));
      });
    }

    if (fieldsSettings) {
      $.each(fieldsSettings, function(k, v) {
        var $elm = $(v[0], context),
        // Pass the maxValue via drupal. The Max value will spceify the number of chars
        // e specific field may contain. When the max value is riched the counter will
        // turn red but it will NOT truncate or blocked the field.
            maxVal = v[1];
        $($elm).each(function() {
          var $this = $(this), target_id, counterBox;
          if (($this.attr('type') === 'text') || $this.is('textarea')) {
            target_id = $this.attr('id');
            counterBox = '<div class="counter-box">';
            counterBox += '<span class="counter-box-' + target_id + '" style="margin-left: ' + ($this.width() - 100) + 'px">Chars: ' + countChars($this.val(), maxVal) + '</span>';
            counterBox += '</div>';
            // Create the chars counter box.
            if (!$('span.counter-box-' + target_id).length) {
              $this.after(counterBox);
              appendChars($this, target_id, maxVal);
            }
          }
        });
      });
    }
  };

  // Utility function that look for the data-href-redirect attribute and use the
  // attribute's value to redirect the page. Please not that to redirect to external
  // site you need to use the full URL (including http://).
  Econ.dataHrefRedirect = $(function() {
    var hrefRedSelector = $('[data-href-redirect]');
    hrefRedSelector.click(function(e) {
      var thisHref = $(this).attr('data-href-redirect');
      e.preventDefault();
      // Open in a new tab is ctrl/cmd is pressed together with the mouse click.
      if (e.metaKey) {
        window.open(thisHref, '_blank');
      }
      else {
        window.location.href = thisHref;
      }
    });
  });

  // Utility functions for browser versions.
  Econ.browserOlder = function(name, ver) {
    return ($.browser[name] && parseFloat($.browser.version) < ver);
  };
  Econ.browserNewer = function(name, ver) {
    return ($.browser[name] && parseFloat($.browser.version) > ver);
  };

  // Generates a grey overlay on the page.
  Econ.generateOverlay = function(/*settings*/) {
    var h = $(document).height(),
        w = $(document).width(),
        overlay = $('<div class="ec-overlay"></div>');
    overlay.css({
      'height': h,
      'width': w
    });
    $('body').append(overlay);
  };

  // Returns true if an element has scrolled into view.
  Econ.isScrolledIntoView = function (elem) {
    var $elem = $(elem),
        $window = $(window),
        docViewTop = $window.scrollTop(),
        docViewBottom = docViewTop + $window.height(),
        elemTop = $elem.offset().top,
        elemBottom = elemTop + $elem.height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  };

}(window));

// Below are shims for various latest ECMA features.
// This is a shim for Array::forEach.
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn, scope) {
    'use strict';
    var i, len;
    for (i = 0, len = this.length; i < len; ++i) {
      if (this.hasOwnPreperty(i)) {
        fn.call(scope, this[i], i, this);
      }
    }
  };
}
;
// Create a namespace to shield our functions.
var Economist = Economist || {};

Economist.debug = function() {
  return document && document.cookie.indexOf('ec_log') !== -1;
};

if (Economist.debug()) {

  Economist.console = Economist.console || {

    console_api: ['log', 'dir', 'error', 'trace'],

    register_function: function(fn) {
      if (typeof console === "undefined") {
        console = {};
      }
      if (typeof console[fn] === "undefined") {
        console[fn] = function() {};
      }
      if (typeof console !== "undefined" && typeof console[fn] === "function") {
        this[fn] = function() {
          return console[fn].apply(console, arguments);
        };
      }
    },

    init: function() {
      var i, len = this.console_api.length;
      for (i = 0; i < len; i++) {
        this.register_function(this.console_api[i]);
      }
    }

  };

  Economist.console.init();
  Economist.console.log('Economist console active');

} else {

  Economist.console = {
    log: function(msg) {},
    dir: function(obj) {},
    error: function(msg, obj) {},
    trace: function() {}
  };
}
;
// Create a namespace to shield our functions.
var Economist = Economist || {};

Economist.analytics = Economist.analytics || {};

Economist.analytics.omnitureTools = {
  stripQuotes: function(str) {
    return str.replace(/["']/g, "");
  },
  normalize: function(str) {
   return str.replace(/[^a-zA-Z0-9_]+/, '_');
  },
  clean: function(str) {
    return this.normalize(this.stripQuotes(str.toLowerCase()));
  }
};
;

/**
 * jQuery plugin to convert ISO 8601 timestamps to a human readable form.  All timestamps
 * are assumed to be UTC.
 *
 * Usage:
 * <span class="ec_timeago" title="2010-08-06T13:43:46-00:00">anything here (it will be replaced)</span>
 *
 * $(".ec_timeago").ec_timeago({ ... settings ... });
 *
 * Output:
 * <span class="ec_timeago" title="2010-08-06T13:43:46-00:00">3 hours 15 minutes ago</span>
 * 
 * --------------------------------------------------------------------------------
 * | Condition                    | Syntax               | Example                |
 * --------------------------------------------------------------------------------
 * | TIME < 1 hr                  | xx mins ago          | 5 mins ago             |
 * | 1 hr < TIME < 4 hrs          | xx hrs xx mins ago   | 2 hrs 24 mins ago      |    
 * | TIME > 4 hrs                 | MMM DDth, hh:mm      | July 24th, 23:11       |
 * | TIME > this year             | MMM DDth YYYY, hh:mm | July 24th 2009, 23:11  |
 * --------------------------------------------------------------------------------
*/
(function($) {

  var MINUTE = 60;
  var HOUR = 60 * 60;
  var DAY = HOUR * 24;
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  /**
   * Convert a Date object into a human readable representation.
   */
  var timeago = function(then, settings) {
    var now = new Date(),
        nowUTC = now - (now.getTimezoneOffset() * 60000),
        today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
        yesterday = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1),
        sunday = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - now.getUTCDay()), 
        diff = parseInt((now - then) / 1000),
        hours = Math.floor(diff / HOUR),
        minutes = Math.floor((diff - (hours * HOUR)) / MINUTE);
    
    // X mins ago
    if (diff < HOUR)
      return settings.strings.minutesAgo
        .replace("mm", minutes)
        .replace("mins", (minutes == 1 ? "min" : "mins"));
      
    // X hours X mins ago
    else if (diff < (4 * HOUR))
      return settings.strings.hoursAgo
        .replace("hh", hours)
        .replace("mm", minutes)
        .replace("hours", (hours == 1 ? "hour" : "hours"))
        .replace("mins", (minutes == 1 ? "min" : "mins"));
    
    // Month Day, hh:mm
    else if (then.getUTCFullYear() == now.getUTCFullYear())
      return substitute(then, settings.strings.monthsAgo);

    // Month Day Year, hh:mm
    else
      return substitute(then, settings.strings.date);
  };
  
  /**
   * Returns the appropriate numerical suffix for a given number
   */
  function suffix(d) {
    d = String(d);
    return d.substr(-(Math.min(d.length, 2))) > 3 && d.substr(-(Math.min(d.length, 2))) < 21 ? "th" : ["th", "st", "nd", "rd", "th"][Math.min(Number(d) % 10, 4)];
  }
  
  /**
   * Convert a time format string into a time string
   */
  var substitute = function(date, string) {
    string = string.replace("mm", date.getUTCMinutes() > 9 ? date.getUTCMinutes() : "0" + date.getUTCMinutes());
    string = string.replace("hh", date.getUTCHours() > 9 ? date.getUTCHours() : "0" + date.getUTCHours());
    string = string.replace("MMM", MONTHS[date.getUTCMonth()]);
    string = string.replace("MM", MONTHS[date.getUTCMonth()].substr(0, 3));
    string = string.replace("ddd", DAYS[date.getUTCDay()]);
    string = string.replace("dd", date.getUTCDate() + suffix(date.getUTCDate()));
    string = string.replace("YYYY", date.getUTCFullYear());
    return string;
  };
  
  // From http://github.com/rmm5t/jquery-timeago/blob/master/jquery.timeago.js
  var parse = function(iso8601) {
    var s = $.trim(iso8601);
    s = s.replace(/\.\d\d\d/,""); // remove milliseconds
    s = s.replace(/-/,"/").replace(/-/,"/");
    s = s.replace(/T/," ").replace(/Z/," UTC");
    s = s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
    return new Date(s);
  };
  
  /**
   * jQuery ec_timeago plugin
   */
  $.fn.ec_timeago = function(settings) {
    var defaults = {
      refresh: 60000,
      prefix: "",
      suffix: "",
      strings: {
        minutesAgo: "mm mins ago",
        hoursAgo:   "hh hours mm mins ago",
        time:       "hh:mm",
        yesterday:  "Yesterday, hh:mm",
        thisWeek:   "ddd, hh:mm",
        monthsAgo:  "MM dd, hh:mm",
        date:       "MM dd YYYY, hh:mm"
      }
    };
    
    settings = $.extend(defaults, settings);
    
    this.each(function() {
      var $this = $(this),
          datetime = $this.attr("datetime") != undefined ? $this.attr("datetime") : $this.attr("title");
      $this.text(settings.prefix + timeago(parse(datetime), settings) + settings.suffix);

      if (settings.refresh) {
        setInterval(function() {
          $this.text(settings.prefix + timeago(parse(datetime), settings) + settings.suffix);
        }, settings.refresh);
      }
    });
  
    return this;
  };

})(jQuery);
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 
/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
 
/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
;
jQuery.JSON = {
  useHasOwn : ({}.hasOwnProperty ? true : false),
  pad : function(n) {
    return n < 10 ? "0" + n : n;
  },
  m : {
    "\b": '\\b',
    "\t": '\\t',
    "\n": '\\n',
    "\f": '\\f',
    "\r": '\\r',
    '"' : '\\"',
    "\\": '\\\\'
  },
  encodeString : function(s){
    if (/["\\\x00-\x1f]/.test(s)) {
      return '"' + s.replace(/([\x00-\x1f\\"])/g, function(a, b) {
        var c = m[b];
        if(c){
          return c;
        }
        c = b.charCodeAt();
        return "\\u00" +
        Math.floor(c / 16).toString(16) +
        (c % 16).toString(16);
      }) + '"';
    }
    return '"' + s + '"';
  },
  encodeArray : function(o){
    var a = ["["], b, i, l = o.length, v;
    for (i = 0; i < l; i += 1) {
      v = o[i];
      switch (typeof v) {
        case "undefined":
        case "function":
        case "unknown":
          break;
        default:
          if (b) {
            a.push(',');
          }
          a.push(v === null ? "null" : this.encode(v));
          b = true;
      }
    }
    a.push("]");
    return a.join("");
  },
  encodeDate : function(o){
    return '"' + o.getFullYear() + "-" +
    pad(o.getMonth() + 1) + "-" +
    pad(o.getDate()) + "T" +
    pad(o.getHours()) + ":" +
    pad(o.getMinutes()) + ":" +
    pad(o.getSeconds()) + '"';
  },
  encode : function(o){
    if(typeof o == "undefined" || o === null){
      return "null";
    }else if(o instanceof Array){
      return this.encodeArray(o);
    }else if(o instanceof Date){
      return this.encodeDate(o);
    }else if(typeof o == "string"){
      return this.encodeString(o);
    }else if(typeof o == "number"){
      return isFinite(o) ? String(o) : "null";
    }else if(typeof o == "boolean"){
      return String(o);
    }else {
      var self = this;
      var a = ["{"], b, i, v;
      for (i in o) {
        if(!this.useHasOwn || o.hasOwnProperty(i)) {
          v = o[i];
          switch (typeof v) {
            case "undefined":
            case "function":
            case "unknown":
              break;
            default:
              if(b){
                a.push(',');
              }
              a.push(self.encode(i), ":",
                v === null ? "null" : self.encode(v));
              b = true;
          }
        }
      }
      a.push("}");
      return a.join("");
    }
  },
  decode : function(json){
    return eval("(" + json + ')');
  }
};
;
/**
 * Recommend on 'nodes' and on comments.
 */
Drupal.behaviors.ec_vote = function(context) {
  $('.comment_recommend a, .pt-recommend a', context).click(function(e) {
    var $this = $(this);
    var elmParent= $this.parent();
    e.preventDefault();
    var rec_url = (elmParent.hasClass('comment_recommend')) ?  '&mode=ajax' : '/ajax';
    rec_url = $(this).attr("href") + rec_url;
    $.ajax({
      type: "GET",
      url: rec_url,
      beforeSend: function(){
        elmParent.addClass('ajax-loader');
      },
      success: function(rec_nr){
        elmParent.removeClass('ajax-loader');
        $('div span', elmParent).text(rec_nr);
        $this.replaceWith('<span class="recommend recommended">Recommended</span>');
      }
    });
  });

  // Editorially feature / un-feature a comment.
  $('.editor-feature-comment a', context).click(function(e) {
    var $this = $(this);
    var elmParent= $this.parent();
    e.preventDefault();
    feature_url = $(this).attr("href");
    $.ajax({
      type: "POST",
      data: {mode: "ajax"},
      url: feature_url,
      beforeSend: function(){
        elmParent.addClass('ajax-loader');
      },
      success: function(rec_nr){
        rec_nr = parseInt(rec_nr);
        elmParent.removeClass('ajax-loader');
        if (rec_nr) {
          $this.text("Un-feature");
          $this.parents('article:first').addClass('featured-comment');
        }
        else {
          $this.text("Feature");
          $this.parents('article:first').removeClass('featured-comment');
        }
      }
    });
  });
};
(function(){var g=1;var h=2;var i=3;var j=4;var k=true;var l=function(b,c,d){var e=b[c];var f;if(d.type==g)f=function(){var a=e.apply(this,arguments);return d.value.apply(this,[a,c])};else if(d.type==h)f=function(){d.value.apply(this,[arguments,c]);return e.apply(this,arguments)};else if(d.type==j)f=function(){return d.value.apply(this,arguments)};else if(d.type==i){f=function(){var a={object:this,args:arguments};return d.value.apply(a.object,[{arguments:a.args,method:c,proceed:function(){return e.apply(a.object,a.args)}}])}}f.unweave=function(){b[c]=e;pointcut=b=f=e=null};b[c]=f;return f};var m=function(a,b){var c=(typeof(a.target.prototype)!='undefined')?a.target.prototype:a.target;var d=[];if(b.type!=j&&typeof(c[a.method])=='undefined'){for(var e in c){if(c[e]!=null&&c[e]instanceof Function&&e.match(a.method)){d[d.length]=l(c,e,b)}}if(d.length==0)throw'No method: '+a.method;}else{d[0]=l(c,a.method,b)}return k?d:d[0]};jQuery.aop={after:function(a,b){return m(a,{type:g,value:b})},before:function(a,b){return m(a,{type:h,value:b})},around:function(a,b){return m(a,{type:i,value:b})},introduction:function(a,b){return m(a,{type:j,value:b})},setup:function(a){k=a.regexMatch}}})();;
(function($, Drupal) {

Drupal.jsonify = {

  /**
   * Performs an AJAX GET request on the URL returning
   * the results as JSON.  If a callback is supplied, the 
   * request is asynchronous. If not, the request is synchronous.
   */
  get: function(url, callback) {
    if (typeof callback == "function") {
      $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
          callback(data);
        },
        error: function() {
          callback(false);
        },
        dataType: "json"
      });
    }
    else {
      var result;
      
      $.ajax({
        async: false,
        type: "GET",
        url: url,
        success: function(data) {
          result = data;
        },
        error: function(data) {
          result = false;
        },
        dataType: "json"
      });
      
      return result;
    }
  },
  
  load: function(type, id, callback) {
    var urls = {
      node: Drupal.settings.basePath + "jsonify/node/" + id,
      comment: Drupal.settings.basePath + "jsonify/comment/" + id
    };
    
    if (type in urls) {
      return Drupal.jsonify.get(urls[type], callback);
    }
    else {
      throw Drupal.t("Jsonify Error: Unsupported type: @type. Supported types: node, comment.", {'@type': type});
    }
  }
};

})(jQuery, Drupal);
;
(function ($) {

/**
 * Open Mollom privacy policy link in a new window.
 *
 * Required for valid XHTML Strict markup.
 */
Drupal.behaviors.mollomPrivacy = function (context) {
  $('.mollom-privacy a', context).click(function () {
    this.target = '_blank';
  });
};

/**
 * Attach click event handlers for CAPTCHA links.
 */
Drupal.behaviors.mollomCaptcha = function (context) {
  $('a.mollom-switch-captcha', context).click(getMollomCaptcha);
};

/**
 * Fetch a Mollom CAPTCHA and output the image or audio into the form.
 */
function getMollomCaptcha() {
  // Get the current requested CAPTCHA type from the clicked link.
  var newCaptchaType = $(this).hasClass('mollom-audio-captcha') ? 'audio' : 'image';

  var context = $(this).parents('form');

  // Extract the Mollom session id from the form.
  var mollomSessionId = $('input.mollom-session-id', context).val();

  // Retrieve a CAPTCHA:
  $.getJSON(Drupal.settings.basePath + 'mollom/captcha/' + newCaptchaType + '/' + mollomSessionId,
    function (data) {
      if (!(data && data.content)) {
        return;
      }
      // Inject new CAPTCHA.
      $('.mollom-captcha-content', context).parent().html(data.content);
      // Update session id.
      $('input.mollom-session-id', context).val(data.session_id);
      // Add an onclick-event handler for the new link.
      Drupal.attachBehaviors(context);
      // Focus on the CATPCHA input.
      $('input[name="mollom[captcha]"]', context).focus();
    }
  );
  return false;
}

})(jQuery);
;
// $Id: og.js,v 1.9.2.3 2010/01/24 14:44:56 amitaibu Exp $

// Content type form
Drupal.behaviors.og_content_type = function() {
  // Disable the group limit textarea if the content type is not a standard group post
  $('input[name="og_content_type_usage"]').click(function(){
    if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
      $('#edit-og-max-groups').attr('disabled','disabled');
    } else {
      $('#edit-og-max-groups').removeAttr('disabled');
    }
  });
  
  // Initial check to see if content type is standard group post
  if (!$('#edit-og-content-type-usage-group-post-standard').attr('checked')) {
    $('#edit-og-max-groups').attr('disabled','disabled');
  };
}


Drupal.verticalTabs = Drupal.verticalTabs || {};

Drupal.verticalTabs.og_nodeapi = function() {
  var values = [];
  $('.vertical-tabs-og_nodeapi #edit-og-groups :selected')
    .each(function (i, selected) {
      values[i] = $(selected).text();
    });

  return values.join(', ');
}

Drupal.verticalTabs.og = function() {
  var type = $('.vertical-tabs-og input[type=radio]:checked').val();
  
  switch (type) {
    case 'group':
      return Drupal.t('Group node');
      break;
      
    case 'omitted':
      return Drupal.t('May not be posted into a group.');
      break;
      
    case 'group_post_standard':
      return Drupal.t('Standard group post');
      break;
      
    case 'group_post_wiki':
      return Drupal.t('Wiki group post');
      break;
  }
}
;
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;
$(document).ready(function(){  
        
  $(".ec-article-lightbox").click(function(e){
    e.preventDefault();  
    
    var add_width_main = 40;
    var add_width_sub = 20;
    var add_extra_height = 0;

    // Add an overlay grey area on top of the DOM strycture after the body.
    $("#page").before("<div id='articleOverlay'></div>");
    // Set the height of the overlay grey area to spread on all the visible area.
    $("#articleOverlay").height(document.body.clientHeight);
    // Get the html for the image
    var getImage = $(this).html();

    // Create the overlay box.
    var overlayBox = '<div id="articleImgContainer"><div id="articleimageWrapper">';
    overlayBox += '<div class="image-instr clearfix"><p>You can move this image</p><span class="lightbox-close"></span></div>' + getImage;
    overlayBox += '<div class="clearfix"><span class="over-image-source"></span><span class="over-image-caption"></span></div>';
    overlayBox += '</div></div>';

    // append the overlay box to the body.
    $("body").append(overlayBox);    
    
    // Remove the enlarge.
    $("#articleimageWrapper img").next().remove();
    // Remove any inline styles.
    $('#articleimageWrapper img').attr('style', '');
    
    // Grab the source if available and append it to the overlayBox.
    if ($(this).prev().html()){
      $("span.over-image-source").html($(this).prev().html());
    }
    // Grab the caption if available and append it to the overlayBox.
    if ($(this).next().html()){
      $("span.over-image-caption").html($(this).next().html());
      var add_extra_height = 10;
    }
    
    // Place the overlay box in the center of the screen.
    $("#articleImgContainer").css("top", $(window).scrollTop() + 90 );
    $("#articleImgContainer").css("left", (($(window).width()/2) - ($("#articleimageWrapper img").attr("width")/2) - 20))

    // If the image is less then 180px width increase the size the overlayBox.
    if ($("#articleimageWrapper img").attr("width") < 180){
      add_width_main = 80;
      add_width_sub = 60;
      $("#articleimageWrapper div span.over-image-source").css("margin-right", add_width_sub/2);
      $("#articleimageWrapper div span.over-image-caption").css("margin-left", add_width_sub/2);
    }
    // If the image is wider then the viewport it will be resized to fit in the screen.
    if ($("#articleimageWrapper img").attr("width") > $(window).width()){
      var imageToResize = $("#articleimageWrapper img");
      var maxWidth = $(window).width() - 100;
      resizeImage(imageToResize, maxWidth);
      $("#articleImgContainer").css("left", (($(window).width()/2) - (resizeImage(imageToResize, maxWidth)/2) - 20))
    }
    
    $("#articleImgContainer").css("width", ($("#articleimageWrapper img").attr("width") + add_width_main) )
    $("#articleimageWrapper").css("width", ($("#articleimageWrapper img").attr("width") + add_width_sub) )
    $("#articleImgContainer").css("height", ($("#articleimageWrapper img").attr("height") + 40 + add_extra_height) )
    $("#articleimageWrapper").css("height", ($("#articleimageWrapper img").attr("height") + 20) )
    
    // Close the overlay if either the grey area or the close icon is clicked.
    $("#articleOverlay").click(function(){$("#articleImgContainer").remove(); $(this).remove()});

    $("span.lightbox-close").click(function(){$("#articleImgContainer").remove(); $("#articleOverlay").remove()});
    
    // Add the drag functionality.
    $("#articleImgContainer").bind("drag", function(event){$(this).css({top: event.offsetY,left: event.offsetX});});
  });     
})

/**
  *
  * Used to resize the image keeping the proportions
  *
  * @imageToResize
  * jQuery selector for the image.
  *
  * @maxWidth
  * Maximum width for the image to resize.
  *
  */

function resizeImage(imageToResize, maxWidth) {
  if ($(imageToResize).height() > $(imageToResize).width()) {
    var h = maxWidth;
    var w = Math.ceil($(imageToResize).width() / $(imageToResize).height() * maxWidth);
  }
  else {
    var w = maxWidth;
    var h = Math.ceil($(imageToResize).height() / $(imageToResize).width() * maxWidth);
  }
  $(imageToResize).css({ height: h, width: w });
  return w;
}
;
/* globals Econ */
(function(){
  "use strict";
  // This will call the init function of the overlays.
  // We put this in it's own JS file because ec_base.js is loaded way to early.
  Drupal.behaviors.economistOverlays = function (context) {
    if (document == context) {
      Econ.displayOverlay();
    }
  };
})();
;
var js_rolling = function(box) {
  if (box.nodeType == 1) {
    this.box = box;
  }
  else {
    this.box = document.getElementById(box);
  }
  this.is_rolling = false;
  this.mouseover_pause = true;
  this.direction = 1;
  this.children =  null;
  this.move_gap = 1;
  this.time_dealy = 100;
  this.time_dealy_pause = 1000;
  this.time_timer = null;
  this.time_timer_pause = null;
  this.mouseover = false;
  this.init();
  this.set_direction(this.direction);
}
js_rolling.prototype.init = function() {
  this.box.style.position = '';
  this.box.style.overflow = 'hidden';
  var children = this.box.childNodes;
  for(var i = (children.length - 1); 0 <= i; i--) {
    if (children[i].nodeType == 1) {
      children[i].style.position = 'relative';
    }
    else {
      this.box.removeChild(children[i]);
    }
  }
  var thisC = this;

  this.box.onmouseover = function() {
    if (!thisC.mouseover_pause) {
      return;
    }
    thisC.mouseover = true;
    if (!thisC.time_timer_pause) {
      thisC.pause();
    }
  }
  this.box.onmouseout = function() {
    if (!thisC.mouseover_pause) {
      return;
    }
    thisC.mouseover = false;
    if (!thisC.time_timer_pause) {
      thisC.resume();
    }
  }
}
js_rolling.prototype.set_direction = function(direction) {
  this.direction = direction;
  if (this.direction == 2 || this.direction == 4) {
    this.box.style.whiteSpace = 'nowrap';
  }
  else {
    this.box.style.whiteSpace = 'normal';
  }
  var children = this.box.childNodes;
  for (var i = (children.length-1); 0 <= i; i--) {
      if (this.direction == 1) {
        children[i].style.display = 'block';
      }
      else if (this.direction == 2) {
        children[i].style.textlign = 'right';
        children[i].style.display = 'inline';
      }
      else if (this.direction == 3) {
        children[i].style.display = 'block';
      }
      else if (this.direction == 4) {
        children[i].style.display = 'inline';
      }
  }
  this.init_element_children();
}
js_rolling.prototype.init_element_children = function() {
  var children = this.box.childNodes;
  this.children = children;
  for (var i = (children.length - 1); 0 <= i; i--) {
      if (this.direction == 1) {
        children[i].style.top = '0px';
      }
      else if (this.direction == 2) {
        children[i].style.left= '-' + this.box.firstChild.offsetWidth + 'px';
      }
      else if (this.direction == 3) {
        children[i].style.top= '-' + this.box.firstChild.offsetHeight + 'px';
      }
      else if (this.direction == 4) {
        children[i].style.left = '0px';
      }
  }
}
js_rolling.prototype.act_move_up = function() {
  for(var i = 0, m = this.children.length; i < m; i++) {
    var child = this.children[i];
    child.style.top = (parseInt(child.style.top) - this.move_gap) + 'px';
  }
  if ((this.children[0].offsetHeight + parseInt(this.children[0].style.top)) <= 0) {
    this.box.appendChild(this.children[0]);
    this.init_element_children();
    this.pause_act();
  }
}
js_rolling.prototype.move_up = function() {
  if (this.direction != 1 && this.direction != 3) {
    return false;
  }
  this.box.appendChild(this.children[0]);
  this.init_element_children();
  this.pause_act();
}
js_rolling.prototype.act_move_down = function() {
  for(var i = 0,m = this.children.length; i < m; i++) {
    var child = this.children[i];
    child.style.top = (parseInt(child.style.top) + this.move_gap) + 'px';
  }
  if (parseInt(this.children[0].style.top) >= 0) {
    this.box.insertBefore(this.box.lastChild, this.box.firstChild);
    this.init_element_children();
    this.pause_act();
  }
}
js_rolling.prototype.move_down = function() {
  if (this.direction != 1 && this.direction != 3) {
    return false;
  }
  this.box.insertBefore(this.box.lastChild, this.box.firstChild);
  this.init_element_children();
  this.pause_act();
}
js_rolling.prototype.act_move_left = function() {
  for(var i = 0, m = this.children.length; i < m; i++) {
    var child = this.children[i];
    child.style.left = (parseInt(child.style.left) - this.move_gap) + 'px';
  }
  if ((this.children[0].offsetWidth + parseInt(this.children[0].style.left)) <= 0) {
    this.box.appendChild(this.box.firstChild);
    this.init_element_children();
    this.pause_act();
  }
}
js_rolling.prototype.move_left = function() {
  if (this.direction != 2 && this.direction != 4) {
    return false;
  }
  this.box.appendChild(this.box.firstChild);
  this.init_element_children();
  this.pause_act();
}
js_rolling.prototype.act_move_right = function() {
  for(var i = 0, m = this.children.length; i < m; i++) {
    var child = this.children[i];
    child.style.left=(parseInt(child.style.left) + this.move_gap) + 'px';
  }

  if (parseInt(this.box.lastChild.style.left) >= 0) {
    this.box.insertBefore(this.box.lastChild, this.box.firstChild);
    this.init_element_children();
    this.pause_act();
  }
}
js_rolling.prototype.move_right = function() {
  if (this.direction != 2 && this.direction != 4) {
    return false;
  }
  this.box.insertBefore(this.box.lastChild, this.box.firstChild);
  this.init_element_children();
  this.pause_act();
}
js_rolling.prototype.start = function() {
  var thisC = this;
  this.stop();
  this.is_rolling = true;
  var act = function() {
    if (thisC.is_rolling) {
      if (thisC.direction == 1) {
        thisC.act_move_up();
      }
      else if (thisC.direction == 2) {
        thisC.act_move_right();
      }
      else if (thisC.direction == 3) {
        thisC.act_move_down();
      }
      else if (thisC.direction == 4) {
        thisC.act_move_left();
      }
    }
  }
  this.time_timer = setInterval(act, this.time_dealy);
}
js_rolling.prototype.pause_act = function() {
  if (this.time_dealy_pause) {
    var thisC = this;
    var act = function() {
      thisC.resume();
      clearTimeout(thisC.time_timer_pause);
      thisC.time_timer_pause = null;
    }
    if (this.time_timer_pause) {
      clearTimeout(this.time_timer_pause);
    }
    this.time_timer_pause = setTimeout(act, this.time_dealy_pause);
    this.is_rolling = false;
  }
}
js_rolling.prototype.pause = function() {
  if (this.time_timer_pause) {
    clearTimeout(this.time_timer_pause);
  }
  this.is_rolling = false;
}
js_rolling.prototype.resume = function() {
  if (!this.mouseover) {
    this.is_rolling = true;
  }
}
js_rolling.prototype.stop = function() {
  this.is_rolling = false;
  if (!this.time_timer) {
    clearInterval(this.time_timer);
  }
  this.time_timer = null
}

;
var winStatus = 1;
var downtimer = null;
var nextStatus = null;
var hoverStatus = false;
// $.cookie("popupState", null); // NOTE: uncomment this for debugging to clear cookies on reload

function setupButton() {
    $("div#hide_btn").click(function(){
      $(".pop_up").stop();
      hoverStatus = false;
      clearTimeout(downtimer);
      nextStatus = 0;
      $(".pop_up").animate({bottom:-180},2000,'swing',function(){
        winStatus = nextStatus;
        nextStatus = null;
      });
      $.cookie("popupState", -1, {expires: 1});
    });

    $("div#up_arrow").click(function(){
        $(".pop_up").stop();
        if(winStatus == 0){
        nextStatus = 1;
        $(".pop_up").animate({bottom:90},1500,'swing',function(){
          $("div#up_arrow").hide();
          $("div#down_arrow").show();
          winStatus = nextStatus;
          nextStatus = null;
        });
        $.cookie("popupState", 1, {expires: 1});
      }

    });

    $("div#down_arrow").click(function(){
        $(".pop_up").stop();
        if(winStatus > 0){
        nextStatus = 0;
        $(".pop_up").animate({bottom:-102},1500,'swing',function(){
          $("div#up_arrow").show();
          $("div#down_arrow").hide();
          winStatus = nextStatus;
          nextStatus = null;
        });
        $.cookie("popupState", 0, {expires: 1});
      }
    });


    $("div#top_main").click(function(){
        $(".pop_up").stop();
        if(winStatus > 0){
        nextStatus = 0;
        $(".pop_up").animate({bottom:-102},1500,'swing',function(){
          $("div#up_arrow").show();
          $("div#down_arrow").hide();
          winStatus = nextStatus;
          nextStatus = null;
        });
        $.cookie("popupState", 0, {expires: 1});
      } else if(winStatus == 0){
          nextStatus = 1;
          $(".pop_up").animate({bottom:90},1500,'swing',function(){
            $("div#up_arrow").hide();
            $("div#down_arrow").show();
            winStatus = nextStatus;
            nextStatus = null;
          });
          $.cookie("popupState", 1, {expires: 1});
        }


    });
	}


function startPopUp(){
    if ($.cookie("popupState") == 1 || $.cookie("popupState") == null){
        nextStatus = 1;
		$("div#down_arrow").hide();//AR
      $(".pop_up").animate({bottom:90},2000,'swing',function(){
        $("div#up_arrow").hide();
        $("div#form_bg").hide();
        $("div.form_holder").hide();
		$("div#down_arrow").show();//AR
        $("div#submit_btn").hide();
        downtimer = setTimeout(autoDown, 5000);
        hoverStatus = true;
        winStatus = nextStatus;
        nextStatus = null;
        setupButton();});
    }

    if ($.cookie("popupState") == 0){
      $("div#up_arrow").show();
      $("div#down_arrow").hide();
      $("div#form_bg").hide();
      $("div.form_holder").hide();
      $("div#submit_btn").hide();
        nextStatus = 0;
      $(".pop_up").animate({bottom:-102},0,'swing',function(){
        setupButton();
        winStatus = nextStatus;
        nextStatus = null;
      });

    }

       $("div#main, div#top_main").hover(function(){
         if (hoverStatus){
               clearTimeout(downtimer);
         }
       },function(){
         if(hoverStatus){
               downtimer = setTimeout(autoDown, 5000);
         }
       });
}


$(document).ready(function(){
  setTimeout(startPopUp, 10000);
  var clearMePrevious = '';
  $('.clearMeFocus').focus(function(){
    if($(this).val()==$(this).attr('title')){
      clearMePrevious = $(this).val();
      $(this).val('');
    }
  });
  $('.clearMeFocus').blur(function(){
    if($(this).val()==''){
      $(this).val(clearMePrevious);
    }
  });
});


function autoDown(){
    nextStatus = 0;
    $(".pop_up").animate({bottom:-102},1000,'swing',function(){
      $("div#up_arrow").show();
      $("div#down_arrow").hide();
      hoverStatus = false;
      winStatus = nextStatus;
      nextStatus = null;
      setupButton();});
    $.cookie("popupState", 0, {expires: 1});
}

function launchPage(theURL)
{
  $.cookie("popupState", -1, {expires: 1});
  window.location = theURL;
};
// Start our Omniture click event listener.
(function($) {

  /**
   * Add a bluekai image pixel.
   */
  function addBlueKaiPixel(queryString) {
    var bkSiteID = Drupal.settings.bluekai.siteID, protocol, body, image;
    protocol = "https:" == document.location.protocol ? "https:" : "http:";

    body = document.getElementsByTagName('body')[0];
    image = document.createElement('img');
    image.src = protocol + '//tags.bluekai.com/site/' + bkSiteID + '?' + queryString;
    image.height = 1;
    image.width = 1;
    image.border = 0;
    body.appendChild(image);
  }

  document.addEventListener('ecOmnitureClick', function(e) {
    // cd = Click Data. This is the data object we send to our click tracking function in
    // ec_omniture_link_tracking.js.
    // q = query object.
    var cd = e.ecOmnitureClickData.clickData, q = "";

    // Facebook and twitter social links.
    if (cd.name === "top_fb"
      || cd.name === "footer_fb"
      || cd.name === "top_twitter"
      || cd.name === "footer_twitter"
    ) {
      q = "phint=" + encodeURIComponent("events=" + cd.events);
    }

    // Add the pixel if we found something.
    if (q.length > 0) {
      q += "&phint=type%3Dsocialclick";
      addBlueKaiPixel(q);
    }
  }, false);
})(jQuery);;
/* global jQuery,s,Econ,clearOmniVars,clearLinkVars,s_gi,s_account,ecModalResize */
(function($, Drupal, Econ) {
  "use strict";

  /**
   * Registration overlay. The following snippet of code should be use to DISPLAY this overlay.
   * This is here as an example/reminder of the steps needed to property display it.
   * A helper function is created in this function to pop up the overlay properly.
   * Drupal.regoverlay.displayOverlay();
   */
  Drupal.regoverlay = Drupal.regoverlay || {};
  Drupal.regoverlay.modalOptions = {};
  var overlayHasBeenSetup = false;
  var bypass = Number($.cookie('ec-reg-overlay-bypass')) === 1;
  var overlayHasBeenSeen = Number($.cookie('ec-reg-overlay-seen')) === 1;
  var loggedIn = $.cookie('ec_uid') !== null && $.cookie('ec_uid') > 0;

  Drupal.behaviors.ecOverlay = function (context) {
    // Below are setup items that we don't need to run twice. Above are items that we
    // want to run to re-attach to information/items on the page.
    if (overlayHasBeenSetup === true) {
      return;
    }

    // Handle out setup items.
    overlayHasBeenSetup = true;

    // Setup the modal options.
    var minHeight = 525;
    var width = 935;
    Drupal.regoverlay.modalOptions = {
      url: "https://" + window.location.hostname + Drupal.settings.basePath + "ec-overlay/init/emptyframe",
      dataCss: {
        overflow: "hidden",
        paddingTop: "0"
      },
      containerCss: {
        backgroundColor: "#fff",
        width: width,
        minHeight: minHeight,
        maxHeight: minHeight,
        padding: 0
      },
      iframe: {
        width: width,
        minHeight: minHeight,
        maxHeight: minHeight
      },
      opacity: 50,
      overlayCss: {
        backgroundColor: "#333",
        border: "4px solid #444"
      },
      close: true,
      escClose: true,
      overlayClose: true,
      onClose: function (dialog) {
        // Send omniture data.
        s.linkTrackVars = 'prop45,';
        if ($('.ec-button-thankyou-clicked').length === 0) {
          s.prop45 = 'member_services|registration|registration_overlay_part_' + Drupal.regoverlay.pageContext + '|close';
        }
        else {
          s.prop45 = 'member_services|registration|registration_overlay_part_3|start_reading';
        }
        s.tl(this, 'o', 'member_services|registration|registration_overlay_part_' + Drupal.regoverlay.pageContext + '|close');
        clearLinkVars();
        $.cookie('ec-button-thankyou-clicked', null);

        dialog.data.fadeOut('slow', function () {
          dialog.container.slideUp('slow', function () {
            dialog.overlay.fadeOut('slow', function () {
              $.modal.close(); // must call this!
            });
          });
        });
      },
      onOpen: function (dialog) {
        dialog.overlay.fadeIn('slow', function () {
          dialog.container.slideDown('slow', function () {
            dialog.data.fadeIn('slow');
          });
        });
      },
      zIndex: 15000,
      closeHTML: ''
    };

    // Setup a helper function.
    Drupal.regoverlay.displayOverlay = function () {
      if (overlayHasBeenSeen && !bypass) {
        return;
      }

      $.cookie('ec-reg-overlay-seen', 1, {expires: 365, path: '/'});
      overlayHasBeenSeen = true;
      // Remove the slider ad if we are showing the overlay.
      $('#block-ec_ads-slider_ad').remove();
      // Show the overlay.
      Drupal.regoverlay.ecModal(Drupal.regoverlay.modalOptions);

      // Generate a link-tracking.
      var s = s_gi(s_account);
      clearLinkVars();
      clearOmniVars();
      s.linkTrackVars = 'prop45';
      s.prop45 = s.pageName;
      var pageNameTemp = s.pageName;
      s.pageName = '';
      s.tl(this, 'o', pageNameTemp);
      s.pageName = pageNameTemp;
    };

    // Pop-open for testing if we have a bypass cookie set.
    var showOnLoad = typeof Drupal.settings.ecRegOverlayShowOnLoad !== "undefined" && Drupal.settings.ecRegOverlayShowOnLoad;
    if (bypass === 1 ||
       (Number(Drupal.settings.EcRegOverlayEnabled) === 1 &&
        !overlayHasBeenSeen &&
        showOnLoad &&
        loggedIn === false &&
        typeof Econ !== 'undefined' &&
        typeof Econ.showOverlay === 'function')) {
      Econ.showOverlay(Drupal.regoverlay.displayOverlay, -50);
    }
  };

  /**
   * Opens an iframe within an overlay using simplemodal library.
   */
  Drupal.regoverlay.ecModal = function (modalOptions) {
    modalOptions.screenHeightCutoff = 800;

    // Initialize a smaller height for smaller screens.
    if (screen.height <= 864) {
      modalOptions.iframe.maxHeight = modalOptions.iframe.minHeight;
    }
    // Open the simplemodal dialog.
    $.modal('<iframe id="ec-regov-iframe" src="' + modalOptions.url + '" width="' + modalOptions.iframe.width +
    '" height="' + modalOptions.iframe.maxHeight + '" frameBorder="0">', modalOptions);

    Drupal.regoverlay.modalPoller = setInterval(function() {
      Drupal.regoverlay.ecModalListen();
    }, 1000);

    // Resize iframe based on browser window resizing.
    // Reusing from user module.
    ecModalResize("ecRegOverlay", modalOptions);
  };

  /**
   * Listen for the modal iframe to close.
   * @param modalOptions
   */
  Drupal.regoverlay.ecModalListen = function() {
    var overlayActive = $('#ec-regov-iframe').length === 1;

    // If we are on the 3rd step, meaning the user is now logged in,
    // we should replace the mast head.
    if (Number($.cookie('ec-overlay-logged-in')) === 1  &&
        Number($.cookie('ec_uid')) > 0 &&
        $('#user_account_menu').length === 0) {
      /**
       * Makes a "post" request to get the masthead HTML, and replace it with this
       * updated masthead.
       */
      $.ajax({
        type: "GET",
        url: Drupal.settings.basePath + 'ec_user/js/masthead',
        data: {},
        success: function (data) {
          $('header.mh ul.mh-user-menu').fadeOut('slow').replaceWith(data);
        },
        dataType: "html"
      });
    }

    // If the thank you button is clicked.
    if ($.cookie('ec-button-thankyou-clicked') === "1" && $('#ec-regov-iframe').length !== 0) {
      $.cookie('ec-button-thankyou-clicked', null);
      $.modal.close();
      if ($('#paywall-content').length !== 0) {
        setTimeout(function() {
          window.location.reload();
        }, 2);
      }
    }
    if ($.cookie('ec-overlay-close')) {
      $.cookie('ec-overlay-close', null);
      $.modal.close();
    }

    // A simple reload.
    if (Number($.cookie('ec-overlay-reload-parent')) === 1) {
      var delay = Number($.cookie('ec-overlay-reload-parent'));
      $.cookie('ec-overlay-reload-parent', null);
      document.cookie = 'ec-overlay-reload-parent=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      // Only reload if the overlay/iframe is on the page.
      if (overlayActive === true) {
        setTimeout(function() {
          window.location.reload();
        }, delay);
      }
    }

    if (overlayActive === false) {
      clearInterval(Drupal.regoverlay.modalPoller);
    }
  };
  /*** END REGISTRATION OVERLAY **/

})(jQuery, Drupal, Econ);
;
Drupal.behaviors.ecPixelTrackingAdroit = function(context) {
  "use strict";

  var user, settings, iso, body, iframe, protocol;
  if (context == document && Econ && Econ.user && typeof Drupal.settings.ecPixelTracking !== "undefined" && typeof Drupal.settings.ecPixelTracking.adroit !== "undefined") {
    user = Econ.user;
      if (!user.loaded) {
      $(user).bind('load', function() {
        iso = user.user.country.iso;
      });
    }
    else {
      iso = user.user.country.iso;
    }

    settings = Drupal.settings.ecPixelTracking.adroit;

    if (iso && $.inArray(iso, settings.countries) != -1) {
      protocol = "https:" == document.location.protocol ? "https:" : "http:";

      body = document.getElementsByTagName('body')[0];
      iframe = document.createElement('iframe');
      iframe.src = protocol + settings.scriptUrl;
      iframe.height = 0;
      iframe.width = 0;
      iframe.scrolling = 'no';
      iframe.border = 0;
      body.appendChild(iframe);
    }
  }
};
;
Drupal.behaviors.ecPixelTrackingAdsrvr = function(context) {
  "use strict";

  var user, settings, iso, body, image, protocol, region, imageUrl;
  if (context == document && Econ && Econ.user && typeof Drupal.settings.ecPixelTracking !== "undefined" && typeof Drupal.settings.ecPixelTracking.adsrvr !== "undefined") {
    user = Econ.user;
      if (!user.loaded) {
      $(user).bind('load', function() {
        iso = user.user.country.iso;
        region = user.user.country.region;
      });
    }
    else {
      iso = user.user.country.iso;
      region = user.user.country.region;
    }

    settings = Drupal.settings.ecPixelTracking.adsrvr;

    // We have region and iso, check if region is in region array, and iso is not in country array.
    if (region && iso && $.inArray(region, settings.regions) !== -1 && $.inArray(iso, settings.countries) === -1) {
      protocol = "https:" == document.location.protocol ? "https:" : "http:";

      imageUrl = protocol + settings.scriptUrl;
      image = $("<img />").attr({src : imageUrl, height : 0, width : 0, border : 0});
      $("body").append(image);
    }
  }
};
;
Drupal.behaviors.ecPixelTrackingFosina = function(context) {

  "use strict";

  var user, settings, iso, body, image;

  if (context == document && typeof Drupal.settings.ecPixelTracking !== "undefined" && typeof Drupal.settings.ecPixelTracking.fosina !== "undefined") {
    settings = Drupal.settings.ecPixelTracking.fosina;
    user = Econ.user;

    body = document.getElementsByTagName('body')[0];
    image = document.createElement('img');
    image.src = settings.scriptUrl;
    image.height = 1;
    image.width = 1;
    image.border = 0;

    if (!user.loaded) {
      $(user).bind('load', function() {
        iso = user.user.country.iso;
        if (iso && $.inArray(iso, settings.countries) != -1) {
          body.appendChild(image);
        }

      });
    }
    else {
      iso = user.user.country.iso;
      if (iso && $.inArray(iso, settings.countries) != -1) {
        body.appendChild(image);
      }
    }
  }
};
;
Drupal.behaviors.ecPixelTrackingMediaMath = function(context) {
  "use strict";

  var user, settings, iso, body, image, protocol, region, imageUrl;
  if (context == document && Econ && Econ.user && typeof Drupal.settings.ecPixelTracking !== "undefined" && typeof Drupal.settings.ecPixelTracking.media_math !== "undefined") {
    user = Econ.user;
      if (!user.loaded) {
      $(user).bind('load', function() {
        iso = user.user.country.iso;
        region = user.user.country.region;
      });
    }
    else {
      iso = user.user.country.iso;
      region = user.user.country.region;
    }

    settings = Drupal.settings.ecPixelTracking.media_math;

    // We have region and iso, check if region is in region array, and iso is not in country array.
    if (region && iso && $.inArray(region, settings.regions) !== -1 && $.inArray(iso, settings.countries) === -1) {
      protocol = "https:" == document.location.protocol ? "https:" : "http:";

      imageUrl = protocol + settings.imageUrl;
      image = $("<img />").attr({src : imageUrl, height : 0, width : 0, border : 0});
      $("body").append(image);
    }
  }
};
;
/* global Drupal */
Drupal.behaviors.ecPixelTrackingTapad = function(context) {
  if (context != document) {
    return;
  }

  "use strict";
  var body, img, subscriptionStatus, user, uid;
  if (Econ && Econ.user) {
    user = Econ.user;
    if (!user.loaded) {
      $(user).bind('load', function() {
        uid = user.user.uid;
      });
    }
    else {
      uid = user.user.uid;
    }

    body = document.getElementsByTagName('body')[0];
    img = document.createElement('img');
    subscriptionStatus = $.cookie('ec_omniture_user_sub');
    // We have to check the uid because we have a "sticky" subscription status/cookie.
    if (!uid || uid == 0 || subscriptionStatus === null || subscriptionStatus === "anonymous" || subscriptionStatus === "registered") {
      img.src = "//pixel.tapad.com/tap/pxl.png?ta_property_id=1129&ta_action_id=Economist_Retargeting";
    }
    // If the omniture user subscription cookie is not set to anonymous or registered, then they must have an
    // active subscription and thus we ant-target them.
    else {
      img.src = "//pixel.tapad.com/tap/pxl.png?ta_property_id=1129&ta_action_id=Economist_AntiTargeting";
    }
    img.width = 1;
    img.height = 1;
    body.appendChild(img);
  }
};
;
Drupal.behaviors.ecPixelTrackingTheTradeDesk = function(context) {
  "use strict";

  var user, settings, iso, body, script, protocol, region, scriptUrl;
  if (context == document && Econ && Econ.user && typeof Drupal.settings.ecPixelTracking !== "undefined" && typeof Drupal.settings.ecPixelTracking.the_trade_desk !== "undefined") {
    user = Econ.user;
      if (!user.loaded) {
      $(user).bind('load', function() {
        iso = user.user.country.iso;
        region = user.user.country.region;
      });
    }
    else {
      iso = user.user.country.iso;
      region = user.user.country.region;
    }

    settings = Drupal.settings.ecPixelTracking.the_trade_desk;

    // We have region and iso, check if region is in region array, and iso is not in country array.
    if (region && iso && $.inArray(region, settings.regions) !== -1 && $.inArray(iso, settings.countries) === -1) {
      protocol = "https:" == document.location.protocol ? "https:" : "http:";

      scriptUrl = protocol + settings.scriptUrl;
      script = $("<script />").attr({src : scriptUrl, language : 'Javascript1.1'});
      $("body").append(script);
    }
  }
};
;
Drupal.behaviors.ecPixelTrackingTurn = function(context) {
  "use strict";

  var user, settings, iso, body, image, protocol, region, imageUrl;
  if (context == document && Econ && Econ.user && typeof Drupal.settings.ecPixelTracking !== "undefined" && typeof Drupal.settings.ecPixelTracking.turn !== "undefined") {
    user = Econ.user;
      if (!user.loaded) {
      $(user).bind('load', function() {
        iso = user.user.country.iso;
        region = user.user.country.region;
      });
    }
    else {
      iso = user.user.country.iso;
      region = user.user.country.region;
    }

    settings = Drupal.settings.ecPixelTracking.turn;

    // We have region and iso, check if region is in region array, and iso is not in country array.
    if (region && iso && $.inArray(region, settings.regions) !== -1 && $.inArray(iso, settings.countries) === -1) {
      protocol = "https:" == document.location.protocol ? "https:" : "http:";

      imageUrl = protocol + settings.imageUrl;
      image = $("<img />").attr({src : imageUrl, height : 0, width : 0, border : 0});
      $("body").append(image);
    }
  }
};
;
function generateRandomNumber() {
  var random_num = Math.floor(Math.random() * 999999999);
  return random_num;
}

var random_ad_nr = generateRandomNumber();

/**
 * Handle the pencil slug logic.
 * The slots are rendered and the information about weather this is a wide-add page or not
 * is done much earlier in the page process.
 * @see ec_ads_gpt.js
 * @param context
 */
Drupal.behaviors.ecGPTPencilSlug = function (context) {
  if (typeof Econ !== "undefined" && typeof Econ.gpt !== "undefined" && Econ.gpt.wide_leader === true) {
    $('body').addClass('pencil-slug');
  }
}

/**
 * Remove empty ad containers.
 * @param context
 */
Drupal.behaviors.ecAdsRemoveEmptyAds = function (context) {
  $('div.ec-ads-remove-if-empty', context).each(function () {
    // This condition checks to see if we have no ad.
    var is_iframe = false, contents, scripts, thisScript, adSrcString = 'doubleclick', blankLink, blankImg, blankAd;
    if ($(this).find('iframe').length !== 0) {
      contents = $(this).find('iframe').contents();
      is_iframe = true;
    }
    else {
      contents = $(this).contents();
    }

    try {
      scripts = contents.find('script');
      thisScript = scripts[scripts.length -1];
    }
    catch(e){
     scripts = $(contents[1]).find('script');
     thisScript =  scripts[scripts.length -1];
     contents = $(contents[1]);
    }

    // Making sure we have a script item, its empty, and from the ad provider system.
    if (!is_iframe && typeof thisScript !== "undefined" && thisScript.innerHTML === '' && thisScript.src.indexOf(adSrcString) > -1) {
      $(this).hide();
    }

    // Existing checking for the grey gif.
    blankLink = $('a', contents);
    blankImg  = $('> img', blankLink);

    // All the below have to pass for this to be considered a "blank" ad.
    blankAd = true;
    blankAd = blankAd && blankLink.length > 0; // Ad contains a link.
    blankAd = blankAd && blankLink.attr('href').indexOf('doubleclick') > -1; // It is a doubleclick link.
    blankAd = blankAd && blankImg.length === 1; // That link contains one image.
    blankAd = blankAd && blankImg.attr('src').toLowerCase().indexOf('grey.gif') > -1; // The name of that image contains "grey.gif".
    blankAd = blankAd && (blankImg.width() <= 1 && blankImg.height() <= 1); // And, that gif is one by one.

    // Hide wrapper div around grey.gif images i.e. blank ads.
    // hide() is used instead of remove() because it's possible for an ad JS
    // file to load late and expect to find the DOM elements. If the elements
    // are removed then in some browsers like IE8 the JS will replace the entire
    // page.
    if (blankAd) {
      $(this).hide();
    }
  });
};

// Start Topics ribbon ad.

function menuOn(imgEl) {
  imgEl.src = imgEl.src.replace(".gif", "_on.gif");
  imgEl.position = 'relative;';
}

function menuOut(imgEl) {
  imgEl.src = imgEl.src.replace("_on.gif", ".gif");
  imgEl.position = 'static;';
}

// End Topics ribbon ad.

/**
 * Generates a script tag for the page.
 * Recommended required options:
 *   pos: Ad position
 *   sz: Comma seperated list of sizes
 *   tile: The tile location
 */
ECAds = window.ECAds || {};
ECAds.generateScriptTag = function(options) {
  for (var k in Drupal.settings.ecAds) {
    if (typeof options[k] === "undefined") {
      if(k != 'per') {
        options[k] = Drupal.settings.ecAds[k];
      }
    }
  }
  var adSettings = Drupal.settings.ecAds;
  var personaTags = '';
  // Get the Persona tags, if any
  if (typeof Drupal.settings.ecPersonas !== "undefined") {
    personaTags = ';' + Drupal.settings.ecPersonas;
  }
  var adCall = "//ad.doubleclick.net/" + options["ad_call_type"];
  // Add the sitecode and site
  adCall += '/' + adSettings.ad_site + '.' + adSettings.sitecode;
  // Add the zone
  adCall += '/' + adSettings.ad_zone;
  // Add the options.
  for (var k in options) {
    if (k === "ad_call_type" || k === "ad_site" || k === "sitecode" || k === "ad_zone") {
      continue;
    }
    adCall += ';' + k + '=' + options[k];
  }
  // Add the Persona tags
  adCall += personaTags;
  // Add the ord. It must always be last.
  adCall += ';ord=' + random_ad_nr + '?';
  return adCall;
};

ECAds.processScriptTag = function(tag) {
  var ret = tag;
  var personas = "";
  var i = 0;
  if (typeof Economist !== "undefined" && typeof Economist.userData !== "undefined" && typeof Economist.userData.data !== "undefined") {
    ret = tag.replace(/subs=\w{1}/, 'subs=' + Economist.userData.data.subs).replace(/wsub=\w{1}/, 'wsub=' + Economist.userData.data.wsub);
    if (typeof Economist.userData.data.persona_tags !== "undefined") {
        for (i=0;i < Economist.userData.data.persona_tags.length; i++) {
          personas += ";per=" + Economist.userData.data.persona_tags[i];
        }
        ret += personas;
    }
  }
  return ret;
};
;
/* jshint asi:true */
/* global google, define, jQuery */

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return factory;
    });
  } else {
    root.Economist = root.Economist || {};
    root.Economist.GoogleCustomSearchLoader = factory;
  }
} (this, function (settings) {
  'use strict';
  var cx = settings.cx,
      is_results_page = settings.is_results_page,
      search_setup_options = settings.settings;

  var myCallback = function () {

    // Renders the full page search form on the results page.
    var _render_full_page_search = function (key, search_settings) {
      google.search.cse.element.render(search_settings);
      var resultsForm = document.getElementById('gsc-i-id1');
      resultsForm.setAttribute('autocorrect','off');
    };

    // Decorates the masthead search form.
    var _render_masthead_search = function (key, search_settings) {
      // Adds autocompletion to search box in masthead.
      google.search.CustomSearchControl.attachAutoCompletionWithOptions(
        cx,
        document.getElementById(search_settings.input_id),
        search_settings.form_id,
        search_settings.auto_completion_options
      );

      // Adds hidden form field to trigger showing results within Economist.com.
      // Non-js defaults to showing results within Google.com.
      var cxInput = document.createElement('input');
      var sitesearchInput = document.getElementsByName(search_settings.site_search_name)[0];
      var mastheadForm = document.forms[search_settings.form_id];
      cxInput.type = 'hidden';
      cxInput.name = 'cx';
      cxInput.value = cx;
      cxInput.id = 'edit-cx';
      mastheadForm.removeAttribute('action');
      mastheadForm.method = 'POST';
      mastheadForm.appendChild(cxInput);
      sitesearchInput.parentNode.removeChild(sitesearchInput);
    };

    // Main render function.
    var render_callback = function () {
      var keys = [];
      for (var key in search_setup_options) {
        search_setup_options.hasOwnProperty(key) && keys.push(key);
      }
      for (var i = 0, length = keys.length; i < length; i++) {
        if (typeof search_setup_options[keys[i]].pre_render_callback !== 'undefined') {
          search_setup_options[keys[i]].pre_render_callback();
        }

        if (keys[i] === 'masthead' && search_setup_options[keys[i]].search_settings_custom !== 'undefined') {
          _render_masthead_search(keys[i], search_setup_options[keys[i]].search_settings_custom);
        }

        if (is_results_page === true && keys[i] === 'full_page' && typeof search_setup_options[keys[i]].search_settings_cse !== 'undefined') {
          _render_full_page_search(keys[i], search_setup_options[keys[i]].search_settings_cse);
        }

        if (typeof search_setup_options[keys[i]].post_render_callback !== 'undefined') {
          search_setup_options[keys[i]].post_render_callback();
        }
      }
    };

    if (document.readyState === 'complete') {
      // Document is ready when CSE element is initialized.
      render_callback();
    } else {
      // Document is not ready yet, when CSE element is initialized.
      // Extra check for IE because it can't load script asynchronously.
      if (navigator.userAgent.toLowerCase().indexOf('msie') > 0) {
        jQuery(document).ready(render_callback);
      }
      else {
        google.setOnLoadCallback(render_callback, true);
      }
    }
  };

  // Insert it before the CSE code snippet so that cse.js can take the script
  // parameters, like parsetags, callbacks.
  window.__gcse = {
    parsetags: 'explicit',
    callback: myCallback
  };

  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//www.google.com/cse/cse.js?cx=' + cx;

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
}));
;
/* jshint asi: true */
/* global Drupal, $ */
// This file duplicates the settings found in the ec_google_cse_settings.js
// file, please ensure they are kept in sync when performing any updates.

Drupal.behaviors.ec_google_cse = function(context) {
  'use strict';
  var GCS_Settings = {
    cx: Drupal.settings.ec_google_cse.cx,
    is_results_page: Drupal.settings.ec_google_cse.isResultsPage,
    settings: {
      full_page: {
        search_settings_cse: {
          div: "cse_search",
          tag: 'search',
          attributes: {
            enableHistory: true,
            noResultsString: Drupal.settings.ec_google_cse.noResultsString,
            newWindow: false,
            gname: Drupal.settings.ec_google_cse.gname,
            queryParameterName: Drupal.settings.ec_google_cse.queryParameterName,
            language: 'en'
          }
        },
        pre_render_callback: function () {
          var selector = 'form#ec-google-cse-no-js-search-form';
          $(selector).replaceWith($(selector + ' #edit-js-form-replacement').attr('value'));
        }
      },
      masthead: {
        search_settings_custom: {
          input_id: 'edit-search-theme-form-1',
          form_id: 'search-theme-form',
          site_search_name: 'sitesearch',
          auto_completion_options: {
            'maxCompletions': 5
          }
        },
        pre_render_callback: function () {
          var $searchInput = $('#edit-search-theme-form-1');

          // This is required to make non-js version into js.
          $searchInput.attr('name', 'search_theme_form');

          // Add 'focus' class to the search input field.
          // Toggle the watermark on user input.
          $searchInput.blur(function () {
            if ($(this).val() === '') {
              $(this).css('background', 'url(/sites/all/themes/econfinal/images/google_custom_search_watermark.png) no-repeat left center');
            }
            else {
              $(this).css('background-image', 'none');
            }
          });
        }
      }
    }
  }

  window.Economist.GoogleCustomSearchLoader(GCS_Settings);
}
;
/* global $ */
var Econ = Econ || {};
Econ.social = {};
Econ.social.shareCover = function(cover) {
  "use strict";
  var image_url = '';

  if (arguments.length > 1) {
    image_url = arguments[1];
  }

  $(cover).each(function() {
    var share_link = $(Drupal.settings.socialShare.shareCoverLink);
    var share_overlay = $(Drupal.settings.socialShare.shareHTML);

    if (image_url) {
      // Media url reference for facebook.
      var href = share_overlay.find('li.share-icon-facebook a').attr('href');
      share_overlay.find('li.share-icon-facebook a').attr('href', href.replace('app_id=','picture=' + encodeURI(image_url) + '&app_id='));
      href = share_overlay.find('li.share-icon-pinterest a').attr('href');
      share_overlay.find('li.share-icon-pinterest a').attr('href', href + '&media=' + encodeURI(image_url));
    }

    Drupal.attachBehaviors(share_overlay);

    // QTip it.
    share_link.qtip({
      content: {
        title: {
          text: Drupal.t('Share'),
          button: 'X'
        },
        text: share_overlay
      },
      style: {
        width: 170
      },
      position: {
        corner: {
          target: 'rightTop',
          tooltip: 'rightTop'
        }
      },
      show: {
        when: {
          target: false,
          event: 'click'
        },
        effect: {
          type: 'fade',
          length: 50
        }
      },
      hide: {
        fixed: true,
        when: {
          event: 'unfocus'
        }
      }
    });

    $(this).after(share_link);
  });
};

;
/*
 * jQuery Form Plugin
 * version: 2.25 (08-APR-2009)
 * @requires jQuery v1.2.2 or later
 * @note This has been modified for ajax.module
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){$.B.1s=5(u){2(!4.G){R(\'1b: 2M 9 2N - 2O 2P 1t\');6 4}2(S u==\'5\')u={T:u};3 v=4.14(\'1c\')||1d.2Q.2R;v=(v.2S(/^([^#]+)/)||[])[1];v=v||\'\';u=$.1n({1e:v,H:4.14(\'1u\')||\'1Q\'},u||{});3 w={};4.L(\'C-1R-1S\',[4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-1R-1S L\');6 4}2(u.1v&&u.1v(4,u)===I){R(\'1b: 9 1f 1o 1v 1V\');6 4}3 a=4.1w(u.2T);2(u.J){u.O=u.J;K(3 n 1x u.J){2(u.J[n]2U 15){K(3 k 1x u.J[n])a.D({7:n,8:u.J[n][k]})}E a.D({7:n,8:u.J[n]})}}2(u.1y&&u.1y(a,4,u)===I){R(\'1b: 9 1f 1o 1y 1V\');6 4}4.L(\'C-9-1W\',[a,4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-9-1W L\');6 4}3 q=$.1z(a);2(u.H.2V()==\'1Q\'){u.1e+=(u.1e.2W(\'?\')>=0?\'&\':\'?\')+q;u.J=F}E u.J=q;3 x=4,V=[];2(u.2X)V.D(5(){x.1X()});2(u.2Y)V.D(5(){x.1Y()});2(!u.16&&u.17){3 y=u.T||5(){};V.D(5(a){$(u.17).2Z(a).P(y,1Z)})}E 2(u.T)V.D(u.T);u.T=5(a,b){K(3 i=0,M=V.G;i<M;i++)V[i].30(u,[a,b,x])};3 z=$(\'W:31\',4).18();3 A=I;K(3 j=0;j<z.G;j++)2(z[j])A=Q;2(u.20||A){2(u.21)$.32(u.21,1A);E 1A()}E $.33(u);4.L(\'C-9-34\',[4,u]);6 4;5 1A(){3 h=x[0];2($(\':W[7=9]\',h).G){35(\'36: 37 22 38 39 3a 3b "9".\');6}3 i=$.1n({},$.23,u);3 s=$.1n(Q,{},$.1n(Q,{},$.23),i);3 j=\'3c\'+(1B 3d().3e());3 k=$(\'<20 3f="\'+j+\'" 7="\'+j+\'" 24="25:26" />\');3 l=k[0];k.3g({3h:\'3i\',27:\'-28\',29:\'-28\'});3 m={1f:0,19:F,1g:F,3j:0,3k:\'n/a\',3l:5(){},2a:5(){},3m:5(){},3n:5(){4.1f=1;k.14(\'24\',\'25:26\')}};3 g=i.2b;2(g&&!$.1C++)$.1h.L("3o");2(g)$.1h.L("3p",[m,i]);2(s.2c&&s.2c(m,s)===I){s.2b&&$.1C--;6}2(m.1f)6;3 o=0;3 p=0;3 q=h.U;2(q){3 n=q.7;2(n&&!q.1i){u.O=u.O||{};u.O[n]=q.8;2(q.H=="X"){u.O[7+\'.x\']=h.Y;u.O[7+\'.y\']=h.Z}}}1j(5(){3 t=x.14(\'17\'),a=x.14(\'1c\');h.1k(\'17\',j);2(h.2d(\'1u\')!=\'2e\')h.1k(\'1u\',\'2e\');2(h.2d(\'1c\')!=i.1e)h.1k(\'1c\',i.1e);2(!u.3q){x.14({3r:\'2f/C-J\',3s:\'2f/C-J\'})}2(i.1D)1j(5(){p=Q;11()},i.1D);3 b=[];2g{2(u.O)K(3 n 1x u.O)b.D($(\'<W H="3t" 7="\'+n+\'" 8="\'+u.O[n]+\'" />\').2h(h)[0]);k.2h(\'1l\');l.2i?l.2i(\'2j\',11):l.3u(\'2k\',11,I);h.9()}3v{h.1k(\'1c\',a);t?h.1k(\'17\',t):x.3w(\'17\');$(b).2l()}},10);3 r=0;5 11(){2(o++)6;l.2m?l.2m(\'2j\',11):l.3x(\'2k\',11,I);3 c=Q;2g{2(p)3y\'1D\';3 d,N;N=l.2n?l.2n.2o:l.2p?l.2p:l.2o;2((N.1l==F||N.1l.2q==\'\')&&!r){r=1;o--;1j(11,2r);6}m.19=N.1l?N.1l.2q:F;m.1g=N.2s?N.2s:N;m.2a=5(a){3 b={\'3z-H\':i.16};6 b[a]};2(i.16==\'3A\'||i.16==\'3B\'){3 f=N.1E(\'1F\')[0];m.19=f?f.8:m.19}E 2(i.16==\'2t\'&&!m.1g&&m.19!=F){m.1g=2u(m.19)}d=$.3C(m,i.16)}3D(e){c=I;$.3E(i,m,\'2v\',e)}2(c){i.T(d,\'T\');2(g)$.1h.L("3F",[m,i])}2(g)$.1h.L("3G",[m,i]);2(g&&!--$.1C)$.1h.L("3H");2(i.2w)i.2w(m,c?\'T\':\'2v\');1j(5(){k.2l();m.1g=F},2r)};5 2u(s,a){2(1d.2x){a=1B 2x(\'3I.3J\');a.3K=\'I\';a.3L(s)}E a=(1B 3M()).3N(s,\'1G/2t\');6(a&&a.2y&&a.2y.1p!=\'3O\')?a:F}}};$.B.3P=5(c){6 4.2z().2A(\'9.C-1q\',5(){$(4).1s(c);6 I}).P(5(){$(":9,W:X",4).2A(\'2B.C-1q\',5(e){3 a=4.C;a.U=4;2(4.H==\'X\'){2(e.2C!=12){a.Y=e.2C;a.Z=e.3Q}E 2(S $.B.2D==\'5\'){3 b=$(4).2D();a.Y=e.2E-b.29;a.Z=e.2F-b.27}E{a.Y=e.2E-4.3R;a.Z=e.2F-4.3S}}1j(5(){a.U=a.Y=a.Z=F},10)})})};$.B.2z=5(){4.2G(\'9.C-1q\');6 4.P(5(){$(":9,W:X",4).2G(\'2B.C-1q\')})};$.B.1w=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1E(\'*\'):c.22;2(!d)6 a;K(3 i=0,M=d.G;i<M;i++){3 e=d[i];3 n=e.7;2(!n)1H;2(b&&c.U&&e.H=="X"){2(!e.1i&&c.U==e)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z});1H}3 v=$.18(e,Q);2(v&&v.1r==15){K(3 j=0,2H=v.G;j<2H;j++)a.D({7:n,8:v[j]})}E 2(v!==F&&S v!=\'12\')a.D({7:n,8:v})}2(!b&&c.U){3 f=c.1E("W");K(3 i=0,M=f.G;i<M;i++){3 g=f[i];3 n=g.7;2(n&&!g.1i&&g.H=="X"&&c.U==g)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z})}}6 a};$.B.3T=5(a){6 $.1z(4.1w(a))};$.B.3U=5(b){3 a=[];4.P(5(){3 n=4.7;2(!n)6;3 v=$.18(4,b);2(v&&v.1r==15){K(3 i=0,M=v.G;i<M;i++)a.D({7:n,8:v[i]})}E 2(v!==F&&S v!=\'12\')a.D({7:4.7,8:v})});6 $.1z(a)};$.B.18=5(a){K(3 b=[],i=0,M=4.G;i<M;i++){3 c=4[i];3 v=$.18(c,a);2(v===F||S v==\'12\'||(v.1r==15&&!v.G))1H;v.1r==15?$.3V(b,v):b.D(v)}6 b};$.18=5(b,c){3 n=b.7,t=b.H,1a=b.1p.1I();2(S c==\'12\')c=Q;2(c&&(!n||b.1i||t==\'1m\'||t==\'3W\'||(t==\'1J\'||t==\'1K\')&&!b.1L||(t==\'9\'||t==\'X\')&&b.C&&b.C.U!=b||1a==\'13\'&&b.1M==-1))6 F;2(1a==\'13\'){3 d=b.1M;2(d<0)6 F;3 a=[],1N=b.3X;3 e=(t==\'13-2I\');3 f=(e?d+1:1N.G);K(3 i=(e?d:0);i<f;i++){3 g=1N[i];2(g.1t){3 v=g.8;2(!v)v=(g.1O&&g.1O[\'8\']&&!(g.1O[\'8\'].3Y))?g.1G:g.8;2(e)6 v;a.D(v)}}6 a}6 b.8};$.B.1Y=5(){6 4.P(5(){$(\'W,13,1F\',4).2J()})};$.B.2J=$.B.3Z=5(){6 4.P(5(){3 t=4.H,1a=4.1p.1I();2(t==\'1G\'||t==\'40\'||1a==\'1F\')4.8=\'\';E 2(t==\'1J\'||t==\'1K\')4.1L=I;E 2(1a==\'13\')4.1M=-1})};$.B.1X=5(){6 4.P(5(){2(S 4.1m==\'5\'||(S 4.1m==\'41\'&&!4.1m.42))4.1m()})};$.B.43=5(b){2(b==12)b=Q;6 4.P(5(){4.1i=!b})};$.B.2K=5(b){2(b==12)b=Q;6 4.P(5(){3 t=4.H;2(t==\'1J\'||t==\'1K\')4.1L=b;E 2(4.1p.1I()==\'2L\'){3 a=$(4).44(\'13\');2(b&&a[0]&&a[0].H==\'13-2I\'){a.45(\'2L\').2K(I)}4.1t=b}})};5 R(){2($.B.1s.46&&1d.1P&&1d.1P.R)1d.1P.R(\'[47.C] \'+15.48.49.4a(1Z,\'\'))}})(4b);',62,260,'||if|var|this|function|return|name|value|submit||||||||||||||||||||||||||||fn|form|push|else|null|length|type|false|data|for|trigger|max|doc|extraData|each|true|log|typeof|success|clk|callbacks|input|image|clk_x|clk_y||cb|undefined|select|attr|Array|dataType|target|a_fieldValue|responseText|tag|ajaxSubmit|action|window|url|aborted|responseXML|event|disabled|setTimeout|setAttribute|body|reset|extend|via|tagName|plugin|constructor|a_ajaxSubmit|selected|method|beforeSerialize|a_formToArray|in|beforeSubmit|param|fileUpload|new|active|timeout|getElementsByTagName|textarea|text|continue|toLowerCase|checkbox|radio|checked|selectedIndex|ops|attributes|console|GET|pre|serialize|veto|vetoed|callback|validate|a_resetForm|a_clearForm|arguments|iframe|closeKeepAlive|elements|ajaxSettings|src|about|blank|top|1000px|left|getResponseHeader|global|beforeSend|getAttribute|POST|multipart|try|appendTo|attachEvent|onload|load|remove|detachEvent|contentWindow|document|contentDocument|innerHTML|100|XMLDocument|xml|toXml|error|complete|ActiveXObject|documentElement|a_ajaxFormUnbind|bind|click|offsetX|offset|pageX|pageY|unbind|jmax|one|a_clearFields|a_selected|option|skipping|process|no|element|location|href|match|semantic|instanceof|toUpperCase|indexOf|resetForm|clearForm|html|apply|file|get|ajax|notify|alert|Error|Form|must|not|be|named|jqFormIO|Date|getTime|id|css|position|absolute|status|statusText|getAllResponseHeaders|setRequestHeader|abort|ajaxStart|ajaxSend|skipEncodingOverride|encoding|enctype|hidden|addEventListener|finally|removeAttr|removeEventListener|throw|content|json|script|httpData|catch|handleError|ajaxSuccess|ajaxComplete|ajaxStop|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parsererror|a_ajaxForm|offsetY|offsetLeft|offsetTop|a_formSerialize|a_fieldSerialize|merge|button|options|specified|a_clearInputs|password|object|nodeType|a_enable|parent|find|debug|jquery|prototype|join|call|jQuery'.split('|'),0,{}));
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 *
 *
 */

Drupal.Ajax = new Object;

Drupal.Ajax.plugins = {};

Drupal.Ajax.firstRun = false;

/**
 * Init function.
 * This is being executed by Drupal behaviours.
 * See bottom of script.
 *
 * @param {HTMLElement} context
 * @return {Bool}
 */
Drupal.Ajax.init = function(context) {
  var f, s;
  if (f = $('.ajax-form', context)) {
    if (!Drupal.Ajax.firstRun) {
      Drupal.Ajax.invoke('init');
      Drupal.Ajax.firstRun = true;
    }
    s = $('input[type="image"],input[type="submit"]', f);
    s.click(function(){
      this.form.ajax_activator = $(this);
      return true;
    });
    f.each(function(){
      this.ajax_activator = null;
      $(this).submit(function(){
        if (this.ajax_activator === null) {
          this.ajax_activator = $('#edit-submit', this);
        }
        if (this.ajax_activator.hasClass('ajax-trigger')) {
          Drupal.Ajax.go($(this), this.ajax_activator);
          return false;
        }
        else {
          return true;
        }
      });
      return true;
    });
  }
  return true;
};

/**
 * Invokes plugins
 *
 * @param {Object} formObj
 * @param {Object} submitter
 */
Drupal.Ajax.invoke = function(hook, args) {
  var plugin, r, ret;
  ret = true;
  for (plugin in Drupal.Ajax.plugins) {
    r = Drupal.Ajax.plugins[plugin](hook, args);
    if (r === false) {
      ret = false;
    }
  }
  return ret;
};

/**
 * Handles submission
 *
 * @param {Object} submitter_
 * @return {Bool}
 */
Drupal.Ajax.go = function(formObj, submitter) {
  var submitterVal, submitterName, extraData;
  Drupal.Ajax.invoke('submit', {submitter:submitter});
  submitterVal = submitter.val();
  submitterName = submitter.attr('name');
  submitter.val(Drupal.t('Loading...'));
  extraData = {};
  extraData[submitterName] = submitterVal;
  extraData['drupal_ajax'] = '1';
  formObj.a_ajaxSubmit({
    extraData : extraData,
    beforeSubmit : function(data) {
      data[data.length] = {
        name : submitterName,
        value : submitterVal
      };
      data[data.length] = {
        name : 'drupal_ajax',
        value : '1'
      };
      submitter.attr('disabled', 'disabled');
      return true;
    },
    dataType : 'json',
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      window.alert(Drupal.t('ajax.module: An unknown error has occurred.'));
      if (window.console) {
        console.log('error', arguments);
      }
      return true;
    },
    success: function(data){
      submitter.val(submitterVal);
      Drupal.Ajax.response(submitter, formObj, data);
      submitter.removeAttr('disabled');
      return true;
    }
  });
  return false;
};

/**
 * Handles messaging
 *
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} data
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.message = function(formObj, submitter, data, options) {
  var args;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  if (Drupal.Ajax.invoke('message', data)) {
    Drupal.Ajax.writeMessage(data.local.form, data.local.submitter, options);
    Drupal.Ajax.invoke('afterMessage', data);
  }
  return true;
};

/**
 * Writes message
 *
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.writeMessage = function(formObj, submitter, options) {
  var i, _i, thisItem, log, errBox, h, data;
  if (options.action === 'notify') {
    // Cleanups
    $('.messages, .ajax-preview', formObj).remove();
    $('input, textarea').removeClass('error status warning required');
    // Preview
    if (options.type === 'preview') {
      log = $('<div>').addClass('ajax-preview');
      log.html(options.messages);
      formObj.prepend(log);
    }
    // Status, Error, Message
    else {
      log = $('<ul>');
      errBox = $(".messages." + options.type, formObj[0])
      for (i = 0, _i = options.messages.length; i < _i; i++) {
        thisItem = $('#' + options.messages[i].id, formObj[0])
        thisItem.addClass(options.type);
        if (options.messages[i].required) {
          thisItem.addClass('required');
        }
        log.append('<li>' + options.messages[i].value + '</li>');
      }
      if (errBox.length === 0) {
        errBox = $("<div class='messages " + options.type + "'>");
        formObj.prepend(errBox);
      }
      errBox.html(log);
    }
  }
  else if (options.action === 'clear') {
    $('.messages, .ajax-preview', formObj).remove();
  }
  return true;
};

/**
 * Updates message containers
 *
 * @param {Object} updaters
 * @return {Bool}
 */
Drupal.Ajax.updater = function(updaters) {
  var i, _i, elm;
  for (i = 0, _i = updaters.length; i < _i; i++) {
    elm = $(updaters[i].selector);
    // HTML:IN
    if (updaters[i].type === 'html_in') {
      elm.html(updaters[i].value);
    }
    // HTML:OUT
    else if (updaters[i].type === 'html_out') {
      elm.replaceWith(updaters[i].value);
    }
    // FIELD
    else if (updaters[i].type === 'field') {
      elm.val(updaters[i].value);
    }
    // REMOVE
    else if(updaters[i].type === 'remove') {
      elm.remove();
    }
    // HIDE
    else if(updaters[i].type === 'hide') {
      elm.hide();
    }
  }
  return true;
};

/**
 * Handles data response
 *
 * @param {Object} submitter
 * @param {Object} formObj
 * @param {Object} data
 * @return {Bool}
 */
Drupal.Ajax.response = function(submitter, formObj, data){
  var newSubmitter;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  /**
   * Failure
   */
  if (data.status === false) {
    Drupal.Ajax.updater(data.updaters);
    Drupal.Ajax.message(formObj, submitter, data, {
      action : 'notify',
      messages : data.messages_error,
      type : 'error'
    });
  }
  /**
   * Success
   */
  else {
    // Display preview
    if (data.preview !== null) {
      Drupal.Ajax.updater(data.updaters);
      Drupal.Ajax.message(formObj, submitter, data, {
        action : 'notify',
        messages : decodeURIComponent(data.preview),
        type : 'preview'
      });
    }
    // If no redirect, then simply show messages
    else if (data.redirect === null) {
      if (data.messages_status.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_status,
          type : 'status'
        });
      }
      if (data.messages_warning.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_warning,
          type : 'warning'
        });
      }
      if (data.messages_status.length === 0 &&
          data.messages_warning.length === 0) {
        Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
      }
    }
    // Redirect
    else {
      if (Drupal.Ajax.invoke('redirect', data)) {
        Drupal.Ajax.redirect( data.redirect );
      }
      else {
        Drupal.Ajax.updater(data.updaters);
        if (data.messages_status.length === 0 &&
            data.messages_warning.length === 0) {
          Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
        }
        else {
          Drupal.Ajax.message(formObj, submitter, data, {
            action : 'notify',
            messages : data.messages_status,
            type : 'status'
          });
        }
      }
    }
  }
  return true;
};


/**
 * Redirects to appropriate page
 *
 * @todo
 *   Some of this functionality should possibly hapen on
 *   the server instead of client.
 * @param {String} url
 */
Drupal.Ajax.redirect = function(url) {
  window.location.href = url;
};

Drupal.behaviors.Ajax = Drupal.Ajax.init;


;
Drupal.behaviors.masthead = function(context) {
  var $this;
  var mh = $('.mh', context);
  var mhLi = $('li', mh);
  var menuLi = $('.mh-user-menu li', mh);
  var menuItem = $('> span', menuLi);
  var navLink = $('.sub-menu-link', context);
  var mhSearch = $('.mh-search', mh);
  var event = Econ.addTouchStartEvent();
  $('.search-field', mh)
    .focus(function(){
      mhSearch.addClass('focus');
    })
    .blur(function() {
      mhSearch.removeClass('focus');
    });
  if (Econ.isTouchDevice()) {
    var showSubmenu = function($this) {
      mhLi.not($this.parent('li')).removeClass('hovered');
      $this.parent('li').toggleClass('hovered');
    };
    menuItem.bind(event, function(e) {
      e.preventDefault();
      $this = $(this);
      showSubmenu($this);
    });
    navLink.bind(event, function(e) {
      e.preventDefault();
      $this = $(this);
      showSubmenu($this);
    });
  }
  // Only if we are http use this click function.
  if (document.location.protocol == 'http:') {

    $('a.show-login', context).click(function(e) {
      e.preventDefault();
      var w = $(document).width();
      Econ.generateOverlay();
      var overlay = $('.ec-overlay');
      var errorMsg = function(f) {
        var m;
        switch (f) {
          case 'email':
            m = 'Please enter your e-mail address';
            break;
          case 'password':
            m = 'Please enter your password';
            break;
          default:
            m = 'Required field';
            break;
        }
        return '<span class="ec-error-msg">' + m + '</span>';
      };
      var validateMe = function(fields){
        var i = 0;
        $.each(fields, function(k, v){
            if (v.val() === '') {
              if (!v.hasClass('ec-form-error')) {
                v.before(errorMsg(v.attr('type'))).addClass('ec-form-error');
              }
            i++;
          }
          else {
            v.removeClass('ec-form-error').siblings('.ec-error-msg').remove();
          }
        });
        return (i > 0) ? false : true;
      };
      var closeOverlay = function(){
        overlay.remove();
      };
      if ($('body.page-user form[id*=user-login]').length) {
        // We are already on the log-in page, we won't show the login box we will
        // scroll down to the login form instead.
        $('html, body').animate({
          scrollTop: ($('form[id*=user-login]').offset().top - 30)
        }, 600);
        $('input[id*="edit-name"]').focus();
      }
      else {
        var loginWrap = $('<div class="login-wrap ajax-loader" />');
        loginWrap.appendTo(overlay).css({
          'left': w/2 - loginWrap.outerWidth()/2
        });

        var query = '';
        var destination = window.location.pathname;
        if (destination.indexOf(Drupal.settings.basePath) === 0) {
          destination = destination.substr(Drupal.settings.basePath.length);
        }

        query = '?destination=' + (destination ? destination : '<front>');
        loginWrap.load('/ecouser/ajax/login' + query, function() {
          var action = typeof(Drupal.settings.loginform.action) === "object" ? Drupal.settings.loginform.action[0] : Drupal.settings.loginform.action;
          loginWrap.prepend('<span></span><div class="close">Close</div>');
          $('form#user-login').attr('action', action);
          $('.close', loginWrap).click(function() {
            closeOverlay();
          });
          overlay.click(function(e) {
            if (e.target.className === 'ec-overlay'){
              closeOverlay();
            }
          });

          loginWrap.removeClass('ajax-loader');

          $('form#user-login').submit(function(){
            return validateMe([$('#edit-name'), $('#edit-pass')]);
          });
          Drupal.behaviors.ec_tip('#user-login');
        });
      }
    });
  }

  $('a.show-user-menu', context).click(function(e) {
    e.preventDefault();
    if ($('li#user_account_menu div.item-list').css('display') == "none") {
      $('li#user_account_menu').addClass('account-menu-opened');
      $('li#user_account_menu div.item-list').show('slow');
    }
    else {
      $('li#user_account_menu').removeClass('account-menu-opened');
      $('li#user_account_menu div.item-list').hide('slow');
    }
  });
  $('a.show-user-menu', context).mouseenter(function(e) {
    e.preventDefault();
    $('li#user_account_menu').addClass('account-menu-hover');
  });
  $('a.show-user-menu', context).mouseleave(function(e) {
    e.preventDefault();
    $('li#user_account_menu').removeClass('account-menu-hover');
  });
  $('a.show-extra-shares', context).click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($('div#header-social-links-extras').css('display') == "none") {
      $this.addClass('share-links-active');
      $('div#header-social-links-extras').show('slow');
    }
    else {
      $this.removeClass('share-links-active');
      $('div#header-social-links-extras').hide('slow');
    }
  });
};
;
/**
 * Printer-friendly functionality
 */
Drupal.behaviors.printerfriendly = function(context) {
  // If there is no printer friendly functionality for the specific node, disable
  // the link and display the browser print pop up.
  var defaultVersion = Drupal.settings.defaultversion;
  if (defaultVersion) {
    $("ul.ec-page-tools li.pt-print a").click(function(e){
      e.preventDefault();
      window.print();
    });
  }
};

/**
 * Rights and syndication functionality
 */  
Drupal.behaviors.rightsInformation = function(context) {
  var reprintsUrl = Drupal.settings.reprints_link;
  if (reprintsUrl) {
    $(".pt-randr a", context).click(function(e) {
      e.preventDefault();
      var features = "height=700,width=800,scrollTo,resizable=1,scrollbars=1,location=0";
      window.open(reprintsUrl, 'Popup', features);
    });
  }
}

/**
 * Email a friend functionality
 */
Drupal.behaviors.emailAFriend = function(){

  // SHARE: Display the share-links by clicking on share
  $("li.pt-share a.pt-share-anchor").click(function(e){
    e.preventDefault();
    $(this).parent().addClass("pt-share-changeico")
    $(this).next().addClass("pt-share-show");
  });
  $("ul.pt-share").mouseover(function(){
    $(this).addClass("pt-share-show");
  });
  $("li.pt-share").mouseout(function(){
    $("ul", this).removeClass("pt-share-show");
  });

  	// EMAIL A FRIEND: Display the email a friend form for the compact page-tools component
  $("ul.ec-pt-compact li.pt-email a").click(function(e){
    e.preventDefault();
    // Remove the compact email a friend if it exists (like clicking on the close buttons)
    if ($("div.eaf-compact").length) {
      $("div.eaf-compact").remove();
    }
    else{
      if ($("div.eaf-expanded").length) {
        $("div.eaf-expanded").remove();
      }
      // Load the compact email a friend
      $("ul.ec-pt-compact").after("<div class='ec-email-a-friend eaf-compact'></div>");
      $(this).addClass("ajax-loader");
      $("div.eaf-compact").load($("ul.ec-page-tools li.pt-email a").attr("href") + "/ajax", function(){eaf_form_functionality('compact')});
    }
  });
  // Display the email a friend form for the expanded page-tools component in node view
  $("ul.ec-pt-expanded li.pt-email a").not('ul.ec-pt-expanded-teaser li.pt-email a').click(function(e){
    e.preventDefault();
    // Remove the compact email a friend if it exists (like clicking on the close buttons)
     if ($("div.eaf-expanded").length) {
      $("div.eaf-expanded").remove();
    }
    else{
      if ($("div.eaf-compact").length) {
        $("div.eaf-compact").remove();
      }
      // Load the expanded email a friend
      $("ul.ec-pt-expanded").after("<div class='ec-email-a-friend eaf-expanded eaf-expanded-node'></div>");
      $(this).addClass("ajax-loader");
      $("div.eaf-expanded").load($(this).attr("href") +  "/ajax", function(){eaf_form_functionality('expanded')});
    }
  });
  // Display the email a friend form for the expanded page-tools component in teaser view
  $("ul.ec-pt-expanded-teaser li.pt-email a").click(function(e){
    e.preventDefault();
    // Remove the compact email a friend if it exists (like clicking on the close buttons)
     if ($("div.eaf-expanded-teaser").length) {
      $("div.eaf-expanded-teaser").remove();
      }
      // Load the expanded email a friend
      $(this).parent().parent().after("<div class='ec-email-a-friend eaf-expanded eaf-expanded-teaser'></div>");
      $(this).addClass("ajax-loader");
      $("div.eaf-expanded-teaser").load($(this).attr("href") +  "/ajax", function(){eaf_form_functionality('expanded')});
  });
};
// EMAIL A FRIEND
function eaf_form_functionality(form) {
  if ($('div.ec-email-a-friend p.eaf-thanks').length) {
    // After 4 seconds, slowly fadeout and then remove the confirmation.
    setTimeout(function() {
      $('div.ec-email-a-friend p.eaf-thanks').fadeOut('slow', function() {
        $("div.ec-email-a-friend").remove();
      });
    }, 4000);
  }
  $("div.eaf-" + form + " div.eaf-close").click(function(){
    $("div.eaf-" + form).remove();
  });
  $("ul li.pt-email a").removeClass("ajax-loader");
  $("div.eaf-" + form + " input.eaf_submit_btn").click(function(e){
    e.preventDefault();
    ec_eaf_submit(form);
  });
  if ($("input.error").length) {
	  $("input.eaf_submit_btn").after("<div class='eaf-warning'><em>Some of the information you supplied appears to be incorrect.</em></div>");
  }
}
// EMAIL A FRIEND: ajax functionality
function ec_eaf_submit(form) {
  var url_eaf = $("form#ec-components-eaf").attr("action");

  // create the ajax submit functionality
  $.ajax({
    type: "POST",
    data: $("form#ec-components-eaf").serialize(),
    url: url_eaf,
    beforeSend: function(){
      if ($("div.eaf-warning").length) {
        $("div.eaf-warning").remove();
      }
      if (!$("span.ajax-working").length) {
        $("input.eaf_submit_btn").after("<span class='ajax-working'>Working...</span>");
      }
    },
    success: function(html, XMLHttpRequest){
      $("div.eaf-" + form + " form").remove();
      $("div.eaf-" + form).append(html);
      eaf_form_functionality(form);
    }
  });
};
$(document).ready(function(){

  // POLL VOTE: Add ajax functionality
  $("#node-poll-article input#edit-vote").click(function(e){
    e.preventDefault();

    // create the set of data to be sent on form submission
	  var data="choice=" + $('input[name=choice]:checked').val();
	  data += "&op=Submit+and+see+results";
	  data += "&form_build_id=" +  $('input[name="form_build_id"]').val();
	  data += "&form_token=" +  $('input[name="form_token"]').val();
	  data += "&ajax=true&form_id=poll_view_voting";

    var url_poll = $("form#poll-view-voting").attr("action");

    if ($('input[name=choice]:checked').val()){
	    $.ajax({
	    type: "POST",
	    data: data,
	    url: url_poll,
	    beforeSend: function(){
	      $("input#edit-vote").after("<span class='ajax-working'>Working...</span>");
	    },
	    success: function(html, XMLHttpRequest){
 	      $("div#node-poll-article div.content").remove();
	      $("div#node-poll-article").append(html);
	    }
		 });
	  }
  });
});


;
(function($, Drupal) {

Drupal.behaviors.site_index = function(context) {
  var $context = $(context);
  
  if ($context.find('body').hasClass('site-index-processed')) {
    return;
  }
  
  $("li.site-index a").click(function(e) {
    var $overlay = $("<div id='site-map-overlay'></div>")
      .height(document.body.clientHeight)
      .insertBefore("#page");
    
    var $container = $('<div id="site-map-container"><span class="container-close" /><div id="site-map-box" /></div>')
      .appendTo('body');
    
    $("#site-map-box")
      .append("<span class='loader'>Working...</span>")
      .load("/content/ajax/site-index", function() {
        sortMap();
      });
    
    // Place the overlay box in the center of the screen.
    $container.css({
      top: $(window).scrollTop() + 30,
      left: $(window).width() / 2 - 427.5
    });
 
    // Close the overlay if either the grey area or the close icon is clicked.
    $overlay.click(function() {
      $container.remove();
      $overlay.remove();
    });
         
    $("span.container-close").click(function() {
      $container.remove();
      $overlay.remove();
    });
    
    return false;
  });
  
  $context.find('body').addClass('site-index-processed');
};

function sortMap() {
  // Remove loader image.
  $("span.loader").remove();
  
  // Remove opacity.
  $("#site-map-box div.list-box").css({
    "filter": "alpha(opacity=100)",
    "-moz-opacity": "1",
    "opacity": "1"
  });
  
  // Toggle the sorting of the site index window.
  $("a.site-map-ajax").click(function(e) {
    // Add transparency to site index window content.
    $("#site-map-box div.list-box").css({
      "filter": "alpha(opacity=20)",
      "-moz-opacity": "0.2",
      "opacity": "0.2"
    });
    
    // Load correct site index window content.
    $("#site-map-box")
      .append('<span class="loader">Working...</span>')
      .load($(this).attr("href") + '?ajax', function(){
        sortMap();
      });
    
    return false;
  });
}

})(jQuery, Drupal);
;
$(document).ready(function(){
  $("div.views-field-editor-intro div.field-content span.continue").click(
    function() {
      $("div.views-field-editor-intro div.field-content span.part2").addClass('expand');
      $(this).remove();
    }
  );
})

;
// Flash Player Version Detection - Rev 1.6
// Detect Client Browser type
// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
  var version;
  var axo;
  var e;

  // NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

  try {
    // version will be set for 7.X or greater players
    axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
    version = axo.GetVariable("$version");
  } catch (e) {
  }

  if (!version)
  {
    try {
      // version will be set for 6.X players only
      axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
      
      // installed player is some revision of 6.0
      // GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
      // so we have to be careful. 
      
      // default to the first public version
      version = "WIN 6,0,21,0";

      // throws if AllowScripAccess does not exist (introduced in 6.0r47)    
      axo.AllowScriptAccess = "always";

      // safe to call for 6.0r47 or greater
      version = axo.GetVariable("$version");

    } catch (e) {
    }
  }

  if (!version)
  {
    try {
      // version will be set for 4.X or 5.X player
      axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
      version = axo.GetVariable("$version");
    } catch (e) {
    }
  }

  if (!version)
  {
    try {
      // version will be set for 3.X player
      axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
      version = "WIN 3,0,18,0";
    } catch (e) {
    }
  }

  if (!version)
  {
    try {
      // version will be set for 2.X player
      axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      version = "WIN 2,0,0,11";
    } catch (e) {
      version = -1;
    }
  }
  
  return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
  // NS/Opera version >= 3 check for Flash plugin in plugin array
  var flashVer = -1;
  
  if (navigator.plugins != null && navigator.plugins.length > 0) {
    if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
      var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
      var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
      var descArray = flashDescription.split(" ");
      var tempArrayMajor = descArray[2].split(".");      
      var versionMajor = tempArrayMajor[0];
      var versionMinor = tempArrayMajor[1];
      var versionRevision = descArray[3];
      if (versionRevision == "") {
        versionRevision = descArray[4];
      }
      if (versionRevision[0] == "d") {
        versionRevision = versionRevision.substring(1);
      } else if (versionRevision[0] == "r") {
        versionRevision = versionRevision.substring(1);
        if (versionRevision.indexOf("d") > 0) {
          versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
        }
      }
      var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
      //alert("flashVer="+flashVer);
    }
  }
  // MSN/WebTV 2.6 supports Flash 4
  else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
  // WebTV 2.5 supports Flash 3
  else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
  // older WebTV supports Flash 2
  else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
  else if ( isIE && isWin && !isOpera ) {
    flashVer = ControlVersion();
  }  
  return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
  versionStr = GetSwfVer();
  if (versionStr == -1 ) {
    return false;
  } else if (versionStr != 0) {
    if(isIE && isWin && !isOpera) {
      // Given "WIN 2,0,0,11"
      tempArray         = versionStr.split(" ");   // ["WIN", "2,0,0,11"]
      tempString        = tempArray[1];      // "2,0,0,11"
      versionArray      = tempString.split(",");  // ['2', '0', '0', '11']
    } else {
      versionArray      = versionStr.split(".");
    }
    var versionMajor      = versionArray[0];
    var versionMinor      = versionArray[1];
    var versionRevision   = versionArray[2];

          // is the major.revision >= requested major.revision AND the minor version >= requested minor
    if (versionMajor > parseFloat(reqMajorVer)) {
      return true;
    } else if (versionMajor == parseFloat(reqMajorVer)) {
      if (versionMinor > parseFloat(reqMinorVer))
        return true;
      else if (versionMinor == parseFloat(reqMinorVer)) {
        if (versionRevision >= parseFloat(reqRevision))
          return true;
      }
    }
    return false;
  }
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
    var str = '';
    if (isIE && isWin && !isOpera)
    {
      str += '<object ';
      for (var i in objAttrs)
        str += i + '="' + objAttrs[i] + '" ';
      for (var i in params)
        str += '><param name="' + i + '" value="' + params[i] + '" /> ';
      str += '></object>';
    } else {
      str += '<embed ';
      for (var i in embedAttrs)
        str += i + '="' + embedAttrs[i] + '" ';
      str += '> </embed>';
    }

    document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){  
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":  
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "id":
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}
;
Drupal.behaviors.blogsCariusel = function (context) {
  if (jQuery().jCarouselLite) {
    $('#block-ec_blogs-ec_blogs_block_landing_page_info .item-list', context).jCarouselLite({
      visible: 1,
      auto: 8000,
      speed: 500,
      circular: true
    });
  }
}
;
/**
 * @file
 * JavaScript to oscillate and dismiss drupal_set_message() dialogs.
 */

Drupal.behaviors.oscillateStatus = function(context) {
  $('.messages.messages-status:not(messages-status-processed)', context).addClass('messages-status-processed').
    animate( { backgroundColor: '#a5cbb4' }, 1000).
    animate( { backgroundColor: '#eafdea' }, 1000).
    animate( { backgroundColor: '#a5cbb4' }, 1000).
    animate( { backgroundColor: '#eafdea' }, 1000);
}

Drupal.behaviors.oscillatePublic = function(context) {
  $('.messages.messages-public:not(messages-public-processed)', context).addClass('messages-public-processed').
    animate( { backgroundColor: '#a5cbb4' }, 1000).
    animate( { backgroundColor: '#eafdea' }, 1000).
    animate( { backgroundColor: '#a5cbb4' }, 1000).
    animate( { backgroundColor: '#eafdea' }, 1000);
}

Drupal.behaviors.oscillateWarning = function(context) {
  $('.messages.messages-warning:not(messages-warning-processed)', context).addClass('messages-warning-processed').
    animate( { backgroundColor: '#ff9400' }, 1000).
    animate( { backgroundColor: '#ffefd8' }, 1000).
    animate( { backgroundColor: '#ff9400' }, 1000).
    animate( { backgroundColor: '#ffefd8' }, 1000);
}

Drupal.behaviors.oscillateError = function(context) {
  $('.messages.messages-error:not(messages-error-processed)', context).addClass('messages-error-processed').
    animate( { backgroundColor: '#f69697' }, 1000).
    animate( { backgroundColor: '#ffeded' }, 1000).
    animate( { backgroundColor: '#f69697' }, 1000).
    animate( { backgroundColor: '#ffeded' }, 1000);
}

Drupal.behaviors.dismissMessage = function(context) {
  $('.dismiss-messages:not(dismiss-messages-processed)', context).show().addClass('dismiss-messages-processed').click(function(e) {
    $(this).parent().fadeOut();
    e.preventDefault();
  });
}
;
/**
 * Add behaviors for the Interactive image map.
 */
Drupal.behaviors.interactiveMap = function(context) {
  $(".interactive-map-button", context).click(function() {
    var $this = $(this);
    if (!$this.parent('li').is('.map-image-front')){
      $('.ec-interactive-map li').removeClass('map-image-invisible');
      $('.map-image-front').addClass('map-image-invisible').removeClass('map-image-front');
      $this.parent().addClass("map-image-front");
      $('.ec-interactive-map h3 span').text($('span', $this).text());
    }
  });
};
;(function($){ // secure $ jQuery alias
/*******************************************************************************************/ 
// jquery.event.drag.js - rev 10
// Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
// Liscensed under the MIT License (MIT-LICENSE.txt)
// http://www.opensource.org/licenses/mit-license.php
// Created: 2008-06-04 | Updated: 2008-08-05
/*******************************************************************************************/
// Events: drag, dragstart, dragend
/*******************************************************************************************/

// jquery method
$.fn.drag = function( fn1, fn2, fn3 ){
  if ( fn2 ) this.bind('dragstart', fn1 ); // 2+ args
  if ( fn3 ) this.bind('dragend', fn3 ); // 3 args
  return !fn1 ? this.trigger('mousedown',{ which:1 }) // 0 args
    : this.bind('drag', fn2 ? fn2 : fn1 ); // 1+ args
  };

// special event configuration
var drag = $.event.special.drag = {
  distance: 0, // default distance dragged before dragstart
  setup: function( data ){
    data = $.extend({ distance: drag.distance }, data || {});
    $.event.add( this, "mousedown", drag.handler, data );
    },
  teardown: function(){
    $.event.remove( this, "mousedown", drag.handler );
    if ( this == drag.dragging ) drag.dragging = drag.proxy = null; // deactivate element
    selectable( this, true ); // enable text selection
    },
  handler: function( event ){ 
    var returnValue;
    // mousedown has initialized
    if ( event.data.elem ){ 
      // update event properties...
      event.dragTarget = event.data.elem; // source element
      event.dragProxy = drag.proxy || event.dragTarget; // proxy element or source
      event.cursorOffsetX = event.data.x - event.data.left; // mousedown offset
      event.cursorOffsetY = event.data.y - event.data.top; // mousedown offset
      event.offsetX = event.pageX - event.cursorOffsetX; // element offset
      event.offsetY = event.pageY - event.cursorOffsetY; // element offset
      }
    // handle various events
    switch ( event.type ){
      // mousedown, left click
      case !drag.dragging && event.which==1 && 'mousedown': // initialize drag
        $.extend( event.data, $( this ).offset(), { 
          x: event.pageX, y: event.pageY, elem: this, 
          dist2: Math.pow( event.data.distance, 2 ) //  x + y = distance
          }); // store some initial attributes
        $.event.add( document.body, "mousemove mouseup", drag.handler, event.data );
        selectable( this, false ); // disable text selection
        return false; // prevents text selection in safari 
      // mousemove, check distance, start dragging
      case !drag.dragging && 'mousemove': // DRAGSTART >> 
        if ( Math.pow( event.pageX-event.data.x, 2 ) 
          + Math.pow( event.pageY-event.data.y, 2 ) //  x + y = distance
          < event.data.dist2 ) break; // distance tolerance not reached
        drag.dragging = event.dragTarget; // activate element
        event.type = "dragstart"; // hijack event
        returnValue = $.event.handle.call( drag.dragging, event ); // trigger "dragstart", return proxy element
        drag.proxy = $( returnValue )[0] || drag.dragging; // set proxy
        if ( returnValue !== false ) break; // "dragstart" accepted, stop
        selectable( drag.dragging, true ); // enable text selection
        drag.dragging = drag.proxy = null; // deactivate element
      // mousemove, dragging
      case 'mousemove': // DRAG >> 
        if ( drag.dragging ){
          event.type = "drag"; // hijack event
          returnValue = $.event.handle.call( drag.dragging, event ); // trigger "drag"
          if ( $.event.special.drop ){ // manage drop events
            $.event.special.drop.allowed = ( returnValue !== false ); // prevent drop
            $.event.special.drop.handler( event ); // "dropstart", "dropend"
            }
          if ( returnValue !== false ) break; // "drag" not rejected, stop    
          event.type = "mouseup"; // hijack event
          }
      // mouseup, stop dragging
      case 'mouseup': // DRAGEND >> 
        $.event.remove( document.body, "mousemove mouseup", drag.handler ); // remove page events
        if ( drag.dragging ){
          if ( $.event.special.drop ) // manage drop events
            $.event.special.drop.handler( event ); // "drop"
          event.type = "dragend"; // hijack event
          $.event.handle.call( drag.dragging, event ); // trigger "dragend" 
          selectable( drag.dragging, true ); // enable text selection
          drag.dragging = drag.proxy = null; // deactivate element
          event.data = {};
          }
        break;
      } 
    } 
  };
  
// toggles text selection attributes  
function selectable( elem, bool ){ 
  if ( !elem ) return; // maybe element was removed ? 
  elem.unselectable = bool ? "off" : "on"; // IE
  elem.onselectstart = function(){ return bool; }; // IE
  if ( elem.style ) elem.style.MozUserSelect = bool ? "" : "none"; // FF
  };  

/*******************************************************************************************/
})( jQuery ); // confine scope
;
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

    // We override the animation for all of these color styles
    jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
        jQuery.fx.step[attr] = function(fx){
            if ( fx.state == 0 ) {
                fx.start = getColor( fx.elem, attr );
                fx.end = getRGB( fx.end );
            }

            fx.elem.style[attr] = "rgb(" + [
                Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
            ].join(",") + ")";
        }
    });

    // Color Conversion functions from highlightFade
    // By Blair Mitchelmore
    // http://jquery.offput.ca/highlightFade/

    // Parse strings looking for color tuples [255,255,255]
    function getRGB(color) {
        var result;

        // Check if we're already dealing with an array of colors
        if ( color && color.constructor == Array && color.length == 3 )
            return color;

        // Look for rgb(num,num,num)
        if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
            return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

        // Look for rgb(num%,num%,num%)
        if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
            return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

        // Look for #a0b1c2
        if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
            return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

        // Look for #fff
        if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
            return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

        // Look for rgba(0, 0, 0, 0) == transparent in Safari 3
        if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
            return colors['transparent'];

        // Otherwise, we're most likely dealing with a named color
        return colors[jQuery.trim(color).toLowerCase()];
    }

    function getColor(elem, attr) {
        var color;

        do {
            color = jQuery.curCSS(elem, attr);

            // Keep going until we find an element that has color, or we hit the body
            if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
                break;

            attr = "backgroundColor";
        } while ( elem = elem.parentNode );

        return getRGB(color);
    };

    // Some named colors to work with
    // From Interface by Stefan Petre
    // http://interface.eyecon.ro/

    var colors = {
        aqua:[0,255,255],
        azure:[240,255,255],
        beige:[245,245,220],
        black:[0,0,0],
        blue:[0,0,255],
        brown:[165,42,42],
        cyan:[0,255,255],
        darkblue:[0,0,139],
        darkcyan:[0,139,139],
        darkgrey:[169,169,169],
        darkgreen:[0,100,0],
        darkkhaki:[189,183,107],
        darkmagenta:[139,0,139],
        darkolivegreen:[85,107,47],
        darkorange:[255,140,0],
        darkorchid:[153,50,204],
        darkred:[139,0,0],
        darksalmon:[233,150,122],
        darkviolet:[148,0,211],
        fuchsia:[255,0,255],
        gold:[255,215,0],
        green:[0,128,0],
        indigo:[75,0,130],
        khaki:[240,230,140],
        lightblue:[173,216,230],
        lightcyan:[224,255,255],
        lightgreen:[144,238,144],
        lightgrey:[211,211,211],
        lightpink:[255,182,193],
        lightyellow:[255,255,224],
        lime:[0,255,0],
        magenta:[255,0,255],
        maroon:[128,0,0],
        navy:[0,0,128],
        olive:[128,128,0],
        orange:[255,165,0],
        pink:[255,192,203],
        purple:[128,0,128],
        violet:[128,0,128],
        red:[255,0,0],
        silver:[192,192,192],
        white:[255,255,255],
        yellow:[255,255,0],
        transparent: [255,255,255]
    };

})(jQuery);
;
/*
 * jQuery Form Plugin
 * version: 2.28 (10-MAY-2009)
 * @requires jQuery v1.2.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are intended to be exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').bind('submit', function() {
            $(this).ajaxSubmit({
                target: '#output'
            });
            return false; // <-- important!
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    if (typeof options == 'function')
        options = { success: options };

    var url = $.trim(this.attr('action'));
    if (url) {
	    // clean url (don't include hash vaue)
	    url = (url.match(/^([^#]+)/)||[])[1];
   	}
   	url = url || window.location.href || ''

    options = $.extend({
        url:  url,
        type: this.attr('method') || 'GET'
    }, options || {});

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var a = this.formToArray(options.semantic);
    if (options.data) {
        options.extraData = options.data;
        for (var n in options.data) {
          if(options.data[n] instanceof Array) {
            for (var k in options.data[n])
              a.push( { name: n, value: options.data[n][k] } );
          }
          else
             a.push( { name: n, value: options.data[n] } );
        }
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a);

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else
        options.data = q; // data is the query string for 'post'

    var $form = this, callbacks = [];
    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            $(options.target).html(data).each(oldSuccess, arguments);
        });
    }
    else if (options.success)
        callbacks.push(options.success);

    options.success = function(data, status) {
        for (var i=0, max=callbacks.length; i < max; i++)
            callbacks[i].apply(options, [data, status, $form]);
    };

    // are there files to upload?
    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j=0; j < files.length; j++)
        if (files[j])
            found = true;

	var multipart = false;
//	var mp = 'multipart/form-data';
//	multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    // options.iframe allows user to force iframe mode
   if (options.iframe || found || multipart) {
       // hack to fix Safari hang (thanks to Tim Molendijk for this)
       // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
       if (options.closeKeepAlive)
           $.get(options.closeKeepAlive, fileUpload);
       else
           fileUpload();
       }
   else
       $.ajax(options);

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
        var form = $form[0];

        if ($(':input[name=submit]', form).length) {
            alert('Error: Form elements must not be named "submit".');
            return;
        }

        var opts = $.extend({}, $.ajaxSettings, options);
		var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

        var id = 'jqFormIO' + (new Date().getTime());
        var $io = $('<iframe id="' + id + '" name="' + id + '" src="about:blank" />');
        var io = $io[0];

        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function() {
                this.aborted = 1;
                $io.attr('src','about:blank'); // abort op in progress
            }
        };

        var g = opts.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && ! $.active++) $.event.trigger("ajaxStart");
        if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && $.active--;
			return;
        }
        if (xhr.aborted)
            return;

        var cbInvoked = 0;
        var timedOut = 0;

        // add submitting element to data if we know it
        var sub = form.clk;
        if (sub) {
            var n = sub.name;
            if (n && !sub.disabled) {
                options.extraData = options.extraData || {};
                options.extraData[n] = sub.value;
                if (sub.type == "image") {
                    options.extraData[name+'.x'] = form.clk_x;
                    options.extraData[name+'.y'] = form.clk_y;
                }
            }
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        setTimeout(function() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);

            // ie borks in some cases when setting encoding
            if (! options.skipEncodingOverride) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (opts.timeout)
                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (options.extraData)
                    for (var n in options.extraData)
                        extraInputs.push(
                            $('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
                                .appendTo(form)[0]);

                // add iframe to doc and submit the form
                $io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
                t ? form.setAttribute('target', t) : $form.removeAttr('target');
                $(extraInputs).remove();
            }
        }, 10);

        var nullCheckFlag = 0;

        function cb() {
            if (cbInvoked++) return;

            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) throw 'timeout';
                // extract the server response from the iframe
                var data, doc;

                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;

                if ((doc.body == null || doc.body.innerHTML == '') && !nullCheckFlag) {
                    // in some browsers (cough, Opera 9.2.x) the iframe DOM is not always traversable when
                    // the onload callback fires, so we give them a 2nd chance
                    nullCheckFlag = 1;
                    cbInvoked--;
                    setTimeout(cb, 100);
                    return;
                }

                xhr.responseText = doc.body ? doc.body.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': opts.dataType};
                    return headers[header];
                };

                if (opts.dataType == 'json' || opts.dataType == 'script') {
                    var ta = doc.getElementsByTagName('textarea')[0];
                    xhr.responseText = ta ? ta.value : xhr.responseText;
                }
                else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
                    xhr.responseXML = toXml(xhr.responseText);
                }
                data = $.httpData(xhr, opts.dataType);
            }
            catch(e){
                ok = false;
                $.handleError(opts, xhr, 'error', e);
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (ok) {
                opts.success(data, 'success');
                if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
            }
            if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
            if (g && ! --$.active) $.event.trigger("ajaxStop");
            if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

            // clean up
            setTimeout(function() {
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        };

        function toXml(s, doc) {
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
        };
    };
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().bind('submit.form-plugin',function() {
        $(this).ajaxSubmit(options);
        return false;
    }).each(function() {
        // store options in hash
        $(":submit,input:image", this).bind('click.form-plugin',function(e) {
            var form = this.form;
            form.clk = this;
            if (this.type == 'image') {
                if (e.offsetX != undefined) {
                    form.clk_x = e.offsetX;
                    form.clk_y = e.offsetY;
                } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
                    var offset = $(this).offset();
                    form.clk_x = e.pageX - offset.left;
                    form.clk_y = e.pageY - offset.top;
                } else {
                    form.clk_x = e.pageX - this.offsetLeft;
                    form.clk_y = e.pageY - this.offsetTop;
                }
            }
            // clear form vars
            setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 10);
        });
    });
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    this.unbind('submit.form-plugin');
    return this.each(function() {
        $(":submit,input:image", this).unbind('click.form-plugin');
    });

};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for(var i=0, max=els.length; i < max; i++) {
        var el = els[i];
        var n = el.name;
        if (!n) continue;

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el) {
            	a.push({name: n, value: $(el).val()});
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        var v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(var j=0, jmax=v.length; j < jmax; j++)
                a.push({name: n, value: v[j]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: n, value: v});
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0], n = input.name;
        if (n && !input.disabled && input.type == 'image') {
        	a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) return;
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++)
                a.push({name: n, value: v[i]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: this.name, value: v});
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *       array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
            continue;
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1))
            return null;

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) return null;
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
                	v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                if (one) return v;
                a.push(v);
            }
        }
        return a;
    }
    return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
            this.reset();
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b == undefined) b = true;
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select == undefined) select = true;
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio')
            this.checked = select;
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
    if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
        window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);
;
/* 
 * Auto Expanding Text Area (1.2.2)
 * by Chrys Bader (www.chrysbader.com)
 * chrysb@gmail.com
 *
 * Special thanks to:
 * Jake Chapa - jake@hybridstudio.com
 * John Resig - jeresig@gmail.com
 *
 * Copyright (c) 2008 Chrys Bader (www.chrysbader.com)
 * Licensed under the GPL (GPL-LICENSE.txt) license. 
 *
 *
 * NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 *
 */
 
(function(jQuery) {
		  
	var self = null;
 
	jQuery.fn.autogrow = function(o)
	{	
		return this.each(function() {
			new jQuery.autogrow(this, o);
		});
	};
	

    /**
     * The autogrow object.
     *
     * @constructor
     * @name jQuery.autogrow
     * @param Object e The textarea to create the autogrow for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     * @cat Plugins/autogrow
     */
	
	jQuery.autogrow = function (e, o)
	{
		this.options		  	= o || {};
		this.dummy			  	= null;
		this.interval	 	  	= null;
		this.line_height	  	= this.options.lineHeight || parseInt(jQuery(e).css('line-height'));
		this.min_height		  	= this.options.minHeight || parseInt(jQuery(e).css('min-height'));
		this.max_height		  	= this.options.maxHeight || parseInt(jQuery(e).css('max-height'));;
		this.textarea		  	= jQuery(e);
		
		if(this.line_height == NaN)
		  this.line_height = 0;
		
		// Only one textarea activated at a time, the one being used
		this.init();
	};
	
	jQuery.autogrow.fn = jQuery.autogrow.prototype = {
    autogrow: '1.2.2'
  };
	
 	jQuery.autogrow.fn.extend = jQuery.autogrow.extend = jQuery.extend;
	
	jQuery.autogrow.fn.extend({
						 
		init: function() {			
			var self = this;			
			this.textarea.css({overflow: 'hidden', display: 'block'});
			this.textarea.bind('focus', function() { self.startExpand() } ).bind('blur', function() { self.stopExpand() });
			this.checkExpand();	
		},
						 
		startExpand: function() {				
		  var self = this;
			this.interval = window.setInterval(function() {self.checkExpand()}, 400);
		},
		
		stopExpand: function() {
			clearInterval(this.interval);	
		},
		
		checkExpand: function() {
			
			if (this.dummy == null)
			{
				this.dummy = jQuery('<div></div>');
				this.dummy.css({
												'font-size'  : this.textarea.css('font-size'),
												'font-family': this.textarea.css('font-family'),
												'width'      : this.textarea.css('width'),
												'padding'    : this.textarea.css('padding'),
												'line-height': this.line_height + 'px',
												'overflow-x' : 'hidden',
												'position'   : 'absolute',
												'top'        : 0,
												'left'		 : -9999
												}).appendTo('body');
			}
			
			// Strip HTML tags
			var html = this.textarea.val().replace(/(<|>)/g, '');
			
			// IE is different, as per usual
			if ($.browser.msie)
			{
				html = html.replace(/\n/g, '<BR>new');
			}
			else
			{
				html = html.replace(/\n/g, '<br>new');
			}
			
			if (this.dummy.html() != html)
			{
				this.dummy.html(html);	
				
				if (this.max_height > 0 && (this.dummy.height() + this.line_height > this.max_height))
				{
					this.textarea.css('overflow-y', 'auto');	
				}
				else
				{
					this.textarea.css('overflow-y', 'hidden');
					if (this.textarea.height() < this.dummy.height() + this.line_height || (this.dummy.height() < this.textarea.height()))
					{	
						this.textarea.animate({height: (this.dummy.height() + this.line_height) + 'px'}, 100);	
					}
				}
			}
		}
						 
	 });
})(jQuery);;
/*
 * jQuery Timer Plugin
 * http://www.evanbot.com/article/jquery-timer-plugin/23
 *
 * @version      1.0
 * @copyright    2009 Evan Byrne (http://www.evanbot.com)
 */ 

jQuery.timer = function(time,func,callback){
	var a = {timer:setTimeout(func,time),callback:null}
	if(typeof(callback) == 'function'){a.callback = callback;}
	return a;
};

jQuery.clearTimer = function(a){
	clearTimeout(a.timer);
	if(typeof(a.callback) == 'function'){a.callback();};
	return this;
};;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/*
jquery.flash v1.3.1 -  02/01/10
(c)2009 Stephen Belanger - MIT/GPL.
http://docs.jquery.com/License
*/
Array.prototype.indexOf=function(o,i){for(var j=this.length,i=i<0?i+j<0?0:i+j:i||0;i<j&&this[i]!==o;i++);return j<=i?-1:i;};$.fn.extend({flash:function(opt){var has,cv,ie;function attr(a,b){return' '+a+'="'+b+'"';}function param(a,b){return'<param name="'+a+'" value="'+b+'" />';}var p=navigator.plugins;if(p&&p.length){var f=p['Shockwave Flash'];if(f){has=true;if(f.description)cv=f.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".");}if(p['Shockwave Flash 2.0']){has=true;cv='2.0.0.11';}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");cv=[6,0,21];has=true;}catch(e){};try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){};}if(axo!=null){cv=axo.GetVariable("$version").split(" ")[1].split(",");has=true;ie=true;}}$(this).each(function(){if(has){var e=$(this),s=$.extend({'id':e.attr('id'),'class':e.attr('class'),'width':e.width(),'height':e.height(),'src':e.attr('href'),'classid':'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000','pluginspace':'http://get.adobe.com/flashplayer','availattrs':['id','class','width','height','src'],'availparams':['src','bgcolor','quality','allowscriptaccess','allowfullscreen','flashvars','wmode'],'version':'9.0.24'},opt),a=s.availattrs,b=s.availparams,rv=s.version.split('.'),o='<object';if(!s.codebase){s.codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+rv.join(',');}if(s.express){for(var i in cv){if(parseInt(cv[i])>parseInt(rv[i])){break;}if(parseInt(cv[i])<parseInt(rv[i])){s.src=s.express;}}}if(s.flashvars){s.flashvars=unescape($.param(s.flashvars));}a=ie?a.concat(['classid','codebase']):a.concat(['pluginspage']);for(k in a){var n=(k==a.indexOf('src'))?'data':a[k];o+=s[a[k]]?attr(n,s[a[k]]):'';};o+='>';for(k in b){var n=(k==b.indexOf('src'))?'movie':b[k];o+=s[b[k]]?param(n,s[b[k]]):'';};o+='</object>';e.replaceWith(o);}return this;});}});;
(function(d){d.fn.jCarouselLite=function(e){e=d.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,autoPauseOnHover:false,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},e||{});return this.each(function(){var j=false,f=e.vertical?"top":"left",g=e.vertical?"height":"width";var q=d(this),o=d("ul",q),u=d("li",o),k=u.size(),m=e.visible;if(e.circular){o.prepend(u.slice(k-m-1+1).clone()).append(u.slice(0,m).clone());e.start+=m}var n=d("li",o),l=n.size(),w=e.start;q.css("visibility","visible");n.css({overflow:"hidden","float":e.vertical?"none":"left"});o.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});q.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var y=e.vertical?a(n):c(n);var x=y*l;var p=y*m;n.css({width:n.width(),height:n.height()});o.css(g,x+"px").css(f,-(w*y));q.css(g,p+"px");if(e.btnPrev){d(e.btnPrev).click(function(){return t(w-e.scroll)})}if(e.btnNext){d(e.btnNext).click(function(){return t(w+e.scroll)})}if(e.btnGo){d.each(e.btnGo,function(v,z){d(z).click(function(){return t(e.circular?e.visible+v:v)})})}if(e.mouseWheel&&q.mousewheel){q.mousewheel(function(v,z){return z>0?t(w-e.scroll):t(w+e.scroll)})}if(e.auto){var h;var s=function(){h=setInterval(function(){t(w+e.scroll)},e.auto+e.speed)};var i=function(){clearInterval(h)};s();if(e.autoPauseOnHover){if(e.autoPauseOnHover===true){d(this).hover(i,s)}else{d(e.autoPauseOnHover).hover(i,s)}}}function r(){return n.slice(w).slice(0,m)}function t(v){if(!j){if(e.beforeStart){e.beforeStart.call(this,r())}if(e.circular){if(v<=e.start-m-1){o.css(f,-((l-(m*2))*y)+"px");w=v==e.start-m-1?l-(m*2)-1:l-(m*2)-e.scroll}else{if(v>=l-m+1){o.css(f,-((m)*y)+"px");w=v==l-m+1?m+1:m+e.scroll}else{w=v}}}else{if(v<0){v=0}else{if(v>l-m){v=l-m}}if(w==v){return}w=v}j=true;o.animate(f=="left"?{left:-(w*y)}:{top:-(w*y)},e.speed,e.easing,function(){if(e.afterEnd){e.afterEnd.call(this,r())}j=false});if(!e.circular){d(e.btnPrev+","+e.btnNext).removeClass("disabled");d((w==0&&e.btnPrev)||(w>=l-m&&e.btnNext)||[]).addClass("disabled")}}return false}})};function b(e,f){return parseInt(d.css(e[0],f))||0}function c(e){return e[0].offsetWidth+b(e,"marginLeft")+b(e,"marginRight")}function a(e){return e[0].offsetHeight+b(e,"marginTop")+b(e,"marginBottom")}})(jQuery);;
/* global Econ, jQuery, Drupal */

Econ.gpt = Econ.gpt || {};

(function(Econ, $, Drupal) {
  "use strict";

  Econ.gpt.stickyAds = function() {
    var leaderBoard = document.getElementById('leaderboard'),
        $leaderBoard = $(leaderBoard),
        $adBlock = $('#block-ec_ads-leaderboard_ad'),
        // Add a div to replace the fixed positioned leaderboard.
        $adBlockClone = $('<div id="fixedAdBlockClone"></div>'),
        adBlockHeight,
        $window = $(window),
        startTiming = false,
        stickyDuration = typeof Drupal.settings.adsStickyTiming !== 'undefined' ? Drupal.settings.adsStickyTiming : 3000;

    // Reset positioning.
    var disableFixed = function() {
      $leaderBoard.fadeOut(1000, function() {
        $leaderBoard.removeClass('adsFixed').addClass('adsPosDefault').css({'display':'block'});
      });
    };

    adBlockHeight = parseInt($adBlock.outerHeight(true), 10);
    $adBlockClone.css({'width':'100%','height':adBlockHeight,'padding-bottom':10});
    $leaderBoard.after($adBlockClone);
    leaderBoard.className = leaderBoard.className + " adsFixed";

    // Trigger the timing behavior on scroll.
    $window.bind('scroll', function() {
      if (leaderBoard.className.search("adShadow") === -1) {
        leaderBoard.className = leaderBoard.className + " adShadow";
      }  
      if (startTiming === false) {
        setTimeout(disableFixed, stickyDuration);
      }
      startTiming = true;
    });
  };

})(Econ, jQuery, Drupal);

;
