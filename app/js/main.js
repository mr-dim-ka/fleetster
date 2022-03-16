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
		adaptiveHeight: true
	});
});