//tealium universal tag - utag.21 ut4.0.201608221723, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var _sf_startpt=_sf_startpt||(new Date()).getTime();var _sf_async_config={};try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}
u.ev={'view':1};u.initialized=false;u.data={"qsp_delim":'&',"kvp_delim":'=',"base_url":'//static.chartbeat.com/js/chartbeat.js',"uid":"23919","domain":"","canonical":"true","title":"","path":""};u.map={"omniture.prop1":"sections","chartbeat_domain":"domain","chartbeat_session_length":"sessionLength","site":"authors","dom.pathname":"path","node_title":"title"};u.extend=[function(a,b,c,d,e,f,g){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'www.economist.com':'economist.com'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['chartbeat_domain']=c[e][f];m=true};};if(m)break};if(!m)b['chartbeat_domain']='stage.economist.com';},function(a,b){try{if(1){b['chartbeat_session_length']='10'}}catch(e){utag.DB(e)}},function(a,b){b['js_page.path1']='homepage';var path=b['dom.pathname'];if(path.indexOf('/')===0){path=path.substring(1)}
path=path.split('/');b['js_page.path1']=path[0];}];u.callBack=function(){if(u.initialized){_sf_async_config.sections=u.data.sections||"";_sf_async_config.authors=u.data.authors||"";pSUPERFLY.virtualPage(u.data.path,u.data.title)}
u.initialized=true;};u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!='undefined'){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];if(u.data.hasOwnProperty(e[f])){_sf_async_config[e[f]]=b[d];}}}}
_sf_async_config.uid=u.data.uid;_sf_async_config.domain=u.data.domain;_sf_async_config.useCanonical=((u.data.canonical=="true")?true:false);if(!u.initialized){_sf_endpt=(new Date()).getTime();u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_21","attrs":{}});}else{u.data.title=u.data.title||b["dom.title"]||"";u.data.path=u.data.path||b["dom.pathname"]||"";u.callBack();}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('21','teg.unicorn');}catch(e){}
