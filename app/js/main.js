$(function () {
	
	$('.reviews-slider').slick({
		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
  		dots: true,
		nextArrow: '<img src="images/fi-sr-angle-right.png" class="arrow-right" alt="right">',
    	prevArrow: '<img src="images/fi-sr-angle-left.png" class="arrow-left" alt="left">',
  		responsive: [
				{
					breakpoint: 1250,
					 settings: {
						 arrows: false,
					 }
			 },
			 {
					breakpoint: 1110,
				 	settings: {
						slidesToShow: 2,
        		slidesToScroll: 1,
						arrows: false,
				 	}
		 		},
    		{
					breakpoint: 681,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
						}
				},
    	]
	});

	//открывает меню при нажатии на бургер
	$('.menu-btn').on('click', function () {
		$('.menu-list').slideToggle();
		$('.menu-btn').addClass('menu-btn--active');
    	$('.logo').addClass('logo--active');
		$('body').addClass('menu--scroll');
	});

	//закрывает меню при нажатии на ссылку или на любое место в меню
	$('.menu-list').on('click', function () {
		$('.menu-list').slideToggle();
		$('.menu-btn').removeClass('menu-btn--active');
		$('.logo').removeClass('logo--active');
		$('body').removeClass('menu--scroll');
	});

	//раскрывает и закрывавет пункты вопросов
	$('.questions-item_title').on('click', function () {
    $('.questions-item').removeClass('questions-item--active');
    $(this).parent().addClass('questions-item--active');
  });

})