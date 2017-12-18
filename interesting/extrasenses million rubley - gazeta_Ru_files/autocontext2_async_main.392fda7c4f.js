(function (){
	var doc = document,
		script = doc.createElement('script'),
		head = doc.head;
	if (!head) {
		return;
	}

	var initializer = function() {
		var blockElements = doc.getElementsByClassName('begun_ad_block'),
			blocksLength = blockElements.length;

		for (var i = 0; i < blocksLength; i++) {
			var blockEl = blockElements[i];

			if (blockEl.getAttribute('begun-initialized'))
				continue;

			var key = blockEl.getAttribute('begun-callback-key');

			if (key) {
				Begun.Autocontext.showAd(blockEl, key);
				blockEl.setAttribute('begun-initialized', true);

			} else {
			
				var params = {};
				for (var j = 0; j < blockEl.attributes.length; j++) {
					var attr = blockEl.attributes[j];

					if (attr.name == "params" || /^begun-/.test(attr.name)) {
						params[attr.name] = attr.value;
					}
				}

				blockEl.setAttribute('begun-initialized', true);
				params['begun-parent-elt'] = blockEl.parentNode;

				Begun.Autocontext.addBlock(params, (function (el) {
					return function(p, i, b) { Begun.Autocontext.showAd(el, i); }
				})(blockEl));
			}
		}
	};

	if (window.Begun && Begun.Autocontext) {
		initializer();

	} else {
		window.begun_callbacks = { "lib" : { "init" : initializer } };
		window.begun_urls = window.begun_urls || {
			"base_scripts_url": "//autocontext.price.ru/",
			"daemon": "//autocontext.price.ru/context.jsp?wl=price&",
			"rtb_daemon": "//rtb.price.ru",
			"thumbs": "//thumbs.price.ru"
		};

		script.setAttribute('type', 'text/javascript');
		script.setAttribute('async', true);
		script.setAttribute('src', '//ssp.rambler.ru/acp/capirs_main.edccf846b8.js');
		head.appendChild(script);
	}
})();
