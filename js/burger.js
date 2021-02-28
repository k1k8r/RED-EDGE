$(document).ready(function () {
	$('.header-burger').click(function () {
		$('.header-burger,.header-menu,.header-footer').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.header__link').click(function () {
		$('.header-burger,.header-menu,.header-footer').removeClass('active');
		$('body').removeClass('lock');
	});
});