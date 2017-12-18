$(document).ready(function() {
	$('.new-popup-fon, .new-popup-close').click(function() {
		$(".adbantop111").show();
		$('.new-popup-fon').hide();
		$('.new-popup-block').hide();
		$('.new-popup-block-bigpic').hide();
	});
	$(".show-spoiler").click(function() {
		$(this).parent().removeClass('spoiler-hiden');
		$(this).hide();
		$(this).next('a.hide-spoiler').show();
		return false;
	});
	$(".hide-spoiler").click(function() {
		$(this).parent().addClass('spoiler-hiden');
		$(this).hide();
		$(this).prev('a').show();
		$('html,body').animate({scrollTop: $(this).parent().offset().top},'slow');
		return false;
	});
});

$(document).ready(function() {
  	$('.top-submenu').css({'position' : 'absolute' , 'top' : 54});
  	$('.top-submenu-cl').css({'position' : 'absolute' , 'top' : 54});
});

$(document).ready(function() {
	$('.main-column').css('width', '100%').css('width', '-=290px');
	$('.main-column-article').css('width', '100%').css('width', '-=390px');
	$('.nav-container').css('width', '100%').css('width', '-=20px');
});
$(window).bind('resize orientationchange', function() {
	$('.main-column').css('width', '100%').css('width', '-=290px');
	$('.main-column-article').css('width', '100%').css('width', '-=390px');
	$('.nav-container').css('width', '100%').css('width', '-=20px');
});

$( document ).on("click",".item-post-video-play, .item-post-video-play-ct",
function() {
	$(this).parent(".item").addClass('item-video');
	$(this).parent(".item-left").addClass('item-video');
	$(this).hide();
	$(this).parent(".item").find($( ".item-pic" )).hide();
	$(this).parent(".item").find($( ".item-post-video" )).show();
	$(this).parent(".item-left").find($( ".item-pic" )).hide();
	$(this).parent(".item-left").find($( ".item-post-video-ct" )).show();
	return false;
});

$(document).on({
    mouseenter: function () {
		showItem(this);
    },
    mouseleave: function () {
		hideItem(this);
    }
}, ".item, .item-left");

$(document).on({
    mouseenter: function () {
    	return false;
    },
    mouseleave: function () {
    	return false;
    }
}, ".item-ban, .item-left-bigpic, .item-video, .item-search, .item-article-ban");


$( ".item, .item-left" ).not('.item-ban, .item-left-bigpic, .item-video').hover(
function() {
	showItem(this);
  }, function() {   
	hideItem(this);
  }
);


function showItem(obj) {
    $( obj ).find( 'span.item-date-inner' ).hide();
    $( obj ).find( 'span.item-author' ).show();
}
function hideItem(obj) {
    $( obj ).find( 'span.item-author' ).hide();
    $( obj ).find( 'span.item-date-inner' ).show();
}

$(document).on({
    mouseenter: function () {
	    $( this ).find('.item-article-pic-hover').fadeIn(100);
	    $( this ).find('.item-dir-ct-pic-hover').fadeIn(100);
	    $( this ).find('.item-article-title').addClass('item-article-title-hover');
	    $( this ).find('h2 a').addClass('item-dir-ct-title-hover');
	    $( this ).find('.item-left-bigpic-numbers').fadeIn(100);
    },
    mouseleave: function () {
	    $( this ).find('.item-article-pic-hover').fadeOut(100);
	    $( this ).find('.item-dir-ct-pic-hover').fadeOut(100);
	    $( this ).find('.item-article-title').removeClass('item-article-title-hover');
	    $( this ).find('h2 a').removeClass('item-dir-ct-title-hover');
	    $( this ).find('.item-left-bigpic-numbers').fadeOut(100);
    }
}, ".item-article, .item-dir-ct");

$(document).on({
    mouseenter: function () {
	    $( this ).find('.item-left-bigpic-hover').fadeIn(100);
	    $( this ).find('.item-left-bigpic-numbers').fadeIn(100);
    },
    mouseleave: function () {
	    $( this ).find('.item-left-bigpic-hover').fadeOut(100);
	    $( this ).find('.item-left-bigpic-numbers').fadeOut(100);
    }
}, ".item-left-bigpic");

$(document).on({
    mouseenter: function () {
	    $( this ).find('.main-block-bigvideo-hover').fadeIn(100);
	    $( this ).find('.main-block-bigvideo-title').addClass('main-block-bigvideo-title-hover');
    },
    mouseleave: function () {
	    $( this ).find('.main-block-bigvideo-hover').fadeOut(100);
	    $( this ).find('.main-block-bigvideo-title').removeClass('main-block-bigvideo-title-hover');
    }
}, ".main-block-bigvideo");


