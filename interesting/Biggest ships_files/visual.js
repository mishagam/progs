

//Удалить теги
function strip_tags(input, allowed) {
  allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
}

//Заменить строку
function str_replace(str, str2, text) {
	if (text == null || text.length == 0) { return text; }
	var re = new RegExp(str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
	text = text.replace(re, str2);
	return text;
}

function str_replace_multu(str, str2, text) {
	if (text == null || text.length == 0) { return text; }
	var p = str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	var re = new RegExp(p, "g");
	text = text.replace(re, str2);
	return text;
}


//Объект для работы с эмоджи
var emoji = {
	
	objs : {
		'i128522' : ["\uD83D\uDE0A", "&#128522;"],
		'i128515' : ["\uD83D\uDE03", "\uD83D\uDE04", "&#128515;", "&#128516;"],
		'i128521' : ["\uD83D\uDE09", "&#128521;"],
		'i128518' : ["\uD83D\uDE06", "&#128518;"],
		'i128540' : ["\uD83D\uDE1C", "\uD83D\uDE1D", "&#128540;"],
		'i128523' : ["\uD83D\uDE0B", "&#128523;"],
		'i128525' : ["\uD83D\uDE0D", "&#128525;"],
		'i128526' : ["\uD83D\uDE0E", "&#128526;"],
		'i128543' : ["\uD83D\uDE1F", "&#128543;"],
		'i128527' : ["\uD83D\uDE0F", "&#128527;"],
		'i128532' : ["\uD83D\uDE14", "&#128532;"],
		'i128546' : ["\uD83D\uDE22", "&#128546;"],
		'i128557' : ["\uD83D\uDE2D", "&#128557;"],
		'i128528' : ["\uD83D\uDE10", "&#128528;"],
		'i128544' : ["\uD83D\uDE20", "&#128544;"],
		'i128519' : ["\uD83D\uDE07", "&#128519;"],
		'i128563' : ["\uD83D\uDE33", "&#128563;"],
		'i128538' : ["\uD83D\uDE1A", "&#128538;"],
		'i128077' : ["\uD83D\uDC4D", "&#128077;"],
		'i128078' : ["\uD83D\uDC4E", "&#128078;"],
		'i128076' : ["\uD83D\uDC4C", "&#128076;"],
		'i9994' : ["\u270A", "&#9994;"],
		'i128690' : ["\uD83D\uDEB2", "&#128690;"],
		'i128181' : ["\uD83D\uDCB5", "&#128181;"],
		'i128591' : ["\uD83D\uDE4F", "&#128591;"],
		'i128131' : ["\uD83D\uDC83", "&#128131;"],
		'i9992' : ["\u2708", "&#9992;"],
		'i128645' : ["\uD83D\uDE84", "\uD83D\uDE85", "&#128645;"],
		'i127864' : ["\uD83C\uDF78", "&#127864;"]
	},
	
	

	replace_emoji : function(text) {
		var i = 0;
		var g = 0;
		for (i in emoji.objs) {
			for (g in emoji.objs[i]) {
				text = str_replace(emoji.objs[i][g], emoji.form_what(i.slice(1, i.length)), text);
			}
		}
		return text;
	},
	
	
	form_what : function(emoji_num) {
		return '<img class="emoji visual_smile emoji'+emoji_num+'" src="//www.moya-planeta.ru/templates/emoji/blank.gif" onmousedown="emoji.event_img_editable(event);" data-emoji="'+emoji_num+'">';
	},
	
	form_utf8 : function(emoji_num) {
		return '&#'+emoji_num+';';
	},
	
	event_img_editable : function(e) {
		if ($.browser.msie) {
			e.preventDefault();
		}
	}
	
};



//Вставить тег в место выделения
function insertSelectionHTML(tag, mode) {
    var sel, range;
    if (typeof window.getSelection != "undefined") {
		sel = window.getSelection();
		if (sel.getRangeAt && sel.rangeCount) {
			range = sel.getRangeAt(0);
			range.deleteContents();
			if (mode == 'text') {
				br = document.createTextNode(tag);
			} else if (mode == 'html') {
				br = $(tag)[0];
			}
			range.insertNode(br);
			range.setEndAfter(br);
			range.setStartAfter(br);
			sel.removeAllRanges();
			sel.addRange(range);
			addedBr = true;
		}
    } else if (typeof document.selection != "undefined") {
		sel = document.selection;
		if (sel.createRange) {
			range = sel.createRange();
			range.pasteHTML(tag);
			range.select();
			addedBr = true;
		}
    }
}




function setCaretToElement(element) {
    var range,selection;
    if(typeof document.createRange != "undefined") {
        range = document.createRange();
		range.selectNode($(element)[0]);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
		
    } else if (typeof document.selection != "undefined") { 
        range = document.body.createTextRange();
        range.moveToElementText($(element)[0]);
        range.collapse(false);
        range.select();
    }
}




//Правильные соседи
function pSibling(el) {
	var pS = el.previousSibling;
	var end = false;
	var pSstr;
	while (end == false) {
		if (pS == null || pS.nodeType != 3) {
			end = true;
			return pS;
		}
		pSstr = $(pS).text().replace(/(\r\n|\n|\r)/gm, "");
		if (pSstr.length == 0) {
			pS = pS.previousSibling;
		} else {
			end = true;
			return pS;
		}
	}
}

function nSibling(el) {
	var pS = el.nextSibling;
	var end = false;
	var pSstr;
	while (end == false) {
		if (pS == null || pS.nodeType != 3) {
			end = true;
			return pS;
		}
		pSstr = $(pS).text().replace(/(\r\n|\n|\r)/gm, "");
		if (pSstr.length == 0) {
			pS = pS.nextSibling;
		} else {
			end = true;
			return pS;
		}
	}
}

function lastSibling(node){
    var tempObj = node.lastChild;
	if (tempObj == null) {
		return null;
	}
	var end = false;
    while(end == false){
		if (tempObj.nextSibling == null) {
			end = true;
		} else {
			tempObj = tempObj.nextSibling;
		}
    }  
    return tempObj; 
}


//Функция - обработать emoji
$.fn.visual_delete_all_attributes = function() {
	return this.each(function() {
		var attributes = ['class', 'style'];
		for (var i in attributes) {
			if (typeof $(this).attr(attributes[i]) != 'undefined') {
				$(this).removeAttr(attributes[i]);
			}
		}
	});
};




$.fn.visual = function(options) {
	return this.each(function() {
	
		/* Переменные */
		var that = this;
		that.buffer = false;
		that.ids = 0;
		that.maxlength = 0;
		var defaults = {
			modules : {
				'emoji' : true
			},
			obj_get : false
		};
		var opts = $.extend(defaults, options);
		that.return_obj = that;
		
		opts.is_mobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		
		
		if (opts.is_mobile) {
			$(that).addClass('ui_textarea');
			if (typeof $(that).attr('data-maxlength') != 'undefined') {
				$(that).attr('maxlength', $(that).attr('data-maxlength'));
			}
			if (typeof $(that).attr('data-placeholder') != 'undefined') {
				$(that).attr('placeholder', $(that).attr('data-placeholder'));
			}
			$(that).make_textarea(function(i) {
				that.return_obj = $(i).find('textarea')[0];
			});
		}
		
		that.focus = function() {
			if (!opts.is_mobile) {
				setTimeout(function() {
					$(div_dm).focus();
				}, 5);
			} else {
				setTimeout(function() {
					$(that.return_obj).focus();
				}, 5);
			}
		};
		
		that.clear = function() {
			if (!opts.is_mobile) {
				$(div_dm).html('');
				that.check_text(false);
			} else {
				$(that.return_obj).val('');
			}
		};
		
		that.add_class = function(class_name) {
			if (!opts.is_mobile) {
				$(visual_container).find('.div_disign_mode_containter').addClass(class_name);
			} else {
				$(that.return_obj).closest('.ui_textarea').addClass(class_name);
			}
		};
		
		that.remove_class = function(class_name) {
			if (!opts.is_mobile) {
				$(visual_container).find('.div_disign_mode_containter').removeClass(class_name);
			} else {
				$(that.return_obj).closest('.ui_textarea').removeClass(class_name);
			}
		};
		
		if (opts.obj_get != false) {
			opts.obj_get(that);
		} else {
			$(that).data('obj', that);
		}
		
		if (opts.is_mobile) {
			return false;
		}
		
		
		that.content_to_textarea = function() {
		
			var t = $('<div></div>').append($(div_dm).html());
			t.find('img.emoji').each(function() {
				if (typeof $(this).attr('data-emoji') != 'undefined') {
					$(this).replaceWith(emoji.objs['i'+$(this).attr('data-emoji') ][0]);
				}
			});
			var html = t.html()
							.replace("	", " ")
							.replace(/(?:\n|\r\n|\r)/ig, " ")
							.replace(/[ \t]{2,}/g, " ");
			
			
			var ce = $("<pre />").html(html);
			if($.browser.webkit) {
			  ce.find("div").replaceWith(function() { return "\n" + this.innerHTML; });
			}  
			if($.browser.msie) {
			  ce.find("p").replaceWith(function() { return this.innerHTML  +  "<br>"; });
			}
			if($.browser.opera) {
			  ce.find("p").replaceWith(function() {
				if (this.innerHTML == '<br>') {
					this.innerHTML = '';
				}
				return this.innerHTML  +  "<br>";
			  });
			}
			if ($.browser.mozilla || $.browser.opera || $.browser.msie ) {
			  ce.find("br").replaceWith("\n");
			}
			
			
			var text_arr = ce.text().split("\n");
			var text_arr_first = text_arr[0];
			for (var i in text_arr) {
				text_arr[i] = $.trim(text_arr[i]);
			}
			if (text_arr[(text_arr.length - 1)].length == 0) {
				text_arr.splice((text_arr.length - 1), 1);
			}
			text = text_arr.join("\n");
			$(that).val(text);
			var canuse = that.maxlength - text.length;
			$(visual_container).find('.div_disign_mode_counter').html('<b>'+canuse+'</b> символов осталось');
			if (canuse < 0) {
				$(visual_container).find('.div_disign_mode_counter b').css({color:'red'});
			}
			
			if (text.length == 0 && text_arr_first.length == 0) {
				$(visual_container).find('.div_disign_mode_placeholder').show();
			} else {
				$(visual_container).find('.div_disign_mode_placeholder').hide();
			}
		
		};
		
		that.check_text = function(mode) {
			
			$(div_dm).find('> div, > p, > br').each(function() {
				if($.browser.webkit && $(this).prop('tagName') == 'DIV') {
					$(this).visual_delete_all_attributes();
					$(this).addClass('dontremovableplaneta');
					if ($(this).html() == '<br>') {
						$(this).find('br').addClass('dontremovableplaneta');
					}
				} else if (($.browser.msie || $.browser.opera) && $(this).prop('tagName') == 'P') {
					$(this).visual_delete_all_attributes();
					$(this).addClass('dontremovableplaneta');
					if ($.browser.opera && $(this).html() == '<br>') {
						//$(this).find('br').addClass('dontremovableplaneta');
						$(this).html('&nbsp;');
					}
				} else if ($.browser.mozilla && $(this).prop('tagName') == 'BR'){
					$(this).visual_delete_all_attributes();
					$(this).addClass('dontremovableplaneta');
				}
			});
			
			$(div_dm).find('*').each(function() {
				if ($(this).hasClass('emoji') == true) {
					
				} else if ($(this).hasClass('dontremovableplaneta') == false) {
					$(this).replaceWith($(this).contents());
				}
			});
		
			
			that.content_to_textarea();
		
		};
		
		
		
		/* Старт */
		
		$(that).val('');
		$(that).after('<div class="visual_containter"><div class="div_disign_mode_counter"></div><div class="div_disign_mode_containter"><div class="div_disign_mode_placeholder"></div><div class="div_disign_mode" contenteditable="true">'+$(that).val()+'</div></div></div>');
		var visual_container = $(that).parent().find('.visual_containter');
		var div_dm = $(that).parent().find('.div_disign_mode');
		if (typeof $(that).attr('data-maxlength') != 'undefined') {
			that.maxlength = parseInt($(that).attr('data-maxlength'));
		}
		if (typeof $(that).attr('data-placeholder') != 'undefined') {
			$(visual_container).find('.div_disign_mode_placeholder').html($(that).attr('data-placeholder'));
		}
		$(div_dm).height($(that).height());
		$(that).css({'position':'absolute', 'resize':'none', 'width':1, 'height':1, 'visibility':'hidden'});
		that.check_text(true);

		if ($.browser.mozilla) {
			document.execCommand("enableObjectResizing", false, false);
		}
		if ($.browser.opera) {
			$(div_dm).mousedown(function(e) {
				e.preventDefault();
				setTimeout(function() {
					$(div_dm).focus();
				}, 5);
			});
		}
		
		
		
		//Модуль emoji
		if (opts.modules.emoji == true) {
			$(visual_container).prepend('<div class="visual_emoji"><div class="visual_emoji_smiles_shower"><a href="javascript://" title="Раскрыть панель смайлов"><img class="emoji emoji128522" src="/templates/emoji/blank.gif"></a></div><div class="visual_emoji_smiles_panel"></div></div>');
			for (var i in emoji.objs) {
				var n = i.slice(1, i.length);
				$(visual_container).find('.visual_emoji_smiles_panel').append('<a href="javascript://" class="visual_emoji_smiles_panel_'+n+'" data-emoji="'+n+'"><img class="emoji visual_smile emoji'+n+'" src="/templates/emoji/blank.gif" data-emoji="'+n+'"></a>');
			}
			$(visual_container).find('.visual_emoji_smiles_panel a').mousedown(function(e) {
				var n = $(this).attr('data-emoji');
				setTimeout(function() {
					if ($.browser.webkit && lastSibling($(div_dm)[0]) != null) {
						setCaretToElement(lastSibling($(div_dm)[0]));
					} else {
						$(div_dm).focus();
					}
					insertSelectionHTML("\u0020", 'text');
					insertSelectionHTML(" "+emoji.form_what(n)+" ", 'html');
					insertSelectionHTML("\u0020", 'text');
					that.content_to_textarea();
				}, 5);
				e.preventDefault();
			});
			
			$(visual_container).find('.visual_emoji_smiles_shower a').mousedown(function(e) {
				$(visual_container).find('.visual_emoji_smiles_shower').hide();
				$(visual_container).find('.visual_emoji_smiles_panel').show();
				e.preventDefault();
			});
			
		}
		
		
	
		/* Вешаем события */
		
		
		$(div_dm).keyup(function(e) {
			//if (e.keyCode == 8) {
			
			//}
			that.check_text(false);
		});
		
	
		$(div_dm).bind('input', function(e) {
			that.check_text(false);		
		});
		
		
		$(div_dm).bind('paste', function(e) {
			that.ids += 1;
			setTimeout(function () {
				that.check_text(false);
			}, 1);

		});
		
		
	});
};
