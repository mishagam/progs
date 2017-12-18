$(function(){
	var $feed = $('.article-share-name');
	//init socbuttons
	$feed.on('click', '.social-button a', function(evt){
		var pop_w = 500;
		var pop_h = 500;
		$this = $(this);
		var $article = $this.parents('article');
		if($article.data('url') == undefined){
			var url = $('meta[property="og:url"]').attr('content');
			var title = $('meta[property="og:title"]').attr('content');	
		}else{
			var url = undefined ? $article.attr('data-url') : $article.data('url');
			var title = $article.find('h1').text();
		}
		title = $('<div/>').html(title).text();
		if ($this.hasClass('soc_twi')) {
			$this.attr('href','https://twitter.com/share?via=gazetaru&url='+encodeURIComponent(url)+'&text='+encodeURIComponent(title)+': ');
			var popup = window.open($this.attr('href'),'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+pop_w+',height='+pop_h+'');
		}else if($this.hasClass('soc_lj')){
			$this.attr('href','http://www.livejournal.com/update.bml?subject='+encodeURIComponent(title)+'&event='+encodeURIComponent(url)+': ');
			var popup = window.open($this.attr('href'),'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+pop_w+',height='+pop_h+'');			
		}else {
			var popup = window.open($this.attr('href')+url,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+pop_w+',height='+pop_h+'');
		};
		if(typeof(popup)!=='undefined'){
			popup.moveTo($(window).width()/2-pop_w/2, $(window).height()/2-pop_h/2);
		} 
		return false;
	});
	$( ".article-share-name" ).each(function() {  
		soc_count(this);	
	});
	$('#full_text, #only_titles').on('click', function(){
		if(!$(this).hasClass('active')){
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');
			show_hide_text();
		}
		
	})
	$(window).resize(function(){
		show_hide_text();
	})
	function inWindow(s){
		scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var currentEls = $(s);
		var result = [];
		currentEls.each(function(){
			var el = $(this);
			var offset = el.offset();
			if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
			result.push(this);
		});
		return $(result);
	}
					
	function keypush(event){
		
		var boxesInWindow = inWindow("div.b-photoreport_article");
		var focus_id_photorep = boxesInWindow.data('id_photorep');		
		if($('div[data-id_photorep="'+focus_id_photorep+'"] .photo_full_screen').css('display') != 'none') {
			var onfullscreen=true;						
		}					
		switch (event.keyCode) {
			case 39:
				if(onfullscreen){								
					var link = $(boxesInWindow).find('#right_arrow1 .right_arrow');
				}else{								
					var link = $(boxesInWindow).find('#right_arrow .right_arrow');								
				}										
				$(link).click();							
				break
			case 37:
				if(onfullscreen){								
					var link = $(boxesInWindow).find('#left_arrow1 .left_arrow')
				}else{								
					var link = $(boxesInWindow).find('#left_arrow .left_arrow')
				}
				$(link).click();							
				break
			case 27:
				if(onfullscreen){								
					var link = $(boxesInWindow).find('#close');
				}
				$(link).click();							
				break
			default:
				//console.log(event.keyCode);
				
		}
		
		
	}
	$('body').keyup(keypush);
	
	
	
})
function show_hide_text(){							
	if($('#full_text').hasClass("active")){
		$('.txt_1 noindex').show();
	}else if($('#only_titles').hasClass("active")){
		$('.txt_1 noindex').hide();
	}
	if($('.txt_1 noindex').css('display') == 'none' && $(document).width() < 1260 && $('#only_titles').hasClass("active")){
		$('.txt_1 h4.topic').hide();
	} else if($('.txt_1 noindex').css('display') == 'inline' &&  $(document).width() < 1260 && $('#full_text').hasClass("active")){
		$('.txt_1 h4.topic').show();
	}
	
		
}
function soc_count(art_href){
		protocol = document.location.protocol;
		var $article= $(art_href).parents('article');
		/* Use always http protocol for counters */
		if($article.data('url') == undefined){
			var data_url = $('meta[property="og:url"]').attr('content');
			/* Replace https to http, if url like 'https://.....' */
			if( data_url.match(/https:/gi) ){
				data_url = data_url.replace("https:", "http:");
			/* Add http: prefix if url like '//....' */
			} else if( !data_url.match(/http:/gi) ){		
				data_url = 'http:' + data_url; 
			}
		}else{
			var data_url = $article.data('url');
			/* Replace https to http, if url like 'https://.....' */
			if( data_url.match(/https:/gi) ){
				data_url = data_url.replace("https:", "http:");
			/* Add http: prefix if url like '//....' */
			}else if( !data_url.match(/http:/gi) ){		
				data_url = 'http:' + data_url; 
			}
		}
		var fb_counter = $article.find('.fb_counter');
		var tw_counter = $article.find('.tw_counter');
		var vk_counter = $article.find('.vk_counter');
		var ok_counter = $article.find('.ok_counter');
		
		var services = {
			  facebook: {
			    counterUrl: protocol+'//graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?',
			    convertNumber: function(data) {
			      return data.data[0].total_count;
			    }
			  },
			  /*twitter: {
			    counterUrl: protocol+'//urls.api.twitter.com/1/urls/count.json?url={url}&callback=?',
			    convertNumber: function(data) {
			      return data.count;
			    }
			  },*/
			 
			   odnoklassniki: {
			    counterUrl: protocol+'//connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',
				counter: function(jsonUrl, deferred) {
					var options = services.odnoklassniki;
					if (!options._) {
						options._ = [];
						if (!window.ODKL) window.ODKL = {};
						window.ODKL.updateCount = function(idx, number) {
							options._[idx].resolve(number);
						};
					}
	
					var index = options._.length;
					options._.push(deferred);
			      $.ajax({
			        url: makeUrl(jsonUrl, {index: index}),
			        dataType: 'jsonp'
			      });
			    }
			  }
			  ,
			  vkontakte: {
			    counterUrl: protocol+'//vk.com/share.php?act=count&url={url}&index={index}',
			    counter: function(jsonUrl, deferred) {
			      var options = services.vkontakte;
			      if (!options._) {
			        options._ = [];
			        if (!window.VK) window.VK = {};
			        window.VK.Share = {
			          count: function(idx, number) {
			            options._[idx].resolve(number);
			          }
			        };
			      }
			
			      var index = options._.length;
			      options._.push(deferred);
			      $.ajax({
			        url: makeUrl(jsonUrl, {index: index}),
			        dataType: 'jsonp'
			      });
			    }
			  }
		};	
		var counters = {
		  promises: {},
		  fetch: function(service, url) {
		    if (!counters.promises[service]) counters.promises[service] = {};
		    var servicePromises = counters.promises[service];
		
		    if (servicePromises[url]) {
		      return servicePromises[url];
		    }
		    else {
		      var options = services[service],
		        deferred = $.Deferred(),
		        jsonUrl = options.counterUrl && makeUrl(options.counterUrl, {url: url});
		
		      if ($.isFunction(options.counter)) {
		        options.counter(jsonUrl, deferred);
		      }
		      else if (options.counterUrl) {
		        $.getJSON(jsonUrl)
		          .done(function(data) {
		            try {
		              var number = data;
		              if ($.isFunction(options.convertNumber)) {
		                number = options.convertNumber(data);
		              }
		              deferred.resolve(number);
		            }
		            catch (e) {
		              deferred.reject(e);
		            }
		          });
		      }
		
		      servicePromises[url] = deferred.promise();
		      return servicePromises[url];
		    }
		  }
		};
		
		function makeUrl(url, context) {
		  return template(url, context, encodeURIComponent);
		}
		
		function template(tmpl, context, filter) {
		  return tmpl.replace(/\{([^\}]+)\}/g, function(m, key) {	 
		    return key in context ? (filter ? filter(context[key]) : context[key]) : m;
		  });
		}	
		var url = data_url;
		/*counters.fetch("twitter", url).done(function(number) {
	    		numbertw = parseInt(number, 10);
	    		if (numbertw > 999){
	    			numbertw = (numbertw/1000).toFixed(1) + 'k';
	    		}
	    		if (!number) number = 0;    		
	    		tw_counter.html(numbertw);
	  	});*/
		counters.fetch("facebook", url).done(function(number) {
	    		numberfb = parseInt(number, 10);
	    		if (numberfb > 999){
	    			numberfb = (numberfb/1000).toFixed(1) + 'k';
	    		}    		 
	    		if (!number) number = 0;
	    		fb_counter.html(numberfb);
	  	});
		counters.fetch("vkontakte", url).done(function(number) {
	    		numbervk = parseInt(number, 10);
	    		if (numbervk > 999){
	    			numbervk = (numbervk/1000).toFixed(1) + 'k';
	    		}
	    		if (!number) number = 0;
	    		vk_counter.html(numbervk);
	  	}); 
	  	counters.fetch("odnoklassniki", url).done(function(number) {
	    		numberok = parseInt(number, 10);
	    		if (numberok > 999){
	    			numberok = (numberok/1000).toFixed(1) + 'k';
	    		}
	    		if (!number) number = 0;
	    		ok_counter.html(numberok);
	  	});
	}
	
	!function(a,b,e,f,c){
		a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};
		a[c].d=+new Date;
		var d=b.createElement(e);
		d.src=f;d.async=!0;
		b=b.querySelector(e);
		b.parentNode.insertBefore(d,b)
	}
	(window,document,"script",'https://cdn-comments.rambler.ru/widget.js',"rambler_comments");
		
	