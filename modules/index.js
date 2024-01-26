window.addEventListener('DOMContentLoaded', (event) => {
    var navMenuDropdown = document.getElementById("nav-menu-dropdown");
    navMenuDropdown.addEventListener("click", function() {
        var nav = document.getElementById("nav-links");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });

    // Add event listeners to links
    var links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            var href = this.getAttribute('href'); // Get the href of the link

            // Load the template
            fetch(href)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('main').innerHTML = data;
                });
        });
    });
});