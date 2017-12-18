// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
// JQuery and IStats delivered via BBC require Map on all BBC responsive pages...
// Here we could define other dependencies that may be require specifically by our application
// for example rapheal or a pubsub module..
define([
    'http://news.bbcimg.co.uk/news/special/2015/newsspec_10193/lib/event_emitter.js?v=1.1'
], function (
    // jquery,
    EventEmitter
) {
    var news = {
        // $: jquery,
        $: $,
        pubsub: new EventEmitter()
    };

    return news;
});