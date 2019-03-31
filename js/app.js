$(function () {
    // HOMEPAGE SLIDER
    $('#homepageslider').owlCarousel({
        items: 1,
        nav: false,
        // dots: false,
        autoPlay: true,
        autoplaySpeed: 500,
        // smartSpeed: 1000,
        mouseDrag: false,
        touchDrag: false,
    });

    // HOMEPAGE SLIDER
    $('#gallery-carousel').owlCarousel({
        items: 3,
        // loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoPlay: true,
        autoPlayTimeout: 1000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // HEADER MARGIN PADDING CLASSES
    (function () {
        var headHeight = $('header').innerHeight();
        $('.head-marg').css({
            marginTop: headHeight
        });
        $('.head-padd').css({
            paddingTop: headHeight
        });
    })();

    // LOGIN SIGNUP MODALS
    (function () {
        $('.open-sign-in-modal').click(function (ev) {
            ev.preventDefault();
            $('.modal').modal("hide");
            $('#signin_modal').modal("show");
        });
        $('.open-sign-up-modal').click(function (ev) {
            ev.preventDefault();
            $('.modal').modal("hide");
            $('#signup_modal').modal("show");
        });
        $('.open-forgot-password-modal').click(function (ev) {
            ev.preventDefault();
            $('.modal').modal("hide");
            $('#forgot-password_modal').modal("show");
        });
    })();

    // FANCYBOX
    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: 'zoom-in-out'
    });
});

// HEADER SETTING
(function () {
    $(window).on('load scroll', function () {
        var headHeight = $('header').innerHeight();
        var headTopHeight = $('#HD_TP').innerHeight();
        if ($(this).scrollTop() > headHeight) {
            $('header').addClass('fixed');
            $('#HD_TP').css({
                marginTop: -headTopHeight
            });
        } else {
            $('header').removeClass('fixed');
            $('#HD_TP').css({
                marginTop: 0
            });
        }
    });
})();

