(function ($, window, undefined) {

    /*
     * extend jQuery for nicer syntax for rendering our menus and lists.
     */
    //update <li>s from json


    $.fn.appendLinkItems = function(links, surroundingTag) {
        var element = this;
        surroundingTag = surroundingTag || "<li>";
        $.each(links, function(i, link) {
            var a = $("<a>");
            if (link.title) { a.text(link.title); }
            if (link.html) { a.html(link.html); }
            if (link.href) { a.attr("href", link.href); }
            if (link.attr) { a.attr(link.attr); }
            element.append(
                $(surroundingTag).append(a).addClass(link.selected ? "selected" : "")
            );
        });
        return this;
    };

    $.fn.trackClick = function(type) {
        var element = this;
        element.on("click", function() {
            var linkname;
            var link = $(this);
            if (!!window.s && typeof s.sendDataToOmniture == 'function') {
                linkname = ("pbnav:" + type + " - " +  $.trim(link.text())).toLowerCase();
                s.sendDataToOmniture(linkname, '', {
                    "channel": s.channel,
                    "prop28": linkname
                });
            }
        });
        return this;
    };

    $.fn.trackShare = function(){
        var element = this;
        element.on("click", function() {
            var link = $(this);
            var type = link.attr("data-share-type");
            if (!!window.s && typeof s.sendDataToOmniture == 'function' && type) {
                s.sendDataToOmniture('share.' + type, 'event6', { eVar27: type }); 
            }  
        });
        return this;
    };

    $.fn.makeDropdown = function (menuElement, options) {
        var clickElement = this;
        options = options || {};
        options.disabled = false;

        //default behavior for dropdown
        var down = options.down || function (_clickElement, _menuElement) {
            nav.closeDropdowns();
            _clickElement.addClass("active");
            $(".leaderboard").addClass("hideAd");
            var windowHeight = $(window).height() - 50;
            _menuElement.css("height","");
            _menuElement.css("height", (windowHeight <= _menuElement.height()) ? windowHeight : "auto");
            _menuElement.css("width", _clickElement.outerWidth() );
            _menuElement.css("left", _clickElement.offset().left );
            _menuElement.slideDown('fast');
        };

        var up = options.up || function (_clickElement, _menuElement) {
            _menuElement.slideUp('fast', function () {
                _clickElement.removeClass("active");
                $(".leaderboard").removeClass("hideAd");
            });
        };

        clickElement.click(function (event) {
            if( !options.disabled ){
                event.stopPropagation();
                event.preventDefault();

                if (menuElement.find("li").length == 0) return;

                if(clickElement.is(".active")){
                    up(clickElement, menuElement);
                } else {
                    down(clickElement, menuElement);
                }

                options.disabled = true;
                setTimeout(function(){ 
                    options.disabled = false;
                }, 500);
            }
        });

        var hammertime = new Hammer(clickElement[0], { prevent_mouseevents: true });
        hammertime.on("tap",handleTap);

        return this;
    };

    //move header feature outside of pb-container, so that the menu sliding animation can work
    if( $("#pb-root .pb-f-page-header-v2").length && ($("#pb-root .pb-f-page-header-v2").siblings(".pb-feature").length || $("#pb-root .pb-f-page-header-v2").siblings(".pb-container").length) ) {
        (function () {
            var $header = $(".pb-f-page-header-v2");
            if (wp_pb.isAdmin) {
                var $placeholderText = $header.find('.header-placeholder');
                var $placeholder = $header.clone().html('').append($placeholderText);
                $header.attr('id', '');
                $header.after($placeholder);
            }
            $(".pb-f-page-header-v2 script").remove();
            $("#pb-root").before( $header );
        }());
    }

    //load the ad after the header has been moved, so it doesn't load twice. no callback on ad scripts, so have to set an interval to check
    if( $("#nav-ad:visible").length ){
        var adIntervalTimeout = 10; //only try this for five seconds, or deal with it
        var adInterval = setInterval(function(){
            if( typeof(placeAd2) != "undefined" ){
                $("#wpni_adi_88x31").append(placeAd2(commercialNode,'88x31',false,''));    
                clearInterval(adInterval)
            }    
            if (adIntervalTimeout == 0) clearInterval(adInterval);
            adIntervalTimeout--;
        }, 500);
    }

    //add tracking
    $("#site-menu a").trackClick("main");
    $("#share-menu a").trackShare();

    //activate dropdowns
    $("#wp-header .nav-btn[data-menu]").each(function(){
        $(this).addClass("dropdown-trigger");
        $(this).makeDropdown( $("#" + $(this).data("menu") ) );
    });

    //activate site menu with custom actions
    $("#site-menu-btn").makeDropdown( $("#site-menu"), {
        down: function(_clickElement, _menuElement){
            if (typeof window.wp_pb == 'object' && typeof window.wp_pb.report == 'function') {
                wp_pb.report('nav', 'menu_start_open', true);
                setTimeout(function() {
                    wp_pb.report('nav', 'menu_finish_open', true);
                }, 500);
            }
            nav.closeDropdowns();
            _menuElement.css("height", $(window).height() - 50);
            $("body").addClass( ($("#pb-root .pb-f-page-header-v2").length) ? "left-menu" : "left-menu left-menu-pb" );
            _clickElement.addClass("active");
            _menuElement.addClass("active");
        },
        up: function(_clickElement, _menuElement){
            $("body").removeClass("left-menu").removeClass("left-menu-pb");
            _clickElement.removeClass("active");
            _menuElement.removeClass("active");
            if (typeof window.wp_pb == 'object' && typeof window.wp_pb.report == 'function') {
                wp_pb.report('nav', 'menu_start_close', true);
                setTimeout(function() {
                    wp_pb.report('nav', 'menu_finish_close', true);
                }, 500);
            }
        }
    });

    var hammertime = new Hammer( document.getElementById("site-menu"), {
        dragLockToAxis: true,
        dragBlockHorizontal: true
    });

    hammertime.on( "dragleft swipeleft", function(ev){ 
        ev.gesture.preventDefault();
        ev.gesture.stopPropagation();
        if( ev.gesture.direction == "left" && $("body").is(".left-menu") ){
            $("#site-menu-btn").click();
        }
    });

    /* search-specific manipulation */
    $(".ios #nav-search-mobile input").focus(function(){
        $("header").css("position","absolute").css("top",window.pageYOffset);
    }).blur(function(){
        $("header").css("position","fixed").css("top",0);
    });

    //trigger window resize when mobile keyboard hides
    $("#nav-search-mobile input").blur(function(){
        $( window ).resize();
    });

    $(document).keyup(function(e) {
        // If you press ESC while in the search input, you should remove focus from the input
        if (e.keyCode == 27 && $("#nav-search input[type=text]").is(":focus")) {
            $("#nav-search input[type=text]").blur();
        }
    });

    $("#nav-search,#nav-search-mobile").submit(function (event) {
        if ($(this).find('input[type=text]').val()) {
            try{
                s.sendDataToOmniture('Search Submit','event2',{'eVar38':$(this).find('input[type=text]').val(),'eVar1':s.pageName});
            } catch(e) {}
            return true;
        } else {
            return false;
        }
    });

    /*
     * CLIENT SIDE API for CUSTOMIZING the HEADER
     */

    // There should only be one navigation per page. So our navigation object is a singleton.
    // Heavy dependency on jQuery
    var core = window.wp_pb = window.wp_pb || {};
    var nav = core.nav = core.nav || {};
    var deprecated = function () {};

    nav.setSearch = nav.showTopMenu = nav.hideTopMenu = nav.showPrimaryLinks =
    nav.hidePrimaryLinks = nav.showInTheNews = nav.hideInTheNews = nav.showAdSlug =
    nav.hideAdSlug = nav.showSectionName = nav.hideSectionName =
    nav.setMainMenu = nav.setSectionMenu = nav.setSectionName = deprecated;

    nav.showIdentity = function () {
        nav.renderIdentity();
        showIdentity = true;
    };

    nav.hideIdentity = function () {
        $("#nav-user").hide();
        $("nav-sign-in").hide();
        showIdentity = false;
    };

    nav.showSearch = function () {
        $("#nav-search").show();
    };

    nav.hideSearch = function () { 
        $("#nav-search").hide(); 
    };

    nav.showSubscription = function () {
        $("#nav-subscription").show();
    };

    nav.hideSubscription = function () { 
        $("#nav-subscription").hide(); 
    };
    
    var setMenu = function (elem, menu) {
        var element = $(elem);
        element.children('li').remove();
        element.appendLinkItems(menu);
    };

    nav.setIdentityMenu = function (menu) {
        setMenu("#user-menu ul", menu);
    };

    nav.setPageTitle = function(name){
        $('#nav-page-title').text(name);
        $("#share-menu").data('title', name);
    };

    nav.setShareUrl = function(url){
        $("#share-menu").data('permalink',url);
    };

    nav.setTwitterHandle = function(handle){
        if($('#share-menu a[data-share-type="Twitter"]').length){
            $('#share-menu a[data-share-type="Twitter"]').data('twitter-handle', handle);
        }
    };

    nav.closeDropdowns = function(){
        $("#wp-header .dropdown-trigger.active").each(function(){
            $(this).removeClass("active");
            $("#"+$(this).data("menu")).hide();
        });
        $(".leaderboard").removeClass("hideAd");
    }


    var scrollEvents = {},
        scrollPos = $(this).scrollTop();

    var forceOpen = $("#wp-header").is(".stay-open");

    $(window).scroll(function () {

        /* show and hide nav on scroll */
        var currentPos = $(this).scrollTop();
        if (!forceOpen) {   

            if( (currentPos + 20) < scrollPos || currentPos === 0 ){
                nav.showNav();
                scrollPos = currentPos;
            } else if ( (currentPos - 20) > scrollPos && currentPos > 50 ){
                nav.hideNav();
                scrollPos = currentPos;
            }
        }

        /* listen for show/hide title */

        if (scrollEvents.length == 0) return;

        for (var i in scrollEvents) {
            if (scrollEvents.hasOwnProperty(i)) {
                if ( currentPos >= scrollEvents[i].targetPosition) {
                    scrollEvents[i].down.call();
                } else if (currentPos < scrollEvents[i].targetPosition) {
                    scrollEvents[i].up.call();
                }
            }
        }

    });

    $(window).resize(function() {
        //remove standard dropdowns
        nav.closeDropdowns();
        //resize site menu, if open
        if($("body").is(".left-menu")){
            $("#site-menu").css("height", $(window).height() - 50);
        }
    });

    nav.showNav = function(){
        if (typeof window.wp_pb == 'object' && typeof window.wp_pb.report == 'function') {
            wp_pb.report('nav', 'show_attempt', true);
        }

        if( $("#wp-header").is(".bar-hidden") ){
            $("#wp-header").removeClass("bar-hidden");

            if (typeof window.wp_pb == 'object' && typeof window.wp_pb.report == 'function') {
                wp_pb.report('nav', 'start_open', true);
                setTimeout(function() {
                    wp_pb.report('nav', 'finish_open', true);
                }, 250);
            }
        }
    };

    nav.hideNav = function(){
        if( !$("#wp-header").is(".bar-hidden") && !$("#wp-header .nav-btn.active").length ){
            $("#wp-header").addClass("bar-hidden");

            if (typeof window.wp_pb == 'object' && typeof window.wp_pb.report == 'function') {
                wp_pb.report('nav', 'start_close', true);
                setTimeout(function() {
                    wp_pb.report('nav', 'finish_close', true);
                }, 250);
            }
        }
    };

    nav.showTitleOnScroll = function($target){
        var element = $target;
        scrollEvents["titleScroll"] = {
            targetPosition: element.offset().top + 50,
            down: function () { 
                if( !$('#wp-header').is(".title-mode") ){
                    $('#wp-header').addClass('title-mode');
                    $("#wp-header .nav-middle").css( "padding-right",  $("#wp-header .nav-right").outerWidth() );
                    nav.closeDropdowns();
                }   
            },
            up: function () { 
                if( $('#wp-header').is(".title-mode") ){
                    $('#wp-header').removeClass('title-mode'); 
                    nav.closeDropdowns();
                }   
            }
        };
    };

    if ( $('#nav-page-title[data-show-on-scroll="true"]').length ){
        var $target = ( $(".nav-scroll-target").length ) ? $(".nav-scroll-target") : $("h1, h2");
        if( $target.length ) nav.showTitleOnScroll( $target.first() );
    }
        
    nav.renderShare = function(){
        $share = $("#share-menu");
        $facebook = $('a[data-share-type="Facebook"]', $share);
        $twitter = $('a[data-share-type="Twitter"]', $share);
        $linkedin = $('a[data-share-type="LinkedIn"]', $share);
        $email = $('a[data-share-type="Email"]', $share);
        $pinterest = $('a[data-share-type="Pinterest"]', $share);

        if ($facebook.length){
            $facebook.click(function(event){
                 window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent( $("#share-menu").data('permalink') ),'','width=658,height=354,scrollbars=no');
                return false;
            });
        }

        if ($twitter.length){
            $twitter.click(function(event){
                var twitterHandle = ($(this).data("twitter-handle")) ?  $(this).data("twitter-handle").replace("@","") : "washingtonpost";
                window.open('https://twitter.com/share?url=' + encodeURIComponent( $("#share-menu").data('permalink') ) + '&text=' + encodeURIComponent( $("#share-menu").data('title') ) + '&via=' + twitterHandle ,'','width=550, height=350, scrollbars=no');
                return false;
            });
        }

        if ($linkedin.length){
            $linkedin.click(function(event){
                window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent( $("#share-menu").data('permalink') ) + '&title=' + encodeURIComponent( $("#share-menu").data('title') ),'','width=830,height=460,scrollbars=no');
                return false;
            });
        }

        if ($email.length){
            $email.click(function(event){
                window.open('mailto:?subject=' + encodeURIComponent( $("#share-menu").data('title') ) + ' from The Washington Post&body=' + encodeURIComponent( $("#share-menu").data('permalink') ),'','');
                return false;
            });
        }

        if($pinterest.length){
            $pinterest.click(function(event){
                var e = document.createElement('script');
                e.setAttribute('type','text/javascript');
                e.setAttribute('charset','UTF-8');
                e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r=' + Math.random()*99999999);
                document.body.appendChild(e);
            });
        }

    };

    if( $("#share-menu").length ){
        nav.renderShare();
    }

    var idp; //private variable. There can be only one provider. So this is a singleton.
    nav.getIdentityProvider = function () {
        return idp;
    };
    nav.setIdentityProvider = function (provider) {
        var ef = function () {}; //empty function
        idp = {};
        // we'll pad any missing portion with empty function
        idp.name = provider.name || "";
        idp.getUserId = provider.getUserId || ef;
        idp.getUserMenu = provider.getUserMenu || ef;
        idp.getSignInLink = provider.getSignInLink || ef;
        idp.getRegistrationLink = provider.getRegistrationLink || ef;
        idp.isUserLoggedIn = provider.isUserLoggedIn || ef;
        idp.isUserSubscriber = provider.isUserSubscriber || ef;
        
        idp.render = provider.render || function () {
            if (idp.isUserLoggedIn()) {
                $("#nav-user .username").text(idp.getUserId());
                $("#nav-user-mobile a").text(idp.getUserId());
                nav.setIdentityMenu(idp.getUserMenu());
                $("#nav-user").removeClass("hidden");
                $("#nav-user-mobile").removeClass("hidden");
                $("#nav-user-mobile a").attr("href",idp.getUserMenu()[0]["href"]);
                if( idp.isUserSubscriber() === "0" ){
                    $("#nav-subscribe").removeClass("hidden");
                    $("#nav-subscribe-mobile").removeClass("hidden");
                }
            } else {
                $("#nav-sign-in").attr("href", idp.getSignInLink()+"&nid=top_pb_signin").removeClass("hidden");
                $("#nav-sign-in-mobile").removeClass("hidden").find("a").attr("href", idp.getSignInLink()+"&nid=top_pb_signin");
                $("#nav-subscribe").removeClass("hidden");
                $("#nav-subscribe-mobile").removeClass("hidden");
            }
        };

        //let's render
        nav.renderIdentity();
    };
    nav.renderIdentity = function (callback) {
        callback = callback || function () {};
        if (idp) { // the user might not have configured any identity. So check for it.
            idp.render();
        }
        callback(idp);
    };

    /*
     * Using the privded API, set up the default identity provider as TWP
     */

    // if the identity component were set as hidden from PageBuilder admin
    // set a flag so that we don't process login at all
    var showIdentity = $("#nav-user").data("show-identity");

    // default Identity
    var current = window.location.href.split("?")[0];
    var twpIdentity = {
        name: "TWP",
        getUserId: function () {
            var username = TWP.Util.User.getUserName();
            var userid = TWP.Util.User.getUserId();
            if (typeof username == "string" && username.length > 0) {
                return username;
            } else {
                return userid;
            }
        },
        getUserMenu: function () {
            return [
                { "title": "Profile", "href": TWP.signin.profileurl + current + '&refresh=true' },
                { "title": "Log out", "href": TWP.signin.logouturl_page }
            ];
        },
        getSignInLink: function () {
            return TWP.signin.loginurl_page + current;
        },
        getRegistrationLink: function () {
            return TWP.signin.registrationurl_page + current;
        },
        isUserSubscriber: function (){
            sub = (document.cookie.match(/rplsb=([0-9]+)/)) ? RegExp.$1 : ''; 
            return sub;
        },
        isUserLoggedIn: function () {
            return (TWP.Util.User) ? TWP.Util.User.getAuthentication() : false;
        }
    };

    // If we are showing identity then set the default identity provider to TWP.
    //   User can overide this whenever they want.
    //
    // In TWP, identity user interface needs to processed after the fact that all other javascript has been loaded.
    //   But the js resources are loaded asynchronously and it doesn't have any callbacks hooks. So we watch for it.
    if (showIdentity) {
        //try to load TWP only if we are showing Identity.
        var init = new Date().getTime();
        (function checkTWP() {
            // if there's already idp set, then don't try to load TWP.
            if (!nav.getIdentityProvider()) {
                if (TWP && TWP.signin && TWP.Util) { // make sure TWP has been loaded.
                    nav.setIdentityProvider(twpIdentity);
                    nav.renderIdentity();
                } else {
                    var now = new Date().getTime();
                    // after 3 seconds, if TWP indentity hasn't been loaded. Let's just stop.
                    if (now - init < 3 * 1000) {
                        // if it hasn't been loaded, we wait few milliseconds and try again.
                        window.setTimeout(function () { checkTWP(); }, 200);
                    }
                }
            }
        }());
    }

    /* hammer.js tap */

    function handleTap(ev) {
        ev.gesture.preventDefault();
        ev.gesture.stopPropagation();
        $(ev.gesture.target).click();
    }

}(jQuery, window));


