$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        mouseDrag: false
    });

    // PARTNERS SLIDER
    $('#testimonials-slider').owlCarousel({
        items: 3,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        center: true,
        loop: true,
        margin: 15,
        autoplayHoverPause: true,
        // nav: true,
        // navText: ['<i class="feather-chevron-left"></i>', ' <i class="feather-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
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

    // OPEN MOBILE MENU
    (function () {
        $('.mob-menu-btn > a').click(function (ev) {
            ev.preventDefault();
            $(this).toggleClass('active').find('.icon').toggleClass('feather-x feather-menu');
            $('.header-main-col .menu').toggleClass('active');
            $('.menu .mob-menu-overlay').fadeToggle(100);
        });
        $('.menu .mob-menu-overlay').click(function (ev) {
            ev.preventDefault();
            $('.mob-menu-btn > a').removeClass('active').find('.icon').removeClass('feather-x').addClass('feather-menu');
            $('.header-main-col .menu').removeClass('active');
            $('.menu .mob-menu-overlay').fadeOut(100);
        });
    })();

    // GET A QUOTE FORM
    (function () {
        $('#st-get-a-auote-form').submit(function (ev) {
            ev.preventDefault();
            console.log(ev)
        });

        $('#st-assignment-help-form').submit(function (ev) {
            ev.preventDefault();
            $('#assignmentSubmitModal').modal('show')

            setTimeout(() => {
                $('#assignmentSubmitModal').modal('hide')
            }, 4000);
        });
    })();

    // FOR INPUTS - IF ctrl+a NOT WORKING
    // (function () {
    //     $('.input-ctrlA-issue').keydown(function (e) {
    //         if (e.keyCode == 65 && e.ctrlKey) {
    //             e.target.select()
    //         }
    //     })
    // })();

    // HEADER FIX
    (function () {
        $(window).on("onreadystatechange contentLoaded load scroll", function () {
            // var app_headHeight = $('header').innerHeight();
            // var app_headHeight = $('.header-main').innerHeight();
            var app_headHeight;
            if ($(window).width() < 768) {
                app_headHeight = 150
            } else {
                app_headHeight = 100
            }
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
    })();

    // DYNAMIC-SELECT
    (function () {
        // on focus showing options
        $('.dynamic-select > .input-main').click(function () {
            $('>input', this).focus()
        })
        $('.dynamic-select > .input-main > input').focus(function () {
            // console.log("object");
            // toggle icon
            $(this).next().find('.sel-icon').removeClass('feather-chevron-down').addClass('feather-chevron-up');
            $(this).closest('.dynamic-select').find('>.options').slideDown(50);
        });
        // on blur hiding options
        $('.dynamic-select > .input-main > input').blur(function () {
            const $this = $(this);
            setTimeout(() => {
                // console.log("object");
                // toggle icon
                $(this).next().find('.sel-icon').removeClass('feather-chevron-up').addClass('feather-chevron-down');
                $this.closest('.dynamic-select').find('>.options').slideUp(50);
            }, 300);
        });
        // onclick select label
        $('.dynamic-select .label').click(function () {
            const thisText = $('.text', this).text();
            const thisFlag = ($('.flag', this).attr('class') !== undefined) ? $('.flag', this).attr('class').split(' ')[1] : ''
            $(this).closest('.dynamic-select').find('> .input-main > input').val(thisText);
            $(this).closest('.dynamic-select').find('> .input-main > .flag').attr('class', 'flag ' + thisFlag + ' position-absolute');
        });
        // options search
        $(".dynamic-select > .input-main > input").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $(this).parent().next().find('ul>li').filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    })();

});