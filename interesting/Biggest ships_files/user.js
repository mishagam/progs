// uglifyjs widget.js -c -m -o widget.min.js

(function () {
    var widget = {
        namespace: 'postila-widget',
        size: {
            width: 240,
            maxWidth: 360,
            minHeight: 100,
            height: 330,
            maxHeight: 360
        },
        script: null,
        placeholder: null,
        scriptData: null
    };

    widget.toConsole = function (message) {
        if (window.console && window.console.log) {
            window.console.log('[' + widget.namespace + '] ' + message);
        }
    };

    widget.getScriptData = function (script) {
        var data = {};
        var user = script.getAttribute('data-user');
        var width = parseInt(script.getAttribute('data-width'), 10);
        var height = parseInt(script.getAttribute('data-height'), 10);
        var animate = parseInt(script.getAttribute('data-animate'), 10);
        var verticalSpace = parseInt(script.getAttribute('data-vertical-space'), 10);
        var horizontalSpace = parseInt(script.getAttribute('data-horizontal-space'), 10);
        var align = script.getAttribute('data-align') || 'left';

        if (!user) {
            widget.toConsole('Please set data-user attribute to script tag.');
            return false;
        } else {
            data.user = user;
        }

        if (width) {
            if (width >= widget.size.width && width <= widget.size.maxWidth) {
                data.width = width;
            } else {
                data.width = widget.size.width;
            }
        }

        if (height <= widget.size.maxHeight && height >= widget.size.minHeight) {
            data.height = height;
        } else {
            data.height = widget.size.height;
        }

        if (verticalSpace) {
            data.verticalSpace = verticalSpace;
        }

        if (horizontalSpace) {
            data.horizontalSpace = horizontalSpace;
        }

        if (align) {
            data.align = align;
        }

        if (animate >= 0) {
            data.animate = animate;
        }

        return data;
    };

    widget.addVisibilityCheck = function () {
        if (window.addEventListener) {
            addEventListener('DOMContentLoaded', widget.onVisibilityChange, false);
            addEventListener('load', widget.onVisibilityChange, false);
            addEventListener('scroll', widget.onVisibilityChange, false);
            addEventListener('resize', widget.onVisibilityChange, false);
            document.body.addEventListener('click', widget.onVisibilityChange, false);
        } else if (window.attachEvent)  {
            attachEvent('onDOMContentLoaded', widget.onVisibilityChange);
            attachEvent('onload', widget.onVisibilityChange);
            attachEvent('onscroll', widget.onVisibilityChange);
            attachEvent('onresize', widget.onVisibilityChange);
            document.body.attachEvent('onclick', widget.onVisibilityChange);
        }
    };

    widget.removeVisibilityCheck = function () {
        if (window.removeEventListener) {
            removeEventListener('DOMContentLoaded', widget.onVisibilityChange);
            removeEventListener('load', widget.onVisibilityChange);
            removeEventListener('scroll', widget.onVisibilityChange);
            removeEventListener('resize', widget.onVisibilityChange);
            document.body.removeEventListener('click', widget.onVisibilityChange);
        } else if (window.detachEvent)  {
            detachEvent('onDOMContentLoaded', widget.onVisibilityChange);
            detachEvent('onload', widget.onVisibilityChange);
            detachEvent('onscroll', widget.onVisibilityChange);
            detachEvent('onresize', widget.onVisibilityChange);
            document.body.detachEvent('onclick', widget.onVisibilityChange);
        }
    };

    widget.isElementInViewport = function (el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.width != 0 &&
            rect.height != 0 &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    widget.onVisibilityChange = function () {
        if (widget.isElementInViewport(widget.placeholder)) {
            widget.removeVisibilityCheck();
            widget.injectFrame(widget.placeholder, widget.size, widget.scriptData);
        }
    };

    widget.injectPlaceholder = function (el, size, data) {
        var CSSclass = 'postila_widget__placeholder';
        var style = [];

        if (!el && !data && !size) {
            return false;
        }

        style.push('max-width: ' + size.maxWidth + 'px;');
        style.push('min-width: ' + size.width + 'px;');

        if (data.width) {
            style.push('width: ' + data.width + 'px;');
        }

        style.push('height: ' + data.height + 'px;');

        if (data.verticalSpace) {
            style.push('margin-top: ' + data.verticalSpace + 'px;');
            style.push('margin-bottom: ' + data.verticalSpace + 'px;');
        }

        if (data.horizontalSpace) {
            style.push('margin-left: ' + data.horizontalSpace + 'px;');
            style.push('margin-right: ' + data.horizontalSpace + 'px;');
        }

        el.insertAdjacentHTML('afterend', '<div class="' + CSSclass +'" style="' + style.join('') + '"></div>');

        return el.nextSibling;
    };

    widget.injectFrame = function (el, size, data) {
        var template;
        var style = [];
        var urlParams = [];

        if (!el && !data && !size) {
            return false;
        }

        style.push('max-width: ' + size.maxWidth + 'px;');
        style.push('min-width: ' + size.width + 'px;');
        style.push('height: ' + data.height + 'px;');

        switch (data.align) {
            case 'left':
                style.push('margin: 0 auto 0 0;');
                break;

            case 'center':
                style.push('margin: auto;');
                break;

            case 'right':
                style.push('margin: 0 0 0 auto;');
                break;
        }

        style.push('display: block;');

        if (data.width) {
            style.push('width: ' + data.width + 'px;');
        } else {
            style.push('width: 100%;');
        }

        if (data.animate >= 0) {
            urlParams.push('animate=' + data.animate);
        }

        if (urlParams.length) {
            urlParams = '?' + urlParams.join('&');
        }

        template = '<iframe src="//postila.ru/widget/user/' + data.user + urlParams + '" name="' + Date.now() + '" style="' + style.join('') + '" width="' + size.width + '" height="' + size.height + '" frameborder="0"></iframe>';

        el.insertAdjacentHTML('afterbegin', template);
    };

    try {
        widget.script = document.querySelector('script[data-' + widget.namespace + '][data-init]');

        if (!widget.script) {
            return false;
        }

        widget.script.removeAttribute('data-init');
        widget.scriptData = widget.getScriptData(widget.script);

        if (widget.scriptData) {
            widget.placeholder = widget.injectPlaceholder(widget.script, widget.size, widget.scriptData);

            if (widget.placeholder) {
                widget.addVisibilityCheck();
            }
        }
    } catch (e) {
        widget.toConsole(e);
    }
})();
