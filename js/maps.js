document.addEventListener('DOMContentLoaded', function() {
    //MAPAS
    var map = L.map('mapa').setView([-28.471346, -65.80413], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-28.471346, -65.80413]).addTo(map)
        .bindPopup('GDLWebCam 2021 <br> Boletos Disponibles')
        .openPopup()

})