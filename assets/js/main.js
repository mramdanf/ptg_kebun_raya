
var mymap = L.map('mapid').setView([-6.60132, 106.79884], 17);

// Loading map from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXJhbWRhbmYiLCJhIjoiY2piNmdqdW1sOHd2dzMzcnprcDI2Y2ljbCJ9.MaYYfsvruJWQMFYMC6h0_w'
}).addTo(mymap);


/*mymap.locate({setView: false, maxZoom: 18});

function onLocationFound(e) {
	var radius = 500;

	L.marker(e.latlng).addTo(mymap)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();

	L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
	alert(e.message);
}
mymap.on('locationerror', onLocationError);*/


var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
var custPopup;

$.ajax({
	url : baseUrl + '/kebun_raya/getAllContent',
	type : 'GET',
	dataType: 'json',
	success : function(data){
		$.each(data, function(index, element) {
			custPopup = '<b>'+data[index].nama_lokasi+'</b><br>'+
				'<a href="#" class="go-here" dt-lat="'+data[index].latitude+
				'" dt-lng="'+data[index].longitude+'">Go here</a>';
			L.marker([data[index].latitude, data[index].longitude],
				{icon: L.icon({
				iconUrl: baseUrl + '/assets/img/markers/' + data[index].penanda_peta,
				iconSize: [30, 45]})}).addTo(mymap)
			.bindPopup(custPopup, {'className':'cust-popup'});
        });
	}
});
var routingControl = L.Routing.control({
    router: L.Routing.graphHopper('d87375c3-9d07-4fa0-9016-e0af7d7d99f5', {
    	urlParameters: {
    		vehicle: 'foot'
    	}
    })
}).addTo(mymap);

// Dummy location on kebun raya
var dummyMarker = L.marker([-6.60132, 106.79884]).addTo(mymap);
dummyMarker.bindPopup("<b>It's Me</b>").openPopup();

$(document).on('click', '.go-here', function(event) {
	event.preventDefault();
	var dtLat = $(this).attr('dt-lat');
	var dtLng = $(this).attr('dt-lng');
	routingControl.getPlan().setWaypoints([
        L.latLng(-6.60132, 106.79884),
        L.latLng(dtLat, dtLng)
    ]);
});

var options = {
	url: baseUrl + '/kebun_raya/getAllContent',
	getValue: "nama_lokasi",
	list: {
		match: {
			enabled: true
		},
		maxNumberOfElements: 8,
		onChooseEvent: function() {
			var selLat = $(".form__field").getSelectedItemData().latitude;
			var selLng = $(".form__field").getSelectedItemData().longitude;
			routingControl.getPlan().setWaypoints([
		        L.latLng(-6.60132, 106.79884),
		        L.latLng(selLat, selLng)
		    ]);
		}
	},
	theme: "square"
};

$(".form__field").easyAutocomplete(options);
