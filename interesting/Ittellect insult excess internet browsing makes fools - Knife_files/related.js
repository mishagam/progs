function related_render(){var valid=false;var skip=["IMG","UL","OL","BLOCKQUOTE","IFRAME","I","STRONG"];var content=jQuery(".cb-entry-content");if(content.find(".entry-content").length>0)
content=jQuery(".entry-content");if(content.find(".column").length>0)
content=jQuery(".column");var items=content.children()
var elements=[];if(items.length<15)
return false;for(var i=items.length;i>0;i--){var j=items.length- i;if(j<5||i<5)continue;var item=jQuery(items[i]);if(item.prop("tagName")!=="P"){valid=false;continue;}
if(item.text().length<80){valid=false;continue;}
var child=item.children().first().prop("tagName");if(jQuery.inArray(child,skip)>-1){valid=false;continue;}
if(valid===false){valid=true;continue;}
elements.push(item);valid=false;}
var widget=jQuery('<div class="my-widget-anchor"></div>');var middle=elements[Math.floor(elements.length/2)];if(typeof middle!=='object')
return false;widget.insertAfter(middle);return myWidget.render("8f433877412cfbadceb515bcdd6a4708",widget[0]);}
window.myWidgetAsyncCallbacks=window.myWidgetAsyncCallbacks||[];window.myWidgetAsyncCallbacks.push(related_render);window.myWidgetInit={useDomReady:true,autoRender:false};(function(d,s,id){var js,t=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.onerror=function(){t.parentNode.removeChild(js);js=d.createElement(s);js.id=id;js.src='https://likemore-static.mytopf.com/mytopf/widget.js';t.parentNode.insertBefore(js,t);};js.src='https://likemore-go.imgsmail.ru/widget.js';t.parentNode.insertBefore(js,t);}(document,'script','my-widget-script'));