import {handleNavMenuDropdownClick, handleLinkClick, handleCollapsibleClick} from "./eventhandlers.js";

var nav; // Define nav variable in the global scope

window.addEventListener('DOMContentLoaded', (event) => {
    var navMenuDropdown = document.getElementById("nav-menu-dropdown");
    var nav = document.getElementById("nav-links");

    handleNavMenuDropdownClick(nav, navMenuDropdown);

    // Add event listeners to links
    var links = document.querySelectorAll('nav a');
    handleLinkClick(nav, links);

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction', // This will display the pagination as "1/5", "2/5", etc.
        },
    });

    // Select all elements with the class 'collapsible'
    var collapsibles = document.querySelectorAll('.collapsible');
    handleCollapsibleClick(collapsibles);
});

window.addEventListener('popstate', function(event) {
    if (event.state) {
        fetch(event.state.href)
            .then(response => response.text())
            .then(data => {
                document.getElementById('main').innerHTML = data;
            });
    }
});