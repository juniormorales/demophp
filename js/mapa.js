(function(){
    "use strict";

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){

          //MAPA
        var map = L.map('mapa').setView([-12.0534116,-77.0855405,9], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-12.0534116,-77.0855405,9]).addTo(map)
        .bindPopup('PizzaRaul')
        .openPopup();






    });//DOM CONTENT LOADED
})();
