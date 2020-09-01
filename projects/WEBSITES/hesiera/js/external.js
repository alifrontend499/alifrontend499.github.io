$(document).ready(function () {

    $("#slider").owlCarousel({
        items: 1,
        nav: false, // Show next and prev buttons
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        navSpeed: 300,
        dotsSpeed: 400,
        animateIn: "fade-in",
        mouseDrag: false,
        touchDrag: false

    });

    $('#mobileToggle').click(function () {
        $('.header-nav-col .menu').addClass('active');
    });

    $('.menuClose').click(function () {
        $('.header-nav-col .menu').removeClass('active');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('#header').addClass('fixedHeader');
        } else {
            $('#header').removeClass('fixedHeader');
        }
    });



});


// CUSTOM CSS
(function () {
    // TEAM SLIDER
    $('#team-slider').owlCarousel({
        center: true,
        items: 3,
        dots: false,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
})();