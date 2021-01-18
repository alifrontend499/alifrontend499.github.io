$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        autoplayTimeout: 3000,
    });

    // CATEGORY SLIDER
    $('#category-slider').owlCarousel({
        items: 6,
        // loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        autoplayTimeout: 3200,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 6,
            },
        }
    });

    // OUR PRODUCTS SLIDER
    $('#our-products-slider').owlCarousel({
        items: 6,
        // loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        autoplayTimeout: 2800,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 6,
            },
        }
    });

    // HEALTH EXPERTS SLIDER
    $('#health-experts-slider').owlCarousel({
        items: 3,
        // loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        autoplayTimeout: 3400,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                margin: 20,
            },
            1200: {
                margin: 50,
            },
        }
    });

    // PRODUCT DETAILS THUMBNAIL SLIDER
    $('#product-details-thumbnail-slider').owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        autoplayTimeout: 2500,
        margin: 5,
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


    // ST-DYNAMIC-TABS
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

    // OPEN TABS
    (function () {
        $('[data-open-tab]').click(function (ev) {
            ev.preventDefault();
            $('#' + $(this).attr('data-open-tab')).trigger('click');
        });
    })();


});