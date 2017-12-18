
var header_slider = {

	slides_count : 0,
	slides : [],
	now_index : 0,
	slide_width : 1100,
	block : false,
	block_timeout : false,
	timeout_id : 0,
	timeout : 5000,
 
	//Инициализация
	init : function() {
		$('#header_slider').find('.header_slider_img').each(function() {
			header_slider.slides.push({
				element : $(this),
				index : $(this).index()
			});
			header_slider.slides_count += 1;
		});
		$('#header').mouseenter(function() {
			if (header_slider.block == true) {
				header_slider.block_timeout = true;
			} else {
				header_slider.clear_next_timeout();
			}
		}).mouseleave(function() {
			header_slider.block_timeout = false;
			if (header_slider.block == false) {
				header_slider.start_next_timeout();
			}
		});
		$('#header_slider_left').click(function() { header_slider.change(header_slider.get_last(), 'left'); });
		$('#header_slider_right').click(function() { header_slider.change(header_slider.get_next(), 'right'); });

		$('.header_middle_top_link').css('display', 'block').attr('href', $(header_slider.slides[header_slider.now_index].element).attr('href'));
		
		header_slider.start_next_timeout();
	},
	
	change : function(next_index, mode) {
		if (header_slider.block == true || next_index == header_slider.now_index) {
			return false;
		}
		header_slider.block = true;
		if (typeof mode == 'undefined') {
			mode = 'right';
		}
		var animate_arr_1 = {left:30};
		var animate_arr_2 = {left:(0-header_slider.slide_width), opacity:0};
		var animate_arr_3 = {left:header_slider.slide_width, opacity:0, display:'block'};
		if (mode == 'left') {
			animate_arr_1 = {left:-30};
			animate_arr_2 = {left:(header_slider.slide_width), opacity:0};
			animate_arr_3 = {left:(0-header_slider.slide_width), opacity:0, display:'block'};
		}
		
		$(header_slider.slides[header_slider.now_index].element).css({display:'block'}).animate(animate_arr_1, 340, function() {
		
			setTimeout(function() {
		
				
				$(header_slider.slides[header_slider.now_index].element).animate(animate_arr_2, 1000);			
				$(header_slider.slides[next_index].element).css(animate_arr_3).animate({left:0, opacity:1}, 1000, function() {
					header_slider.now_index = next_index;
					header_slider.block = false;
					if (header_slider.block_timeout == false) {
						header_slider.start_next_timeout();
					}
					$('.header_middle_top_link').css('display', 'block').attr('href', $(header_slider.slides[header_slider.now_index].element).attr('href'));
				});
			
			}, 10);
		});
		return true;
	},
	
	get_next : function() {
		if (header_slider.now_index == (header_slider.slides_count - 1)) {
			return 0;
		} else {
			return (header_slider.now_index + 1);
		}
	},
	
	get_last : function() {
		if (header_slider.now_index == 0) {
			return (header_slider.slides_count - 1);
		} else {
			return (header_slider.now_index - 1);
		}
	},
	
	show_next : function() {
		header_slider.change(header_slider.get_next());
	},
	
	show : function(index) {
		if (index == header_slider.now_index) {
			return false;
		}
		header_slider.clear_next_timeout();
		header_slider.change(index);
		return false;
	},
	
	start_next_timeout : function() {
		header_slider.clear_next_timeout();
		header_slider.timeout_id = setTimeout(function() {
			header_slider.show_next();
		}, header_slider.timeout);
	},
	
	clear_next_timeout : function() {
		clearTimeout(header_slider.timeout_id);
	}
	
 
 };
 
(function($){
	
})($);