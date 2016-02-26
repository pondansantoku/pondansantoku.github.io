marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    langPrefix: '',
    // highlight: function(code, lang) {
    //     // hogehoge
    //     return code;
    // }
});

document.addEventListener("DOMContentLoaded", function(event) {
    var innerDom = $('.post-body.entry-content');
    var markedHtml = marked(innerDom.innerHTML);
    innerDom.innerHTML = markedHtml;
  });
