// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function () {

	'use strict';
	jQuery('.icon-humburher').click(function(){
		jQuery('.nav-menu').show("slow");
	});
	
	jQuery('.closed').click(function(){
		jQuery('.nav-menu').hide("slow");
	});
	
	var slid = jQuery('#slider-banner');

	slid.owlCarousel({
		items: 7,
		// autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: [],
		dots: true,
		mouseDrag: true,
		dotClass: 'slider-dot',
		margin: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479: {
				items: 2,
				dots: true,
				mouseDrag: true
			},
			767: {
				items: 5,
				dots: true,
				mouseDrag: true
			},
			991: {
				items: 6,
				dots: true,
				mouseDrag: true
			},
			1099: {
				items: 7,
				dots: true,
				mouseDrag: true
			}
		}
	});

});
