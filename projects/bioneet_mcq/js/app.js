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
        // CLOSING SEARCH
        $(document).click(function () {
            $('.app-more-menu').removeClass('active');
        });
    })();
});

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

(function () {
    $('.app-open-menu a').click(function () {
        var elem = $(this).data('open');
        $(this).toggleClass('active').find('i').text(($('i', this).text() == 'keyboard_arrow_right') ? 'keyboard_arrow_left' : 'keyboard_arrow_right');

        $('#test-info-sidebar').toggleClass('active');
    });
})();