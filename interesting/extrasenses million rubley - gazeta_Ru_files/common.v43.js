var dayarray=new Array("воскресенье","понедельник","вторник","среда","четверг","п€тница","суббота")
var montharray=new Array ("€нвар€","феврал€","марта","апрел€","ма€","июн€","июл€","августа","сент€бр€","окт€бр€","но€бр€","декабр€");
var ndata=new Date();
var day=dayarray[ndata.getDay()];
var month=montharray[ndata.getMonth()];
var date=ndata.getDate();
var year=ndata.getFullYear();
var hours = ndata.getHours();
var mins = ndata.getMinutes();
var secs = ndata.getSeconds();
if (hours < 10) {hours = "0" + hours }
if (mins < 10) {mins = "0" + mins }
if (secs < 10) {secs = "0" + secs }
var datastr=(date +" "+ month +" "+ year + ", "+ hours + ":" + mins )

function mblock_active(num) {
	if ( $('#mblock'+num) )
	{
		for (var i = 0; i < 10; i++) {
			if ( !$('#mblock'+i) ) break;
			if ( i != num ) $('#mblock'+i).removeClass('tab_active');
			if ( i != num ) $('#mblock'+i+'_link').removeClass('active');
		}
		$('#mblock'+num).addClass('tab_active');
		$('#mblock'+num+'_link').addClass('active');
	}
	return false;
}

function check_adv (adv_class, block_class) {
	if ( $('div.'+adv_class) )
	{
		$( 'div.'+adv_class ).each(function( index ) {
			thisH = $( this ).outerHeight();
			//console.log("class %s height %d", adv_class, thisH);
			if ( $( this ).parent() && $( this ).parent().get( 0 ) )
			{
				var parentTag = $( this ).parent().get( 0 );
				if ( $(parentTag).prop("tagName") != "DIV" )
				{
					parentTag = $(parentTag).parent().get( 0 );
					//console.log($(parentTag).prop("tagName"));
				}
				if ( !thisH || thisH < 80 )
				{
					$(parentTag).css('display','none');
				} else {
					$(parentTag).css('marginBottom','20px');
				}
			}
		});
	}
}

function set_resizeblock_handler ( selectors, handler ) {
	$(selectors).on('resizeblock', handler);
	$(selectors).each(handler);
}

function resize_news ( ) {
	
	var news_block_height = $('#news_lenta').outerHeight()
			
	var news_lenta_banner_height = $('#news_lenta_banner').outerHeight() || 0;
			
	$('#news_lenta .news_title').each(function(){
		if ( $(this).position().top + $(this).outerHeight() > news_block_height - news_lenta_banner_height - 45 ) {
			if( $(this).is(':visible') ) {
				$(this).css('visibility', 'hidden');
			}
		} else {
			if( ! $(this).is(':hidden') ) {
				$(this).css('visibility', 'visible');
			}
		}
	});
	
	if ( $('#news_lenta #news240x400').height() > 20 ) {
		$('#news_lenta #news240x400').css('margin-top', '10px');
		$('#news_lenta #news240x400').css('margin-bottom', '10px');
	}
}

function resize_adsmart ( ) {
	if ( $('#adsmart').height() > 0 ) {
		$('#adsmart').css('padding-top', '10px');
		$('#adsmart').css('padding-bottom', '10px');
	} else {
		$('#adsmart').css('padding-top', '0');
		$('#adsmart').css('padding-bottom', '0');
	}
}



function tile_resize(tile_class) {
        var count=0;
	var tile_height = 0;
	//$('div.'+tile_class).height('');
	$( 'div.'+tile_class ).each(function( index ) {
		count++;
		var thisH = $(this).children('div.tile_inner_size').outerHeight();
		if ( !thisH  ) {
			thisH = $( this).outerHeight();
			if(tile_height)
				$( this ).height( tile_height );
			else 
				$( this ).height( 'auto' );
			
		}
		if ( tile_height < thisH ) {
			tile_height = thisH;
		}
	});
	$('div.'+tile_class).height(tile_height);
}

function untile ( tile_class ) {
	 $('div.'+tile_class).height('auto');
}

var mq = new GazetaMediaQuery ();

mq.register( {
	large: function() { tile_resize('tile_float_small'); tile_resize('tile_float_middle'); },
	small: function() { tile_resize('tile_float'); }
});
function resize_bricks () {
	mq.triggerHandler ();
}

mq.register( {
	large: function() { tile_resize ( 'tile_cent'); },
	small: function() { untile ('tile_cent'); }
});
function resize_center () {
	var mq = new GazetaMediaQuery ();
        if ( mq.state() == 'large' ) {
	        tile_resize ('tile_cent');
        } else {
	        untile ('tile_cent');
        }
}

