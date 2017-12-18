/* Слайдер переключения двух фото */

(function($) {

	$.fn.create_double_slider = function() {
		return this.each(function() {
		
			var slider = this;
			slider.width = parseInt($(slider).width());
			slider.height = parseInt($(slider).height());
			slider.src1 = $(slider).attr('data-src1');
			slider.src2 = $(slider).attr('data-src2');
			slider.max_offset = slider.width - 1;
			start_pos = 50;
			if (typeof $(slider).attr('data-pos') !== typeof undefined) {
				start_pos = parseInt($(slider).attr('data-pos'));
			}
			slider.offset = 0;
			slider.event_offset = 0;
			slider.mousemove_event_offset = 0;
			slider.mousemove_event_moving = false;
			slider.touch_event_offset = 0;
			
			$(slider).append('<div class="slides"><div class="slide1" style="width:'+slider.width+'px;height:'+slider.height+'px;"><img src="'+slider.src1+'" unselectable="on"></div><div class="slide2" style="width:'+slider.width+'px;height:'+slider.height+'px;"><img src="'+slider.src2+'"  unselectable="on"></div></div><div class="slider_but"><div class="slider_but_item"></div></div>');
			$(slider).find('.slides').css({width:slider.width, height:slider.height});
			
			slider.set_slider_pos = function(offset) {
				offset = offset > slider.max_offset ? slider.max_offset : offset;
				offset = offset < 0 ? 0 : offset;
				offset = Math.round(offset);
				slider.offset = offset;
				$(slider).find('.slide2, .slider_but').css({left:offset});
				$(slider).find('.slide2 img').css({left:-offset});
			};
			
			slider.mousemove_event = function(e) {
				var x = e.pageX - $(slider).offset().left + slider.mousemove_event_offset + 20;
				slider.set_slider_pos(x);
			};
			
			$(slider).find('.slider_but_item').mousedown(function(e) {
				slider.mousemove_event_offset = $(this).offset().left - e.pageX;
				slider.mousemove_event_moving = true;
				$(document).bind('mousemove', slider.mousemove_event);
			});
			
			$(document).mouseup(function(e) {
				if (slider.mousemove_event_moving == true) {
					slider.mousemove_event_moving = false;
					$(document).unbind('mousemove', slider.mousemove_event);
					if (window.getSelection) {
						window.getSelection().removeAllRanges();
					} else {
						document.selection.empty();
					}
				}
			});
			
			$(slider).bind('touchstart', function(e) {
				slider.touch_event_offset = e.originalEvent.touches[0].clientX;
				slider.event_offset = slider.offset;
			});
			
			$(slider).bind('touchmove', function(e) {
				var te = e.originalEvent.changedTouches[0].clientX;
				var offset = slider.event_offset + (te - slider.touch_event_offset);
				e.preventDefault();
				slider.set_slider_pos(offset);	
			});
			
			$(slider).bind('touchend', function(e) {
				var te = e.originalEvent.changedTouches[0].clientX;
				var offset = slider.event_offset + (te - slider.touch_event_offset);
				slider.set_slider_pos(offset);
			});
			
			
			slider.set_slider_pos(start_pos/100*slider.max_offset);
			
		});
	};

	$(document).ready(function() {
		$('.double_slider').create_double_slider();
	});
	
})(jQuery);