(function ($) {
    $(document).ready(function () {
        if (typeof google === 'object' && typeof google.maps === 'object') {
            initPage(document);
        } else {
            var googleApiKey = $(".jplistmap").data("google-api-key");
            loadScript(googleApiKey);
            gminitializecallback = function () { // for google map
                initPage(document);
            };
        }
    });
    $(document).on("opencontent.change", function (event, element) {
        initPage(element); // init slides on module which content change
    });

    function initPage(element) {
        $(".jplistmap", element).each(function () {

            var moduleScope = $(this),
                self = moduleScope,
                sf = $.ServicesFramework($(this).attr('data-moduleid'));

            var $list = $('#demo .list')
			    , template = Handlebars.compile($('#mapitem-template').html());

            var mapid = $(this).data("mapid");
            var centerLatlng = new google.maps.LatLng($(this).data("lat"), $(this).data("lng"));
            var zoom = $(this).data("zoom");
            var mapicon = $(this).data("icon");
            var mapOptions = {
                zoom: zoom,
                center: centerLatlng
            };
            var map = new google.maps.Map(document.getElementById(mapid), mapOptions);
            var markers = [];
            var infowindow = new google.maps.InfoWindow({
                size: new google.maps.Size(400, 150)
            });

            $(this).jplist({
                itemsBox: ".list"
                , itemPath: ".list-item"
                , panelPath: ".jplist-panel"
                , deepLinking: true
                , dataSource: {
                    type: 'server'
                    , server: {
                        ajax: {
                            data: {}
                                , url: sf.getServiceRoot('OpenContent') + "JplistAPI/List"
							    , dataType: 'json'
							    , type: 'POST'
                                , beforeSend: sf.setModuleHeaders
                        }
                    }
                    , render: function (dataItem, statuses) {
                        for (var i = 0; i < markers.length; i++) {
                            markers[i].setMap(null);
                        }
                        markers = [];
                        $.each(dataItem.content.Items, function (index, value) {
                            
                            var myLatlng = new google.maps.LatLng(value.Address.latitude, value.Address.longitude);
                            var marker = new google.maps.Marker({
                                position: myLatlng,
                                map: map,
                                title: value.Title,
                                icon: mapicon
                            });
                            markers.push(marker);
                            google.maps.event.addListener(marker, 'click', function () {
                                infowindow.setContent(template(value));
                                infowindow.open(map, marker);
                            });
                        });
                        //$list.html(template(dataItem.content));
                    }
                }
            });
        });

        $(".flexslider.flex-carousel", element).each(function () {
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
        $(".flexslider.flex-slider", element).each(function () {
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
        $(".jplist-detail", element).each(function () {

            var moduleId = $(this).attr('data-moduleid');
            var itemId = $(this).attr('data-id');
            var itemTitle = $(this).attr('data-title');

            var sf = $.ServicesFramework(moduleId);

            var $submitButton = $('#submit-' + moduleId);
            var $modal = $('#modal-' + moduleId);
            var $contactForm = $('.contactform', $modal);

            var form = $contactForm.openContentForm({
                servicesFramework: sf,
                onSubmit: function (data) {
                    data.Title = itemTitle;
                },
                onSubmited: function (data) {
                    form.destroy();
                    $contactForm.text(data.message);
                    $submitButton.hide();
                    //$modal.modal('hide');
                }
            });
            $submitButton.click(function () {
                form.submit(itemId);
            });
        });
    }
    if (typeof Handlebars != 'undefined') {
        Handlebars.registerHelper('formatDateTime', function (context, format) {
            if (window.moment && context && moment(context).isValid()) {
                var f = format || "DD/MM/YYYY";
                return moment(context).format(f);
            } else {
                return context;   //  moment plugin is not available, context does not have a truthy value, or context is not a valid date
            }
        });       
    }
    function loadScript(apikey) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
            '&callback=gminitialize' +
          (apikey ? '&key=' + apikey : '');

        document.body.appendChild(script);
    };
}(jQuery));


var gminitializecallback;
function gminitialize() {
    if (gminitializecallback)
        gminitializecallback();
}