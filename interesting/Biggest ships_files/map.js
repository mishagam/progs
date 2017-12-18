/* Карта */

var map;

$(function(){

	//Стилизация иконок

	function MapLocationIcon(id, lat, lng, html, href, title){
		this.lat_ = lat;
		this.lng_ = lng;
		this.id_ = id;
		this.title_ = title;
		this.html_ = html;
		this.href_ = href;
		this.pos = new google.maps.LatLng(lat, lng);
	}

	MapLocationIcon.prototype = new google.maps.OverlayView();
	MapLocationIcon.prototype.onRemove= function(){

	}

	//prepare the overlay with DOM
	MapLocationIcon.prototype.onAdd = function(){
		var marker = this;
		var a = document.createElement('A');
		$(a).attr('title', this.title_);
		$(a).attr('href', this.href_);
		$(a).attr('id', this.id_ + '_marker');
		$(a).addClass('b_marker');
		$(a).html('<span>'+this.html_+'</span>');

		$(a).click(function() {

			if (typeof map.infobox != 'undefined') {
				map.infobox.close();
				google.maps.event.trigger(map.infobox, 'closeclick');
			}
			$(a).addClass('b_marker_active');
			InfoBubble.prototype.PIXEL_OFFSET = -40;
			map.infobox = new InfoBubble({
				map: map.gmap,
				position: new google.maps.LatLng(marker.lat_, marker.lng_),
				padding: 0,
				backgroundColor: 'rgb(255,255,255)',
				borderRadius: 0,
				shadowStyle: 0,
				minWidth: 330,
				minHeight: 390,
				maxHeight: 390,
				maxWidth: 330,
				arrowSize: 15,
				arrowPosition: 25,
				disableAutoPan: false
			});
			var box_href = $(this).attr('href');
			$.ajax($(this).attr('href'), {
				data:{'filter':map.filter.join(',')},
				type:"GET",
				context: map.infobox
			}).done(function(data){
				eval('data = ' + data + ';');
				//console.log(this);
				var html = map.form_articles_html(data , box_href);
				this.setContent('<div class="infobox_title"><div class="infobox_title_left">'+data.all_count+' '+declOfNum(data.all_count, ['статья', 'статьи', 'статей'])+'</div><a href="javascript://" onclick="map.close_infobox();" class="infobox_title_right" title="Закрыть"><img src="/templates/images/map/infobox_close.png"></a><div class="clearboth"></div></div><div class="infobox_container">'+html+'</div>');
				this.open();				
				google.maps.event.addListener(this, "closeclick" , function(){
					$(a).removeClass('b_marker_active');
				});
			});

			return false;
		});
		this.getPanes().overlayImage.appendChild(a);
	}

	//set position
	MapLocationIcon.prototype.draw = function(){
		var overlayProjection = this.getProjection();
		var position = overlayProjection.fromLatLngToDivPixel(new google.maps.LatLng(this.lat_, this.lng_));
		var panes = this.getPanes();
		$(panes.overlayImage).find('#'+this.id_+'_marker').css({
		left: (position.x - 13),
		top: (position.y - 38),
		position: 'absolute'
		});
	}


	//Движок карты 
	
	map = {
		is_opened: false,
		is_init : false,
		markers : {},
		filter : [],
		
		init : function(func) {
		
			if (map.is_init == true) {
				func();
			} else {
				$.ajax({
					type: "GET",
					url: '/ajax/?mode=geo_counters',
					data: {},
					cache : false,
					timeout:20000,
					success: function(data) {
						eval('var data = ' + data + ';');
						map.markers = data;
						for (var i in map.markers) {
							map.markers[i].id = i;
						}
						map.is_init = true;
						func();
					},
					error: function() {
						api2_box.alert('Ошибка соединения с сервером. Попробуйте еще раз.');
					}
				});
			}
		},
		
		//Закрыть текущий инфобокс
		close_infobox : function() {
			if (typeof map.infobox != 'undefined') {
				map.infobox.close();
				google.maps.event.trigger(map.infobox, 'closeclick');
			}
		},
		
		//Разместить маркер на карте
		add_marker : function(id) {

			if (typeof map.markers[id] != 'undefined') {
				map.markers[id].marker = new MapLocationIcon(id, map.markers[id].lat, map.markers[id].lng, map.markers[id].total, '/ajax/?mode=geo_articles&country_id='+id, map.markers[id].name);	
				map.markers[id].marker.setMap(map.gmap);
			}
		},
		
		//Хтмл карты общий
		form_html : function() {
		
			var html = '<div class="map_container"><div class="map_div_title"><table class="map_table_title" cellspacing="0"><tr><td class="map_table_title_left"><div><div class="map_table_title_left_1">Фильтр разделов:</div><div class="map_table_title_left_2">';
			html += '<div class="map_module_filter"><input type="checkbox" id="map_module_filter_245" data-filter-id="245" class="map_module_filters" onchange="map.check_filters();"><label for="map_module_filter_245">Путешествия</label></div>';
			//html += '<div class="map_module_filter"><input type="checkbox" id="map_module_filter_279" data-filter-id="279" class="map_module_filters" onchange="map.check_filters();"><label for="map_module_filter_279">События</label></div>';
			html += '<div class="map_module_filter"><input type="checkbox" id="map_module_filter_283" data-filter-id="283" class="map_module_filters" onchange="map.check_filters();"><label for="map_module_filter_283">Фото дня</label></div>';
			html += '<div class="map_module_filter"><input type="checkbox" id="map_module_filter_299" data-filter-id="299" class="map_module_filters" onchange="map.check_filters();"><label for="map_module_filter_299">Новости</label></div>';
			html +='<div class="clearboth"></div></div><div class="clearboth"></div></div></td><td class="map_table_title_right"><div><a href="javascript://" onclick="api2_box.close_box(\'map\');" class="map_table_title_close_left">Закрыть карту</a><a href="javascript://" onclick="api2_box.close_box(\'map\');" class="map_table_title_close_right"><img src="/templates/images/box/close.png"></a><div class="clearboth"></div></div></td></tr></table></div><div id="map_google_container" style="width:100%"></div></div>';
			return html;
		},
		
		check_filters : function() {
		
			var filter = [];
			$('.map_module_filter input').each(function() {
				if ($(this).is(':checked')) {
					filter.push($(this).attr('data-filter-id'));
				}
			});
			map.apply_filters_engine(filter);
		
		},
		
		apply_filters_engine : function(filter) {
			map.filter = filter;
			map.close_infobox();
			for (var i in map.markers) {
				var count = 0;
				if($.len(map.filter) == 0) {
					count = map.markers[i].total;
				} else {
					for (var g in map.markers[i].info) {
						if (inArray(g, map.filter) == true) {
							count += map.markers[i].info[g];
						}
					}
				}
				$('#'+map.markers[i].id+'_marker span').html(count);
				if(count == 0){
					$('#'+map.markers[i].id+'_marker').hide();
				}
				else{
					$('#'+map.markers[i].id+'_marker').show();
				}
			}
			
		},
		
		apply_filters : function() {
		
		
		},
		
		//Хтмл статей в инфобокс
		form_articles_html : function(data , box_href) {
		
			var html = '';
			for (var i in data.list) {
				html += '<div class="infobox_article"><table class="infobox_article_top" cellspacing="0"><tr>';
				if (data.list[i].file_preview != "0") {
					html += '<td class="infobox_article_top_left"><a href="/'+data.list[i].module_url+'/view/'+data.list[i].seo_url_name+'_'+data.list[i].id+'/" target="_blank"><img src="'+data.list[i].file_preview_way+'"></a></div>';
				}
				html += '<td class="infobox_article_top_right"><div class="infobox_article_module">'+data.list[i].module_title+'</div><a href="/'+data.list[i].module_url+'/view/'+data.list[i].seo_url_name+'_'+data.list[i].id+'/" target="_blank" class="infobox_article_title">'+data.list[i].name+'</a></td></tr></table>';
				html += '<div class="infobox_article_preview">'+data.list[i].preview+'</div>';
				html += '</div>';
			}
			if(data.pages.nowpage != data.pages.allpages){
				html += '<div class="infobox_article_loadmore"><a data-href="'+box_href+'" href="javascript://" data-nxp="'+data.pages.nx_p+'" onclick="map.infobox_loadmore(this, \''+box_href+'\' , '+data.pages.nx_p+');" class="infobox_article_loadmore_link">Загрузить еще</a></div>'
			}
			return html;
		},
		
		infobox_loadmore : function(button, box_href, page){
			$.ajax(box_href, {
				data:{'filter':map.filter.join(',') , 'page' : page},
				type:"GET",
				context: map.infobox
			}).done(function(data){
				eval('data = ' + data + ';');
				var html = map.form_articles_html(data, box_href);
				$(button).closest('.infobox_container').append(html);
				$(button).closest('.infobox_article_loadmore').remove();
			});
		},
		
		show : function(options) {
			if(map.is_opened == true){
				return false;
			}
			else{
				map.is_opened = true;
			}
			
			var default_options = {
				open_country : false
			};
			options = $.extend(default_options, options);
			api2_box.show_loader();
			map.init(function() {
				api2_box.close_loader();
				
				api2_box.box({
					type : 'html',
					html : map.form_html(), 
					id : 'map',
					resize_event : function() {
						$('.map_container').css({'min-height':$(window).height(), 'width':$(window).width()});
						$('#map_google_container').css({'height':($(window).height() - 60)});
						if (typeof map.gmap != 'undefined') {
							google.maps.event.trigger(map.gmap, 'resize');  
						}
					},
					close_event : function() {
						api2.close_hash();
						map.is_opened = false;
					},				
					focus_event : function() {
						window.location.hash = '#map';
					}
					
				});
				
				map.map_center = new google.maps.LatLng(55.7496, 37.6237);
				map.gmap = new google.maps.Map(document.getElementById("map_google_container"), {
					center: map.map_center,
					zoom: 3,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					disableDefaultUI: true
				});
				
				for (var i in map.markers) {
					map.add_marker(i);
				}
				
				//Применяем фильтры
				
				if (options.open_country != false) {
					google.maps.event.addListenerOnce(map.gmap, 'tilesloaded', function(){
						$('#'+options.open_country+'_marker').trigger('click');
					});
				}
			});
		}
	};
});