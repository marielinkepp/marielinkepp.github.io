//import {navigateTo} from "./common.js";

function toggleNav() {
    var nav = document.getElementById("nav-links");
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
  }
  
/*selectContent();

function selectContent() {
    const pageId = new URLSearchParams(window.location.search)
        .get('page') || 'index';

    const itemId = new URLSearchParams(window.location.search).get('id');

    console.log(pageId);
    console.log(itemId);

    //applyTemplate(pageId);
    navigateTo('?page=' + pageId);

}*/