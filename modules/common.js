function applyTemplate(templateName) {

    const content = fetch(`./templates/${templateName}.html`)
        .then(response => response.text());
  
    document.getElementById('content').innerHTML = content;
  }