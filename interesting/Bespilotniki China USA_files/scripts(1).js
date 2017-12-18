

var ALLOWED_TAGS = ["STRONG", "EM", "BLOCKQUOTE", "Q", "DEL", "INS", "A", "B", "I", "BR", "P"];

function sanitize(el) {
    "Remove all tags from element `el' that aren't in the ALLOWED_TAGS list."
    var tags = Array.prototype.slice.apply(el.getElementsByTagName("*"), [0]);
    for (var i = 0; i < tags.length; i++) {
        if (ALLOWED_TAGS.indexOf(tags[i].nodeName) == -1) {
            usurp(tags[i]);
        }
    }
}

function usurp(p) {
    "Replace parent `p' with its children.";
    var last = p;
    for (var i = p.childNodes.length - 1; i >= 0; i--) {
        var e = p.removeChild(p.childNodes[i]);
        p.parentNode.insertBefore(e, last);
        last = e;
    }
    p.parentNode.removeChild(p);
}

function ajax(cmd, params, callback) {
        
    params.cmd = cmd;
    // params.requestTime = (new Date()).getTime();
    params.location = location.pathname;
    params.domain = document.domain;
                    
    if(params.loading)
        $(params.loading).show().css({
            top: $(params.container).offset().top,
            left: $(params.container).offset().left,
            width: $(params.container).width(),
            height: $(params.container).height()
        });
    
    // console.log("jQuery ajax: ", params.cmd, " ", params.location, " ", params.domain);
    
    return $.post('/ajax.php', params, function(data) {
        if(params.loading) 
            $(params.loading).hide();
        // console.log("jQuery ajax returns: ", data);
        if(callback)
            callback(data);
    });
    
}

out = function() {
    try {
        var args = new Array();
        args[args.length] = (new Date()).toLocaleTimeString();
        args[args.length] = ':';
        for(var i=0; i<arguments.length;i++) {
            args[args.length] = arguments[i];
            args[args.length] = ',';
        }
        console.log.apply(this, args);
    }
    catch(e) {}
};

