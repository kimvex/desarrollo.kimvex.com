$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(200);
		} else {
			$('.ir-arriba').slideUp(100);
		}
	});
	
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.10;

		$('.servicios').css({
			'background-position': '0-'+posicion+'px'
		});		
	});
});