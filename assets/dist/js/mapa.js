var map = L.map('map').setView([-23.180203, -50.6678355], 13.49);

var redIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data © OpenStreetMap'
}).addTo(map);

// Loc Central
L.marker([-23.1795444, -50.6539255], {icon: redIcon})
.addTo(map)
.bindPopup("Templo Central").openPopup();

// Loc Sibim
L.marker([-23.1650895, -50.6725095], {icon: redIcon})
.addTo(map)
.bindPopup("Templo Sibim");

// Loc Santa Terezinha
L.marker([-23.1932551, -50.6412189], {icon: redIcon})
.addTo(map)
.bindPopup("Templo Santa Terezinha");

// Loc Vila Nova
L.marker([-23.1845587, -50.6649454], {icon: redIcon})
.addTo(map)
.bindPopup("Templo Vila Nova");

// Loc Pérola
L.marker([-23.1756381,-50.6331584], {icon: redIcon})
.addTo(map)
.bindPopup("Templo Pérola");

// Loc Congonhas
L.marker([-23.2057403,-50.7247724], {icon: redIcon})
.addTo(map)
.bindPopup("Templo Congonhas");
