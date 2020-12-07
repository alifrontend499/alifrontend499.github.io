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
});