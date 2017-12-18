/* Сквозная корзина */

var shop_scroll_basket;

$(function(){

	shop_scroll_basket = {
		
		goods_c : 0,
		price : 0,
		window_resize_timer : 0,
		show : false,
		
		init : function(goods_c, price) {
		
			shop_scroll_basket.show = true;
			shop_scroll_basket.goods_c = goods_c;
			shop_scroll_basket.price = price;
			shop_scroll_basket.draw();
			
			$(window).resize(function() {
				clearTimeout(shop_scroll_basket.window_resize_timer);
				shop_scroll_basket.window_resize_timer = setTimeout(function() {
					shop_scroll_basket.check_position();
				}, 50);
			});
		},
		
		reinit : function(goods_c, price) {
		
			shop_scroll_basket.goods_c = goods_c;
			shop_scroll_basket.price = price;
			shop_scroll_basket.draw();
		},
		
		draw : function() {
		
			if (shop_scroll_basket.show == true) {
				if ($('#shop_scroll_basket').length > 0) {
					$('#shop_scroll_basket').remove();
				}
				
				if (shop_scroll_basket.goods_c > 0) {
					$('#all').prepend('<div id="shop_scroll_basket"><div id="shop_scroll_basket_c"><div id="shop_scroll_basket_cc"><table class="top_table" cellspacing="0"><tr><td class="left"><div></div></td><td class="right">У вас '+shop_scroll_basket.goods_c+' '+declOfNum(shop_scroll_basket.goods_c, ['товар', 'товара', 'товаров'])+'</td></tr></table><div class="mid">сумма:<span>'+cool_number(shop_scroll_basket.price)+' руб.</span></div><div class="bot"><a href="/shop/basket/">Оформить</a></div><a href="/shop/basket/" class="linker">&nbsp;</a></div></div></div>');
					shop_scroll_basket.check_position();
				}
			}
		},
		
		check_position : function() {
		
			if ($('#shop_scroll_basket').length > 0) {
				var min_width = $('#all').width() + (230*2);
				if ($(window).width() < min_width) {
					$('#shop_scroll_basket_c').css('right', '0');
				} else {
					$('#shop_scroll_basket_c').css('right', 'auto');
				}
			}
		}
	
	};

});