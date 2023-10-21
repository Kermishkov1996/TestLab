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

	$('.menu-btn').on('click', function () {
		$('.menu-list').slideToggle();
		$('.menu-btn').toggleClass('menu-btn--active');
    $('.logo').toggleClass('logo--active');
	});

	$('.questions-item_title').on('click', function () {
    $('.questions-item').removeClass('questions-item--active');
    $(this).parent().addClass('questions-item--active');
  });

})