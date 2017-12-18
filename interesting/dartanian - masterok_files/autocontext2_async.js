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
	script.setAttribute('src', (window.location.protocol == 'https:' ? 'https:' : 'http:') + '//autocontext.begun.ru/acp/autocontext2_async_main.3df916a2e3.js');
	head.appendChild(script);
})();