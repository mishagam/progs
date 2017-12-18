$.fn.extend(
	{
		ajax_like: function(){
			return this.each(
				function(){
					$(this).click(
						function(){
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
						}
					);
				}
			);
		}
	}
);