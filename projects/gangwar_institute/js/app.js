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

// SLIDER
(function () {
    $(function () {
        // ALL CONTENT SLIDER
        $('#all-content-slider').owlCarousel({
            items: 5,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000,
            responsive: {
                0: {
                    items: 5
                },
                1000: {
                    items: 8
                }
            }
        });
        // ALL CONTENT SLIDER
        $('#online-test-slider').owlCarousel({
            items: 5,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000,
            responsive: {
                0: {
                    items: 5
                },
                1000: {
                    items: 8
                }
            }
        });
        // ALL CONTENT SLIDER
        $('#video-solutions-slider').owlCarousel({
            items: 2,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
            stagePadding: 15,
            rewind: true
        });
        // STUDY-MATERIAL-SLIDER
        $('#study-material-slider').owlCarousel({
            items: 2,
            margin: 8,
            nav: false,
            autoplay: true,
            autoplayTimeout: 1900,
            autoplaySpeed: 1000,
            stagePadding: 15,
            rewind: true
        });
        $('#study-material-slider2').owlCarousel({
            items: 2,
            margin: 8,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2300,
            autoplaySpeed: 1000,
            stagePadding: 15,
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
};

(function () {
    // FOR RADIO
    $('.sel-ans label.radio > input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active').siblings().removeClass('active');
        }
    });
    // FOR CHECKBOXES
    $('.sel-ans label.checkbox > input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
})();

(function () {
    $('.app-open-menu a').click(function () {
        var elem = $(this).data('open');
        $(this).toggleClass('active').find('i').text(($('i', this).text() == 'keyboard_arrow_right') ? 'keyboard_arrow_left' : 'keyboard_arrow_right');

        $('#test-info-sidebar').toggleClass('active');
    });
})();

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