$( ".article .item-section" ).hover(
function() {
    	$( this ).addClass('item-section-hover');
  }, function() {   
	    $( this ).removeClass('item-section-hover');
  }
);


$(document).ready(function(){
    $("a[rel^='bigVideo']").prettyPhoto({
		default_width: 910,
		default_height: 512,
		social_tools: '',
        deeplinking: false,
	});
    $("a[rel^='shownews']").prettyPhoto({
		default_width: 400,
		default_height: 700,
		social_tools: '',
        deeplinking: false,
	});
});

$( document ).on( "click touchend", ".item-info", function() {
    $(this).toggleClass( "nav-toggle-active" );
    var h = $( this ).parents().find('.item-text').height();
    var w = $( this ).parents().find('.item-text').width();
    $( this ).parent().find('.item-popup').css('width', w + 'px');
    $( this ).parent().find('.item-popup').slideToggle(200);
    var id = $(this).attr("id");
    $( this ).parent().find('.item-popup-soc-nums').load( "http://www.computerra.ru/wp-content/themes/ct/new-get-soc-num.php?url=http://www.computerra.ru/show/?id=" + id );
    return false;
});

$( document ).on( "click touchend", ".item-soc-link", function() {
    $(this).toggleClass( "nav-toggle-active" );
    var h = $( this ).parents().find('.item-text').height();
    var w = $( this ).parents().find('.item-text').width();
    $( this ).parent().find('.item-popup').css('width', w + 'px');
    $( this ).parent().parent().find('.item-popup').slideToggle(200);
	$( this ).parent().parent().find("input.item-soc-link-input").focus().select();
		$('.item-soc-link-button').zclip({
			path:'http://www.computerra.ru/files/other/ZeroClipboard.swf',
			copy:function(){return $(this).attr('title');},
			afterCopy:function(){
				$(this).text("Ссылка скопирована");
			},
		});
    return false;
});


$(document).on({
    mouseup: function () {
/*		$(this).off('mouseover');*/
		$('.item-soc-link-button').zclip({
			path:'http://www.computerra.ru/files/other/ZeroClipboard.swf',
			copy:function(){return $(this).attr('title');},
			afterCopy:function(){
				$(this).text("Ссылка скопирована");
			},
		});
    },
}, '.item-soc-link-button, .item-soc-link-link');

$(document).on({
    mouseenter: function () {
    },
    mouseleave: function () {
	    $( this ).slideUp(200);
    }
}, ".item-popup");

Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'https://www.facebook.com/dialog/share?';
        url += 'app_id=311357705606754&display=popup'
        url += '&href='       + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook_old: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    google: function(purl) {
        url  = 'https://plus.google.com/share?url=?';
        url += 'url='          + encodeURIComponent(purl);
        Share.popup(url)
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};



var ww = window.innerWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav-container").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = window.innerWidth;
	adjustMenu();
});

var adjustMenu = function() {

	var topban=0;
	if (ww <= 480) {
/*
  	$('.main').css({'margin-top' : 0});
  	$('.top').css({'position' : 'absolute' , 'top' : 0});
	$(".top-submenu").hide();
	$(".slidedown").hide();
*/
	} else if (ww <= 1240 && ww > 480) {

new adriver("adriver_banner_1137524485", {sid:41137, bt:52, sz:'first', bn:2, pz:1});
new adriver("adriver_banner_1557986537", {sid:41137, bt:52, sz:'cl', bn:2, pz:1});

/*
  	$('.main').css({'margin-top' : 0});
  	$('.top').css({'position' : 'absolute' , 'top' : 0});
	$(".top-submenu").hide();
	$(".slidedown").hide();
*/

	new adriver("adriver_banner_1137524485", {sid:41137, bt:52, sz:'first', bn:2, pz:1});
	new adriver("adriver_banner_1557986537", {sid:41137, bt:52, sz:'cl', bn:2, pz:1});

//    if ( $("#adriver_banner_1832222208").length || $("#adriver_banner_1137524485").length){
//	  	var toph = $('.adbantop111').height();
//    }
//  	else {

	//	  	$('.main').css({'margin-top' : topban});
	//	  	$('.top').css({'position' : 'absolute' , 'top' : topban});

//	  	toph = topban;
	if ($('body').css('background-image').length > 4)
	  	toph = 200;
	else
	  	toph = 0;
//	}

	$(".top-submenu").show();
	$(".slidedown").show();


		if (ww <= 1024) 
			$('#change-ban').css({'position' : 'absolute' , 'top' : 55 + toph});
//			$('#change-ban').css({'position' : 'absolute' , 'top' : 255});
		else
			$('#change-ban').css({'position' : 'absolute' , 'top' : 125 + toph});
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav-container").hide();
		} else {
			$(".nav-container").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
////			if (!$(this).parent("li").hasClass("hover")) {
//				e.preventDefault();
////			}
////			$("li").removeClass("hover");
//			$(this).parent("li").toggleClass("hover");
//			$(this).find("div").toggleClass("nav-triangle-hover");
		});
		$(".nav-triangle").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
