var popup_manager = {
	sequence: {},
	now_showing: false,
	init: function(){
		$.each(popup_manager.sequence , function(key,item){
			
			if(item != false){
				if(!item.instance.button_showed && item.need_show && !popup_manager.now_showing){
					//console.log(item);
					item.instance.render();
					item.now_showing = true;
					popup_manager.now_showing = true;
					return false;
				}
				
			}
		});
	}
};

$(document).ready(
	function(){
		setInterval(
			function(){
				popup_manager.sequence = {
					readmore: {
						instance: readmore_popup,
						need_show: (readmore_popup.is_init ? true : false),
						on_close: function(){
							popup_manager.sequence.readmore.now_showing = false;
							popup_manager.sequence.readmore.need_show = false;
							popup_manager.now_showing = false;
						},
					},
					interview: {
						instance: interview_popup,
						need_show: ((interview_popup.is_init && !api2.is_mobile) ? true : false),
						on_close: function(){
							popup_manager.sequence.interview_popup.now_showing = false;
							popup_manager.sequence.interview_popup.need_show = false;
							popup_manager.now_showing = false;
						},
					}
				};
				
				popup_manager.init();
			},
			1000
		);
	}
);