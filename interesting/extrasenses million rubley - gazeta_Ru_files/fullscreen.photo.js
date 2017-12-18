                       $( function () {
                        	$('.main_pick img').each(function(){
                        		var imgfull = $(this).data('fullimg')
                        		if(imgfull != undefined && imgfull != ''){
                        			$(this).addClass('full-img');
                        			$(this).after('<div class="size-full"></div>');
                        		}
                        	})
                        	$('.main_pick img.full-img, .size-full').on('click', function(){
                        		if(this.className == "full-img"){
                        			var imgfull = $(this).data('fullimg');
                        			var imgcaption = $(this).data('description');                        		
                        		}else if(this.className == "size-full"){
                        			var imgfull = $(this).parent().find( 'img.full-img' ).data('fullimg');
                        			var imgcaption = $(this).parent().find( 'img.full-img' ).data('description'); 
                        		}
                        		var screen_h = screen.height*0.9 - 100;
                        		var screen_w = screen.width*0.9;
                        		if ( imgcaption  )
                        			$(this).after('<div class="dark-screen-page" onclick="$(this).remove()"><div style="display:table-cell;width: 50%;" ></div><div class="main_pick_full"><figure><img src="'+imgfull+'" style="max-width:'+screen_w+'px;max-height:'+screen_h+'px"/></figure><figcaption>'+imgcaption+'</figcaption></div><div style="display:table-cell;width: 50%;"></div><div class="close" onclick="$(this).parent().remove()"></div></div>');  
                        		else 
	                        		$(this).after('<div class="dark-screen-page" onclick="$(this).remove()"><div style="display:table-cell;width: 50%;" ></div><div class="main_pick_full"><figure><img src="'+imgfull+'" style="max-width:'+screen_w+'px;max-height:'+screen_h+'px"/></figure></div><div style="display:table-cell;width: 50%;"></div><div class="close" onclick="$(this).parent().remove()"></div></div>');  
                        	});
                        });  