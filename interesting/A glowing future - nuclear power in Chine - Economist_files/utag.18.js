//tealium universal tag - utag.18 ut4.0.201608101540, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var _sf_startpt=_sf_startpt||(new Date()).getTime();var _sf_async_config={};_sf_async_config.uid=23919;_sf_async_config.domain='';_sf_async_config.useCanonical=(("true"=="true")?true:false);_sf_async_config.sessionLength=10;try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim='&';u.kvp_delim='=';u.initialized=false;u.base_url='//static.chartbeat.com/js/chartbeat.js';u.map={"site":"authors","cb_domain":"domain","node_title":"title","js_page.s.prop1":"sections"};u.extend=[function(a,b,c,d,e,f,g){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'www.economist.com':'economist.com'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['cb_domain']=c[e][f];m=true};};if(m)break};if(!m)b['cb_domain']='stage.economist.com';},function(a,b){try{if(1){b['chartbeat_session_length']=''}}catch(e){utag.DB(e)}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!='undefined'){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'&&b[d]!=''){e=u.map[d].split(',');for(f=0;f<e.length;f++){_sf_async_config[e[f]]=b[d];}}}
if(!u.initialized){u.initialized=true;window._sf_endpt=(new Date()).getTime();u.head=document.getElementsByTagName('head')[0];u.scr=document.createElement('script');u.scr.src=u.base_url;u.head.appendChild(u.scr);}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('18','teg.main');}catch(e){}