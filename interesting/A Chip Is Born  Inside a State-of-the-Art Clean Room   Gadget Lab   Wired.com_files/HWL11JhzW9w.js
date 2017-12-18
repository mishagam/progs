/*
HTTP Host: static.ak.fbcdn.net
Generated: September 23rd 2010 6:34:41 PM PDT
Machine: 10.30.148.192
*/

if (window.CavalryLogger) { CavalryLogger.start_js(["js\/detect_broken_proxy_cache.js"]); }

function detect_broken_proxy_cache(d,a){var b=getCookie(a);if((b!=d)&&(b!=null)&&(d!='0')){var c={c:'si_detect_broken_proxy_cache',m:a+' '+d+' '+b};var e=new URI('/common/scribe_endpoint.php').getQualifiedURI().toString();new AsyncSignal(e,c).send();}}

if (window.Bootloader) { Bootloader.done(["js\/detect_broken_proxy_cache.js"]); }