var api2_events;

(function($) {

	api2_events = {
	
		block : false,
		
		block_on : function() {
			api2_events.block = true;
			$('.box_holder .box_loader').show();
		},
		
		block_off : function() {
			api2_events.block = false;
			$('.box_holder .box_loader').hide();
		},
		
		//Логин через вк
		login_vk : function() {
			window.open('http://api.vk.com/oauth/authorize?client_id='+api2.settings.vk_app_id+'&response_type=code&redirect_uri=http://'+api2.settings.host+'/users/ajax/?mode=oauth%26stype=vk', 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
			return false;
		},

		//Логин через фб
		login_fb : function() {
			window.open('https://www.facebook.com/dialog/oauth?client_id='+api2.settings.fb_app_id+'&display=popup&scope=email,user_birthday&redirect_uri=http://'+api2.settings.host+'/users/ajax/?mode=oauth%26stype=fb', 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
			return false;
		},
		
		//Логин через ок
		login_ok : function() {
			window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id='+api2.settings.ok_app_id+'&scope=&response_type=code&redirect_uri=http://'+api2.settings.host+'/users/ajax/?mode=oauth%26stype=ok', 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
			return false;
		},
		
		//Связать через вк
		make_auth_vk : function() {
			window.open('http://api.vk.com/oauth/authorize?client_id='+api2.settings.vk_app_id+'&response_type=code&redirect_uri=http://'+api2.settings.host+'/users/cabinet/access/?make_auth=true%26stype=vk', 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
			return false;
		},

		//Связать через фб
		make_auth_fb : function() {
			window.open('https://www.facebook.com/dialog/oauth?client_id='+api2.settings.fb_app_id+'&display=popup&scope=email,user_birthday&redirect_uri=http://'+api2.settings.host+'/users/cabinet/access/?make_auth=true%26stype=fb', 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
			return false;
		},
		
		//Связать через ок
		make_auth_ok : function() {
			window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id='+api2.settings.ok_app_id+'&scope=&response_type=code&redirect_uri=http://'+api2.settings.host+'/users/cabinet/access/?make_auth=true%26stype=ok', 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
			return false;
		},
		
		//Обратная связь после авторизации
		social_auth_callback : function(is_auth, stype, info) {
			if (is_auth == true) {
				document.location.reload();
			} else {
				console.log(info);
				api2_events.show_box_registration(stype, info);
			}
		},
		
		//Нужна авторизация
		
		show_need_auth : function() {
		
			api2_box.box({
				html : 'Для продолжения действия вам необходимо <a href="javascript://" onclick="return api2_events.show_box_auth();">авторизоваться</a> или <a href="javascript://" onclick="return api2_events.show_box_registration();">зарегистрироваться</a>.', 
				title : 'Требуется авторизация'
			});
		
		},
		
		//Открыть бокс авторизации
		show_box_auth : function() {
			
			if (api2_box.check_is_opened('auth') == true || api2.is_auth == true) {
				return false;
			}
			
			var html = '<div class="box_holder box_auth_holder"><form action="/" method="post">\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_email" type="text" value="" placeholder="Ваш e-mail" name="email"></div><div class="field_error" style="display:none">E-mail/пароль не найден.</div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_password" type="password" value="" placeholder="Пароль" name="password"></div></div>\
			<div class="box_one"><div style="float:left"><a href="javascript://" onclick="$(this).closest(\'form\').submit();" class="ui_button">Войти</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
			<div class="box_one box_auth_forget"><a href="javascript://" onclick="return api2_events.show_box_recovery();" style="margin-right:4px">Забыли пароль?</a> | <a href="#" onclick="return api2_events.show_box_registration();" style="margin-left:4px">Регистрация</a></div>\
			<div class="box_one box_auth_social">Войти через соцсети:</div>\
			<div class="box_one box_auth_social_icons" style="height:29px"><a href="javascript://" onclick="return api2_events.login_fb();" title="Facebook"><img src="/templates/images/box/icon_fb.png"></a><a href="javascript://" onclick="return api2_events.login_vk();" title="Вконтакте"><img src="/templates/images/box/icon_vk.png"></a><a href="javascript://" onclick="return api2_events.login_ok();" title="Одноклассники"><img src="/templates/images/box/icon_ok.png"></a></div>\
			<input type="submit" class="hidden_submit"></form></div>';
			
			api2_box.box({
				html : html, 
				title : 'Авторизация',
				id : 'auth',
				close_event : function() {
					api2.close_hash();
				},
				focus_event : function() {
					window.location.hash = '#auth';
				}
			});
			
			$('.box_auth_holder form').submit(function(e) {
				e.preventDefault();
				api2_events.try_auth_engine();
			});
			
			api2.customize_all();
			return false;
			
		},
		
		try_auth_engine : function() {
		
			if (api2_events.block == true) {
				return false;
			}
			api2_events.block_on();
			api2.check_captcha(true, function(need_captcha, checkcode) {
				api2_events.block_on();
				var login = $('.box_auth_holder input[name=email]').val();
				var password = $('.box_auth_holder input[name=password]').val();
				$.ajax({
					type: "POST",
					url: '/users/ajax/?mode=auth',
					data: {'login' : login, 'password' : password, 'checkcode' : checkcode},
					timeout:10000,
					cache: false,
					success: function(data) {
						eval('var data = ' + data + ';');
						if (data.error == 0) {
							$('.box_auth_holder .field_error').hide();
							window.location.hash = '#none';
							document.location.reload();
						} else if (data.error == 1) {
							$('.box_auth_holder .field_error').show();
						} else {
							document.location.reload();
						}
						api2_events.block_off();
					},
					error: function() {
						api2_box.alert(api2.words.ajax_error);
						api2_events.block_off();
					}
				});
			});
		},
		
		//Открыть бокс регистрации
		show_box_registration : function(stype, info) {
			
			if (api2_box.check_is_opened('registration') == true || api2.is_auth == true) {
				return false;
			}
			
			if (api2_box.check_is_opened('auth') == true) {
				api2_box.close_box('auth');
			}
			
			if (typeof stype == 'undefined') {
				stype = 'none';
			}
			var default_info = {
				name : '',
				surname : '',
				email : '',
				gender : '1'
			};
			info = $.extend(default_info, info);
			api2_events.registration_ready_event = false;
			
			var html = '<div class="box_holder box_registration_holder"><form action="/" method="post">';
			if (stype != 'none') {
				var stitle;
				if (stype == 'vk') { stitle = 'Вконтакте'; }
				if (stype == 'fb') { stitle = 'Facebook'; }
				if (stype == 'ok') { stitle = 'Одноклассники'; }
				html += '<div class="box_field box_attention">ВНИМАНИЕ! Вы регистрируетесь через соц.сеть «'+stitle+'»! <br><br> Если у вас уже есть аккаунт на нашем сайте, вы можете связать вашу страницу «'+stitle+'» и ваш профиль «Моей Планеты» через личный кабинет, в разделе «доступ».</div>';
			}
			html += '<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_name" type="text" value="'+info.name+'" placeholder="Ваше имя" name="DATA[bd_name]" maxlength="32"></div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_name" type="text" value="'+info.surname+'" placeholder="Фамилия" name="DATA[bd_surname]" maxlength="64"></div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_email" type="text" value="'+info.email+'" placeholder="Ваш e-mail" name="DATA[email]" maxlength="128"></div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_password" type="password" value="" placeholder="Пароль" name="DATA[password]" maxlength="128"></div></div>\
			<div class="box_one box_registration_gender"><div style="float:left;">Ваш пол:</div><div style="float:left; padding:0 0 0 5px;"><input type="radio" name="DATA[gender]" value="1" id="gender_male" class="ui_input_radio" '+(info.gender == '1' ? 'checked="true"' : '')+' style="position:relative; top:0px;"></div><div style="float:left; padding:0 0 0 1px;"><label for="gender_male">Мужчина</label></div><div style="float:left; padding:0 0 0 5px;"><input type="radio" name="DATA[gender]" value="2" id="gender_female" class="ui_input_radio" '+(info.gender == '2' ? 'checked="true"' : '')+' style="position:relative; top:0px;"></div><div style="float:left; padding:0 0 0 1px;"><label for="gender_female">Женщина</label></div><div class="clearboth"></div></div>\
			<div class="box_field field_error_holder"><div style="float:left; width:100px; height:50px; font-size:0px;"><a href="javascript://" title="Обновить код" onclick="$(this).find(\'img\').kcaptcha_update(); return false;"><img src="/kcaptcha.php?'+Math.round((Math.random()*1000000))+'" class="kcaptcha_img"></a></div><div class="box_registration_code_title">Введите код<br>с картинки:</div><div class="clearboth"></div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" name="DATA[checkcode]"></div></div>\
			<div class="box_field" style="font-size:12px; color:#3c3c3c;">Регистрируясь, вы соглашаетесь с <a href="javascript://" onclick="return api2_events.show_box_terms();">правилами сайта</a>.</div>\
			<div class="box_one"><div style="float:left"><a href="javascript://" onclick="$(this).closest(\'form\').submit();" class="ui_button">Зарегистрироваться</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
			<input type="hidden" value="'+stype+'" name="DATA[stype]">\
			<input type="submit" class="hidden_submit"></form></div>';
			
			api2_box.box({
				html : html, 
				title : 'Регистрация',
				id : 'registration',
				close_event : function() {
					api2.close_hash();
				},
				focus_event : function() {
					window.location.hash = '#registration';
				}
			});
			
			$('.box_registration_holder form').submit(function(e) {
				e.preventDefault();
				api2_events.try_registration_engine();
			});
				
			api2.customize_all();
			$('.box_registration_holder').find('input[name="DATA[bd_name]"], input[name="DATA[bd_surname]"]').add_input_edit_event(function(input, i) {
				$(input).val(onlyName($(input).val()));
			});
			
			return false;
			
		},
		
		//Открыть бокс с минимальной регистрацией
		show_box_micro_registration : function(params) {
			
			if (api2_box.check_is_opened('registration') == true || api2.is_auth == true) {
				return false;
			}
			if (api2_box.check_is_opened('auth') == true) {
				api2_box.close_box('auth');
			}
			var default_params = {
				name : '',
				surname : '',
				email : '',
				gender : '1',
				ready_event : false
			};
			params = $.extend(default_params, params);
			api2_events.registration_ready_event = params.ready_event;
		
			var html = '<div class="box_holder box_registration_holder"><form action="/" method="post">';
			html += '\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_email" type="text" value="'+params.email+'" placeholder="Ваш e-mail" name="DATA[email]" maxlength="128"></div></div>\
			<div class="box_field field_error_holder"><div style="float:left; width:100px; height:50px; font-size:0px;"><a href="javascript://" title="Обновить код" onclick="$(this).find(\'img\').kcaptcha_update(); return false;"><img src="/kcaptcha.php?'+Math.round((Math.random()*1000000))+'" class="kcaptcha_img"></a></div><div class="box_registration_code_title">Введите код<br>с картинки:</div><div class="clearboth"></div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" name="DATA[checkcode]"></div></div>\
			<div class="box_field" style="font-size:12px; color:#3c3c3c;">Регистрируясь, вы соглашаетесь с <a href="javascript://" onclick="return api2_events.show_box_terms();">правилами сайта</a>.</div>\
			<div class="box_one"><div style="float:left"><a href="javascript://" onclick="$(this).closest(\'form\').submit();" class="ui_button">Зарегистрироваться</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
			<input type="hidden" value="none" name="DATA[stype]">\
			<input type="hidden" value="'+params.name+'" name="DATA[bd_name]">\
			<input type="hidden" value="'+params.surname+'" name="DATA[bd_surname]">\
			<input type="hidden" value="'+params.gender+'" name="DATA[gender]">\
			<input type="submit" class="hidden_submit"></form></div>';
			
			api2_box.box({
				html : html, 
				title : 'Регистрация',
				id : 'registration'
			});

			$('.box_registration_holder form').submit(function(e) {
				e.preventDefault();
				api2_events.try_registration_engine();
			});
			api2.customize_all();
			return false;
			
		},
		
		try_registration_engine : function() {
			
			if (api2_events.block == true) {
				return false;
			}
			api2_events.block_on();
			var error = false;
			
			$('.box_registration_holder').find('input[name="DATA[bd_name]"], input[name="DATA[bd_surname]"]').each(function() {
				if ($(this).val().length < 3) {
					error = true;
					$(this).box_field_show_error('Минимальная длина поля - 3 символа.');
				}
			});
			$('.box_registration_holder').find('input[name="DATA[email]"]').each(function() {
				if ($(this).val().length < 1 || isEmail($(this).val()) == false) {
					error = true;
					$(this).box_field_show_error('Формат email не верный.');
				}
			});
			$('.box_registration_holder').find('input[name="DATA[password]"]').each(function() {
				if ($(this).val().length < 6) {
					error = true;
					$(this).box_field_show_error('Пароль слишком простой.');
				}
			});
			$('.box_registration_holder').find('input[name="DATA[checkcode]"]').each(function() {
				if ($(this).val().length < 4) {
					error = true;
					$(this).box_field_blink_red();
				}
			});
			if (error == true) {
				api2_events.block_off();
				return false;
			}
			
			$.ajax({
				type: "POST",
				url: '/users/ajax/?mode=check',
				data: {
					'kcaptcha' : $('.box_registration_holder').find('input[name="DATA[checkcode]"]').val(),
					'email' : $('.box_registration_holder').find('input[name="DATA[email]"]').val()
				},
				timeout:10000,
				cache: false,
				success: function(data) {
					eval('var data = ' + data + ';');
					var error2 = false;
					if (data.email > 0) {
						error2 = true;
						$('.box_registration_holder').find('input[name="DATA[email]"]').box_field_show_error('Email уже кем-то занят.');
					}
					if (data.kcaptcha == 0) {
						error2 = true;
						$('.kcaptcha_img').kcaptcha_update();
						$('.box_registration_holder').find('input[name="DATA[checkcode]"]').box_field_show_error('Код картинки введен не верно.');
					}
					if (error2 == false) {
						$.ajax({
							type: "POST",
							url: '/users/ajax/?mode=registration&redirect_url='+api2.url,
							data: $('.box_registration_holder form').serialize(),
							timeout:10000,
							cache: false,
							success: function(data) {
								eval('var data = ' + data + ';');
								if (data.error == 1) {
									api2_box.alert('Вы уже авторизованы. Обновите страницу.', function() { document.location.reload(); });
								} else if (data.error == 2) {
									api2_box.alert('Произошла неизвестная ошибка. Обновите страницу и попробуйте еще раз.');
								} else {
									api2_events.try_registration_show_activation(data.user);
								}
								api2_events.block_off();
							},
							error: function() {
								api2_box.alert(api2.words.ajax_error);
								api2_events.block_off();
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
			
			return false;
		},
		
		try_registration_show_activation : function(user) {
			
			api2_box.block_box('registration');
			api2_events.user = user;
			var html = '<form action="/" method="post">\
			<div class="box_field field_error_holder"><span class="blue">'+ (user.gender == 2 ? 'Уважаемая' : 'Уважаемый') +', '+user.bd_name+'!</span></div>\
			<div class="box_field field_error_holder" style="color:#3c3c3c;">На ваш e-mail <span class="blue">'+user.email+'</span> отправлено письмо с кодом для активации вашего аккаунта.</div>\
			<div class="box_field field_error_holder" style="color:#3c3c3c;">Пожалуйста, введите код из сообщения ниже. Письмо должно прийти в течении 5 минут. Если письмо не пришло, попробуйте выслать код с активацией <a href="javascript://" onclick="return api2_events.try_registration_send_active_again_engine();">еще раз</a>. Не забудьте проверить папку "спам".</div>\
			<div class="box_field field_error_holder" style="color:#3c3c3c;">Код из сообщения:</div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" name="DATA[code]"></div></div>\
			<div class="box_one"><div style="float:left"><a href="javascript://" onclick="$(this).closest(\'form\').submit();" class="ui_button">Завершить регистрацию</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
			<input type="submit" class="hidden_submit"></form>';
			$('.box_registration_holder').html(html);
			
			$('.box_registration_holder form').submit(function(e) {
				e.preventDefault();
				api2_events.try_registration_activation_engine();
			});
	
			api2.customize_all();
		},
		
		try_registration_activation_engine : function() {
		
			if (api2_events.block == true) {
				return false;
			}
			api2_events.block_on();
			$.ajax({
				type: "POST",
				url: '/users/ajax/?mode=registration_activate&uid='+api2_events.user.id,
				data: $('.box_registration_holder form').serialize(),
				timeout:10000,
				cache: false,
				success: function(data) {
					eval('var data = ' + data + ';');
					if (data.error == 0 || data.error == 1) {
						api2_box.unblock_box('registration');
						api2_box.close_box('registration');
						if (api2_events.registration_ready_event == false) {
							if (data.error == 0) {
								api2_box.alert('Поздравляем, ваша регистрация полностью завершена.<br> Теперь вы можете полноценно пользоваться нашим сайтом.', function() { document.location.reload(); });
							} else if (data.error == 1) {
								api2_box.alert('Ваш аккаунт уже активирован.', function() { document.location.reload(); });
							}
						} else {
							api2_events.registration_ready_event(data);
						}
					} else if (data.error == 2) {
						$('.box_registration_holder input[name="DATA[code]"]').box_field_show_error('Код активации введен не верно.');
					}
					api2_events.block_off();
				},
				error: function() {
					api2_box.alert(api2.words.ajax_error);
					api2_events.block_off();
				}
			});
		},
		
		//Отправить письмо с активацией еще раз
		try_registration_send_active_again_engine : function() {
		
			if (typeof api2_events.user != 'undefined') {
				api2_box.show_loader();
				$.ajax({
					type: "GET",
					url: '/users/ajax/?mode=send_activate_again&redirect_url='+api2.url,
					data: {uid:api2_events.user.id},
					timeout:10000,
					cache: false,
					success: function(data) {
						api2_box.close_loader();
						eval('var data = ' + data + ';');
						if (data.error == 0) {
							api2_box.alert('Письмо отправлено. Если его всё еще нет, подождите 10 минут. Так же, возможно оно попало в папку спам.');
						}
					},
					error: function() {
						api2_box.alert(api2.words.ajax_error);
					}
				});
			}
				
			return false;
			
		},
		
		//Открыть бокс с восстановлением пароля
		show_box_recovery : function() {
			
			if (api2_box.check_is_opened('recovery') == true || api2.is_auth == true) {
				return false;
			}
			
			if (api2_box.check_is_opened('auth') == true) {
				api2_box.close_box('auth');
			}
			
			var html = '<div class="box_holder box_recovery_holder"><form action="/" method="post">\
			<div class="box_field field_error_holder" style="color:#3c3c3c;">Внимание! На ваш e-mail будет выслана инструкция по дальнейшему восстановлению пароля.</div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" data-class="box_field_email" type="text" value="" placeholder="Ваш e-mail" name="DATA[email]"></div><div class="field_error" style="display:none">E-mail/пароль не найден.</div></div>\
			<div class="box_field field_error_holder"><div style="float:left; width:100px; height:50px; font-size:0px;"><a href="javascript://" title="Обновить код" onclick="$(this).find(\'img\').kcaptcha_update(); return false;"><img src="/kcaptcha.php?'+Math.round((Math.random()*1000000))+'" class="kcaptcha_img"></a></div><div class="box_registration_code_title">Введите код<br>с картинки:</div><div class="clearboth"></div></div>\
			<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" name="DATA[checkcode]"></div></div>\
			<div class="box_one"><div style="float:left"><a href="javascript://" onclick="$(this).closest(\'form\').submit();" class="ui_button">Отправить запрос</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
			<input type="submit" class="hidden_submit"></form></div>';
			
			api2_box.box({
				html : html, 
				title : 'Восстановление пароля',
				id : 'recovery',
				close_event : function() {
					api2.close_hash();
				},
				focus_event : function() {
					window.location.hash = '#recovery';
				}
			});
			
			$('.box_recovery_holder form').submit(function(e) {
				e.preventDefault();
				api2_events.try_recovery_engine();
			});
			
			api2.customize_all();
			return false;
		},
		
		try_recovery_engine : function() {
		
			if (api2_events.block == true) {
				return false;
			}
			api2_events.block_on();
			
			$.ajax({
				type: "POST",
				url: '/users/ajax/?mode=check',
				data: {
					'kcaptcha' : $('.box_recovery_holder').find('input[name="DATA[checkcode]"]').val(),
					'email' : $('.box_recovery_holder').find('input[name="DATA[email]"]').val()
				},
				timeout:10000,
				cache: false,
				success: function(data) {
					eval('var data = ' + data + ';');
					var error2 = false;
					if (data.email == 0) {
						error2 = true;
						$('.box_recovery_holder').find('input[name="DATA[email]"]').box_field_show_error('Email не найден.');
					}
					if (data.kcaptcha == 0) {
						error2 = true;
						$('.kcaptcha_img').kcaptcha_update();
						$('.box_recovery_holder').find('input[name="DATA[checkcode]"]').box_field_show_error('Код картинки введен не верно.');
					}
					if (error2 == false) {
						$.ajax({
							type: "POST",
							url: '/users/ajax/?mode=recovery_password&redirect_url='+api2.url,
							data: $('.box_recovery_holder form').serialize(),
							timeout:10000,
							cache: false,
							success: function(data) {
								eval('var data = ' + data + ';');
								if (data.error == 0) {
									api2_box.close_box('recovery');
									api2_box.alert('Инструкция по восстановлению отправлена на ваш e-mail.<br> Если письмо не придет в течение 10 минут, попробуйте отправить запрос <a href="javascript://" onclick="api2_box.close_all_boxes(); return api2_events.show_box_recovery();">еще раз</a>.');
								}
								api2_events.block_off();
							},
							error: function() {
								api2_box.alert(api2.words.ajax_error);
								api2_events.block_off();
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
		},
		
		//Показать форму с капчей
		show_captcha_form : function() {
		
			if (api2_events.block == true) {
				return false;
			}
			var html = '<div class="box_holder box_captcha_holder"><form action="/" method="post">\
						<div class="box_field field_error_holder" style="color:#3c3c3c;">Внимание! С вашего IP адреса производится слишком много активных действий. Чтобы мы убедились, что вы не робот, введите, пожалуйста, код.</div>\
						<div class="box_field field_error_holder"><div style="float:left; width:100px; height:50px; font-size:0px;"><a href="javascript://" title="Обновить код" onclick="$(this).find(\'img\').kcaptcha_update(); return false;"><img src="/kcaptcha.php?'+Math.round((Math.random()*1000000))+'" class="kcaptcha_img"></a></div><div class="box_registration_code_title">Введите код<br>с картинки:</div><div class="clearboth"></div></div>\
						<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" name="checkcode"></div></div>\
						<div class="box_one"><div style="float:left"><a href="javascript://" onclick="$(this).closest(\'form\').submit();" class="ui_button">Отправить</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
						<input type="submit" class="hidden_submit"></form></div>';
			
			api2_box.box({
				html : html, 
				title : 'Введите код с картинки',
				id : 'captcha_form'
			});
			
			$('.box_captcha_holder form').submit(function(e) {
				e.preventDefault();
				api2_events.try_captcha_engine();
			});
			
			api2.customize_all();
		},
		
		try_captcha_engine : function() {
		
			if (api2_events.block == true) {
				return false;
			}
			api2_events.block_on();
			var checkcode = $('.box_captcha_holder input[name="checkcode"]').val();
			$.ajax({
				type: "GET",
				url: '/ajax/',
				data: {'mode' : 'check_captcha_right', 'checkcode' : checkcode},
				timeout:10000,
				cache: false,
				success: function(data) {
					eval('var data = ' + data + ';');
					api2_events.block_off();
					if (data.code == 1) {
						api2_box.close_box('captcha_form');
						api2.captcha_func(true, checkcode);
					} else {
						$('.kcaptcha_img').kcaptcha_update();
						$('.box_captcha_holder').find('input[name="checkcode"]').box_field_show_error('Код картинки введен не верно.');
					}
				},
				error: function() {
					api2_box.alert(api2.words.ajax_error);
					api2_events.block_off();
				}
			});

		},
		
		show_map : function(v){
			map.show();
		},
	
		//Открыть бокс с правилами сайта
		show_box_terms : function(v) {
			
			v = v || 'terms';
			var t;
			if (v == 'terms') {
				t = 'Правила сайта';
			} else if (v == 'publication_terms') {
				t = 'Правила публикации';
			} else if (v == 'publication_help') {
				t = 'Помощь в публикации';
			}
			if (api2_box.check_is_opened(v) == true) {
				return false;
			}
			
			api2_box.show_loader();
			$.ajax({
				type: "GET",
				url: '/ajax/?mode='+v,
				data: {},
				timeout:10000,
				success: function(data) {
					api2_box.close_loader();
					api2_box.box({
						html : data, 
						title : t,
						id : v,
						box_style : 'padding:20px 0;',
						close_event : function() {
							api2.close_hash();
						},
						focus_event : function() {
							window.location.hash = '#'+v;
						}
					});
				},
				error: function() {
					api2_box.alert(api2.words.ajax_error);
				}
			});
				
			return false;
		},
		
		//Проверить хэш на подгрузку окон
		check_hash : function() {
			var hash = window.location.hash;
			if (hash == '#auth') {
				api2_events.show_box_auth();
			}else if (hash == '#map') {
				api2_events.show_map();
			}else if (hash == '#registration') {
				api2_events.show_box_registration();
			} else if (hash == '#terms') {
				api2_events.show_box_terms('terms');
			} else if (hash == '#publication_terms') {
				api2_events.show_box_terms('publication_terms');
			} else if (hash == '#publication_help') {
				api2_events.show_box_terms('publication_help');
			} else if (hash == '#recovery') {
				api2_events.show_box_recovery();
			} else if (hash.length > 1) {
				var eid = hash.substr(1);
				if ($('#'+eid).length > 0) {
					$(window).load(function() {
						$('body, html, document').animate({scrollTop : $('#'+eid).position().top}, 500);
					});
				}
				api2_box.close_all_boxes();
			} else {
				api2_box.close_all_boxes();
			}
		},
		
		//Подгрузить расписание
		events_load_schedule : function(data_event_id) {
			api2_box.show_loader();
			$.ajax({
				type: "GET",
				url: '/events/schedule/',
				data: {event_id:data_event_id},
				timeout:10000,
				success: function(data) {
					api2_box.close_loader();
					eval('var data = ' + data + ';');
					var html = '<div class="events_schedule_box_top">\
					<span class="last"><span class="p">&nbsp;</span>прошедшие</span><span class="future"><span class="p">&nbsp;</span>ближайшие даты</span>\
					</div>';
					$.each(data, function(index, value) {
						html += '<div class="'+(value.futuru == true ? 'events_schedule_box_one_future' : 'events_schedule_box_one_last')+(index == 0 ? ' events_schedule_box_one_first' : '')+'">' + value.date + '</div>';
					});
					api2_box.box({
						html : html, 
						title : 'Расписание события',
						box_class : 'events_schedule_box'
					});
				},
				error: function() {
					api2_box.alert(api2.words.ajax_error);
				}
			});
		}
	
	};

	$(document).ready(function() {
	
		//Графика
		$('.header_p_a').mouseenter(function() {
			$(this).find('.header_p_ic').stop().animate({opacity:1}, 200);
		}).mouseleave(function() {
			$(this).find('.header_p_ic').stop().animate({opacity:0}, 200);
		});

		$('#header_map').mouseenter(function() {
			$(this).find('.hms1, .hms3').stop().animate({opacity:1}, 200);
		}).mouseleave(function() {
			$(this).find('.hms1, .hms3').stop().animate({opacity:0}, 200);
		});
		
		$('.button_clubcard, .button_basket_adder, .shop_basket_button_go, .shop_basket_button_clubcard').mouseenter(function() {
			$(this).find('.hms1').stop().animate({opacity:1}, 200);
		}).mouseleave(function() {
			$(this).find('.hms1').stop().animate({opacity:0}, 200);
		});
		
		$('.full_table_height').each(function() {
			var t = this;
			var f = function() {
				var c = ($(window).height() - ($(t).offset().top + $('#footer').height()));
				$(t).css('height', c + 'px');
			};
			f();
			$(window).resize(function(){ f(); });
		});
		
		
		
		$('.item_like_ajax').ajax_like();
		/*
		//Лайки
		$('.item_like_ajax').click(function() {
			var item = this;
			var item_c = $(item).closest('.item_likes_container');
			if ($(item_c).hasClass('item_likes_container_voted') == false && $(item_c).hasClass('item_likes_container_blocked') == false) {
				$(item_c).addClass('item_likes_container_blocked');
				$.ajax({
					type: "GET",
					url: '/ajax/',
					data: {'mode' : 'likes', 'oid' : $(item_c).attr('data-oid'), 'do' : $(item).attr('data-type')},
					timeout:5000,
					cache: false,
					success: function(data) {
						if (data != 'error') {
							$(item_c).addClass('item_likes_container_voted');
							$(item_c).find('.item_likes_count').html(data);
							var counter = parseInt(data);
							if (counter >= 0) {
								$(item_c).find('.item_likes_count').removeClass('item_likes_count_red');
							} else {
								$(item_c).find('.item_likes_count').addClass('item_likes_count_red');
							}
						}
						$(item_c).removeClass('item_likes_container_blocked');
					},
					error: function() {
						$(item_c).removeClass('item_likes_container_blocked');
					}
				});
			}
		});*/
		
		//События на открытия боксов
		$('.box_auth').click(function(){ return api2_events.show_box_auth(); });
		$('.box_registration').click(function(){ return  api2_events.show_box_registration(); });
		
		//Разбор хэша на подгрузку окон
		setTimeout(function() {
			api2_events.check_hash();
		}, 0);
		
		//Вешаем события по навигации на проверку хэша
		$(window).load(function() {
			setTimeout(function() {
				$(window).bind('popstate', function() {
					api2_events.check_hash();
				});
			}, 0);
		});

		//Подгрузка расписания
		$('.events_list_schedule').click(function() {
			api2_events.events_load_schedule($(this).attr('data-event-id'));
		});
		
		//Фильтр видео
		$('#video_filter_projects a').click(function() {
			$('#video_filter_projects').removeClass('grey_header').addClass('blue_header');
			$('#video_filter_faces').removeClass('blue_header').addClass('grey_header');
			$('#video_filter_faces_content').hide();
			$('#video_filter_projects_content').show();
		});
		$('#video_filter_faces a').click(function() {
			$('#video_filter_faces').removeClass('grey_header').addClass('blue_header');
			$('#video_filter_projects').removeClass('blue_header').addClass('grey_header');
			$('#video_filter_projects_content').hide();
			$('#video_filter_faces_content').show();
		});
		
	});

})(jQuery);