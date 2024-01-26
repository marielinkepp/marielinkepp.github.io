import {handleNavMenuDropdownClick} from "./eventhandlers.js";

var nav; // Define nav variable in the global scope

window.addEventListener('DOMContentLoaded', (event) => {
    var navMenuDropdown = document.getElementById("nav-menu-dropdown");
    var nav = document.getElementById("nav-links");

    handleNavMenuDropdownClick(nav, navMenuDropdown);
});