;(function($, TWP, undefined) {
    var AD_LOAD_TIMEOUT = 7000;
    var AD_SCROLL_HIDE_TIMEOUT = 600;
    var AD_SIZER_INTERVAL = 200;
    var AD_MIN_VISIBLE = 2000;
    var AD_HEIGHT_OUTER = 181;
    var ANIM_SPEED = 250;

    var $pbcontainer = getFeature().closest('.pb-container');

    var applyStickiness = function() {
        var _stickied = false;

        return function() {
            // temporary - dark theme needs defined width on ad area when sticky
            if ( darkTheme() ) {

                $(window)
                    .on('resize.lb-ad-sizer scroll.lb-ad-sizer', debounce(function() {

                        if ( sticky() ) {
                            getFeature().css({ width: getFrameWidth() });   
                        }

                    }, AD_SIZER_INTERVAL, false));
            }

            $(window).off('scroll.lb-sticky')
                .on('scroll.lb-sticky', function(e) {
                    e.stopPropagation();

                    var $leaderboard = getFeature();

                    if (_stickied) return;

                    _stickied = true;

                    $('html')
                        .addClass('lb-persist-top-true')
                        .removeClass('lb-persist-top-false');
                });
        };
    }();

    if ( !!TWP.Features.Ad.Leaderboard.sticky ) {
        applyStickiness();
    }

    if ( !!TWP.Features.Ad.Leaderboard.belowSharebar ) {
        applySharebarPosition();
    }

    $(window.document).on('abtest-ready', function(e, ABT) {
        var test = ABT.get('ads-leaderboard');

        getFeature().attr('moat-test-id', [
            getFeature().attr('moat-id') || 'unknown/unknown',
            test.name || 'control'
        ].join('-'));

        if ( test.is('below_sharebar') ) {
            applySharebarPosition();
        }

        if ( test.is('sticky') ) {
            applyStickiness();
        }
    });

    $(function() {

        var _adloaded = false;

        ;(function(callback) {
            var intervalId = setInterval(handler(), 10);

            function handler() {
                
                var result = function() {
                    var $ad = getFeature().find('iframe[src^="javascript"]');

                    if ( $ad.length == 2 ) {
                        callback($ad, intervalId);
                    }   
                };

                result();

                return result;
            }
        })(function($ad, intervalId) {
            clearInterval(intervalId);

            var ad; $ad.each(function() {
                var $el = $(this);

                if ( !/(hidden)/g.test( $el.attr('id') ) ) {
                    ad = $el;
                }
            })

            var _onload = ad.onload;
            ad.onload = function() {
                ad.onload = _onload;
                onload();
            };

            setTimeout(function() {
                onload();
            }, AD_LOAD_TIMEOUT);

            function onload() {
                var tid;
                var stow = function() {
                    var callback = function() {
                        $(window).off('scroll.lb-sticky resize.lb-ad-sizer scroll.lb-ad-sizer');

                        if ( darkTheme() ) {
                            getFeature().css({ width: '' });
                        }

                        if ( !!tid ) {
                            clearTimeout(tid);
                        }
                    };

                    var position = $(window).scrollTop();

                    if ( position <= 0 ) {
                        callback();
                    } else {
                        
                        /*$(window).off('scroll.lb-stow')
                            .on('scroll.lb-stow', debounce(callback, AD_SCROLL_HIDE_TIMEOUT, false));*/

                        tid = setTimeout(function() {
                            handler( !!( $(window).scrollTop() <= AD_HEIGHT_OUTER  ) );

                            callback();

                            function handler(noTransition) {
                                var $f = getFeature();

                                $f.removeClass('ad-nudge')
                                $f.addClass('lb-hidden');

                                setTimeout(function() {
                                    $f.removeClass('lb-hidden');

                                    $('html')
                                        .removeClass('lb-persist-top-true')
                                        .addClass('lb-persist-top-false');
                                }, ANIM_SPEED);
                            }
                        }, AD_MIN_VISIBLE);
                    }

                };

                if (!_adloaded) {
                    _adloaded = true;

                    stow();
                }
            }
        });

        wp_pb.register('nav', 'start_open', function() {
            var $f = getFeature();

            setTimeout(function() {
                if ( $(window).scrollTop() <= AD_HEIGHT_OUTER ) {
                    handler(true);
                } else {
                    setTimeout(function() {
                        handler();
                    }, AD_MIN_VISIBLE);
                }

                function handler(noTransition) {
                    if ( !$('html').hasClass('lb-persist-top-true') ) return;

                    if (noTransition) $f.addClass('noTransition');

                    $f.removeClass('ad-nudge');

                    if ( !_adloaded ) {
                        
                        $f.addClass('lb-hidden');

                        setTimeout(function() {
                            $f.removeClass('lb-hidden');
                            $('html')
                                .removeClass('lb-persist-top-true')
                                .addClass('lb-persist-top-false');
                        }, ANIM_SPEED);
                    }
                }
            }, ANIM_SPEED);
        });

        wp_pb.register('nav', 'start_open', function() {
            if ( !$('html').hasClass('lb-persist-top-true') ) return;

            getFeature().addClass('ad-nudge');
        });

        wp_pb.register('nav', 'start_close', function() {
            if ( !$('html').hasClass('lb-persist-top-true') ) return;

            getFeature().removeClass('ad-nudge');
        });
    });

    function applySharebarPosition() {
        var $leaderboard = getFeature();
        var $shareBar = getSharebar();

        return $leaderboard.insertAfter($shareBar);
    }

    function getFeature() {
        return $('.pb-f-ad-leaderboard');
    }

    function getSharebar() {
        return $('.pb-f-sharebars-top-share-bar');
    }

    function getNavbar() {
        return $('#nav-bar');
    }

    function debounce(func, wait, immediate) {
        var timeout;

        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function sticky() {

        return $('html').hasClass('lb-persist-top-true');
    }

    function getFrameWidth() {

        return $('#pb-root').width();
    }

    function darkTheme() {

        return $('body').hasClass('pb-theme-dark');
    }

})(jQuery, TWP);

(function($){


})(jQuery);

(function($){

   var socialTools = {
   		myRoot : '.top-sharebar-wrapper',
		init:function (myRoot) {
			myRoot = myRoot || this.myRoot;
			$(myRoot).each(function(index, myRootElement){
				if (wp_pb.StaticMethods.staticPostShare) {
					myRootElement.postShare = new wp_pb.StaticMethods.staticPostShare();
					myRootElement.postShare.init($(myRootElement), $(myRootElement).data('postshare'), 'top-share-bar');
				}
				var $root = $(myRootElement), 
					$individualTool = $('.tool:not(.more)',$root),
					$socialToolsWrapper = $('.social-tools-wrapper',$root),
					$socialToolsMoreBtn = $('.tool.more',$socialToolsWrapper),
					$socialToolsAdditional = $('.social-tools-additional',$root),
					$socialToolsUtility = $('.utility-tools-wrapper',$root),
					width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
					isMobile = (mobile_browser === 1 && width < 480) ? true : false,
					config = {'omnitureEvent' : 'event6'};			
	
				$socialToolsMoreBtn.off('click').on('click',this,function(ev){	
					if(isMobile){$socialToolsUtility.hide('fast');};		
					$socialToolsMoreBtn.hide('fast');
						$socialToolsAdditional.show('fast',function(ev){
							$('.tool',$socialToolsWrapper).animate({"width":40},250);
							$root.addClass("expanded");
							$('.social-tools',$socialToolsAdditional).animate({"margin-left":0},250);
							if(isMobile){$socialToolsUtility.show('slow');};		
						});//end addtl show
				});//end more click 
				$individualTool.bind({
					click: function(event){
						//event.stopPropagation();
						if (typeof window.sendDataToOmniture === 'function' ) {
							var shareType = $(this).attr('class');
							shareType = (typeof shareType != 'undefined')?shareType.split(" ")[0].trim():'';
							var omnitureVars =  {
						            "eVar1":(typeof window.s == 'object') && s && s.eVar1,
						            "eVar2":(typeof window.s == 'object') && s && s.eVar2,
						            "eVar8":(typeof window.s == 'object') && s && s.eVar8,
						            "eVar17":(typeof window.s == 'object') && s && s.eVar17,
						            "eVar27":''
						    		};
							omnitureVars.eVar27 = shareType;
							var eventName = config.omnitureEvent;
		                    try {
		                        sendDataToOmniture('share.' + shareType,eventName,omnitureVars);
		                    } catch (e){}    
						}
					}
				});
				if(wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.tablet){
					$root.addClass("tablet");
				}
				
				//move utilities from right to left on linebreak
				if (($socialToolsUtility.width() + $socialToolsWrapper.find(".social-tools-primary").width() + ($root.find('#slug_tiffany_tile').is(':visible')?$root.find('#slug_tiffany_tile').outerWidth(true):0) + ($socialToolsWrapper.find(".whatsapp")&&!$root.hasClass("tablet")&&!TWPHead.desktop?$socialToolsWrapper.find(".whatsapp").outerWidth(true):0) - $root.width()) >= 0) {
					$socialToolsUtility.addClass("left");
				}
				$(window).resize(function() {
					if (($socialToolsUtility.width() + $socialToolsWrapper.find(".social-tools-primary").width() + $socialToolsAdditional.width() + ($root.find('#slug_tiffany_tile').is(':visible')?$root.find('#slug_tiffany_tile').outerWidth(true):0) - $root.width()) >= 0) {
						$socialToolsUtility.addClass("left");
					} else {
						$socialToolsUtility.removeClass("left");
					}
				});

				$root.removeClass("unprocessed");
			});
  		 }
  	};	 

   var textResizer = {
   		currIncrementMax:4,
   		currIncrementUnit:2,
   		currIncrementIndex:0,
   		init: function (myRoot,resizeableElementList,clickElement) {
   			myRoot = myRoot || '#article-body article, .related-story, .liveblog-intro, #liveblog-story-list .description, #full-recipe .article-content';
	   		resizeableElementList = resizeableElementList || 'p, li';
	   		clickElement = clickElement || '.tool.textresizer';
			this.root = $(myRoot);
			this.resizeableElements = $(resizeableElementList, this.root);

			// add "Next up" lable to the resizable element's list
			if($(".related-story").prev('h3').length > 0){
				this.resizeableElements.push($('.related-story').prev('h3'));
				this.resizeableElements.push($('.related-story h4 a'));
			}
			$(clickElement).unbind('click').on('click',this,this.resize);
		},
		resize: function (event) {	
			var currObj = event.data;
			if (currObj.currIncrementIndex == currObj.currIncrementMax) {
				currObj.currIncrementIndex = 0;
				currObj.currIncrementUnit = (currObj.currIncrementUnit == 2)?-2:2;
			}
			currObj.currIncrementIndex = currObj.currIncrementIndex + 1;
			currObj.resizeableElements.each(function(){
				elm = $(this);
				currSize= parseFloat(elm.css('font-size'),5);
				var result = currSize + currObj.currIncrementUnit;
				elm.css('font-size', result);
				wp_pb.report('textresizer', 'resized', result);
			});	

			
		}
   };

   window.TWP = TWP || {};
   TWP.SocialTools = TWP.SocialTools || socialTools;
   TWP.TextResizer = TWP.TextResizer || textResizer;

   TWP.TextResizer.init();
   TWP.SocialTools.init();
	// testing darwin
	$(window.document).on('abtest-ready', function(e, ABT) {
		var test = ABT.get('dummy-feature');
	});

   /*
	 * POPOUT code for later var $article = $('#article-topper'); // START:
	 * Social share pop-out var $socialToolsMoreBtn = $('.social-tools
	 * .more',$article), $socialToolsPopOut =
	 * $('.social-tools.pop-out',$article) ;
	 * $socialToolsMoreBtn.on('click',function(ev){ var targetTop =
	 * $socialToolsMoreBtn.position().top +
	 * $socialToolsMoreBtn.outerHeight()-1-14; var targetLeft =
	 * $socialToolsMoreBtn.position().left-1-3;
	 * $socialToolsPopOut.css({"top":targetTop,"left":targetLeft});
	 * $socialToolsPopOut.toggle(); });
	 * $socialToolsPopOut.on('mouseout',function(ev){
	 * $socialToolsPopOut.toggle(); }); // END: Social share pop-out
	 */
})(jQuery);

(function($){
	var
		$article = $('#article-body')
		,$d = $(document)
		,$w = $(window)
		,$b = $('body')
	;

	window.cr_on = false;

	$("iframe[data-src]",$article).each(function(i){
		var $this = $(this);
		$this.attr('src', $this.attr('data-src') )
	});

	$("#about-the-authors").click(function(e){
		var $this = $(this);
		var $container = $this.closest('.multi-author-bio');
		if( !!$container ){
			if( $container.hasClass("open") ){
				$container.removeClass("open").addClass("closed");
			}else{
				$container.removeClass("closed").addClass("open");
			}
			wp_pb.report('global','domChanged');
		}
	});

	var $tables = $('div.extra table',$article);
	$tables.each(function(){
		var
			$table = $(this)
			,$bars = $('.barchart',$table)
			,longestBar = 0
		;
		$bars.each(function(i){
			var
				$bar = $(this)
				,w = $bar.attr('width')
			;
			if( !isNaN(w) ){
				w=w*1;
			longestBar=(w>longestBar)?w:longestBar;
			}
		});
		$bars.each(function(i){
			var
				$bar = $(this)
				,w = $bar.attr('width')
			;
			if( !isNaN(w) ){
				w=w*1;
				var
					scale = ($article.width() > 480) ? 0.85 : 0.75
					relativeWidth=scale*(Math.ceil( 100*(w/longestBar)*100)/100 )
				;
				$bar.css("width",relativeWidth+'%')
			}
		});
	});

	var hasResizableIframe=false;
	$('iframe[width][height]',$article).each(function(i){
		var
			$iframe = $(this)
			,w=$iframe.attr("width")
			,h=$iframe.attr("height")
		;
		/*
		if(w=="100%" && isNaN(h)){
			w=$iframe.width();
			h=$iframe.height();
		}
		*/
		if(!isNaN(w) && !isNaN(h)){
			$iframe.attr("data-aspect-ratio",w/h);

			if( $iframe.attr("width")!=$article.width() ){
				var hFudgeFactor = $iframe.attr("src").match(/instagram.com/) ? 40 : 0;
				$iframe.attr("width", Math.round($article.width()));
				$iframe.attr("height", Math.round($article.width()/$iframe.attr("data-aspect-ratio"))+hFudgeFactor);
			}

			if(!hasResizableIframe){
				hasResizableIframe=true;
				$w.resize(function(ev){
					$('iframe[data-aspect-ratio]',$article).each(function(i){
						var
							$ifr = $(this)
							hFF = $ifr.attr("src").match(/instagram.com/) ? 40 : 0
						;
						$ifr.attr("width", Math.round($article.width()));
						$ifr.attr("height", Math.round($article.width()/$ifr.attr("data-aspect-ratio"))+hFF);
					});
				});
			}
		}
	});

	var handleGifTap = function(event) {
		var $button = $(this),
		$img = $button.parent().find('img'),
		src = $img.attr('src');
		if (src.indexOf('imrs.php') >= 0) {
			$img.attr('src', src.split("src=")[1].split("&")[0]);
		}
		$button.hide();
	};
	
	var handleImgTap = function(event) {
		var $img = $(this),
		$button = $img.parent().find('.gif-overlay-play-wrapper'),
		src = $img.attr("data-low-res-src");
		$img.attr('src', src);
		$button.show();
	};
	
	$('.gif-overlay-play-wrapper').each(function(index, item){
		var $item = $(item),
		$relImg = $item.parent().find('img');
		if ($item.height() == 0) {
			$item.parent().find('img').on("load", function() {
				$item.height($(this).height());
			});
		}
		var hammertime2 = new Hammer($item[0], { prevent_mouseevents: true });
	    hammertime2.on("tap",handleGifTap);
	    var hammertime2 = new Hammer($relImg[0], { prevent_mouseevents: true });
	    hammertime2.on("tap",handleImgTap);
	})

	/**** CONTINUED READING ****/

	// var paragraphsToShow = 3;

	// var collapseArticle = function() {
	// 	var $collapseArticleBtn = $('#article-body-collapsed');

	// 	$article.addClass('collapsed').css('height', $article.find('p').eq(paragraphsToShow).position().top + 110);


	// 	var articleText = $article.find('article').html().split('<p>');
	// 	articleText.splice(0, paragraphsToShow + 1);
	// 	articleText = articleText.join('<p>');
	// 	var minutesLeft = getMinutesLeft(articleText);

	// 	$collapseArticleBtn.find('.minutes-left').text(getLabel(minutesLeft));
	// 	$collapseArticleBtn.show();
	// 	$collapseArticleBtn.click(function() {
	// 		$article.removeClass('collapsed').css('height', '');
	// 		$(this).hide();
	// 		s.sendDataToOmniture('continue_reading', 'event4', {eVar26: 'continue-reading'});

	// 		var cr_event = document.createEvent('Event');
	// 		cr_event.initEvent('cr_clicked', true, true);
	// 		document.dispatchEvent(cr_event);
	// 	});

	// 	function getLabel(num) {
	// 		if(num > 10) {
	// 			return '10+ minutes left';
	// 		} else if(num === 1) {
	// 			return '1 minute left';
	// 		} else {
	// 			return num + ' minutes left'
	// 		}
	// 	}

	// 	function getMinutesLeft(str) {
	// 		var words = str.replace(/<[^>]*>?/gm, '').match(/\S+/g),
	// 			iframes = str.match(/<iframe/g),
	// 			images = str.match(/<img/g);

	// 		var wordCount = (words) ? words.length : 0,
	// 			iframeCount = (iframes) ? iframes.length : 0,
	// 			imageCount = (images) ? images.length : 0,
	// 			mediaCount = iframeCount + imageCount;

	// 		var wordCountSeconds = wordCount / 4.16, //people read 4.16 words per second
	// 			mediaCountSeconds = mediaCount * 10, //people might take ten seconds to look at an image
	// 			totalSeconds = wordCountSeconds + mediaCountSeconds,
	// 			minutesLeft = Math.round(totalSeconds / 60);

	// 		return minutesLeft;
	// 	}
	// };

	// if(wp_pb.BrowserInfo.mobile_browser && !wp_pb.BrowserInfo.tablet && $article.find('p').length > paragraphsToShow) {
	// 	collapseArticle();
	// 	window.cr_on = true;
	// 	if(typeof Hammer === 'function') {
	// 		try {
	// 			var collapseHammer = new Hammer($('#article-body-collapsed')[0], { prevent_mouseevents: true, stop_browser_behavior: false });
	//         	collapseHammer.on("tap", function(ev) {
	//         		ev.gesture.preventDefault();
	// 		        ev.gesture.stopPropagation();
	// 		        $(ev.gesture.target).click();
	//         	});
	//         } catch(err) {}
	// 	}
	// }

})(jQuery);

(function($) {
  
  var $socialToolsBottom = $('.social-tools-bottom'),
      $individualTools = $socialToolsBottom.children(),
      config = { 'omnitureEvent': 'event6' };
  
  $('.social-tools-wrapper-bottom').each(function(index, myRootElement){
	  if (wp_pb.StaticMethods.staticPostShare) {
		  myRootElement.postShare = new wp_pb.StaticMethods.staticPostShare();
		  myRootElement.postShare.init($(myRootElement), $(myRootElement).data('postshare'), 'page-share-bar');
	  }
  });

  $individualTools.on('click', function(e) {
    if (typeof window.sendDataToOmniture === 'function' ) {
      var shareType = $(this).data('sharetype'),
          eventName = config.omnitureEvent,
          omnitureVars = {
            "eVar1": (typeof window.s == 'object') && s && s.eVar1,
            "eVar2": (typeof window.s == 'object') && s && s.eVar2,
            "eVar8": (typeof window.s == 'object') && s && s.eVar8,
            "eVar17": (typeof window.s == 'object') && s && s.eVar17,
            "eVar27": ''
          };
      omnitureVars.eVar27 = shareType;
      try {
          sendDataToOmniture('share.' + shareType, eventName, omnitureVars);
      } catch (e){
        console.log(e);
      }
    }
  });

})(jQuery);

$(function() {
    wp_pb = window.wp_pb || {};
    wp_pb.CommentLoader = wp_pb.CommentLoader || function(){
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
            isMobile = ((wp_pb && wp_pb.BrowserInfo && wp_pb.BrowserInfo.mobile_browser === 1) && width < 480 ) ? true : false,
            loadDeferred = ($('.echo_container.defer').length > 0) ? true : false,
            loadDeferredMobile = ($('.echo_container.deferMobile').length > 0) ? true : false,
            noMobile = ($('.echo_container.no-mobile').length > 0 && isMobile) ? true : false,
            $window = $(window),
            $echoPlaceholder = $('.echo_container_placeholder'),
            loadThreshhold = .70,
            env = wp_pb.environment || "production",
            apiBaseURL = (env == 'production')?'https://comments-api.ext.nile.works':'https://comments-api-staging.ext.nile.works',
            forceShowComments = $(document).getUrlParam("sc"), //get any relevant QS parameters
            commentOverlay = {
                    overlayElements: {
                        overlay: '#comment_overlay',
                        articleWrapper: '.article-wrapper',
                        articleTopper: '.article-topper',
                        articleParent: '.story-stream',
                    }, 
                    onClose: function(data) {
                        data.overlay = data.overlay || $(commentOverlay.overlayElements.overlay);
                        data.overlay.addClass('overlay-closed');
                        
                        /*** STORYLINE COMMENTS CODE; DEPRECATED ***/
                        /*  $(window.document).off('scroll.TWP.Comments');
                            if (!data.action || data.action != 'story_closed') {
                                $('#story-stream-tools').css('display','block'); 
                            }
                        */     
                    },
                    onOpen: function(data) {
                        //hack to make the comments overlay work with the site menu open. LP will revisit.
                        if($('body').is('.left-menu')) {
                            $('#site-menu-btn').click();
                            setTimeout(function() {
                                data.overlay.addClass('overlay-fixed').removeClass('overlay-absolute');
                                data.overlayWrapper.removeClass('overlay-closed'); 
                            }, 600);
                        } else {
                            data.overlay.addClass('overlay-fixed').removeClass('overlay-absolute');
                            data.overlayWrapper.removeClass('overlay-closed'); 
                        }
                            
                    },
                    onScroll: function(event){

                    },
                    closeSelector: "a.close"};        


        var loadComments = function() {
            if (!noMobile) {
                if (typeof wp_e2 == 'undefined' || typeof wp_e2.initStatus == 'undefined') {
                    //echo code below.  Comment out for in-house
                    //var domain = (env == "production") ? "js.washingtonpost.com" : "qaprev.digitalink.com";
                    //TWPHead && TWPHead.load("//" + domain + "/1d/hjs/twp-comments.js" + "?token=b20140708165000");
                    //end echo code
                    //in-house code below.  Comment out for Echo production
                    var domain = (env == "production") ? "//js.washingtonpost.com/pb" : "/pb";
                    var outputtype = (env == "production") ? "&outputType=javascript" : "&outputType=javascript";
                    var resourceToken = wp_pb.resourceToken || '201504300950';
                    TWPHead && TWPHead.load( domain + "/1d/hjs/twp-comments.js" + "?token=" + resourceToken + outputtype);
                    //end in-house code
                }
            }
        };


        var showComments = function(data) {
     
            loadComments();
            $window.off('scroll.showComments'); 

            var $overlay = $(commentOverlay.overlayElements.overlay);  //check for overlay element

            if ($overlay.length == 0) {  //standard functionality
                $('.comment-summary.summary-expanded, .comment-summary.summary-expanded-mobile, .comment-summary.summary-expanded-desktop')
                    .slideUp('fast', function() {
                        $('.echo_container.comments-collapsed').removeClass('comments-collapsed')
                            .addClass('comments-expanded')
                            .slideDown('fast', function() {
                                wp_pb.report('global', 'domChanged');
                            });
                        $(this).addClass('summary-collapsed').removeClass('summary-expanded summary-expanded-mobile summary-expanded-desktop');
                        if (typeof window.sendDataToOmniture === 'function') {
                            try {
                                sendDataToOmniture('echo.gotoComments', 'event5', {
                                    "eVar26": "go to comments"
                                });
                            } catch (err) {}
                        }
                    })
                $echoPlaceholder.parent()[0].scrollIntoView();
            
            } else { 
                //comments displayed in side/overlay
                //comments moved to appropriate place in DOM, positioned, and refreshed.  

                if (typeof data == 'undefined') {
                    //do nothing
                    return;
                }

                $overlayWrapper = data.elm.parents(commentOverlay.overlayElements.articleWrapper);

                if(!$overlay.is('.overlay-closed')) {
                    //if the comments are open, close them
                    wp_pb.report('comments', 'commentsMultiClosed', {'overlay': $overlay, 'overlayWrapper': $overlayWrapper})
                } else {
                    //otherwise, open the comments
                    $overlay.find(commentOverlay.closeSelector).on('click',function(event){
                        event.stopPropagation();
                        wp_pb.report('comments','commentsMultiClosed', {'overlay':$overlay,'overlayWrapper':$overlayWrapper})
                    });

                    //move to appropriate place in DOM
                    $overlayWrapper.after($overlay);
                    var top = (data && data.location && data.location.offset().top) || $(document).scrollTop();
                    
                    //refresh
                    if (typeof data.guid !== 'undefined') {
                        var allow_comments = ($overlayWrapper.find('.pb-comment-wrapper').attr('data-allow-comments')==='true')?true:false;
                        wp_e2.refreshComments({"id":"#" + $overlay.find('.echo_container.comments').attr('id'), "url":data.guid, "allow_comments":allow_comments});   
                    }

                    wp_pb.report('comments', 'commentsMultiOpened',{'parent':$overlayWrapper.parent($(commentOverlay.overlayElements.articleParent)),'overlay':$overlay,'overlayWrapper':$overlayWrapper});  
                }
            } 

        };

        var loadCommentCount = function (elms){
            //echo code.  comment out for in-house
            //var apiBaseURL = '//api.echoenabled.com';//production (Echo)
            //end echo

            var echoCountApi =  apiBaseURL + '/v2/mux' +  
                                '?appkey='  + ((TWP.Data.echo_appkey != 'undefined')?TWP.Data.echo_appkey:'prod.washpost.com') +
                                '&requests=';
            var query = "(childrenof:'{guid}'" + 
             encodeURI("source:washpost.com (((state:Untouched AND user.state:ModeratorApproved) OR (state:CommunityFlagged,ModeratorApproved,ModeratorDeleted AND -user.state:ModeratorBanned,ModeratorDeleted) )))"
                + ' children: 2 (((state:Untouched AND user.state:ModeratorApproved) OR (state:CommunityFlagged,ModeratorApproved AND -user.state:ModeratorBanned,ModeratorDeleted) ) )');
            
            /*
    [{  "id":"count1",
        "method":"count",
        "q":"((childrenof: //www.washingtonpost.com/world/middle_east/palestinians-form-new-unity-government-including-hamas/2014/06/02/c681d5c6-ea46-11e3-9f5c-9075d5508f0a_story.html source:washpost.com (((state:Untouched user.state:ModeratorApproved) OR (state:CommunityFlagged,ModeratorApproved,ModeratorDeleted -user.state:ModeratorBanned,ModeratorDeleted) OR (-state:SystemFlagged,ModeratorFlagged user.id:'http://washingtonpost.com/vr5H9gYg8K7QKi4eY3QuCsBEPSO0NNloQjBe0ZqhSs1oGeVxxhJF5A==/')) AND ( -markers:ignore ) ) )) itemsPerPage: 15 sortOrder:reverseChronological safeHTML:aggressive children: 2 childrenSortOrder:chronological childrenItemsPerPage:3 (((state:Untouched user.state:ModeratorApproved) OR (state:CommunityFlagged,ModeratorApproved -user.state:ModeratorBanned,ModeratorDeleted) OR (-state:SystemFlagged,ModeratorFlagged user.id:'http://washingtonpost.com/vr5H9gYg8K7QKi4eY3QuCsBEPSO0NNloQjBe0ZqhSs1oGeVxxhJF5A==/')) AND ( -markers:ignore ) )"}]
            */
            var muxArray = new Array();

            var dataUrl;
        
            $(elms).each(function(index,el) {
                var thisData =  $(el).attr('guid') || $(el).attr('data');
                if (typeof thisData != 'undefined') {
                    query = query.replace("{guid}",thisData);
                    muxArray.push( {"id":thisData,"method":"count","q":query}); 
                 }         
            });
            jQuery.ajax({
                url: echoCountApi + JSON.stringify(muxArray),
                dataType: 'jsonp',
                cache: true})
                .done(function(data,status ){
                    if (status != "error") {
                        $.each(data,function(index,el){
                            var count = (el.result != "error")?el.count:((el.errorCode && el.errorCode == "more_than")?'5000+':'');
                            $(".echo-counter[guid='"+index +"']").html(count);
                        })   
                    }
                });

        };
        
        var resetFixed = function(data) {
            if (data == 'opened' && $('.bar-hidden').length == 0 ) {
                $('.echo-apps-conversations-streamHeader').addClass('nav-open');
            } else {
                $('.echo-apps-conversations-streamHeader').removeClass('nav-open');
            }
        }

        var init = function() {
            //register callbacks 
            wp_pb.register('comments', 'showComments', showComments, this);

            wp_pb.register('comments', 'commentsReady', function() {
                if (forceShowComments === '1') {
                    showComments();
                }
            });

            wp_pb.register('nav', 'finish_open', function() {
                resetFixed('opened');
            });

            wp_pb.register('nav', 'finish_close', function(){
                resetFixed('closed');
            }); 

            wp_pb.register('nav', 'menu_start_open', function(){
                var $overlay = $(commentOverlay.overlayElements.overlay);  //check for overlay element
                if ($overlay.length > 0) {  //standard functionality
                    $overlay.parent().hide();
                }
            }); 

            wp_pb.register('nav', 'menu_finish_close', function(){
                var $overlay = $(commentOverlay.overlayElements.overlay);  //check for overlay element
                if ($overlay.length > 0) {  //standard functionality
                    $overlay.parent().show();
                }
            });       


            wp_pb.register('comments', 'commentsMultiOpened',commentOverlay.onOpen);
            wp_pb.register('comments', 'commentsMultiClosed',commentOverlay.onClose);

            //add events
            $('.comment-summary').click(function() {
                //showComments();
                //populating the data object so that the overlay comments panel has enough info to open
                var data = {
                    elm: $(this),
                    guid: $(this).find('.echo_container').attr('guid')
                };        
                wp_pb.report('comments', 'showComments', data);
            });


            if (noMobile) {
                $('.pb-f-page-comments').hide();
            }

            if (isMobile) {
                $('.comment-summary.jump').hide();
            }
      

            //load comments as appropriate
            if (isMobile && loadDeferredMobile) {
                //only load count on standard count element.  Comments loaded on click of comment-summary
                loadCommentCount('.echo-counter');
            } else if (!isMobile && loadDeferred) {
                //load comment count on standard count element first
                loadCommentCount('.echo-counter');
                //set up scroll events.  Comments will load on scroll or click of comment count, comment-summary
                $window.on('scroll.showComments', function() {
                    if ($window.scrollTop() / $echoPlaceholder.offset().top >= loadThreshhold) {
                        //showComments();
                        loadComments();
                    } 
                    if ($window.scrollTop() >= $echoPlaceholder.offset().top ) {
                        showComments();
                    }
                });
            } else {
                loadComments();
            }
        }
        return{init:init,showComments:showComments,loadCommentCount:loadCommentCount};
    } ();
    wp_pb.CommentLoader.init();  
});
(function($){
var SLIM_WIDTH = 480;
var RESIZE_RATE_MS = 200;

var $recommendedStripMarker = $(".content-strip-marker.recommended");
if( !!$recommendedStripMarker.length ){

	// END: make it pb-three if there it clears the right rail
	/*
	var $rr = $('#right-rail');
	var $container = $recommendedStripMarker.closest('.pb-f-page-recommended-strip');
	if( !!$rr.length && !!$container.length ){
		setTimeout(function(){
			var bottomOfRightRail = $rr.offset().top+$rr.height();
			var topOfContainer = $container.offset().top;
			if ( bottomOfRightRail < topOfContainer) {
				$container.removeClass('pb-two').addClass('pb-three').attr("data-pb-columns",3);
			}
		},500);
	}
	*/
	// END: make it pb-three if there it clears the right rail

  /////////////////////////////////////////////////////////////////////
  // The following code is an experiment to see if we are loosing some
  // AJAX calls on page transition. The general idea is to save the call
  // in a queue in localStorage, and remove it when it completes. At the
  // next page load, if there are calls left in the queue, we just try
  // them again, once.
  /////////////////////////////////////////////////////////////////////

  var ajaxBackup = (function() {

    if (!(window.JSON && window.localStorage)) {
      return {
        ajax: function(options) {
          return $.ajax(options);
        },
        retryCallIfAny: function() {
        }
      }
    }

    var store = {
      del: function(key) {
        return localStorage.removeItem(key);
      },
      set: function(key, val) {
        return localStorage.setItem(key, JSON.stringify(val));
      },
      get: function(key) {
        var val = localStorage.getItem(key);
        return val ? JSON.parse(val) : null;
      }
    };

    ///////////////////////////////////////////////////////////////////
    // Simple model to interact with localStorage and a queue
    ///////////////////////////////////////////////////////////////////

    var queue = {

     /**
      * Returns all the objects from the queue
      */
      all: function() {
        return store.get('recommended-strip-queue') || [];
      },

     /**
      * Push an element on the queue
      */
      push: function(obj) {
        var arr = store.get('recommended-strip-queue') || [];
        arr.push(obj);
        store.set('recommended-strip-queue', arr);
      },

     /**
      * Remove all instances of an element from the queue
      */
      del: function(obj) {
        var arr = store.get('recommended-strip-queue') || [];
        var arr2 = []
        for (var i = 0; i < arr.length; i++) {
          if (JSON.stringify(arr[i]) != JSON.stringify(obj)) {
            arr2.push(arr[i]);
          }
        }
        store.set('recommended-strip-queue', arr2);
      }

    }

    ///////////////////////////////////////////////////////////////////
    // Simple model to save callbacks, and rerun them.
    ///////////////////////////////////////////////////////////////////

    var ajaxBackup = {

     /**
      * Before making an AJAX call, save the URL
      */
      saveCall: function(url) {
        queue.push(url);
      },

     /**
      * When an AJAX call completed, remove it from the queue
      */
      completeCall: function(url) {
        queue.del(url);
      },

     /**
      * Check if there are any pending calls, and tries them again
      */
      retryCallIfAny: function() {
        var urls = queue.all();
        var run = function(options) {
          $.ajax(options).always(function() {
            ajaxBackup.completeCall(options);
          });
        };
        for (var i = 0; i < urls.length; i++) {
          run(urls[i]);
        }
      },

      /**
       * Make an AJAX call with $.ajax, but saves the call before.
       */
      ajax: function(options) {
        // Add a retry param to the next call.
        // We use a timestamp to uniquely identify the request and make
        // sure we are not sending the same request twice.
        options.data = options.data || {};
        options.data.retry = Date.now() +
          "|O:" + ((window.s && window.s.sendDataToOmniture) ? "1" :"0");

        ajaxBackup.saveCall(options);
        $.ajax(options)
        .done(function() {
          ajaxBackup.completeCall(options);
        })
        .fail(function(xhr) {
          // Sometimes, jQuery marks the request as failed, even though
          // it succeeded. In that case, we can still mark it as
          // complete. If it failed for real, record a few values to
          // figure out why.
          ajaxBackup.completeCall(options);
          if (xhr.status != 200) {
            options.data.retry += "|failed"
              + "|" + xhr.status
              + "|" + xhr.statusText
              + "|" + xhr.readyState
              + "|" + xhr.responseText;
            ajaxBackup.saveCall(options);
          }
        });
      }

    }

    return ajaxBackup;

  })();

  /////////////////////////////////////////////////////
  // Back to the rest of the program ...
  /////////////////////////////////////////////////////

	var
		$window = $(window),
		requestMade = false,
		options = {
			title: 'The Post Recommends'
			,separator: ''
			,showSummary: false
			,imageSizeSm: 'w=300&h=200'
			,imageSizeSmAlt: 'w=300&h=200'
			,imageSizeLg: 'w=300&h=200'
			,loadStripThreshhold: 750
		}
	;

	function init(){
		if( !requestMade && $recommendedStripMarker.offset().top - options.loadStripThreshhold <= $window.scrollTop()+$window.height()){
			requestMade = true;
			$window.off('scroll.load-recommended-strip');

			var
				itemsPerRow = 3
				,rowsToShow = 1
				// ,recommendedStripUrl = (!!window.recommendedStripUrl) ? window.recommendedStripUrl : '//recommendation.wpdigital.net/hybrid/hybrid-filter/hybrid.jsonp?callback=?'
				// ,recommendedStripSource = (!!window.recommendedStripSource) ? window.recommendedStripSource : 'hybrid'
				,recommendedStripUrl = (!!window.recommendedStripUrl) ? window.recommendedStripUrl : TWP.Features.Page.RecommendedStrip.endpointServer + '/hybrid/hybrid-filter/hybrid.jsonp?callback=?'
				,recommendedStripSource = (!!window.recommendedStripSource) ? window.recommendedStripSource : 'hybrid'
				,currentUrl = encodeURIComponent(TWP.Features.Page.RecommendedStrip.canonicalUrl)
				,wapo_login_id = (document.cookie.match(/wapo_login_id=([^;]+)/)) ? RegExp.$1 : ''
				,s_vi = (document.cookie.match(/s_vi=([^;]+)/)) ? RegExp.$1 : ''
				,grvinsights = (document.cookie.match(/grvinsights=([^;]+)/)) ? RegExp.$1 : ''
				,isClavis = !!recommendedStripSource.match(/clavis/)
				,isGravity = !!recommendedStripSource.match(/gravity/)
				,isHybrid = !!recommendedStripSource.match(/hybrid/)
				,cacheIt = isClavis||isGravity
				,prop68 = []
				,prop69 = []
				,prop72 = ''
				,ad = {
					positions : {"3":false}
					,slug : "recommended_module"
				}
			;
			if(isGravity){
				var grvinsights = (!!grvinsights) ? grvinsights : 'unknown';
				recommendedStripUrl += "&userguid="+grvinsights;
			}else{
				if ( !!wapo_login_id ) { recommendedStripUrl += "&wapo_login_id="+wapo_login_id;}
				if ( !!s_vi ) { recommendedStripUrl += "&s_vi="+s_vi; }
			}
			if ( !!currentUrl ) { recommendedStripUrl += "&url="+currentUrl; }
			if ( isHybrid && !!window.recommendedStripExperience ) {
				recommendedStripUrl += "&variant="+window.recommendedStripExperience;
			}

			$.ajax({
				dataType:"json",
				url:recommendedStripUrl,
				timeout:6000,
				cache:cacheIt,
				complete:function(jqXHR,textStatus){
					if(!textStatus.match(/success/)){
						wp_pb.report('recommended-strip', 'api-error', { jqXHR: jqXHR, textStatus: textStatus });
						// !!window.console&&console.log("POST RECOMMENDS ERROR: "+textStatus+" ("+recommendedStripSource+")");
						$recommendedStripMarker.closest(".pb-feature").remove();
						s.sendDataToOmniture('post_recommends_failed','',{prop72:recommendedStripSource+'_na_na_na-failed'});
					}
				},
				success:function(data){
					wp_pb.report('recommended-strip', 'api-success', { $target: $recommendedStripMarker, data: data });

					if(
						data == null ||
						(data.results == undefined || data.results == null || !data.results)
						&& (data.payload == undefined || data.payload == null || !data.payload || data.payload.articles == undefined || data.payload.articles == null || !data.payload.articles)
					){
						$recommendedStripMarker.closest(".pb-feature").remove();
						return;
					}
					var
						results = data.results||data.payload.articles
						,recommendedStripOutput = ''
						,maxToShow = (results.length < 3) ? results.length : 3
						,numbers = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve']
					;
					// END: Recommended Strip
					if (maxToShow > 0) {
						recommendedStripOutput += '<div class="content-strip recommended">';
						recommendedStripOutput += '<p class="heading heading2"><span class="heading2-bar"></span><span class="heading2-label">' + options.title + '</span></p>';
					}

					var itemsShown=0;
					for(var i=0;itemsShown<=maxToShow-1; i++){

						prop72 = ( prop72 ? [ prop72, results[i].responsetype ] : [ results[i].responsetype ] ).join(',');

						var
							result = results[i]
							,headline = (!!result.title) ? result.title : result.headline
							,summary = (options.showSummary && !!result.summary) ? result.summary : ''
							,isAdPosition = !!ad.positions[itemsShown+1]
							,position = itemsShown%itemsPerRow
							,positionClass = ' '+numbers[itemsShown]
							,firstClass = (itemsShown==0) ? ' first' : ''
							,firstInRowClass = (position==0) ? ' first-in-row' : ''
							,lastClass = (itemsShown==maxToShow-1) ? ' last' : ''
							,lastInRowClass = (position==itemsPerRow-1) ? ' last-in-row' : ''
							,hasSummary = (!!result.summary)
							,hasSummaryDisplay = hasSummary?'with-summary':'without-summary'
							,hasMethodePhoto = isAdPosition || (!!result.photo && !!result.photo.path && result.photo.path.match(/\/rf\/image_/))
							// Excludes default image
							// ,hasOtherPhoto = isAdPosition || (!!result.photo && !!result.photo.path && !result.photo.path.match(/twp-2048x1024.jpg/) ) || (!!result.image && !result.image.match(/twp-2048x1024.jpg/) )
							// Includes default image
							,hasOtherPhoto = isAdPosition || (!!result.photo && !!result.photo.path) || (!!result.image)
							,hasPhoto = hasMethodePhoto||hasOtherPhoto
							,hasPhotoDisplay = hasPhoto?'with-photo':'without-photo'
							,contentUrl = (!!result.url) ? result.url.split('?')[0] : result.displayUrl.split('?')[0] 
							//,linkUrl = contentUrl+'?tid='+recommendedStripSource+'_'+(itemsShown+1)
							,linkUrl = contentUrl+'?tid='+( result.responsetype ? result.responsetype : ( recommendedStripSource+'_'+(itemsShown+1) ) )
							,clickUrl = (!!result.clickUrl) ? result.clickUrl : ''
							,responseType = (!!result.responsetype) ? result.responsetype : (!!recommendedStripSource) ? recommendedStripSource : 'unknown'
							,defaultCallback = TWP.Features.Page.RecommendedStrip.endpointServer + '/hybrid/hybrid-filter/tracker.json?callback=?&clickurl='+contentUrl+'&rectype='+responseType
							,itemsStillInData = results.length-i
							,itemsStillToRender = maxToShow-itemsShown
							,isCurrentPage = TWP.Features.Page.RecommendedStrip.canonicalUrl==contentUrl
							,isItemEligible = isAdPosition || !isClavis || (isClavis && !isCurrentPage) || (itemsStillToRender==itemsStillInData)  
							,isSponsoredContent = contentUrl.match(/brand-connect/)
							,sponsoredClass = isAdPosition || isSponsoredContent ? ' is-sponsored-content' : ''
						;

						var tplRecommendationImage = function(dimSm1Value, dimSm2Value) {
							var value = '';
							var dim1 = dimSm1Value || 'w=200&h=133';
							var dim2 = dimSm2Value || 'w=200&h=133';
							var pdim1 = dim1.split('&');
							var pdim2 = dim2.split('&');
							var fdim1 = [ pdim1[0].match(/[0-9]+/g), 'x', pdim1[1].match(/[0-9]+/g) ].join('');
							var fdim2 = [ pdim2[0].match(/[0-9]+/g), 'x', pdim2[1].match(/[0-9]+/g) ].join('');

							if ( hasMethodePhoto ) {
								value += '<a class="rec-img" href="'+linkUrl+'" data-default-callback="'+defaultCallback+'" data-click-href="'+clickUrl+'" data-index-0="'+i+'"><img class="main-art unprocessed" src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+encodeURIComponent( result.photo.path.replace(/\/image_\d+[xwh]\d*\//,'/image_' + fdim1 + '/').replace(/www.washingtonpost.com/,'img.washingtonpost.com') )+'&' + dim1 + '" data-low-res-src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+result.photo.path.replace(/\/image_\d+[xwh]\d*\//,'/image_' + fdim1 + '/').replace(/www.washingtonpost.com/,'img.washingtonpost.com')+'&' + dim1 + '" data-sm2-src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+encodeURIComponent( result.photo.path.replace(/\/image_\d+[xwh]\d*\//,'/image_' + fdim2 + '/').replace(/www.washingtonpost.com/,'img.washingtonpost.com') )+'&' + dim2 + '" data-low-res-src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+result.photo.path.replace(/\/image_\d+[xwh]\d*\//,'/image_' + fdim1 + '/').replace(/www.washingtonpost.com/,'img.washingtonpost.com')+'&' + dim1 + '" data-hi-res-src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+result.photo.path.replace(/\/image_\d+[xwh]\d*\//,'/image_300x200/').replace(/www.washingtonpost.com/,'img.washingtonpost.com')+'&' + dim1 + '"></a>';
							} else if (hasOtherPhoto) {
								var img = (!!result.photo) ? result.photo.path : result.image;
								value += '<a class="rec-img" href="'+linkUrl+'" data-default-callback="'+defaultCallback+'" data-click-href="'+clickUrl+'" data-index-0="'+i+'"><img class="main-art unprocessed" src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+encodeURIComponent( img.replace(/www.washingtonpost.com/,'img.washingtonpost.com') )+'&' + dim1 + '" data-sm2-src="https://img.washingtonpost.com/wp-apps/imrs.php?src='+encodeURIComponent( img.replace(/www.washingtonpost.com/,'img.washingtonpost.com') )+'&' + dim2 + '"></a>';
							}

							return value;
						};

						// START: Recommended Strip
						if( isItemEligible ){
							itemsShown += 1;
							if(isAdPosition){i-=1}

							prop68.push(hasSummaryDisplay+'-displayed');
							prop69.push(hasPhotoDisplay+'-displayed');
							recommendedStripOutput += '<div class="content-item'+firstClass+firstInRowClass+lastClass+lastInRowClass+positionClass+sponsoredClass+' '+hasPhotoDisplay+' '+hasSummaryDisplay+'">';

							if(isAdPosition){
								trendingStripOutput += '<div class="sponsorship-admonition">&nbsp;&nbsp;Sponsored Content <i class="info-icon"></i><span class="bc-info-popup">BrandConnect&raquo; is content provided by our advertisers. <a rel="nofollow" href="//www.washingtonpost.com/sf/brand-connect/">Learn more.</a></span></div>';
								trendingStripOutput += '<div id="slug_'+ad.slug+'" class="'+ad.slug+'" data-ad-type="pb-ad-container">';
									trendingStripOutput += '<script type="text/javascript" language="Javascript">placeAd2({what: "'+ad.slug+'"});</script>';
								trendingStripOutput += '</div>';
							}else{


								if(isSponsoredContent){
									recommendedStripOutput += '<div class="sponsorship-admonition">&nbsp;&nbsp;Sponsored Content <i class="info-icon"></i><span class="bc-info-popup">BrandConnect&raquo; is content provided by our advertisers. <a rel="nofollow" href="//www.washingtonpost.com/sf/brand-connect/">Learn more.</a></span></div>';
								}

								if (firstClass) {
									recommendedStripOutput += tplRecommendationImage(options.imageSizeLg);
								} else if ('right' !== options.imagePosition) {
									recommendedStripOutput += tplRecommendationImage(options.imageSizeLg);
								}

								recommendedStripOutput += '<a class="item-caption" href="'+linkUrl+'" data-default-callback="'+defaultCallback+'" data-click-href="'+clickUrl+'" data-index-0="'+i+'">';
									recommendedStripOutput += '<p class="heading heading3">'+headline+'</p>';

									if (summary) {
										recommendedStripOutput += '<p class="summary">'+summary+'</p>'
									}

								recommendedStripOutput += '</a>';

								if (!firstClass && 'right' === options.imagePosition) {
									recommendedStripOutput += tplRecommendationImage(options.imageSizeSm, options.imageSizeSmAlt);
								}

							} // else normal content

							recommendedStripOutput += options.separator + '</div>';

							// END: Recommended Strip
						}
					}

					if (maxToShow > 0) {
						recommendedStripOutput += '<div class="clear"></div>';
						recommendedStripOutput += '</div>';
					}

					// START: Recommended Strip
					if ( !!recommendedStripOutput ) {
						$recommendedStripMarker.empty().append(recommendedStripOutput);
						if (!!window.wp_pb && !!wp_pb.report) wp_pb.report('global', 'domChanged', this);

						$('img.unprocessed',$recommendedStripMarker).each(function(i){
							var $this = $(this);
							var src = "";
							if ($recommendedStripMarker.width() > 480) {
							src = $this.attr("data-hi-res-src");
							$this.attr("src",src);
							} else {
								// default source is low-res, so no need to replace.
								// src = $this.attr("data-low-res-src");
							}
							$this.removeClass("unprocessed");
						});

						if(!!window.s && !!s.sendDataToOmniture){
							s.sendDataToOmniture('post_recommends_loaded','',{prop68:prop68.join(','),prop69:prop69.join(','),prop72:prop72});
						}

						$('a',$recommendedStripMarker).on('click',function(ev){
							var
								$target=$(ev.target)
								,$a = $target.closest('a')
							;
							if( !!$a.attr("data-click-href") ){
								$a.attr("href",$a.attr("data-click-href"));
							}

							if(!!window.s && !!s.sendDataToOmniture){
								var clickedItemHasPhoto = !!($target.closest('div.content-item.with-photo').length),
										clickedItemHasSummary = !!($target.closest('div.content-item.with-summary').length);
								var p68 = ((clickedItemHasSummary)?'with-summary':'without-summary')+'-clicked',
										p69 = ((clickedItemHasPhoto)?'with-photo':'without-photo')+'-clicked';
								s.sendDataToOmniture('post_recommends_clicked','',{prop68:p68,prop69:p69});
							}
							// START: defaultCallback
							if( !!$a.attr("data-default-callback") ){
								ajaxBackup.ajax({
									dataType:"json"
									,url:$a.attr("data-default-callback")
								});
							}
							// END: defaultCallback
							if(isClavis){
								var updateUrl = "//clavis.wpdigital.net/update?callback=?";
								var encodedUrl = encodeURIComponent($(ev.target).closest('a').attr('href').split('?')[0]);
								if ( !!wapo_login_id ) { updateUrl += "&wapo_login_id="+wapo_login_id;}
								if ( !!s_vi ) { updateUrl += "&s_vi="+s_vi; }
								if ( !!encodedUrl ) { updateUrl += "&url="+encodedUrl }
								$.ajax({
									dataType:"json"
									,url:updateUrl
									,timeout:3000
									,cache:true
								});
							}
						});
					}
					// END: Recommended Strip

					// START: Gravity callback
					if( !!data && !!data.payload && !!data.payload.impressionViewed && !!data.payload.impressionViewed.callback ){
						$.ajax({
							dataType:"jsonp"
							,url:data.payload.impressionViewed.callback
							,timeout:10000
							,cache:true
							,complete:function(jqXHR,textStatus){console.log("textStatus: "+textStatus)}
						});
					}
					// END: Gravity callback

					wp_pb.report('recommended-strip', 'loaded', { $target: $recommendedStripMarker });
				} // end success
			});
		} // END: if
	} // END init

	function attach(initAttach) {

		$window.on('scroll.load-recommended-strip',function(){
			
			if (initAttach) {
				initAttach();
			}

			init();
		});

		if ( isInView( $('.recommended')[0] ) ) {
			$(window).trigger('scroll.load-recommended-strip');
		}
	}

	function applyAltOptions(optionsValue) {
		options.separator = '<span class="recommended-sep"></span>';
		options.imagePosition = 'right';
		options.showSummary = true;

		var opt = optionsValue || {};

		$.extend(options, opt);
	}

	function slim() {
		var result = ( ( window.outerWidth || window.innerWidth ) <= SLIM_WIDTH );

		$recommendedStripMarker
			.toggleClass('rs-slim-false', !result)
			.toggleClass('rs-slim-true', result);

		return result;
	}

	function isInView(el) {
		var rect = el.getBoundingClientRect();
		var h = $(el).height();

		return (
			( rect.top + h ) >= 0 && 
			( rect.bottom - h ) <= ( window.innerHeight || document.documentElement.clientHeight )
		);
	}

    function switchImageSrc(attr, $images) {

		return !!attr && $images.each(function() {
				var $el = $(this);

				if ( !$el.attr('data-sm1-src') ) {
					$el.attr('data-sm1-src', $(this).attr('src'));
				}

				$el.attr('src', $el.attr(attr));
			});
    }

	function applyMainArtBg($target) {
		var $style = $target.data('_styleBgMainArt');
		var $mainArt = $target.find('.content-item.first img.main-art');
		var src;

		if ( src = $mainArt.attr('src') ) {
			if ($style) $style.remove();

			$style = $('<style>' +
				'.rs-slim-false.rs-alt1-true .content-strip.recommended .content-item.first .rec-img {' +
					'background-image: url(' + src + ');' +
				'}' +
			'</style>');

			$target.prepend($style);
			$target.data('_styleBgMainArt', $style);
		}
	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

    $(function anonymousAttacher() {
		attach(function() {
			var preSlim = slim();

			applyAltOptions({
				imageSizeSm: ( preSlim ? 'w=60&h=60' : 'w=138&h=92' ),
				imageSizeSmAlt: ( preSlim ? 'w=138&h=92' : 'w=60&h=60' ),
				imageSizeLg: 'w=270&h=195'
			});

			wp_pb.register('recommended-strip', 'loaded', function(params) {

				applyMainArtBg( params.$target );

				$(window)
					.off('resize.recommended-strip')
					.on('resize.recommended-strip', debounce(function() {
						var resizeSlim = slim();

						// handle image aspect
						var $images = $recommendedStripMarker.find('.content-item:not(.first-in-row) .rec-img img.main-art');
						var attr = preSlim ?
							( resizeSlim ? 'data-sm1-src' : 'data-sm2-src' ) :
							( resizeSlim ? 'data-sm2-src' : 'data-sm1-src' );
						switchImageSrc(attr, $images);

						// toggle slim "look" for phonish viewport
						if ( resizeSlim ) {

							$recommendedStripMarker
								.removeClass('rs-alt1-true')
								.addClass('rs-alt1-false')
								.removeClass('rs-sidebar_alt1-false')
								.addClass('rs-sidebar_alt1-true');
						} else {

							$recommendedStripMarker
								.removeClass('rs-alt1-false')
								.addClass('rs-alt1-true')
								.removeClass('rs-sidebar_alt1-true')
								.addClass('rs-sidebar_alt1-false');
						}
					}, RESIZE_RATE_MS));

				$(window).trigger('resize.recommended-strip');
			});
		});
    });

    // Finally, we retry failed AJAX calls
    $(ajaxBackup.retryCallIfAny);

}
})(jQuery);

(function($){
if ($(window).width() > 480) {
var $trendingStripMarker = $(".content-strip-marker.trending");
if( !!$trendingStripMarker.length ){

	// START: make it pb-three if there it clears the right rail
	/*
	var $rr = $('#right-rail');
	var $container = $trendingStripMarker.closest('.pb-f-page-trending-strip');
	if( !!$rr.length && !!$container.length ){
		setTimeout(function(){
			var bottomOfRightRail = $rr.offset().top+$rr.height();
			var topOfContainer = $container.offset().top;
			if ( bottomOfRightRail < topOfContainer) {
				$container.removeClass('pb-two').addClass('pb-three').attr("data-pb-columns",3);
			}
		},500);
	}
	*/
	// END: make it pb-three if there it clears the right rail

 
	var
		$window = $(window),
		requestMade = false,
		loadStripThreshhold = 750
	;

	function init(){
		if( !requestMade && $trendingStripMarker.offset().top - loadStripThreshhold <= $window.scrollTop()+$window.height()){
			requestMade = true;
			$window.off('scroll.load-trending-strip');

			var
				itemsPerRow = 3
				,rowsToShow = 2
				,trendingStripUrl = "//recommendation-trendingonsocial.wpdigital.net/post-pulse/pulse.jsonp?callback=fn_wp_pb_stale&tid=&referrers=twitter,facebook&section=&types=Article,Blog&offset=0&count="+itemsPerRow*rowsToShow
				,ad = {
					positions : {"6":false}
					,slug : "trending_module"
				}
			;

			window.fn_wp_pb_stale=function(data){
				if( !data || !data.pulselist){
					$trendingStripMarker.closest(".pb-feature").remove();
				} else {

					var
						results = data.pulselist
						,trendingStripOutput = ''
						,maxToShow = (results.length < itemsPerRow*rowsToShow) ? results.length : itemsPerRow*rowsToShow
						,numbers = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve']
					;
					// END: Trending Strip

					if (maxToShow > 0) {
						trendingStripOutput += '<div class="content-strip trending">';
						trendingStripOutput += '<p class="heading heading2">Trending on Social Media</p>';
					}

					var itemsShown = 0;
					for(var i=0;itemsShown<=maxToShow-1; i++){
						var
							result = data.pulselist[i]
							,isAdPosition = !!ad.positions[itemsShown+1]
							,position = itemsShown%itemsPerRow
							,positionClass = ' '+numbers[position]
							,firstClass = (itemsShown==0) ? ' first' : ''
							,firstInRowClass = (position==0) ? ' first-in-row' : ''
							,lastClass = (itemsShown==maxToShow-1) ? ' last' : ''
							,lastInRowClass = (position==itemsPerRow-1) ? ' last-in-row' : ''
							,hasMethodePhoto = isAdPosition || (!!result.thumburl && !!result.thumburl && result.thumburl.match(/\/rf\/image_/))
							,hasOtherPhoto = isAdPosition || (!!result.thumburl && !!result.thumburl)
							,hasPhoto = hasMethodePhoto||hasOtherPhoto
							,photoUrl = !!hasPhoto ? result.thumburl.replace(/www.washingtonpost.com/,'img.washingtonpost.com') : ''
							,contentUrl = (!!result.redirecturl ? result.redirecturl : result.contenturl).split('?')[0]+'?tid=trending_strip_'+(itemsShown+1)
							,isSponsoredContent = contentUrl.match(/brand-connect/)
							,sponsoredClass = isAdPosition || isSponsoredContent ? ' is-sponsored-content' : ''
						;

						itemsShown += 1;
						if(isAdPosition){i-=1}
						// START: Trending Strip
						trendingStripOutput += '<div class="content-item'+firstClass+firstInRowClass+lastClass+lastInRowClass+positionClass+sponsoredClass+(hasPhoto ? ' with-photo' : ' without-photo')+' left">';

						if(isAdPosition){
							trendingStripOutput += '<div class="sponsorship-admonition">&nbsp;&nbsp;Sponsored Content <i class="info-icon"></i><span class="bc-info-popup">BrandConnect&raquo; is content provided by our advertisers. <a rel="nofollow" href="//www.washingtonpost.com/sf/brand-connect/">Learn more.</a></span></div>';
							trendingStripOutput += '<div id="slug_'+ad.slug+'" class="pb-ad-container" data-ad-type="'+ad.slug+'">';
								trendingStripOutput += '<script type="text/javascript" language="Javascript">placeAd2({what: "'+ad.slug+'"});</script>';
							trendingStripOutput += '</div>';
						}else{

							if(isSponsoredContent){
								trendingStripOutput += '<div class="sponsorship-admonition">&nbsp;&nbsp;Sponsored Content <i class="info-icon"></i><span class="bc-info-popup">BrandConnect&raquo; is content provided by our advertisers. <a rel="nofollow" href="//www.washingtonpost.com/sf/brand-connect/">Learn more.</a></span></div>';
							}

							// Ideally, the service itself should return images with
							// HTTPS urls, but for some reason this broke current prod
							// (PB8), so as a fallback, and pending migration to PB10,
							// we force HTTPS on the frontend.
							if (photoUrl) {
							  photoUrl = photoUrl.replace(/^http:/, "https:");
							}

							if ( hasMethodePhoto ) {
								var photoSrc = photoUrl.replace(/\/image_\d+[xwh]\d*\//,'/image_200x133/').replace(/www.washingtonpost.com/,'img.washingtonpost.com');
								var photoSrcHiRes = photoUrl.replace(/\/image_\d+[xwh]\d*\//,'/image_300x200/').replace(/www.washingtonpost.com/,'img.washingtonpost.com');
								
								trendingStripOutput += '<a href="'+contentUrl+'"><img class="main-art unprocessed" src="'+photoSrc+'" data-low-res-src="'+photoSrc+'" data-hi-res-src="'+photoSrcHiRes+'"></a>';
							} else if (hasOtherPhoto) {
								var photoSrc = 'https://img.washingtonpost.com/wp-apps/imrs.php?src=' + encodeURIComponent(photoUrl) + '&w=200&h=133';
								var photoSrcHiRes = 'https://img.washingtonpost.com/wp-apps/imrs.php?src=' + encodeURIComponent(photoUrl) + '&w=300&h=200';

								trendingStripOutput += '<a href="'+contentUrl+'"><img class="main-art unprocessed" src="'+photoSrc+'" data-low-res-src="'+photoSrc+'" data-hi-res-src="'+photoSrcHiRes+'"></a>';
							}

							trendingStripOutput += '<a href="'+contentUrl+'">';
								trendingStripOutput += '<p class="heading heading3">'+result.webheadline+'</p>';
							trendingStripOutput += '</a>';

						} // else normal content

						trendingStripOutput += '</div>';

						// END: Trending Strip
					}

					if (maxToShow > 0) {
						trendingStripOutput += '<div class="clear"></div>';
						trendingStripOutput += '</div>';
					}

					// START: Trending Strip
					if ( !!trendingStripOutput ) {
						$trendingStripMarker.append(trendingStripOutput);
						if (!!window.wp_pb && !!wp_pb.report) wp_pb.report('global', 'domChanged');

						$('img.unprocessed',$trendingStripMarker).each(function(i){
							var $this = $(this);
							var src = "";
							if ($trendingStripMarker.width() > 480) {
								src = $this.attr("data-hi-res-src");
								$this.attr("src",src);
							} else {
								// default source is low-res, so no need to replace.
								// src = $this.attr("data-low-res-src");
							}
							$this.removeClass("unprocessed");
						});

					}
					// END: Trending Strip
				} // END: else

			};

			$.ajax({
				dataType:"jsonp",
				jsonp:false,
				jsonpCallback:"fn_wp_pb_stale",
				url:trendingStripUrl,
				cache:true,
				timeout:3000,
				complete:function(jqXHR,textStatus){
					if (!textStatus.match(/success/)) {
						$trendingStripMarker.closest(".pb-feature").remove();
					}
				}
			});

		} // END: if
	} // END init

	$(document).ready(function(){
		init();
	});
	$window.on('scroll.load-trending-strip',function(){
		init();
	});

} // !!document.getElementById("trending-strip-marker")
} // ($(window).width() > 480)
})(jQuery);

(function($){

	$(window.document).on('abtest-ready', function(e, ABT) {
		var variation = ABT.get('recommendation-mostread');
		if(variation.is('chartbeat')) {
			$('ul.def-feed').hide();
			$('ul.alt-feed').show();
		}
	});

})(jQuery);

(function($){
    try{
        function cleanUp(){
            /*
             * Shuffle jQuery array of elements - see Fisher-Yates algorithm
             */
            jQuery.fn.shuffle = function () {
                var j;
                for (var i = 0; i < this.length; i++) {
                    j = Math.floor(Math.random() * this.length);
                    $(this[i]).before($(this[j]));
                }
                return this;
            };

            $('#the-most-rr li').shuffle();

            var count = 0;

            var adjustLines = function() {

                var count = 0;
                $('#the-most-rr .line').each(function() {
                    if (count > 2)
                        return false;

                    $(this).parent().parent().parent().parent().show();
                    
                    count++;
                });
            };
            adjustLines();
        }
        cleanUp();
    }catch(e){}
})(jQuery);

(function($){

	var defaultNewsLetter = {frequency: "Daily", headline: "Get the Today's Headlines Newsletter", id: "post_newsletter1", name: "Today's Headlines", tagline: "Free daily updates delivered just for you.",	template: "signup-confirm-heads", variable: "vars[intent_heads]" 	},
			defaultNewsLetters = [
				{frequency: "Daily", headline: "Get the Today's Headlines Newsletter", id: "post_newsletter1", name: "Today's Headlines", tagline: "Free daily updates delivered just for you.",  template: "signup-confirm-heads", variable: "vars[intent_heads]"  },
				{frequency: "Daily",headline: "Get the Read In Newsletter",id: "post_newsletter112",name: "Read In",tagline: "Free daily updates delivered just for you.",template: "signup-confirm-readin",variable: "vars[intent_readin]"},
				{frequency: "Weekly",headline: "Get the Lean & Fit Newsletter",id: "post_newsletter8",name: "Lean & Fit",tagline: "Free weekly updates delivered just for you.",template: "signup-confirm-lean",variable: "vars[intent_lean]"},
				{frequency: "Twice-weekly",headline: "Get the Checkpoint Newsletter",id: "post_newsletter130",name: "Checkpoint",tagline: "Free twice-weekly updates delivered just for you.",template: "signup-confirm-check",variable: "vars[intent_check]"}
			],
		subscribeEmail,
		washPostId,

		setRecommendationsValues= function (data) {
    	$(".suggestion-list .recommended").each(function(index) {
			  $(this).find('p').text("Get "+ data[index+1].name +' ('+ data[index+1].frequency +')');
			  $(this).find("input[type='checkbox']").attr('value', data[index+1].id);
			  $(this).find("input[type='checkbox']").attr('name', data[index+1].name);
			});
		},

		setNewsLetterValue = function (data) {
	    $('#newsletter-headline').append(data.headline);
	    $('#newsletter-tagline').text(data.tagline);
		},

		getUserId = function() {
      return ((document.cookie.match(/wapo_login_id=([^;]+)/)) ? RegExp.$1 : '');
		},

		getWapoId = function() {
      return ((document.cookie.match(/wapo_secure_login_id=([^;]+)/)) ? RegExp.$1 : '');
		},

		getPageData = function() {
			var section = $('#newsletter-section').text(),
					subSection = $('#newsletter-subsection').text(),
					blog  = $('#newsletter-blogname').text(),
					data = {};

			washPostId = getUserId();

			if(washPostId !== ''){
				data.washPostId = washPostId;
			} 
			if(blog) {
				data.blog = blog;
			}
			if(subSection) {
				data.subSection = subSection;
			}
			if(section) {
				data.section = section
			}

			return data;
		},

		getRecommendations = function(newsletters, confirmBundleSubscribe) {
			var data = getPageData();
				data.newsletters = newsletters;

				$.ajax({
			    type: "POST",
			    dataType: "json",
					contentType: "application/json",
					// url: "http://10.128.132.51/Newsletter/api/newsletters",  //Dev URL
					url: "https://recommendation-newsletter.wpdigital.net/Newsletter/api/newsletters",     //Prod URL
					data: JSON.stringify(data),
		  		success: function(data) {
		  			if(!confirmBundleSubscribe) { // don't do anything, just let the API know about the bundle subscription
		  				window.Newsletters = data.newsletters;
		          setRecommendationsValues(data.newsletters);
		          toggleRecommendations(true);

		          // fire omiture events of showing recommendations
	          	for (var i = 0; i < data.newsletters .length-1; i++) {
		  					sendCustomTrackProps('event59', trackProps(data.newsletters[i+1].name, i+1, "enhanced"), 'Newsletter Right Rail Show Recommendations');
		  				};
		  			}
			  	},
			  	error: function(request, status, error) {
			  		window.Newsletters = defaultNewsLetters;
			  		setRecommendationsValues(defaultNewsLetters);
			  		toggleRecommendations(true);
			  	}
				});
		},

		getMainNewsletter = function() {
			var data = getPageData();

			$.ajax({
		    type: "POST",
		    dataType: "json",
				contentType: "application/json",
				// url: "http://10.128.132.51/Newsletter/api/newsletter",   // Dev URL
				url: " https://recommendation-newsletter.wpdigital.net/Newsletter/api/newsletter",   //Prod URL
				data: JSON.stringify(data),
	  		success: function(data) {  
	  			window.Newsletter = data.newsletter;
          setNewsLetterValue(data.newsletter); 
          
          setTimeout(function() {
            sendCustomTrackProps('event59', trackProps(data.newsletter.name, 1, "simple"), 'Newsletter Right Rail successfull API Call');
         	}, 5000);	
		  	},
		  	error: function(request, status, error) {
		  		window.Newsletter = defaultNewsLetter;
		  		setNewsLetterValue(defaultNewsLetter);
		  		
		  		sendCustomTrackProps('event50', trackProps(defaultNewsLetter.name, 1), 'Newsletter Right Rail API failure case');
		  	}
			});
		},

		subscribeBundle =function() {
			var data, url, newsletters=[], newsletterNames=[];

			$("#newsletter-suggestions-rr input:checked").each(function(index){
				newsletters.push($(this).val());
				newsletterNames.push({name: $(this).attr('name'), position: $(this).attr('data-pos')} );
			});

			if(newsletters.length > 0 && newsletterNames.length > 0) {
				if(washPostId !== '') {
				  url = "https://subscribe.washingtonpost.com/person/newsletter/subscribe-list";   //Prod URL
          // url = "https://subscribe.digitalink.com/person/newsletter/subscribe-list";   //Dev URL
					data = {
					  "wapoLoginID": washPostId,
					  "wapoSecureID": getWapoId(),
					  "userAgent": navigator.userAgent,
					  "newsletters": newsletters
					}
				} else if(subscribeEmail) {
					url = "https://subscribe.washingtonpost.com/person/newsletter/subscribe-list-email";   //Prod URL
          // url = "https://subscribe.digitalink.com/person/newsletter/subscribe-list-email";   //Dev URL
					data = {
					  "email": subscribeEmail,
					  "newsletters": newsletters
					}
				}
				$.ajax({
			    type: "POST",
			    dataType: "json",
					contentType: "application/json",
					url: url,
					data: JSON.stringify(data),
		  		success: function(data) {
		  			if(data.status == "SUCCESS") {
		  				for (var i = 0; i < newsletterNames.length; i++) {
		  					sendCustomTrackProps('event46,event91', trackProps(newsletterNames[i].name, newsletterNames[i].position, "enhanced"), 'Newsletter Right Rail Sign-up Bundle');
		  				};
		  				getRecommendations(newsletters, true);
	          	toggleRecommendations(false);
		  			}		  		
		  		},
			  	error: function(request, status, error) {
			  		console.log(error, 'Error while subscribing bundle');
			  	}
				});
			}
		},

		toggleRecommendations = function(show){
			if(show){
				$("#newsletter-subscribe-form, #subscribe-btn-signed-up, #newsletter-tagline").hide();
      	$("#newsletter-suggestions-rr, #headline-checked, #subscribed-confirmation, #all-newsletters-lbl").show();
			} else {
				$("#newsletter-suggestions-rr").hide();
			}
		},

		subscribe = function(email) {
			var data, url;
			if(washPostId !== '') {
				url = "https://subscribe.washingtonpost.com/person/newsletter/subscribe";  // Prod URL
        // url = "https://subscribe.digitalink.com/person/newsletter/subscribe";  // Dev URL
				data = {
				  "wapoLoginID": washPostId,
				  "wapoSecureID": getWapoId(),
				  "userAgent": navigator.userAgent,
				  "newsletterName": window.Newsletter.id
				}
			} else if(email) {
			  url = "https://subscribe.washingtonpost.com/person/newsletter/subscribe-email";   // Prod URL
        // url = "https://subscribe.digitalink.com/person/newsletter/subscribe-email";   // Dev URL
				data = {
				  "email": email,
				  "newsletterName": window.Newsletter.id
				}
			}
			$.ajax({
		    type: "POST",
		    dataType: "json",
				contentType: "application/json",
				url: url,
				data: JSON.stringify(data),
	  		success: function(data) {
	  			if(data.status == "SUCCESS") {
  					sendCustomTrackProps('event46,event91', trackProps(window.Newsletter.name, 1, "simple"), 'Newsletter Right Rail Sign-up');
          	getRecommendations([window.Newsletter.id]);
	  			}		
	  		},
		  	error: function(request, status, error) {
		  		console.log(error, 'Error while subscribing');
		  	}
			});
		},

	  applyRrNewsletters = function (variant, version) {
	  	$('#signup-box-rr').show();

	  	if(!window.Newsletter) {
  			washPostId = getUserId();

				if(washPostId !== '') {
					$('#newsletter-subscribe-form').hide();
					$('#subscribe-btn-signed-up').show();
				} else {
					$('#newsletter-subscribe-form').show();
					$('#subscribe-btn-signed-up').hide();
				}	
				
				getMainNewsletter();
			} else {
				setNewsLetterValue(window.Newsletter);
			}

			//validate email client side
			$(".subscribe-newsLetter").click(function(){
					var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
					subscribeEmail = $('#newsLetter-input').val();
					
				if(this.id !== "subscribe-btn-signed-up" && (subscribeEmail == '' || !re.test(subscribeEmail) )) {
					$('.newsLetter-error-msg').show();
				} else {
					$('.newsLetter-error-msg').hide();
					subscribe(subscribeEmail);
				}
				return false;
			});

			// Subscribe for a bundle of newsletters
			$("#subscribe-bundle").click(function(){
				subscribeBundle();
			});

			// Cancel bundle subscription
			$("#cancel-bundle").click(function(){
				sendCustomTrackProps('event58', trackProps(), 'No Thanks, Newsletter Right Rail Sign-up Bundle');
				toggleRecommendations(false);
			});
	  };

	$(window.document).on('abtest-ready', function(e, ABT) {
		// debugger;
		// alert("abtest-ready:  RR");
		
    var test = ABT.get('subscription-fronts');
    if (test.is('both') || !test.is('instream')) {
    	// debugger;
    	// alert("RR check true");
      applyRrNewsletters(test);
    }
	});


// Omniture events tracking code
  function trackProps(newsletterName, index, enhancedKey) {
    var subsection = window.wp_subsection || '';
    var contentType = window.wp_content_type || '';
    var props = {
      'eVar2': subsection,
      'prop2': subsection,
      'prop3': contentType,
      'eVar17': contentType 
    };
    if(newsletterName && index) {
    	props.eVar26 = "nl_rightrail_" + enhancedKey + "_" + newsletterName.toLowerCase().split(' ').join('-') + '_'+ index;
    }
    return props;
  }

  function sendCustomTrackProps(eventKey, props, name) {
    if (!!window.s) window.s.sendDataToOmniture(name || 'PB Feature - Page-Newsletter', eventKey, props);
  }

})(jQuery);

/*(function($){

    // START: Social share pop-out
    var
        $socialToolsMoreBtn = $('.social-tools .more'),
        $socialToolsPopOut = $('.social-tools.pop-out'),
        targetTop = $socialToolsMoreBtn.position().top + $socialToolsMoreBtn.outerHeight()-1-15,
        targetLeft = $socialToolsMoreBtn.position().left-1-4
    ;
    $socialToolsPopOut.css({"top":targetTop,"left":targetLeft});
    $socialToolsMoreBtn.on('click',function(ev){
        $socialToolsPopOut.toggle();
    });
    $socialToolsPopOut.on('mouseout',function(ev){
        $socialToolsPopOut.toggle();
    });
    // END: Social share pop-out

})(jQuery);*/

(function($){
	try{
		function cleanUp(){
			$('li','#editors-picks-rr').each(function(i){
				var $this = $(this);
				var $headline = $('.headline',$this);
				var $number = $('.number',$this);
				var lineHeight = parseInt($headline.css('lineHeight'));
				if ( $headline.height() <= 2*lineHeight ) {
					$headline.css({'padding-top':'7px','padding-bottom':'8px'});
			    } else if ( $headline.height() > 3*lineHeight ) {
					while( $headline.height() > 3*lineHeight ){
						$headline.text( $headline.text().replace(/\.\.\.$/,'') );
						$headline.text( $headline.text().slice(0,-1) );
						$headline.text( $headline.text()+'...' );
					}
			    }
			});
		}
		cleanUp();
	}catch(e){}
})(jQuery);

(function($){
   var $content = $('#next-story-bg');
   var imageUrl = nextStoryImage();

   if (imageUrl && !!$content.size() && $content.width() > 480) {
      $content.css('background-image','url('+imageUrl+')');
   }

   function nextStoryImage() {
      return TWP.Features
         && TWP.Features.Article
         && TWP.Features.Article.NextStory
         && TWP.Features.Article.NextStory.tnUrl;
   }

})(jQuery);

(function($){

})(jQuery);

(function ($, window) {

  var scrollPos = $(this).scrollTop(),
    SUBSCRIPTION_KEY = "cancelSubscriptionDate",
    SIGNED_UP_IN = "SIGNED_UP_IN_",
    bannerType = "",
    section = $('#newsletter-banner-section').text(),

    defaultNewsLetter = {frequency: "Daily", headline: "Get the Today's Headlines Newsletter", id: "post_newsletter1", name: "Today's Headlines", tagline: "Free daily updates delivered just for you.",  template: "signup-confirm-heads", variable: "vars[intent_heads]" },
    washPostId,
    subscribeEmail,

    getUserId = function() {
      return ( (document.cookie.match(/wapo_login_id=([^;]+)/)) ? RegExp.$1 : '');
    },

    getWapoId = function() {
      return ( (document.cookie.match(/wapo_secure_login_id=([^;]+)/)) ? RegExp.$1 : '');
    },

    isSubscriber = function () {
      var isSubscriber  = false;
      if(document.cookie.match(/rplsb=([^;]+)/)){
        isSubscriber = RegExp.$1==1;
      }
      return isSubscriber;
    },

    // Calculates date difference between two dates 
    daysBetween  = function (date1, date2) {
      var one_day=1000*60*60*24, difference_ms;
      difference_ms = date2.getTime() - date1.getTime();
      return Math.round(difference_ms/one_day); 
    },

    toggleBanner = function (banner, show, callBack) {
      if(show) {
        $(banner).parent().css('display', 'block');
        $(banner).parent().addClass("fixed-overlay-subscription");
        $("#pb-root#pb-root").addClass("subscriptionOverlay-margin");
      } else {
        $(banner).slideUp("slow", function() {
          $(banner).parent().css('display', 'none');
          $(banner).parent().removeClass("fixed-overlay-subscription");
          $("#pb-root#pb-root").removeClass("subscriptionOverlay-margin");
        });
      }
      if(callBack) {
        callBack();
      } 
    },

    showBanner = function (variant) {
      var currentPos = $(this).scrollTop();
      if((currentPos - 20) > scrollPos) {
        toggleBanner(".banner", true, function() {
          if(bannerType == "SignUp") {
            sendCustomTrackProps('event66', trackProps(window.Newsletter.name, 1, "simple"), 'Newsletter Banner View');
          } else if(bannerType == "Subscription"){
            sendCustomTrackProps('event43', trackProps(), 'Subscription Banner View');
          }
          $(this).off('scroll.addsubscriptionbanner');
        });
      }
      scrollPos = currentPos;
    },

    isMobile = function () {
      if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Kindle/i)
        || navigator.userAgent.match(/Windows Phone/i) ) {
        return true;
      } else {
        return false;
      }
    },

    setNewsLetterBanner = function (data) {
      $('#newsletter-headline-banner').append(data.headline);
      $('#newsletter-tagline-banner').text(data.tagline);
    },

    showConfirmation = function (data) {
      $('.confirmation').show();
      $('#newsletter-tagline-banner, #signup-form, #signed-up-loggedIn-btn').hide();
    },

    getPageData = function() {

      var section = $('#newsletter-banner-section').text(),
        subSection = $('#newsletter-banner-subsection').text(),
        blog  = $('#newsletter-banner-blogname').text(),
        data = {};

      washPostId = getUserId();

      if(washPostId !== ''){
        data.washPostId = washPostId;
      } 
      if(blog) {
        data.blog = blog;
      }
      if(subSection) {
        data.subSection = subSection;
      }
      if(section) {
        data.section = section
      }

      return data;
    },

    getMainNewsletter = function() {
      var data = getPageData();

      $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        // url: "http://10.128.132.51/Newsletter/api/newsletter", // Dev URL
        url: " https://recommendation-newsletter.wpdigital.net/Newsletter/api/newsletter",   //Prod URL
        data: JSON.stringify(data),
        success: function(data) {
          window.Newsletter = data.newsletter;
          setNewsLetterBanner(data.newsletter);
        },
        error: function(request, status, error) {
          window.Newsletter =  defaultNewsLetter;
          setNewsLetterBanner(defaultNewsLetter);
          sendCustomTrackProps('event50', trackProps(window.Newsletter.name, 1, "simple"), 'Newsletter Banner API failure Case');
        }
      });
    },

    subscribe = function(email) {
      var data, url;
      if(washPostId !== '' && washPostId !== undefined) {
        url = "https://subscribe.washingtonpost.com/person/newsletter/subscribe";  // Prod URL
        // url = "https://subscribe.digitalink.com/person/newsletter/subscribe";  // Dev URL
        data = {
          "wapoLoginID": washPostId,
          "wapoSecureID": getWapoId(),
          "userAgent": navigator.userAgent,
          "newsletterName": window.Newsletter.id
        }
      } else if(email) {
        url = "https://subscribe.washingtonpost.com/person/newsletter/subscribe-email";   // Prod URL
        // url = "https://subscribe.digitalink.com/person/newsletter/subscribe-email";   // Dev URL
        data = {
          "email": email,
          "newsletterName": window.Newsletter.id
        }
      }
      $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        url: url,
        data: JSON.stringify(data),
        success: function(data) {
          if(data.status == "SUCCESS") {
            sendCustomTrackProps('event42,event91', trackProps(window.Newsletter.name, 1, "simple"), 'Newsletter Sign-up Banner');
            window.localStorage.setItem(SIGNED_UP_IN + section.toUpperCase(), true);
            
            showConfirmation();
            // hide banner after successfully sign up
            setTimeout(function(){
              toggleBanner(".banner", false);
            }, 2000);
          }   
        },
        error: function(request, status, error) {
          console.log(error, 'Error while subscribing');
        }
      });
    },

    applyExperience = function (variant) {
      $('.pb-f-page-subscription').insertBefore('#pb-root');

      if( (bannerType == "SignUp" &&  !window.localStorage.getItem(SIGNED_UP_IN + section.toUpperCase()))
        || (bannerType == "Subscription" && !isSubscriber())) {

        if(bannerType == "SignUp") {
          $('#signup-banner').show();
          $('#subscription-banner').hide();

          if(!window.Newsletter) {
            // if user is logged in show one click sign up button
            if(getUserId() !== '') {
              $('#signup-form').hide();
              $('#signed-up-loggedIn-btn').show();
            } else {
              $('#signup-form').show();
              $('#signed-up-loggedIn-btn').hide();
            } 

            getMainNewsletter();
          } else {
            setNewsLetterBanner(window.Newsletter);
          }
        } else if(bannerType == "Subscription") {
          $('#subscription-banner').show();
          $('#signup-banner').hide();
        }
      
        // event handlers goes here - scroll handler
        $(window).on('scroll.addsubscriptionbanner', function (){
          var cancalationDate  = window.localStorage.getItem(SUBSCRIPTION_KEY),
              daysPassed;
              if(bannerType == "Subscription" && (getParameterByName("anchor") === "true" || sessionStorage.getItem("anchorSession"))){
                showBanner(variant);
                return;
              }
              if(cancalationDate) {
                cancalationDate =new Date(cancalationDate);
                daysPassed = daysBetween(cancalationDate, new Date());
                if(daysPassed > 7) {
                  showBanner(variant);
                } 
              } else {
                showBanner(variant);
              }
        });

        // subscribe btn click handler
        $("#subscribe-btn").on('click', function(){
          sendCustomTrackProps('event45', trackProps(), 'Subscription Banner Click');
          setTimeout(function(){
                  window.location=$("#subscribe-btn").attr("href");
              },330);
          return false;
        });

        // not now btn click handler
        $("#subscription-banner .not-now-btn").on('click', function(event){
          toggleBanner("#subscription-banner", false, function() {
            window.localStorage.setItem(SUBSCRIPTION_KEY, new Date());
            sendCustomTrackProps('event44', trackProps(), 'Subscription Banner Close');
          });
          return false;
        });

        $("#signup-banner .not-now-btn").on('click', function(event){
          toggleBanner("#signup-banner", false, function() {
            window.localStorage.setItem(SUBSCRIPTION_KEY, new Date());
            sendCustomTrackProps('event69', trackProps(), 'Newsletter Banner Close');
          });
          return false;
        });

        $("#signup-newsLetter").click(function() {
          //validate email client side
          var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
          subscribeEmail = $('#newsLetter-input-banner').val();

          if(subscribeEmail == '' || !re.test(subscribeEmail)) {
            $('.newsLetter-error-msg-banner').show();
          } else {
            $('.newsLetter-error-msg').hide();
            subscribe(subscribeEmail);
          }
          return false;
        });

        $("#signed-up-loggedIn-btn").click(function() {
            subscribe();
        });
      }
    }
    
    $(window.document).on('abtest-ready', function(e, ABT) {
      var testDesktop, testMobile;

      if(isMobile()) {
        // comment out mobile behaviour for now
      } else {
        // Subscribe banner - display based on URL parameter 
        if(getParameterByName("anchor") === "true" || sessionStorage.getItem("anchorSession")) {
          bannerType = "Subscription";
          sessionStorage.setItem("anchorSession", true);
          applyExperience();
        } else {
          bannerType = "SignUp";
          applyExperience();
        }  
      }
    });

    // returns query string parameters value 
    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Omniture events tracking code
    function trackProps(newsletterName, index, enhancedKey) {
      var subsection = window.wp_subsection || '';
      var contentType = window.wp_content_type || '';
      var props = {
        'eVar2': subsection,
        'prop2': subsection,
        'prop3': contentType,
        'eVar17': contentType 
      };

      if(newsletterName && index) {
        props.eVar26 = "nl_banner_" + enhancedKey + "_" + newsletterName.toLowerCase().split(' ').join('-') + '_'+ index;
      }
      return props;
    }

    function sendCustomTrackProps(eventKey, props, name) {
      if (!!window.s) window.s.sendDataToOmniture(name || 'PB Feature - Page-Subscription', eventKey, props);
    }

}(jQuery, window));