$(function() {

    window.is_tablet = $(document.body).hasClass('device-tablet');
    window.is_mobile = $(document.body).hasClass('device-mobile');
    $(window).resize(function() {
        window.is_tablet = $(document.body).hasClass('device-tablet');
        window.is_mobile = $(document.body).hasClass('device-mobile');
    })
    
    $('table').removeAttr('width');
    $('table tr').removeAttr('width').removeAttr('bgcolor').removeAttr('align').removeAttr('valign');
    $('table tr td').removeAttr('width').removeAttr('bgcolor').removeAttr('align').removeAttr('valign');
    $('table tr th').removeAttr('width').removeAttr('bgcolor').removeAttr('align').removeAttr('valign');
    
    $('table tr td').each(function() {
        // if($(this).attr('colspan') || $(this).attr('rowspan')) {
            $(this).removeAttr('width').css({width: 'auto'});
        // }
    })
    
    $('table tr th').each(function() {
        // if($(this).attr('colspan') || $(this).attr('rowspan')) {
            $(this).removeAttr('width').css({width: 'auto'});
        // }
    })
       
    
    $(window).resize(function() {
        setTimeout(function() {
            if(window.is_tablet) {
                $('#headline .wr>section').height('auto').css({paddingBottom: '20px'});
            }
            else if(window.is_mobile) {
                $('#headline .wr>section').height('auto').css({paddingBottom: '20px'});

            }
            else {
                $('#headline .wr>section').height('650px').css({paddingBottom: '0px'});
            }
            $('.page-header').height( $('.page-header>nav').innerHeight() + $('.page-header>h1').innerHeight() );
        }, 100);
    });

    if(window.is_safari || window.is_Opera) {

        $(window).resize(function() {
                   
            if(window.is_tablet) {
                $('#auth').css({marginLeft: $(window).width() - 365});
                $('#auth>div').css({width: 'auto'});
                $('#menu .cats').width($(window).width() - 302);
                $('section>.wr>section').width($(window).width() - 341);
                $('#headline .items-view').width('60%');
                $('.search-box').width(250);                                           
            }
            else if(window.is_mobile) {
                $('#auth').css({marginLeft: '-20px'}).width(($(window).width() - 20) + 'px');
                $('#auth>div').css({width: $(window).width() + 40});
                $('#menu .cats').width($(window).width());
                $('section>.wr>section').width($(window).width()-19);
                $('.search-box').width($(window).width() - 60);
                $('#headline .items-view').width($(window).width()-19);

            }
            else {
                $('#auth').css({marginLeft: $(window).width()/2 - 600 + 1200 - 357});
                $('section>.wr>section').width(1200 - 302);     
                $('.search-box').width(250);
                $('#headline .items-view').width($('#headline .items-view').parent().width() - 343);
            }
            
            // alert($('#menu .search-box').width() - 50);
            $('#menu .search-box input[type=text]').width($('#menu .search-box').width() - 25);
            $('#menu .search-box input[type=text]').css({minWidth: '0px'});
            
            
            //$('.page-content article .article-image-frame img').width($('.page-content article .article-image-frame').width() - 25);
             
            try {
                document.styleSheets[0].addRule('#headline .wr>section:before', 'width: '+($(window).width()/2 - 600)+'px; /*height: 520px*/');
                document.styleSheets[0].addRule('#page .page-header:before', 'width: '+($(window).width()/2 - 600)+'px; height: ' + ($('#page .page-header').height() + 10) + 'px');
                document.styleSheets[0].addRule('#page .page-options:before', 'width: '+($(window).width()/2 - 600)+'px; height: ' + ($('#page .page-options').height() + 10) + 'px');
            }
            catch(e) {
                document.styleSheets[0].insertRule('#headline .wr>section:before { width: '+($(window).width()/2 - 600)+'px !important; /*height: 550px !important;*/ }', 0);
                document.styleSheets[0].insertRule('#page .page-header:before { width: '+($(window).width()/2 - 600)+'px !important; height: ' + $('#page .page-header').height() + 'px !important; } ', 0);
                document.styleSheets[0].insertRule('#page .page-options:before { width: '+($(window).width()/2 - 600)+'px !important; height: ' + $('#page .page-options').height() + 'px !important; } ', 0);
            }
            
        });
        
    } 
    
    $(window).resize();
    
    (function() { 
        
        $('a.popup').mouseenter(function() {
            $('div.popup').hide();
            var popupId = $(this).attr('rel');
            $(this).addClass('hover');
            if(!window.is_mobile)
                $('#' + popupId).css({top: ($(this).offset().top + $(this).innerHeight()) + 'px', left: $(this).offset().left + 'px'}).show();
            else 
                $('#' + popupId).css({top: ($(this).offset().top + $(this).innerHeight()) + 'px', left: '0px'}).show();
            return false;
        }).mouseleave(function() {
            var popupId = $(this).attr('rel');
            if($('#' + popupId).is(':visible') && $('#' + popupId).is(':hover'))
                return false;
            $(this).removeClass('hover')
            $('#' + popupId).hide();
            return false;
        }).click(function() {
            if(window.is_mobile) {
                $(this).mouseenter();
                return false;
            }
        });
        
        $('div.popup').mouseleave(function() { $(this).hide(); $('a[rel=' + $(this).attr('id') + ']').removeClass('hover') });
    })();
    
    var headlineRealSlide = function(d) {
        $('#headline .items a.s').removeClass('s');
        $(d).addClass('s');
        
        $('#headline .items-view>div').hide();
        $('#headline .items-view #' + $(d).attr('rel')).show();
        /*if(!window.is_safari && !window.is_Opera && !window.is_mobile)
            $('#headline .wr>section').height($('#headline .items-view #' + $(d).attr('rel')).height() + 50);*/

    }
    
    var headlineSlide = function() {
        
        window.currentHeadelineItem ++;                                     
        if(window.currentHeadelineItem >= $('#headline .items a').length)
            window.currentHeadelineItem = 0;
            
        headlineRealSlide($('#headline .items a:eq(' + window.currentHeadelineItem + ')')[0]);
        
        window.headlineTimer = setTimeout(headlineSlide, $('#headline').attr('timeout') * 1000);
        
    };
    
    $('#headline .items a').click(function(e) {
        
        headlineRealSlide(this);

        window.currentHeadelineItem = $(this).index() - 1;
        if(window.headlineTimer > 0)
            clearTimeout(window.headlineTimer);
        window.headlineTimer = setTimeout(headlineSlide, $('#headline').attr('timeout') * 1000);

        return false; 
    });
    
    
    window.headlineTimer = -1;
    window.currentHeadelineItem = 0;
    $('#headline .items a:eq(' + window.currentHeadelineItem + ')').click();
    
    
    $('a[target].share').click(function() {
        var href = $(this).attr('href');
        window.open(href, 'social', 'width=600,height=400,left=' + (($(window).width() - 600)/2) + ',top=' + ($(window).height() - 400)/2);
        return false;
    })
    
    
});

