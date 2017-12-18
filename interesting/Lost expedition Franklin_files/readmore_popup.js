var readmore_popup = {
	button_showed: false,
	is_init: false,
	button_items : {},
	button_html: '<div id="readmore_popup">\
		<div id="readmore_popup_topper">\
			<div id="readmore_popup_topper_caption">Читайте также</div>\
			<div id="readmore_popup_topper_close_wrap"><a style="font-size:0px;" href="javascript://" onclick="readmore_popup.close_button()"><img src="/templates/images/readmore_popup/close.png"></a></div>\
			<div class="clearboth"></div>\
		</div>\
		<div id="readmore_popup_mider">\
		</div>\
	</div>',
	init: function(button_items){
		if(!readmore_popup.is_init){
			//if($.cookie('readmore_popup_'+button_items.id+'_closed') == null){
			/*	if($.cookie('readmore_popup_'+button_items.id+'_start_time') == null){
					var start = new Date;
					$.cookie('readmore_popup_'+button_items.id+'_start_time' , start.getTime() , {expires: 3650, path: "/"});
				}*/
				
				//setInterval(readmore_popup.check_timer , 2000);
				readmore_popup.is_init = true;
				readmore_popup.button_items = button_items;		
				popup_manager.sequence.readmore = readmore_popup;
				/*
				if(!readmore_popup.button_showed){
					readmore_popup.render();
				}*/
			//}

		}
	},
	
	render: function(){
		readmore_popup.button_showed = true;
		readmore_popup.show_button();
	},
		
	check_timer: function(){
		//start = $.cookie('readmore_popup_'+readmore_popup.button_items.id+'_start_time');
		//now = new Date;
		if(/*((now.getTime() - start) >= 60000) &&*/ !readmore_popup.button_showed){
			readmore_popup.button_showed = true;
			readmore_popup.show_button();
		}
	},
	
	generate_html: function(){
		button_html_start = '<div id="readmore_popup">\
		<div id="readmore_popup_topper">\
			<div id="readmore_popup_topper_caption">Читайте также</div>\
			<div id="readmore_popup_topper_close_wrap"><a style="font-size:0px;" href="javascript://" onclick="readmore_popup.close_button()"><img src="/templates/images/readmore_popup/close.png"></a></div>\
			<div class="clearboth"></div>\
		</div>\
		<div id="readmore_popup_mider">';
		
		button_html_end = '</div>\
							</div>';
							
		button_html = button_html_start;
		if(readmore_popup.is_init){
			$.each(readmore_popup.button_items.objects , function(key , value){
				html_item = '<div class="readmore_popup_item">\
								<div class="readmore_popup_item__header"><a href="'+value.href+'" target="_blank" rel="nofollow">'+value.title+'</a></div>\
								<div class="readmore_popup_item__preview"><a href="'+value.href+'" target="_blank" rel="nofollow">'+value.html_body+'</a></div>\
							</div>';
				//console.log($(button_html).find('div#readmore_popup_mider'));
				button_html += html_item;
			});
			button_html += button_html_end;
		}
		return button_html;
	},
	
	show_button: function(){
		$('body').append(readmore_popup.generate_html());
		$('#readmore_popup').animate({
			left : "+=236px"
		} , 1000);
	},
	
	close_button: function(){
		//$.cookie('readmore_popup_'+readmore_popup.button_items.id+'_closed' , 1 , {expires: 3650, path: "/"});
		$('#readmore_popup').remove();
		if(typeof popup_manager !== 'undefined'){
			popup_manager.sequence.readmore.on_close();
		}
	}
};
