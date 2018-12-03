(function ($) {
    $(document).ready(function () {
      	var googleapikey = $(".map-items").data("google-api-key");
        loadScript(googleapikey);
        gminitializecallback = function () { // for google map
            initMap(document); 
        };
    });
    $(document).on("opencontent.change", function (event, element) {
        initMap(element); // init slides on module which content change
    });
  	
    function initMap(element) {
        
        $(".map-items", element).each(function () {
            var id = $(this).data("mapid");
            var centerLatlng = new google.maps.LatLng($(this).data("lat"), $(this).data("lng"));
            var zoom = $(this).data("zoom");
            var mapicon = $(this).data("icon");            
            var mapOptions = {
                zoom: zoom,
                center: centerLatlng
            };
            var map = new google.maps.Map(document.getElementById(id), mapOptions);
            var infowindow = new google.maps.InfoWindow({
                size: new google.maps.Size(400, 150)
            });
            $(".map-item", this).each(function () {
                var self = this;
                var myLatlng = new google.maps.LatLng($(this).data("lat"),$(this).data("lng"));
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: $(this).data("title"),
                    icon: mapicon
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent($(self).html());
                    infowindow.open(map, marker);
                });
            });
        });
    };
    function loadScript(googleapikey) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
            '&callback=gminitialize&key='+googleapikey;
        document.body.appendChild(script);
    };
}(jQuery));

var gminitializecallback;
function gminitialize() {
    if (gminitializecallback)
        gminitializecallback();
}