(function($, window) {
  // detect localStorage support
  var hasStorage = (function() {
    var storageTest = new Date();
    try {
      localStorage.setItem(storageTest, storageTest);
      localStorage.removeItem(storageTest);
      return true;
    } catch (e) {
      return false;
    }
  }());

  function removeCookie(name) {
    if (document.cookie) document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function normalizeURL(url, params) {
    var str = (url || "").trim();
    str = str.replace(/^(https?:)?\/\//, ""); // remove protocol
    str = str.replace(/\?.*/, "");            // remove query string
    if (params) {
      str = str.replace(/\/$/, "");           // remove trailing slash
    }
    return str;
  }

  function extractParam(param) {
    var rgx = new RegExp(".*[?&]" + param + "=([^&]+).*");
    if (rgx.test(document.location.toString())) {
      return document.location.toString().replace(rgx, "$1");
    } else {
      return "";
    }
  }

  var clavisAuxiliaries = window.wp_meta_data && wp_meta_data.clavis && wp_meta_data.clavis.auxiliaries,
      canonicalUrl = $('link[rel="canonical"]').attr('href'),
      userId = !!document.cookie.match(/s_vi=([^;]+)/) ? RegExp.$1 : 'unavailable';

  // Fallback for URL
  if (!canonicalUrl) {
    canonicalUrl = [window.location.host, window.location.pathname].join('');
  }

  // Content type
  var contentType = "";
  try {
    contentType = TWP.Data.Tracking.props.content_type;
  } catch(e) {}

  var dataPayload = {
    "articleid": normalizeURL(canonicalUrl, true),
    "referrer": normalizeURL(document.referrer),
    "contentType": contentType,
    "tid": extractParam("tid"),
    "userid": userId,
    "uuid": !!document.cookie.match(/wapo_login_id=([^;]+)/) ? RegExp.$1 : '',
    "auxiliaries": !!clavisAuxiliaries ? clavisAuxiliaries : []
  };

  var targetingServerUrl = TWP&&TWP.Features&&TWP.Features.Page&&TWP.Features.Page.Targeting&&TWP.Features.Page.Targeting.endpointServer

  $.ajax({
    url: !!targetingServerUrl ? targetingServerUrl : '//targeting.wpdigital.net/TargetingWebAPP/targeting',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'JSON',
    data: JSON.stringify(dataPayload)
  })

  .done(function(response) {
    if (!!response) {
      var auxMap = response.aux_map && response.aux_map.join(',');

      if (!auxMap) {
        if (!!window.s && !!s.sendDataToOmniture) {
          s.sendDataToOmniture('targeting', 'event53', {
            'eVar53': 'targeting:missing auxiliaries'
          });
        }
      } else {
        if (hasStorage) {
          window.localStorage.setItem('targeting_aux_map', auxMap);
        } else {
          if (!!$ && !!$.cookie) {
            $.cookie('targeting_aux_map', auxMap);
          } else {
            document.cookie = "targeting_aux_map=" + auxMap;
          }
        }
      }
    } else {
      hasStorage ? localStorage.setItem('targeting_aux_map', '') : removeCookie('targeting_aux_map');
    }
  })

  .fail(function(errorResponse) {
    if (!!window.s && !!s.sendDataToOmniture) {
      s.sendDataToOmniture('auxiliary-targeting', 'event53', {
        'eVar53': 'targeting:server error'
      });
    }
  });
})(jQuery, window);

;(function(wp_get_import, VisitorSegment) {

    if ( !VisitorSegment ) {
        
        wp_get_import()
            .done(function(wp_import) {
                init();
            });
            
    } else {
        init();
    }

    function init() {
    
;var TWP = window.TWP || {};
TWP.ABTestUser = TWP.ABTestUser || {};

;(function ABTestAnonymous($, TWP, wp_import, VisitorSegment, undefined) {
    var OPT_OUT_KEY = 'ABT__OO';
    var IGNORE_BL_KEY = 'ABT__ib';
    var LOCAL_TRUE = 'yes';
    var LOCAL_FALSE = 'no';

    var featureData = {};
    var bucketData = {};
    var disabled;
    var ignoreBlacklist;
    var state = 'uninitialized';

    var $d = $(window.document);

    var ABT = {
        init: function(data) {
            disabled = !data;

            ABT.applyData(data);

            if (state != 'initialized') {
                $d.trigger('abtest-ready', [ABT]);
            }

            state = 'initialized';

            $d.trigger('abtest-init', [ABT]);
        },
        state: function() {
            return state;
        },
        trackBefore: function(eventHandler) {

            bindTop( $d, ABT.trackPageviewEventBefore(), eventHandler );
        },
        trackAfter: function(eventHandler) {

            bindTop( $d, ABT.trackPageviewEventAfter(), eventHandler );
        },
        trackValueDelimeter: function() {
            return TWP.ABTestUser.trackValueDelimeter;
        },
        trackPageviewEventBefore: function() {
            return TWP.ABTestUser.trackPageviewEventBefore;
        },
        trackPageviewEventAfter: function() {
            return TWP.ABTestUser.trackPageviewEventAfter;
        },
        trackSendHandler: function() {
            var method = str2obj( TWP.ABTestUser.trackSendHandler );

            return 'function' == typeof method ? method : function() {};
        },
        trackSetHandler: function() {
            var method = str2obj( TWP.ABTestUser.trackSetHandler );

            return 'function' == typeof method ? method : function() {};
        },
        trackUnsetHandler: function() {
            var method = str2obj( TWP.ABTestUser.trackUnsetHandler );

            return 'function' == typeof method ? method : function() {};
        },
        applyData: function(dataValue) {
            var data;

            if ( !disabled && detectLocalStorage() && !optOut() ) {

                data = {
                    features: []
                };

                ignoreBlacklist = getLocalItem(IGNORE_BL_KEY);

                $.each(dataValue || [], function(index, bucket) {

                    if (!bucket.disabled) {
                        $.merge(data.features, bucket.features);
                    }
                });

                ABT.bucket(data);
            }
        },
        bucket: function(data) {
            bucketData = data;

            var features;
            if (!data.disabled) {
                
                features = data.features || [];

                $.each(features, function(index, feature) {
                    setFeature(feature);
                });
            }
        },
        ignoreBlacklist: function(value) {

            if (!value) {
                ignoreBlacklist = undefined;
                removeLocalItem(IGNORE_BL_KEY);
            } else {
                ignoreBlacklist = LOCAL_TRUE;
                setLocalItem(IGNORE_BL_KEY, LOCAL_TRUE);
            }
        },
        optOut: function() {
            setLocalItem(OPT_OUT_KEY, LOCAL_TRUE);

            $d.trigger('abtest-optout', [ABT]);
        },
        get: function(name) {
            var feature = !disabled && featureData[name] || {};
            var variation = feature.variation || new Variation(feature);

            if ( feature.variation && !variation._trackset ) {
                variation._trackset = true;

                ABT.trackBefore(function() {
                    variation.setTrackVars();
                });

                ABT.trackAfter(function() {
                    variation.unsetTrackVars();
                });
            }

            return variation;
        },
        clear: function() {

            $.each(bucketData.features, function(i, f) {
                unregisterVariation(f.name);
            });
        },
        forceTest: function(featureName, variantName) {
            var key = makeKeyNames(featureName);
            
            setLocalItem(key.name, variantName);
            setLocalItem(key.visit, LOCAL_TRUE);
            setLocalItem(key.computed, LOCAL_TRUE);
            setLocalItem(key.force, LOCAL_TRUE);
        }
    };

    ABT.$handlers = {
        applyClass: function(isVariant, feature, variant) {
            this.removeClass('abt-not-loaded')
                .addClass('abt-' + feature + '-' + variant + '-' + isVariant);
        }
    };

    $.fn.extend({
        biAbtest: function(handlerName, name, cb) {
            var config = getConfig(name);
            var ftr = ABT.get(config.feature);
            var is = ftr.is(config.variant);

            function getConfig(name) {
                var n = name.split('.');

                return {
                    feature: n[0],
                    variant: n[1]
                };
            }

            if (!config.feature || !config.variant) return;

            return this.each(function() {
                var $el = $(this);

                ABT.$handlers[handlerName].call($el, is, config.feature, config.variant);

                if (cb) {
                    cb.call($el, is, config.feature, config.variant);
                }
            });
        }
    });

    TWP.ABTest = ABT;

    if ( !!VisitorSegment ) {

        ABT.init( TWP.ABTestBucket );

    } else if ( !!wp_import && !VisitorSegment ) {

        wp_import(['VisitorSegment'], function(vs) {
            VisitorSegment = vs;
            ABT.init( TWP.ABTestBucket );
        });

    } else {
        initError('failed during dependency acquisition');
    }

    function initError(msg) {
        $d.trigger('abtest-fail', [ ['init', msg].join(': ') ] );
    }

    function Feature(data) {
        var name = data.name || '';
        var key = makeKeyNames(name);
        var increment = data.increment || 0;
        var end = /^\d+$/.test(data.end) && parseInt(data.end, 10);
        var variations = data.variations || [];
        var blacklist = data.blacklist && data.blacklist.referrers || [];

        var blacklisted = getLocalItem(key.blacklisted) == LOCAL_TRUE;

        var bopt;
        if ( !blacklisted && !getLocalItem(key.blacklisted) ) {

            bopt = {
                domains: blacklist,
                segment: {}
            };

            var segmentName;
            for (segmentName in data.segment) {
                bopt.segment[segmentName] = !(data.segment[segmentName]);
            }

            blacklisted = isBlacklisted(bopt);

            setLocalItem(key.blacklisted, blacklisted ? LOCAL_TRUE : LOCAL_FALSE);
        }
        
        var enabled = variations.length && end && (new Date().getTime() < end);
        var variation = variations.length && new Variation( registerVariation(name, variations, blacklisted, increment) );

        if ( enabled && data.active && !variation.nocollect ) {
            this.name = name;
            this.variation = variation;
        }

        var defaultTrack = (enabled && data.active) ? data.defaultTrack : [];

        if (blacklisted) {
            $.merge(defaultTrack, data.blacklist && data.blacklist.track || []);
        }

        if ( defaultTrack.length && variation.nocollect ) {
            
            this.variation = new Variation({
                variation: {
                    track: defaultTrack
                }
            });
        }

        if (!enabled || !variation) {
            unregisterVariation(name);
        }
    }

    function Variation(objValue) {
        var obj = objValue || {};

        this.nocollect = !obj.collect;

        var data = obj.variation || {};

        this.name = data.name || '';
        this.trackvars = data.track || [];
        this.customOptions = data.customOptions || {};

        var _self = this;
        this.is = function(name) {
            return name ? name === _self.name : false;
        };
        this.getTrackVar = function(name, prepend, delimiterValue) {

            var result = [];
            $.each(_self.trackvars, function(index, trackvar) {

                if ( makeTrackvarName(name) === makeTrackvarName(trackvar.name) ) {
                    result.push(trackvar.value);
                }
            });

            var delimiter = delimiterValue || ABT.trackValueDelimeter();

            result = result.join(delimiter);
            
            return result && ( prepend ? prepend + delimiter : '' ) + result;
        };
        this.sendTrackVars = function(setOp, eventKey) {
            var payload = trackingPayload();
            var trackargs = ['Darwin - TrackVar', eventKey || '', payload];

            if (setOp) {
                ABT.trackSetHandler().apply(ABT, [payload]);
            } else {
                ABT.trackSendHandler().apply(ABT, trackargs);
            }

            $d.trigger('abtest-tracksend', trackargs);
        };
        this.unsetTrackVars = function() {
            var payload = trackingPayload();

            ABT.trackUnsetHandler().apply(ABT, [payload]);
        };
        this.setTrackVars = function() {
            var payload = trackingPayload();

            ABT.trackSetHandler().apply(ABT, [payload]);
        };
        /* DEPRECATED */
        this.sendCustomTrackVar = function() {
            return undefined;
        };
        /* DEPRECATED */
        this.unsetCustomTrackVar = function() {
            return undefined;
        };
        /* DEPRECATED */
        this.setCustomTrackVar = function() {
            return undefined;
        };

        function trackingPayload() {
            var payload = {};

            $.each(_self.trackvars, function(index, trackvar) {

                var svar;
                if (!trackvar.dynamic) {

                    svar = makeTrackvarName(trackvar.name);

                    payload[svar] = payload[svar] || [];
                    payload[svar].push(trackvar.value);
                }
            });

            return payload;
        }
    }

    function registerVariation(name, variations, blacklisted, increment) {
        var key = makeKeyNames(name);
        var his = {
            cur: testHash(name, variations, blacklisted, increment),
            old: getLocalItem(key.hash)
        };

        var i = getLocalItem(key.name); // get the variant name
        var r = LOCAL_TRUE == getLocalItem(key.visit); // not visitor's first visit?
        var t = LOCAL_TRUE == getLocalItem(key.computed); // did we already compute wether or not to collect?
        var f = LOCAL_TRUE == getLocalItem(key.force);

        var compare = function(a,b) {
            var a = parseFloat(a.customOptions.target);
            var b = parseFloat(b.customOptions.target);

            if (a < b) return -1;
            if (a > b) return 1;

            return 0;
        };

        var v = findByProp(variations, 'name', i); // get the variant object

        if ( ( !t && !blacklisted && ( 'string' !== typeof i && !v ) ) || ( !f && !!t && ( his.cur != his.old ) ) ) {

            variations.sort(compare);

            var ranges = [];
            var g = 0;
            var h = 0;
            $.each(variations, function(index, variant) {
                var v = variant.customOptions && variant.customOptions.target;

                if (v) {
                    v = parseFloat(v) / 100;
                    g += v;

                    var result = { value: [h,g] };

                    h += v;

                    ranges.push(result);
                }
            });

            var rc = randChance();
            $.each(ranges, function(index, range) {
                if ( between(rc, range.value[0], range.value[1]) ) i = index;
            });

            v = variations[i];

            if (v) {
                setLocalItem(key.name, v.name);
            } else {
                setLocalItem(key.name, '_default');
            }

        }

        setLocalItem(key.visit, LOCAL_TRUE);
        setLocalItem(key.computed, LOCAL_TRUE);
        setLocalItem(key.hash, his.cur);

        var result = ( v && ( !blacklisted || r ) ) && {
            variation: v,
            collect: true
        };

        return result;
    }

    function testHash(name, variations, blacklisted, increment) {
        var vnames = [];

        $.each(variations, function(index, variation) {
            var o = variation.customOptions;
            var ostr = '';
            if (o) {
                for(n in o) {
                    if (o.hasOwnProperty(n)) {
                        ostr += [ n, o[n] ].join('=');
                    }
                }
            }
            vnames.push( variation.name + ostr );
        });

        var result = [ name, vnames.sort().join(''), !!blacklisted, increment ].join('');

        return result;
    }

    function unregisterVariation(name) {
        var key = makeKeyNames(name);

        removeLocalItem(key.name);
        removeLocalItem(key.visit);
        removeLocalItem(key.blacklisted);
        removeLocalItem(key.computed);
        removeLocalItem(key.hash);
        removeLocalItem(key.force);
    }

    function findByProp(arr, prop, value) {

        var result;
        $.each(arr, function(i, item) {

            if (item[prop] == value) {
                result = item;

                return false;
            }
        });

        return result;
    }

    function makeTrackvarName(value) {

        if (!value) {
            throw new Error('trackvar: invalid name');
        }

        return value.toLowerCase();
    }

    function makeKeyNames(name) {
        return {
            name: 'ABT__' + name,
            visit: 'ABT__' + name + '__visit',
            blacklisted: 'ABT__' + name + '__blstd',
            computed: 'ABT__' + name + '__cmpted',
            hash: 'ABT__' + name + '__hash',
            force: 'ABT__' + name + '__force'
        }
    }

    function randChance() {
        return Math.random(0, 1);
    }

    function between(x, min, max) {
        return x >= min && x <= max;
    }

    function getFeature(name) {
        return featureData[name];
    }

    function setFeature(data) {
        if ( !data.name ) {
            throw new Error('Feature: missing name');
        }

        var feature = new Feature(data);

        if ( !$.isEmptyObject(feature) ) {
            featureData[data.name] = feature;
        }
    }

    function isBlacklisted(vfilters) {
        var f = vfilters || {}
        var domains = f.domains || [];
        var segment = f.segment || {};

        function regescape(str) {
            return str
                .replace(/\./g, '\\.')
                .replace(/\-/g, '\\-');
        }

        function check(domain) {
            var reg = new RegExp('^(http:\/\/)?(www\\.)?' + regescape(domain), 'gi');
            
            return ( !domain && !document.referrer ) || (domain && document.referrer.match(reg) || []).length > 0;
        }

        var result;

        if ( !ignoreBlacklist ) {

            $.each(domains, function(index, domain) {
                result = check(domain);

                return !result;
            });

            var segmentName;
            for (segmentName in segment) {
                if (segment[segmentName]) {
                    result = VisitorSegment(segmentName);
                }
            }
        }

        return result;
    }

    function detectLocalStorage() {
        var str = '_a-b-test';

        try {
            setLocalItem(str, str);
            removeLocalItem(str);

            return true;
        } catch(e) {

            return false;
        }
    }

    function getLocalItem(name) {
        return localStorage.getItem(name);
    }

    function setLocalItem(name, value) {
        if ( getLocalItem(name) ) {

            removeLocalItem(name);
        }

        localStorage.setItem(name, value);
    }

    function removeLocalItem(name) {
        localStorage.removeItem(name);
    }

    function optOut() {
        return (getLocalItem(OPT_OUT_KEY) === LOCAL_TRUE);
    }

    function str2obj(handlerStr) {
        var parts;
        var method = window;

        try {
            parts = handlerStr.split('.');

            $.each(parts, function(i, obj) {
                method = method[obj];
            });
        } catch (e) { }

        return method;
    }
    
    function bindTop($ctx, name, fn) {
        if ( !name ) return;
        
        $ctx.on(name, fn);

        $ctx.each(function() {
            var handlers = $._data($ctx[0], 'events')[name.split('.')[0]];
            var handler = handlers.pop();

            handlers.splice(0, 0, handler);
        });
    }

})(jQuery, TWP, window.wp_import, window.VisitorSegment);

    }
})(wp_get_import, window.VisitorSegment);

;(function magnetAnonymous(window, $, wp_pb, undefined) {
    var SCROLL_INTERVAL = 200;
    var DEFAULT_DEBOUNCE = 100;
    var DRAW_SPEED = 250;
    var UP_OFFSET = -181;
    var DOWN_OFFSET = 0;
    var WINDOW_TOP_OFFSET = 0;
    var SCREEN_BOTTOM_OFFSET = 600;

    logMagnetTag();

    $(function() {
        var $w = $(window);
        var $d = $(document);
        var $r = $('html');
        var $h = $('.pb-f-page-header-v2');

        var $instance = $('.pb-f-page-magnet');

        $instance.each(function() {
            var $el = $(this);

            $el.insertAfter($h);

            init($el);
        });

        function init($container) {
            var $modulearea = $container.find('.pb-module-area');
            var $title = $modulearea.find('.pb-magnet-title');
            applyTitleCase( $title.find('.pb-magnet-h2.magnet-title-case') );

            var $ctrl = {};
            $ctrl.$container = $container.find('.pb-magnet-controls');
            $ctrl.$mvleft = $ctrl.$container.find('.pb-magnet-mvleft');
            $ctrl.$mvright = $ctrl.$container.find('.pb-magnet-mvright');
            $container.data('magnetControl', $ctrl);

            // move current article first
            $modulearea.find('[data-pb-magnet-first="true"]')
                .insertAfter($title);

            var $items = $container.find('.pb-magnet-item');
            var $imgs = $items.find('.pb-magnet-article-image');


            if ($items.length == 0) {
                return;
            }

            var tagname = $modulearea.data('tag');

            // apply omniture tags to links
            var omniParams = params( $modulearea.data('omni') );
            tagLinks(omniParams);

            attachNavEvents();

            $modulearea.css('display', '');

            function attachNavEvents() {

                applyLazyload();

                var edown = 'mousedown.magnet';

                if ( !touchDevice() ) {

                    containerScroll(function() {
                        applyNavVisibility();
                    });

                    $ctrl.$mvleft.off(edown)
                        .on(edown, function() {
                            var value = Math.max(0, $container.scrollLeft() - computeWidth());

                            moveScroll(value);
                        });

                    $ctrl.$mvright.off(edown)
                        .on(edown, function() {
                            var value = $container.scrollLeft() + computeWidth();

                            moveScroll(value);
                        });

                    registerOnce('nav', 'show_attempt', debounce(function() {
                        down();
                    }, DEFAULT_DEBOUNCE, true));

                } else {

                    windowTop(function() {

                        if ( WINDOW_TOP_OFFSET >= $w.scrollTop() ) {
                            down();
                        }
                    });
                }

                registerOnce('nav', 'start_close', debounce(function() {
                    up();
                }, DEFAULT_DEBOUNCE, true));
            
                registerOnce('magnet', 'start_open', debounce(function() {

                    if (tagname && !!window.s) {
                        s.sendDataToOmniture('magnet_open', '', { prop72: tagname });
                    }
                }, DEFAULT_DEBOUNCE, true));

                function computeWidth() {
                    var winwidth = $w.width();
                    var itemwidth = $items.first().width();
                    
                    return Math.floor(winwidth / itemwidth) * itemwidth;
                }
            }

            function params(value) {
                var params = value ? value.split('&') : [value];
                var result = [];
                
                if (params.length > 0) {

                    $.each(params, function(index, value) {
                        var param = value.split('=');

                        result.push(param);
                    });
                }

                return result;
            }

            function tagLinks(params) {

                $modulearea.find('a').each(function() {
                    var $a = $(this);
                    var url = $a.attr('href');

                    $.each(params, function(index, param) {
                        url = updateUrlParam( url, param[0], param[1] );
                    });

                    $a.attr('href', url);
                });
            }

            // at present, subscriptions cannot be unregistered
            // this is a workaround
            function registerOnce(arg1, arg2, fn) {
                var regdata = [arg1, arg2];
                var regname = regdata.join(':');

                if ( !$container.data(regname) ) {
                    wp_pb.register(regdata[0], regdata[1], fn);
                }

                $container.data(regname, true);
            }

            function applyNavVisibility() {
                $ctrl.scrollleft = $container.scrollLeft();
                $ctrl.leftoffset = ( $container.scrollLeft() + $container.width() );

                var rightbound = ( ( $modulearea[0].offsetWidth - $ctrl.leftoffset ) <= 0 );
                
                $ctrl.$mvleft.toggle(!!$ctrl.scrollleft);
                $ctrl.$mvright.toggle(!rightbound);
            }

            function applyLazyload() {

                var sename = 'scroll.magnet-lazy';
                var reveal = 0;

                $container.off(sename)
                    .on(sename, function() {
                        lazy();
                    });

                lazy();

                function lazy() {
                    var count = Math.max( reveal, computeNumberOfImages() );
                    
                    if (reveal !== count) {
                        reveal = count;
                        
                        $imgs.filter(':lt(' + (reveal) + ')').each(function () {
                            var $el = $(this);

                            $el.attr('src', $el.data('original'));
                        });
                    }
                }

                function computeNumberOfImages() {

                    return Math.ceil( ( $container.scrollLeft() + $container.width() ) / $items.first().width() );
                }
            }

            function nearBottom() {

                return $w.scrollTop() >= $d.height() - $w.height() - SCREEN_BOTTOM_OFFSET;
            }

            function down() {
                $r.addClass('magnet');

                if ( !nearBottom() ) {
                    $r.addClass('magnet-nudge');
                }

                if ( touchDevice() ) {
                    $container.addClass('magnet-open');
                } else {
                    $container.addClass('magnet-open')
                        .animate({ top: DOWN_OFFSET }, DRAW_SPEED);
                }

                wp_pb.report('magnet', 'start_open');
            }

            function up() {
                $r.removeClass('magnet magnet-nudge');

                if ( touchDevice() ) {
                    $container.removeClass('magnet-open');
                } else {
                    $container.removeClass('magnet-open')
                        .animate({ top: UP_OFFSET }, DRAW_SPEED);
                }

                wp_pb.report('magnet', 'start_close');
            }

            function containerScroll(fn) {
                var scroll;

                var rename = 'resize.magnet';
                $w.off(rename)
                    .on(rename, function() {
                        scroll = true;
                    });

                var sename = 'scroll.magnet';
                $container.off(sename)
                    .on(sename, function() {
                        scroll = true;
                    });

                var tid;
                setInterval(function() {
                    if (scroll) {

                        if (tid) {
                            clearTimeout(tid);
                        }

                        tid = setTimeout(function() {
                            fn();
                        }, SCROLL_INTERVAL);
                    }
                    scroll = false;
                }, SCROLL_INTERVAL);
            }

            function windowTop(fn) {
                var atop = false;

                var tid;
                var sename = 'scroll.magnet';
                $w.off(sename)
                    .on(sename, function() {
                        var top = $(window).scrollTop();

                        if (!atop && top == 0) {
                            atop = true;
                                
                            if (tid) {
                                clearTimeout(tid);
                            }

                            tid = setTimeout(function() {
                                fn();
                            }, SCROLL_INTERVAL);
                        } else if( top >= 0 ) {
                            atop = false;
                        }
                    });
            }

            function moveScroll(value) {
                $container.stop().animate({ scrollLeft: value }, 'slow');
            }
        }

        function touchDevice() {
            return $r.hasClass('touch');
        }
    });

    // stackoverflow.com/a/6475125
    function titleCase(strValue) {
        var str = strValue.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });

        var lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 
            'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];

        var i, j;
        for (i = 0, j = lowers.length; i < j; i++) {

            str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), function(txt) {
                return txt.toLowerCase();
            });
        }

        var uppers = ['Id', 'Tv'];

        for (i = 0, j = uppers.length; i < j; i++) {
            str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'), uppers[i].toUpperCase());
        }

        return str;
    }

    function applyTitleCase($el) {
        var title = titleCase( ( $el.text() || '' ).replace(/_/gi, ' ') );

        $el.text(title);
    }

    function updateUrlParam(url, key, value) {
        var n = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
        var i = -1 !== url.indexOf('?') ? '&' : '?';

        return url.match(n) ? url.replace(n, '$1' + key + '=' + value + '$2') : url + i + key + '=' + value;
    }

    function logMagnetTag() {
        var tagname;

        $(document).on('onTwpMeterComplete.omniture', function() {

            var modulearea = document.getElementsByClassName('pb-f-page-magnet')[0].getElementsByClassName('pb-module-area')[0];
            
            tagname = modulearea && modulearea.getAttribute('data-tag');

            if (tagname && !!window.s) {
                s.prop55 = tagname;
            }
        });
    }

    function debounce(func, wait, immediate) {
        var timeout;

        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
})(window, jQuery, wp_pb);