//			if (!$(this).parent("li").hasClass("hover")) {
				e.preventDefault();
//			}
//			$("li").removeClass("hover");
			$(this).parent("a").parent("li").toggleClass("hover");
			$(this).toggleClass("nav-triangle-hover");
		});
	} 

	else if (ww > 1240) {

new adriver("adriver_banner_1137524485", {sid:41137, bt:52, sz:'first', bn:2, pz:1});
new adriver("adriver_banner_1557986537", {sid:41137, bt:52, sz:'cl', bn:2, pz:1});

//    if ( $("#adriver_banner_1832222208").length || $("#adriver_banner_1137524485").length){
    if ($("#adriver_banner_1137524485").length){
//	  	toph = 200;
	  	toph = $("#adriver_banner_1137524485").height();
//	  	var toph = $('#ar_t4383593').height();
//$('.adbantop111').height();
    }
//  	else {
	//	  	$('.main').css({'margin-top' : topban});
	//	  	$('.top').css({'position' : 'absolute' , 'top' : topban});
//	  	toph = topban;
	else if ($('body').css('background-image').length > 4)
//	  	toph = 0;
	  	toph = 200;
	else
	  	toph = 0;
//	}

	$(".top-submenu").show();
	$(".slidedown").show();

		$('#change-ban').css({'position' : 'absolute' , 'top' : 125 + toph});
//		$('#change-ban').css({'position' : 'absolute' , 'top' : 325});
		$(".toggleMenu").css("display", "none");
		$(".nav-container").hide();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}

//	alert($('.adbantop111').height());

};

$(function(){
	$(".navbar-toggle").click(function(){
		$(this).toggleClass("active");
	});
});


/*
(function() {
    var supportTouch = $.support.touch,
            scrollEvent = "touchmove scroll",
            touchStartEvent = supportTouch ? "touchstart" : "mousedown",
            touchStopEvent = supportTouch ? "touchend" : "mouseup",
            touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
    $.event.special.swipeupdown = {
        setup: function() {
            var thisObject = this;
            var $this = $(thisObject);
            $this.bind(touchStartEvent, function(event) {
                var data = event.originalEvent.touches ?
                        event.originalEvent.touches[ 0 ] :
                        event,
                        start = {
                            time: (new Date).getTime(),
                            coords: [ data.pageX, data.pageY ],
                            origin: $(event.target)
                        },
                        stop;

                function moveHandler(event) {
                    if (!start) {
                        return;
                    }
                    var data = event.originalEvent.touches ?
                            event.originalEvent.touches[ 0 ] :
                            event;
                    stop = {
                        time: (new Date).getTime(),
                        coords: [ data.pageX, data.pageY ]
                    };

                    // prevent scrolling
                    if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                        event.preventDefault();
                    }
                }
                $this
                        .bind(touchMoveEvent, moveHandler)
                        .one(touchStopEvent, function(event) {
                    $this.unbind(touchMoveEvent, moveHandler);
                    if (start && stop) {
                        if (stop.time - start.time < 1000 &&
                                Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                            start.origin
                                    .trigger("swipeupdown")
                                    .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                        }
                    }
                    start = stop = undefined;
                });
            });
        }
    };
    $.each({
        swipedown: "swipeupdown",
        swipeup: "swipeupdown"
    }, function(event, sourceEvent){
        $.event.special[event] = {

            setup: function(){
                $(this).bind(sourceEvent, $.noop);
            }
        };
    });

})();

$('.nav-container').on('swipedown',function(){
	$(".nav-container").show();
	$(".navbar-toggle").toggleClass("active");
});
$('.nav-container').on('swipeup',function(){
	$(".nav-container").hide();
	$(".navbar-toggle").toggleClass("active");
});
*/
$(window).load(function(){
	adjustMenu();
//	alert($('body').css('background'));
//alert($('#adriver_banner_83477328').offset().top - $('#change-ban').height());
});

