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

    // go to link
    $('.go-to-link').click(function (ev) {
        ev.preventDefault()
        var headerHeight = $('header').innerHeight()
        var attr = $(this).attr('href')
        if (typeof attr !== 'undefined') {
            $('.st-head-menu > li > a').removeClass('active')
            $(this).addClass('active')
            $('html, body').animate({
                scrollTop: $(attr).offset().top - (headerHeight + 30)
            }, 700, function () {
                $('.mob-menu-btn > a.active').trigger('click')
            })
        }
    })
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