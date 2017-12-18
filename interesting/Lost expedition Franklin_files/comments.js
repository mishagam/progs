/* Комментарии */

$(function(){

	$.fn.init_comments = function(settings) {

		var comments = this;
		$(comments).data('obj', comments);
		comments.settings = $.extend({
			'item_id':'0',
			'sub_object_id':'0'
		}, settings);
		comments.block = false;
		comments.now_answer_parent = 0;
		
		//Инициализировать
		comments.init = function() {
		
			$(comments).find('.comment_form textarea').visual({});
			
			$(comments).find('.comment_one .comment_one_likes a').click(function() {
				var item = this;
				var item_c = $(item).closest('.comment_one_likes');
				if ($(item_c).hasClass('comment_one_likes_voted') == false && $(item_c).hasClass('comment_one_likes_blocked') == false) {
					$(item_c).addClass('comment_one_likes_blocked');
					$.ajax({
						type: "GET",
						url: '/comments/ajax/',
						data: {'mode' : 'likes', 'oid' : $(item).closest('.comment_one').attr('data-commentid'), 'do' : $(item).attr('data-type')},
						timeout:5000,
						success: function(data) {
							if (data != 'error') {
								$(item_c).addClass('comment_one_likes_voted');
								$(item_c).find('.comment_one_like').html(data);
								var counter = parseInt(data);
								if (counter >= 0) {
									$(item_c).find('.comment_one_like').removeClass('comment_one_like_red');
								} else {
									$(item_c).find('.comment_one_like').addClass('comment_one_like_red');
								}
							}
							$(item_c).removeClass('comment_one_likes_blocked');
						},
						error: function() {
							$(item_c).removeClass('comment_one_likes_blocked');
						}
					});
				}
			
			});
			
			$(comments).find('.comment_one a.comment_one_report_link').click(
				function(e){
					var comment_id = $(this).closest('.comment_one').attr('data-commentid');
					api2_box.box({
						html: '<div class="comments_report_form_wrap" style="width: 300px;">\
								<form id="comments_post_report" method="post" action="/comments/report/'+comment_id+'/">\
									<span id="comments_report_reason_word">Причина:</span><br>\
									<div class="comments_report_form_select_wrap">\
									<div class="comments_report_radio_one">\
									<div class="comments_report_left">\
									<input name="DATA[report_reason]" type="radio" value="0" id="report_radio_0" class="ui_input_radio">\
									</div><div class="comments_report_right"><label for="report_radio_0">Оскорбительное поведение</label></div>\
									<div class="clearboth"></div>\
									</div>\
									<div class="comments_report_radio_one">\
									<div class="comments_report_left">\
									<input name="DATA[report_reason]" type="radio" value="1" id="report_radio_1" class="ui_input_radio"></div>\
									<div class="comments_report_right"><label for="report_radio_1">Нецензурная лексика</label></div>\
									<div class="clearboth"></div>\
									</div>\
									<div class="comments_report_radio_one">\
									<div class="comments_report_left">\
									<input name="DATA[report_reason]" type="radio" value="2" id="report_radio_2" class="ui_input_radio"></div>\
									<div class="comments_report_right"><label for="report_radio_2">Спам</label></div>\
									<div class="clearboth"></div>\
									</div>\
									</div>\
									<input type="submit" value="Пожаловаться" class="ui_button">\
								</form>\
						</div>',
						title : 'Пожаловаться'
					});
					api2.customize_all();
					
					$('#comments_post_report').submit(
						function(e){
							e.preventDefault();
							comments.report_form = this;
							api2.check_captcha(false, function(need_captcha, checkcode) {
								if($('#comments_post_report input:checked').length < 1){
									$('#comments_report_reason_word').box_element_blink_red();
									return false;
								}
								var data = {
									'DATA[report_reason]': $('#comments_post_report input[name="DATA[report_reason]"]:checked').val(),
									'checkcode': checkcode
									
								};
								$.post($(comments.report_form).attr('action') , data ,  function(result){
									if(result.status == 1){
										$('.comments_report_form_wrap').html(
											'Спасибо, мы рассмотрим вашу жалобу в ближайшее время.'
										);
									}
									else{
										switch(result.error){
											case 'notauth':
											$('.comments_report_form_wrap').html(
												'Ошибка авторизации.'
											);
											break;
											
											case 'notexist':
											$('.comments_report_form_wrap').html(
												'Такого комментария не существует.'
											);
											break;
											
											case 'wrongreason':
											$('.comments_report_form_wrap').html(
												'Такой прричины не существует.'
											);
											break;
											
											case 'alreadyreported':
											$('.comments_report_form_wrap').html(
												'Вы уже оставляли жалобу на данный коментарий.'
											);
											break;
										}
									}
								},'json');
								
							});
						}
					);
					
				}
			);
			
			$(comments).find('.comment_form .ui_button').click(function() {
				comments.try_send_message($(comments).find('.comment_form'));
			});
			
			$(comments).find('.comment_answer').click(function() {
				comments.show_answer_form($(this).closest('.comment_one').attr('data-commentid'));
			});
			
			$(comments).find('.comment_delete').click(function() {
				comments.try_delete($(this).closest('.comment_one').attr('data-commentid'));
			});
		
		};
		
		//Ответить
		
		comments.show_answer_form = function(parent_id) {
			if (comments.now_answer_parent == parent_id) {
				comments.now_answer_parent = 0;
				$(comments).find('.comment_form_answer').remove();
				return false;
			}
			comments.now_answer_parent = parent_id;
			$(comments).find('.comment_form_answer').remove();
			var form = $(comments).find('.comment_form_for_answer').clone();
			$(form).removeClass('comment_form_for_answer').addClass('comment_form_answer');
			$(form).find('textarea').visual({});
			$('.comment_one[data-commentid='+parent_id+']').append(form);
			$(form).find('textarea').data('obj').focus();
			$(form).attr('data-parentid', parent_id);
			$(form).find('.ui_button').click(function() {
				comments.try_send_message(form);
			});
		};
		
		//Отправить сообщение
		comments.try_send_message = function(form) {
		
			if (comments.block == true) {
				return false;
			}
			comments.block = true;
			var text = $(form).find('textarea').val();
			var parent_id = parseInt($(form).attr('data-parentid'));
			var maxlength = parseInt($(form).find('textarea').attr('data-maxlength'));
			if (text.length < 2 || text.length > maxlength) {
				$(form).find('.div_disign_mode_containter').addClass('red_border');
				comments.block = false;
			} else {
				$(form).find('.div_disign_mode_containter').removeClass('red_border');
				comments.send_message(text, parent_id);
			}
		};
		
		comments.send_message = function(text, parent_id) {

			api2.check_captcha(false, function(need_captcha, checkcode) {
				$.ajax({
					type: "POST",
					url: '/comments/ajax/?mode=add',
					data: {'item_id' : comments.settings.item_id, 'sub_object_id' : comments.settings.sub_object_id, 'parent_id' : parent_id, 'text' : text, 'checkcode' : checkcode},
					timeout:5000,
					success: function(data) {
						if (data != 'error') {
							window.location.hash = '#comment_'+data;
							document.location.reload();
						}
						comments.block = false;
					},
					error: function() {
						comments.block = false;
					}
				});
			});
			
		};
		
		//Удалить комментарий
		
		comments.try_delete = function(comment_id) {
		
			if (confirm('Вы уверены, что хотите удалить комментарий?')) {
				$.ajax({
					type: "POST",
					url: '/comments/ajax/?mode=delete',
					data: {'item_id' : comment_id},
					timeout:5000,
					success: function(data) {
						if (data != 'error') {
							document.location.reload();
						}
					},
					error: function() {

					}
				});
			}
		};
		
		comments.init();
	
	};

});