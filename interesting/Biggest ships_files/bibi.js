
$.fn.bibi = function(options) {
	return this.each(function() {
	
		/* Переменные */
		var that = this;
		that.maxlength = 20000;
		that.timeoutid = 0;
		var defaults = {
			preview_div : false
		};
		that.opts = $.extend(defaults, options);
		that.opts.is_mobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		
		$(that).data('obj', that);
		
		//Подготовка
		var holder = $(that).closest('.bibi_holder');
		$(holder).find('.ui_textarea').append('<div class="ui_clear hidden_height_div" style="display:none; word-wrap:break-word; white-space:pre-wrap; width:'+$(that).width()+'px;">&nbsp;</div>');
		$(holder).prepend('<div class="bibi_panel">\
			<a href="javascript://" class="bibi_panel_bold" onclick="return false;" title="Жирный">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_i" onclick="return false;" title="Курсив">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_center" onclick="return false;" title="По центру">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_justify" onclick="return false;" title="По ширине">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_header" onclick="return false;" title="Заголовок">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_blockquote" onclick="return false;" title="Цитата">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_link" onclick="return false;" title="Прикрепить ссылку">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_img" onclick="return false;" title="Вставить изображение">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_video" onclick="return false;" title="Вставить видео">&nbsp;</a>\
			<a href="javascript://" class="bibi_panel_help" onclick="return false;" title="Помощь">&nbsp;</a>\
			<div class="clearboth"></div>\
		</div>');
		$(holder).append('<div class="bibi_counter"><b>'+that.maxlength+'</b> символов осталось</div>');
		$(holder).find('.bibi_panel_help').mousedown(function(e) {
			e.preventDefault();
			api2_events.show_box_terms('publication_help');
		});
		$(holder).find('.bibi_panel_bold').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			$(that).replaceSelection('[b]'+selection.text+'[/b]');
			var pos = (selection.end + new String('[b]').length);
			$(that).setSelection(pos, pos);
			that.prepare_text(false);
		});
		$(holder).find('.bibi_panel_i').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			$(that).replaceSelection('[i]'+selection.text+'[/i]');
			var pos = (selection.end + new String('[i]').length);
			$(that).setSelection(pos, pos);
			that.prepare_text(false);
		});
		$(holder).find('.bibi_panel_center').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			$(that).replaceSelection('[center]'+selection.text+'[/center]');
			var pos = (selection.end + new String('[center]').length);
			$(that).setSelection(pos, pos);
			that.prepare_text(false);
		});
		$(holder).find('.bibi_panel_justify').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			$(that).replaceSelection('[justify]'+selection.text+'[/justify]');
			var pos = (selection.end + new String('[justify]').length);
			$(that).setSelection(pos, pos);
			that.prepare_text(false);
		});
		$(holder).find('.bibi_panel_header').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			$(that).replaceSelection('[h1]'+selection.text+'[/h1]');
			var pos = (selection.end + new String('[h1]').length);
			$(that).setSelection(pos, pos);
			that.prepare_text(false);
		});
		$(holder).find('.bibi_panel_blockquote').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			$(that).replaceSelection('[blockquote]'+selection.text+'[/blockquote]');
			var pos = (selection.end + new String('[blockquote]').length);
			$(that).setSelection(pos, pos);
			that.prepare_text(false);
		});
		//Ссылка
		$(holder).find('.bibi_panel_link').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			var box_id = api2_box.box({
				title : 'Прикрепить ссылку',
				html : '<div class="box_holder" style="width:300px">\
				<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" placeholder="Введите URL" name="url"></div></div>\
				<div class="box_one"><a href="javascript://" onclick="return false;" class="ui_button">Вставить</a></div>\
				</div>'
			});
			$('#table_'+box_id+' a.ui_button').click(function() {
				var input = $('#table_'+box_id+' input[name="url"]');
				val = input.val() || '';
				if(!/^(https?|ftp):\/\//i.test(val)) {
					val = 'http://'+val;
				}
				if (validateUrl(val) == true) {
					api2_box.close_box(box_id);
					$(that).setSelection(selection.start, selection.end);
					var pos = 0;
					if (selection.text.length > 0) {
						$(that).replaceSelection('[url='+val+']'+selection.text+'[/url]');
						pos = (selection.end + new String('[url='+val+']').length);
						$(that).setSelection(pos, pos);
					} else {
						$(that).replaceSelection('[url]'+val+'[/url]');
						pos = (selection.end + new String('[url]'+val+'[/url]').length);
						$(that).setSelection(pos, pos);
					}
					that.prepare_text(false);
				} else {
					$(input).box_field_show_error('Не верный формат URL адреса.');
				}
			});
			api2.customize_all();
		});
		//Изображение
		$(holder).find('.bibi_panel_img').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			var box_id = api2_box.box({
				title : 'Вставить изображение',
				html : '<div class="box_holder" style="width:300px">\
				<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" placeholder="Введите URL изображения" name="url"></div></div>\
				<div class="box_one"><div style="float:left"><a href="javascript://" onclick="return false;" class="ui_button">Вставить</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px;"><img src="/templates/images/box/small_loader.gif" class="box_loader"></div><div class="clearboth"></div></div>\
				</div>'
			});
			$('#table_'+box_id+' a.ui_button').click(function() {
				var input = $('#table_'+box_id+' input[name="url"]');
				val = input.val() || '';
				if(!/^(https?|ftp):\/\//i.test(val)) {
					val = 'http://'+val;
				}
				if (validateUrl(val) == true) {
					api2_events.block_on();
					testImage(val, function() {
						api2_events.block_off();
						api2_box.close_box(box_id);
						$(that).setSelection(selection.start, selection.end);
						var pos = 0;
						$(that).replaceSelection('[img]'+val+'[/img]');
						pos = (selection.start + new String('[img]'+val+'[/img]').length);
						$(that).setSelection(pos, pos);
						that.prepare_text(false);
					}, function() {
						api2_events.block_off();
						$(input).box_field_show_error('Не верный формат URL изображения.');
					});
				} else {
					$(input).box_field_show_error('Не верный формат URL изображения.');
				}
			});
			api2.customize_all();
		});
		//Видео
		$(holder).find('.bibi_panel_video').mousedown(function(e) {
			e.preventDefault();
			var selection = $(that).getSelection();
			var box_id = api2_box.box({
				title : 'Вставить видео',
				html : '<div class="box_holder" style="width:300px">\
				<div class="box_field box_attention">ВНИМАНИЕ! Разрешены ссылки на видео в сервисах yotube.com и vimeo.com.</div>\
				<div class="box_field field_error_holder"><div class="box_field_c"><input class="ui_input_text" type="text" value="" placeholder="Введите URL видео" name="url"></div></div>\
				<div class="box_one"><a href="javascript://" onclick="return false;" class="ui_button">Вставить</a></div>\
				</div>'
			});
			$('#table_'+box_id+' a.ui_button').click(function() {
				var input = $('#table_'+box_id+' input[name="url"]');
				val = input.val() || '';
				if(!/^(https?|ftp):\/\//i.test(val)) {
					val = 'http://'+val;
				}
				if (validateUrl(val) == true) {
					var url = parseUrl(val);
					domain = url.hostname || '';
					if (inArray(domain, ['youtube.com', 'www.youtube.com', 'youtu.be', 'www.youtu.be', 'www.vimeo.com', 'vimeo.com']) == true) {
						api2_events.block_on();
						api2_events.block_off();
						api2_box.close_box(box_id);
						$(that).setSelection(selection.start, selection.end);
						var pos = 0;
						$(that).replaceSelection('[video]'+val+'[/video]');
						pos = (selection.start + new String('[video]'+val+'[/video]').length);
						$(that).setSelection(pos, pos);
						that.prepare_text(false);
					} else {
						$(input).box_field_show_error('Не верный формат URL видео.');
					}
				} else {
					$(input).box_field_show_error('Не верный формат URL видео.');
				}
			});
			api2.customize_all();
		});
		
		
		//Загрузить текст в хтмл память
		that.load_content = function() {
			that.textareaContent = $(that).val().replace(/&/g,'&amp;').replace(/ {2}/g, '&nbsp;').replace(/<>/g, '&gt;').replace(/\n/g, '<br />');
			that.previewContent = $(that).val().replace(/&/g,'&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/\n/g, '<br />');
		}
		
		//Обработка текста
		that.prepare_text = function(fast) {
		
			//Регулировка высоты
			that.load_content();
			$(holder).find('.hidden_height_div').html(that.textareaContent+'<br>&nbsp;');
			var h = $(holder).find('.hidden_height_div').height();
			if (h > 800) {
				h = 800;
			}
			$(that).height(h + 3);
			
			//Предосмотр
			that.update_preview(fast, false);
			
			//Счетчик
			$(holder).find('.bibi_counter b').html(that.maxlength - $(that).val().length);
		};
		
		//Обновить предосмотр
		that.update_preview = function(fast, update_content) {
		
			if (that.opts.preview_div != false) {
				if (update_content == true) {
					that.load_content();
				}
				clearTimeout(that.timeoutid);
				that.timeoutid = setTimeout(function() {
					var textareaContent = parseBBCode(that.previewContent);
					if (textareaContent.length > 0) {
						$('#'+that.opts.preview_div).css({'display':'block', 'visibility':'hidden'});
						$('#'+that.opts.preview_div).html(textareaContent+'<script type="text/javascript">$(\'#'+that.opts.preview_div+'\').css({\'visibility\':\'visible\'});</script>');
					} else {
						$('#'+that.opts.preview_div).css({'display':'none'});
					}
				}, (fast == true ? 0 : 500));
			}
		};
		
	
		/* Вешаем события */
		
		$(that).keyup(function(e) {
			that.prepare_text(false);
		});
	
		$(that).bind('input', function(e) {
			that.prepare_text(false);	
		});
		
		$(that).bind('paste', function(e) {
			that.prepare_text(false);
		});
		
		that.prepare_text(true);
		
	});
};
