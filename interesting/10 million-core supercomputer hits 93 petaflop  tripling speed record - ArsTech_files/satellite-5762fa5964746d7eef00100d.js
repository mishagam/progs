_satellite.pushAsyncScript(function(event, target, $variables){
  __adIq_Config = {
  pageName: _satellite.getVar('Site Section'),
  siteId: 'Ars Technica'
};

(function(){
  var s = document.createElement('script');
  s.async = true;
  s.type = 'text/javascript';
  s.src = document.location.protocol + '//d.turn.com/r/dd/id/L21rdC84MTYvY2lkLzI4NTk1MjE1L3QvMA/kv/SiteID='+__adIq_Config.siteId+',CampaignID=1801H,Channel=website,PageName='+__adIq_Config.pageName;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
})();
});
