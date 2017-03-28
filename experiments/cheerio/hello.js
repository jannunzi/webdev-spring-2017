var fs = require('fs');
var cheerio = require('cheerio');
var $ = cheerio.load(fs.readFileSync('hello.xml'));
var hello = $('hello');
console.log(hello.text());
console.log(hello.attr('id'));