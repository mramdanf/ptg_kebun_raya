<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Kebun Raya</title>
	<link rel="stylesheet" href="">

	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
   integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
   crossorigin=""/>
   <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
   <!-- Make sure you put this AFTER Leaflet's CSS -->
 	<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
	   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
	   crossorigin=""></script>
	<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
	<script src="<?=base_url('assets/js/lrm-graphhopper-1.2.0.js')?>"></script>
	<style>
		body, html {
		  height: 100%;
		}
		#mapid { height: 100%; }
	</style>
</head>
<body>
	<div id="mapid"></div>
	<script>
		var mymap = L.map('mapid').setView([-6.59921, 106.79678], 16);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 18,
		    id: 'mapbox.streets',
		    accessToken: 'pk.eyJ1IjoibXJhbWRhbmYiLCJhIjoiY2piNmdqdW1sOHd2dzMzcnprcDI2Y2ljbCJ9.MaYYfsvruJWQMFYMC6h0_w'
		}).addTo(mymap);

		L.marker([-6.60132, 106.79884]).addTo(mymap);
		L.marker([-6.60027, 106.79872]).addTo(mymap);
		L.Routing.control({
			waypoints: [
			    L.latLng(-6.60132, 106.79884),
			    L.latLng(-6.60027, 106.79872)
			  ],
		    router: L.Routing.graphHopper('d87375c3-9d07-4fa0-9016-e0af7d7d99f5')
		}).addTo(mymap);
	</script>
</body>
</html>