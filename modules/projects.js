import {handleNavMenuDropdownClick, handleCollapsibleClick, handleTabOpen} from "./eventhandlers.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var nav; // Define nav variable in the global scope

function initSwiper() {
    return new Swiper('.swiper-container', {
        // Fade effect
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // Optional parameters
        direction: 'horizontal',
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

    var tablinks = document.querySelectorAll('.tablinks');
    handleTabOpen(tablinks);
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }