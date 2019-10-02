$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000
    });

    // PARTNERS SLIDER
    $('#speciality-slider').owlCarousel({
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 200000,
        nav: true,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', ' <i class="material-icons">keyboard_arrow_right</i>'],
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 4,
            }
        }
    });

    (function () {
        $('.open-BP-modal').click(function (ev) {
            ev.preventDefault();
            var modal = $(this).data('modal');
            $('.modal').modal('hide');
            setTimeout(function () {
                $(modal).modal('show');
            }, 150)
        });
    })();

    // OPEN MOBILE MENU
    (function () {
        $('.mob-menu-btn > a').click(function (ev) {
            ev.preventDefault();
            $(this).toggleClass('active').find('.fas').toggleClass('fa-times fa-bars');
            $('.head_main .menu').toggleClass('active');
            $('.menu .mob-menu-overlay').fadeToggle(100);
        });
        $('.menu .mob-menu-overlay').click(function (ev) {
            ev.preventDefault();
            $('.mob-menu-btn > a').removeClass('active').find('.fas').removeClass('fa-times').addClass('fa-bars');
            $('.head_main .menu').removeClass('active');
            $('.menu .mob-menu-overlay').fadeOut(100);
        });
    })();
});