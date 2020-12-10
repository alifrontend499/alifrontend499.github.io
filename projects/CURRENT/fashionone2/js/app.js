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

$(function () {

    // SHOW MORE LESS CONTAINER
    (function () {
        $('.show-more-container > .show-more-less').text('show more')
        $('.show-more-container > .show-more-less').click(function (ev) {
            ev.preventDefault()
            $(this).prev().toggleClass('less-content')
            $(this).toggleClass('active')
            $(this).text($(this).text().trim().toLowerCase() === 'show more' ? 'show less' : 'show more')
        })
    })();

    // ALL SLIDERS
    (function () {
        // RECENT VIDEO SLIDER
        $('#recent-videos-slider').owlCarousel({
            // loop: true,
            margin: 8,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 5,
                }
            }
        })

        // HOMEPAGE SLIDER
        $('#home-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 5,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 2000,
        })

        // HEADLINE SLIDER
        $('#headline-slider').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
        })

        // RECENT VIDEO SLIDER
        $('#brand-zone-slider').owlCarousel({
            loop: true,
            items: 5,
            margin: 8,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5,
                }
            },
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
        })

        // ORIGINAL SERIES AND SPECIALS SLIDER
        $('#original-series-and-specials-slider').owlCarousel({
            items: 3,
            loop: true,
            center: true,
            margin: 5,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            autoplay: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 1200,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            autoHeight: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            },
        })

        // ST TEXT SLIDER
        $('.st-text-slider').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            // smartSpeed: 1500,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            animateIn: "animate__backInDown",
            animateOut: "animate__fadeOut",
        })
    })();

    // DYNAMIC TABS
    (function () {
        var navCount = 0;
        var tabContentCount = 0;
        $('.st-dynamic-tabs > li').each(function () {
            // console.log(navCount);
            $('>a', this).attr('id', 'aria-tab-' + navCount);
            $('>a', this).attr('href', '#href-' + navCount);
            $('>a', this).attr('aria-controls', 'href-' + navCount);
            navCount += 1;
        });
        $('.st-dynamic-tabs + .tab-content > .tab-pane').each(function () {
            // console.log(tabContentCount);
            $(this).attr('aria-labelledby', 'aria-tab-' + tabContentCount)
            $(this).attr('id', 'href-' + tabContentCount)
            tabContentCount += 1;
        });
    })();

    // WEEK TABS
    (function () {
        $('.week-tabs-container .week-day-name').click(function (ev) {
            ev.preventDefault()
            $(this).addClass('active').parent().siblings().find('a').removeClass('active')
        });
    })();

    // SLIDE TO SECTION
    (function () {
        $('.slide-to-section').click(function (ev) {
            ev.preventDefault()
            const moveTo = $(this).data('href')
            const excludeSection = $(this).data('moveto-block-target')
            if (moveTo) {
                const ele = $(moveTo)
                var finalMovment = (excludeSection && $(excludeSection).length) ? ele.offset().top - ($(excludeSection).innerHeight() + 10) : ele.offset().top
                if (ele.length) {
                    $('html, body').animate({
                        scrollTop: finalMovment
                    }, 1000)
                }
            }
        });
    })();
});