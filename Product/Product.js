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
