$(function () {
    // QUANTITY INCREASE DECREASE CONTROLS
    (function () {
        $(".quantity-select-controls > button").click(function (ev) {
            ev.preventDefault();
            var currentVal = parseInt($(this).parent().find(">input").val());
            if ($(this).hasClass("plus")) {
                if (currentVal >= 1) {
                    $(this)
                        .parent()
                        .find(">input")
                        .val(currentVal + 1);
                } else {
                    return false;
                }
            } else {
                if (currentVal > 1) {
                    $(this)
                        .parent()
                        .find(">input")
                        .val(currentVal - 1);
                } else {
                    return false;
                }
            }
        });
    })();

    (function () {
        // on load
        $(
            ".st-form.materialize-like-input > input,.st-form.materialize-like-input > textarea"
        ).each(function () {
            if ($(this).val().length === 0) {
                $(this).closest(".st-form").addClass("empty");
            } else {
                $(this).closest(".st-form").removeClass("empty");
            }
        });

        // on change
        $(
            ".st-form.materialize-like-input > input,.st-form.materialize-like-input > textarea"
        ).keyup(function () {
            if ($(this).val().length === 0) {
                $(this).closest(".st-form").addClass("empty");
            } else {
                $(this).closest(".st-form").removeClass("empty");
            }
        });

        // on label click
        $(".st-form.materialize-like-input > label").click(function (ev) {
            ev.preventDefault();
            $(this).closest(".st-form").find(">input, textarea").focus();
        });
    })();

    (function () {
        $(".slide-to-link").click(function (ev) {
            ev.preventDefault();
            const link = $(this).attr("data-href");
            if (link) {
                // $(".slide-to-link").removeClass("active");
                // $(this).addClass("active");
                const scrollTo = $(link).offset().top;
                $("html,body").animate(
                    {
                        scrollTop: scrollTo - 10,
                    },
                    800
                );
            }
        });
    })();

    // star-rating-ul
    (function () {
        $(".star-rating-ul > li label")
            .on("mouseover", function () {
                $(this)
                    .parent()
                    .addClass("active")
                    .prevAll()
                    .addClass("active");
            })
            .on("mouseout", function () {
                $(this).closest("ul").find(">li").removeClass("active");
            });
        $(".star-rating-ul").on("mouseout", function () {
            $(this).find(">li").removeClass("active");
            $(".star-rating-ul > li").each(function () {
                if ($("label>input", this).is(":checked")) {
                    $(this).addClass("active").prevAll().addClass("active");
                    $(this).nextAll().removeClass("active");
                }
            });
        });
    })();

    // OPEN TABS
    (function () {
        $("[data-open-tab]").click(function (ev) {
            ev.preventDefault();
            $("#" + $(this).attr("data-open-tab")).trigger("click");
        });
    })();
});

// DETECT SECTION SCROLL
$(window).scroll(function () {
    $("[data-scroll-detection]").each(function () {
        if (
            $(this).attr("data-scroll-detection") &&
            $(this).offset().top < $(window).scrollTop() + $(window).height()
        ) {
            var dataAttr = $(this).data("scroll-detection");
            $(this).addClass(dataAttr);
        }
    });
});
