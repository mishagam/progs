(function (){
	if (window.Begun&&window.Begun.Asynced) {
		return;
	}
	var doc = document,
		script = doc.createElement('script'),
		head = doc.head;
	if (!head) {
		return;
	}
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('async', true);
	script.setAttribute('src', '//ssp.rambler.ru/acp/capirs_main.01790e9593.js');
	head.appendChild(script);
})();
