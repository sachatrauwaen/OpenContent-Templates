$(document).ready(function () {
    $(".fraction-slider").each(function () {
        $(this).fractionSlider({
            'fullWidth': $(this).attr("data-fullWidth") ? $(this).data("fullWidth") : false,
            'controls': $(this).attr("data-controls") ? $(this).data("controls") : false,
            'pager': $(this).attr("data-pager") ? $(this).data("pager") : false,
            'responsive': $(this).attr("data-responsive") ? $(this).data("responsive") : false,
            'dimensions': $(this).attr("data-dimensions") ? $(this).data("dimensions") : "100,100",
            'increase': $(this).attr("data-increase") ? $(this).data("increase") : false,
            'pauseOnHover': $(this).attr("data-pauseOnHover") ? $(this).data("pauseOnHover") : false,
            'slideEndAnimation': true,
            'autoChange': $(this).attr("data-autoChange") ? $(this).data("autoChange") : false,
            'pauseOnHover': $(this).attr("data-pauseOnHover") ? $(this).data("pauseOnHover") : false
        });
    });
});
