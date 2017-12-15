var mymap = L.map('mapid').setView([-6.5982,106.7995], 16);

// Loading map from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXJhbWRhbmYiLCJhIjoiY2piNmdqdW1sOHd2dzMzcnprcDI2Y2ljbCJ9.MaYYfsvruJWQMFYMC6h0_w'
}).addTo(mymap);


mymap.locate({setView: true, maxZoom: 16});

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
mymap.on('locationerror', onLocationError);

function locate() {
	mymap.locate({setView: true, maxZoom: 16});
}

// call locate every 3 seconds... forever
//setInterval(locate, 3000);


var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

$.ajax({
	url : baseUrl + '/kebun_raya/getAllContent',
	type : 'GET',
	dataType: 'json',
	success : function(data){
		//var obj = jQuery.parseJSON(data);
		//console.log(obj);
		$.each(data, function(index, element) {
			L.marker([data[index].latitude, data[index].longitude],
				{icon: L.icon({
				iconUrl: baseUrl + '/assets/img/markers/' + data[index].penanda_peta,
				iconSize: [30, 45]})}).addTo(mymap)
			.bindPopup(data[index].nama_lokasi)
			.openPopup();
        });
	}
});

// Dummy routing
L.Routing.control({
	waypoints: [
	    L.latLng(-6.60132, 106.79884),
	    L.latLng(-6.602, 106.797)
	  ],
    router: L.Routing.graphHopper('d87375c3-9d07-4fa0-9016-e0af7d7d99f5', {
    	urlParameters: {
    		vehicle: 'foot'
    	}
    })
}).addTo(mymap);