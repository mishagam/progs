(function($) {

//Селект
$.fn.make_select = function() {
	return this.each(function() {

		//Cоздание визуальной части
		var style = '';
		var classN = 'ui_select_c';
		if (typeof $(this).attr('style') != 'undefined') {
			style = $(this).attr('style');
			$(this).removeAttr('style');
		}
		if (typeof $(this).attr('class') != 'undefined') {
			$(this).removeClass('ui_select');
		}
		var select = $('<div class="'+classN+'" style="'+style+'"><div class="ui_select_hide"></div><div class="ui_select_visible"><a class="ui_select_link"><div class="ui_select_table"><div class="right">&nbsp;</div><div class="left">&nbsp;</div><div class="clearboth"></div></div></a><div class="ui_select_options_c"><div class="ui_select_options"></div></div></div></div>');
		var r_select = $(this).clone();
		$(select).find('.ui_select_hide').append(r_select);
		$(this).replaceWith(select);
		//$(select).find('.ui_select_hide').append($(this).clone());
		//$(this).replaceWith(select);
		$(select).find('.ui_select_link').click(function() {
			if ($(select).find('.ui_select_options').is(':visible') == true) {
				select.hide_options();
			} else {
				select.show_options();
			}
		});
		$(select).bind('clickoutside', function(event){
			if (select.open == true) {
				if ($(event.target).closest(".ui_select").length == 0) {
					select.hide_options();
				}
			}
		});

		//Параметры
		select.max = 10;
		select.open = false;


		//Создаём options
		select.options = {};
		$(select).find('.ui_select_hide option').each(function(){
			select.options[$(this).index()] = {'value':$(this).val(), 'text':$(this).text()};
		});
		select.selected = 0;
		if ($.len(select.options) > 0) {
			select.selected = $(select).find('.ui_select_hide option:selected').index();
		}
		for (var i in select.options) {
			$(select).find('.ui_select_options').append('<a class="ui_select_option">'+select.options[i].text+'</a>');
		}
		$(select).find('.ui_select_option').click(function() {
			select.select($(this).index(), true);
		});
		$(select).find('.ui_select_option').mouseover(function() {
			$(select).find('.ui_select_option').removeClass('selected');
			$(this).addClass('selected');
		});

		
		//Функции
		select.select = function(i, is_events) {
			select.selected = i;
			$(select).find('select option:nth-child('+(select.selected+1)+')').attr('selected', 'selected');
			$(select).find('.ui_select_table .left').html(select.options[select.selected].text);
			$(select).find('.ui_select_options').hide();
			if (is_events == true) {
				$(select).find('select').each(select.on_change);
			}
			$(select).find('.ui_select_option').removeClass('selected');
			$(select).find('.ui_select_option:nth-child('+(select.selected+1)+')').addClass('selected');
		};
		select.on_change = function() {
			if (typeof $(this).attr('onchange') != 'undefined') {
				eval($(this).attr('onchange'));
			} else {
				$(r_select).trigger('change');
			}
		};
		select.show_options = function() {
			$(select).find('.ui_select_option').removeClass('selected');
			$(select).find('.ui_select_option:nth-child('+(select.selected+1)+')').addClass('selected');
			var scroll = 0;
			if ($.len(select.options) > select.max) {
				var one_height = $(select).find('.ui_select_option:first').outerHeight();
				var height = select.max * one_height;
				scroll = $(select).find('.ui_select_option:nth-child('+(select.selected+1)+')').index() * one_height;
				$(select).find('.ui_select_options').css({height:height});
			}
			var d_w = $(document).height();
			$(select).find('.ui_select_options').show();
			var all_height = $(select).offset().top + $(select).outerHeight() + $(select).find('.ui_select_options').outerHeight();
			if (all_height > d_w) {
				var top = $(select).outerHeight() + $(select).find('.ui_select_options').outerHeight();
				$(select).find('.ui_select_options').css('top', (0-top));
			}
			$(select).find('.ui_select_options').scrollTop(scroll);
			select.open = true;
		};
		select.hide_options = function() {
			$(select).find('.ui_select_options').hide();
			select.open = false;
		};


		//Инициализация
		if ($.len(select.options) > 0) {
			select.select(select.selected, false);
		}
	});
};





//Текстовый инпут
$.fn.make_input_text = function() {
	return this.each(function() {

		var style = '';
		var classN = 'ui_input_text';
		if (typeof $(this).attr('style') != 'undefined') {
			style = $(this).attr('style');
			$(this).removeAttr('style');
		}
		if (typeof $(this).attr('class') != 'undefined') {
			$(this).removeClass('ui_input_text');
		}
		if (typeof $(this).attr('data-class') != 'undefined') {
			classN += ' ' + $(this).attr('data-class');
		}
		$(this).addClass('ui_clear');
		var input = $('<div class="'+classN+'" style="'+style+'"></div>');
		$(input).append($(this).clone());
		$(this).replaceWith(input);

	});
};

//Текстария
$.fn.make_textarea = function(f) {
	return this.each(function() {

		if (typeof $(this).attr('class') != 'undefined') {
			$(this).removeClass('ui_textarea');
		}
		$(this).addClass('ui_clear');
		var input = $('<div class="ui_textarea"></div>');
		var that = $(this).clone();
		$(that).val('');
		$(that).val($(this).val());
		if (that.val().length == 0) {
			that.val('');
		}
		$(input).append(that);
		$(this).replaceWith(input);
		if (typeof f != 'undefined') {
			f(input);
		}
	});
};


//Чекбокс
$.fn.make_input_checkbox = function(){
	return this.each(function() {
	
		var style = '';
		var classN = 'ui_input_checkbox';
		if (typeof $(this).attr('style') != 'undefined') {
			style = $(this).attr('style');
			$(this).removeAttr('style');
		}
		if (typeof $(this).attr('class') != 'undefined') {
			$(this).removeClass('ui_input_checkbox');
		}
		$(this).addClass('ui_clear').css('visibility', 'hidden');
		var checkbox = $('<div class="'+classN+'" style="'+style+'"></div>');
		var checkbox_i = $(this).clone();
		$(checkbox).append(checkbox_i);
		$(this).replaceWith(checkbox);
		if ($(checkbox).find('input:checked').length > 0) {
				$(checkbox).addClass('checked');
		}
		$(checkbox).click(function(event) {
			if ($(event.target).find('input').is('[readonly]')) {
				return false;
			}
			if ($(event.target).find('input:checked').length > 0) {
				$(event.target).find('input').removeAttr('checked');
				$(event.target).removeClass('checked');
			} else {
				$(event.target).find('input').attr('checked', 'true');
				$(event.target).addClass('checked');
			}
			$(event.target).find('input').trigger('change');
			$(checkbox_i).trigger('select');
		});
		$(checkbox_i)[0].changer = function(r) {
			if (r == true) {
				$(checkbox_i).attr('checked', 'true');
				$(checkbox_i).parent().addClass('checked');
			} else {
				$(checkbox_i).removeAttr('checked');
				$(checkbox_i).parent().removeClass('checked');
			}
			$(checkbox_i).trigger('select');
		};
		if (typeof $(checkbox_i).attr('id') != 'undefined') {
			$('label[for="'+$(checkbox_i).attr('id')+'"]').click(function(event) {
				$('input[id="'+$(event.target).attr('for')+'"]').parent().trigger('click');
				return false;
			});
		}
	});
}

//Радиокнопка
$.fn.make_input_radio = function(){
	return this.each(function() {
	
		var style = '';
		var classN = 'ui_input_radio';
		if (typeof $(this).attr('style') != 'undefined') {
			style = $(this).attr('style');
			$(this).removeAttr('style');
		}
		if (typeof $(this).attr('class') != 'undefined') {
			$(this).removeClass('ui_input_radio');
		}
		$(this).addClass('ui_clear').css('visibility', 'hidden');
		var checkbox = $('<div class="'+classN+'" style="'+style+'"></div>');
		var radio = $(this).clone();
		$(checkbox).append(radio);
		$(this).replaceWith(checkbox);
		if ($(checkbox).find('input:checked').length > 0) {
				$(checkbox).css('background-position', '0px -14px');
		}
		$(checkbox).click(function(event) {
			$('input[name="'+$(event.target).find('input').attr('name')+'"]').removeAttr('checked');
			$(event.target).find('input').attr('checked', 'true');
			$(event.target).css('background-position', '0px -14px');
			$('input[name="'+$(event.target).find('input').attr('name')+'"]').trigger('change');
			$(radio).trigger('select');
		});
		if (typeof $(radio).attr('id') != 'undefined') {
			$('label[for="'+$(radio).attr('id')+'"]').click(function(event) {
				$('input[id="'+$(event.target).attr('for')+'"]').parent().trigger('click');
				return false;
			});
		}
		$(radio).change(function(event){
			if ($(event.target).is(':checked') == true) {
				$(checkbox).css('background-position', '0px -14px');
			} else {
				$(checkbox).css('background-position', '0px 0px');
			}
		});
	});
}

//Файл
$.fn.make_input_file = function() {
	return this.each(function() {

		var style = '';
		var classN = 'ui_input_file';
		if (typeof $(this).attr('style') != 'undefined') {
			style = $(this).attr('style');
			$(this).removeAttr('style');
		}
		if (typeof $(this).attr('class') != 'undefined') {
			$(this).removeClass('ui_input_file');
		}
		if (typeof $(this).attr('data-class') != 'undefined') {
			classN += ' ' + $(this).attr('data-class');
		}
		var input = $('<div class="'+classN+'" style="'+style+'"></div>');
		$(input).append($(this).clone());
		$(this).replaceWith(input);

	});
};

})(jQuery);