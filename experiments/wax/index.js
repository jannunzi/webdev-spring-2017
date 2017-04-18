var app = require('../../express');

var application = require('./applications/movieApp.json')

app.get('/wax/:appName/app.js', appJs);
app.get('/wax/:appName/config.js', configJs);
app.get('/wax/:appName/index.html', indexHtml);
app.get('/wax/:appName/', indexHtml);

var data = {};

module.exports = application;

function indexHtml(req, res) {
    var appName = req.params.appName;
    application = require('./applications/'+appName+'.json');
    data.application = application;
    res.render('experiments/wax/index', data);
}

function appJs(req, res) {
    res.setHeader('content-type', 'text/javascript');
    res.render('experiments/wax/app', data);
}

function configJs(req, res) {
    res.setHeader('content-type', 'text/javascript');
    res.render('experiments/wax/config', data);
}