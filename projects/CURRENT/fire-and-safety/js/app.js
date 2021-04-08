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
        smartSpeed: 700,
        autoplayTimeout: 3000,
    });

    // TESTIMONIAL SLIDER
    var owl = $('#testimonial-slider').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        nav: false,
        // navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        autoplay: false,
        smartSpeed: 700,
    });

    $('.owl-dot').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


});