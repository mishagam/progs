var social_reposts;
	
(function($) {

	social_reposts = {
	
		button_index : 0,
		share_index : 0,
		share_funcs : {},
		
		init : function() {
			$('.vk_share_link').each(function() {
				var that = this;
				$(that).attr('title', 'Поделиться ВКонтакте');
				$(that).attr('data-count', 0);
				var url = social_reposts.get_repost_url(that, 'vk');
				social_reposts.count_reposts(url, 'vk', function(count) {
					var now_count = parseInt($(that).attr('data-count'));
					social_reposts.set_count(that, (now_count + count));
				});
				$(that).click(function() {
					var count = parseInt($(this).attr('data-count'));
					social_reposts.set_count(this, (count+1));
					social_reposts.open('https://vk.com/share.php?url='+encodeURIComponent(url.url)+(url.img != false ? '&image='+encodeURIComponent(url.img) : ''));
					return false;
				});
			});
			$('.fb_share_link').each(function() {
				var that = this;
				$(that).attr('title', 'Поделиться в Facebook');
				$(that).attr('data-count', 0);
				var url = social_reposts.get_repost_url(that, 'fb');
				social_reposts.count_reposts(url, 'fb', function(count) {
					var now_count = parseInt($(that).attr('data-count'));
					social_reposts.set_count(that, (now_count + count));
				});
				$(that).click(function() {
					var count = parseInt($(this).attr('data-count'));
					social_reposts.set_count(this, (count+1));
					social_reposts.open('http://www.facebook.com/sharer/sharer.php?p[url]='+encodeURIComponent(url.url));
					return false;
				});
			});
			$('.ok_share_link').each(function() {
				var that = this;
				$(that).attr('title', 'Поделиться в Одноклассниках');
				$(that).attr('data-count', 0);
				var url = social_reposts.get_repost_url(that, 'ok');
				social_reposts.count_reposts(url, 'ok', function(count) {
					var now_count = parseInt($(that).attr('data-count'));
					social_reposts.set_count(that, (now_count + count));
				});
				$(that).click(function() {
					var count = parseInt($(this).attr('data-count'));
					social_reposts.set_count(this, (count+1));
					social_reposts.open('http://connect.odnoklassniki.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl='+encodeURIComponent(url.url));
					return false;
				});
			});
			$('.tw_share_link').each(function() {
				var that = this;
				$(that).attr('title', 'Поделиться в Twitter');
				$(that).attr('data-count', 0);
				var url = social_reposts.get_repost_url(that, 'tw');
				social_reposts.count_reposts(url, 'tw', function(count) {
					var now_count = parseInt($(that).attr('data-count'));
					social_reposts.set_count(that, (now_count + count));
				});
				$(that).click(function() {
					var count = parseInt($(this).attr('data-count'));
					social_reposts.set_count(this, (count+1));
					social_reposts.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(document.title)+'&url='+encodeURIComponent(url.url));
					return false;
				});
			});
		
		},
		
		//Сформировать ссылку для репоста в зависимости от типа
		get_repost_url : function(link, type) {
		
			var url = location.href.split("#")[0];
			url = url.split("?")[0];
			var block;
			if (typeof $(link).attr('data-block') != 'undefined') {
				block = $(link).attr('data-block');
			} else {
				social_reposts.button_index += 1;
				block = 'b'+social_reposts.button_index;
			}
			
			if (type == 'vk') {
				url += '#'+block;
				var img = false;
				if (typeof $(link).attr('data-image') != 'undefined') {
					img = $(link).attr('data-image');
				}
				return {
					url : url,
					img : img
				};
				
			} else if (type == 'fb' || type == 'ok') {
				var img = false;
				if (typeof $(link).attr('data-image') != 'undefined') {
					img = $(link).attr('data-image');
					url += (url.indexOf('?') != -1 ? '&' : '?') + 'og_img='+encodeURIComponent(img);
				}
				url += '#'+block;
				return {
					url : url,
					img : false
				};
			
			} else if (type == 'tw') {
				url += '?rbid='+block+'#'+block;
				var img = false;
				if (typeof $(link).attr('data-image') != 'undefined') {
					img = $(link).attr('data-image');
				}
				return {
					url : url,
					img : img
				};
				
			}
		},
		
		//Получить число уже репостнувших
		count_reposts : function(url, type, func) {
		
			if (type == 'vk') {
				social_reposts.share_index += 1;
				var index = social_reposts.share_index;
				social_reposts.share_funcs['vk'+index] = func;
				$.ajax({
					url: 'http://vk.com/share.php?act=count&index='+index+'&url='+encodeURIComponent(url.url),
					dataType: 'jsonp',
					cache : false
				});
				
			} else if (type == 'fb') {
				$.ajax({
					url: 'http://graph.facebook.com/?id='+encodeURIComponent(url.url),
					dataType: 'jsonp',
					success: function(data, status, jqXHR) {
						if (status == 'success' && data && typeof data.shares != 'undefined') {
							func(parseInt(data.shares));
						} else {
							func(0);
						}
					},
					cache : false
				});
	
			} else if (type == 'tw') {
				$.ajax({
					url: 'http://urls.api.twitter.com/1/urls/count.json?url='+encodeURIComponent(url.url),
					dataType: 'jsonp',
					success: function(data, status, jqXHR) {
						if (status == 'success' && data) {
							func(parseInt(data.count));
						}
					},
					cache : false
				});
	
			} else if (type == 'ok') {
				social_reposts.share_index += 1;
				var index = social_reposts.share_index;
				social_reposts.share_funcs['ok'+index] = func;
				$.ajax({
					url: 'http://ok.ru/dk?st.cmd=extLike&uid=ok'+index+'&ref='+encodeURIComponent(url.url),
					dataType: 'jsonp',
					cache : false
				});
	
			}

			return 0;
		},
		
		vk_custom_share : function(index, value) {
			social_reposts.share_funcs['vk'+index](parseInt(value));
			delete social_reposts.share_funcs['vk'+index];
		},
		
		ok_custom_share : function(index, value) {
			social_reposts.share_funcs[index](parseInt(value));
			delete social_reposts.share_funcs[index];
		},
		
		set_count : function(link, count) {
			$(link).attr('data-count', count);
			$(link).html(count);
		},
		
		open : function(url) {
			window.open(url, 'new', 'width=800,height=500,top=100,left=100,toolbar=0,scrollbars=1');
		}
	
	};
	
	$(document).ready(function() {
		//Костыль ВК
		if (typeof window.VK != 'undefined') {
			if (typeof window.VK.Share != 'undefined') {
				var originalVkCount = window.VK.Share.count;
				window.VK.Share.count = function(index, count) {
					social_reposts.vk_custom_share(index, count);
					originalVkCount.call(window.VK.Share, index, count);
				};
			} else {
				window.VK.Share = {
					count: function(index, count) {
						social_reposts.vk_custom_share(index, count);
					}
				};
			}
		} else {
			window.VK = {
				Share: {
					count: function(index, count) {
						social_reposts.vk_custom_share(index, count);
					}
				}
			};
		}
		//Костыль ОК
		if (typeof window.ODKL == 'undefined') {
			window.ODKL = {
				updateCount: function(index, count) {
					social_reposts.ok_custom_share(index, count);
				}
			};
		} else {
			ODKL.updateCount = function(index, count) {
				social_reposts.ok_custom_share(index, count);
			};
		}
		//Инициализация
		social_reposts.init();
	});

})(jQuery);