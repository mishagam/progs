//Функции

function inArray(needle, haystack) {
    var length = $.len(haystack);
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

function cool_number(v) {
	if(v < 10000){
		return number_format(v, (v == parseInt(v) ? 0 : 2), ',', '');
	}
	else{
		return number_format(v, (v == parseInt(v) ? 0 : 2), ',', ' ');
	}
}

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}


function isEmail(mail) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(mail);
}

function onlyName(stringer) {  
     return stringer.replace(/[^\йцукеёнгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-]/ig, ""); 
}

function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)] ];
}

function supportsStorage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

function parseUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a;
}

function loadUrlVar(link, sVar) {
  return decodeURI(link.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function validateUrl(value){
      return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}

function testImage(URL, goodf, badf) {
	try {
		var img = new Image();
		img.src = URL;
		if (img.height > 0) {
			goodf(img.width, img.height);
		} else {
			img.onload = function() {
				goodf(img.width, img.height);
			};
			img.onerror=badf;
		}
	} catch(err) {
		badf();
	}
}

function del_port(id) {
	if (confirm('Вы действительно хотите удалить это?')) {
		location.replace(id); 
	}
	return false;
}

//Прототип очереди

var Queue = function () {
    this.members = [];
	this.block = false;
	this.execblock = false;
};
Queue.prototype = {
    add: function (f) {
        if (f instanceof Function) {
            this.members.push(f);
        }
    },
    iterate: function (mode) {
        if (this.execblock == false && this.block == false && this.members.length > 0) {
			this.execblock = true;
            var func = this.members.shift();
            func.call(this);
			if (typeof mode == 'undefined' || mode == false) {
				this.unblock();
			}
			return true;
        } else {
			return false;
		}
    },
	unblock: function(mode) {
		this.execblock = false;
		this.iterate(mode);
	},
    iterate_all: function (mode) {
        if (this.block == false && this.members.length > 0) {
            var check = true;
			do {
				check = this.iterate(mode);
			} while (this.members.length > 0 && check == true);

        }
    },
    clear: function () {
        this.members = [];
    },
    block_all: function () {
        this.block = true;
    },
    unblock_all: function () {
        this.block = false;
    }
};

//Работа с биби
//return text.replace( /\[(([a-z0-9]+)(?:(?:\=|\s)([^\]]+))?)\](.*)/gi, function( all, tagAttr, tag, attr, end ) {
function parseBBCode( text ) {
	return text.replace( /\[((b|i|h1|center|justify|img|video|url|blockquote|slider)(?:(?:\=|\s)([^\]]+))?)\](.*)/gi, function( all, tagAttr, tag, attr, end ) {
		var re = new RegExp( "(.*?)(\\[\\/(" + tag + ")\\]|\\[([a-z]+.*?)\\])(.*)", "i" );
		return parseBBCode( end.replace( re, function( subAll, content, tags, closeTag, openTag, subEnd ) {
			if ( openTag ) {
				return '[' + tagAttr + ']' + parseBBCode( subAll );
			} else {

				// tag - содержит имя тега BBCode
				// tagAttr - содержит и тег и его атрибут(ы)
				// attr - трибут(ы) текущего тега
				// content - собственно содержимое этого тега

				//alert( [ tagAttr, content, closeTag ].join("\n") );
				
				if (tag == 'img') {
					var sizes = ['auto', 'auto'];
					attr = attr || '';
					if (attr.length > 0) {
						var p = attr.split('x');
						if ($.len(p) == 2) {
							sizes[0] = parseInt(p[0])+'px';
							sizes[1] = parseInt(p[1])+'px';
						}
					}
					return '<' + tag + ' src="'+content+'" style="width:'+sizes[0]+';height:'+sizes[1]+';">' + subEnd;
					
				} else if (tag == 'url') {
					var link = content;
					if (attr.length > 0) {
						link = attr;
					}
					return '<a href="'+link+'" target="_blank">' + content + '</a>' + subEnd;
					
				} else if (tag == 'video') {
				
					var sizes = ['760', '400'];
					attr = attr || '';
					if (attr.length > 0) {
						var p = attr.split('x');
						if ($.len(p) == 2) {
							sizes[0] = parseInt(p[0]);
							sizes[1] = parseInt(p[1]);
						}
					}
					var link = parseUrl(content); 
					//парсинг ютуба
					if (link.hostname == 'www.youtube.com' || link.hostname == 'youtube.com' || link.hostname == 'www.youtu.be' || link.hostname == 'youtuюbe') {
						if (loadUrlVar(link, 'v').length > 0) {
							return '<iframe width="'+sizes[0]+'" height="'+sizes[1]+'" src="//www.youtube.com/embed/'+loadUrlVar(link, 'v')+'" frameborder="0" allowfullscreen></iframe>' + subEnd;
						}

					//парсинг вимео
					} else if (link.hostname == 'www.vimeo.com' || link.hostname == 'vimeo.com') {
						if (link.pathname.length > 1) {
							var p = link.pathname;
							if (p[0] != '/') { p = '/' + p; }
							return '<iframe width="'+sizes[0]+'" height="'+sizes[1]+'" src="//player.vimeo.com/video'+p+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' + subEnd;
						}
					}
					return subEnd;
					
				} else if (tag == 'justify') {
					return '<div class="bbcode_justify">' + content + '</div>' + subEnd;
					
				} else if (tag == 'center') {
					return '<div class="bbcode_center">' + content + '</div>' + subEnd;
					
				} else if (tag == 'slider') {
					return '<div class="bbcode_slider">Слайдер из изображений</div>' + subEnd;
					
				} else {
					return '<' + tag + '>' + content + '</' + closeTag + '>' + subEnd;
				}
			}
		}));
	});
}

var checkIfFlashEnabled = function() { 
   var isFlashEnabled = false; 
   // Проверка для всех браузеров, кроме IE 
   if (typeof(navigator.plugins)!="undefined" 
       && typeof(navigator.plugins["Shockwave Flash"])=="object" 
   ) { 
      isFlashEnabled = true; 
   } else if (typeof  window.ActiveXObject !=  "undefined") { 
      // Проверка для IE 
      try { 
         if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) { 
            isFlashEnabled = true; 
         } 
      } catch(e) {}; 
   }; 
   return isFlashEnabled; 
} 

