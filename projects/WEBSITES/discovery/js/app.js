$(function () {
    // LEFT BAR TOGGLE BTN
    (function () {
        $(".left-bar-toggle-btn").click(function (ev) {
            ev.preventDefault();
            $(".admin-left-bar").toggleClass("hide-bar");
            $(".admin-content-area").toggleClass("expand");
        });
        // $(window).on('load resize', function () {
        //     if ($(this).width() <= 767) {

        //     }
        // });

        // ONCLICK CLOSE
        if ($(window).width() <= 991) {
            $(".admin-left-bar").addClass("hide-bar");
            $(".admin-content-area").addClass("expand");

            $("body").click(function () {
                $(".admin-left-bar").addClass("hide-bar");
                $(".admin-content-area").addClass("expand");
            });
            $(".admin-left-bar,.left-bar-toggle-btn").click(function (ev) {
                ev.stopPropagation();
            });
        }
    })();

    // select images
    (function () {
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $(input).next("img").attr("src", e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        $(function () {
            $("#select-student-image").change(function () {
                //set up a common class
                readURL(this);
            });
        });
    })();
});
