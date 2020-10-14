<!DOCTYPE html>
<html>
  <head>
    <title>FussionMD | Promotorias</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <!--<script
      src="https://maps.googleapis.com/maps/api/js?&callback=initMap&libraries=&v=weekly"
      defer
    ></script>-->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTCHxGWByipZZLEglGazrbVqqkzDw1g6o&callback=initMap&libraries=&v=weekly"
      defer
    ></script>
    <style type="text/css">
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }

      /* Optional: Makes the sample page fill the window. */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
    <script>
      (function(exports) {
        "use strict";

        function initMap() {
          var myLatLng = {
            lat: <?=$_GET['lat'];?>,
            lng: <?=$_GET['lng'];?>
          };
          var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 19,
            center: myLatLng
          });
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: "FussionMD | Punto de Carga"
          });
        }

        exports.initMap = initMap;
      })((this.window = this.window || {}));
    </script>
  </head>
  <body>
    <div id="map"></div>
  </body>
</html>