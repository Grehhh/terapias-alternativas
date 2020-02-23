$(function () {

	var anchoVentana = $(window).width();
	if (anchoVentana < 300) {
		// COSAS A ELIMINAR
		$('nav').css('overflow','hidden');
		$('ul').remove();
		$('.arriba').remove();
		$('div').removeClass('padding-left padding-right');
		// COSAS A MODIFICAR
		$('.intro p').css('font-size','1em');
		$('p').css('text-align','justify');
		$('.subtitulo').css('text-align','center');
		// CAMBIO CLASE
		$('section').toggleClass('section-300');
		$('img').toggleClass('img-300');
		$('h2').toggleClass('h2-300');
		$('aside p').toggleClass('aside-p-300');

	}

	$('li:first').on('click', function(){
		var posicionQue = $(".que").offset().top;	
		$('html').animate({
			scrollTop: posicionQue,
		}),100;
	});

	$('li:eq(1)').on('click', function(){
		var posicionComo = $('.como').offset().top;
		$('html').animate({
			scrollTop: posicionComo,
		}),100;
	});

	$('li:eq(2)').on('click', function(){
		var posicionPara = $('.para').offset().top;
		$('html').animate({
			scrollTop: posicionPara,
		}),100;
	});

	$('li:eq(3)').on('click', function(){
		var posicionTecnicas = $('.tecnicas').offset().top;
		$('html').animate({
			scrollTop: posicionTecnicas,
		}),100;
	});

	$('li:last, aside').on('click', function(){
		var posicionContacto = $('.contacto').offset().top;
		$('html').animate({
			scrollTop: posicionContacto,
		}),100;
	});


	$('.arriba').on('click', function(){
		$('html').animate({
			scrollTop: 0,
		}),100;
	});

	// var posicionH1 = $('h1').offset().top;
	


});

$(window).on('load', ocultarOverlay);

function ocultarOverlay (){
	$('.overlay').fadeOut(2000);
};






