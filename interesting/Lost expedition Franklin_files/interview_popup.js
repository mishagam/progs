var interview_popup = {
	button_showed: false,
	is_init: false,
	on_close: function(){
	},
	button_items : {},
	button_html: '<div id="interview_popup">\
		<div id="interview_popup_topper">\
			<div id="interview_popup_topper_caption">Опрос</div>\
			<div id="interview_popup_topper_close_wrap"><a style="font-size:0px;" href="javascript://" onclick="interview_popup.close_button()"><img src="/templates/images/interview_popup/close.png"></a></div>\
			<div class="clearboth"></div>\
		</div>\
		<div id="interview_popup_mider">\
		</div>\
	</div>',
	init: function(){
		if(!interview_popup.is_init){
				
				$.ajax({
					url: '/interview/load_data/',
					type: 'POST',
					timeout: 100000,
					cache:false,
					success: function (data) {
						eval('var data = ' + data + ';');
						if(data.success == 1){
							interview_popup.button_items = data.quiz;		
							//console.log(interview_popup.button_items);
							interview_popup.is_init = true;
						}
					}
				});
				
				
			//}

		}
	},
	
	render: function(){
		interview_popup.button_showed = true;
		interview_popup.show_button();
	},
		
	check_timer: function(){
		//start = $.cookie('interview_popup_'+interview_popup.button_items.id+'_start_time');
		//now = new Date;
		if(/*((now.getTime() - start) >= 60000) &&*/ !interview_popup.button_showed){
			interview_popup.button_showed = true;
			interview_popup.show_button();
		}
	},
	
	send_answer: function(){
		$.ajax({
			url: '/interview/give_answer/',
			data: $('#interview_popup_form').serialize(),
			type: 'POST',
			timeout: 100000,
			cache:false,
			success: function (data) {
				eval('var data = ' + data + ';');
				if(data.success == 1){
					$('#interview_popup_mider').html('Вы успешно проголосовали!<br> Спасибо за участие в опросе!!!<br><a style="display:block; padding: 15px 0 0 0;" href="/interview/archive/#interview_list_item_'+interview_popup.button_items.id+'" target="_blank">Узнать как проголосовали другие</a>');
				}
				else{
					switch(data.error){
						case 1:
							$('#interview_popup_mider').html('Переданы некорректные данные');
						break;
						case 2:
							$('#interview_popup_mider').html('Вы уже участвовали в данном опросе');
						break;
					}
				}
			}
		});
	},
	
	generate_html: function(){
		button_html_start = '<div id="interview_popup">\
		<div id="interview_popup_topper">\
			<div id="interview_popup_topper_caption">'+interview_popup.button_items.title+'</div>\
			<div id="interview_popup_topper_close_wrap"><a style="font-size:0px;" href="javascript://" onclick="interview_popup.close_button(); return false;"><img src="/templates/images/interview_popup/close.png"></a></div>\
			<div class="clearboth"></div>\
		</div>\
		<div id="interview_popup_mider">\
		<form id="interview_popup_form">\
		<input name="quiz_id" type="hidden" value="'+interview_popup.button_items.id+'">';
		
		button_html_end = '</form>\
							<div id="interview_popup_button_wrap">\
								<a href="javascript://" id="interview_popup_button_send" onclick="interview_popup.send_answer();return false;">ответить</a>\
							</div>\
							</div>\
							</div>';
							
		button_html = button_html_start;
		if(interview_popup.is_init){
			cnt = 0;
			$.each(interview_popup.button_items.answers , function(key , value){
				cnt++;
				html_item = '<div class="interview_popup_item">\
							<input type="radio" name="answer" value="'+value.id+'" class="ui_input_radio" id="interview_popup_answer_'+value.id+'"'+(cnt == 1 ? 'checked="checked"' : '')+'>\
								<label for="interview_popup_answer_'+value.id+'">'+value.title+'</label>\
							</div>';
				//console.log($(button_html).find('div#interview_popup_mider'));
				button_html += html_item;
			});
			button_html += button_html_end;
		}
		return button_html;
	},
	
	show_button: function(){
		$('body').append(interview_popup.generate_html());
		$('#interview_popup').animate({
			left : "+=236px"
		} , 1000);
	},
	
	close_button: function(){
		//$.cookie('interview_popup_'+interview_popup.button_items.id+'_closed' , 1 , {expires: 3650, path: "/"});
		$('#interview_popup').remove();
		if(typeof popup_manager !== 'undefined'){
			popup_manager.sequence.readmore.on_close();
		}
	}
};


$(document).ready(
	function(){
		interview_popup.init();
	}
);

