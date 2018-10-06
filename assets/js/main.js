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
	
	if(isStickyNav!="false"){NavOffset=naviheight + 10;}
	if(isStickyPlayer!="false"){NavOffset=playerHeight+10;}
	if(isStickyNav!="false" && isStickyPlayer!="false"){NavOffset=naviheight+playerHeight+10;}	
	$('body').attr('data-offset',NavOffset+10);
	
    $(".navbar-nav a[href^='#'],.ScrollTo,.btn-scroll").click(function (e) {
		e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($.attr(this, 'href')).offset().top - NavOffset}, 1000,"swing");
    });
	
	
	if($winWidth>700){
	  // if($(".sticky_player").attr('data-sticky')!="false"){navTopSpace=playerHeight;}
	  if(isStickyNav!="false"){
		  $("#sticktop").sticky({topSpacing:navTopSpace});
		}  
	  // if($(".sticky_player").attr('data-sticky')!="false"){
		 //  $(".sticky_player").sticky({topSpacing: 0});
	  // }
	  $('#sticktop').on('sticky-start', function() {
		  if($(".sticky_player").attr('data-sticky')!="false")
		  $('.rock_player').removeClass('pre_sticky');
	  });
	  $('#sticktop').on('sticky-end', function() {
		  if($(".sticky_player").attr('data-sticky')!="false")
		  $('.rock_player').addClass('pre_sticky');
	  });  
	}
    
});