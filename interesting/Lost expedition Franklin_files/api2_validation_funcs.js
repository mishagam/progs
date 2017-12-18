
(function($) {

//Общие функции валидации

	//Добавить событие на любое изменение инпута
	$.fn.add_input_edit_event = function(f) {
		return this.each(function() {

			if (typeof this.event_paste == 'undefined') {
				this.event_paste = {};
				this.event_change = {};
			}
			var i = $.len(this.event_paste);
			this.event_paste[i] = function (e) {
  				setTimeout(function () {
					f(this, i, e);
  				}, 100);
			}
			this.event_change[i] = function (e) {
				f(this, i, e);
			}
			$(this).bind('paste', this.event_paste[i]);
			$(this).bind('change keyup keydown', this.event_change[i]);

		});
	};

	//Удалить событие на любое изменение инпута
	$.fn.remove_input_edit_event = function(i) {
		return this.each(function() {
			$(this).unbind('paste', this.event_paste[i]);
			$(this).unbind('change keyup', this.event_change[i]);
			this.event_paste[i] = false;
			this.event_change[i] = false;
		});
	};

//Валидация для бокса

	//Отобразить ошибку поля
	$.fn.box_field_show_error = function(text) {
		return this.each(function() {
			if ($(this).closest('.field_error_holder').hasClass('field_error_holder_errored') == false) {
				$(this).closest('.field_error_holder').addClass('field_error_holder_errored').append('<div class="field_error">'+text+'</div>');
				$(this).add_input_edit_event(function(input, i) {
					$(input).closest('.field_error_holder').removeClass('field_error_holder_errored').find('.field_error').remove();
					$(input).remove_input_edit_event(i);
				});
			}
		});
	};
	
	//Подсветить поле
	$.fn.make_text_error = function(r) {
		return this.each(function() {
			var p = $(this).closest('.ui_input_text, .ui_select_c, .ui_textarea');
			if (r == true) {
				$(p).addClass('red_border');
				$(p).one('click', function() {
					$(p).removeClass('red_border');
				});
			} else {
				$(p).removeClass('red_border');
			}
		});
	};
	
	//Мигнуть красным
	$.fn.box_field_blink_red = function() {
		return this.each(function() {
			var t = 300;
			var input = this;
			var c = 0;
			var c_all = 5;
			var blink_red = function() {
				if (c > c_all) {
					return false;
				}
				if (c % 2 == 0) {
					$(input).closest('.ui_input_text, .ui_textarea, .ui_input_file').addClass('red_border');
				} else {
					$(input).closest('.ui_input_text, .ui_textarea, .ui_input_file').removeClass('red_border');
				}
				c += 1;
				setTimeout(blink_red, t);
			};
			blink_red();
		});
	};
	
	$.fn.box_element_blink_red = function() {
		return this.each(function() {
			var t = 300;
			var input = this;
			var c = 0;
			var c_all = 5;
			var blink_red = function() {
				if (c > c_all) {
					return false;
				}
				if (c % 2 == 0) {
					$(input).addClass('red_color');
				} else {
					$(input).removeClass('red_color');
				}
				c += 1;
				setTimeout(blink_red, t);
			};
			blink_red();
		});
	};
	
	//Стандартное поведение формы отправки
	$.fn.standart_form = function(ftext) {
		return this.each(function() {
			var that = this;
			$(that).submit(function(e){
				e.preventDefault();
				if (api2_events.block == true) {
					return false;
				}
				var error = false;
				$(that).find('.required').each(function() {
					if ($(this).val().length < 1) {
						error = true;
						$(this).make_text_error(true);
					} else {
						$(this).make_text_error(false);
					}
				});
				if (error == false) {
					api2_events.block_on();
					api2.check_captcha(true, function(need_captcha, checkcode) {
						url = $(that).attr('action');
						data = $(that).serialize();
						data += '&checkcode='+checkcode;
						$.ajax({
							type: "POST",
							url: url,
							data: data,
							timeout:10000,
							cache: false,
							success: function(data) {
								eval('var data = ' + data + ';');
								if (data.error == 0) {
									api2_box.box({
										html : ftext, 
										title : 'Форма отправлена',
										close_event : function() {
											document.location.reload();
										}
									});
								} else {
									api2_events.block_off();
								}
							},
							error: function() {
								api2_box.alert(api2.words.ajax_error);
								api2_events.block_off();
							}
						});
					});
				}
			});
		});
	};
	
	
		//Заблокировать форму
	$.fn.block_form = function() {
		return this.each(function() {
			$(this).find('input[type=text], input[type=password], input[type=file], input[type=checkbox], textarea').attr('readonly', 'true');
			
		});
	};
	
	$.fn.unblock_form = function() {
		return this.each(function() {
			$(this).find('input[type=text], input[type=password], input[type=file], input[type=checkbox], textarea').removeAttr('readonly');
			
		});
	};

})(jQuery);