var api2_messages;

(function($) {

	api2_messages = {
	
		dialogs : {},
		dialogs_count : 0,
		now_focus_dialog_id : 0,
		setreaded_timeout : 0,
		block : false,
	
		//Открыть диалог
		open_dialog : function(reciever_id) {
		
			if (api2_messages.block == true || api2.is_auth == false || typeof api2_messages.dialogs[reciever_id] != 'undefined') {
				//return false;
			}
			api2_messages.block = true;
			
			//Создание нового диалога
			api2_messages.now_focus_dialog_id = reciever_id;
			api2_messages.dialogs[reciever_id] = {
				reciever_id : reciever_id,
				fmid : 0,
				ftmid : 0,
				box_id : '',
				reciever : {},
				block : false,
				queue : new Queue()
			};
			api2_messages.dialogs[reciever_id].queue.block_all();
			
			api2_box.show_loader();
			api2_messages.load_messages(function(status, data, rid) {
				api2_box.close_loader();
				if (status == 'OK') {
					//console.log(data);
					api2_messages.dialogs[reciever_id].fmid = data.fmid;
					api2_messages.dialogs[reciever_id].ftmid = data.ftmid;
					api2_messages.dialogs[reciever_id].reciever = data.reciever;
					var html = '<div id="opened_dialog_'+reciever_id+'" class="opened_dialog_container">\
					<div class="opened_dialog_messages">\
						<div class="opened_dialog_loadmore"><a href="javascript://" onclick="api2_messages.load_history_messages('+rid+');" class="ui_button">Показать еще</a></div>\
						<div class="opened_dialog_messages_c"></div>\
					</div>\
					<div class="opened_dialog_delete_all_wrap">\
						<a href="javascript:// "onclick="api2_messages.delete_dialog('+reciever_id+')">Удалить все сообщения</a>\
					</div>\
					<div class="clearboth"></div>\
					<div class="opened_dialog_textarea">\
						<div class="opened_dialog_textarea_title">Отправить сообщение</div>\
						<div class="opened_dialog_textarea_holder"><textarea data-placeholder="Введите текст сообщения" name="DATA[comment]" data-maxlength="1000" style="height:63px"></textarea></div>\
						<div class="opened_dialog_textarea_button"><a href="javascript://" class="ui_button">Отправить</a></div>\
					</div>';
					api2_messages.dialogs[reciever_id].box_id = api2_box.box({
						html : html, 
						title : '<span>Диалог с</span> '+api2_messages.dialogs[reciever_id].reciever.name,
						box_class : 'messages_box',
						resize_event : function() {
							var height = $(window).height() - 340;
							if (height < 200) { height = 200; }
							$('#opened_dialog_'+reciever_id+' .opened_dialog_messages').css({height:height});
						},
						close_event : function() {
							delete api2_messages.dialogs[reciever_id];
							api2_messages.now_focus_dialog_id = 0;
							var obj = {};
							obj[reciever_id] = false;
							api2_informer.add_informer_params('messages', {'out_read': obj});
							api2_messages.dialogs_count -= 1;
						}
					});
					api2_messages.dialogs_count += 1;
					$('#opened_dialog_'+reciever_id+' .opened_dialog_textarea_holder textarea').visual({obj_get: function(obj) {
						api2_messages.dialogs[reciever_id].textarea_obj = obj;
					}});
					api2_messages.dialogs[reciever_id].textarea_obj.focus();
					var messages_html = api2_messages.form_messages_html(data.list.reverse(), rid);
					$('#opened_dialog_'+reciever_id+' .opened_dialog_messages_c').append(messages_html);
					if (api2_messages.dialogs[reciever_id].ftmid == api2_messages.dialogs[reciever_id].fmid) {
						$('#opened_dialog_'+reciever_id+' .opened_dialog_loadmore').hide();
					}
					
					$('#opened_dialog_'+rid+' .opened_dialog_messages').scrollTop(0);
					api2_messages.dialog_scroll(rid, 'down');
					api2_messages.dialogs[reciever_id].queue.unblock_all();
					api2_messages.dialogs[reciever_id].queue.iterate_all();
					$('#opened_dialog_'+reciever_id+' .opened_dialog_textarea .ui_button').click(function() {
					
						//Отправка сообщения
						var text = $('#opened_dialog_'+reciever_id+' .opened_dialog_textarea_holder textarea').val();
						if (text.length < 2 || text.length > 1000) {
							api2_messages.dialogs[reciever_id].textarea_obj.add_class('red_border');
							api2_messages.dialogs[reciever_id].textarea_obj.focus();
							return false;
						} else {
							api2_messages.dialogs[reciever_id].textarea_obj.remove_class('red_border');
						}
					
						api2.check_captcha(false, function(need_captcha, checkcode) {
							api2_informer.send_informer_now('messages', {
								add_message : {
									text : text,
									to : reciever_id,
									checkcode : checkcode
								}
							}, function(result) {
								if (result == 'OK') {
									api2_messages.set_messages_readed(reciever_id);
								}
							});
							
							api2_messages.dialogs[reciever_id].textarea_obj.clear();
							api2_messages.dialogs[reciever_id].textarea_obj.focus();
						});
						
						return true;
					});
					
					//Присоединить к информеру запрос на чтение моих исходящих сообщений
					var obj = {};
					obj[reciever_id] = true;
					api2_informer.add_informer_params('messages', {'out_read': obj});
					
					//Отправить, что все прочитано
					api2_messages.send_messages_readed(reciever_id, 3000);
					
				}
				api2_messages.block = false;
			}, {reciever_id:reciever_id});
			
			return false;
		
		},
		
		//Загрузить сообщения
		load_messages : function(func, params) {
			params = $.extend({
				reciever_id : api2_messages.dialogs[api2_messages.now_focus_dialog_id].reciever_id,
				ftmid : api2_messages.dialogs[api2_messages.now_focus_dialog_id].ftmid,
				reciever_info : true
			}, params);
			
			var reciever_id = params.reciever_id;
			$.ajax({
				type: "GET",
				url: '/users/cabinet/messages/get_messages/',
				data: {
					reciever_id : params.reciever_id,
					ftmid : params.ftmid,
					reciever_info : params.reciever_info
				},
				timeout:10000,
				cache: false,
				success: function(data) {
					eval('var data = ' + data + ';');
					func('OK', data, reciever_id);
				},
				error: function() {
					func('ERROR');
				}
			});
		
		},
		
		//Сформировать код html сообщений
		form_messages_html : function(list, rid) {
			var html = '';
			$.each(list, function(i, msg) {
				var is_expert = false;
				if ((list[i].type=='0' && api2_messages.dialogs[rid].reciever.is_expert == '1') || (msg.type=='1' && api2.user.is_expert == '1')) { is_expert = true; }
				html += '<div id="dialog_message_'+msg.message_id+'" class="dialog_message '+(msg.type=='0' ? 'dialog_message_in' : 'dialog_message_out')+'">\
				<div class="dialog_message_author">\
					<a href="/clubmembers/view/'+(msg.type=='0' ? list[i].reciever_id : list[i].owner_id)+'/" class="dialog_message_author_img"><img src="'+(msg.type=='0' ? api2_messages.dialogs[rid].reciever.photo : api2.user.photo)+'"></a>\
					<a href="/clubmembers/view/'+(msg.type=='0' ? list[i].reciever_id : list[i].owner_id)+'/" class="dialog_message_author_title">\
						<span class="rank">'+(is_expert == false ? 'Участник клуба' : 'Эксперт')+'</span><br>\
						<span class="name">'+(msg.type=='0' ? api2_messages.dialogs[rid].reciever.name : api2.user.name)+'</span>\
					</a>\
					<div class="dialog_message_author_time">'+msg.time+'</div>\
					<div class="dialog_message_delete_link_wrap"><a href="javascript://" onclick="api2_messages.delete_message('+msg.id+' , '+msg.message_id+')">Удалить</a></div>\
					<div class="clearboth"></div>\
				</div>\
				<div class="dialog_message_text_c">\
					<div class="arrow '+(msg.readed=='0' ? 'unreaded' : 'readed')+'">&nbsp;</div>\
					<div class="dialog_message_text">'+msg.message+'</div>\
					<div class="clearboth"></div>\
				</div>\
				</div>';
			});
			return html;
		},
		
		//Опустить окно диалога вниз
		dialog_scroll : function(rid, mode) {
			if (typeof mode == 'undefined') { mode = 'down'; }
			if (mode == 'down') {
				$('#opened_dialog_'+rid+' .opened_dialog_messages').animate({'scrollTop':$('#opened_dialog_'+rid+' .opened_dialog_messages')[0].scrollHeight}, 500);
			}
		},
		
		//Подгрузить историю
		load_history_messages : function(rid) {
			if (typeof api2_messages.dialogs[rid] == 'undefined' || api2_messages.dialogs[rid].block == true) { return false; }
			if (api2_messages.dialogs[rid].ftmid == api2_messages.dialogs[rid].fmid) { return false; }
			api2_messages.dialogs[rid].block = true;
			api2_messages.load_messages(function(status, data, rid) {
				if (typeof api2_messages.dialogs[rid] == 'undefined') { return false; }
				if (status == 'OK') {
					api2_messages.dialogs[rid].ftmid = data.ftmid;
					var messages_html = api2_messages.form_messages_html(data.list.reverse(), rid);
					$('#opened_dialog_'+rid+' .opened_dialog_messages_c').prepend(messages_html);
				}
				api2_messages.dialogs[rid].block = false;
				if (api2_messages.dialogs[rid].ftmid == api2_messages.dialogs[rid].fmid) {
					$('#opened_dialog_'+rid+' .opened_dialog_loadmore').hide();
				}
			}, {
				reciever_id : rid,
				reciever_info : false,
				ftmid : api2_messages.dialogs[rid].ftmid
			});
		},
		
		//Все сообщения прочитаны
		send_messages_readed : function(rid, timeout, func) {
			clearTimeout(api2_messages.setreaded_timeout);
			api2_messages.setreaded_timeout = setTimeout(function() {
				api2_messages.set_messages_readed(rid);
				$.ajax({
					type: "GET",
					url: '/users/cabinet/messages/messages_readed/',
					data: {
						reciever_id : rid
					},
					timeout:10000,
					cache: false,
					success: function(data) {
						eval('var data = ' + data + ';');
						api2_messages.update_counter(data.counter);
						if (typeof func != 'undefined') {
							func('OK');
						}
					},
					error: function() {
						if (typeof func != 'undefined') {
							func('OK');
						}
					}
				});
			}, timeout);
		},
		set_messages_readed : function(rid) {
			$('#opened_dialog_'+rid+' .dialog_message_in .arrow.unreaded').removeClass('unreaded').addClass('readed');
		},
		
		//Вставить сообщение в открытое окно
		insert_message : function(data) {
			var messages_html = api2_messages.form_messages_html([data], data.reciever_id);
			$('#opened_dialog_'+data.reciever_id+' .opened_dialog_messages_c').append(messages_html);
		},
		
		//Обработка поступающих сообщений
		new_loaded_exec : function(data, from_storage) {
			
			if (typeof api2_messages.dialogs[data.reciever_id] != 'undefined') {
			
				api2_messages.dialogs[data.reciever_id].queue.add(function() {
					api2_messages.insert_message(data);
					api2_messages.dialog_scroll(data.reciever_id, 'down');
					api2_messages.dialogs[data.reciever_id].queue.unblock(true);
				});
				api2_messages.dialogs[data.reciever_id].queue.iterate(true);
				if (data.type == 0) {
					api2_messages.send_messages_readed(data.reciever_id, 3000);
				}
				
				if (data.reciever_id != api2_messages.now_focus_dialog_id) {
					//alert('Есть, но не в фокусе');
				}
			} else {
			
				if (data.type == '0') {
					var box = $('<div class="message_box_c" data-reciever-id="'+data.reciever_id+'"></div>');
					box.html('<div class="message_box_left"><img src="'+data.reciever_photo+'"></div><div class="message_box_right">'+data.message+'</div><div class="clearboth"></div>');
					box.click(function() {
						var rid = $(this).attr('data-reciever-id');
						if (api2_messages.dialogs_count > 0) {
							window.open('/users/cabinet/messages/', '_blank');
						} else {
							api2_messages.open_dialog(rid);
						}
						api2_informer.close_box($(this).closest('.show_box').attr('data-box-id'));
					});
					api2_informer.show_box(box, 'Вам пришло новое сообщение');
				}
			}
		},
		
		//Обработка партии новых
		all_new_loaded_exec : function(data, have_new, from_storage) {
		
			if (typeof data.extra != 'undefined') {
				api2_messages.update_counter(data.extra.counter);
				
				if (typeof data.extra.out_read != 'undefined') {
					$.each(data.extra.out_read, function(reciever_id, v) {
						if (typeof api2_messages.dialogs[reciever_id] != 'undefined' && v == 0) {
							$('#opened_dialog_'+reciever_id+' .dialog_message_out .arrow.unreaded').removeClass('unreaded').addClass('readed');
						}
					});
				}
			}
		},
		
		//Обновить счетчик новых сообщений
		update_counter : function(value) {
			$('.unread_messages_counter .header_p_i_text').html(value);
			if (value > 0) {
				$('.unread_messages_counter .header_p_i_text').addClass('header_p_i_red');
			} else {
				$('.unread_messages_counter .header_p_i_text').removeClass('header_p_i_red');
			}
			
		},
		
		
		delete_message : function(msg_id , text_message_id) {
			if(confirm('Вы действительно хотите удалить это сообщение?')){
				$.ajax({
					url: '/users/cabinet/messages/delete_message/',
					type: 'get',
					data: {
						msg_id: msg_id
					},
					success: function(data) {
						console.log(data);
						if(data == 'success'){
							$('#dialog_message_'+text_message_id).html('<div class="dialog_message_deleted">Сообщение удалено</div>');
						}
					}
				});
			}
		},
		
		delete_dialog : function(reciever_id){
			if(confirm('Вы действительно хотите удалить все сообщения из этого диалога?')){
				window.location.replace("/users/cabinet/messages/delete_dialog/?reciever_id="+reciever_id);
			}
		}
	
	};

	$(document).ready(function() {
	
		
	});

})(jQuery);