$(window).on('load scroll', function () {
    // const headerHeight = $('header').innerHeight()
    // console.log(headerHeight);

    // $('.header-like-margin-top').css('margin-top', headerHeight)
    // $('.header-like-padding-top').css('padding-top', headerHeight)

    // HEADER FIXED
    (function () {
        const headerTopHeight = $('#header-top').innerHeight()
        if ($(this).scrollTop() > 50) {
            $('header').addClass('fixed');
            // moving header top section
            $('#header-top').css('margin-top', -(headerTopHeight + 1))
        } else {
            $('header').removeClass('fixed');
            // moving header top section back to normal
            $('#header-top').css('margin-top', 0)
        }
    })();
});

$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        // loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        autoplayTimeout: 3000,
    });

    // TESTIMONIAL SLIDER
    $('#testimonial-slider').owlCarousel({
        items: 3,
        // loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        autoplayTimeout: 3400,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });


    (function () {
        $('.slide-to-link').click(function (ev) {
            ev.preventDefault()
            const link = $(this).attr('data-href')
            if (link) {
                $('.slide-to-link').removeClass('active')
                $(this).addClass('active')
                const scrollTo = $(link).offset().top
                // console.log(scrollTo)
                $('html,body').animate({
                    scrollTop: scrollTo - 15
                }, 800)
            }
        })
    })();

    // GALLERY
    (function () {
        $('.our-gallery-content [data-open-gallery]').click(function (ev) {
            ev.preventDefault()
            const galleryNameToBeOpened = $(this).attr('data-open-gallery')

            // enabling gallery item
            $(this).addClass('active').siblings().removeClass('active')
            $('.our-gallery-content .gallery-item').removeClass('active')
            $('.our-gallery-content .gallery-item[data-parent="' + galleryNameToBeOpened + '"]').addClass('active')
        })
    })();
});