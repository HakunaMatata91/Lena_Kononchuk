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
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
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
				items: 1,
				mouseDrag: true
			},
			767: {
				items: 1,
				mouseDrag: true
			},
			991: {
				items: 1,
				mouseDrag: true
			},
			1099: {
				items: 1,
				mouseDrag: true
			}
		}
	});

});
