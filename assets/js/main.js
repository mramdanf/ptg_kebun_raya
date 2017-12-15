var mymap = L.map('mapid').setView([-6.5982,106.7995], 16);

// Loading map from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXJhbWRhbmYiLCJhIjoiY2piNmdqdW1sOHd2dzMzcnprcDI2Y2ljbCJ9.MaYYfsvruJWQMFYMC6h0_w'
}).addTo(mymap);

// Dummy routing
L.marker([-6.60132, 106.79884]).addTo(mymap);
L.marker([-6.60027, 106.79872]).addTo(mymap);
L.Routing.control({
	waypoints: [
	    L.latLng(-6.60132, 106.79884),
	    L.latLng(-6.60027, 106.79872)
	  ],
    router: L.Routing.graphHopper('d87375c3-9d07-4fa0-9016-e0af7d7d99f5', {
    	urlParameters: {
    		vehicle: 'foot'
    	}
    })
}).addTo(mymap);

/*mymap.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
	var radius = 500;

	L.marker(e.latlng).addTo(mymap)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();

	L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);
mymap.locate({maxZoom: 16});

function onLocationError(e) {
	alert(e.message);
}
mymap.on('locationerror', onLocationError);

function locate() {
	mymap.locate({setView: true, maxZoom: 16});
}

// call locate every 3 seconds... forever
setInterval(locate, 3000);*/


var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

var gedung = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/gedung.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var gerbang = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/gerbang.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var jembatan = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/jembatan.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var laboratorium = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/laboratorium.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var penginapan = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/penginapan.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var museum = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/museum.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var taman = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/taman.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var masjid = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/masjid.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var toko = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/toko.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var tugu = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/tugu.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var kafe = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/kafe.png',

	iconSize:     [40, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var bungaBangkai = L.icon({
	iconUrl: baseUrl + '/assets/img/markers/bunga_bangkai.png',

	iconSize:     [50, 70], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

$.ajax({
	url : baseUrl + '/kebun_raya/getAllContent',
	type : 'GET',
	dataType: 'json',
	success : function(data){
		//var obj = jQuery.parseJSON(data);
		//console.log(obj);
		$.each(data, function(index, element) {
			var icon;
			if(data[index].nama_kategori == 'Gedung') {
				L.marker([data[index].latitude, data[index].longitude], {icon: gedung}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Gerbang') {
				L.marker([data[index].latitude, data[index].longitude], {icon: gerbang}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Jembatan') {
				L.marker([data[index].latitude, data[index].longitude], {icon: jembatan}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Laboratorium') {
				L.marker([data[index].latitude, data[index].longitude], {icon: laboratorium}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Penginapan') {
				L.marker([data[index].latitude, data[index].longitude], {icon: penginapan}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Museum') {
				L.marker([data[index].latitude, data[index].longitude], {icon: museum}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Taman') {
				L.marker([data[index].latitude, data[index].longitude], {icon: taman}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Masjid') {
				L.marker([data[index].latitude, data[index].longitude], {icon: masjid}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Toko') {
				L.marker([data[index].latitude, data[index].longitude], {icon: toko}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Tugu') {
				L.marker([data[index].latitude, data[index].longitude], {icon: tugu}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Kafe') {
				L.marker([data[index].latitude, data[index].longitude], {icon: kafe}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
			else if(data[index].nama_kategori == 'Bunga Bangkai') {
				L.marker([data[index].latitude, data[index].longitude], {icon: bungaBangkai}).addTo(mymap)
				.bindPopup(data[index].nama_lokasi)
				.openPopup();
			}
        });
	}
});