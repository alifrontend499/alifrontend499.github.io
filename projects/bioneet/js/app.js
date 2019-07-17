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
        // SUGGESTED VIDEOS SLIDER
        $('#HSV_slider').owlCarousel({
            items: 2,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000,
            stagePadding: 30,
            margin: 15,
            responsive: {
                0: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });
        // ALL OTHER APPS
        $('#HOA_slider').owlCarousel({
            items: 5,
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
            stagePadding: 50,
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
                $('.backBar >.BB_top').addClass('fixed');
            } else {
                $('.backBar>.BB_top').removeClass('fixed');
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
        // FANCYBOX
        $('[data-fancybox]').fancybox({
            animationEffect: "zoom-in-out"
        });
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
    $('.A-ques .open-answer').click(function (ev) {
        ev.preventDefault();
        ($('.material-icons', this).text() === 'keyboard_arrow_up') ?
            $('.material-icons', this).text('keyboard_arrow_down') : $('.material-icons', this).text('keyboard_arrow_up');
        $(this).closest('.ques').next().slideToggle(100, function () {
            $(this).parent().toggleClass('in')
        });
    });
})();

(function () {
    $('.sel-ans label > input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active')
        }
    });
})();