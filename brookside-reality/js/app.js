$(function () {
    // HOMEPAGE SLIDER
    $('#homepageslider').owlCarousel({
        items: 1,
        nav: false,
    });

    // HEADER MARGIN PADDING CLASSES
    (function () {
        var headHeight = $('header').innerHeight();
        $('.head-marg').css({
            marginTop: headHeight
        });
        $('.head-padd').css({
            paddingTop: headHeight
        });
    })();
});

// HEADER SETTING
(function () {
    $(window).on('load scroll', function () {
        var headHeight = $('header').innerHeight();
        var headTopHeight = $('#HD_TP').innerHeight();
        if ($(this).scrollTop() > headHeight) {
            $('header').addClass('fixed');
            $('#HD_TP').css({
                marginTop: -headTopHeight
            });
        } else {
            $('header').removeClass('fixed');
            $('#HD_TP').css({
                marginTop: 0
            });
        }
    });
})();

