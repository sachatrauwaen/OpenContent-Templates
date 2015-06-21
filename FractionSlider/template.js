//$(document).ready(function () {
$(document).on("opencontent.ready", function (event, element) {

    $(".fraction-slider", element).each(function () {
        
        //alert($(this).closest("div[class*='DnnModule-']").attr('class'));
        //var myString = $(this).closest("div[class*='DnnModule-']").attr('class');
        //var myRegexp = /DnnModule-(\d+)/g;
        //var match = myRegexp.exec(myString);
        //alert(match[1]);  // abc

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
