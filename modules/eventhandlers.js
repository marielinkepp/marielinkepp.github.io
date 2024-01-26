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
            var href = this.getAttribute('href'); // Get the href of the link

            // If the href is '#' or the link is a Swiper button, don't prevent the default action and don't fetch any content
            /*if (href === '#' || this.classList.contains('swiper-button-next') || this.classList.contains('swiper-button-prev')) {
                return;
            }*/

            event.preventDefault(); // Prevent the default action

            // Load the template
            fetch(href)
                .then(response => response.text())
                .then(data => {
                    // Get the main element
                    const main = document.getElementById('main');

                    // Replace the content of the main element
                    main.innerHTML = data;
                    nav.style.display = "none"; // Close the navigation menu

                    // Add an entry to the history stack and change the URL
                    history.pushState({ href: href }, '', href);

                    //initSwiper();
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

export function handleTabOpen(tabLinks) {
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function() {
            var tabName = this.getAttribute('data-tab');
            var tabContent = document.getElementById(tabName);
            tabContent.style.display = "block";
        });
    });
}