/*
$(window).load(function() {
  // Handler for .load() called.
});
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.main-banner-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	dots: true,
	arrows: false,
	cssEase: 'linear'
});

$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});


$('.hamburger-menu').on('click', function() {
	$(this).toggleClass('animate');
	$('.mobile-navigation').toggleClass('active');
});