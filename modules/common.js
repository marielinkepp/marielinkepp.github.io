function applyTemplate(templateName) {
    fetch(`./templates/${templateName}.html`)
        .then(response => response.text())
        .then(content => {
            document.getElementById('content').innerHTML = content;
        });
}