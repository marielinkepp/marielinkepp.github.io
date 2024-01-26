import {handleNavMenuDropdownClick, handleLinkClick, handleCollapsibleClick} from "./eventhandlers.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var nav; // Define nav variable in the global scope

export function initSwiper() {
    return new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    var navMenuDropdown = document.getElementById("nav-menu-dropdown");
    var nav = document.getElementById("nav-links");

    handleNavMenuDropdownClick(nav, navMenuDropdown);

    var swiper = initSwiper();

    // Add event listeners to links
    //var links = document.querySelectorAll('nav a');
    //handleLinkClick(nav, links);

    // Select all elements with the class 'collapsible'
    var collapsibles = document.querySelectorAll('.collapsible');
    handleCollapsibleClick(collapsibles);
});

window.addEventListener('popstate', function(event) {
    if (event.state) {
        fetch(event.state.href)
            .then(response => response.text())
            .then(data => {
                // Get the main element
                const main = document.getElementById('main');

                // Replace the content of the main element
                main.innerHTML = data;
            });
    }
});