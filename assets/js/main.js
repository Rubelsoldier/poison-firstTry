jQuery(function($){
    "use strict";

     /*============================
		9-Vegas Slider
	 ============================*/
	
	if($('.vegas-slides').length){
		// alert('after if checking');
		if($(window).width()>760){
			$('body').bind('vegaswalk');
		}
	}
	
	if($(window).width()<760){
		$.vegas('pause');
	}
	
	reanimate();
    function reanimate() {
        $('.ScrollTo > i').animate({top:0}, 1000).animate({top: 20},1000,function(){setTimeout(reanimate, 100);});
    }

    
});