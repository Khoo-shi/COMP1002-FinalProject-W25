document.addEventListener("DOMContentLoaded", function () {
    let navbarDiv = document.getElementById("navbar");

    if (!navbarDiv) {
        console.error("Navbar div not found in index.html");
        return;
    }

    fetch("Navbar/navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarDiv.innerHTML = data;
            loadNavbarScript();
        })
        .catch(error => console.error("Error loading navbar:", error));
});


function loadNavbarScript() {
    let script = document.createElement("script");
    script.src = "Navbar/navbar.js";
    document.body.appendChild(script);
}
