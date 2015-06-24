(function ($) {

    $(document).ready(function () {
        initSlider(document); // init all the slider on the page
    });
    $(document).on("opencontent.change", function (event, element) {
        initSlider(element); // init slides on module which content change
    });
    function initSlider(element) {
        $(".flexslider.carousel", element).each(function () {
            $(this).flexslider({
                'animationLoop': $(this).attr("data-animationloop") ? $(this).data("animationloop") : false,
                'slideshow': $(this).attr("data-slideshow") ? $(this).data("slideshow") : false,
                'animation': "slide",
                'touch': $(this).attr("data-touch") ? $(this).data("touch") : false,
                'controlNav': $(this).attr("data-controlnav") ? $(this).data("controlnav") : false,
                'directionNav': $(this).attr("data-directionnav") ? $(this).data("directionnav") : false,
                'itemWidth': $(this).attr("data-itemwidth") ? $(this).data("itemwidth") : 210,
                'itemMargin': $(this).attr("data-itemmargin") ? $(this).data("itemmargin") : 5,
                'minItems': $(this).attr("data-minitems") ? $(this).data("minitems") : 0,
                'maxItems': $(this).attr("data-maxitems") ? $(this).data("maxitems") : 0,
                'move': $(this).attr("data-move") ? $(this).data("move") : 0,
                'asNavFor': $(this).attr("data-asnavfor") ? $(this).data("asnavfor") : "",
            });
        });
        $(".flexslider.slider", element).each(function () {
            $(this).flexslider({
                'animationLoop': $(this).attr("data-animationloop") ? $(this).data("animationloop") : false,
                'slideshow': $(this).attr("data-slideshow") ? $(this).data("slideshow") : false,
                
                'animation': $(this).attr("data-animation") ? $(this).data("animation") : "slide",
                'touch': $(this).attr("data-touch") ? $(this).data("touch") : false,
                'controlNav': $(this).attr("data-controlnav") ? $(this).data("controlnav") : false,
                'directionNav': $(this).attr("data-directionnav") ? $(this).data("directionnav") : false,
                'sync': $(this).attr("data-sync") ? $(this).data("sync") : "",
                
            });
        });
    }
}(jQuery));