//Вставить флеш-блок со ссылкой
function insert_flash(params, wmode) {

	if (typeof wmode == 'undefined') {
		wmode = 'opaque';
	}
	$('#'+params.block_id).css({width:params.width, height:params.height});
	if (checkIfFlashEnabled() == true) {
		if (typeof params.vars == 'undefined') {
			params.vars = {};
		}
		if (typeof params.url_name_var == 'undefined') {
			params.url_name_var = 'url';
		}
		params.vars[params.url_name_var] = encodeURIComponent(params.url);
		new swfobject.embedSWF(params.swf, params.block_id, params.width, params.height, "10.0.0", "/swf/expressInstall.swf", params.vars, {wmode:wmode}, false);
	} else {
		$('#'+params.block_id).html('<a href="" target="_blank" rel="nofollow" style="font-size:0px"><img src="'+params.img+'"></a>');
		$('#'+params.block_id+' a').attr('href', params.url);
	}

}

(function($) {

//Посчитаем количество элементов объекта
$.len = function(obj) {
	var L=0;
		$.each(obj, function(i, elem) {
		L++;
		});
		return L;
};

$.fn.img_ready = function(func) {
	var img = new Image();
	img.src = $(this).attr('src');
	if (img.height > 0) {
		func(img.width, img.height);
	} else {
		img.onload = function() {
			func(img.width, img.height);
		};
	}

};

$.fn.kcaptcha_update = function() {
	return this.each(function() {
		$(this).attr('src', '/kcaptcha.php?' + Math.round((Math.random()*1000000)));
	});
};

$.fn.getSelection = function() {

	var e = (this.jquery) ? this[0] : this;
	return (

		/* mozilla / dom 3.0 */
		('selectionStart' in e && function() {
			var l = e.selectionEnd - e.selectionStart;
			return { start: e.selectionStart, end: e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l) };
		}) ||

		/* exploder */
		(document.selection && function() {
			e.focus();
			var r = document.selection.createRange();
			if (r === null) {
				return { start: 0, end: e.value.length, length: 0 }
			}
			var re = e.createTextRange();
			var rc = re.duplicate();
			re.moveToBookmark(r.getBookmark());
			rc.setEndPoint('EndToStart', re);

			return { start: rc.text.length, end: rc.text.length + r.text.length, length: r.text.length, text: r.text };
		}) ||

		/* browser not supported */
		function() { return null; }
	)();

};

$.fn.replaceSelection = function(text) {

	var e = (this.jquery) ? this[0] : this;
	return (
		/* mozilla / dom 3.0 */
		('selectionStart' in e && function() {
			e.value = e.value.substr(0, e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length);
			return this;
		}) ||

		/* exploder */
		(document.selection && function() {
			e.focus();
			document.selection.createRange().text = text;
			return this;
		}) ||

		/* browser not supported */
		function() {
			e.value += text;
			return jQuery(e);
		}
	)();
};

$.fn.setSelection = function(start, end) {

	var e = (this.jquery) ? this[0] : this;
	e.focus();
	if(e.setSelectionRange) {
		e.setSelectionRange(start, end);
	} else if(e.createTextRange) {
		e = e.createTextRange();
		e.collapse(true);
		e.moveEnd('character', end);
		e.moveStart('character', start);
		e.select();
	}
};

})(jQuery);