<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>Kebun Raya</title>

	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
   integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
   crossorigin=""/>
   <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />

  <link rel="stylesheet" type="text/css" href="<?=base_url('assets/css/bootstrap.min.css')?>">
  <link rel="stylesheet" type="text/css" href="<?=base_url('assets/css/style.css')?>">

  <!-- Autocomplete CSS -->
	<link rel="stylesheet" href="<?=base_url('assets/css/easy-autocomplete.min.css')?>">
	<link rel="stylesheet" href="<?=base_url('assets/css/easy-autocomplete.themes.css')?>">

	<link rel="shortcut icon" href="<?=base_url('assets/img/favicon.ico')?>" type="image/x-icon">

 	<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
	   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log==" crossorigin=""></script>
	<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>

	<script src="<?=base_url('assets/js/jquery-1.8.3.min.js');?>" type="text/javascript"></script>
	<script src="<?=base_url('assets/js/bootstrap.min.js');?>" type="text/javascript"></script>
	<script src="<?=base_url('assets/js/lrm-graphhopper-1.2.0.js')?>"></script>

	<!-- Autocomplete JS -->
	<script src="<?=base_url('assets/js/jquery.easy-autocomplete.min.js');?>" type="text/javascript"></script>
	

</head>
<body>
	<div class="container__item">
		<form class="form">
			<input type="email" class="form__field" placeholder="Cari tempat di Kebun Raya Bogor" />
		</form>
	</div>
	<div id="mapid"></div>
	<div id="myModal" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				
				<input type="hidden" name="inlat">
				<input type="hidden" name="inlng">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">×</button>
					<h4 class="modal-title">Pintu 4</h4>
				</div>
				<div class="modal-body text-center">
					<img class="img-responsive"><br><br>
					<p>Lokasi masuk kebun raya bogor yang berhadapan dengan kampus Pascasarjana IPB..</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary btn-modal-gohere">Go Here</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@1.5.4/src/loadingoverlay.min.js"></script>
	<script src="<?=base_url('assets/js/main.js')?>" type="text/javascript"></script>
</body>
</html>