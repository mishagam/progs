
var api2;

(function($) {

api2 = {

	is_auth : false,
	user : {},
	localStorage : false,
	settings : {},
	captcha_func : function(){},

	//Инициализировать
	init : function() {
		api2.is_mobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		api2.customize_all();
		api2.url = document.location.pathname + document.location.search;
		if (supportsStorage() != false) {
			api2.localStorage = localStorage;
		}
		if ($.browser.msie || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			$('body').addClass('ie');
		}
		if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			$('body').addClass('ie11');
		}
		if ($.browser.msie) {
			$('body').addClass('ie'+parseInt($.browser.version));
		}
	},
	
	//Инициализировать пользователя
	init_authuser : function(user) {
		api2.user = user;
		api2.is_auth = true;
	},
	
	//Обновить настройки
	set_settings : function(settings) {
		api2.settings = $.extend(api2.settings, settings);
	},

	//Перекастомизировать всё
	customize_all : function() {
		$('select.ui_select').make_select();
		$('input.ui_input_text').make_input_text();
		$('input.ui_input_checkbox').make_input_checkbox();
		$('input.ui_input_radio').make_input_radio();
		$('textarea.ui_textarea').make_textarea();
		$('input.ui_input_file').make_input_file();
		$('input[placeholder], textarea[placeholder]').placeholder();
	},
	
	close_hash : function() {
		if (history.pushState) {
			history.pushState('', document.title, window.location.pathname);
		} else {
			window.location.hash = '#none';
		}
	},
	
	//Слова
	words : {
		ajax_error : 'Ошибка соединения с сервером. Попробуйте еще раз.'
	},
	
	//Проверить нужно ли вводить капчу
	check_captcha : function(use_block, func) {
		api2.captcha_func = func;
		$.ajax({
			type: "GET",
			url: '/ajax/',
			data: {'mode' : 'check_captcha'},
			timeout:10000,
			cache: false,
			success: function(data) {
				eval('var data = ' + data + ';');
				if (data.code == 1) {
					if (use_block == true) {
						api2_events.block_off();
					}
					api2_events.show_captcha_form();
				} else {
					api2.captcha_func(false, '');
				}
			},
			error: function() {
				if (use_block == true) {
					api2_events.block_off();
				}
				api2_box.alert(api2.words.ajax_error);
			}
		});
	}

};

$(document).ready(function() {

	api2.init();
});

})(jQuery);