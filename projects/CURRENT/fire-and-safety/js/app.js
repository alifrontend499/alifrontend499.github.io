$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        // navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        autoplayTimeout: 4000,
    });

    // TESTIMONIAL SLIDER
    var owl = $('#testimonial-slider').owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        center: true,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
        }
    });

    $('.owl-dot').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


});