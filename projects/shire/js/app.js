$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: $('#home-slider').attr('data-autoplayTimeout') ? $('#home-slider').attr('data-autoplayTimeout') : "3000",
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        touchDrag: false,
        mouseDrag: false,
        loop: true
    });
    // OUR TEAM SLIDER
    $('#our-team-slider').owlCarousel({
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                margin: 10,
                items: 2,
            },
            768: {
                margin: 30,
                items: 3,
            }
        }
    });

    // BRANDS SLIDER
    $('#brands-slider').owlCarousel({
        items: 5,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2,
                margin: 15,
            },
            576: {
                margin: 15,
                items: 3,
            },
            768: {
                margin: 15,
                items: 4
            },
            992: {
                margin: 30,
                items: 5
            },
        }
    });

    // NEWS AND EVENTS SLIDER
    $('#news-and-events-slider').owlCarousel({
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                margin: 10,
                items: 2,
            },
            992 : {
                margin: 15,
                items: 3,
            },
            1200 : {
                margin: 30,
                items: 3,
            }
        }
    });

    // HEADER FIX
    (function () {
        $(window).on("load scroll", function () {
            // HOMEPAGE
            (function () {
                // HEADER FIXED
                if ($(this).scrollTop() > 100) {
                    $('header').addClass('fixed');
                } else {
                    $('header').removeClass('fixed');
                }
            })();
        });
    })();

    // DYNAMIC TABS
    (function () {
        var countItem = 1
        var countTab = 1
        $('.st-tabs-dy > .nav-tabs > .nav-item').each(function () {
            $('>a', this).attr('id', 'tab-item-' + countItem)
            $('>a', this).attr('href', '#tab-count-' + countItem)
            $('>a', this).attr('aria-controls', 'tab-count-' + countItem)
            countItem++
        })
        $('.st-tabs-dy > .tab-content > .tab-pane').each(function () {
            $(this).attr('id', 'tab-count-' + countTab)
            $(this).attr('aria-labelledby', 'tab-item-' + countTab)
            countTab++
        })
    })();

    // SLIDING THROUGH PAGES
    (function () {
        const currentPart = window.location.hash
        if (typeof currentPart !== 'undefined' && currentPart.length) {
            $('html, body').animate({
                scrollTop: $(currentPart).offset().top
            }, 700)
            $('[href="' + currentPart + '"]').parent().addClass('active').siblings().removeClass("active")
        }

        $('.st-head-menu > li > a,.go-to-link').click(function (ev) {
            var headerHeight = $('header').innerHeight()
            var scrollPos = $(window).scrollTop();
            $('#footer .footer-top .item.fourth > .inner > .head').removeClass('animate__headShake')
            // ev.preventDefault()
            var attr = $(this).attr('href')
            if (typeof attr !== 'undefined') {
                if (scrollPos > 70) {
                    $('html, body').animate({
                        scrollTop: $(attr).offset().top - (headerHeight + 10)
                    }, 700)
                    // $(this).parent().addClass('active').siblings().removeClass("active")
                } else {
                    $('html, body').animate({
                        scrollTop: $(attr).offset().top - (70 + 10)
                    }, 700, function () {
                        $('#footer .footer-top .item.fourth > .inner > .head').addClass('animate__headShake')
                    })
                    // $(this).parent().addClass('active').siblings().removeClass("active")
                }
            }

            $('.mob-menu-btn > a').removeClass('active').find('.fas').removeClass('fa-times').addClass('fa-bars');
            $('.head_main .menu').removeClass('active');
            $('.menu .mob-menu-overlay').fadeOut(100);
        })

        $(window).scroll(function () {
            var scrollPos = $(window).scrollTop();
            var headerHeight = $('header').innerHeight()
            $('#wrapper > section').each(function () {
                var topPos = $(this).offset().top;
                if (scrollPos > 100) {
                    if (scrollPos >= (topPos - (headerHeight + 40))) {
                        var id = $(this).attr('id')
                        // console.log(id)
                        $('a[href="#' + id + '"]').parent().addClass('active').siblings().removeClass("active")
                    }
                } else {
                    $('a[href="#home-slider"]').parent().addClass('active').siblings().removeClass("active")
                }
            })
        })
    })();

    // MOBILE MENU
    (function () {
        $('.mob-menu-btn > a').click(function (ev) {
            ev.preventDefault();
            $(this).toggleClass('active').find('.fas').toggleClass('fa-times fa-bars');
            $('.head_main .menu').toggleClass('active');
            $('.menu .mob-menu-overlay').fadeToggle(100);
        });
        $('.menu .mob-menu-overlay').click(function (ev) {
            ev.preventDefault();
            $('.mob-menu-btn > a').removeClass('active').find('.fas').removeClass('fa-times').addClass('fa-bars');
            $('.head_main .menu').removeClass('active');
            $('.menu .mob-menu-overlay').fadeOut(100);
        });

        // if ($(window).width() > 767) {
        $('.st-head-menu > li').each(function () {
            if ($(this).find('>.mega-menu, >ul').length) {
                $(this).addClass('has-menu')
            }
        });
    })();

    // MOBILE TABS HOME-ABOUT-US-DETAILD
    (function () {
        if ($(window).width() < 768) {
            $('.home-about-us-detaild .st-tabs-dy .nav-link').click(function () {
                var headerHeight = $('header').innerHeight()
                $('html, body').animate({
                    scrollTop: $('.tab-content').offset().top - (headerHeight + 10)
                }, 700)
            })
        }
    })();
});