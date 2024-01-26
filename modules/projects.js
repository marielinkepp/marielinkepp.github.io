import {handleNavMenuDropdownClick, handleCollapsibleClick} from "./eventhandlers.js";

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

    // Select all elements with the class 'collapsible'
    var collapsibles = document.querySelectorAll('.collapsible');
    handleCollapsibleClick(collapsibles);
});