/* Слайдер моя планета */

$(function(){

	$.fn.create_slider = function(items, free_mode) {

		var slider = this;
		slider.items = items;
		if (typeof free_mode == 'undefined') {
			free_mode = false;
		}
		slider.free_mode = free_mode;
		slider.block = false;
		slider.now_index = -1;
		slider.now_mouseenter = false;
		slider.options = {
			'smooth_speed':300
		};
		
		slider.init = function() {
			
			var max_height = 0;
			if (slider.free_mode == false) {
				for (var i in slider.items) {
					if (slider.items[i].extra.sizes[1] > max_height) {
						max_height = slider.items[i].extra.sizes[1];
					}
				}
			} else {
				max_height = 500;
			}
			slider.options.height = max_height;
			slider.options.max_height = max_height;
			slider.options.max_width = 760;
			var html = '<div class="slider_container"><div class="slider_table_td" style="height:'+slider.options.height+'px;"></div><div class="slider_ui"></div></div>';
			$(slider).html(html);
			for (var i in slider.items) {
				$(slider).find('.slider_ui').append('<a href="javascript://" data-index="'+i+'">&nbsp;</a>');
			}
			$(slider).find('.slider_ui a').click(function() {
				slider.show($(this).attr('data-index'), true);
			}).mouseenter(function() {
				slider.show_small_preview($(this).attr('data-index'));
			}).mouseleave(function() {
				slider.hide_small_preview($(this).attr('data-index'));
			});
			var loader_img = new Image();
			loader_img.src = '/templates/images/slider/loader.gif';
			
			slider.show(0, false);
			
			$(slider).find('.slider_table_td').mouseenter(function() {
				slider.now_mouseenter = true;
			}).mouseleave(function() {
				slider.now_mouseenter = false;
			});
		};
		
		slider.set_height = function(height) {

			slider.options.height = height;
			$(slider).find('.slider_table_td').height(height);
			
		};
		
		slider.count_sizes = function(width, height) {
			var delitel1 = slider.options.max_width / width;
			var delitel2 = slider.options.max_height / height;
			if (width < slider.options.max_width && height < slider.options.max_height) {
				return [width, height];
			} else if (delitel1 < delitel2) {
				return [Math.round(width*delitel1), Math.round(height*delitel1)];
			} else {
				return [Math.round(width*delitel2), Math.round(height*delitel2)];
			}
		};
		
		slider.show = function(index, smooth) {
			
			index = parseInt(index);
			if (slider.block == true) {
				return false;
			}
			slider.block = true;
			if (slider.now_index >= 0) {
				//Грузим картинку в память
				var img = new Image();
				img.src = slider.items[index].preview.way;
				//Спрятать текущую
				slider.hide_engine(function() {
					$(slider).find('.slider_table_td *').remove();
					$(slider).find('.slider_table_td').html('<img src="/templates/images/slider/loader.gif" class="slider_loader">');
					$('<img src="'+slider.items[index].preview.way+'">').img_ready(function(width, height) {
						//setTimeout(function() {
							if (slider.free_mode == true) {
								var s = slider.count_sizes(width, height);
								slider.items[index].extra.sizes[0] = s[0];
								slider.items[index].extra.sizes[1] = s[1];
								slider.set_height(s[1]);
							}
							slider.show_engine(index, smooth);
						//}, 1000);
					});
				});
			} else {
				if (slider.free_mode == true) {
					$(slider).find('.slider_table_td').html('<img src="/templates/images/slider/loader.gif" class="slider_loader">');
					$('<img src="'+slider.items[index].preview.way+'">').img_ready(function(width, height) {
						var s = slider.count_sizes(width, height);
						slider.items[index].extra.sizes[0] = s[0];
						slider.items[index].extra.sizes[1] = s[1];
						slider.set_height(s[1]);
						slider.show_engine(index, smooth);
					});
				} else {
					slider.show_engine(index, smooth);
				}
			}
			
		};
		
		slider.hide_engine = function(func) {
			$(slider).find('.slider_ui a').removeClass('sel');
			$(slider).find('.slider_table_title, .slider_table_zoom, .slider_left_arrow, .slider_right_arrow').css({display:'none'});
			$(slider).find('.slider_table_img').animate({opacity:0}, slider.options.smooth_speed, function() {
				if (func != false) {
					func();
				}
			});
		};
		
		slider.show_engine = function(index, smooth) {
			
			var top = Math.round((slider.options.height - slider.items[index].extra.sizes[1]) / 2);
			if ((top + slider.items[index].extra.sizes[1]) > slider.options.height) {
				top -= 1;
			}
			$(slider).find('.slider_table_td').html('<span class="slider_spacer">&nbsp;</span><span class="slider_table_imgc" style="top:'+top+'px;"><img src="'+slider.items[index].preview.way+'" class="slider_table_img" style="width:'+slider.items[index].extra.sizes[0]+'px;height:'+slider.items[index].extra.sizes[1]+'px;"></span>');
			$(slider).find('.slider_table_td img.slider_table_img').css({opacity:0});
			slider.show_engine_preready(index, smooth);
			if (smooth == true) {
				$(slider).find('.slider_table_td img.slider_table_img').animate({opacity:1}, slider.options.smooth_speed, function() {
					slider.show_engine_ready(index, smooth);
				});
			} else {
				$(slider).find('.slider_table_td img.slider_table_img').css('opacity', 1);
				slider.show_engine_ready(index, smooth);
			}
		};
		
		slider.show_engine_preready = function(index, smooth) {
			if (typeof slider.items[index].extra.title != 'undefined' && slider.items[index].extra.title.length > 0) {
				$(slider).find('.slider_table_imgc').append('<div class="slider_table_title">'+slider.items[index].extra.title+'</div>');
			}
			$(slider).find('.slider_table_imgc').append('<a href="javascript://" class="slider_left_arrow">&nbsp;</a><a href="javascript://" class="slider_right_arrow">&nbsp;</a>');
			$(slider).find('.slider_table_imgc').append('<a href="javascript://" class="slider_table_zoom" title="Увеличить"><img src="/templates/images/slider/zoom.png"></a>');
			if (slider.now_mouseenter == true) {
				$(slider).find('.slider_table_title, .slider_table_zoom').stop().animate({opacity:1}, 300);
			}
			if (smooth == true) {
				$(slider).find('.slider_left_arrow, .slider_right_arrow').stop().animate({opacity:1}, 300);
			} else {
				$(slider).find('.slider_left_arrow, .slider_right_arrow').css({opacity:1});
			}
		};
		
		slider.show_engine_ready = function(index, smooth) {
			slider.now_index = index;
			slider.block = false;
			$(slider).find('.slider_ui a[data-index='+slider.now_index+']').addClass('sel');
			$(slider).find('.slider_table_img, .slider_spacer').click(function() {
				slider.show(slider.get_next(), true);
			});
			$(slider).find('.slider_right_arrow').click(function() {
				slider.show(slider.get_next(), true);
			});
			$(slider).find('.slider_left_arrow').click(function() {
				slider.show(slider.get_last(), true);
			});
			$(slider).find('.slider_table_td').mouseenter(function() {
				$(slider).find('.slider_table_title, .slider_table_zoom').stop().animate({opacity:1}, 300);
			}).mouseleave(function() {
				$(slider).find('.slider_table_title, .slider_table_zoom').stop().animate({opacity:0}, 300);
			});
			$(slider).find('.slider_table_zoom').click(function() {
				api2_box.box_image(slider.items[index].main.way, 'Слайд #'+(slider.now_index+1));
			});
		};
		
		slider.get_next = function() {
			if ((slider.now_index+1) == $.len(slider.items)) {
				return 0;
			} else {
				return (slider.now_index+1);
			}
		};
		
		slider.get_last = function() {
			if (slider.now_index == 0) {
				return ($.len(slider.items) - 1);
			} else {
				return (slider.now_index-1);
			}
		};
		
		slider.show_small_preview = function(index) {
			index = parseInt(index);
			if (index != slider.now_index) {
				$(slider).find('.slider_ui a[data-index='+index+']').append('<div class="slider_small_preview"><img src="'+slider.items[index].preview.way+'"></div>');
			}
		};
		
		slider.hide_small_preview = function(index) {
			index = parseInt(index);
			$(slider).find('.slider_ui a[data-index='+index+']').find('.slider_small_preview').remove();
		};
		
		
		slider.init();
		
	};

});