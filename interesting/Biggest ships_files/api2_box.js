var api2_box;

(function($) {

	api2_box = {
	
		is_init : false,
		boxes : {},
		boxes_count : 0,
		boxes_opened_count : 0,
		boxes_z_index : 10000,
		offset_left : 0,
		close_event : false,
		timer : 0,
		check_resize_box_image : 0,
		window_resize_timer : 0,
		window_resize_funcs : {},
		window_resize_mode : 0,
		now_focused_box : false,
		
		//Инициализация
		
		init : function() {
		
			//Задать однажды выполнение функций на ресайз
			if (api2_box.window_resize_mode == 0) {
				$(window).resize(function() {
					if (api2_box.window_resize_mode == 1) {
						clearTimeout(api2_box.window_resize_timer);
						api2_box.window_resize_timer = setTimeout(function() {
							api2_box.window_resize_engine();
						}, 50);
					}
				});
				$(document).keydown(function(e){
					if (api2_box.window_resize_mode == 1) {
						if(e.keyCode == 27){
							if (api2_box.now_focused_box != false && api2_box.now_focused_box != 'loader') {
								api2_box.close_box(api2_box.now_focused_box);
							}
						}
					}
				});
			}
		},
	
		prepare_scroll : function(step) {
			if (step == true) {
				var offset_left_1 = $('#all').offset().left;
				$('html').css({overflow:'hidden'});
				var offset_left_2 = $('#all').offset().left;
				api2_box.offset_left = offset_left_2 - offset_left_1;
				$('#all').css({left:(0-api2_box.offset_left)});
			} else {
				$('#all').css({left:0});
			}
		},
		
		window_resize_engine : function() {
			if (!api2.is_mobile) {
				$('.api_box_wrapper_table_td_holder').css({'max-height':'none'});
			}
			for (var i in api2_box.window_resize_funcs) {
				if (typeof api2_box.window_resize_funcs[i] == 'function') {
					api2_box.window_resize_funcs[i]();
				}
			}
			if (!api2.is_mobile) {
				$('.api_box_wrapper_table_td_holder').css({'max-height':$(window).height()});
			}
		},
	
	
		//Создание бокса
		box : function(params, target) {

		
			if (api2_box.is_init == false) {
				api2_box.init();
			}
			
			var default_params = {
				type : 'box',
				title : '',
				close_event : false,
				resize_event : false,
				focus_event : false,
				box_style : false,
				box_class : false,
				html : '<div></div>',
				id : false,
				blocked : false
			};
			params = $.extend(default_params, params);
			
			if (typeof target == 'undefined') { target = 'new'; }
			//Открываем новое окно
			if (target == 'new') {
			
				api2_box.boxes_count += 1;
				if (params.id == false) {
					params.id = 'box_' + api2_box.boxes_count;
				}
				if (typeof api2_box.boxes[params.id] != 'undefined') {
					api2_box.close_box(params.id);
				}
				api2_box.window_resize_funcs['box_' + params.id] = params.resize_event;
				params.zindex = api2_box.boxes_z_index;
				
				api2_box.boxes[params.id] = params;
				api2_box.append_bg(params.id);
				
				$('body').append('<table cellspacing="0" class="api_box_wrapper_table" id="table_'+params.id+'" style="z-index:'+api2_box.boxes_z_index+';"><tr><td class="api_box_wrapper_table_td"><div class="api_box_wrapper_table_td_holder"><table class="api_box_block" cellspacing="0"><tr><td class="api_box_block_td">&nbsp;</td></tr></table></div></td></tr></table>');
				api2_box.boxes_z_index += 1;
				
				$('#table_'+params.id+' .api_box_block_td').html(api2_box.box_form_html(params));

				if (params.type == 'box' && params.box_style != false) {
					$('#table_'+params.id+' .api_box_block_td').attr('style', params.box_style);
				}
				if (params.type == 'box' && params.box_class != false) {
					$('#table_'+params.id+' .api_box_block_td').addClass(params.box_class);
				}
				
				api2_box.boxes_opened_count += 1;
				api2_box.now_focused_box = params.id;
				
				
				
				if (typeof params.focus_event == 'function') {
					params.focus_event();
				}
			
			
			//Меняем содержимое открытого окна
			} else if (typeof api2_box.boxes[target] != 'undefined') {
			
				api2_box.boxes[target].html = params.html;
				if (params.title != '') {
					api2_box.boxes[target].title = params.title;
				}
				if (params.box_style != false) {
					api2_box.boxes[target].box_style = params.box_style;
				}
				if (params.box_class != false) {
					api2_box.boxes[target].box_class = params.box_class;
				}
				if (params.close_event != false) {
					api2_box.boxes[target].close_event = params.close_event;
				}
				if (params.resize_event != false) {
					api2_box.boxes[target].resize_event = params.resize_event;
					api2_box.window_resize_funcs['box_' + target] = params.resize_event;
				}
				if (params.focus_event != false) {
					api2_box.boxes[target].focus_event = params.focus_event;
				}
				
				$('#table_'+target+' .api_box_block_td').html(api2_box.box_form_html(api2_box.boxes[target]));
				
				if (params.type == 'box' && params.box_style != false) {
					$('#table_'+target+' .api_box_block_td').attr('style', params.box_style);
				}
				if (params.type == 'box' && params.box_class != false) {
					$('#table_'+target+' .api_box_block_td').addClass(params.box_class);
				}
				
			}
			
			if (api2.is_mobile) {
				$('#table_'+api2_box.boxes[params.id].id).css({position:'absolute', top:$(document).scrollTop()});
				api2_box.window_resize_engine();
			} else {
				//$('.api_box_wrapper_table_td').append('<div class="api_box_wrapper_closer">&nbsp;</div>');
				//$('.api_box_wrapper_closer').click(api2_box.close_box);
				api2_box.window_resize_engine();
			}
			api2_box.window_resize_mode = 1;
			
			return api2_box.boxes[params.id].id;
			
			
		},
		
		//Сформировать код HTML
		box_form_html : function(params) {
		
			if (params.type == 'box') {
				return '<div class="api_box_container"><table class="api_box_top" cellspacing="0"><tr><td class="api_box_title">'+params.title+'</td><td class="api_box_close"><a href="javascript://" onclick="api2_box.close_box(\''+params.id+'\'); return false;" title="Закрыть"><img src="/templates/images/box/close.png"></a></td></tr></table><table cellspacing="0" class="api_box_table"><tr><td class="api_box_table_td">'+params.html+'</td></tr></table></div>';
			} else if (params.type == 'html') {
				return params.html;
			}
		
		},
		
		//Закрыть бокс
		close_box : function(box_id, exec_focus) {
			if (typeof api2_box.boxes[box_id] == 'undefined') {
				return false;
			}
			if (api2_box.boxes[box_id].blocked == true) {
				return false;
			}
			if (typeof exec_focus == 'undefined') {
				exec_focus = true;
			}
			if (api2_box.boxes_opened_count > 0) {
				$('#table_'+api2_box.boxes[box_id].id+', #bg_'+api2_box.boxes[box_id].id).remove();
				if (api2_box.boxes_opened_count == 1) {
					$('object, embed, iframe').css('visibility', 'visible');
					$('html').css({overflow:'auto'});
					api2_box.prepare_scroll(false);
					api2_box.window_resize_mode = 2;
				}
				if (api2_box.boxes[box_id].close_event != false) {
					api2_box.boxes[box_id].close_event();
				}
				delete api2_box.boxes[box_id];
				delete api2_box.window_resize_funcs['box_' + box_id];
				api2_box.boxes_opened_count -= 1;
				var zi = 0;
				api2_box.now_focused_box = false;
				for (var i in api2_box.boxes) {
					if (api2_box.boxes[i].zindex > zi) {
						zi = api2_box.boxes[i].zindex;
						api2_box.now_focused_box = api2_box.boxes[i].id;
					}
				}
				if (exec_focus == true && api2_box.now_focused_box != false && typeof api2_box.boxes[api2_box.now_focused_box].focus_event == 'function') {
					api2_box.boxes[api2_box.now_focused_box].focus_event();
				}
			} else {
				api2_box.now_focused_box = false;
			}
			return true;
		},
		
		//Присоеденить фон
		append_bg : function(box_id) {
		
			if (api2_box.boxes_opened_count == 0) {
				$('object, embed, iframe').css('visibility', 'hidden');
				api2_box.prepare_scroll(true);
			}
			$('body').append('<div class="api_box_bg" id="bg_'+box_id+'" style="z-index:'+api2_box.boxes_z_index+';"></div>');
			api2_box.boxes_z_index += 1;
			if (api2.is_mobile) {
				$('#bg_'+box_id+'').css({position:'absolute', top:0, height:$(document).height()});
			}
			if (api2_box.boxes_opened_count == 0) {
				$('html').css({overflow:'hidden'});
			}
		
		},
		
		check_is_opened : function(box_id) {
			if (typeof api2_box.boxes[box_id] == 'undefined' || api2_box.boxes[box_id].status == 'close') {
				return false;
			} else {
				return true;
			}
		},
		
		//Закрыть все боксы
		close_all_boxes : function() {
			for (var i in api2_box.boxes) {
				api2_box.close_box(api2_box.boxes[i].id, false);
			}
		},
		
		//Заблокировать бокс на закрытие
		block_box : function(box_id) {
			if (typeof api2_box.boxes[box_id] == 'undefined') {
				return false;
			}
			api2_box.boxes[box_id].blocked = true;
			return true;
		},
		
		//Заблокировать бокс на закрытие
		unblock_box : function(box_id) {
			if (typeof api2_box.boxes[box_id] == 'undefined') {
				return false;
			}
			api2_box.boxes[box_id].blocked = false;
			return true;
		},

		//Показать загрузчик
		show_loader : function() {
			api2_box.box({
				html : '<img src="/templates/images/box/loader.png">',
				type : 'html',
				id : 'loader'
			});
		},
		
		close_loader : function() {
			api2_box.close_box('loader');
		},
		
		//Открыть изображение
		box_image : function(src, title) {
			api2_box.show_loader();
			//setTimeout(function() {
			$('<img src="'+src+'">').img_ready(function(width, height) {
				api2_box.close_loader();
				api2_box.box_image_sizes = [width, height];
				api2_box.window_resize_funcs.image_box_resize = api2_box.box_image_check_sizes;
				api2_box.box({
					html : '<div style="font-size:0px; padding:0 0 15px 0;"><img src="'+src+'" class="box_opened_image"></div>', 
					title : title,
					close_event : function() {
						api2_box.window_resize_funcs.image_box_resize = false;
					}
				});
				api2_box.box_image_check_sizes();
				
			});
			//}, 5000);
		},
		
		box_image_count_sizes : function(width, height, max_width, max_height) {
			if (max_width < 200) { max_width = 200; }
			if (max_height < 200) { max_height = 200; }
			var delitel1 = max_width / width;
			var delitel2 = max_height / height;
			if (width < max_width && height < max_height) {
				return [width, height];
			} else if (delitel1 < delitel2) {
				return [Math.round(width*delitel1), Math.round(height*delitel1)];
			} else {
				return [Math.round(width*delitel2), Math.round(height*delitel2)];
			}
		},
		
		box_image_check_sizes : function() {
			var sizes = api2_box.box_image_count_sizes(api2_box.box_image_sizes[0], api2_box.box_image_sizes[1], ($(window).width() - 100), ($(window).height() - 150));
			$('.box_opened_image').css({width:sizes[0], height:sizes[1]});
		},
		
		//Алерт
		alert : function(text, close_event) {
		
			api2_box.box({
				html : text, 
				title : 'Внимание!',
				close_event : close_event
			});
		},
		
		iframe : function(src, iwidth, iheight) {
		
			var boxid = api2_box.box({
				html : '<iframe src="'+src+'" width="'+iwidth+'" height="'+iheight+'" style="border: none;"></iframe>', 
				title : 'Просмотр',
				box_style : 'padding:20px 0;',
				resize_event : function() {
					if (iheight == '100%') {
						var height = $(window).height() - 140;
						if (height < 300) { height = 300; }
						setTimeout(function() {
							$('#table_'+boxid+' iframe').css({height:height});
						}, 0);
					}
				}
			});
			return false;
		}
	
	};


})(jQuery);