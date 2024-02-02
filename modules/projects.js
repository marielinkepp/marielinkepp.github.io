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

$(document).ready(function() {
  if ($('th').is(':visible')) {
    $('table').each(function() {
      var color = $(this).data('bgcolor');
      $(this).css('background', color);
    });
  }
});

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
    var isAnyTdVisible = Array.from(tds).some(function(td) {
      return td.style.display !== "none";
    });

    // If any td is not visible, set the background color to white
    if (!isAnyTdVisible) {
      table.style.background = "white";
    }

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

 /* var lvElToUtEl = createInstance(straightConnector, [1.15, 0.5, 1, 0], [0, 0.5, -1, 0], "0 0", overlays);
    connectElements(lvElToUtEl, 'lv-el', 'ut-el');*/
  
  /*var lvAuConnect = createInstance(straightConnector, [0.5, 1.25, 0, 0], [0.5, -0.25, 0, 0], "0 0");
    connectElements(lvAuConnect, 'lv-el', 'au-el');*/
  
  /*var auElToGkEl = createInstance(straightConnector, [1.15, 0.5, 1, 0], [0, 0.5, -1, 0], "0 0", overlays);
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


/* author: kent Chang begins */
class PRESTimeline {
  constructor(target, color) {
    // this.__process_stylesheet(document.styleSheets[0]);

    this.base = target
    this.color = color
    // console.log(this.color)
    this.periodContainer = $(this.base).find(".periods-container")
    this.cardContainer = $(this.base).find(".cards-container")
    this.timelineNodeContainer = $(this.base).find(
      ".timeline-container .timeline"
    )
    // this.activePeriod = $(this.base).find('.periods-container section.active')
    this._parseData()
    this._initialColor()
    this._generateTimeline()
    this._setStateClasses()
    this._assignBtn()
    this._adjustPeriodContainer()
    this._adjustCardContainer()
    // console.log(this.cardData)
  }

  _parseData() {
    let base = this.base
    let periods = $(base).find(".periods-container section")
    for (let section of periods) {
      section.period = $(section).attr("period")
      section.index = $(section).index()
    }
    // console.log(periods)
    this.periodData = periods
    let data = $(base).find(".cards-container section")
    // console.log(data)
    for (let section of data) {
      section.period = $(section).attr("period")
      section.index = $(section).index()
    }
    // console.log(data)
    this.cardData = data
    // #assign initial entry point (active items)
    this.activePeriod = this.periodData[0]
    this.activePeriodIndex = 0
    this.activeCard = this.cardData[0]
    this.activeCardIndex = 0
  }

