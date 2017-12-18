(function($) {

$.fn.placeholder = function() {
	var placeholder_support = !!('placeholder' in document.createElement( 'input' ));
	if (!placeholder_support || $.browser.opera) {
		return this.each(function() {
			if (!$(this).hasClass('ui_placeholder')) {
				var t = this;
				t.textplace = $(t).attr('placeholder');
				if (placeholder_support) {
					$(t).attr('placeholder', '');
				}
				t.show_placeholder = function() {
					if (!$(t).hasClass('ui_placeholdered')) {
						$(t).addClass('ui_placeholdered');
						$(t).parent().prepend('<div class="ui_placeholdered_under ui_clear">'+t.textplace+'</div>');
						$(t).parent().find('.ui_placeholdered_under').click(function() {
							$(t).focus();
						});
					}
				};
				t.hide_placeholder = function() {
					if ($(t).hasClass('ui_placeholdered')) {
						$(t).removeClass('ui_placeholdered');
						$(t).parent().find('.ui_placeholdered_under').remove();
					}
				};
				$(this).addClass('ui_placeholder');
				if ($(this).val().length == 0) {
					t.show_placeholder();
				}
				$(this).focusout(function() {
					if ($(this).val().length == 0) {
						t.show_placeholder();
					}
				});
				$(this).bind('change keyup', function() {
					if ($(this).val().length == 0) {
						t.show_placeholder();
					} else {
						t.hide_placeholder();
					}
				});
			}
		});
	}
};

})(jQuery);