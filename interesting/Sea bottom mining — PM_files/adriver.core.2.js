function adriver(a,b,c){var d=this,e=a;return this instanceof adriver?("string"==typeof e?e=document.getElementById(a):a=e.id,e?adriver(a)?adriver(a):(d.p=e,d.defer=c,d.prm=adriver.extend(b,{ph:a}),d.loadCompleteQueue=new adriver.queue,d.domReadyQueue=new adriver.queue(adriver.isDomReady),adriver.initQueue.push(function(){d.init()}),adriver.items[a]=d):(adriver.isDomReady||adriver.onDomReady(function(){new adriver(a,b,c)}),null)):a?adriver.items[a]:adriver.items}adriver.prototype={isLoading:0,init:function(){},loadComplete:function(){},domReady:function(){},onLoadComplete:function(a){var b=this;return b.loadCompleteQueue.push(function(){a.call(b)}),b},onDomReady:function(a){return this.domReadyQueue.push(a),this},reset:function(){return this.loadCompleteQueue.flush(),this.domReadyQueue.flush(adriver.isDomReady),this}},adriver.extend=function(){for(var a,b,c=arguments[0],d=1,e=arguments.length;e>d;d++){a=arguments[d];for(b in a)a.hasOwnProperty(b)&&(a[b]instanceof Function?c[b]=a[b]:a[b]instanceof Object?c[b]?adriver.extend(c[b],a[b]):c[b]=adriver.extend(a[b]instanceof Array?[]:{},a[b]):c[b]=a[b])}return c},adriver.extend(adriver,{version:"2.3.7",defaults:{tail256:escape(document.referrer||"unknown")},items:{},options:{},plugins:{},pluginPath:{},redirectHost:"//ad.adriver.ru",defaultMirror:"//content.adriver.ru",loadScript:function(a){try{var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("charset","windows-1251"),c.setAttribute("src",a.split("![rnd]").join(Math.round(9999999*Math.random()))),c.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&(b.removeChild(c),c.onload=null)},c.onload=function(){b.removeChild(c)},b.insertBefore(c,b.firstChild)}catch(d){}},isDomReady:!1,onDomReady:function(a){adriver.domReadyQueue.push(a)},onBeforeDomReady:function(a){adriver.domReadyQueue.unshift(a)},domReady:function(){adriver.isDomReady=!0,adriver.domReadyQueue.execute()},checkDomReady:function(a){function b(){adriver.isDomReady||a()}try{var c=document,d=window.onload;if(c.addEventListener)c.addEventListener("DOMContentLoaded",b,!1);else if(document.attachEvent){var e=function(){try{document.documentElement.doScroll("left")}catch(a){return void setTimeout(e,1)}b()};try{toplevel=null==window.frameElement}catch(f){}document.documentElement.doScroll&&toplevel&&e();var g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),b())};document.attachEvent("onreadystatechange",g)}else/WebKit/i.test(navigator.userAgent)&&!function(){/loaded|complete/.test(c.readyState)?b():setTimeout(arguments.callee,100)}();window.addEventListener?window.addEventListener("load",b,!1):window.attachEvent?window.attachEvent("onload",b):window.onload=function(){d&&d(),b()}}catch(f){}},onLoadComplete:function(a){return adriver.loadCompleteQueue.push(a),adriver},loadComplete:function(){return adriver.loadCompleteQueue.execute(),adriver},setDefaults:function(a){adriver.extend(adriver.defaults,a)},setOptions:function(a){adriver.extend(adriver.options,a)},setPluginPath:function(a){adriver.extend(adriver.pluginPath,a)},queue:function(a){this.q=[],this.flag=!!a},Plugin:function(a){return this instanceof adriver.Plugin&&a&&!adriver.plugins[a]&&(this.id=a,this.q=new adriver.queue,adriver.plugins[a]=this),adriver.plugins[a]}}),adriver.sync=function(a,b){if(!adriver.syncFlag){adriver.syncFlag=1;for(var c=[];b--;)c[b]=b+1;c.sort(function(){return.5-Math.random()}),adriver.synchArray=c}return adriver.synchArray[(!a||0>=a?1:a)-1]},adriver.queue.prototype={push:function(a){this.flag?a():this.q.push(a)},unshift:function(a){this.flag?a():this.q.unshift(a)},execute:function(a){for(var b,c;b=this.q.shift();)b();a==c&&(a=!0),this.flag=!!a},flush:function(a){this.q.length=0,this.flag=!!a}},adriver.Plugin.prototype={loadingStatus:0,load:function(){this.loadingStatus=1,adriver.loadScript((adriver.pluginPath[this.id.split(".").pop()]||adriver.defaultMirror+"/plugins/")+this.id+".js")},loadComplete:function(){return this.loadingStatus=2,this.q.execute(),this},onLoadComplete:function(a){return this.q.push(a),this}},adriver.Plugin.require=function(){var a=this,b=0;a.q=new adriver.queue;for(var c,d=0,e=arguments.length;e>d;d++)c=new adriver.Plugin(arguments[d]),2!=c.loadingStatus&&(b++,c.onLoadComplete(function(){1==b--&&a.q.execute()}),c.loadingStatus||c.load());b||a.q.execute()},adriver.Plugin.require.prototype.onLoadComplete=function(a){return this.q.push(a),this},adriver.domReadyQueue=new adriver.queue,adriver.loadCompleteQueue=new adriver.queue,adriver.initQueue=new adriver.queue,adriver.checkDomReady(adriver.domReady),new adriver.Plugin.require("autoUpdate.adriver").onLoadComplete(function(){adriver.initQueue.execute()});