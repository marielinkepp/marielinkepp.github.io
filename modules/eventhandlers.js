export function handleNavMenuDropdownClick(nav, navMenuDropdown) {
    navMenuDropdown.addEventListener("click", function() {
        if (nav.style.display === "none") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });
}

export function handleLinkClick(nav, links) {
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            var href = this.getAttribute('href'); // Get the href of the link

            // Load the template
            fetch(href)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('main').innerHTML = data;
                    nav.style.display = "none"; // Close the navigation menu
                });
        });
    });
}

export function handleCollapsibleClick(collapsibles) {
    collapsibles.forEach(collapsible => {
        // Get the content of the collapsible
        var content = collapsible.nextElementSibling;

        // Set the content to be hidden by default
        content.style.display = "none";

        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
}