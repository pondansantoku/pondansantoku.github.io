document.addEventListener("DOMContentLoaded", function(event) {
    marked.setOptions({
        langPrefix: ''
    });
    var innerDom = $('.post-body.entry-content');
    var markedHtml = marked(innerDom.innerHTML);
    innerDom.innerHTML = markedHtml;
  });
