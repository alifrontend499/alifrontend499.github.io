$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000
    });
    // PARTNERS SLIDER
    $('#partners-slider').owlCarousel({
        items: 7,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 4,
            },
            1200: {
                items: 6,
            },
            1400: {
                items: 7,
            }
        }
    });
    // COMPANIES SLIDER
    $('#companies-slider').owlCarousel({
        items: 6,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    });

    (function () {
        $('.open-BP-modal').click(function (ev) {
            ev.preventDefault();
            var modal = $(this).data('modal');
            $('.modal').modal('hide');
            setTimeout(function() {
                $(modal).modal('show');
            }, 150)
        });
    })();

    // OPEN MOBILE MENU
    (function() {
        $('.mob-menu-btn > a').click(function(ev) {
            ev.preventDefault();
            $(this).toggleClass('active').find('.fas').toggleClass('fa-times fa-bars');
            $('.head_main .menu').toggleClass('active');
            $('.menu .mob-menu-overlay').fadeToggle(100);
        });
        $('.menu .mob-menu-overlay').click(function(ev) {
            ev.preventDefault();
            $('.mob-menu-btn > a').removeClass('active').find('.fas').removeClass('fa-times').addClass('fa-bars');
            $('.head_main .menu').removeClass('active');
            $('.menu .mob-menu-overlay').fadeOut(100);
        });
    })();
    
    // OPEN MOBILE FILTER PRODUCTS
    (function() {
        $('.mob-filter-btn > a').click(function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            $(this).toggleClass('active');
            $('.ST_products .right-content').toggleClass('active');
            $('.ST_products .leftbar').fadeToggle(300);
        });
        $('.ST_products .right-content').click(function(ev) {
            ev.preventDefault();
            $('.mob-filter-btn > a').removeClass('active');
            $(this).removeClass('active');
            $('.ST_products .leftbar').fadeOut(300);
        });
    })();
});