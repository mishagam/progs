window.POPMECH.namespace("gridCellEllipsis"),window.POPMECH.gridCellEllipsis=function(a,b,c){"use strict";"function"!=typeof c.prototype.dotdotdot;var d='<span class="grid-ellipsis-fade"></span>',e=function(a){var b=a.find(".grid-ellipsis");b.dotdotdot({ellipsis:"",lastCharacter:{remove:[]},callback:function(a,b){var e;a&&(e=c(this),e.append(d))}});var e=a.find(".grid-ellipsis-lectory");e.each(function(){var a=c(this).parent().height()-c(this).parent().find(".article-preview-place").first().height()-15;c(this).css("height",a+"px")})};return{doGridEllipsis:e}}(window.POPMECH,window,window.jQuery);