function clean_mm_addition(){    
	var x = $('rambler-comments-count div.empty_comment');
	for(var i=0; i<x.length; i++){
		var z = x[i];
		var parent_z = $(z).parents('.mm_addition');
		if($(parent_z).children('span').length<2){
			$(parent_z).remove();
		}
	}
	$('.mm_addition').css('visibility', 'visible');
}