$(document).scroll(function(){

	  	$('#ar_t3858310').css({'position' : 'absolute'});

	var ww = window.innerWidth;
	var mtop = 0;
	if ($('body').css('background-image').length > 4)
	  	var toph = 200;
//	  	var toph = 0;
	else if ( $("#adriver_banner_1832222208").length || $("#adriver_banner_1137524485").length )
	  	var toph = $('#adriver_banner_1137524485').height();
	else
	  	var toph = 0;

	var bottom_margin = 0;
	if ( $("#adriver_banner_83477328").length )
		bottom_margin = $('#adriver_banner_83477328').offset().top;
	else
		bottom_margin = $('.bottom').offset().top;


	if (ww <= 480) mtop = 55 + $('.adbantop111').height(); else mtop = 125 + toph;
//	if (ww <= 1024) mtop = 55 + $('.adbantop111').height(); else mtop = 125 + toph;
//	if (ww <= 1024) mtop = 55; else mtop = 85;
//	if (ww <= 1024) mtop = 55; else mtop = 325;

	if ($(window).scrollTop() > (120 + toph)) 
	  	$('#change-ban').css({'position' : 'fixed' , 'top' : 20});
	else
	  	$('#change-ban').css({'position' : 'absolute' , 'top' :  mtop});

//  if (($(window).scrollTop() > (120 + toph)) && ($(window).scrollTop() < (bottom_margin - $('#change-ban').height() - 30))){
  if (($(window).scrollTop() > (0)) && ($(window).scrollTop() < (bottom_margin - $('#change-ban').height() - 30))){
  		$("#ar_t3749126").hide();
//	  if($(window).scrollTop() + $(window).height() > $(document).height() - mtop) {
//	  	$('#change-ban').css({'position' : 'absolute' , 'top' : ($(document).height() - $(window).height() - mtop)});
//	  }
//	  if($(window).scrollTop() + $(window).height() < $(document).height() - mtop) {

//	  	$('#change-ban').css({'position' : 'fixed' , 'top' : 20});
	  	$('#ar_t4038243').css({'z-index' : '-1'});
	  	$('#ar_t4383593').css({'z-index' : '-1'});
	  	$('.stop').css({'z-index' : '-1'});
//	  }
  } else if ($(window).scrollTop() > (bottom_margin - $('#change-ban').height() - 30)) {
  		$("#ar_t3749126").show();
	  	$('#change-ban').css({'position' : 'absolute' , 'top' :  bottom_margin - $('#change-ban').height() - 30});
  } else {
  		$("#ar_t3749126").show();
	  	$('#change-ban').css({'position' : 'absolute' , 'top' :  mtop});
	  	$('#ar_t4038243').css({'z-index' : '0'});
	  	$('#ar_t4383593').css({'z-index' : '0'});
	  	$('.stop').css({'z-index' : '0'});
  }
});

$(document).ready(function() {
	$('.bigpic').click(function() {
		$(".adbantop111").hide();
		$('.new-popup-fon').show();
		var popup = $('#d-' + $(this).attr('id'));
//popup.css('max-width','800px');
//popup.css('margin-left','-285px');
		var popup_img = $('#d-' + $(this).attr('id') + ' img');
		$(".new-popup-block-bigpic").show();
		popup.show();
		$('.new-popup-close').css('margin','5px 0 5px 0');
		var pp_width = popup.width();
		var pp_height = popup.height();
		if (($(window).height() - 40) < pp_height) popup.css('position','absolute');
		if (($(window).width() - 41) < pp_width) {
			popup.css('max-width',($(window).width()-40) + 'px', 'important');
			popup.css('width',($(window).width()-40) + 'px', 'important');
			popup_img.css('max-width',($(window).width()-40) + 'px', 'important');
			popup_img.css('width',($(window).width()-40) + 'px', 'important');
			popup.css('left','0px','important');
			popup.css('margin-left','0px','important');
		} else {
			popup.css('max-width','800px');
			popup_img.css('max-width','800px');
			pp_width = popup.width();
			var div_width = pp_width/2 + 20;
			popup.css('margin-left','-' + div_width + 'px');
		}
		return false;
	});
});



var timeout = 500;
var timer = setInterval(function(){
	if ($('body').css('background-image').length > 4) {
/*	  	$('.main').css({'margin-top' : 200});*/
/*	  	$('.top').css({'position' : 'absolute' , 'top' : 200});*/
/*		$('#change-ban').css({'position' : 'absolute' , 'top' : 325});*/
        clearInterval(timer);
  	}
  	if ($('.adbantop111').height() > 10 ) {
		adjustMenu();
	  	clearInterval(timer);
	}
}, timeout);

/*
$(window).load(function() {
	if ($('.right-column').find(".item-ban").first().height() == 0) {
		//alert('adblock');
		_gaq.push(['_setPageGroup', 4, 'adblock']); 
	}
});
*/