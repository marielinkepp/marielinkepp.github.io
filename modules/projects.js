import {handleNavMenuDropdownClick, handleCollapsibleClick} from "./eventhandlers.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var nav; // Define nav variable in the global scope

function initSwiper() {
    return new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Enable pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    var navMenuDropdown = document.getElementById("nav-menu-dropdown");
    var nav = document.getElementById("nav-links");

    handleNavMenuDropdownClick(nav, navMenuDropdown);

    // Wait for the entire page to load before initializing the Swiper
    window.addEventListener('load', (event) => {
        var swiper = initSwiper();
    });

    // Select all elements with the class 'collapsible'
    var collapsibles = document.querySelectorAll('.collapsible');
    handleCollapsibleClick(collapsibles);
});