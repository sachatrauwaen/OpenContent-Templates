(function ($) {
   $(document).ready(function () {
      var googleapikey = $("#places").data("google-api");
      loadScript(googleapikey);
      gminitializecallback = function () { // for google map
         initPlaces(document); 
      };
   });
   $(document).on("opencontent.change", function (event, element) {
      initPlaces(element);
   });
   function initPlaces(element) {
      placeId = $("#places").data("placeid");
      $("#places").googlePlaces({
         placeId: placeId,
         min_rating: 1
      });
   };
   function loadScript(googleapikey) {
      var script = document.createElement('script');
      script.type = "text/javascript";
      script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&callback=gminitialize&key="+googleapikey;
      document.body.appendChild(script);
   };
}(jQuery));

var placeId;
var gminitializecallback;
function gminitialize() {
   if (gminitializecallback) {
      gminitializecallback();
   }
}

(function($) {
   $.fn.googlePlaces = function() {
      var target_div = this[0];

      var filterReviewsByMinRating = function(reviews) {
         var minimumRating = $("#places").data("minimum-rating");
         if (minimumRating) {
            for (var i = reviews.length - 1; i >= 0; i--) {
               if (parseInt(reviews[i].rating) < parseInt(minimumRating)) {
                  reviews.splice(i, 1);
               }
            }
         }
         return reviews;
      };

      var getPhoto = function(photos) {
         if (photos.length > 0) {
            var photo = photos[Math.floor(Math.random() * photos.length) + 0];
            while (photo.height > photo.width) {
               photo = photos[Math.floor(Math.random() * photos.length) + 0];
            }
         }
         else {
            photo = "";
         }
         return photo;
      };
// GOOGLE PLACES API CALL STARTS HERE
// initiate a Google Places Object
      var service = new google.maps.places.PlacesService(target_div);
// getDetails takes 2 arguments: request, callback
// see documentation here:  https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlacesService
      var request = {
         placeId: placeId
      };
// the callback is what initiates the rendering if Status returns OK
      var callback = function(place, status) {
         if (status == google.maps.places.PlacesServiceStatus.OK) {
            // console.log(JSON.stringify(place, null, 2));
            console.log(place);
            var photo = getPhoto(place.photos);
            var photoUrl = photo.getUrl();
            var photoCopyright = stripHtml(photo.html_attributions);
            var filtered_reviews = filterReviewsByMinRating(place.reviews);
            var template = Handlebars.compile($('#places-template').html());
            $("#places").html(template({
               rating: place.rating,
               name: place.name,
               reviews: filtered_reviews,
               url: place.url,
               photo: photo
            }));
         }
      };

      return this.each(function() {
         // Runs the Plugin
         if (placeId === undefined || placeId === "") {
            console.error("NO PLACE ID DEFINED");
            return;
         }
         service.getDetails(request, callback);
      });
   };
}(jQuery));

// Handlebar helpers
Handlebars.registerHelper('renderStars', function(rating, size) {
   var noOfStars = 0;
   var stars = "<div class=\"review-stars text-center\">";
   // fill in gold stars
   while (noOfStars < Math.floor(rating)) {
      stars += "<span style=\"color: #FCC133\"><i class=\"fas fa-star " + size + " fa-fw\"></i></span>";
      noOfStars++;
   }
   if (!(isInt(rating)) && (rating > noOfStars)) {
      stars += "<span style=\"color: #FCC133\"><i class=\"fas fa-star-half-alt " + size + " fa-fw\"></i></span>";
      noOfStars++;
   }
   // fill in empty stars
   if (noOfStars < 5) {
      while (noOfStars < 5) {
         stars += "<span style=\"color: #FCC133\"><i class=\"far fa-star " + size + " fa-fw\"></i></span>";
         noOfStars++;
      }
   }
   stars += "</div>";
   return new Handlebars.SafeString(stars);
});

Handlebars.registerHelper('convertTime', function(UNIX_timestamp) {
   var a = new Date(UNIX_timestamp * 1000);
   var time = a.getDate() + ". " + a.toLocaleString('de-at', { month: 'short' }) + " " + a.getFullYear();
   return time;
});

Handlebars.registerHelper('getShortName', function(name) {
   var shortenName = $("#places").data("shorten-name");
   var result = name;
   if ((shortenName === "True" ) && (name.split(" ").length > 1)) {
      var names = name.split(" ");
      result = names[0] + " " + names[1][0] + ".";
   }
   return result;
});

Handlebars.registerHelper('getUrl', function(photo) {
   return photo.getUrl();
});

Handlebars.registerHelper('getAttributions', function(photo) {
   return stripHtml(photo.html_attributions);
});

// Helper functions
function isInt(n) {
   return +n === n && !(n % 1);
}

function stripHtml(s) {
   var div = document.createElement("div");
   div.innerHTML = s;
   return div.textContent || div.innerText || "";
};
