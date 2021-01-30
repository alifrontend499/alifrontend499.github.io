$(function () {
    // OPEN MOBILE MENU
    (function () {
        $('.mob-menu-btn > a').click(function (ev) {
            ev.preventDefault();
            $(this).toggleClass('active').find('.icon').toggleClass('feather-x feather-menu');
            $('header .menu').toggleClass('active');
            $('.menu .mob-menu-overlay').fadeToggle(100);
        });
        $('.menu .mob-menu-overlay').click(function (ev) {
            ev.preventDefault();
            $('.mob-menu-btn > a').removeClass('active').find('.icon').removeClass('feather-x').addClass('feather-menu');
            $('header .menu').removeClass('active');
            $('.menu .mob-menu-overlay').fadeOut(100);
        });
    })();
});

// HOME MAIN SECTION ANIMATION
$(window).on("load", function () {
    $('#home-main-sec').addClass('active')
});

// // HEADER FIX
$(window).on("onreadystatechange contentLoaded load scroll", function () {
    var app_headHeight = $('header').innerHeight();

    (function () {
        // PADDING AND MARGIN CLASSES
        // $('.header-like-margin-top').css({
        //     marginTop: app_headHeight
        // });
        // $('.header-like-padding-top').css({
        //     paddingTop: app_headHeight
        // });

        // HEADER FIXED
        if ($(this).scrollTop() > app_headHeight) {
            $('header').addClass('active');

        } else {
            $('header').removeClass('active');
        }
    })();
});

// DETECT SECTION SCROLL
$(window).scroll(function () {
    $('[data-scroll-detection]').each(function () {
        if ($(this).attr('data-scroll-detection') && $(this).offset().top < ($(window).scrollTop() + $(window).height())) {
            var dataAttr = $(this).data('scroll-detection');
            $(this).addClass(dataAttr)
        }
    });
});

// COUNTER
var isCounted = false
$(window).scroll(function () {
    if ($('.our-details').offset().top < ($(window).scrollTop() + $(window).height())) {
        if (!isCounted) {
            runCountAnimations && runCountAnimations();
            isCounted = true
        }
    }
});