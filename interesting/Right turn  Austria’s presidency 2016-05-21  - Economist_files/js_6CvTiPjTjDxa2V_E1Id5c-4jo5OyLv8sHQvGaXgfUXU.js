;
/**
 * BlueKai tag setup.
 */
(function ( s ) {
  'use strict';

  window.bk_async = function() {
    // INSERT DATA HERE IN THE FORM:
    // bk_addPageCtx("<<SOMEKEY>>", "<<SOMEVALUE>>");
    var bkChannel = (typeof s.channel != 'undefined' ? s.channel : '');
    var bkPageName = (typeof s.pageName != 'undefined' ? s.pageName : '');

    var bkprop1 = (typeof s.prop1 != 'undefined' ? s.prop1 : '');
    var bkprop3 = (typeof s.prop3 != 'undefined' ? s.prop3 : '');
    var bkprop4 = (typeof s.prop4 != 'undefined' ? s.prop4 : '');
    var bkprop5 = (typeof s.prop5 != 'undefined' ? s.prop5 : '');
    var bkprop8 = (typeof s.prop8 != 'undefined' ? s.prop8 : '');
    var bkprop9 = (typeof s.prop9 != 'undefined' ? s.prop9 : '');
    var bkprop10 = (typeof s.prop10 != 'undefined' ? s.prop10 : '');
    var bkprop11 = (typeof s.prop11 != 'undefined' ? s.prop11 : '');
    var bkprop13 = (typeof s.prop13 != 'undefined' ? s.prop13 : '');
    var bkprop16 = (typeof s.prop16 != 'undefined' ? s.prop16 : '');
    var bkprop40 = (typeof s.prop40 != 'undefined' ? s.prop40 : '');
    var bkprop41 = (typeof s.prop41 != 'undefined' ? s.prop41 : '');
    var bkprop42 = (typeof s.prop42 != 'undefined' ? s.prop42 : '');

    var bkevents = (typeof s.events != 'undefined' ? s.events : '');

    bk_addPageCtx("chan", bkChannel);
    bk_addPageCtx("page", bkPageName);
    bk_addPageCtx("p1", bkprop1);
    bk_addPageCtx("p3", bkprop3);
    bk_addPageCtx("p4", bkprop4);
    bk_addPageCtx("p5", bkprop5);
    bk_addPageCtx("p8", bkprop8);
    bk_addPageCtx("p9", bkprop9);
    bk_addPageCtx("p10", bkprop10);
    bk_addPageCtx("p11", bkprop11);
    bk_addPageCtx("p13", bkprop13);
    bk_addPageCtx("p16", bkprop16);
    bk_addPageCtx("did", bkprop40);
    bk_addPageCtx("p41", bkprop41);
    bk_addPageCtx("p42", bkprop42);
    bk_addPageCtx("events", bkevents);

    BKTAG.doTag(18452, 10);
  };

  var scripts = document.getElementsByTagName('script')[0];
  var script = document.createElement('script');
  script.async = true;
  script.src = '//tags.bkrtx.com/js/bk-coretag.js';
  scripts.parentNode.insertBefore(script, scripts);
}( s ));;
