var hash = 0;
var curhash = 0;
var url = "";
/*$(function(){
    $(window).bind('scroll', function() {
       	var curpos = 10000;
        $('.hash').each(function() {
            var post = $(this);
            var position = Math.abs(post.position().top - $(window).scrollTop());
            if (position < curpos) { 
            	curpos = position;
	           	hash = $(this).attr('id');
            }
        });        
        if (hash != curhash) {

var s = 1;
if (hash == 0) s = 2;
var pathArray = window.location.pathname.split( '/' );
var newPathname = "";
for (i = 1; i < (pathArray.length - s); i++) {
  newPathname += "/";
  newPathname += pathArray[i];
}
newPathname += "/";
var substr_count = newPathname.split('page').length - 1;
if (hash > 0 && substr_count == 0) newPathname += "page/";
if (hash > 0) newPathname += hash;

	        if (hash == 0) history.pushState(null, null, newPathname);
	        else history.pushState(null, null, newPathname);
//	        if (hash == 0) history.pushState(null, null, '/lenta/');
//	        else history.pushState(null, null, '/lenta/page/' + hash);
        	curhash = hash;
        }
    });
});*/


  $(window).scroll(function () {
     if ($(document).height() - 750 <= $(window).scrollTop() + $(window).height()) {
//        var addressValue = $(".click-more").attr("href");
//        var addressValue2 = $(".click-more").attr("href") + "?clear";
        var id = $(".click-more").attr("rel");
var ost = id % 4;
if ( id ==0 || ost != 0 ) {
		$(".click-more").click();
/*		$(".click-more").remove();
        $('<div class="tmp"></div>').insertAfter('#page' + id);
        $('.tmp').html('<img src="http://sampsonresume.com/labs/pIkfp.gif">');
	    $.get(addressValue2, function(data) {
	        var fileDom = $(data);
	        $('.tmp').hide();
	        $(fileDom).hide().insertAfter('#page' + id).fadeIn();
	        history.pushState(null, null, addressValue);
//	        $("#page" + id).append(fileDom);
	    });
*/
}

     }
  });

 $(document).on('click','.click-more',function () {
        var addressValue = $(this).attr("href");
//        var addressValue2 = $(this).attr("href") + "?clear";
        var addressValue2 = $(this).attr("href") + "/";
        var id = $(this).attr("rel");
		$(".click-more").remove();
        $('<div class="tmp"></div>').insertAfter('#page' + id);
        $('.tmp').html('<img src="/files/i/ct/ajax-loader.gif">');
//$(document).ready(function() {
    $.get(addressValue2, { noheader: '1', nofooter: '1' }, function(data) {
//    $.get(addressValue2, function(data) {
        var fileDom = $(data);
        $('.tmp').hide();
        $(fileDom).insertAfter("#page" + id);
//        history.pushState(null, null, addressValue);
    });
//});
        return false;
    });
