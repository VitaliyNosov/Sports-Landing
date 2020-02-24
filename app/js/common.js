$(function() {

	// fullpage menu block navigation

	$('#fullpage').fullpage({
		navigation: true
		// scrollOverflow: true
	});


	// popup video modal

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});



	// slider

	var slider = $('.owl-carousel');
	slider.owlCarousel({
		items: 1,
		dots: false,
		dots: true

	});

	// Go to the next item
	$('#customNextBtn').click(function () {
		console.log('dcdcdcs');
		slider.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('#customPrevBtn').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		slider.trigger('prev.owl.carousel', [300]);
	})








});
