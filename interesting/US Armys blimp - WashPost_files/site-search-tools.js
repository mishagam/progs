TWP.Util.toTitleCase=function(d){var a="";var c=d.split(" ");for(var b=0;b<c.length;b++){a+=c[b].substr(0,1).toUpperCase()+c[b].substr(1);a+=b<c.length-1?" ":""}return a};jQuery.queryToUL=function(f){var g;if(!f.query){var e=jQuery("meta[name=keywords]").attr("content");var d=e.indexOf(";")!==-1?/;/g:/,/g;var c=encodeURIComponent(e.replace(d," OR "));var h=thisNode||navNode||"";h=h.split("/")[0];var b=f.items||8;g="https://www.washingtonpost.com/apps/national/proxy/methode/sitesearch/?fq=primarysection:"+TWP.Util.toTitleCase(h)+"%20source:%22The%20Washington%20Post%22&q="+c+"&start=0&rows="+b+"&fl=contenturl,headline,byline,blurb,contenttype&wt=json&omitHeader=true&json.wrf=storyCallback&tracking=relatedcontent"}else{g=f.query}var a={url:g};a.dataType=f.callback?"jsonp":"json";a.success=function(i){var j="";if(f.s1>0){jQuery.each(i.response.docs,function(l,m){if(l<f.s1&&m.headline&&m.headline!=="Corrections"&&m.contenttype!=="Photo"){var k="";k+='<div class="module wp-pad-bottom">';k+='<h2><a href="'+m.contenturl+'">'+m.headline+"</a></h2>";if(m.byline){k+='<p class="byline">'+m.byline+"</p>"}if(m.blurb){k+="<p>"+m.blurb+"</p>"}k+="</div>";j+=k}})}j+='<ul class="normal">';jQuery.each(i.response.docs,function(k,l){if(f.s1&&k<f.s1){}else{if(l.headline&&l.contenturl&&l.headline!=="Corrections"&&l.contenttype!=="Photo"){j+='<li><a href="'+l.contenturl+'">'+l.headline+"</a></li>"}}});j+="</ul>";jQuery(f.container).html(j)};if(f.callback){a.jsonpCallback=f.callback}jQuery.ajax(a)};