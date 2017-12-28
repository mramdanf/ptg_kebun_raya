
var mymap = L.map('mapid').setView([-6.60132, 106.79884], 17);

// Loading map from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXJhbWRhbmYiLCJhIjoiY2piNmdqdW1sOHd2dzMzcnprcDI2Y2ljbCJ9.MaYYfsvruJWQMFYMC6h0_w'
}).addTo(mymap);


mymap.locate({setView: false, maxZoom: 18});

var latlng;
function onLocationFound(e) {
	var radius = 500;

	L.marker(e.latlng).addTo(mymap)
		.bindPopup("You are within " + radius + " meters from this point",{ autoPan: false }).openPopup();

	L.circle(e.latlng, radius).addTo(mymap);
	latlng = e.latlng;
}
mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
	alert(e.message);
}
mymap.on('locationerror', onLocationError);


var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
var custPopup;

$.ajax({
	url : baseUrl + '/kebun_raya/getAllContent',
	type : 'GET',
	dataType: 'json',
	success : function(data){
		$.each(data, function(index, element) {
			custPopup = '<center><b>'+data[index].nama_lokasi+'</b><br/><br/>'+
				'<img src="'+baseUrl+'/assets/img/foto/'+data[index].foto+'" width="250px"/><br/><br/>'+
				
				'<button '+
					'type="button" '+
					'class="btn btn-info btn-sh-modal" '+
					'data-dismiss="modal" '+
					'data-toggle="modal" '+
					'data-lokasi="'+data[index].nama_lokasi+'" '+
					'data-photo="'+data[index].foto+'" '+
					'data-dec="'+data[index].deskripsi+'" ' +
					'data-lat="'+data[index].latitude+'" ' +
					'data-lng="'+data[index].longitude+'" ' +
					'data-target="#myModal">Lihat detail</button>'+
				
				'</div><br/><br/>'+
				'<a href="#" class="go-here" dt-lat="'+data[index].latitude+
				'" dt-lng="'+data[index].longitude+'">Go here</a></center>';
			L.marker([data[index].latitude, data[index].longitude],
				{icon: L.icon({
				iconUrl: baseUrl + '/assets/img/markers/' + data[index].penanda_peta,
				iconSize: [30, 45]})}).addTo(mymap)
			.bindPopup(custPopup, {'className':'cust-popup'});
        });
	}
});
var routingControl = L.Routing.control({
	createMarker: function() { return null; },
    router: L.Routing.graphHopper('d87375c3-9d07-4fa0-9016-e0af7d7d99f5', {
    	urlParameters: {
    		vehicle: 'foot'
    	}
    })
}).addTo(mymap);

/*
// Dummy location on kebun raya
var dummyMarker = L.marker([-6.60132, 106.79884]).addTo(mymap);
dummyMarker.bindPopup("<b>It's Me</b>").openPopup();
*/

$(document).on('click', '.go-here', function(event) {
	event.preventDefault();
	mymap.closePopup();
	
	var dtLat = $(this).attr('dt-lat');
	var dtLng = $(this).attr('dt-lng');
	
	routingControl.getPlan().setWaypoints([
        L.latLng(latlng),
        L.latLng(dtLat, dtLng)
    ]);

	$.LoadingOverlay('show');
    routingControl.on('routesfound', function(data) {
    	$.LoadingOverlay('hide');
    });
});

var options = {
	url: baseUrl + '/kebun_raya/getAllContent',
	getValue: "nama_lokasi",
	template: {
		type: "iconLeft",
		fields: {
			iconSrc: "icon_autocomplete"
		}
	},
	list: {
		match: {
			enabled: true
		},
		maxNumberOfElements: 8,
		onChooseEvent: function() {
			var selLat = $(".form__field").getSelectedItemData().latitude;
			var selLng = $(".form__field").getSelectedItemData().longitude;
			routingControl.getPlan().setWaypoints([
		        L.latLng(latlng),
		        L.latLng(selLat, selLng)
		    ]);
		    $.LoadingOverlay('show');
		    routingControl.on('routesfound', function(data) {
		    	$.LoadingOverlay('hide');
		    });
		}
	},
	theme: "square"
};

$(".form__field").easyAutocomplete(options);

$(document).on('click', '.btn-sh-modal', function() { 
	var modal = $('#myModal');
	modal.find('h4.modal-title').text($(this).attr('data-lokasi'));
	modal.find('img').attr('src', baseUrl+'/assets/img/foto/'+$(this).attr('data-photo'));
	modal.find('p').text($(this).attr('data-dec'));
	modal.find('input[name=inlat]').val($(this).attr('data-lat'));
	modal.find('input[name=inlng]').val($(this).attr('data-lng'));
	modal.modal('show');
    mymap.closePopup();
});

$(document).on('click', '.btn-modal-gohere', function(event) {
	event.preventDefault();
	
	var modal = $('#myModal');
	modal.modal('hide');
	
	var dtLat = modal.find('input[name=inlat]').val();
	var dtLng = modal.find('input[name=inlng]').val();
	
	routingControl.getPlan().setWaypoints([
        L.latLng(latlng),
        L.latLng(dtLat, dtLng)
    ]);

    $.LoadingOverlay('show');
    routingControl.on('routesfound', function(data) {
    	$.LoadingOverlay('hide');
    });
});