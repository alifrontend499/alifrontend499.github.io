// // HEADER FIX
$(window).on("onreadystatechange contentLoaded scroll", function () {
    var app_headHeight = $('header').innerHeight();

    (function () {
        // PADDING AND MARGIN CLASSES
        $('.header-like-margin-top').css({
            marginTop: app_headHeight
        })
        $('.header-like-padding-top').css({
            paddingTop: app_headHeight
        })

        // HEADER FIXED
        if ($(this).scrollTop() > app_headHeight) {
            $('header').addClass('active');

        } else {
            $('header').removeClass('active');
        }
    })();
})

$(function () {
    (function () {
        // OPEN HEADER MENU
        $('.open-header-drop-hidden-menu').click(function (ev) {
            ev.preventDefault()
            $('.st-menu-container').fadeOut(100, function () {
                $('.drop-hidden-menu').slideDown(300)
                $('.header-drop-menu').addClass('active')
            })
        })
        $('.close-header-drop-hidden-menu').click(function (ev) {
            ev.preventDefault()
            $('.drop-hidden-menu').slideUp(300, function () {
                $('.st-menu-container').fadeIn(100)
                $('.header-drop-menu').removeClass('active')
            })
        })

        // HEADER HIDINIG
        var interval
        var intervalTime = 1000
        if ($(window).width() >= 1200 && !$('header').is(':hover')) {
            interval = setInterval(() => {
                $('header > .header-inner').addClass('slide-up')
                $('.drop-hidden-menu').slideUp(300, function () {
                    $('.st-menu-container').fadeIn(100)
                    $('.header-drop-menu').removeClass('active')
                })
            }, intervalTime)
        }
        $('header').hover(function () {
            clearInterval(interval)
            $('>.header-inner', this).removeClass('slide-up')
        }, function () {
            interval = setInterval(() => {
                $('header > .header-inner').addClass('slide-up')
                $('.drop-hidden-menu').slideUp(300, function () {
                    $('.st-menu-container').fadeIn(100)
                    $('.header-drop-menu').removeClass('active')
                })
            }, intervalTime)
        })
    })();

    // sliders
    (function () {
        $('#programmes-slider').owlCarousel({
            autoHeight: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false,

            dots: false,
            nav: true,
            navElement: 'span',
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],

            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            autoplaySpeed: 2000,
            navSpeed: 2000,

            responsive: {
                0: {
                    items: 1,
                },
                992: {
                    items: 2,
                    margin: 40,
                },
            }
        });
    })();

    // sliders
    (function () {
        $('.multi-video-sec .video-list-container .item').click(function (ev) {
            ev.preventDefault()
            var dataLink = $(this).data('link')
            $('.multi-video-sec .video-container iframe').attr('src', dataLink)
            $(this).addClass('active').siblings().removeClass('active')

            if ($(window).width() < 768) {
                $('html, body').animate({
                    scrollTop: $('.multi-video-sec .video-container').offset().top - $('header').innerHeight()
                }, 'slow')
            }
        })
    })();

});

$(window).scroll(function () {
    $('img').each(function () {
        if ($(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height()) + 50) {
            var dataAttr = $(this).data('src');
            $(this).attr('src', dataAttr);
            $(this).removeAttr('data-src');
        }
    });
});