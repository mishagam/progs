!function(global){"use strict";global.POPMECH=global.POPMECH||{},global.POPMECH.namespace=function(a){var b,c=a.split("."),d=global.POPMECH;for("POPMECH"===c[0]&&(c=c.slice(1)),b=0;b<c.length;b++)"undefined"==typeof d[c[b]]&&(d[c[b]]={}),d=d[c[b]];return d},global.POPMECH.increaseCounters=function(a,b){if("undefined"!=typeof Ya){var c=new Ya.Metrika({id:19745680});b?c.hit(a,b):c.hit(a)}"undefined"!=typeof ga&&(b?ga("send","pageview",{page:a,title:b}):ga("send","pageview",a)),"undefined"!=typeof _tmr&&"undefined"!=typeof _tmr.pageView&&_tmr.pageView({referrer:a,url:a}),(new Image).src="//counter.yadro.ru/hit;mens-network?r"+("undefined"==typeof screen?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+escape(window.location.protocol+"//"+window.location.host+a)+";h"+escape(b?b.substring(0,80):document.title.substring(0,80))+";"+Math.random(),"undefined"!=typeof tnsCounterImbusiness_ru&&"undefined"!=typeof tnsCounterImbusiness_ru.hit&&tnsCounterImbusiness_ru.hit(null,a,null);var d=Math.round(1e9*Math.random()),e="unknown";(new Image).src="http://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=408402&bt=21&pid=1753321&bid=3546547&bn=3546547&rnd="+d+"&tail256="+e,(new Image).src=("https:"==document.location.protocol?"https:":"http:")+"//tag.datariver.ru/cgi-bin/rle.cgi?sid=1&ad=408402&bt=21&pid=1753322&bid=3546549&bn=3546549&rnd="+d+"&tail256="+e,function(a,b,c,d){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//www.popmech.ru/"+a+"/.js?i="+b+"&u="+c+"&r="+d;var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(e,f)}(sputnikHash,"12",a,"")},global.POPMECH.trackEvent=function(a,b,c,d){ga("send","event",a,b,c,d)},global.POPMECH.scrollIndexInc=function(a){a||(a=1);var b=global.scrollIndex;b+=a,global.scrollIndex=b},global.POPMECH.pzInc=function(a){a||(a=1);var b=global.globalPZ;b+=a,1>b&&(b=9),b=b%9?b%9:9,global.globalPZ=b,global.ar_custom[95]=0},global.POPMECH.keywordRegenerate=function(){for(var a=global.globalKeyword;a==global.globalKeyword;)a=Math.floor(9*Math.random())+1;global.globalKeyword=a},global.POPMECH.reloadBanner=function(parentBlock,logReload,reloadOnly){var adsElement,bannerId,bannerType,keyword,params,uniqID,adsHtml,adsBlockInitCode,rnd,gptIndex;adsElement=parentBlock.find("div").first(),adsElement&&(bannerId=adsElement.attr("id"),bannerType=adsElement.data("banner-type")?adsElement.data("banner-type"):"adriver","adriver"==bannerType&&adriver.items?reloadOnly?adriver.items[bannerId]&&1==adriver.items[bannerId].p.childNodes.length&&(adsElement.clear(),adriver.items[bannerId].reload(),logReload&&(console.log("reload banner. banner object: "),console.log(adriver.items[bannerId]))):(adriver.items[bannerId]&&delete adriver.items[bannerId],keyword=adsElement.data("keyword"),params=adsElement.data("params"),uniqID=(new Date).getTime()+"_"+Math.floor(1e4*Math.random()),adsBlockInitCode="",adsBlockInitCode+="rnd = "+(keyword?keyword:global.globalKeyword)+"; ",adsBlockInitCode+='new adriver("'+uniqID+'", '+params+")",adsHtml="",adsHtml+='<div id="'+uniqID+'" ',adsHtml+=keyword?'data-keyword="'+keyword+'" ':"",adsHtml+='data-params="'+params+'"></div>',adsHtml+='<script type="text/javascript">'+adsBlockInitCode+"</script>",parentBlock.html(adsHtml),eval(adsBlockInitCode),logReload&&adriver.items[uniqID]&&(console.log("reload banner. banner object: "),console.log(adriver.items[uniqID]))):"adfox"==bannerType?"function"==typeof adfox_reloadBanner&&(adfox_reloadBanner(bannerId+"_adfox"),logReload&&console.log("reload banner. banner object: "+bannerId+". type: adfox")):"gpt"==bannerType&&(gptIndex=adsElement.data("gpt-index"),"function"==typeof googletag.pubads&&"function"==typeof googletag.pubads().refresh&&gptadslots&&gptadslots[gptIndex]&&(googletag.pubads().clear([gptadslots[gptIndex]]),googletag.pubads().refresh([gptadslots[gptIndex]],{changeCorrelator:!1}),logReload&&(console.log("reload banner. banner object: "+bannerId+". type: gpt"),console.log(gptadslots[gptIndex])))))}}(window);