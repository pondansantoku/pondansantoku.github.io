marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    langPrefix: ''
});

pokapoka = {};
pokapoka.replaceMarkdown = function(){
    
    // use markdown.js
    var innerDom = $('.post-body.entry-content');
    var markedHtml = marked(innerDom.text());
    innerDom.html(markedHtml);

    // use highlight.js
    hljs.initHighlightingOnLoad();
}