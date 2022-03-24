$(function () {
	var mixer = mixitup('.header-content__tabs', {
		load: {
			filter: '.category-a'
		}
	});
	$('.slider__items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.header__burger, .menu a').on('click', function () {
		$('.header__burger,.header-top__menu, .header-top__inner').toggleClass('active')
		$('body').toggleClass('lock')
	});




	// function checkWidth() {
	// 	var windowWidth = $('body').innerWidth(),
	// 		elem = $(".menu-mobile"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
	// 	// страницу для поиска нужного элемента
	// 	if (windowWidth < 769) {
	// 		elem.addClass('menu-mobile--mobile');
	// 	}
	// 	else {
	// 		elem.removeClass('menu-mobile--mobile');
	// 	}
	// }

	// checkWidth(); // проверит при загрузке страницы

	// $(window).resize(function () {
	// 	checkWidth(); // проверит при изменении размера окна клиента
	// });

	// $('.header-top__menu').appendTo($('.menu-mobile--mobile'));

});