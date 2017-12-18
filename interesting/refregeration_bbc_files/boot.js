var istatsGlobal;

require(['istats-1', 'http://news.bbcimg.co.uk/news/special/2015/newsspec_10193/static/js/bootstrap.js?v=1.1', 'http://news.bbcimg.co.uk/news/special/2015/newsspec_10193/static/js/nsshare-model.js?v=1.1', 'http://news.bbcimg.co.uk/news/special/2015/newsspec_10193/static/js/nsshare-view.js?v=1.1'],
function (istats, news, NSShareModel, NSShareView) {

    'use strict';

    istatsGlobal = istats;

    var model, view;

var _callFaceBook = function () {
    news.pubsub.emitEvent('ns:request:launchshare', [model.fbShareTarget()]);
};

var _callTwitter = function () {
    news.pubsub.emitEvent('ns:request:launchshare', [model.twitterShareTarget()]);
};

var _callEmail = function () {
    news.pubsub.emitEvent('ns:request:launchshare', [model.emailShareTarget()]);
};

var _updateMessage = function (ev) {
    model.setShareMessage(ev);
};

var _initialiseModule = function () {
    news.pubsub.addListener('ns:share:message', function (target) { _updateMessage(target); });
    news.pubsub.addListener('ns:share:call:facebook', _callFaceBook);
    news.pubsub.addListener('ns:share:call:twitter', _callTwitter);
    news.pubsub.addListener('ns:share:call:email', _callEmail);
    news.pubsub.addListener('ns:update:header', function () {view.updateHeader(model.getHeader()); });
};

model = new NSShareModel({
    message: "Chilling story - the icy ingenuity of the men who changed the planet forever by cooling us down #BBCRicherWorld - http://www.bbc.co.uk/news/magazine-31149328",
    desc: "Shared via BBC News Magazine",
    image: "http://news.bbcimg.co.uk/news/special/2015/newsspec_10193/media/share_image.jpg"
});
model.storyPageUrl = window.document.location.href;
view = new NSShareView('#ns_share_module');
news.pubsub.addListener('ns:module:ready', _initialiseModule);
news.pubsub.emitEvent('ns:request:personalshare', [model]);

});