//mq.register( {
//	large: function() { tile_resize ( 'tile_media'); },
//	small: function() { untile ('tile_media'); }
//});

function resize_media(){
	//var mq = new GazetaMediaQuery();
        //if ( mq.state() == 'large' ) {
	//        tile_resize ( 'tile_media' );
        //} else {
	//        untile ('tile_media');
        //}
	tile_resize ( 'tile_inner_media' );

	var scroll_winW = $( window ).innerWidth();
	//console.log(scroll_winW);
        if ( mq.state() == 'large' || scroll_winW > 1260 ) {
	        tile_resize ( 'tile_media' );
        } else {
	        untile ('tile_media');
        }
}

function resize_site()
{
        // благодар€ mq.triggerHandler () вызовет автоматом resize_center и resize_media
        resize_bricks();
        resize_media();
        
        tile_resize('tile_editor');
        tile_resize('mblock_tab');
        tile_resize('tile_action');
        tile_resize('tile_partner');
        
        resize_news( );
        resize_adsmart (); 
        
	$('#adsmart_size_trigger').each ( function () {
	        var w = $(this).get(0).contentWindow;
	        $(w).resize ( function () {
	               resize_adsmart ( );
	        });
	});

	if ( $('div.tile_pr') && $('div.adv_new_300') )
	{
		var h1 = $('div.tile_pr').height();
		var h2 = $('div.prbset').height();
		$('div.prbset').css('paddingTop', (h1-300)/2);
	}        
	
}



$( document ).ready( function()
{
        resize_site();
});
$( window ).resize( function()
{
        resize_site();
});
$ ( window ).load (function()
{
	resize_site();
	//check_adv('adv_240x400');
	//check_adv('adv_news_300');
});

$(window).scroll(function () {
	var scroll_pos = $( document).scrollTop();
	var scroll_winW = $( window ).innerWidth();
	var scroll_winH = $(window).height();

	if ( scroll_winH > document.body.clientHeight )
	{
		scroll_winH = document.body.clientHeight;
	}

	if ( $('div.sticky_anchor_r') && $('#sticky_r') && $('div.sticky_anchor_r').offset() && $('div.footer_mark') )
	{
		var sticky_fixTop = 5;
		var sticky_fixLeft = $('div.sticky_anchor_r').offset().left;
		var sticky_posTop = $('div.sticky_anchor_r').offset().top;
		var sticky_posBot = $('div.footer_mark').offset().top;
		if ( scroll_pos > sticky_posTop ) {
			//console.log("Top: %d, Stick: %d", scroll_pos, sticky_posTop);
			// FIX bug with medium screen
			if ( !$('#sticky_r').hasClass("vrez_r") || scroll_winW > 1260 )
			{
				if ( $('#sticky_r').height() && $('#sticky_r').height() + scroll_pos > sticky_posBot )
				{
					var antiPos = sticky_posBot - $('#sticky_r').height() - scroll_pos; 
					$('#sticky_r').css('top', antiPos );
				} else {
					$('#sticky_r').css('top', sticky_fixTop );
				}
				$('#sticky_r').css('left', sticky_fixLeft );
				$('#sticky_r').css('position', 'fixed');
			}
		} else {
			$('#sticky_r').css('position', 'static');
		}
	}

	if ( $('#share-anchor-top') && $('#share-anchor-top').offset() && $('div.share-name-sticky') && $('div.article_context') && $('#comments') && $('#comments').offset() )
	{
		var sticky_fixTop = 0;
		var sticky_fixLeft = $('#share-anchor-top').offset().left;
		var sticky_anchorTop = $('#share-anchor-top').offset().top;
		var sticky_anchorBot = $('#comments').offset().top;
		var sticky_width = $('div.article_context').width() + 20 ;
		//console.log("scroll: %d, top: %d, bot: %d", scroll_pos, sticky_anchorTop, sticky_anchorBot);
		if ( scroll_pos > sticky_anchorTop && scroll_pos + 600 < sticky_anchorBot)
		{
			$('div.share-name-sticky').css('top', sticky_fixTop);
			$('div.share-name-sticky').css('left', sticky_fixLeft);
			$('div.share-name-sticky').css('width', sticky_width);
			$('div.share-name-sticky').css('display', 'block');
		} else {
			$('div.share-name-sticky').css('display', 'none');
		}
	}

	if ( $('div.top_nav_float') )
	{
		var scroll_fixTop = 10;
		var scroll_fixLeft = 20; 
		if ( scroll_pos > scroll_winH )
		{
			$('div.top_nav_float').css('top', scroll_fixTop);
			$('div.top_nav_float').css('display', 'block');
		} else {
			$('div.top_nav_float').css('display', 'none');
		}
	}
});