(function() {
    var 
        lpdid_cookie,
        lpdid_localStorage;

    window.af_setLpdId = function(data) {
        var 
            date = new Date();
        
        window.af_lpdId = data.lpd_id;

        date.setDate(date.getDate() + 365);

        try {
            document.cookie = 'af_lpdid=' + af_lpdId + ';expires=' + date.toUTCString() + ';path=/';
        }catch(err){}
        try {
            window.localStorage.setItem('af_lpdid', af_lpdId);
        }catch(err){}
    }

    try {
        lpdid_cookie = (lpdid_cookie = document.cookie.match(new RegExp('(?:^|; )af_lpdid=([^;]*)'))) ? decodeURIComponent(lpdid_cookie[1]) : '';
    }catch(err){}
    try {
        lpdid_localStorage = window.localStorage.getItem('af_lpdid') || '';
    }catch(err){}

    window.af_lpdId = lpdid_cookie || lpdid_localStorage || false;

    var doc = document,
	script = doc.createElement('script'),
	head = doc.head;

    if (!head) {
	return;
    }

    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', true);
    script.setAttribute('src', '//ads.adfox.ru/getid?t=jsonp&f=af_setLpdId' + (window.af_lpdId ? '&lpdid=' + window.af_lpdId : '') + '&pr=' + Math.floor(Math.random()*4294967295)+1);
    head.appendChild(script);

})();
