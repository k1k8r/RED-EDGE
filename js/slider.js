$(document).ready(function () {
	$(".slider").slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		speed: 500,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: false,
		swipe: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});