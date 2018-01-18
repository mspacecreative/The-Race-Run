function viewportHeight() {
	$('.container').outerHeight($(window).height());
}

function halfViewportWidth() {
	var half = parseInt($(window).outerWidth()) / 2;
	$('.carousel-1, .carousel-2, .carousel-3, .carousel-4').css('width',half);
}

//function halfViewportHeight() {
//	var half = parseInt($(window).outerHeight()) / 2;
//	$('.carousel-1, .carousel-2, .carousel-3, .carousel-4').css('height',half);
//}

$(document).ready(function () {
	viewportHeight();
	halfViewportWidth();
	//halfViewportHeight();
	$('.carousel').slick({
	  autoplay: true,
	  fade: true,
	  speed: 2000
	});
	$('.carousel-1').slick({
	  autoplaySpeed: 2000
	});
	$('.carousel-2').slick({
	  autoplaySpeed: 5000
	});
	$('.carousel-3').slick({
	  autoplaySpeed: 1500
	});
	$('.carousel-4').slick({
	  autoplaySpeed: 3000
	});
});

$(window).resize(function () {
	viewportHeight();
	halfViewportWidth();
	//halfViewportHeight();
});