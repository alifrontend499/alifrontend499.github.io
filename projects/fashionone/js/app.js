// // HEADER FIX
$(window).on("onreadystatechange contentLoaded load scroll", function () {
    var app_headHeight = $('header').innerHeight()

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
        var intervalTime = 3000
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
            console.log("gofh")
            clearInterval(interval)
            $('>.header-inner', this).removeClass('slide-up')
        }, function () {
            console.log("nothovers")
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

});