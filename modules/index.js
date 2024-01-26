window.addEventListener('DOMContentLoaded', (event) => {
    var navMenuDropdown = document.getElementById("nav-menu-dropdown");
    console.log(navMenuDropdown);
    navMenuDropdown.addEventListener("click", function() {
        console.log(True);
        var nav = document.getElementById("nav-links");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });
});