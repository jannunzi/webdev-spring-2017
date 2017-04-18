var app = require('../../express');
app.get('/lecture-morning/dynamic-angular/index.html', indexController);
app.get('/lectures/dynamic-angular/app.js', appController);

function appController(req, res) {
    var data = {
        appName: 'movieApp'
    };
    res.setHeader('content-type', 'text/javascript');
    res.render('lecture-morning/dynamic-angular/app.ejs', data);
}
function indexController(req, res) {
    var data = {
        appName: 'movieApp'
    };
    res.render('lecture-morning/dynamic-angular/index.ejs', data);
}