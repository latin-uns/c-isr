function WindowResize(m) {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	if (windowWidth < 1260) {
		$("body").addClass('d_size');
	} else {
		$("body").removeClass('d_size');
	}

	if(m == 'main') {
		if (windowWidth > 1098) {
			$("body").css("overflow-x", "hidden");
			$('.footer').css({'left': '50%'});
		} else {
			$("body").css("overflow-x", "visible");
			$('.footer').css({'position':'absolute', 'left': '500px'});
		}

		if (navigator.userAgent.match(/iPhone|iPad|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null)
	    { 
	        $('.footer').css({'position':'absolute', 'top': '967px'});	
		} else { 
	        if (windowHeight > 760) {
				$("body").css("overflow-y", "hidden");
				$('.footer').css({'position':'fixed','top': 'auto'});		
			} else {
				$("body").css("overflow-y", "visible");
				$('.footer').css({'position':'absolute', 'top': '967px'});	
			}
		}
	} else {
		// 서브
	}
	
	
} 

function quick_menu(num) {
	$('.msg').hide();
	$('.msg_'+num).stop().fadeIn(500,function(){
		$(this).delay(1500).fadeOut(500);
	});
}

function mobileWeb(num){
	if (navigator.userAgent.match(/iPhone|iPad|Mobile|UP.Browser|Android|BlackBerry|Windows CE|Nokia|webOS|Opera Mini|SonyEricsson|opera mobi|Windows Phone|IEMobile|POLARIS/) != null)
    { 
    	
	} else { 

	}
}

$(document).ready(function() {
	$('.rollover').each(function() {
	    $(this).mouseover(function() {
	        if ($(this).attr('src').match('_off')) {
	            $(this).css('cursor', 'pointer');
	            $(this).attr('src', $(this).attr('src').replace('_off', '_over'));
	            $(this).mouseout(function() {
	                $(this).attr('src', $(this).attr('src').replace('_over', '_off'));
	            });
	        }
	    });
	});


	// 퀵메뉴
	var $doc = $(document);  
	var position = 0;  
	var top = $doc.scrollTop();
	var screenSize =0;
	var halfScreenSize = 0;
	var pageWidth = 0;
	var leftOffet = -135;
	var leftMargin = 0;
	var speed = 700;
	var easing = 'swing';
	var $layer = $('.quick_m');
	var layerTopOffset = 60;

	$layer.css('z-index', 10);
	function resetXPosition() {  
		$screenSize = $('body').width();
		halfScreenSize = $screenSize/3;
		xPosition = halfScreenSize + leftOffet;
		if ($screenSize < pageWidth) {
			xPosition = leftMargin;
		}
		//$layer.css('left', xPosition);  
	}
	if (top > 767 ) {
		$doc.scrollTop(layerTopOffset+top);  
		alert('a');
	} else {
		$doc.scrollTop(0);  
	}
	
	$layer.css('top',layerTopOffset);  
	resetXPosition();
	$(window).resize(resetXPosition);
	$(window).scroll(function(){ 
		
		if( $doc.scrollTop()>10){
			yPosition = $doc.scrollTop()+layerTopOffset+240;  
			$layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});  
		}else{
			yPosition = 60;
			$layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});  
		}
	}); 


	// 이미지 팝업
	var p_pop = $('#pic_pop');
	var bm = $('.bg_mask');
	$('.p_open a').bind('click',function(e){
		e.preventDefault();
		var c = $(this).attr('class');
		var h = ($(window).height()-481)/2;
		p_pop.css('margin-top',h+'px');
		p_pop.addClass(c).fadeIn(100);
		bm.show();
	});
	p_pop.find('.close, .pic').bind('click',function(e){
		e.preventDefault();
		p_pop.fadeOut(100).removeClass();
		bm.hide();
	});

});
