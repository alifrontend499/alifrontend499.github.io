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
        $(".st-form.materialize-like-input > input,.st-form.materialize-like-input > textarea").each(function () {
            if ($(this).val().length === 0) {
                $(this).closest(".st-form").addClass("empty");
            } else {
                $(this).closest(".st-form").removeClass("empty");
            }
        });

        // on change
        $(".st-form.materialize-like-input > input,.st-form.materialize-like-input > textarea").keyup(function () {
            if ($(this).val().length === 0) {
                $(this).closest(".st-form").addClass("empty");
            } else {
                $(this).closest(".st-form").removeClass("empty");
            }
        });

        // on label click
        $(".st-form.materialize-like-input > label").click(function (ev) {
            ev.preventDefault()
            $(this).closest('.st-form').find('>input, textarea').focus()
        });
    })();
});
