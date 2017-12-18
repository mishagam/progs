/*! bbc-pal-share - v0.4.1 - 2014-08-15 */

define("dom",["require","exports","module"],function(e,t){var n,r={addClass:function(e,t){n(e).addClass(t)},findElement:function(e){return n(e)},find:function(e,t){return n(e).find(t)},children:function(e,t){return n(e).children(t)},parent:function(e,t){return n(e).parent(t)},removeClass:function(e,t){n(e).removeClass(t)},on:function(e,t,r,i){n(e).on(t,r,i)},bind:function(e,t,n){e.bind(t,n)},scroll:function(e){n(window).scroll(e)},onElem:function(e,t,r){n(e).on(t,r)},off:function(e,t,r,i){n(e).on(t,r,i)},is:function(e,t){return n(e).is(t)},next:function(e){return n(e).next()},hasClass:function(e,t){return n(e).hasClass(t)},offset:function(e){return n(e).offset()},outerWidth:function(e){return n(e).outerWidth()},outerHeight:function(e){return n(e).outerHeight()},closest:function(e,t){return n(e).closest(t)},attr:function(e,t){return n(e).attr(t)},addAttr:function(e,t,r){return n(e).attr(t,r)},resize:function(e){n(window).resize(e)},toggleClass:function(e,t){n(e).toggleClass(t)},each:function(e,t){n(e).each(t)},each2:function(e,t){n.each(e,t)},extend:function(e,t,r){typeof e!="undefined"?n.extend(t,r):n.extend(e,t,r)},css:function(e,t,r){return r!==undefined?n(e).css(t,r):n(e).css(t)},append:function(e,t){n(e).append(t)},ajax:function(e){n.ajax(e)},serialize:function(e){return n(e).serialize()},serializeArray:function(e){return n(e).serializeArray()},html:function(e){return n(e).html()},focus:function(e){n(e).focus()},blur:function(e){n(e).blur()},fadeIn:function(e,t,r){n(e).fadeIn(t,r)},fadeOut:function(e,t,r){n(e).fadeOut(t,r)},contains:function(e,t){return n.contains(e,t)},replaceWith:function(e,t){n(e).replaceWith(t)},map:function(e,t){n.map(e,t)}};return t.init=function(t){n?t(r):e(["jquery-1.9"],function(e){n=e,t(r)})},t}),define("bbcshrink/adapter/ajax",["require","exports","module"],function(e,t){var n,r={get:function(e,t,r,i,s,o){if(e===undefined)throw"URL must be defined when calling ajaxAdapter.get()";t=t===undefined?{}:t,r=r===undefined?"json":r,i=i===undefined?!0:i,s=s===undefined?function(){}:s,o=o===undefined?function(){}:o,e=this.encodePartUrl(e),n.ajax({url:e,data:t,dataType:r,async:i}).done(s).fail(o)},encodePartUrl:function(e){var t=e.indexOf("?"),n=[e.slice(0,t),e.slice(t+5)],r=encodeURIComponent(n[1]);return n[0]+"?url="+r}};return t.init=function(t){n?t(r):e(["jquery-1.9"],function(e){n=e,t(r)})},t}),define("bbcshrink",["exports","bbcshrink/adapter/ajax"],function(e,t){return e=e||{},e={shortenApiRelUrl:"/modules/share/service/shrink?url=",shortenedUrls:{},getShortUrl:function(e,n){var r=this;t.init(function(t){if(r.shortenedUrls[e]!==undefined){n(r.shortenedUrls[e]);return}t.get(r.shortenApiRelUrl+e,{},"json",!1,function(t){if(t.url===undefined)throw"Returned data from Shrink endpoint was malformed";r.shortenedUrls[e]=t.url,n(t.url)},function(){r.shortenedUrls[e]=e,n(e)})})}},e}),define("locale",{"cy-gb":{Share:"Rhannu","this page":"’r dudalen yam","This page has been shared %s times":"Mae hwn wedi ei rannu %s o weithiau","Share this with":"Rhannwch hwn ar","Read more about these links.":"Darllenwch fwy am y dolenni hyn.",Close:"Cau"},"gd-gb":{Share:"Sgaoil","this page":"an duilleag-sa","This page has been shared %s times":"Chaidh seo a sgaoileadh %s turais","Share this with":"Sgaoil seo le","Read more about these links.":"Leugh tuilleadh mu na ceanglaichean seo.",Close:"Dùin"},"ga-gb":{Share:"Roinn","this page":"an leathanach seo","This page has been shared %s times":"Roinneadh e seo %s uair","Share this with":"Roinn é seo le","Read more about these links.":"Léigh tuilleadh faoi na naisc seo.",Close:"Druid"},"en-gb":{Share:"Share","this page":"this page","This page has been shared %s times":"This page has been shared %s times","Share this with":"Share this with","Read more about these links.":"Read more about these links.",Close:"Close"}}),define("bbctranslate",["exports","locale"],function(e){return e=e||{},e={normaliseLocale:function(e){e=typeof e=="string"&&e.toLowerCase()||"en-gb";var t={en:"en-gb",cy:"cy-gb",ga:"ga-gb",gd:"gd-gb","en-gb":"en-gb","cy-gb":"cy-gb","ga-gb":"ga-gb","gd-gb":"gd-gb"};return t[e]||"en-gb"},getTranslations:function(e,t,n){var r=require("locale"),i;return e=this.normaliseLocale(e),i=r[e][t],typeof n!="undefined"&&(i=i.replace("%s",n)),i}},e}),define("bbcshare/adapter/stats",["require","exports","module"],function(e,t){var n,r={addNoTrack:function(e){n.addNoTrack(e)},log:function(e,t,r,i){r=r||{},i=i||function(){},n.log(e,t,r,i)}};t.init=function(t){n?t(r):e(["istats-1"],function(e){n=e,t(r)})}}),define("bbcpolyfill",["dom"],function(e,t){return t={init:function(){var e=this;e.setStorage()},windowLocationOriginPrototype:function(){return window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},mapPrototype:function(){Array.prototype.map=function(e,t){var n,r,i;if(this==null)throw new TypeError(" this is null or not defined");var s=Object(this),o=s.length>>>0;if(typeof e!="function")throw new TypeError(e+" is not a function");t&&(n=t),r=new Array(o),i=0;while(i<o){var u,a;if(i in s){var f=i.toString();u=s[f],a=e.call(n,u,i,s),r[f]=a}i++}return r}},indexOfPrototype:function(){Array.prototype.indexOf=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:r!==0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}}},t}),define("bbcstorage",["dom","bbcpolyfill"],function(e,t,n){var r=["app_id","css","js","redirect_uri"],i;return n={init:function(){var e=this;e.setStorage()},setStorage:function(){var e=this;Array.prototype.indexOf||t.indexOfPrototype(),e.parseAllButtons(r);return},getStorage:function(){return i},getButtonConfig:function(e){try{if(typeof i[e]=="undefined")throw e;return i[e]}catch(t){return console.error("Can't read ",e,"configuration from stored confs. Seems to be eaten by werewolves."),console.error("... or store module doesn't work"),"error"}},setButtonConfig:function(e){var t=this;i[e.shareId]=null,i[e.shareId]=t.parseButton(e);return},updateButtonConfig:function(e,t){for(var n in e)i[t.shareId].option=n;return},parseButton:function(e){for(var t in e)if(t=="networks")for(var n=0;n<e.networks.length;n++)e.networks[n]=e.networks[n].name;return e},parseAllButtons:function(){e.init(function(e){var t={},n={},s=[],o="",u="";e.each(e.findElement(".s-b-container"),function(){u=e.attr(e.find(this,".s-b-button"),"id"),e.each2(e.serializeArray(e.find(this,"form")),function(){r.indexOf(this.name)==-1&&(n[this.name]=this.value)}),t[u]=n,n={},e.each2(e.find(this,".s-b-panel ul a"),function(){o=e.attr(this,"data-network"),s.push(o),t[u].networks=s}),s=[]}),i=t});return}},n}),define("bbcshare/ui/share-view",["dom","bbcshrink","bbctranslate","bbcshare/adapter/stats","bbcstorage","bbcpolyfill","exports"],function(e,t,n,r,i,s,o,u,a){return a=!1,u={stats:{actionType:"share",actionName:"psp_share_%network%"},init:function(e){this.options=e,this.selector="."+u.classes.container,this.container={},this.button={},this.$panel={},this.windowSize=[],i.init(this.selector),this.attachEvents("click"),this.networksToShorten=["twitter"],this.dragging=!1,this.embedId=""},attachEvents:function(t){var n=this;e.init(function(e){n.bindOffPanelClick(e,"body"),e.onElem("body","touchstart",function(){n.dragging=!1}),e.onElem("body","touchmove",function(){n.dragging=!0}),e.onElem(window,"orientationchange",function(){n.checkForActivePanels(e),n.panelClose(e)}),e.on("body","keydown",n.selector,function(t){var r=n.getEventCode(t),i=e.attr(e.find(e.findElement(this),"."+u.classes.button),"id"),s=e.findElement("#"+i+"-panel");r==9&&e.hasClass(s,u.classes.panelOpen)?setTimeout(function(){e.focus("#"+i+"-panel"+" ."+u.classes.networks+" li:eq(0) a")},1):r==27&&e.hasClass(s,u.classes.panelOpen)&&n.checkForActivePanels(e)}),e.on("body","keydown"," ."+u.classes.networks+" a",function(t){var r=n.getEventCode(t),i=e.attr(e.closest(e.findElement(this),"."+u.classes.panel),"id"),s=i.replace("-panel","");r==27&&e.hasClass(e.findElement("#"+i),u.classes.panelOpen)&&(e.focus(e.findElement("#"+s)),n.checkForActivePanels(e))}),e.on("body",t,n.selector,function(t){t.preventDefault(),n.disableLinkTracking(),n.bindOffPanelClick(e,"a.view"),n.button.ID=e.attr(e.find(e.findElement(this),"."+u.classes.button),"id"),n.getButtonPosition(e,n.button.ID),n.$panel=e.findElement("#"+n.button.ID+"-panel"),n.$panel.ID=e.attr(n.$panel,"id"),n.$panel.currFontSize=e.css("#"+n.button.ID,"font-size"),n.$panel.variantPanel=e.attr(n.$panel,"data-variant"),e.css("#"+n.$panel.ID,"font-size",n.$panel.currFontSize),n.container=e.parent(e.findElement(this),"."+u.classes.masterContainer),n.container.version=e.attr(n.container,"data-version"),n.container.variant=e.attr(n.container,"data-variant"),e.hasClass(n.$panel,u.classes.panelOpen)?n.panelClose(e,1):(n.panelOpen(e),n.populateTabIndex(e),e.focus(e.findElement("#"+n.button.ID)))}),e.on("body","click touchend","."+u.classes.panelClose,function(t){var r=e.attr(e.closest(e.findElement(this),"."+u.classes.panel),"id"),i=r.replace("-panel","");return t.preventDefault(),t.stopPropagation(),n.checkForActivePanels(e),n.panelClose(e,1),e.focus(e.findElement("#"+i)),!1}),e.resize(function(){e.blur("#"+n.button.ID),"ontouchstart"in document.body||(n.checkForActivePanels(e),n.panelClose(e))}),e.on("body","click","."+u.classes.networks+" a",function(t){t.preventDefault(),t.stopPropagation();var r=e.findElement(this);return n.openPopup(e,r,e.attr(r,"href")),n.trackNetworkClick(r,n.getShareUrl(e.attr(r,"href"))),!1}),e.on("body","click","."+u.classes.more,function(){n.checkForActivePanels(e),n.panelClose(e,1)})})},disableLinkTracking:function(){e.init(function(e){e.each("body ."+u.classes.networks+" a",function(e,t){r.init(function(e){e.addNoTrack(t)})})})},populateTabIndex:function(e){var t=this,n=0;e.each(e.findElement("#"+t.$panel.ID+" [tabindex]"),function(){n++,e.addAttr(e.findElement(this),"tabindex",n)})},clearTabIndex:function(e,t){t.each(t.findElement("#"+e+" [tabindex]"),function(){t.addAttr(t.findElement(this),"tabindex","-1")})},getIconPosition:function(e,t){var n=this,r=e.findElement("#"+t+" ."+u.classes.icon)[0];return n.button.icon=r.getBoundingClientRect(),n.button.iconWidth=n.button.icon.right-n.button.icon.left,n.button.iconHeight=n.button.icon.bottom-n.button.icon.top,n.button.iconAbsPosition=n.getPosition(e,r),n.button.icon},getButtonPosition:function(e,t){var n=this;n.button.coor=document.getElementById(t).getBoundingClientRect(),n.button.cWidth=n.button.coor.right-n.button.coor.left,n.button.cHeight=n.button.coor.bottom-n.button.coor.top,n.button.absPosition=n.getPosition(e,document.getElementById(n.button.ID)),n.button.icon=n.getIconPosition(e,n.button.ID)},getButtonAbsPosition:function(e,t){e.findElement(t)},checkForActivePanels:function(e){var t=this;e.each("."+u.classes.panelOpen,function(){var t=this,n=e.attr(t,"id").replace("-panel",""),r=e.closest(e.findElement("#"+n),"."+u.classes.masterContainer)[0],i=t.parentNode;i!=r&&r.appendChild(t)}),t.closePanels(e)},setDefaultPanelPosition:function(e){var t=this;e.css("#"+t.$panel.ID,"top",t.button.absPosition.y+t.button.cHeight+"px"),e.css("#"+t.$panel.ID,"left",t.button.absPosition.x)},setPanelOrientation:function(e){var t=this;e.hasClass(t.$panel,u.classes.auto)&&(e.addClass(t.$panel,u.classes.bottom),e.addClass(t.$panel,u.classes.right)),t.$panel.bleed.left>0&&e.hasClass(t.$panel,u.classes.auto)&&t.switchClasses(e,t.$panel,u.classes.left,u.classes.right),t.$panel.bleed.right>0&&e.hasClass(t.$panel,u.classes.auto)&&t.switchClasses(e,t.$panel,u.classes.right,u.classes.left),t.$panel.bleed.top>0&&e.hasClass(t.$panel,u.classes.auto)&&t.switchClasses(e,t.$panel,u.classes.top,u.classes.bottom),t.$panel.bleed.bottom>0&&e.hasClass(t.$panel,u.classes.auto)&&t.switchClasses(e,t.$panel,u.classes.bottom,u.classes.top)},setPanelPosition:function(e,t){var n=this;n.getPanelCoordinates(),e.hasClass(n.$panel,u.classes.top)&&(e.css("#"+n.$panel.ID,"top",n.button.absPosition.y-n.$panel.cHeight-12+"px"),n.$panel.coor=document.getElementById(n.$panel.ID).getBoundingClientRect(),n.$panel.coor.top<0&&e.hasClass(n.$panel,u.classes.auto)&&(n.switchClasses(e,n.$panel,u.classes.top,u.classes.bottom),n.setPanelPosition(e,0))),e.hasClass(n.$panel,u.classes.bottom)&&t!==undefined&&n.setDefaultPanelPosition(e);if(e.hasClass(n.$panel,u.classes.left)){var r=n.button.iconAbsPosition.x+n.button.iconWidth-n.$panel.cWidth+1;e.css("#"+n.$panel.ID,"left",r+"px"),n.getBleed(n.$panel.ID);if(n.$panel.bleed.left>0&&e.hasClass(n.$panel,u.classes.auto)){var i=(n.windowSize[0]-n.$panel.cWidth)/2;e.css("#"+n.$panel.ID,"left",i+"px"),n.switchClasses(e,n.$panel,u.classes.left,u.classes.center)}}n.setPointerPosition(n.$panel.ID,e)},setPointerPosition:function(e,t){var n=this,r="#"+e+" ."+u.classes.pointer,i=n.button.absPosition.x-n.getPosition(t,document.getElementById(e)).x;t.hasClass(n.$panel,u.classes.right)?(t.css(r,"left","8px"),t.css(r,"right","auto")):t.hasClass(n.$panel,u.classes.left)?(t.css(r,"right","auto"),t.css(r,"left",n.$panel.cWidth-32+"px")):t.hasClass(n.$panel,u.classes.center)&&t.css(r,"left",i+"px")},cloneAndMove:function(e,t){var n=document.getElementById(t),r=document.getElementsByTagName("body")[0];r.appendChild(n)},panelOpen:function(e){var t=this;t.checkForActivePanels(e),t.cloneAndMove(e,t.$panel.ID),e.toggleClass(t.$panel,u.classes.panelHidden),t.setDefaultPanelPosition(e),t.getBleed(t.$panel.ID),t.setPanelOrientation(e),t.setPanelPosition(e);if(e.findElement(".s-b-ie").length>0||t.isIe())t.checkIfOverlaps(e,"#"+t.$panel.ID),t.$panel.panelOverlaps===!0&&(t.isVideoPaused(e,t.embedId),setTimeout(function(){t.playActions(e,t.embedId,"opening")},300));e.toggleClass(t.$panel,u.classes.panelHidden),e.addClass(t.$panel,u.classes.panelOpen),setTimeout(function(){e.addClass(t.$panel,u.classes.panelOpenLong)},200)},panelClose:function(e,t,n){var r=this;n||(n=""),r.checkForActivePanels(e);if(e.findElement(".s-b-ie").length>0||r.isIe())r.showOverlapsed(e),r.playActions(e,r.embedId,"closing");e.hasClass(r.$panel,u.classes.auto)?r.removeClasses(r.$panel,u.classes,e):e.removeClass(r.$panel,u.classes.panelOpen),e.removeClass(r.$panel,u.classes.panelOpenLong)},closePanels:function(e){var t=this;t.showOverlapsed(e),e.each("."+u.classes.panelOpen,function(){t.clearTabIndex(e.attr(this,"id"),e),e.removeClass(this,u.classes.panelOpen)})},getPanelCoordinates:function(){var e=this;e.$panel.coor=document.getElementById(this.$panel.ID).getBoundingClientRect(),e.$panel.cWidth=e.$panel.coor.right-e.$panel.coor.left,e.$panel.cHeight=e.$panel.coor.bottom-e.$panel.coor.top},isOnTop:function(e,t,n){var r=e.offset(t),i=e.offset(n);t={x:r.left,y:r.top,w:e.outerWidth(t),h:e.outerHeight(n)},n={x:i.left,y:i.top,w:e.outerWidth(n),h:e.outerWidth(n)};var s=t.x,o=t.y,u=t.x+t.w,a=t.y+t.h,f=n.x,l=n.y,c=n.x+n.w,h=n.y+n.h,p=Math.abs(s+u-f-c),d=Math.abs(o+a-l-h),v=Math.abs(u-s+c-f),m=Math.abs(o-a+l-h);return p<=v&&d<=m},checkIfOverlaps:function(e,t){var n=this,r=e.findElement("object, embeded");e.each(r,function(){this.id=e.attr(this,"id"),n.isOnTop(e,"#"+this.id,t)?(n.hideOverlapsed(e,this.id),n.$panel.panelOverlaps=!0,n.embedId=this.id):n.$panel.panelOverlaps=!1})},hideOverlapsed:function(e,t){var n=this;n.isSMP(t)?e.addClass(e.closest(e.findElement("#"+t),"#"+n.getSmpId(e,t)),u.classes.iPlayerHide):(e.addClass(e.parent(e.findElement("#"+t),"div"),u.classes.flashHidden),e.css(e.findElement("#"+t),"visibility","hidden"))},showOverlapsed:function(e){e.css(e.findElement("."+u.classes.flashHidden+" object"),"visibility","visible"),e.removeClass(e.findElement("."+u.classes.iPlayerHide),u.classes.iPlayerHide),e.removeClass(e.findElement("."+u.classes.flashHidden),u.classes.flashHidden)},isSMP:function(e){return Array.prototype.indexOf||s.indexOfPrototype(),~e.indexOf("smp")?!0:!1},getSmpContainer:function(e,t){return e.parent(e.parent(e.parent(t)))},getSmpContainerId:function(e,t){var n=this,r=e.attr(n.getSmpContainer(e,e.findElement("#"+t)),"id");return r},getSmpId:function(e,t,n){var r=this,i;return typeof t=="undefined"?i=e.attr(r.getSmpContainer(e,n),"id"):typeof n=="undefined"&&(i=e.attr(r.getSmpContainer(e,e.findElement("#"+t)),"id")),i},isVideoPaused:function(e,t){var n=this;require.defined("bump-3")&&require(["bump-3"],function(){var r={playerProfile:"smp"},i;return i=e.findElement("#"+n.getSmpContainerId(e,t)).player(r).paused(),n.setVideoStatus(i),i})},setVideoStatus:function(e){typeof e=="undefined"||e===!0?a=!0:a=!1},playActions:function(e,t,n){var r=this;setTimeout(function(){a!==!0&&n=="closing"?r.playControl(e,"play",t):r.playControl(e,"pause",t)},1)},playControl:function(e,t,n){var r=this;require.defined("bump-3")&&require(["bump-3"],function(){var i={product:"iplayer",playerProfile:"smp",responsive:!0},s=e.findElement("#"+r.getSmpContainerId(e,n)).player(i);t=="play"?s.play():s.pause()})},getWindowSize:function(){var e=this,t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],s=t.innerWidth||r.clientWidth||i.clientWidth,o=t.innerHeight||r.clientHeight||i.clientHeight;this.windowSize=[s-e.getScrollbarWidth(),o]},getScrollbarWidth:function(){var e=document.createElement("div");e.className="scrollbar-measure",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},getEventCode:function(e){var t=e.keyCode?e.keyCode:e.charCode;return t},getPosition:function(e,t){var n=e.offset(t);return{x:n.left,y:n.top}},getBleed:function(e){var t=this,n=document.getElementById(e),r=n.getBoundingClientRect();t.getWindowSize(),t.$panel.bleed={top:r.top-this.windowSize[1],left:-1*r.left,right:r.right-this.windowSize[0],bottom:r.bottom-this.windowSize[1]}},getStyle:function(e,t){var n=function(e){return e.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()})};return e.currentStyle?e.currentStyle[n(t)]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null).getPropertyValue(t):e.style[n(t)]},removeClasses:function(e,t,n){for(var r in t)t[r]!=u.classes.panel&&t[r]!=u.classes.button&&t[r]!=u.classes.container&&t[r]!=u.classes.panelClose&&t[r]!=u.classes.auto&&n.removeClass(e,t[r])},switchClasses:function(e,t,n,r){e.addClass(t,r),e.removeClass(t,n)},addClasses:function(e,t,n){for(var r in t)n.addClass(e,t[r])},setCss:function(e,t){for(var n in e)t.css(e[n][0],e[n][1],e[n][2])},openPopup:function(e,n,r){var i="directories=no location=no menubar=no resizable=no scrollbars=no status=no toolbar=no",o=0,u=0,a=0,f=0,l,c,h=this;return o=e.attr(e.findElement(n),"data-window-width"),u=e.attr(e.findElement(n),"data-window-height"),o>screen.width&&(o=screen.width),u>screen.height&&(o=screen.height),a=(screen.width-o)/2,f=(screen.height-u)/2,i+=" width="+o+", height="+u+", top="+f+", left="+a,l=e.attr(e.findElement(n),"data-network"),Array.prototype.indexOf||s.indexOfPrototype(),this.networksToShorten.indexOf(l)!==-1?t.getShortUrl(h.getShareUrl(r),function(e){return r=h.parseInShortUrl(r,e),c=window.open(r,"Share",i),c.focus(),!1}):(c=window.open(r,"Share",i),c.focus()),h.checkForActivePanels(e),h.panelClose(e),!1},getQueryStringMap:function(e){var t,n,r,i,s=[];i=e.split("&");for(var o in i)if(typeof i[o].split=="function"){r=i[o].split("="),t=r[0],n=r[1];var u={};u[t]=n,s.push(u)}return s},getShareUrl:function(e){var t,n,r,i;t=e.split("?"),n=t[0],r=t[1],i=this.getQueryStringMap(r);for(var s in i)for(var o in i[s]){if(o=="url")return decodeURIComponent(i[s][o]);if(o=="u")return decodeURIComponent(i[s][o])}return null},parseInShortUrl:function(e,t){var n,r,i,s;n=e.split("?"),r=n[0],i=n[1],s=this.getQueryStringMap(i),e=r+"?";for(var o in s)for(var u in s[o])u==="url"&&(s[o][u]=encodeURIComponent(t)),e+=u+"="+s[o][u]+"&";return e.replace(/&$/,""),e},trackNetworkClick:function(e,t){var n=e.attr("data-network"),i=this;r.init(function(e){var r={psp_share_url:t,ps_source_id:i.button.ID,ps_v:i.container.version,ps_variant:i.container.variant,ps_variant_panel:i.$panel.variant};e.log(i.stats.actionType,i.stats.actionName.replace(/%network%/,n),r)})},isIe:function(){Array.prototype.indexOf||s.indexOfPrototype();var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident")!=-1?!0:!1},bindOffPanelClick:function(e,t){var n=this;e.onElem(t,"click touchend",function(t){if(t.type=="touchend")if(e.hasClass(t.target,"s-b-s")||e.hasClass(t.target,"gelicon--share")||e.hasClass(t.target,"s-b-button")){t.stopPropagation();return}if(e.hasClass(n.$panel,u.classes.panelOpenLong)&&n.dragging===!1){var r=n.$panel[0];e.contains(r,t.target)||(n.checkForActivePanels(e),n.panelClose(e,1))}})}},u.classes={container:"s-b",masterContainer:"s-b-container",button:"s-b-button",icon:"s-b-icon",pointer:"s-b-pointer",test:"s-p-test",active:"s-b-active",panel:"s-b-panel",panelOpen:"s-b-p-open-true",panelOpenLong:"s-b-p-open-long",panelHidden:"s-b-p-hidden",panelClose:"s-b-p-close",top:"s-b-p-top",bottom:"s-b-p-bottom",left:"s-b-p-left",right:"s-b-p-right",center:"s-b-p-center",moved:"s-b-p-moved",networks:"s-b-p-networks",more:"s-b-read-more",auto:"s-b-p-auto",flashHidden:"s-b-hidePlayer",iPlayerHide:"player-hide"},u}),define("bbcshare/ui/templates/panel",[],function(){return function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;with(obj){__p+='<div class="s-b-container s-b-'+((__t=locale)==null?"":__t)+'" data-version="'+__e(version)+'">\n<div class="s-b s-b-count-'+((__t=displayCounts)==null?"":__t)+" s-b-"+__e(variant)+'">\n<form action="" method="get">\n<button class="s-b-button" aria-live="polite" aria-labelledby="'+__e(shareId)+'-label" type="submit" tabindex="" aria-pressed="false" value="'+__e(shareId)+'" name="share-button" id="'+__e(shareId)+'" title="'+((__t=translate.getTranslations(locale,"Share"))==null?"":__t),locale!="cy-gb"&&(__p+=" "),__p+=((__t=translate.getTranslations(locale,"this page"))==null?"":__t)+'">\n<span class="s-b-icon s-b-s">\n<i aria-hidden="true" class="gelicon gelicon--share s-b-gelicon"></i>\n</span>\n<span class="s-b-count s-b-s" aria-hidden="true" role="presentation" title="'+((__t=translate.getTranslations(locale,"This page has been shared %s times",666))==null?"":__t)+'">\n334\n</span><span id="'+__e(shareId)+'-label" class="s-b-labels">\n<span class="s-b-label s-b-s" role="presentation">'+((__t=translate.getTranslations(locale,"Share"))==null?"":__t)+'</span>\n<span class="s-b-label-long s-b-s" role="presentation">'+((__t=translate.getTranslations(locale,"this page"))==null?"":__t)+'</span>\n</span>\n</button>\n</form>\n</div>\n<div class="s-b-panel s-b-open-'+__e(panelOpen)+" s-b-"+__e(variantPanel)+" "+((__t=panelDirection)==null?"":__t)+'" id="'+__e(shareId)+'-panel">\n<span class="s-b-pointer"></span>\n<p>'+((__t=translate.getTranslations(locale,"Share this with"))==null?"":__t)+'</p>\n<ul class="s-b-p-networks">\n';for(var key in networks)__p+="\n",key!="indexOf"&&key!="map"&&(__p+='\n<li>\n<a href="'+((__t=networks[key].url)==null?"":__t)+'" target="_blank" data-window-width="'+__e(networks[key].width)+'" data-window-height="'+__e(networks[key].height)+'" data-network="'+__e(networks[key].name)+'" title="'+((__t=translate.getTranslations(locale,"Share this with"))==null?"":__t)+" "+__e(networks[key].title)+'" tabindex>\n<span>\n<i aria-hidden="true" class="gelicon '+__e(networks[key].icon)+'"></i>\n</span>\n'+__e(networks[key].title)+'\n<!-- <span class="s-b-panel-counter">\n(999)\n</span>\n-->                    </a>\n</li>\n'),__p+="\n";__p+='\n</ul>\n<a class="s-b-read-more" href="http://www.bbc.co.uk/faqs/questions/bbc_online/sharing" target="_blank" tabindex>'+((__t=translate.getTranslations(locale,"Read more about these links."))==null?"":__t)+'</a>\n<a href="?" class="s-b-p-close"  title="'+((__t=translate.getTranslations(locale,"Close"))==null?"":__t)+'" tabindex><i aria-hidden="true" class="gelicon gelicon--no"></i></a>\n</div>\n</div>'}return __p}}),define("shareConfig",[],function(){return{digg:{title:"Digg",url:"http://digg.com/submit?url={{shareUrl}}&amp;title={{title}}&amp;bodytext={{description}}",width:900,height:560,fontClass:"gelicon--digg"},facebook:{title:"Facebook",url:"https://www.facebook.com/dialog/feed?app_id={{app_id}}&amp;redirect_uri={{redirect_uri}}&amp;link={{shareUrl}}&amp;picture={{image}}&amp;name={{title}}&amp;description={{description}}&amp;caption={{caption}}&amp;display=popup",width:626,height:236,fontClass:"gelicon--facebook"},google:{title:"Google",url:"https://plus.google.com/share?url={{shareUrl}}",width:550,height:500,fontClass:"gelicon--google-plus"},linkedin:{title:"LinkedIn",url:"http://www.linkedin.com/shareArticle?mini=true&amp;url={{shareUrl}}&amp;title={{title}}&amp;summary={{description}}",width:620,height:500,fontClass:"gelicon--linkedin"},pinterest:{title:"Pinterest",url:"http://www.pinterest.com/pin/create/button?url={{shareUrl}}&amp;media={{image}}&amp;description={{description}}",width:620,height:350,fontClass:"gelicon--pinterest",disabled:!0},reddit:{title:"Reddit",url:"http://www.reddit.com/submit?url={{shareUrl}}&amp;title={{title}}",width:620,height:300,fontClass:"gelicon--reddit"},stumbleupon:{title:"StumbleUpon",url:"http://www.stumbleupon.com/submit?url={{shareUrl}}&amp;title={{title}}",width:900,height:560,fontClass:"gelicon--stumbleupon"},tumblr:{title:"Tumblr",url:"http://www.tumblr.com/share?v=3&amp;u={{shareUrl}}&amp;t={{title}}&amp;s=",width:650,height:350,fontClass:"gelicon--tumblr",disabled:!0},twitter:{title:"Twitter",url:"http://twitter.com/intent/tweet?text={{title}}&amp;url={{shareUrl}}&amp;via={{twitterName}}",width:550,height:420,fontClass:"gelicon--twitter"}}}),define("shareOptions",[],function(){return{shareId:{label:"Share ID (unique)",description:"The buttons ID which will allow button targeting. Will be ascending from 1 if empty.",type:"text",required:!1},app_id:{label:"Facebook APP ID",description:"Your app's unique identifier.",type:"text",required:!1,"default":"58567469885",errorText:"app_id value must be set."},shareUrl:{label:"Share URL",description:"The URL which will be shared to the Social Network by the user.",type:"text",regex:"/^https?:\\/\\/[^\\/].*$/",required:!0,errorText:"Value must be a full canonical URL."},image:{label:"Share image",description:"The image which will be shared to the Social Network by the user. If not set then will be populated using meta data. ( REQUIRED for pinterest )",type:"text",regex:"/^https?:\\/\\/[^\\/].*$/",required:!1},title:{label:"Share title",description:"The Title which will be shared to the Social Network by the user.",type:"text",required:!1},description:{label:"Share description",description:"The description which will be shared to the Social Network by the user. If not set then will be populated from meta data.",type:"text",required:!1},caption:{label:"Share caption",description:"(facebook) The caption which will be shared to Facebook by the user. Caption will appear under the shared link. If not set then will be populated from meta data.",type:"text",required:!1},twitterName:{label:"Shared via (twitter name)",description:"The Twitter name which will appear as 'via @twitterName' in tweet.",type:"text",required:!1},redirect_uri:{label:"Facebook redirect url",description:"Redirect to this URL after share or on cancel - will auto close",type:"text",regex:"/^https?:\\/\\/[^\\/].*$/",required:!1,errorText:"redirect_uri value must be set."},variant:{label:"Variant",description:"Specify the display variant to render the button.",type:"select","default":"default",values:{"default":"Displays the default green share button.",iplayer:"Displays the iPlayer share button","light-green":"Displays the button with WHITE background and GREEN text","light-grey":"Displays the button with WHITE background and GREY text","dark-white":"Displays the button with BLACK background and WHITE text",transparent:"Displays the button with transparent background and WHITE text","transparent-green":"Displays the button with transparent background and GREEN text"}},variantPanel:{label:"Variant panel",description:"Specify the display variant to render the panel.",type:"select","default":"light",values:{light:"Displays the default, light panel.",dark:"Displays the dark panel"}},displayCounts:{label:"Display share counts",description:"Asynchronously load and display Share counts.",type:"boolean","default":!1,values:{"true":"Load and display share counts.","false":"Disables loading of share counts."}},panelDirection:{label:"Panel direction",description:"Override the display direction of the Share panel drop-down.",type:"select","default":"auto",values:{auto:"Automatically change depending on screen real estate.",tl:"Top left",tr:"Top right",bl:"Bottom left",br:"Bottom right"},normaliseValue:"lowercase"},locale:{label:"Locale",description:"Set the display locale of the Share button.",type:"select","default":"en-gb",values:{"en-gb":"English","cy-gb":"Welsh","ga-gb":"Irish Gaelic","gd-gb":"Scottish Gaelic","bb-cd":"Unsupported language","gd-GB":"Scottish Gaelic uppercase"},valueAliases:{en:"en-gb",cy:"cy-gb",ga:"ga-gb",gd:"gd-gb"},normaliseValue:"lowercase"},panelOpen:{label:"Panel Open",description:"INTERNAL - opens the share panel for non-js browsers.",type:"boolean","default":!1,values:{"true":"Opens panel.","false":"Panel is closed on load."}},js:{label:"JavaScript",description:"Automatically load JavaScript required by the module.",type:"boolean","default":"true",pageWide:!0,values:{"true":"Automatically load JavaScript.","false":"Disables loading of JavaScript. Useful if client wishes to concatenate JS or for non-JS testing."}},css:{label:"CSS",description:"Automatically load CSS required by the module.",type:"boolean","default":"true",pageWide:!0,values:{"true":"Automatically load CSS.","false":"Disables loading of CSS. Useful if client wishes to concatenate CSS."}}}}),define("bbcapi",["exports","shareConfig","shareOptions","bbcstorage","dom","bbcpolyfill"],function(e,t,n,r,i,s,o){var u={},a=t;return n.defaults={redirect_uri:window.location.origin+"/modules/share/close",app_id:"58567469885",version:""},o={checkIfIdExist:function(e,t){try{if(typeof document.getElementById(e.shareId)!="undefined"&&document.getElementById(e.shareId)!==null)throw e.shareId;if(typeof e.shareId=="undefined"||e.shareId==="")return e.shareId="sbJS-"+t,e;e.shareId=e.shareId}catch(n){return console.error('Share button with id: "'+n+'" already exists. Choose a different ID'),"error"}},checkForId:function(e){try{if(typeof document.getElementById(e)=="undefined"||document.getElementById(e)===null)throw e}catch(t){return console.error("Share button with id: "+t+" does not exist."),"error"}},checkIfRequiredExist:function(e){try{for(var t in n)if((typeof e[t]=="undefined"||e[t]==="")&&n[t].required&&typeof n.defaults[t]=="undefined")throw t}catch(r){return console.error(r+" is required. Please provide one."),"error"}},checkProtocol:function(e){return e.shareUrl.search(/(http|https):\/\/(.*?)$/)==-1&&(e.shareUrl="http://"+e.shareUrl),e},getDefaultOptions:function(e){var t=e;for(var r in n){(typeof t[r]=="undefined"||t[r]===""||t[r].length===0)&&typeof n[r]["default"]!="undefined"&&(t[r]=n[r]["default"]);if(r=="redirect_uri"){if(!window.location.origin){var i=s.windowLocationOriginPrototype();n.defaults[r]=i+"/modules/share/close"}t[r]=n.defaults[r]}}return t},getPanelDirection:function(e){var t={auto:"s-b-p-auto",tr:"s-b-p-top s-b-p-right",tl:"s-b-p-top s-b-p-left",br:"s-b-p-bottom s-b-p-right",bl:"s-b-p-bottom s-b-p-left","s-b-p-auto":"s-b-p-auto","s-b-p-top s-b-p-right":"s-b-p-top s-b-p-right","s-b-p-top s-b-p-left":"s-b-p-top s-b-p-left","s-b-p-bottom s-b-p-right":"s-b-p-bottom s-b-p-right","s-b-p-bottom s-b-p-left":"s-b-p-bottom s-b-p-left"};return e.panelDirection=t[e.panelDirection]},replaceCharacters:function(e){var t=["&#34;","&#38;","&#60;","&#62;","&#39;"],n=['"',"&","<",">","'"],r=t.length,i,s,o;if(typeof e!="undefined")for(var u=0;u<r;u++)i=new RegExp(t[u],"gi"),s=n[u],o=e.replace(i,s);return o},getNetworks:function(e){var t=this,n,r=[],i;e.networks=[];for(var s in a)a.hasOwnProperty(s)&&!a[s].disabled&&e.networks.push(s);e.networks=e.networks.sort(),n=e.networks.length;for(var o=0;o<n;o++)r.push({name:e.networks[o]});e.networks=r;for(var u=0;u<n;u++)e.networks.hasOwnProperty(u)&&(i=e.networks[u],t.getNetworkParameters(e.networks,u),t.swapOptions(i,e,u),i.url=i.baseUrl+"?"+i.fullUrl[1],t.getNetworkWindowSize(i,e,u),t.getNetworkIconClass(i,e,u));return e},getNetworkParameters:function(e,t){var n=this;return e[t].fullUrl=n.getShareUrl(e[t].name),e[t].title=n.getShareTitle(e[t].name),e[t].baseUrl=e[t].fullUrl[0],e[t].params=n.getShareParamsFromUrl(e[t].fullUrl[1]),e},getShareUrl:function(e){var t=a[e].url;return t=t.split("?"),t},getShareTitle:function(e){var t=a[e].title;return t},getShareParamsFromUrl:function(e){Array.prototype.map||s.mapPrototype();var t=e.match(/{{\s*[\w\.]+\s*}}/g).map(function(e){return e.match(/[\w\.]+/)[0]});return t},swapOptions:function(e,t,n){var r=this;for(var i in e.params){var s="{{",o=r.replaceCharacters(t[e.params[i]])||"";e.params[i]=="twitterName"&&(encodeURIComponent(t[e.params[i]])===""||encodeURIComponent(t[e.params[i]])=="undefined")&&(s="&amp;via={{",t[e.params[i]]=""),t.networks[n].fullUrl[1]=e.fullUrl[1].replace(s+e.params[i]+"}}",encodeURIComponent(o))}},getNetworkWindowSize:function(e,t,n){t.networks[n].width=a[e.name].width,t.networks[n].height=a[e.name].height},getNetworkIconClass:function(e,t,n){t.networks[n].icon=a[e.name].fontClass},objectSize:function(e){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t},deepCopy:function(e,t){var n=["locale","variantPanel","variant","panelDirection"];for(var r in t)n.indexOf(r)==-1?e[r]=t[r]:e[r]=e[r];return e},getMetadata:function(){var e=document.getElementsByTagName("meta");if(e.length)for(var t=0;t<e.length;t++)e[t].hasOwnProperty("property")&&(u[e[t].getAttribute("property")]=e[t].getAttribute("content"))}},o}),define("bbcshare",["exports","./bbcshare/ui/share-view","dom","bbctranslate","./bbcshare/ui/templates/panel","bbcapi","bbcstorage"],function(e,t,n,r,i,s,o){window._=window._||{},window._.escape=window.escape,e=e||{},o=o||{},e.Share=t;var u=0;return e={init:function(t){e.createShare(t)},createShare:function(e){return t.init(e)},render:function(e,t){n.init(function(n){t=t||{};if(s.checkIfRequiredExist(t)=="error"||s.checkIfIdExist(t,u)=="error")return;++u,t.translate=r,t.version="";var a=n.findElement(e).length?n.findElement(e):n.findElement("body");s.checkProtocol(t),s.getDefaultOptions(t),s.getPanelDirection(t),s.getNetworks(t);var f=i(t);n.append(a,f),o.setButtonConfig(t)})},update:function(e,u){n.init(function(n){var a={},f={},l={},c={};t.panelClose(n),u=u||{};if(s.checkForId(e)=="error")return;u.shareId=e,u.translate=r,a=o.getButtonConfig(e);if(a=="error")return;f=s.getDefaultOptions(u),l=s.deepCopy(a,f),c=s.getNetworks(l),s.getPanelDirection(c);var h=i(c);h=n.find(n.findElement(h),"#"+u.shareId+"-panel"),n.replaceWith(n.findElement("#"+u.shareId+"-panel"),h),o.setButtonConfig(c)})},updateAll:function(e){var t=this;n.init(function(n){n.each(n.findElement(".s-b button"),function(){t.update(n.attr(this,"id"),e)})})},closeAll:function(){n.init(function(e){t.panelClose(e)})}},e});