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
            margin: 8,
            nav: true,
        })
    })();
});