document.addEventListener("DOMContentLoaded", function () {
    let navbarDiv = document.getElementById("navbar");

    if (!navbarDiv) {
        console.error("Navbar div not found!");
        return;
    }

    fetch("../Navbar/navbar.html") 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            navbarDiv.innerHTML = data;
            attachNavbarScript();
        })
        .catch(error => console.error("Error loading navbar:", error));
});

function attachNavbarScript() {
    let script = document.createElement("script");
    script.src = "../Navbar/navbar.js";  
    script.type = "text/javascript";
    document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([42.364506, -71.038887], 13); // Boston, MA

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([42.364506, -71.038887]).addTo(map)
        .bindPopup("Our Location")
        .openPopup();
});

