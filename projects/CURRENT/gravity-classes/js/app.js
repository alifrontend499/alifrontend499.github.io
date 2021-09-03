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
        // side menu open
        $(".menu-icon").click(function (ev) {
            ev.preventDefault();

            $(".header-left-menu").toggleClass("active");
        });
        // side menu close
        $(".header-left-menu .close-icon").click(function (ev) {
            ev.preventDefault();

            setTimeout(function () {
                $(".header-left-menu").removeClass("active");
            }, 100);
        });
        // ques menu icon
        $(".ques-menu-icon").click(function (ev) {
            ev.preventDefault();
            setTimeout(function () {
                $(".ques-left-bar").addClass("active");
            }, 100);
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

            // side menu
            if (!$(".header-left-menu:hover,.menu-icon:hover").length) {
                $(".header-left-menu").removeClass("active");
            }

            // ques left bar
            if (!$(".ques-left-bar:hover").length) {
                $(".ques-left-bar").removeClass("active");
            }
        });
    })();

    // SHOW MODAL TEMPRORY FUNCTION: PLEASE REMOVE LATER
    // IT IS ONLY FOR SHOWING MODAL FOR TESTING PURPOSE ONLY
    (function () {
        const hash = location.hash;

        console.log("hash ", hash);
        if (hash) {
            var myModal = new bootstrap.Modal(
                document.getElementById(hash.replace("#", "")),
                {}
            );
            myModal.show();
        }
    })();
});
