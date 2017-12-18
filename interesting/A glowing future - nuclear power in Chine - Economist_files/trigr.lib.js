/**
 * Trigr
 */

(function() {

    var TRGR = {
        cfg: {},
        adContent: '',
        template: '',
        dwellStart: null,
        counting: false,
        mouseover: false,
        timer: null,
        rootContainer: null,
        isMobile: (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4))),
        analytics: {
            hostname: 'purposelab-nanosites.com',
            cid: '',
            events: 1,
            engaged: false
        },
        init: function() {
            this.cfg = parseQueryString();
            
            this.analytics.cid = this.cfg.cid;
            
            this.rootContainer = document.getElementById('ad');
        },
        resizeContainer: function(width, height) {
            // Expand containing frame
            parent.postMessage("resize:" + width + 'x' + height, "*");
        },
        showOverlay: function(width, height, url) {
            // Show overlay
            parent.postMessage("overlay:" + width + 'x' + height + ":" + encodeURIComponent(url), "*");
        },
        linkTo : function(evt, url) {
            this.trackEvent('Click', 'Link', evt);
            
            if(this.cfg.redirect) {
                url = this.cfg.redirect + encodeURIComponent(url);
            }
            
            window.open(url);
            
            return false;
        },
        registerMouseEvents : function() {
            if(!this.isMobile) {
                this.rootContainer.onmouseover = function() {
                    if(!TRGR.mouseover) {
                        TRGR.trackEvent('Mouse', 'Mouseover', 'Mouseover');
                        TRGR.mouseover = true;
                        TRGR.dwellStart = Date.now();
                 
                        if(!TRGR.counting) {
                            TRGR.counting = true;
               
                            TRGR.timer = setTimeout(function() {
                                TRGR.trackEvent('Mouse', 'Hover', 'Hover');
                                TRGR.counting = false;
                            }, 1000);
                        }
                    }
                };
           
                if(this.rootContainer.addEventListener) {
                    this.rootContainer.addEventListener('mouseout',makeMouseOutFunction(this.rootContainer),true);
                }
                else if(this.rootContainer.attachEvent) {
                    this.rootContainer.attachEvent('onmouseout',makeMouseOutFunction(this.rootContainer));
                }
            }
        },
        registerMessageCallback : function(callback) {
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

            eventer(messageEvent, function(e) {
                if(e.data) {                
                    var components = e.data.split(':');
            
                    if(components.length > 1) {
                        var command = components[0];
                  
                        callback(command, components[1])
                    }
                }
            }, false);
        },
        trackEvent : function(cat, act, lbl, val) {        
            this.analytics.events++;
                    
            if(this.cfg.reporting != false) {
                if(act != 'Mouseover' && !this.analytics.engaged) {
                    this.analytics.engaged = true;
                    
                    this.trackEvent('Engagement', 'Engagement', act);
                } 
          
                var t = document.createElement('img');
                t.src = (this.cfg.ssl ? 'https' : 'http') + '://www.google-analytics.com/collect?_s=' + this.analytics.events + '&_u=CACAAEABI~&_v=j35&cid=' + this.analytics.cid + '&de=UTF-8&dl=http%3A%2F%2F' + this.analytics.hostname + '%2F&dt=Trigr%20Ad&fl=-&je=1&jid=&sd=-&sr=-&t=event&ec=' + encodeURIComponent(cat) + '&ea=' + encodeURIComponent(act) + '&el=' + encodeURIComponent(lbl) + '&sd=-&sr=-&tid=' + this.cfg.analytics + '&ul=en-us&v=1&z=' + rand(1000000000,9999999999);
                
                if(typeof val != 'undefined') {
                  t.src += '&ev=' + val;
                }
        
                document.lastChild.lastChild.appendChild(t);
            }
        },
        trackTiming : function(cat, vbl, timing) {        
            this.analytics.events++;
                    
            if(this.cfg.reporting != false) {          
                var t = document.createElement('img');
                t.src = (this.cfg.ssl ? 'https' : 'http') + '://www.google-analytics.com/collect?_s=' + this.analytics.events + '&_u=CACAAEABI~&_v=j35&cid=' + this.analytics.cid + '&de=UTF-8&dl=http%3A%2F%2F' + this.analytics.hostname + '%2F&dt=Trigr%20Ad&fl=-&je=1&jid=&sd=-&sr=-&t=timing&ni=1&utc=' + encodeURIComponent(cat) + '&utv=' + encodeURIComponent(vbl) + '&utt=' + timing + '&sd=-&sr=-&tid=' + this.cfg.analytics + '&ul=en-us&v=1&z=' + rand(1000000000,9999999999);
                
                document.lastChild.lastChild.appendChild(t);
            }
        }
    };
    
    window.TRGR = TRGR;
    
    /**
     * Helper functions
     */
    
    function rand(min,max) {
        return min + Math.floor(Math.random() * max) + 1;
    }
     
    function parseQueryString() {
        var match,
            pl     = /\+/g,
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);
            
        urlParams = {};

        while (match = search.exec(query))
           urlParams[decode(match[1])] = decode(match[2]);
           
        return urlParams;
    }
        
    function traverseChildren(elem) {
        var children = [];
        var q = [];
        q.push(elem);
        while (q.length>0)
        {
            var elem = q.pop();
            children.push(elem);
            pushAll(elem.children);
        }
     
        function pushAll(elemArray){
            for(var i=0;i<elemArray.length;i++)
            {
                q.push(elemArray[i]);
            }
        }
        return children;
    }
    
    function makeMouseOutFunction(elem) {
        var list = traverseChildren(elem);
        
        return function onMouseOut(event) {                
            var e = event.toElement || event.relatedTarget;
            if (!!~list.indexOf(e)) {
                return;
            }
                           
            TRGR.mouseover = false;
           
            if(TRGR.counting) {
                TRGR.counting = false;
                clearTimeout(TRGR.timer);
            }
            
            if(TRGR.dwellStart != null) {
                var dwellTime = Date.now() - TRGR.dwellStart;
                
                if(dwellTime >= 1000 && dwellTime <= 10000) {
                    TRGR.trackTiming('Dwell Time', 'Dwell Time', dwellTime);
                }
                
                TRGR.dwellStart = null;
            }
        };
    }
    
})();