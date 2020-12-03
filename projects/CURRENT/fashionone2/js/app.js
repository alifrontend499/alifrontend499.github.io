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

});