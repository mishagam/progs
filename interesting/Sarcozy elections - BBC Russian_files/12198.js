var rp_account_config={rp_feature_set:{}};var RubiconAdServing=RubiconAdServing||{};RubiconAdServing.AdSizes={1:{dim:"468x60"},2:{dim:"728x90"},3:{dim:"234x60"},4:{dim:"88x31"},5:{dim:"120x90"},6:{dim:"120x60"},7:{dim:"125x125"},8:{dim:"120x600"},9:{dim:"160x600"},10:{dim:"300x600"},11:{dim:"180x150"},12:{dim:"120x240"},13:{dim:"200x200"},14:{dim:"250x250"},15:{dim:"300x250"},16:{dim:"336x280"},17:{dim:"240x400"},18:{dim:"180x150"},19:{dim:"300x100"},20:{dim:"0x0"},21:{dim:"0x0"},22:{dim:"0x0"},23:{dim:"120x90"},24:{dim:"160x90"},25:{dim:"180x90"},26:{dim:"200x90"},27:{dim:"468x15"},28:{dim:"728x15"},29:{dim:"300x850"},30:{dim:"1x1"},31:{dim:"980x120"},32:{dim:"250x360"},33:{dim:"180x500"},34:{dim:"580x400"},35:{dim:"980x150"},36:{dim:"140x350"},37:{dim:"468x400"},38:{dim:"930x180"},39:{dim:"750x100"},40:{dim:"750x200"},41:{dim:"750x300"},42:{dim:"2x4"},43:{dim:"320x50"},44:{dim:"300x50"},45:{dim:"480x75"},46:{dim:"480x60"},47:{dim:"240x37"},48:{dim:"300x300"},49:{dim:"336x280"},50:{dim:"1024x90"},51:{dim:"768x90"},52:{dim:"1004x768"},53:{dim:"1024x768",interstitial:true},54:{dim:"300x1050"},55:{dim:"970x90"},56:{dim:"900x250"},57:{dim:"970x250"},58:{dim:"1000x90"},59:{dim:"320x80"},60:{dim:"320x150"},61:{dim:"1000x1000"},62:{dim:"980x50"},63:{dim:"1000x40"},64:{dim:"580x500"},65:{dim:"640x480"},66:{dim:"930x600"},67:{dim:"320x480",interstitial:true},68:{dim:"1800x1000"},69:{dim:"480x400"},70:{dim:"1100x210"},71:{dim:"852x210"},72:{dim:"320x320"},73:{dim:"320x160"},74:{dim:"1250x240"},75:{dim:"1250x250"},76:{dim:"265x720"},77:{dim:"265x600"},78:{dim:"980x240"},79:{dim:"980x300"},80:{dim:"980x400"},81:{dim:"450x150"},82:{dim:"300x75"},83:{dim:"480x300"},84:{dim:"320x480"},85:{dim:"300x120"},86:{dim:"300x250"},87:{dim:"950x90"},88:{dim:"300x600"},89:{dim:"300x1200"},90:{dim:"548x150"},91:{dim:"300x250"},92:{dim:"728x90"},93:{dim:"160x600"},94:{dim:"970x310"},95:{dim:"970x100"},96:{dim:"970x210"},97:{dim:"467x120"},98:{dim:"1000x120"},99:{dim:"300x250"},100:{dim:"300x250"},101:{dim:"480x320",interstitial:true},102:{dim:"768x1024",interstitial:true},103:{dim:"480x280"},104:{dim:"1250x360"},105:{dim:"250x800"},106:{dim:"300x480"},107:{dim:"440x220"},108:{dim:"320x240"},109:{dim:"468x120"},110:{dim:"994x66"},111:{dim:"1250x480"},112:{dim:"1366x40"},113:{dim:"1000x300"},114:{dim:"505x500"},115:{dim:"480x150"},116:{dim:"950x250"},117:{dim:"320x100"},118:{dim:"160x410"},119:{dim:"256x600"},120:{dim:"994x250"},121:{dim:"1280x800",interstitial:true},122:{dim:"800x1280",interstitial:true},123:{dim:"650x110"},124:{dim:"640x150"},125:{dim:"800x250"}};var RubiconAdServing=RubiconAdServing||{};RubiconAdServing.Creatives=function(){RubiconAdServing.creatives=RubiconAdServing.creatives||{};this.setAd=function(a,b){if(a&&b){RubiconAdServing.creatives[a]=b}};this.getAd=function(a){if(a){return RubiconAdServing.creatives[a]}return null};this.getAdBySlot=function(a){return this.getAd(a)};this.getAdByZone=function(d,b,a){var c=d+"/"+b+"/"+a;return this.getAd(c)};this.renderAdBySlot=function(a){var b=this.getAd(a);if(b&&b.status=="ok"&&b.script){document.write("<script>"+b.script+"<\/script>")}};this.renderAdByZone=function(e,b,a){var c=e+"/"+b+"/"+a;var d=this.getAd(c);if(d&&d.status=="ok"&&d.script){document.write("<script>"+d.script+"<\/script>")}}};RubiconAdServing.Requests=function(){RubiconAdServing.requests=RubiconAdServing.requests||{};this.addRequest=function(a,b){RubiconAdServing.requests[a]=b};this.getRequest=function(a){return RubiconAdServing.requests[a]};this.sendRequest=function(b){var c=this.getRequest(b);var a;if(!c||!c.slot){return}if(!c.context.rp_debug){if(c.slot.shouldRouteToRFM()){a='<div id="'+c.context.rp_div_id+'"><script type="text/javascript" src="'+c.url+'"><\/script></div>'}else{if(c.context.rp_adtype=="iframe"){a='<iframe frameborder="0" allowtransparency="true" hspace="0"  vspace="0" marginheight="0" marginwidth="0" scrolling="no"  width="'+c.context.rp_width+'px" height="'+c.context.rp_height+'px" src="'+c.url+'"></iframe>'}else{a='<script type="text/javascript" src="'+c.url+'"><\/script>'}}document.write(a)}else{document.write(c.url)}}};RubiconAdServing.RubiconAd=function(){this.config={server:"revv",host:"optimized-by.rubiconproject.com",hosts:{revv:{beta:"staged-by.rubiconproject.com",prod:"optimized-by.rubiconproject.com"},rfm:{beta:"mrp.rubiconproject.com",prod:"mrp.rubiconproject.com"}}};this.default_context={rp_env:"prod",rp_adtype:"js",rp_kw:null,rp_gender:null,rp_age:null,rp_age_range:null,rp_age_dob:null,rp_ethnicity:null,rp_xpi:null,rp_page:null,rp_geo:{},rp_aso:{},rp_feature_set:{visibility:true,expandable:true,local_storage:true,rfm_routing:false,tablet_mapping:false,first_party_data:true,rtp_first_look:false,rtp_data_collection:false,jit_sync:true,floor_is_rtb_only:true},rp_dpf:false,rp_navigator:null};this.mergeProperties=function(l,k){if(typeof(l)=="undefined"||!l){return k}var n={};for(var m in k){if(typeof l[m]=="undefined"){l[m]=k[m]}else{if(l[m]!=null&&typeof l[m]=="object"){this.mergeProperties(l[m],k[m])}}}return l};this.init=function(l){try{this.default_context.rp_div_id="rp-"+new Number(Math.floor(Math.random()*1000000)).toString(36);if(l){this.context=this.mergeProperties(l,this.default_context)}else{this.context=this.default_context}this.browser=new e(this.context.rp_navigator||navigator);if(this.context.rp_zonesize){var m=this.context.rp_zonesize.split("-");this.context.rp_zone=m[0];this.context.rp_size_id=m[1]}if(this.context.rp_lat&&!this.isValidLat(this.context.rp_lat)){delete this.context.rp_lat}if(this.context.rp_long&&!this.isValidLong(this.context.rp_long)){delete this.context.rp_long}if(this.context.rp_geo&&this.context.rp_geo.latitude&&!this.isValidLat(this.context.rp_geo.latitude)){delete this.context.rp_geo.latitude}if(this.context.rp_geo&&this.context.rp_geo.longitude&&!this.isValidLong(this.context.rp_geo.longitude)){delete this.context.rp_geo.longitude}if(rp_account_config){this.context=this.mergeProperties(rp_account_config,this.context);if(rp_account_config.site_config){var k=rp_account_config.site_config[this.context.rp_site];if(k){this.context=this.mergeProperties(k,this.context);if(k.zone_config){this.context=this.mergeProperties(k.zone_config[this.context.rp_zone],this.context)}}}if(this.shouldSplitTablet()){if(this.context.tablet_map.site_id&&this.context.tablet_map.zone_id){this.context.rp_site=this.context.tablet_map.site_id;this.context.rp_zone=this.context.tablet_map.zone_id;this.context.rp_zonesize=this.context.rp_zone+"-"+this.context.rp_size_id}}}this.context.rp_rtb_tier=this.context.rp_rtb_tier||this.context.rp_pmp_tier;if(this.context.rp_feature_set.floor_is_rtb_only){this.context.rp_rtb_floor=this.context.rp_floor||this.context.rp_rtb_floor;this.context.rp_floor=null}if(this.shouldRouteToRFM()){this.config.server="rfm"}if(this.context.rp_env){this.config.host=this.config.hosts[this.config.server][this.context.rp_env]||this.config.hosts[this.config.server]["prod"]||this.config.host}if(this.context.rp_host){this.config.host=this.context.rp_host}}catch(n){}};this.isValidLat=function(k){return(k!=null)&&k>=-90&&k<=90};this.isValidLong=function(k){return(k!=null)&&k>=-180&&k<=180};this.shouldSplitTablet=function(){return(this.context.rp_feature_set.tablet_mapping&&this.browser.detectiPad())};this.shouldRouteToRFM=function(){return(this.context.rp_feature_set.rfm_routing_always||(this.context.rp_feature_set.rfm_routing&&this.browser.detectiPad()&&(this.context.rp_adtype=="js")))};this.start=function(){var w=false;var B;var x=location.href.split(":");var F=x[0]=="https"?"https://":"http://";var o;if(this.context.rp_adtype!="jsonp"){o=F+this.config.host+"/a/$account_id$/$site_id$/$zonesize$.$format$?";o+="$cb$$floor$$rtb_floor$$smart$$referrer$$smartfile$$storagetype$$localstorage$";o+="$keyword$$gender$$age$$agerange$$agedob$$ethnicity$$tracking$$user_key$$fbid$$xpi$";o+="$tg_i$$tg_v$$p_app$$p_device$$p_accept$$p_interstitial$$dpf$$rtb_tier$$aso$$block_keys$";o+="$p_geo$$p_lat$$p_long$$p_screen_res$$slot$$ad_id$";if(this.shouldRouteToRFM()){o=F+this.config.host+"/ad_request?$div_id$$app_id$$pub_id$$rand_cb$";o+="$rfm_lat$$rfm_lng$$rfm_ad_size$"}}else{o=F+this.config.host+"/a/api/ads.$format$?enc=url&account_id=$account_id$&site_id=$site_id$&zone_id=$zone_id$&size_id=$size_id$";o+="$cb$$floor$$rtb_floor$$smart$$referrer$$smartfile$$storagetype$$localstorage$";o+="$keyword$$gender$$age$$agerange$$agedob$$ethnicity$$tracking$$user_key$$fbid$$xpi$";o+="$tg_i$$tg_v$$p_app$$p_device$$p_accept$$p_interstitial$$dpf$$rtb_tier$$aso$$block_keys$";o+="$p_geo$$p_lat$$p_long$$p_screen_res$$slot$$ad_id$";if(this.context.rp_ae_spoof){o=this.context.rp_ae_spoof}}o+="$digitrust.id$$digitrust.preference$";if(this.context.rp_account&&this.context.rp_site&&this.context.rp_zonesize){o=d("account_id",this.context.rp_account,o);o=d("site_id",this.context.rp_site,o);o=d("zonesize",this.context.rp_zonesize,o);o=d("zone_id",this.context.rp_zone,o);o=d("size_id",this.context.rp_size_id,o)}else{return}o=d("format",(this.context.rp_adtype=="iframe"?"html":this.context.rp_adtype),o);var r=null;try{if(this.context.rp_page&&this.context.rp_page.length>0){r=escape(this.context.rp_page)}else{if(i()){var I=document.referrer;try{if(typeof window.parent.location.href=="string"&&window.parent.location.href.substr(0,4)=="http"){I=top.location.href||I}}catch(K){}if(I&&I.length>0){r=escape(I)}}}}catch(K){w=true}o=c("referrer","rf",r,o);if(!this.context.rp_feature_set.aso_override){this.context.rp_aso={}}if(this.context.rp_feature_set.expandable&&!("exp" in this.context.rp_aso)){this.context.rp_aso.exp=(this.getSupportExpandableAd()?1:null)}if(this.context.rp_feature_set.visibility&&!("pos" in this.context.rp_aso)){this.context.rp_aso.pos=h()}o=this.appendObject("aso","p",this.context.rp_aso,o,"_");o=c("slot","ad_slot",this.context.rp_slot,o);o=c("ad_id","ad_id",this.context.rp_ad,o);o=c("p_screen_res","p_screen_res",f(),o);o=c("cb","cb",Math.random(),o);o=c("keyword","kw",this.context.rp_kw,o);o=c("gender","gender",this.context.rp_gender,o);o=c("age","age",this.context.rp_age,o);o=c("agerange","age_range",this.context.rp_age_range,o);o=c("agedob","age_dob",this.context.rp_age_dob,o);o=c("ethnicity","ethnicity",this.context.rp_ethnicity,o);if(this.context.rp_lat!=null&&this.context.rp_long!=null){o=c("p_lat","p_lat",this.context.rp_lat,o);o=c("p_long","p_long",this.context.rp_long,o)}else{o=c("p_lat","p_lat",null,o);o=c("p_long","p_long",null,o)}o=c("xpi","xpi",this.context.rp_xpi,o);if(this.context.rp_rtb_floor){var A={standard:1,override:2,priority:3,"private":4};var t=null;if(this.context.rp_rtb_tier&&(this.context.rp_rtb_tier in A)){t=A[this.context.rp_rtb_tier]}o=c("rtb_floor","rp_floor",this.context.rp_rtb_floor,o);o=c("rtb_tier","rp_pmp_tier",t,o);o=c("dpf","rp_dpf",(this.context.rp_dpf?"1":null),o)}else{o=c("rtb_floor","rp_floor",null,o);o=c("rtb_tier","rp_pmp_tier",null,o);o=c("dpf","rp_dpf",null,o)}if(this.context.rp_floor){o=c("floor","rp_hard_floor",this.context.rp_floor,o)}else{o=c("floor","rp_hard_floor",null,o)}o=c("block_keys","p_block_keys",this.context.rp_blocks,o);o=c("tracking","tk_code",this.context.rp_tracking,o);o=c("user_key","tk_user_key",this.context.rp_user_key,o);o=c("smart","tk_st",(w?"0":"1"),o);o=c("smartfile","tk_sf",(this.context.rp_smartfile?"1":null),o);if(this.context.rp_feature_set.first_party_data){o=this.appendObject("tg_i","tg_i",this.context.rp_inventory,o);o=this.appendObject("tg_v","tg_v",this.context.rp_visitor,o)}else{o=this.appendObject("tg_i","tg_i",null,o);o=this.appendObject("tg_v","tg_v",null,o)}o=c("div_id","div",this.context.rp_div_id,o,true);o=c("app_id","app",this.context.rp_app_id,o);o=c("pub_id","pub",this.context.rp_publisher_id,o);o=c("rand_cb","id",Number(Math.random()*100000000000000000).toString(36),o);o=c("rfm_lat","lat",this.context.rp_geo.latitude,o);o=c("rfm_lng","lng",this.context.rp_geo.longitude,o);var M;var s=false;if(RubiconAdServing.AdSizes&&this.context.rp_size_id&&RubiconAdServing.AdSizes[this.context.rp_size_id]){M=RubiconAdServing.AdSizes[this.context.rp_size_id].dim;if(M=="0x0"){M=null}s=RubiconAdServing.AdSizes[this.context.rp_size_id].interstitial}o=c("rfm_ad_size","sze",M,o);o=c("fbid","x_fbid",this.context.rp_facebook_device_id,o);o=this.appendObject("p_app","p_app",this.context.rp_app,o);o=this.appendObject("p_device","p_device",this.context.rp_device,o);o=this.appendObject("p_geo","p_geo",this.context.rp_geo,o);o=this.appendObject("p_accept","p_accept",this.context.rp_accept,o);o=c("p_interstitial","p_instl",s?1:null,o);var z=null;var u=null;var q;try{q=typeof(DigiTrust.getIdentitySync)}catch(L){q=false}if(this.context.rp_feature_set.digitrust&&q){var l=DigiTrust.getIdentitySync({member:"rubicon"});if(l&&l.success&&l.identity){var R=l.identity;z=R.id;u=R.privacy.optout?1:0}}o=c("digitrust.id","dt.id",z,o);o=c("digitrust.preference","dt.preference",u,o);if(this.context.rp_feature_set.local_storage&&this.browser.detectSafari()){var N=[];data=RubiconAdServing.getStoredData();if(data&&data.fcaps&&data.fcaps.sizes){var k=data.fcaps.sizes;for(var y in k){if(!k[y].ads){continue}for(var P in k[y].ads){N[N.length]="ls_fcap."+y+"="+P+",0x"+k[y].ads[P].count.toString(16)+",0x"+k[y].ads[P].first_seen.toString(16)+",0x"+k[y].ads[P].last_seen.toString(16)}}}if(data&&data.bucket&&typeof data.bucket==="object"){var v=data.bucket;for(var C in v){if(typeof v[C]!=="object"){continue}for(var Q in v[C]){N[N.length]="ls_c."+C+"."+Q+"=0x"+v[C][Q].value.toString(16)+",0x"+v[C][Q].first_set.toString(16)+",0x"+v[C][Q].last_set.toString(16)}}}o=o.replace(/\$localstorage\$/,!N.length?"":"&"+N.join("&"),o);o=c("storagetype","rp_s","l",o)}else{o=c("localstorage","localstorage",null,o);o=c("storagetype","rp_s","c",o)}if(this.context.rp_adtype=="jsonp"){var E=this;window.rp_onAdResponseLoaded=function(S){E.onAdResponseLoaded(S)}}if(this.shouldRouteToRFM()){var H=["rp_page","rp_inventory","rp_visitor","rp_gender","rp_age","rp_age_range","rp_age_dob","rp_ethnicity","rp_xpi","rp_kw","rp_tracking","rp_floor","rp_smartfile","rp_geo"];for(var G=0;G<H.length;G++){if(typeof this.context[H[G]]!="undefined"&&this.context[H[G]]!=null){window[H[G]]=this.context[H[G]]}}}var n=new RubiconAdServing.Requests();var m={slot:this,url:o,context:this.context};n.addRequest(this.context.rp_zonesize,m);try{var O=(this.browser.detectSafari()||this.browser.detectiPhone()||this.browser.detectiPad());if(this.context.rp_feature_set.jit_sync&&O){var J=[2054,2138,2149,2532,3410];var p="rp_onUserIdLoaded_"+this.context.rp_zonesize;p=p.replace("-","_");var D=F+"gum.criteo.com/sync?c=2&r=2&j="+p;var E=this;window[p]=function(S){E.onUserIdLoaded(J,m,S)};document.write("<script type='text/javascript' src='"+D+"'><\/script>")}}catch(K){}document.write("<script type='text/javascript'>rp_requests = new RubiconAdServing.Requests();     rp_requests.sendRequest('"+this.context.rp_zonesize+"');<\/script>")};this.onUserIdLoaded=function(n,l,m){if(n&&m&&m.status=="OK"&&m.userid){var o;var k;for(k=0;k<n.length;k++){o=n[k];l.url=l.url+="&put_"+o+"="+encodeURIComponent(m.userid)}}};this.dropRTPDataCollection=function(k){document.write('<script type="text/javascript">');document.write('oz_api="valuation";');document.write("oz_async=true;");document.write("oz_cached_only=true;");document.write('rp_account="'+this.context.rp_account+'";');document.write('rp_site="'+this.context.rp_site+'";');document.write('rp_zonesize="'+this.context.rp_zonesize+'";');if(this.context.rp_slot){document.write('rp_slot="'+this.context.rp_slot+'";')}document.write('oz_impression_id="'+k.impression_id+'";');document.write("<\/script>");document.write('<script type="text/javascript" src="http://tap-cdn.rubiconproject.com/partner/scripts/rubicon/dorothy.js?pc='+this.context.rp_account+"/"+this.context.rp_site+'"><\/script>')};this.filter_script=function(k){k=k.replace(/\/SCRIPT/g,'/SCR"+"IPT');k=k.replace(/\/script/g,'/scr"+"ipt');return k};this.onAdResponseLoaded=function(l){var r;try{if(l.ads){for(var m=0;m<l.ads.length;m++){r=l.ads[m];var n=["script","html"];for(var s in n){var p=n[s];if(r[p]&&typeof r[p]=="string"){r[p]=decodeURIComponent(r[p]);if(typeof this["filter_"+p]=="function"){r[p]=this["filter_"+p](r[p])}}}if(this.context.rp_slot){r.rp_slot=this.context.rp_slot}var q;var k=new RubiconAdServing.Creatives();q=l.account_id+"/"+l.site_id+"/"+l.zone_id+"-"+l.size_id;k.setAd(q,r);q=this.context.rp_slot;k.setAd(q,r)}}if(this.context.rp_callback){if(typeof this.context.rp_callback=="function"){this.context.rp_callback(l)}if(typeof this.context.rp_callback=="string"&&window[this.context.rp_callback]&&typeof window[this.context.rp_callback]=="function"){window[this.context.rp_callback](l)}}}catch(o){}try{if(this.context.rp_feature_set.rtp_data_collection){if(l.ads){for(var m=0;m<l.ads.length;m++){r=l.ads[m];this.dropRTPDataCollection(r)}}}}catch(o){}};var c=function(m,n,l,p,o){var k="";if(l!==null&&typeof l!="undefined"){k=(o===true?"":"&")+n+"="+l}return d(m,k,p)};var d=function(l,k,m){if(typeof l==="string"&&l!==null&&l.length>0){return m.replace("$"+l+"$",k)}else{return m}};this.appendObject=function(m,o,p,l,r){var q="";if(p){r=r||".";var n;for(var k in p){if(!p.hasOwnProperty(k)){continue}n=p[k];if(n!=null&&(typeof n.length=="undefined"||n.length>0)){if(typeof n=="boolean"){q+="&"+o+r+k+"="+(n?1:0)}else{q+="&"+o+r+k+"="+encodeURIComponent(n)}}}}l=d(m,q,l);return l};this.getSupportExpandableAd=function(){return(!i()&&this.context.rp_adtype!="iframe")};var i=function(){return(window!=top)};var j=function(){var k=false;try{window.top.location.href}catch(l){k=true}return k};var h=function(){var t=null;try{if(j()){}else{var n=window;var o=b();var p=90;var s;if(i()){while(window.top!==n.parent){n=n.parent;try{n.location.href}catch(l){return t}}s=g(n.frameElement);p=n.frameElement.clientHeight/2}else{var r=document.documentElement;while(r.childNodes.length&&r.lastChild.nodeType==1){r=r.lastChild}var m=document.createElement("div");var k=a("rubicon_chk_position_");m.setAttribute("id",k);m.style.width="0px";m.style.height="0px";r.parentNode.appendChild(m);s=g(m);r.parentNode.removeChild(m);p=p/2}if(o.y+o.h<(p+s.y)||o.y>(p+s.y)){t="btf"}else{t="atf"}}}catch(q){}return t};var a=function(k){return k+Math.floor(Math.random()*1000000)};var b=function(){if(window.frameElement){return{x:window.top.innerWidth,y:window.top.pageYOffset||window.top.document.body.scrollTop||window.top.document.documentElement.scrollTop,w:(window.top.innerWidth||window.top.documentElement.clientWidth||window.top.getElementsByTagName("body")[0].clientWidth),h:(window.top.innerHeight||window.top.documentElement.clientHeight||window.top.getElementsByTagName("body")[0].clientHeight)}}return{x:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,y:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,w:(window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth),h:(window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight)}};var f=function(){try{return window.screen.width+"x"+window.screen.height}catch(k){}};var g=function(l){var k=0,m=0;if(l.offsetParent){do{k+=l.offsetLeft;m+=l.offsetTop}while(l=l.offsetParent)}return{x:k,y:m}};var e=function(k){this.navigator=k,this.safariMatching=[{text:k.vendor,pattern:"Apple"}],this.ipadMatching=[{text:k.userAgent,pattern:"iPad"},{text:k.userAgent,pattern:"OS X"}],this.iphoneMatching=[{text:k.userAgent,pattern:"iPhone"},{text:k.userAgent,pattern:"OS X"}],this.detectSafari=function(){return this.matchesAny(this.safariMatching)},this.detectiPad=function(){return this.matchesAll(this.ipadMatching)},this.detectiPhone=function(){return this.matchesAll(this.iphoneMatching)},this.matchesAny=function(m){for(var l=0;l<m.length;l++){var n=m[l].text;if(n&&n.indexOf(m[l].pattern)!=-1){return true}}return false},this.matchesAll=function(n){var l=0;for(var m=0;m<n.length;m++){var o=n[m].text;if(o&&o.indexOf(n[m].pattern)>=0){l++}}return(l>0&&l==n.length)}}};RubiconAdServing.getStoredData=function(){try{var b=localStorage.rubiconSmartTagData;if(b){var a=JSON.parse(b);if(typeof a==="object"){return a}}}catch(c){return{}}return{}};RubiconAdServing.storeData=function(a){try{localStorage.rubiconSmartTagData=JSON.stringify(a)}catch(b){}};RubiconAdServing.enforceFCapStructure=function(d,c,a,b){if(!d.fcaps){d.fcaps={}}if(!d.fcaps.sizes){d.fcaps.sizes={}}if(!d.fcaps.sizes[c]){d.fcaps.sizes[c]={}}if(!d.fcaps.sizes[c]["ads"]){d.fcaps.sizes[c]["ads"]={}}if(!d.fcaps.sizes[c]["ads"][a]){d.fcaps.sizes[c]["ads"][a]={count:0,ad_id:a,first_seen:b,last_seen:b}}return d};RubiconAdServing.setFCap=function(c,a,d,b){var e=RubiconAdServing.getStoredData();e=RubiconAdServing.enforceFCapStructure(e,c,a,b);e.fcaps.sizes[c]["ads"][a].count=d;e.fcaps.sizes[c]["ads"][a].last_seen=b;RubiconAdServing.storeData(e)};RubiconAdServing.incFCap=function(c,a,d,b){var e=RubiconAdServing.getStoredData();e=RubiconAdServing.enforceFCapStructure(e,c,a,b);e.fcaps.sizes[c]["ads"][a].count+=d;e.fcaps.sizes[c]["ads"][a].last_seen=b;RubiconAdServing.storeData(e)};RubiconAdServing.decFCap=function(c,a,d,b){var e=RubiconAdServing.getStoredData();e=RubiconAdServing.enforceFCapStructure(e,c,a,b);e.fcaps.sizes[c]["ads"][a].count-=d;e.fcaps.sizes[c]["ads"][a].last_seen=b;RubiconAdServing.storeData(e)};RubiconAdServing.delFCap=function(b,a){var c=RubiconAdServing.getStoredData();c=RubiconAdServing.enforceFCapStructure(c,b,a,0);delete c.fcaps.sizes[b]["ads"][a];if(JSON.stringify(c.fcaps.sizes[b]["ads"])==="{}"){delete c.fcaps.sizes[b]}if(JSON.stringify(c.fcaps.sizes)==="{}"){delete c.fcaps.sizes}RubiconAdServing.storeData(c)};RubiconAdServing.enforceBucketStructure=function(d,c,b,a){if(typeof d.bucket!=="object"){d.bucket={}}if(typeof d.bucket[c]!=="object"){d.bucket[c]={}}if(typeof d.bucket[c][b]!=="object"){d.bucket[c][b]={first_set:a,value:0}}return d};RubiconAdServing.setBucketValue=function(c,b,e,a){var d=RubiconAdServing.getStoredData();d=RubiconAdServing.enforceBucketStructure(d,c,b,a);d.bucket[c][b].value=e;d.bucket[c][b].last_set=a;RubiconAdServing.storeData(d)};RubiconAdServing.incBucketValue=function(c,b,e,a){var d=RubiconAdServing.getStoredData();d=RubiconAdServing.enforceBucketStructure(d,c,b,a);d.bucket[c][b].value+=e;d.bucket[c][b].last_set=a;RubiconAdServing.storeData(d)};RubiconAdServing.decBucketValue=function(c,b,e,a){var d=RubiconAdServing.getStoredData();d=RubiconAdServing.enforceBucketStructure(d,c,b,a);d.bucket[c][b].value-=e;d.bucket[c][b].last_set=a;RubiconAdServing.storeData(d)};RubiconAdServing.delBucketValue=function(b,a){var c=RubiconAdServing.getStoredData();c=RubiconAdServing.enforceBucketStructure(c,b,a,0);delete c.bucket[b][a];if(JSON.stringify(c.bucket[b])==="{}"){delete c.bucket[b]}RubiconAdServing.storeData(c)};(function(){try{var a;var d=new RubiconAdServing.RubiconAd();var c=new Object();var g;g=["rp_account","rp_site","rp_zonesize","rp_ad","rp_height","rp_width","rp_floor","rp_pmp_tier","rp_rtb_tier","rp_rtb_floor","rp_lat","rp_long","rp_slot"];for(var b=0;b<g.length;b++){a=g[b];if((window[a]!=null)&&(typeof window[a]=="string"||typeof window[a]=="number")){c[a]=window[a];window[a]=undefined}}g=["rp_adtype","rp_page","rp_ae_spoof","rp_env","rp_host","rp_facebook_device_id","rp_publisher_id","rp_app_id","rp_div_id"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&typeof window[a]=="string"){c[a]=window[a];window[a]=undefined}}g=["rp_gender","rp_age","rp_age_range","rp_age_dob","rp_ethnicity","rp_xpi","rp_kw","rp_tracking","rp_user_key","rp_blocks"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&((typeof window[a]=="string"&&window[a].substr(0,7)!="[INSERT")||typeof window[a]=="number")){c[a]=window[a];window[a]=undefined}}g=["rp_debug","rp_inventory","rp_visitor","rp_app","rp_device","rp_geo","rp_accept","rp_feature_set","rp_dpf","rp_aso","rp_navigator"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&(typeof window[a]=="object"||typeof window[a]=="boolean")){c[a]=window[a];window[a]=undefined}}g=["rp_smartfile"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&(typeof window[a]=="string"&&window[a].substr(0,6)!="[SMART")){c[a]=window[a];window[a]=undefined}}g=["rp_callback"];for(var b=0;b<g.length;b++){a=g[b];if(window[a]&&(typeof window[a]=="function"||typeof window[a]=="string")){c[a]=window[a];window[a]=undefined}}d.init(c);d.start()}catch(f){}})();