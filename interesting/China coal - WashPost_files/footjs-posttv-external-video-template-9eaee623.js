PubSub.subscribe("player_script_loaded",function(b,a){$("#viewmorevideos").on("click",function(c){c.preventDefault();if($("#end-video-container").length>0){$("html, body").animate({scrollTop:$("#end-video-container").offset().top},"slow")}return false})});var $root=$("#pb-root");angular.element(document).ready(function(){if(typeof $root.data("angularBootstrapped")==="undefined"){$root.data("angularBootstrapped",true);angular.bootstrap($root[0],["posttv"])}});