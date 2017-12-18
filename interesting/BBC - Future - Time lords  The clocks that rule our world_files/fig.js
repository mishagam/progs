(function(){
var o={'uk':0,
'ck':0,
'ad':1,
'ap':0,
'tb':0,
'mb':0,
'eu':0};
window.orb=window.orb||{};
if (window.name.match(/ orb_fig_referrer=([^ ]+)$/)) {
    window.orb.referrer = decodeURIComponent(RegExp.$1);
    window.name = window.name.replace(/ orb_fig_referrer=([^ ]+)$/, '');
}

orb.fig=orb.fig||function(k){return (arguments.length)? o[k]:o};
window.define && define('orb/fig', o); })();

orb._clientsideRedirect=function(g,n){var i=false,k;n=n||window;k=(n.document.cookie.match(/ckps_d=(.)/)?RegExp.$1:"");if(orb._redirectionIsEnabled(n)&&orb._dependenciesSatisfied(g,n)){var o=(n.location.hostname||"").toLowerCase(),a=(n.location.href||""),j={isUk:/(^|\.)bbc\.co\.uk$/i.test(o),isInt:/(^|\.)bbc\.com$/i.test(o),isMb:/^m\./i.test(o),isDesk:/^(www|pal)\./i.test(o)},c={isUk:g("uk"),isMb:g("mb")},m,b,l=(n.document.referrer||"").toLowerCase();var d=function(){window.name+=" orb_fig_referrer="+encodeURIComponent(document.referrer)};if(n.bbcredirection.geo===true){if(j.isInt===true&&c.isUk===1){d();b=a.replace(/^(.+?bbc)\.com/i,"$1.co.uk")}else{if(j.isUk===true&&c.isUk===0){d();b=a.replace(/^(.+?bbc)\.co\.uk/i,"$1.com")}}}m=(b||a);if(n.bbcredirection.device===true){if(j.isDesk===true&&(k==="m"||(!k&&c.isMb===1))){d();m=m.replace(/^(https?:\/\/)(www|pal)\./i,"$1m.")}else{if(j.isMb===true&&(k==="d"||(!k&&c.isMb===0))){d();m=m.replace(/^(https?:\/\/)m\./i,"$1www.")}}}if(m&&a.toLowerCase()!==m.toLowerCase()&&l!==m.toLowerCase()&&l!==a.toLowerCase()){i=true;try{n.location.replace(m)}catch(h){i=false;n.require(["istats-1"],function(e){e.log("redirection_fail","",{})})}}}return i};orb._redirectionIsEnabled=function(a){return(a.bbcredirection&&(a.bbcredirection.geo===true||a.bbcredirection.device===true))};orb._dependenciesSatisfied=function(b,a){return(typeof b==="function"&&typeof a.location.replace!=="undefined")};orb.fig.device={};orb.fig.geo={};orb.fig.user={};orb.fig.device.isTablet=function(){return window.orb.fig("no")?undefined:window.orb.fig("tb")};orb.fig.device.isMobile=function(){return window.orb.fig("no")?undefined:window.orb.fig("mb")};orb.fig.geo.isUK=function(){return window.orb.fig("no")?undefined:window.orb.fig("uk")};orb.fig.geo.isEU=function(){return window.orb.fig("no")?undefined:window.orb.fig("eu")};
    orb._clientsideRedirect(window.mockFig || window.orb.fig, window.mockWindow || window);
