// MATERIALIZE
(function () {
    // SIDENAV
    (function () {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    })();
})();
$(function () {
    // APP HEAD SEARCH
    (function () {
        $('.app-head-search > a').click(function (ev) {
            ev.preventDefault();
            $(this).next().addClass('active').find('input').focus();
        });
        $('.app-head-search > a,.app-head-search .search').click(function (ev) {
            ev.stopPropagation();
        });
        // CLOSING SEARCH
        $(document).click(function () {
            $('.app-head-search .search').removeClass('active');
        });
    })();

    // APP APP MORE MENU
    (function () {
        $('.app-more-menu > a').click(function (ev) {
            ev.preventDefault();
            $(this).parent().toggleClass('active');
        });
        $('.app-more-menu > a, .app-more-menu > ul').click(function (ev) {
            ev.stopPropagation();
        });
        // CLOSING more menu
        $(document).click(function () {
            $('.app-more-menu').removeClass('active');
        });
    })();
});

// SLIDER
(function () {
    $(function () {
        // BIONEET VIDEOS SLIDER
        $('#home_top_slider').owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000,
        });
        // BIONEET VIDEOS SLIDER
        $('#HSV_slider').owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: false,
            stagePadding: 70,
            margin: 15,
        });
        // ALL OTHER APPS
        $('#HOA_slider').owlCarousel({
            items: 4,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            rewind: true
        });
        // COURCES-LIST-SLIDER
        $('#HDOTD_slider').owlCarousel({
            items: 2,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 1900,
            autoplaySpeed: 1000,
            stagePadding: 40,
            margin: 15,
            rewind: true
        });
    });
})();

// HEADER FIX
(function () {
    $(window).on("load scroll", function () {
        // HOMEPAGE
        (function () {
            var app_headHeight = $('header').innerHeight();
            var app_bbHeight = $('.backBar').innerHeight();
            // HEADER FIXED
            if ($(this).scrollTop() > app_headHeight) {
                $('.app-head-top').addClass('fixed');
            } else {
                $('.app-head-top').removeClass('fixed');
            }

            // BACKBTN FIXED
            if ($(this).scrollTop() > app_bbHeight) {
                $('.backBar:not(.contact) > .BB_top').addClass('fixed');
            } else {
                $('.backBar:not(.contact) > .BB_top').removeClass('fixed');
            }
        })();
    });
})();

(function () {
    $(function () {
        // BOTTOM BAR MENU
        if ($('body').find('.bottom-menu-bar').length) {
            $('body').addClass('hasBMB');
        } else {
            $('body').removeClass('hasBMB');
        };
        // MODAL
        $('.modal').modal();
    });
})();
// GO BACK
function goBack() {
    window.history.back();
}
(function () {
    $(function () {
        $('.history-go-back').click(function (ev) {
            ev.preventDefault();
            window.history.back();
        });
    });
}());

(function () {
    $('.sel-ans label > input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active')
        }
    });
})();

(function () {
    setInterval(function () {
        // console.log('object')
        if ($('.blink-bulb-img > img.on').hasClass('d-none')) {
            $('.blink-bulb-img > img').removeClass('d-none').next().addClass('d-none')
        } else {
            $('.blink-bulb-img > img').removeClass('d-none').prev().addClass('d-none')
        }
    }, 1000);
})();

(function () {
    $('.edit-profile-button').click(function (ev) {
        ev.preventDefault()
        if ($('i', this).hasClass('feather-check')) {
            $(this).removeClass("app-gradient-green")
            $('i', this).removeClass('feather-check').addClass('feather-edit-2')
            $('.prof-edit-content .frac-inner > .text').addClass('d-none')
            $('.prof-edit-content .input').addClass('non-editable')
            $('.prof-edit-content .input > input').blur()
            $('.frac.confirm-password').addClass('d-none')

        } else {
            $(this).addClass("app-gradient-green")
            $('i', this).removeClass('feather-edit-2').addClass('feather-check')
            $('.prof-edit-content .frac-inner > .text').removeClass('d-none')
            $('.prof-edit-content .input').removeClass('non-editable')
            $('.frac.confirm-password').removeClass('d-none')

            $('html, body').animate({
                scrollTop: $('.prof-edit .app-head-w-view> .head').offset().top - (56 + 10)
            }, 500, function () {
                $('.prof-edit-content .input > input[tabindex="1"]').focus()
            })
        }
    })
})();

(function () {
    $('.app-open-menu a').click(function () {
        $('#test-info-sidebar').prepend('<div class="overlay"></div>');
        $(this).addClass('active')
        $('#test-info-sidebar').addClass('active');
    });
    $(document).on('click', '#test-info-sidebar >.overlay', function () {
        $(this).fadeOut(200)
        $('.app-open-menu a').removeClass('active')
        $('#test-info-sidebar').removeClass('active');
    });
})();

(function () {
    $('.A-ques .open-answer').click(function (ev) {
        ev.preventDefault();
        $('>i', this).toggleClass('feather-chevron-up feather-chevron-down')
        $(this).closest('.ques').next().slideToggle(100, function () {
            $(this).parent().toggleClass('in')
        });
    });
})();