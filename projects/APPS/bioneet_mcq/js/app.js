// MATERIALIZE
(function () {
    // SIDENAV
    (function () {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    })();
})();
$(function () {
    // APP APP MORE MENU
    (function () {
        $('.app-more-menu > a').click(function (ev) {
            ev.preventDefault();
            $(this).parent().toggleClass('active');
        });
        $('.app-more-menu > a, .app-more-menu > ul').click(function (ev) {
            ev.stopPropagation();
        });
        // CLOSING SEARCH
        $(document).click(function () {
            $('.app-more-menu').removeClass('active');
        });
    })();
});

// HEADER FIX
(function () {
    $('.sel-ans label.checkbox > input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active')
        }
    });
    $('.sel-ans label.radio > input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('active').siblings().removeClass('active');
        }
    });
})();