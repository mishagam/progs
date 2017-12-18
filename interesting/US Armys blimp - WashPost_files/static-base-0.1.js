// hide body intially for iframe
if (document.location.href.indexOf('template=iframe') !== -1) {
    jQuery('body').hide();
}

(function($){
    $(document).ready(function() {
    
        var param = getParam('template');
        if (param && param === 'iframe') {
            $('body').addClass('iframe').show().css('display','block');
            $('#content .iframe-content').siblings().hide();
            $('.iframe-content').show();
        }

        // hide blank gray bar
        if ($('#brand-wrapper').find('a.brand').hasClass('homepage')) {
            $('#main-sub-nav-wrapper').hide();
        }
        
        // panel stepper graphic initialize
        if ($('#content').find('#panel_graphic').length > 0){
            $('#content').find('#panel_graphic').cycle({ 
                fx:     'fade', 
                speed:  250, 
                timeout:0, 
                nowrap: true,
                next:   '#next_panel', 
                pager:  '#panel_tabs'
            });
            $('#next_panel').click(function() {
                var num_panels = $(this).parent().siblings('#panel_tabs').find('a').length,
                    curr_idx = $(this).parent().siblings('#panel_tabs').find('.activeSlide').index();
                    
                if (num_panels-1 == curr_idx) {
                    if ($(this).hasClass('last')) {
                        $(this).parent().siblings('#panel_tabs').find('a').first().click();
                        $(this).removeClass('last').html('Next&nbsp;&raquo;');
                    } else {
                        $(this).addClass('last').html('Start over');
                    }
                } else {
                    $(this).removeClass('last').html('Next&nbsp;&raquo;');
                }
            });
            
            $('#panel_tabs').children('a').click(function() {
                if ($(this).index() == $(this).parent().children('a').length-1) {
                    $('#next_panel').addClass('last').html('Start over');
                } else {
                    $('#next_panel').removeClass('last').html('Next&nbsp;&raquo;');
                }
            });
        }
        
        // panel tab graphic initialize
        if ($('#content').find('ul.panel-tabs li').length > 0) {
            $('#content').find('ul.panel-tabs li').mouseenter(function() {
                $(this).addClass('hover')
            }).mouseout(function() {
                $(this).removeClass('hover')
            }).click(function() {
                $('#content').find('.panel-content').each(function(index) {$(this).hide()});
                $(this).siblings('li.active').each(function(index) {$(this).removeClass('active')});
                var panelId = $('ul.panel-tabs li').index(this);
                $(this).addClass('active');
                $('#content').find('.panel-content').eq(panelId).show();
                trackLink("tab", panelId);
            });
            $('#content').find('ul.panel-tabs li').eq(0).click();
        }
        
        $('#content').find('a.video-embed').click(function(){
            $('#video_embed_code').fadeIn('fast').find('textarea').select();
            return false;
        })
        $('#content').find('#video_embed_code').find('a.close').click(function(){
            $('#video_embed_code').fadeOut('fast');
            return false;
        });
        
        // tablesorter initialize
        if ($('table.data-table.wp-tablesorter').length > 0) {
            var ts = $('table.data-table.wp-tablesorter');
            ts.tablesorter();
            
            if (ts.find('thead').find('span').length == 0) {
                ts.find('th').append(' <span></span>');
            }
            
            ts.find('th.header').mouseenter(function() {
                $(this).addClass('hover');
            }).mouseleave(function() {
                $(this).removeClass('hover');
            });
        }
        
        // static timeline initialize
        if ($('table.time-table').length > 0) {
            // color rows
            $('table.time-table').find('tr').each(function(idx) {
                if (idx%2 == 1) {
                    $(this).addClass('odd');
                }
            });
        }
        
        // panel tab tracking
        function trackLink(type, id) {
            //get link name
            var pageurl = document.location.pathname;
            var pagesegments = pageurl.split('/');
            var pagename = pagesegments[pagesegments.length-2];
            //what we want to track
            var datatosend = document.location.pathname + " - " + type + '/' + (id+1);
            //send data to omniture
            try {
                s.sendDataToOmniture(pagename,'',{prop14:datatosend});
            } catch(e) {}
        }
        
    });
    
    function getParam(name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(window.location.href);
      if(results == null)
        return "";
      else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    function slugify(val) {
        return val.replace(/ /g,'-').replace(/\./g,'').toLowerCase();
    }
})(jQuery);