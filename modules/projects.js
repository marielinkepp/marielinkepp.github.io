//import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"

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

        // Event handlers
        /*on: {
            slideChangeTransitionEnd: function() {
                addSlideTransitionEffect();
            },
        },*/
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
    // Get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    var tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(function(tooltip) {
      tooltip.addEventListener('mouseover', function() {
        this.classList.add('viewed');
      });
    });
  });
  
  var tables = document.querySelectorAll('.toggle-open');
  tables.forEach(function(table) {
    table.addEventListener('click', function() {
      var tds = table.querySelectorAll('tbody tr td:not(.special-open)');
      tds.forEach(function(td) {
        if (td.style.display === "none") {
          td.style.display = "table-cell";
        } else {
          td.style.display = "none";
        }
      });
    });
  });
  
  var buttons = document.querySelectorAll('.button-52');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var tableId = button.getAttribute('data-table-id');
      var table = document.getElementById(tableId);
      if (table) {
        var specialTds = table.querySelectorAll('tbody tr td.special-open');
        specialTds.forEach(function(td) {
          td.style.display = "table-cell";
          setTimeout(function() {
            td.style.opacity = "1";
            td.classList.remove('special-open'); // remove the special class
          }, 100); // delay to ensure the transition happens
        });
      }
    });
  });
  
  /*let current = 0;
  const clickableItems = document.querySelectorAll('.clickable');
  
  clickableItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // If current is equal to the length of clickableItems, return early
      if (current === clickableItems.length) {
        return;
      }
  
      // Scroll the next clickable item into the center of the viewport
      clickableItems[current].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
  
      current = (current + 1) % clickableItems.length;
    });
  });*/
  
  
  // TOOLTIPS
  
  // Get all elements with the tooltip class
  var elementsWithTooltip = document.querySelectorAll('.tooltip');
  
  // Add a mouseover event listener to each element with a tooltip
  elementsWithTooltip.forEach(function(element) {
      element.addEventListener('mouseover', function() {
          // Hide all other tooltips
          elementsWithTooltip.forEach(function(otherElement) {
              if (otherElement !== element) {
                  var otherTooltip = otherElement.querySelector('.tooltiptext');
                  if (otherTooltip) {
                      otherTooltip.style.display = 'none';
                  }
              }
          });
  
          // Show the current tooltip
          var tooltip = element.querySelector('.tooltiptext');
          if (tooltip) {
              tooltip.style.display = 'block';
          }
      });
  });
  
  // Add a mouseover event listener to the body to hide all tooltips
  document.body.addEventListener('mouseover', function(e) {
      if (!e.target.classList.contains('tooltip')) {
          // Hide all tooltips when the mouse is over anything else
          var tooltips = document.querySelectorAll('.tooltiptext');
          tooltips.forEach(function(tooltip) {
              tooltip.style.display = 'none';
          });
      }
  });
  
  // JSPLUMB
  jsPlumb.ready(function() {
      function createInstance(connector, sourceAnchor, targetAnchor, dashStyle, overlays) {
          var instance = jsPlumb.getInstance({
              Connector: connector,
              PaintStyle: { strokeWidth: 2, stroke: 'black', dashstyle: dashStyle},
              Endpoint: [ "Dot", { radius: 1 } ],
              EndpointStyle: { fill: '#f00' },
              Anchors: [sourceAnchor, targetAnchor],
              Overlays: overlays
          });
  
          return instance;
      }
  
      function connectElements(instance, sourceId, targetId) {
          instance.connect({ source: sourceId, target: targetId});
      }
    
  var flowchartConnector = ["Flowchart", { stub: 30, gap: 5, cornerRadius: 10, alwaysRespectStubs: true } ]
  
  var straightConnector = ['Straight']
  
    
    // Example usage:
  var overlays = [
      [ "Arrow", { 
          location: 1, 
          id: "arrow", 
          length: 14, 
          foldback: 0.8 
      } ]
  ];
    var lvElToUtEl = createInstance(straightConnector, [1.15, 0.5, 1, 0], [0, 0.5, -1, 0], "0 0", overlays);
      connectElements(lvElToUtEl, 'lv-el', 'ut-el');
    
    var lvAuConnect = createInstance(straightConnector, [0.5, 1.25, 0, 0], [0.5, -0.25, 0, 0], "0 0");
      connectElements(lvAuConnect, 'lv-el', 'au-el');
    
    var auElToGkEl = createInstance(straightConnector, [1.15, 0.5, 1, 0], [0, 0.5, -1, 0], "0 0", overlays);
      connectElements(auElToGkEl, 'au-el', 'gk-el');
    
    var utToGk = createInstance(straightConnector, [0.5, 1.25, 0, 0], [0.5, -0.25, 0, 0], "0 0", overlays);
      connectElements(utToGk, 'ut-el', 'gk-el');
    
    var lvLaConnect = createInstance(straightConnector, [1.15, 0.5, 0, 0], [-0.1, 0.5, 0, 0], "0 0");
      connectElements(lvLaConnect, 'lv-el', 'la-el');
    
    var laToUt = createInstance(flowchartConnector, [0.75, 0, 0, 1], [0.5, 1.25, 0, 1], "0 0", overlays);
      connectElements(laToUt, 'la-el', 'ut-el');
    
      var liToLa = createInstance(flowchartConnector, [0.5, 0, 0, -1], [0.5, 0, 0, -1], "0 0", overlays);
      connectElements(liToLa, 'li-el', 'la-el');
    
    var kkToLa = createInstance(flowchartConnector, [0.5, 1, 0, 1], [0.5, 1, 0, 1], "0 0", overlays);
      connectElements(kkToLa, 'kk-el', 'la-el');
    
    var lvVkDivide = createInstance(flowchartConnector, [-0.15, 0.5, -1, 0], [-0.15, 0.5, -1, 0], "4 1", overlays);
      connectElements(lvVkDivide, 'lv-vk', 'lv-mk');
    connectElements(lvVkDivide, 'lv-vk', 'lv-ov');
    connectElements(lvVkDivide, 'lv-vk', 'lv-au');
    
   /* var la2ToGBIF = createInstance([1.15, 0.5, 1, 0], [0, 0.5, -1, 0], "0 0", overlays);
      connectElements(la2ToGBIF, 'la2-ek', 'grid-3-2');
    
    var instance11 = createInstance([1.1, 0.5, 1, 1], [-0.25, 0.5, 0, 0], "0 0", overlays);
      connectElements(instance11, 'grid-3-2', 'li-title');
    
   var vikiAPITokk = createInstance([0.5, 0.5, 1, 0], [0.5, -1, 0, 0], "0 0", overlays);
      connectElements(vikiAPITokk, 'grid-4-2', 'kk-title');
    
     var eElTokk = createInstance([-0.025, 0.5, 0, 0], [5, 0, 0, 0], "0 0", overlays);
      connectElements(eElTokk, 'grid-5-2', 'la2-liik');
    
    var lvVkDivide = createInstance([-0.15, 0.5, -1, 0], [-0.15, 0.5, -1, 0], "4 1", overlays);
      connectElements(lvVkDivide, 'lv-vk', 'lv-mk');
    connectElements(lvVkDivide, 'lv-vk', 'lv-ov');
    connectElements(lvVkDivide, 'lv-vk', 'lv-au');
    
    var lvLiiktoLa = createInstance([1.15, 0.5, 1, 0], [1.15, 0.5, 1, 0], "4 1", overlays);
      connectElements(lvLiiktoLa, 'lv-liik', 'la-lk');
    connectElements(lvLiiktoLa, 'lv-liik', 'la-ek');
    
    var lvAlgKpToGk = createInstance([1.15, 0.35, 1, 0], [1.15, 0.5, 1, 0], "4 1", overlays);
      connectElements(lvAlgKpToGk, 'lv-alg-kp', 'ut-paev');
    connectElements(lvAlgKpToGk, 'lv-alg-kp', 'ut-kuu');
    connectElements(lvAlgKpToGk, 'lv-alg-kp', 'ut-aasta');
    
    var utDateToUtNp = createInstance([0.5, 58.25, -1, 0], [0.5, 58.25, -1, 0], "4 1");
      connectElements(utDateToUtNp, 'ut-paev', 'ut-np');
    connectElements(utDateToUtNp, 'ut-kuu', 'ut-np');
    connectElements(utDateToUtNp, 'ut-aasta', 'ut-np');
    
    var instance4 = createInstance([8.65, 15, 1, 0], [1.10, 0.5, 1, 0], "0 0", overlays);
      connectElements(instance4, 'li-riik', 'gk-riik');
    
    var instance5 = createInstance([8.65, 15, 1, 0], [1.10, 0.5, 1, 0], "0 0", overlays);
      connectElements(instance5, 'li-hk', 'gk-hk');
    
    var instance6 = createInstance([8.65, 15, 1, 0], [1.10, 0.5, 1, 0], "0 0", overlays);
      connectElements(instance6, 'li-selts', 'gk-selts');
    
    var instance7 = createInstance([8.65, 15, 1, 0], [1.10, 0.5, 1, 0], "0 0", overlays);
      connectElements(instance7, 'li-sk', 'gk-sk');
    
    var instance8 = createInstance([8.65, 15, 1, 0], [1.10, 0.5, 1, 0], "0 0", overlays);
      connectElements(instance8, 'li-pk', 'gk-pk');
    
    var instance9 = createInstance([8.65, 15, 1, 0], [1.10, 0.5, 1, 0], "0 0", overlays);
      connectElements(instance9, 'li-klass', 'gk-klass');*/
      
  });
  jsPlumb.ready(function() {
      var instance = jsPlumb.getInstance();
  
      instance.connect({
          source: 'element1',  // id of the source element
          target: 'element2',  // id of the target element
          connector: ['Straight']  // use a straight line
      });
  });