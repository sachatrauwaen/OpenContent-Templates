(function ($) {

    $(document).ready(function () {
        initSlider(document); // init all the slider on the page
    });
    $(document).on("opencontent.change", function (event, element) {
        initSlider(element); // init slides on module which content change
    });
    function initSlider(element) {        
        $(".masonry.grid", element).each(function () {        
			var $grid = $(this).imagesLoaded( function() {
				// init Masonry after all images have loaded				
				$grid.masonry({
					itemSelector: '.grid-item',
					columnWidth: '.grid-sizer',
					percentPosition: true,
					gutter: '.gutter-sizer'
				});          				
			});
        });
    }
}(jQuery));
