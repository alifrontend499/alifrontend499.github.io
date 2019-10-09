$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000
    });

    // PARTNERS SLIDER
    $('#speciality-slider').owlCarousel({
        items: 4,
        dots: false,
        autoplay: true,
        autoplayTimeout: 200000,
        nav: true,
        navText: ['<i class="material-icons">keyboard_arrow_left</i>', ' <i class="material-icons">keyboard_arrow_right</i>'],
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 4,
            }
        }
    });

    (function() {
        // OPEN TABS
        $('[data-open-tab]').click(function(ev) {
            ev.preventDefault();
            $('#' + $(this).attr('data-open-tab')).trigger('click');
        });
    })();


    // MULTI LEVEL MENU LEFT
    (function() {
        if($(window).width() < 768) {
            $('ul.st-left-multilevel-menu li a').each(function() {
                var mobileBtn = '<i class="icon fas fa-plus d-flex position-absolute align-items-center justify-content-center h-100"></i>';
                if($(this).next('ul').length) {
                    $(this).addClass('has-multi-menu').append(mobileBtn);
                }
            });
    
            $('ul.st-left-multilevel-menu li a > .icon').click(function(ev) {
                ev.preventDefault();
                $(this).toggleClass('fa-plus fa-minus');
                $(this).closest('li').toggleClass('active').find('>ul').slideToggle();
            });
        }
    })();

    // MOBILE FILTER BTN
    (function() {
        $('.docs-result > .mobile-filter-btn > .st-btn').click(function(ev) {
            ev.preventDefault();
            console.log("object");
            $(this).parent().next().toggleClass('d-none');
        });
    })();
    
});