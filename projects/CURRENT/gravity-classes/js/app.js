$(function () {
    // header
    (function () {
        // header search
        $(".app-header-search > .icon").click(function (ev) {
            ev.preventDefault();

            $(this).parent().toggleClass("active");
        });
        // header options
        $(".app-header-options > .icon").click(function (ev) {
            ev.preventDefault();

            $(this).toggleClass("active");
            $(this).parent().toggleClass("active");
        });
        // closing on document click
        $(document).click(function (ev) {
            // search
            if (!$(".app-header-search:hover").length) {
                $(".app-header-search").removeClass("active");
            }
            // options
            if (!$(".app-header-options:hover").length) {
                $(
                    ".app-header-options, .app-header-options > .icon"
                ).removeClass("active");
            }
        });
    })();
});
