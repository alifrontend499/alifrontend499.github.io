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
        smartSpeed: 700,
        autoplayTimeout: 3000,
    });

    // CATEGORY SLIDER
    $('#category-slider').owlCarousel({
        items: 6,
        // loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
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

    // RELATED PRODUCTS SLIDER
    $('#related-products-slider').owlCarousel({
        items: 6,
        // loop: true,
        nav: true,
        navText: ['<i class="feather-chevron-left"></i>', '<i class="feather-chevron-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
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
                items: 5,
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
        smartSpeed: 700,
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

    // HOME FOUR BLOCKS SLIDER
    $('#home-four-blocks-slider').owlCarousel({
        items: 4,
        // loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 700,
        autoplayTimeout: 2700,
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
                items: 4,
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
        smartSpeed: 700,
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
        dots: false,
        autoplayHoverPause: true,
        smartSpeed: 700,
        margin: 5,
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 3,
            }
        }
    });


    // ST-DYNAMIC-TABS
    (function () {
        var navCount = 0;
        var tabContentCount = 0;
        $('.st-dynamic-tabs > li').each(function () {
            $('>a', this).attr('id', 'aria-tab-' + navCount);
            $('>a', this).attr('href', '#href-' + navCount);
            $('>a', this).attr('aria-controls', 'href-' + navCount);
            navCount += 1;
        });
        $('.st-dynamic-tabs + .tab-content > .tab-pane, .st-dynamic-tabs-content > .tab-pane').each(function () {
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

    // QUANTITY INCREASE DECREASE CONTROLS
    (function () {
        $('.quantity-select-controls > button').click(function (ev) {
            ev.preventDefault();
            var currentVal = parseInt($(this).parent().find('>input').val())
            if ($(this).hasClass('plus')) {
                if (currentVal >= 1) {
                    $(this).parent().find('>input').val(currentVal + 1)
                } else {
                    return false
                }
            } else {
                if (currentVal > 1) {
                    $(this).parent().find('>input').val(currentVal - 1)
                } else {
                    return false
                }
            }
        });
    })();

    // OTP OR PASSWORD FOR AUTH FORM
    (function () {
        $('.btns.open-otp-field > .btn').click(function (ev) {
            ev.preventDefault()
            if ($('.login-password-field').hasClass('d-none')) {
                $(this).text('use OTP')
                $('.login-otp-field').addClass('d-none')
                $('.login-password-field').removeClass('d-none')

                $('.get-otp-btn').addClass('d-none')
            } else if ($('.login-otp-field').hasClass('d-none')) {
                $(this).text('use password')
                $('.login-password-field').addClass('d-none')
                $('.login-otp-field').removeClass('d-none')

                $('.get-otp-btn').removeClass('d-none')
            }
        });
    })();

    // UPLOAD PRESCRIPTION INPUT
    (function () {
        $('.upload-prescription-input > input').change(function (ev) {
            const selectedFileName = ev.target.files[0].name
            $(this).parent().find('.show-file-name').removeClass('d-none').text(selectedFileName.toString())
        });
    })();


});