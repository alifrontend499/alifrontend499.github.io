// JavaScript Document
$(document).ready(function () {
	$('.main-nav > li:has(> ul)').addClass("submenu");
	$(".video-btn, .close-video, .bg-video").click(function () {
		$("body").toggleClass("video-open");
	});
	$('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");
	$(".close-video").click(function () {

		var video = "";
		$("#mobbhhc_tv_video").attr("src", video);

		$('.youtube-iframe').each(function (index) {
			$(this).attr('src', $(this).attr('src'));
			return false;
		});
	});
	$(".bg-video").click(function () {

		var video = "";
		$("#mobbhhc_tv_video").attr("src", video);
		$('.youtube-iframe').each(function (index) {
			$(this).attr('src', $(this).attr('src'));
			return false;
		});
	});




	$('.slider').owlCarousel({
		loop: true,
		margin: 0,
		responsiveClass: true,
		items: 1,
		autoplay: true,
		autoHeight: true,
		responsive: {
			0: {
				nav: false
			},
			600: {
				nav: true
			},
			1000: {
				nav: true,
			}
		}
	});

	$('.tasti-home').owlCarousel({
		loop: true,
		margin: 30,
		responsiveClass: true,
		autoplay: true,
		autoHeight: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			800: {
				items: 2,
				nav: true
			}
		}
	});

	$('.we-are-team-slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoHeight: true
	});

	$(".faq-list li h4").click(function (e) {
		$(this).siblings("p").slideToggle();
		$(this).parent().toggleClass("active");
	});

	if ($(window).width() < 1025) {
		$(".submenu > a").click(function (e) {
			e.preventDefault();
			$(this).parent().find("ul").slideToggle();
		});

		$(".mobile-btn, .mobile-close, .srch-btn").click(function () {
			$("body").toggleClass("mobile-menu");
		});
	}

	$(".srch-btn, .close-search").click(function (e) {
		e.preventDefault();
		$('body').toggleClass("show-search");
	});

	$(window).scroll(function () {
		if ($(window).width() > 1024) {
			var sticky = $('.top-wrap'),
				scroll = $(window).scrollTop();

			if (scroll >= 50) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
		}
	});

	$(window).resize(function () {
		$("body").css("padding-top", $('.top-wrap').height());
	}).resize();

	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

	$(".rateyo").rateYo({
		starWidth: "20px",
	});

});
$(document).ready(function () {
	$(".fancybox-thumb").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		helpers: {
			title: {
				type: 'inside'
			},
			thumbs: {
				width: 50,
				height: 75
			}
		}
	});
});


/*google map*/

function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		/* center: {lat: 43.7874830, lng: -79.47793},*/
		center: { lat: 43.788252, lng: -79.477079 },
		scrollwheel: false
	});


	https://www.google.com/maps/place/MOBB+HHC/@43.7883141,-79.4780822,18z/data=!4m12!1m6!3m5!1s0x882b2e71272addc7:0x48c26e6efb7cc692!2sMOBB+HHC!8m2!3d43.7881979!4d-79.4770629!3m4!1s0x882b2e71272addc7:0x48c26e6efb7cc692!8m2!3d43.7881979!4d-79.4770629

	var contentString = '<div id="mapcontent"><h3>MOBB Home Healthcare</h3><p>116A Viceroy Rd. Unit 5-7 Concord, Ontario L4K 2M1 – CANADA<p class="view-map"><a href="https://www.google.ca/maps/dir//MOBB+HHC,+116A+Viceroy+Rd+Unit+7,+Concord,+ON+L4K+2M1/@43.7886442,-79.4768863,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b2e71272addc7:0x48c26e6efb7cc692!2m2!1d-79.4770629!2d43.7881979" target="_blank"><img src="inc/img/googleDirection.png" alt="Google Direction of MOBB HHC"/></a></p> &nbsp; <p class="view-map"><a href="https://www.google.ca/maps/dir//MOBB+HHC,+116A+Viceroy+Rd+Unit+5-7,+Concord,+ON+L4K+2M1/@43.7886442,-79.4768863,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b2e71272addc7:0x48c26e6efb7cc692!2m2!1d-79.4770629!2d43.7881979" target="_blank"><img src="inc/img/GoogleMapSave.png" alt="Save MOBB HHC place onto your Google map MOBB HHC"/></a></p> </p><p class="view-map"><a href="https://www.google.ca/maps/place/MOBB+HHC/@43.7886442,-79.4768863,17.5z/data=!4m5!3m4!1s0x0:0x48c26e6efb7cc692!8m2!3d43.7881979!4d-79.4770629" target="_blank"> <u><strong>View Large Map</strong></u></a></p></div>';




	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: map.getCenter(),
		icon: 'https://mobbhhc.com/pin.png',
		map: map
	});
	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});

}

