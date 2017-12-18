var api2_informer;

(function($) {
	
	api2_informer = {
		
		is_init : false,
		timeout : 5000,
		timeout_id : 0,
		storageChanged : false,
		informers : {},
	
		//Первичная инициализация
		first_init : function() {
		
			//Инициализация работы с хранилищем
			if (api2.localStorage != false) {
				api2_informer.storageChanged = function(e) {
					if (e.key == 'informer_data') {
						if (api2_informer.is_init == false) {
							return false;
						}
						api2_informer.queue.add(function() {
							api2_informer.engine_work(JSON.parse(e.newValue), true);
						});
						api2_informer.queue.iterate(true);
					} else if (e.key == 'informer_informers_data') {
						//alert(e.newValue);
					}
				};
				if (window.addEventListener){
					window.addEventListener('storage', api2_informer.storageChanged, false);
				} else {
					window.attachEvent('onstorage', api2_informer.storageChanged);
				}
			}
		},
	
		//Инициализация
		init : function() {
			if (api2_informer.is_init == true) { return false; }
			api2_informer.queue = new Queue();
			api2_informer.loader_queue = new Queue();
			
			api2_informer.is_init = true;
			api2_informer.engine_loader();
			
		},
		
		//Движок загрузчик
		engine_loader : function(extra_data, post_func) {
		
			api2_informer.loader_queue.add(function() {
			
				clearTimeout(api2_informer.timeout_id);
				if (typeof extra_data == 'undefined') { extra_data = {}; }
				var objects = {};
				for (var i in api2_informer.informers) {
					objects[i] = {
						last_id : api2_informer.informers[i].last_id,
						extra : api2_informer.informers[i].extra_params
					};
					if (typeof extra_data[i] != 'undefined') {
						objects[i] = $.extend(objects[i], extra_data[i]);
					}
				}
				$.ajax({
					type: "POST",
					url: '/users/ajax/?mode=informer',
					data: {
						objects : objects
					},
					timeout:10000,
					cache: false,
					success: function(data) {
						api2_informer.engine_distrib(data);
						if (typeof post_func != 'undefined') { post_func('OK'); }
						api2_informer.timeout_id = setTimeout(function() {
							api2_informer.engine_loader();
						}, api2_informer.timeout);
						api2_informer.loader_queue.unblock(true);
					},
					error: function() {
						if (typeof post_func != 'undefined') { post_func('ERROR'); }
						api2_informer.timeout_id = setTimeout(function() {
							api2_informer.engine_loader();
						}, api2_informer.timeout);
						api2_informer.loader_queue.unblock(true);
					}
				});
			
			});
			api2_informer.loader_queue.iterate(true);
		},
		
		//Движок распределения
		engine_distrib : function(data) {
		
			eval('var data = ' + data + ';');
			data.rand = Math.random();
			
			//Отправить всем окнам
			if (api2.localStorage != false) {
				api2.localStorage.setItem('informer_data', JSON.stringify(data));
			}
			
			api2_informer.queue.add(function() {
				api2_informer.engine_work(data, false);
			});
			api2_informer.queue.iterate(true);
		
		},
		
		//Движок обработки
		engine_work : function(data, from_storage) {
		
			delete data.rand;
			data.strg = from_storage;
			//Не авторизован
			if (data.error == 1) {
				document.location.reload();
				return false;
			}
	
			for (var id in data.objects) {
				if (typeof api2_informer.informers[id] != 'undefined') {
					var have_new = false;
					$.each(data.objects[id].list, function(i, v) {
						var vid = parseInt(v.id);
						if (inArray(vid, api2_informer.informers[id].local_execed) == false) {
							api2_informer.informers[id].local_execed.push(vid);
							if (vid > api2_informer.informers[id].last_id) {
								api2_informer.informers[id].last_id = vid;
							}
							api2_informer.informers[id].func_exec(v, from_storage);
							have_new = true;
						}
					});
					api2_informer.informers[id].func_all_exec(data.objects[id], have_new, from_storage);
				}
			}
			//console.log(JSON.stringify(data));
			
			api2_informer.queue.unblock(true);
			return true;
		},
		
		//Регистрация информеров
		register_informer : function(id, params) {
		
			if (typeof api2_informer.informers[id] != 'undefined') {
				return false;
			}
			var default_params = {
				last_id : 0,
				local_execed : [],
				extra_params : {},
				func_exec : function(){},
				func_all_exec : function(){}
			};
			api2_informer.informers[id] = $.extend(default_params, params);
			//console.log(api2_informer.informers[id]);
			
			return true;
		},
		
		//Отправить информер прямо сейчас с дополнительными параметрами
		send_informer_now : function(id, params, post_func) {
			clearTimeout(api2_informer.timeout_id);
			var obj = {};
			obj[id] = params;
			api2_informer.engine_loader(obj, post_func);
		},
		
		//Отправить информер прямо сейчас с дополнительными параметрами
		add_informer_params : function(id, params) {
			api2_informer.informers[id].extra_params = $.extend(api2_informer.informers[id].extra_params, params);
		},
		
		/* Вывод всплывающих окон */
		show_boxes_count : 0,
		show_boxes_opened_count : 0,
		
		show_box : function(box, title) {
			if (api2_informer.show_boxes_opened_count == 3) {
				api2_informer.close_box($('body .show_box').first().attr('data-box-id'));
			}
			api2_informer.show_boxes_count += 1;
			api2_informer.show_boxes_opened_count += 1;
			var htm_box = $('<div></div>');
			htm_box.html('<div class="show_box" id="show_box_'+api2_informer.show_boxes_count+'" data-box-id="'+api2_informer.show_boxes_count+'"><table class="show_box_top" cellspacing="0"><tr><td class="show_box_title">'+title+'</td><td class="show_box_close"><a href="javascript://" onclick="api2_informer.close_box('+api2_informer.show_boxes_count+');" title="Закрыть"><img src="/templates/images/box/close.png"></a></td></tr></table><table cellspacing="0" class="show_box_table"><tr><td class="show_box_table_td"></td></tr></table></div');
			htm_box = htm_box.find('.show_box');
			htm_box.find('.show_box_table_td').append(box);
			if ($('body .show_box').length > 0) {
				var last_top = $(window).height() - $('body .show_box').last().position().top;
				$(htm_box).css({bottom:(last_top + 20)});
			}
			$('body').append(htm_box);
			return true;
		},
		
		close_box : function(id) {
			api2_informer.show_boxes_opened_count -= 1;
			$('#show_box_'+id).remove();
			if (api2_informer.show_boxes_opened_count > 0) {
				$('body .show_box').each(function(index) {
					if (index == 0) {
						$(this).css({bottom:20});
					} else {
						var last_top = $(window).height() - $(this).prev('.show_box').position().top;
						$(this).css({bottom:(last_top + 20)});
					}
				});
			}
		},
		
		//Уведомления
		new_nofs_loaded_exec : function(data, from_storage) {
		
		}
	
	};

	$(document).ready(function() {
		api2_informer.first_init();
		setTimeout(function() {
			if (api2.is_auth == true) {
				api2_informer.init();
			}
		}, 5);
		
	});

})(jQuery);