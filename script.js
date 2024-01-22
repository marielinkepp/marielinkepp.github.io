function Collapse() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

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

function loadTableFromCSV(container, csvUrl) {
  $.ajax({
      url: csvUrl,
      dataType: "text",
      success: function(data) {
          var csvData = data.split(/\r?\n|\r/);
          var table = '<table>';
          for (var count = 0; count < csvData.length; count++) {
              var cellData = csvData[count].split(",");
              table += '<tr>';
              for (var cellCount = 0; cellCount < cellData.length; cellCount++) {
                  if (count === 0) {
                      table += '<th>' + cellData[cellCount] + '</th>';
                  } else {
                      table += '<td>' + cellData[cellCount] + '</td>';
                  }
              }
              table += '</tr>';
          }
          table += '</table>';
          container.html(table);
      }
  });
}

$(document).ready(function() {
  $('.tableContainer').each(function() {
      var container = $(this);
      var csvUrl = container.data('csv-url');
      loadTableFromCSV(container, csvUrl);
  });
});

window.onload = Collapse;

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();