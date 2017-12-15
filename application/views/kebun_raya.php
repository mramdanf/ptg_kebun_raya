<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>Maps</title>

	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
   integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
   crossorigin=""/>
   <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />

    <!-- Autocomplete CSS -->
	<link rel="stylesheet" href="<?=base_url('assets/css/easy-autocomplete.min.css')?>">

 	<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
	   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log==" crossorigin=""></script>
	<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
	
	<!-- JS file -->
	<script src="<?=base_url('assets/js/jquery.easy-autocomplete.min.js')?>"></script>

	
	<script src="<?=base_url('assets/js/jquery-1.8.3.min.js');?>" type="text/javascript"></script>
	<script src="<?=base_url('assets/js/lrm-graphhopper-1.2.0.js')?>"></script>
	
	<style>
		body {
			padding: 0;
			margin: 0;
		}
		html, body, #mapid {
			height: 100%;
			width: 100vw;
		}
	</style>
</head>
<body>
	<div id="mapid"></div>
	<script src="<?=base_url('assets/js/main.js')?>" type="text/javascript"></script>
</body>
</html>