(function( $ ) {
		var multipage = {
			object: false,
			now_page: 1,
			is_blocked: false,
			init: function(object){
				this.object = object;
				object.html(
					'<div class="multipage_wrap">\
						<div class="multipage_liner">\
							<div class="multipage_liner_c">\
								<a class="multipage_prev_page" href="javascript://"><img src="/templates/images/multipage/left.png" height="16" width="16">\
								</a>\
								<a class="multipage_next_page" href="javascript://"><img src="/templates/images/multipage/right.png" height="16" width="16">\
								</a>\
								<div class="multipage_page_wrap">\
								<span class="multipage_now_page">'+this.now_page+'</span> из <span class="multipage_max_page">'+this.settings.last_page+'</span>\
								</div>\
								<div class="clearboth"></div>\
							</div>\
						</div>\
					</div>'
				);
				
				this.object.find('.multipage_prev_page').click(
					function(){
						multipage.choose_page(-1);
						return false;
					}
				);
				
				this.object.find('.multipage_next_page').click(
					function(){
						multipage.choose_page(1);
						return false;
					}
				);
			},
			choose_page: function(offset){
				if(this.now_page + offset <= this.settings.last_page && this.now_page + offset >= 1 && !this.is_blocked){
					this.is_blocked = true;
					$.ajax({
						url: multipage.settings.url,
						data: {
							page: this.now_page + offset
						},
						type: 'get',
						timeout: 100000,
						dataType: 'json',
						cache:false,
						success: function (data) {
							if(data.success == 1){
								$('#'+multipage.settings.content_container).html(data.content);
								multipage.now_page = multipage.now_page + offset;
								multipage.change_url_page(multipage.now_page);
								multipage.object.find('.multipage_now_page').html(multipage.now_page);
								
							}
							multipage.is_blocked = false;
						},
						error: function(){
							multipage.is_blocked = false;
						}
					});
				}
				return false;
			},
			
			change_url_page: function(page){
				if (typeof history != 'undefined' && history.replaceState) {
					url = multipage.settings.item_base_url + page + '/';
					history.replaceState('', document.title, url);
				}
			}
		};
		
		$.fn.multipage = function(now_page, settings){
			multipage.now_page = now_page;
			multipage.settings = settings;
			multipage.init(this);
		}
	}
)(jQuery);