/*******************************
        Javascript Reset
*******************************/

/*  Creates baseline for Javascript APIs */

/*-----------------------
         Console
------------------------*/

if (typeof console == "undefined" || typeof console.log == "undefined") {
  window.console = {
    log   : function() {},
    info  : function() {},
    error : function() {},
    warn  : function() {}
  };
}

if (typeof console.group == 'undefined' || typeof console.groupEnd == 'undefined' || typeof console.groupCollapsed == 'undefined') {
  window.console.group = function() {};
  window.console.groupEnd = function() {};
  window.console.groupCollapsed = function() {};
}
if (typeof console.markTimeline == 'undefined') {
  window.console.markTimeline = function() {};
}
window.console.clear = function() {};

/*-----------------------
    Request Animation
------------------------*/

window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
;

/*-----------------------
   jQuery 2.0 Migration
------------------------*/

if(window.jQuery !== undefined ) {
  jQuery.migrateMute = true;
}


/*******************************
            Namespace
*******************************/

if (window.site === undefined) {
  window.site = {
    config    : {},
    page      : {},
    sections  : {},
    timer     : {},
    utilities : {}
  };
}