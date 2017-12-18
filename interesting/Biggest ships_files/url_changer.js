var url_changer = {
	blocks_urls: [],
	now_url: '',
	scroll_position: 0,
	init: function(blocks_urls){
		$.each(blocks_urls, function(key, value){
			//console.log(value);
			url_changer.add_block(value.id, value.url);
		});
		url_changer.now_url = document.location.pathname;
		url_changer.scroll_position =  $(window).scrollTop() + $(window).height() / 2;
		$(window).scroll(url_changer.check_scroll);
	},
	add_block: function(id, url){
		url_changer.blocks_urls.push(
			{
				id: id,
				url: url,
			}
		);
	},
	check_scroll: function(){
		url_changer.scroll_position =  $(window).scrollTop() + $(window).height() / 2;
		var candidates = [];
		$.each(url_changer.blocks_urls, function(key, value){
			offset_top = $('#'+value.id).offset().top + $('#'+value.id).height()/2;
			candidates[key] = Math.abs(url_changer.scroll_position - offset_top);
		});
		
		winner = false;
		winner_id = false;
		
		$.each(candidates , function(key,value){
			if(winner === false || value < winner){
				winner = value;
				winner_id = key;
			}
		});
		
		if(winner_id !== false){
			url_changer.change_url(url_changer.blocks_urls[winner_id].url);
		}

		return false;
	},
	change_url: function(url){
		if(url != url_changer.now_url){
			if (typeof history != 'undefined' && history.replaceState) {
				history.replaceState('', document.title, url);
				url_changer.now_url = url;
			}
		}
	}
}