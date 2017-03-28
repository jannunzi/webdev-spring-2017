const fsc = require("fs-cheerio");
fsc.readFile("hello.xml").then(function($){
    var hello = $('hello');
    console.log(hello.text());
    console.log(hello.attr('id'));
    hello.addClass('selected');
    fsc.writeFile("hello.xml", $);
});
