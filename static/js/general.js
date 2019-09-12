$(function () {

	/* Tooltip */
	$("[data-toggle=tooltip]").tooltip();


	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		patterns: {
			youtube: {
				index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

				id: 'v=', // String that splits URL in a two parts, second part should be %id%
				// Or null - full URL will be returned
				// Or a function that should return %id%, for example:
				// id: function(url) { return 'parsed id'; }

				src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}

			// you may add here more sources

		},
	});

	// Phone Mask
	$('.phone-mask').mask('Y(X00) 000 00 00', {
		translation: {
			'X': {
				pattern: /[5]/,
				fallback: '5'
			},
			'Y': {
				pattern: /[0]/,
				fallback: '0'
			},
		}
	});

	/* Magnific Popup */
	$('.magnific-group').each(function () { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        image: {
	            verticalFit: false
	        },
	        gallery: {
	            enabled: true
	        }
	    });
	});

	// All Form Validation
	$('form').each(function () {
		$(this).validate({
			highlight: function (element) {
				$(element).closest('.form-group').removeClass('has-error').addClass('has-error');
			},
			unhighlight: function (element) {
				$(element).closest('.form-group').removeClass('has-error');

			},
			errorPlacement: function (error, element) {
			},
			submitHandler: function (form) { // for demo
				// alert('valid form');
				return false;
			}
		});
	});

	/* Faqs List */
	$("li.faq-toggle-content").hide();
	$(".faqs-lists ul").delegate("li.faq-toggle", "click", function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle().siblings(".faq-toggle-content").slideUp();
		$(this).siblings("li.faq-toggle").removeClass("active");
	});
	$(".faqs-lists ul li:first-child").trigger("click");

	/* Main Slider */
	var swiper = new Swiper('.main-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		grabCursor: true,
		// speed: 1000,
		setWrapperSize: true,
		autoHeight: true,
		autoplay: {
			delay: 5000,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.main-slider-pager .pager-bullets',
			bulletClass: 'pager-item',
			bulletActiveClass: 'active',
			bulletElement: 'div',
			clickable: true
		},
		navigation: {
			// nextEl: '.main-slider-controller .arrow-left',
			// prevEl: '.main-slider-controller .arrow-right',
		},
		on: {
			slideChangeTransitionStart: function () {
				$(".slide-text").find(".slide-subtitle").removeClass("slideInUp");
				$(".slide-text").find(".slide-title").removeClass("slideInUp");
				$(".slide-text").find(".slide-desc").removeClass("slideInUp");
				$(".slide-text").find(".slide-view").removeClass("slideInUp");
			},
			slideChangeTransitionEnd: function () {
				$(".slide-text").find(".slide-subtitle").addClass("slideInUp");
				$(".slide-text").find(".slide-title").addClass("slideInUp");
				$(".slide-text").find(".slide-desc").addClass("slideInUp");
				$(".slide-text").find(".slide-view").addClass("slideInUp");
			},
		},
		breakpoints: {
			480: {
				// slidesPerView: 1,
			},
			767: {
				// slidesPerView: 2,
			},
			991: {
				// slidesPerView: 2,
			},
			1229: {
				// slidesPerView: 3
			}
		}
	});

	/* About Slider */
	var swiper = new Swiper('.about-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		grabCursor: true,
		setWrapperSize: true,
		autoHeight: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.about-slider .about-slider-pager',
			bulletClass: 'pager-item',
			bulletActiveClass: 'active',
			bulletElement: 'div',
			clickable: true
		},
		navigation: {
			prevEl: '.about-slider .about-slider-left',
			nextEl: '.about-slider .about-slider-right',
		},
		on: {
			slideChangeTransitionStart: function () {
				//var slideItem = ".slide-item";
				//$(slideItem).find(".slide-item-title").removeClass("animateTitleIn");
			},
			slideChangeTransitionEnd: function () {
				//$(slideItem).find(".slide-item-title").addClass("animateTitleIn");
			},
		},
		breakpoints: {
			480: {
				// slidesPerView: 1,
			},
			767: {
				// slidesPerView: 2,
			},
			991: {
				// slidesPerView: 2,
			},
			1229: {
				// slidesPerView: 3
			}
		}
	});

	/* News Slider */
	var swiper = new Swiper('.news-slider', {
		loop: true,
		slidesPerView: 'auto',
		direction: 'vertical',
		// height: '600',
		// slidesPerColumn: 3,
		// slidesPerColumnFill: 'row',
		spaceBetween: 20,
		grabCursor: true,
		// setWrapperSize: true,
		autoHeight: true,
		autoplay: {
			delay: 7000,
		},
		pagination: {
			// el: '',
			// bulletClass: 'pager-item',
			// bulletActiveClass: 'active',
			// bulletElement: 'div',
			// clickable: true
		},
		navigation: {
			nextEl: '.news-controller .news-slide-up',
			prevEl: '.news-controller .news-slide-down',
		},
		breakpoints: {
			480: {
				spaceBetween: 10,
			},
			767: {
				spaceBetween: 10,
			},
			991: {
				spaceBetween: 10,
			},
			1229: {
				spaceBetween: 10,
			}
		}
	});

	/* News Sidebar Slider */
	var swiper = new Swiper('.news-sidebar-slider', {
		loop: true,
		slidesPerView: 'auto',
		direction: 'vertical',
		// height: '600',
		// slidesPerColumn: 3,
		// slidesPerColumnFill: 'row',
		spaceBetween: 15,
		grabCursor: true,
		// setWrapperSize: true,
		autoHeight: true,
		autoplay: {
			delay: 7000,
		},
		pagination: {
			// el: '',
			// bulletClass: 'pager-item',
			// bulletActiveClass: 'active',
			// bulletElement: 'div',
			// clickable: true
		},
		navigation: {
			nextEl: '.news-controller .news-sidebar-slide-up',
			prevEl: '.news-controller .news-sidebar-slide-down',
		},
		breakpoints: {
			480: {
				spaceBetween: 10,
			},
			767: {
				spaceBetween: 10,
			},
			991: {
				spaceBetween: 10,
			},
			1229: {
				spaceBetween: 10,
			}
		}
	});

	/* List Products Slider */
	var swiper = new Swiper('.list-product-slider', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		// grabCursor: true,
		setWrapperSize: true,
		autoHeight: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			prevEl: '.list-products .product-slide-left',
			nextEl: '.list-products .product-slide-right',
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 2,
			},
			1229: {
				slidesPerView: 3
			}
		}
	});

	/* List Products Slider Sidebar */
	var swiper = new Swiper('.list-product-sidebar-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		// grabCursor: true,
		setWrapperSize: true,
		autoHeight: true,
		autoplay: {
			delay: 6000,
		},
		navigation: {
			prevEl: '.list-products .product-slide-sidebar-left',
			nextEl: '.list-products .product-slide-sidebar-right',
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 3,
			},
			1229: {
				slidesPerView: 1
			}
		}
	});

	/* Web Blog Slider */
	var swiper = new Swiper('.web-blog-slider', {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		// grabCursor: true,
		setWrapperSize: true,
		autoHeight: true,
		navigation: {
			prevEl: '.web-blog .web-blog-slide-left',
			nextEl: '.web-blog .web-blog-slide-right',
		},
		breakpoints: {
			480: {
				slidesPerView: 1,
			},
			767: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 2,
			},
			1229: {
				slidesPerView: 3
			}
		}
	});

	// Product Detail Slider Thumbnail
	var productSliderPager = new Swiper('.pd-slider-thumbnail', {
		loop: false,
		spaceBetween: 30,
		slidesPerView: 3,
		click:0,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		// simulateTouch: false,
		grabCursor: true,
		preventClicks: true,
		allowTouchMove: false,
		// slideToClickedSlide: true,
		speed: 0,
		navigation: {
			disabledClass: '.hidden',
		},
		breakpoints: {
			480: {
				// slidesPerView: 1,
				// spaceBetween: 20
			},
			767: {
				// slidesPerView: 2,
				// spaceBetween: 20
			},
			991: {
				// slidesPerView: 3,
				// spaceBetween: 20
			},
			1229: {
				// slidesPerView: 3
			}
		}
	});

	/* Product Detail Slider */
	var swiper = new Swiper('.product-detail-slider', {
		loop: true,
		// slidesPerView: 1,
		speed: 300,
		click:0,
		spaceBetween: 30,
		grabCursor: true,
		setWrapperSize: true,
		autoHeight: true,
		// preventClicks: false,
		slideToClickedSlide: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: productSliderPager,
			slideThumbActiveClass: 'actived',
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			// el: '',
			// bulletClass: 'pager-item',
			// bulletActiveClass: 'active',
			// bulletElement: 'div',
			// clickable: true
		},
		navigation: {
			prevEl: '.product-detail-slider .pd-slider-left',
			nextEl: '.product-detail-slider .pd-slider-right',
		},
		on: {
			slideChangeTransitionStart: function () {
				//var slideItem = ".slide-item";
				//$(slideItem).find(".slide-item-title").removeClass("animateTitleIn");
			},
			slideChangeTransitionEnd: function () {
				//$(slideItem).find(".slide-item-title").addClass("animateTitleIn");
			},
		},
		breakpoints: {
			480: {
				// slidesPerView: 1,
			},
			767: {
				// slidesPerView: 2,
			},
			991: {
				// slidesPerView: 2,
			},
			1229: {
				// slidesPerView: 3
			}
		}
	});


});