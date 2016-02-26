marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    langPrefix: ''
    // highlight: function(code, lang) {
    //     // hogehoge
    //     return code;
    // }
});

pokapoka = {};
pokapoka.replaceMarkdown = function(){
    var innerDom = $('.post-body.entry-content');
    var markedHtml = marked(innerDom.text());
    innerDom.html(markedHtml);
}