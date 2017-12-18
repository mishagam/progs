window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"surveys":[],"record_targeting_rules":[{"negate":false,"pattern":"http:\/\/www.economist.com\/news\/special-report\/","match_operation":"starts_with","component":"url"}],"recording_capture_keystrokes":true,"polls":[],"site_id":206062,"forms":[],"record":false,"heatmaps":[{"targeting":[{"negate":false,"pattern":"http:\/\/www.economist.com\/news\/special-report\/","match_operation":"starts_with","component":"url"}],"created_epoch_time":1485794611,"id":1106242,"selector_version":2},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12333\/conversations-about-our-scenarios","match_operation":"simple","component":"url"}],"created_epoch_time":1469741134,"id":671250,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12330\/%E5%A6%82%E6%9E%9C%E4%B8%AD%E5%9B%BD%E8%BF%9B%E8%A1%8C%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%A7%81%E6%9C%89%E5%8C%96","match_operation":"simple","component":"url"}],"created_epoch_time":1469437509,"id":662452,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12133\/decisions-handed-down-data","match_operation":"simple","component":"url"}],"created_epoch_time":1468836726,"id":649021,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12134\/less-dismal-science","match_operation":"simple","component":"url"}],"created_epoch_time":1468835125,"id":648960,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12138\/country-market","match_operation":"simple","component":"url"}],"created_epoch_time":1468835049,"id":648955,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/www.economist.com\/us-election-2016","match_operation":"simple","component":"url"}],"created_epoch_time":1468791855,"id":648274,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/www.economist.com\/blogs\/graphicdetail\/2016\/07\/economist-s-covers-tracking-trump","match_operation":"simple","component":"url"}],"created_epoch_time":1468597577,"id":646789,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12151\/see-through-sea","match_operation":"simple","component":"url"}],"created_epoch_time":1468507603,"id":644242,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12132\/greatest-sale-earth","match_operation":"simple","component":"url"}],"created_epoch_time":1468392963,"id":640583,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/","match_operation":"simple","component":"url"}],"created_epoch_time":1468339468,"id":639548,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/www.economist.com\/blogs\/economist-explains\/2016\/07\/economist-explains-7","match_operation":"simple","component":"url"}],"created_epoch_time":1468249079,"id":636759,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/www.economist.com\/brexit","match_operation":"simple","component":"url"}],"created_epoch_time":1467976638,"id":632822,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/www.economist.com\/news\/asia\/21701522-five-former-soviet-republics-struggle-survive-new-great-game-stans-undelivered","match_operation":"simple","component":"url"}],"created_epoch_time":1467812438,"id":628065,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12262\/taking-flying-leap","match_operation":"simple","component":"url"}],"created_epoch_time":1467797340,"id":627412,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12193\/graphics","match_operation":"simple","component":"url"}],"created_epoch_time":1466677712,"id":605166,"selector_version":0},{"targeting":[{"negate":false,"pattern":"http:\/\/worldif.economist.com\/article\/12139\/suppose-nose-knows","match_operation":"simple","component":"url"}],"created_epoch_time":1466671841,"id":604896,"selector_version":0}],"deferred_page_contents":[],"feedback_widgets":[],"r":0.1544225711,"state_change_listen_mode":"automatic"};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var b = function () {}, d = document, h = d.head || d.getElementsByTagName('head')[0], s, v, c, ct;

    if (!d.addEventListener) {
        return;
    }

    s = d.createElement('script');
    s.src = scriptUrl;
    h.appendChild(s);

    ct = [
        'iframe#_hjRemoteVarsFrame {',
        'display: none !important; width: 1px !important; height: 1px !important; ' +
        'opacity: 0 !important; pointer-events: none !important;',
        '}'
    ];
    c = document.createElement('style');
    c.type = 'text/css';
    if (c.styleSheet) {
        c.styleSheet.cssText = ct.join('');
    } else {
        c.appendChild(d.createTextNode(ct.join('')));
    }
    h.appendChild(c);

    v = d.createElement('iframe');
    v.style.cssText = ct[1];
    v.name = '_hjRemoteVarsFrame';
    v.title = 'Hotjar Remote Vars Frame';
    v.id = '_hjRemoteVarsFrame';
    v.src = 'https://' + (window._hjSettings.varsHost || 'vars.hotjar.com') + '/rcj-b2c1bce0a548059f409c021a46ea2224.html';
    v.onload = function () {
        b.varsLoaded = true;
        if ((typeof hj != 'undefined') && hj.event) {
            hj.event.signal('varsLoaded');
        }
    };
    b.varsJar = v;

    if (d.body) {
        d.body.appendChild(v);
    } else {
        d.addEventListener('DOMContentLoaded', function () {
            d.body.appendChild(v);
        });
    }
    window.hjBootstrap = b;
};


hjBootstrap('https://script.hotjar.com/modules-7f854c8caa65d8de1e655bb9647f6cec.js');