  _setStateClasses() {
    // # periods
    $(this.base)
      .find(".periods-container section.active")
      .removeClass("active")
    $(this.base)
      .find(".periods-container section.prev")
      .removeClass("prev")
    $(this.base)
      .find(".periods-container section.next")
      .removeClass("next")
    // console.log("setclass: " + this.activePeriod.index)
    $(this.activePeriod).addClass("active")
    // console.log(this.activePeriod.index)
    // this.activePeriodIndex = this.activePeriod.index
    if ($(this.activePeriod).prev().length != 0) {
      $(this.activePeriod)
        .prev()
        .addClass("prev")
      $(this.base)
        .find(".periods-container .btn-back")
        .removeClass("hide")
    } else {
      $(this.base)
        .find(".periods-container .btn-back")
        .addClass("hide")
    }
    if ($(this.activePeriod).next().length != 0) {
      $(this.activePeriod)
        .next()
        .addClass("next")
      $(this.base)
        .find(".periods-container .btn-next")
        .removeClass("hide")
    } else {
      $(this.base)
        .find(".periods-container .btn-next")
        .addClass("hide")
    }

    // ## cards
    $(this.base)
      .find(".cards-container section.active")
      .removeClass("active")
    $(this.base)
      .find(".cards-container section.prev")
      .removeClass("prev")
    $(this.base)
      .find(".cards-container section.next")
      .removeClass("next")
    $(this.activeCard).addClass("active")
    // this.activeCardIndex - this.activeCard.index
    if ($(this.activeCard).prev().length != 0) {
      $(this.activeCard)
        .prev()
        .addClass("prev")
    }
    if ($(this.activeCard).next().length != 0) {
      $(this.activeCard)
        .next()
        .addClass("next")
    }

    // ## timeline
    $(this.base)
      .find(".timeline li.active")
      .removeClass("active")
    // let findNode = $(this.base).find('.timeline ol li')[this.activeCard.index]
    $(this.timelineData[this.activeCard.index]).addClass("active")

    let timelineB = $(this.base).find(".timeline-container .btn-back")
    let timelineN = $(this.base).find(".timeline-container .btn-next")
    // console.log($(timelineN))
    if (this.activeCardIndex === 0) {
      timelineB.addClass("hide")
    } else {
      timelineB.removeClass("hide")
    }
    if (this.activeCardIndex >= this.cardData.length - 1) {
      timelineN.addClass("hide")
    } else {
      timelineN.removeClass("hide")
    }
  }
  // ## timeline generater
  _generateTimeline() {
    // ## create node list
    let htmlWrap = "<ol></ol>"
    $(this.timelineNodeContainer).append(htmlWrap)
    let wrap = $(this.timelineNodeContainer).find("ol")
    let numNode = this.cardData.length
    for (let i = 0; i < numNode; i++) {
      let c = this.cardData[i].color
      let el = wrap.append(
        '<li class="' +
          this.cardData[i].period +
          '" style="border-color: ' +
          c +
          '"></li>'
      )
    }
    // ## width of timeline
    let nodeW = 200
    wrap.css("width", nodeW * numNode - 16)
    let nodeList = $(this.base).find(".timeline ol li")
    this.timelineData = nodeList
  }
  // ## assign button actions
  _assignBtn() {
    let periodPrev = $(this.base).find(".periods-container .btn-back")
    let periodNext = $(this.base).find(".periods-container .btn-next")
    periodPrev.click(() => {
      if (this.activePeriodIndex > 0) {
        // console.log('prev')
        this.activePeriodIndex -= 1
        this.activePeriod = this.periodData[this.activePeriodIndex]
        this._chainActions("period")
        this._setStateClasses()
      }
      this._adjustPeriodContainer()
    })
    periodNext.click(() => {
      if (this.activePeriodIndex < this.periodData.length - 1) {
        // console.log('next' + this.activePeriodIndex)
        this.activePeriodIndex += 1
        this.activePeriod = this.periodData[this.activePeriodIndex]
        this._chainActions("period")
        this._setStateClasses()
      }
      this._adjustPeriodContainer()
    })
    let timelinePrev = $(this.base).find(".timeline-container .btn-back")
    let timelineNext = $(this.base).find(".timeline-container .btn-next")
    timelinePrev.click(() => {
      if (this.activeCardIndex > 0) {
        this.activeCardIndex -= 1
        this.activeCard = this.cardData[this.activeCardIndex]
        this._chainActions("timeline")
        this._setStateClasses()
      }
      this._adjustCardContainer()
      this._adjustPeriodContainer()
    })
    timelineNext.click(() => {
      if (this.activeCardIndex < this.cardData.length - 1) {
        this.activeCardIndex += 1
        this.activeCard = this.cardData[this.activeCardIndex]
        this._chainActions("timeline")
        this._setStateClasses()
      }
      this._adjustCardContainer()
      this._adjustPeriodContainer()
    })

    // ## assign each timeline li
    for (let i = 0; i < this.timelineData.length; i++) {
      $(this.timelineData[i]).click(() => {
        this.activeCardIndex = this.cardData[i].index
        this.activeCard = this.cardData[this.activeCardIndex]
        this._chainActions("timeline")
        this._setStateClasses()
        this._adjustCardContainer()
        this._shiftTimeline()
      })
    }
  }
  // ## color ##
  _initialColor() {
    for (let i = 0; i < this.periodData.length; i++) {
      let p = this.periodData[i].period
      this.periodData[i].color = this.color[p]
      let temp = this.periodData[i]
      $(temp).css("border-color", temp.color)
      $(temp)
        .find(".year")
        .css("color", temp.color)

      // ## color for timeline items, this part utilize the period name as class which will be add to the li later

      // ### cross browser bug fix
      let sbstyle = document.createElement("style")
      document.head.appendChild(sbstyle)
      // let sheet = document.styleSheets[0]
      sbstyle.sheet.insertRule(
        "li." +
          p +
          ".active { background-color: " +
          this.color[p] +
          " !important } ",
        0
      )
      sbstyle.sheet.insertRule(
        "li." + p + "::before { background-color: " + this.color[p] + " } ",
        0
      )
      sbstyle.sheet.insertRule(
        "li." + p + "::after { background-color: " + this.color[p] + " } ",
        0
      )
    }
    for (let i = 0; i < this.cardData.length; i++) {
      let p = this.cardData[i].period
      this.cardData[i].color = this.color[p]
      let temp = this.cardData[i]
      $(temp).css("border-color", temp.color)
      $(temp)
        .find(".year")
        .css("color", temp.color)
    }
  }

  _adjustPeriodContainer() {
    let activeH = $(this.activePeriod).outerHeight()
    $(this.periodContainer).height(activeH)
    console.log("top adjusted")
  }
  _adjustCardContainer() {
    let activeH = $(this.activeCard).outerHeight() + 24
    $(this.cardContainer).height(activeH)
    console.log("bot adjusted")
  }
  _shiftTimeline() {
    // #### We need to fix this part if using this component in different sizes ####
    let timelineW = $(this.base)
      .find(".timeline-container")
      .outerWidth()
    let timelinePadding = 210
    let timelineCenter = 300
    let liWidth = 16
    let activeNodeX = $(this.timelineData[this.activeCardIndex]).position().left
    let finalPos = -activeNodeX + timelinePadding
    $(this.timelineNodeContainer).css("left", finalPos)
    console.log(activeNodeX)
  }
  _chainActions(state) {
    switch (state) {
      case "period":
        console.log("period")
        if (this.activePeriod.period != this.activeCard.period) {
          // ## find the closest li with the active period
          let ta = []
          for (let i = 0; i < this.cardData.length; i++) {
            let temp = this.cardData[i]
            if (this.activePeriod.period === temp.period) ta.push(temp)
          }
          this.activeCard = ta[0]
          this.activeCardIndex = ta[0].index
        }

        break
      case "timeline":
        console.log("timeline")
        if (this.activeCard.period != this.activePeriod.period) {
          let ta
          for (let i = 0; i < this.periodData.length; i++) {
            let temp = this.periodData[i]
            if (this.activeCard.period === temp.period) ta = temp
          }
          this.activePeriod = ta
          this.activePeriodIndex = ta.index
        }

        break
    }
    this._shiftTimeline()
    this._adjustCardContainer()
  }
}

// ## document load ##

$(document).ready(function() {
  let colorcode = {
    period1: "#fec541",
    period2: "#ff9933",
    period3: "#36d484",
    period4: "#32ccf4"
  }
  let timeline = new PRESTimeline($("#this-timeline"), colorcode)
})
/* author: kent Chang ends */