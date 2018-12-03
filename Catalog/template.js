(function ($) {
    $(document).ready(function () {
        initPage(document);
    });
    $(document).on("opencontent.change", function (event, element) {
        initPage(element);
    });
    function initPage(element) {
        $(".jplist", element).each(function () {
            $(this).jplist({
                itemsBox: '.list',
				itemPath: '.list-item', 
				panelPath: '.jplist-panel',
				deepLinking: true    
            });
        });
    }
}(jQuery));