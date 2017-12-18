/* Аналитика магазина */

var shop_analytics;

$(function(){

	shop_analytics = {
		basket_added : function(good) {
			ga('shop.ec:addProduct', {
				'id': good.id,
				'name': good.name
			});
			ga('shop.ec:setAction', 'add');
			ga('shop.send', 'event', 'UX', 'click', 'add to cart');     
		},
		
		basket_removed : function(good, func) {
			ga('shop.ec:addProduct', {
				'id': good.id,
				'name': good.name
			});
			ga('shop.ec:setAction', 'remove');
			ga('shop.send', 'event', 'detail view', 'click', 'removeFromCart', {
				'hitCallback': function() {
					if (typeof func == 'function') {
						func();
					}
				}
			});
     
		}
	};

	$(document).ready(function() {
	
		//Клик по товарам в списках
		$('.shop_analytics_good_object a.good_link').click(function() {

			var that = this;
			var good_object = $(that).closest('.shop_analytics_good_object');
			ga('shop.ec:addProduct', {
				'id': good_object.attr('data-good-id'),
				'name': good_object.attr('data-good-name'),
				'position': parseInt(good_object.attr('data-good-pos'))
			});
			ga('shop.ec:setAction', 'click', {list: good_object.attr('data-good-listname')});
			ga('shop.send', 'event', 'UX', 'click', 'Results', {
				'hitCallback': function() {
					document.location = $(that).attr('href');
				}
			});

			return !ga.loaded;
		});
	
	});

});