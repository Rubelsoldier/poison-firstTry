jQuery(function($){
    "use strict";


    var isStickyPlayer=$(".sticky_player").attr('data-sticky'),
		isStickyNav=$("#sticktop").attr('data-sticky'),
		naviheight=$("#sticktop").height(),
		playerHeight=$(".sticky_player").height(),
		navTopSpace=0,NavOffset=0;
		var $winHeight=$(window).height(),
		$winWidth=$(window).width();

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


    /*=======================================
	2-Navigation
	=======================================*/
	
	
    

	 // >>>>>>>>>>>>> sticky scrollbar >>>>>>>>>>>>>>>  //

	 window.onscroll = function() {myFunction()};

	 var navbar = document.getElementById("sticktop");
	 var sticky = navbar.offsetTop;

	 function myFunction() {
	 	if (window.pageYOffset >= sticky) {
	 		navbar.classList.add("sticky")
	 	} else {
	 		navbar.classList.remove("sticky");
	 	}
	 }



});