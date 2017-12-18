$(document).ready(
	function(){		
	
		$('.program_list_item span').click(
			function(){
				var obj = $(this).closest('.program_list_item');
				if($(obj).hasClass('program_list_item__active')){
					$(obj).find('.program_list_item_preview').hide('fast');
					$(obj).removeClass('program_list_item__active');
				}
				else if(!$(obj).hasClass('program_list_item__active') && !$(obj).hasClass('nocontent')){
					$('.program_list_item__active .program_list_item_preview').hide('fast');
					$('.program_list_item__active').removeClass('program_list_item__active');
					$('.program_list_item__active').find('.program_list_item_preview').show(400);
					$(obj).addClass('program_list_item__active');
					$(obj).find('.program_list_item_preview').show(400);
					
				}
			}
		);
		

	}
);