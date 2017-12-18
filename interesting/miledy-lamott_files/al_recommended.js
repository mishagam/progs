WRecommended = {
  resizeWidget: function () {
    if (!cur.heightEl || !cur.Rpc) return;
    var size = getSize(cur.heightEl)[1];
    if (browser.msie && !browser.msie8 || browser.opera) size += 15;

    cur.Rpc.callMethod('resize', size);
  },
  showMore: function () {
    ajax.post('widget_recommended.php', cur.options.show_more_params, {
      onDone: function (rows) {
        ge('wrecommended_items').innerHTML = rows;
        hide('wrecommended_more_link');
        WRecommended.resizeWidget();
      },
      showProgress: function () {
        hide('wrecommended_more');
        show('wrecommended_more_progress');
      },
      hideProgress: function () {
        hide('wrecommended_more_progress');
        show('wrecommended_more');
      }
    });
  },
  init: function (options) {
    cur.options = options;
    extend(cur, {
      heightEl: ge('wrecommended_page'),
      noNavGo: true,
      noAwayCheck: true
    });
    cur.RpcMethods = {
      onInit: function() {
        setTimeout(function () {
          WRecommended.resizeWidget();
        }, 0);
        setTimeout(function () {
          WRecommended.resizeWidget();
        }, 500);
      }
    };
    try {
      cur.Rpc = new fastXDM.Client(cur.RpcMethods, {safe: true});
      cur.resizeInt = setInterval(WRecommended.resizeWidget, 1000);
    } catch (e) {
      debugLog(e);
    }
  }
};

try{stManager.done('api/widgets/al_recommended.js');}catch(e){}
