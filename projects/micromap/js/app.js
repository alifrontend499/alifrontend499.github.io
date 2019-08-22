$(function () {
    // HOME SLIDER
    $('#home-slider').owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000
    });
    // PARTNERS SLIDER
    $('#partners-slider').owlCarousel({
        items: 6,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            768: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    });

    (function () {
        $('.open-BP-modal').click(function (ev) {
            ev.preventDefault();
            var modal = $(this).data('modal');
            $('.modal').modal('hide');
            setTimeout(function() {
                $(modal).modal('show');
            }, 150)
        });
    })();
});