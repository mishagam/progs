/* Подгрузка страниц */

var ajax_pageload;

$(function(){
	
	ajax_pageload = {

		vars : {},
		init_vars : {},
		can : true,
		loading : false,
		last_block_id : '',
		counter : 0,
		
		init : function(init_vars) {
		
			ajax_pageload.init_vars = init_vars;
			ajax_pageload.last_block_id = $('.ajax_pageload_block').last().attr('id');
			$('.ajax_pageload_nav').click(function() {
				ajax_pageload.load_next(false);
			});
			$(window).scroll(ajax_pageload.check_scroll);
		},
		
		str_replace : function(str, str2, text) {
			if (text == null || text.length == 0) { return text; }
			var re = new RegExp(str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
			text = text.replace(re, str2);
			return text;
		},
		
		reinit : function(vars) {

			ajax_pageload.vars = vars;
			var need_url = ajax_pageload.str_replace('&ajax_load=true', '', ajax_pageload.vars.url);
			$('.ajax_pageload_nav').attr('href', need_url);
		},
		
		load_next : function(auto) {
		
			if (auto == true && ajax_pageload.counter > 5) {
				return false;
			} else if (auto == false) {
				ajax_pageload.counter = 0;
			}
			if (ajax_pageload.loading == false && ajax_pageload.can == true) {
				ajax_pageload.loading = true;
				$.ajax({
					type: "GET",
					url: ajax_pageload.vars.url,
					data: {},
					timeout:10000,
					success: function(data) {
						ajax_pageload.loading = false;
						$('#'+ajax_pageload.init_vars.container).append(data);
						ajax_pageload.last_block_id = $('.ajax_pageload_block').last().attr('id');
						ajax_pageload.counter += 1;
					},
					error: function() {
						ajax_pageload.loading = false;
					}
				});
			}
		},
		
		stop : function() {
		
			ajax_pageload.can = false;
			$('.ajax_pageload_nav_holder').hide();
			
		},
		
		check_scroll : function() {
		
			if (ajax_pageload.loading == false && ajax_pageload.can == true) {
				if (($(window).scrollTop() + $(window).height()) >= $('#'+ajax_pageload.last_block_id).offset().top) {
					ajax_pageload.load_next(true);
				}
			}
		}
	};
});