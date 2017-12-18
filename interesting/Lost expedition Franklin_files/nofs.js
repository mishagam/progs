
var scrolled_nofs;

(function($) {

	scrolled_nofs = {
		
		allow_show_left_block : false,
		allow_show_right_block : false,
		allow_show_reger : false,
		now_mode : 1,
		now_right_block_mode : 1,
		
		init : function() {
		
			//Регер влево
			if (api2.is_auth == false) {
				$('#all').prepend('<div id="scrolled_nofs_left" style="display:none; position:fixed; z-index:30; width:160px; height:154px; margin-left:-220px; top:150px;"><a href="javascript://" onclick="return api2_events.show_box_registration();" style="font-size:0px"><img src="/templates/images/nofs/enter1.png" style="display:block"></a></div>');
				scrolled_nofs.allow_show_left_block = true;
			}
			if ($('.standart_table_right').length > 0) {
				$('.standart_table_right').first().append('<div id="scrolled_nofs_right" style="display:none;"><div class="holder"></div><div class="container" style="z-index:30; width:300px;"></div></div>');
				
				//Баннеры вправо если есть
				if ($('.nofs_banner_scrolled').length > 0) {
					$('.nofs_banner_scrolled').each(function() {
						var element = $(this).detach();
						$('#scrolled_nofs_right .container').append(element);
					});
					scrolled_nofs.allow_show_right_block = true;
				}
				//Регер вправо
				if (scrolled_nofs.allow_show_reger == true) {
					$('#scrolled_nofs_right .container').append('<div class="reger standart_right_margintop" style="height:84px; text-align:center;"><a href="javascript://" onclick="return api2_events.show_box_registration();" style="font-size:0px"><img src="/templates/images/nofs/enter2.png"></a></div>');
					scrolled_nofs.allow_show_right_block = true;
				}
				
			} else {
				scrolled_nofs.allow_show_right_block = false;
			}
			if (scrolled_nofs.allow_show_left_block == true || scrolled_nofs.allow_show_right_block == true) {
				scrolled_nofs.init_show();
				$(window).resize(function() {
					scrolled_nofs.init_show();
				});
				$(window).scroll(function() {
					scrolled_nofs.check_scroll();
				});
			}
		},
		
		init_show : function() {
		
			$('#scrolled_nofs_left, #scrolled_nofs_right').css('display', 'none');
			if (scrolled_nofs.allow_show_left_block == true && $(window).width() >= 1540) {
				$('#scrolled_nofs_left').css('display', 'block');
				$('#scrolled_nofs_right .reger').css('display', 'none');
				scrolled_nofs.now_mode = 1;
			} else if (scrolled_nofs.allow_show_right_block == true) {
				$('#scrolled_nofs_right').css('display', 'block');
				$('#scrolled_nofs_right .reger').css('display', 'block');
				scrolled_nofs.now_mode = 2;
			}
			
			if (scrolled_nofs.allow_show_right_block == true) {
				$('#scrolled_nofs_right').css('display', 'block');
				scrolled_nofs.check_scroll();
			}
			
		},
		
		check_scroll : function() {
			if (scrolled_nofs.allow_show_right_block == true) {
				var tmp_mode;
				if ($(document).scrollTop() > $('#scrolled_nofs_right .holder').offset().top) {
					tmp_mode = 2;
				} else {
					tmp_mode = 1;
				}
				
				if (($('#scrolled_nofs_right .container').position().top + $('#scrolled_nofs_right .container').height()) >= $('#footer').offset().top) {
					$('#scrolled_nofs_right .container').css({
						'display':'none'
					});
				} else {
					$('#scrolled_nofs_right .container').css({
						'display':'block'
					});
				}
				
				if (scrolled_nofs.now_right_block_mode == 2 && tmp_mode == 1) {
					$('#scrolled_nofs_right .container').css({
						'position':'relative',
						'top':0
					});
				} else if (scrolled_nofs.now_right_block_mode == 1 && tmp_mode == 2) {
					$('#scrolled_nofs_right .container').css({
						'position':'fixed',
						'top':0
					});
				}
				scrolled_nofs.now_right_block_mode = tmp_mode;
			}
		}
	};

	$(document).ready(function(){
		$('.nofs_container .nofs_banner_standart_item a, .nofs_container .nofs_banner_html_item a').each(function() {
			$(this).attr('target', '_blank');
		});
	});

})(jQuery);