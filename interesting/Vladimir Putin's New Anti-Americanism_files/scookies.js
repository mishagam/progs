var EV = (function (ev) {
    "use strict";

    var config={
        authorizeUrl: "/ev_session_check"
    };

    var oldinit=ev.init;
    ev.init = function(params) {
        for (var obj in params) {
            if ( params.hasOwnProperty(obj) ) {
                config[obj]=params[obj];
            }
        }
        if ( oldinit ) {
            oldinit(params);
        }
    };

    function result(xhr) {
        return {
            responseText: xhr.responseText,
            getHeader: function(name) {
                return xhr.getResponseHeader(name);
            },
            allowAccess: xhr.responseText == "ALLOW_ACCESS",
            requireLogin: xhr.responseText == "REQUIRE_LOGIN",
            requireEntitlement: xhr.responseText == "REQUIRE_ENTITLEMENT",
            sessionId: xhr.getResponseHeader("X-RESTORED_SESSION") || null
        };
    }

    ev.authorize = function(headers, success, error) {
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if ( xhr.readyState == 4 ) {
                if ( xhr.status == 200 ) {
                    success(result(xhr));
                } else {
                    if ( error ) {
                        error(xhr.status, xhr.responseText);
                    }
                }
            }
        };
        xhr.open("GET", config.authorizeUrl);
        for ( var obj in headers ) {
            if ( headers.hasOwnProperty(obj) ) {
                xhr.setRequestHeader(obj, headers[obj]);
            }
        }
        xhr.send();
    };

    return ev;
})(EV || {});
var EV = (function (ev) {
    "use strict";

    var existingInit=ev.init;
    ev.init = function (params) {
//        for (var obj in params) {
//            if ( params.hasOwnProperty(obj) ) {
//                config[obj]=params[obj];
//            }
//        }
        if ( existingInit ) {
            existingInit(params);
        }
        return true;
    };

    ev.handleNewSession = function (success, error, sessionId) {
        var headers = {}; // default empty headers
        var restoreVal = ev.SuperCookie.get();
        if (restoreVal != null) {
            // supercookie was found, so attempt to restore the previous session
            headers["X-RESTORE_SESSION"] = restoreVal;
        } else {
            if ( sessionId ) {
                // indicates fingerprinting disabled
                ev.SuperCookie.set(sessionId);
                // doesn't call backend
                return;
            }

            if ( !Fingerprint ) {
                throw "Fingerprinting is not enabled!";
            }
            // no other option, resort to fingerprinting
            // noinspection JSUnresolvedFunction
            headers["X-FINGERPRINT"] = new Fingerprint({
                canvas: true,
                screen_resolution: true
            }).get();
        }
        // make a call to Access Director
        ev.authorize(headers, function (result) {
            if (result.sessionId) {
                // restored session was sent, so push it to supercookie
                ev.SuperCookie.set(result.sessionId);
            }
            // call the provided handler
            success(result);
        }, error);
    };

    return ev;
})
(EV || {});
var EV = (function (ev) {
    "use strict";

    var root = this || window; // normally window

    var __localStorage = {
        name: "localStorage",
        get: function () {
            try {
                return root.localStorage.getItem("ev");
            } catch (e) {
                return null;
            }
        },
        set: function (value) {
            try {
                root.localStorage.setItem("ev", value);
            } catch (e) {
                // fail silently
            }
        },
        clear: function() {
            try {
                root.localStorage.removeItem("ev");
            } catch (e) {
                // fail silently
            }
        }
    };

    var __windowName = {
        name: "windowName",
        get: function () {
            var res = root.name;
            if (/^ev_/.test(res)) {
                return res.substr(3);
            }
            return null;
        },
        set: function (value) {
            root.name = "ev_" + value;
        },
        clear: function() {
            root.name = undefined;
        }
    };

    var backends = [
        __localStorage,
        __windowName
    ];

    // override init method
    var existingInit = ev.init;
    ev.init = function (params) {
        if ( existingInit ) {
            existingInit(params);
        }
        //
        // any initialisation goes here
        //
        return true;
    };

    var SuperCookie = ev.SuperCookie = ev.SuperCookie || {};

    SuperCookie.get = function () {
        var vals = [];
        var found;
        for (var i = 0; i < backends.length; i++) {
            var backend = backends[i];
            var result = backend.get();
            if (result) {
                // prefers last backend if multiple found
                found = result;
            }
            vals[i] = result;
        }
        if (!found || found == undefined) {
            return null;
        }
        // reset any backends that don't match
        for (var j = 0; j < vals.length; j++) {
            if (vals[j] != found) {
                backends[j].set(found);
            }
        }
        return found;
    };

    SuperCookie.set = function (value) {
        for (var name in backends) {
            backends[name].set(value);
        }
    };

    SuperCookie.clear = function () {
        for (var name in backends) {
            backends[name].clear();
        }
    };

    // for testing only
    ev.__test = ev.__test || {};
    ev.__test.backends = backends;
    ev.__test.backend = function (name) {
        for (var obj in backends) {
            if (backends[obj].name == name) {
                return backends[obj];
            }
        }
    };

    return ev;
}(EV || {}));