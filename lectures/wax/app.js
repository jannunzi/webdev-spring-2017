var app = require('../../express');

app.get('/wax/:applicationName/:entityName/*', handleAllEntities);
app.get('/wax/:applicationName/*', handleAllRequests);

var extensionToContentTypeMap = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.ejs': 'text/html'
};

function handleAllEntities(req, res) {
    var applicationName = req.params.applicationName;
    var entityName = req.params.entityName;
    var filePath = req.params[0];
    filePath = 'lecture-morning/wax/' + filePath;
    var lastPeriodIndex = filePath.lastIndexOf('.');
    var lastSlashIndex = filePath.lastIndexOf('/');
    var extension = filePath.substr(lastPeriodIndex);
    res.setHeader('content-type', extensionToContentTypeMap[extension])
    filePath = filePath.substr(0, lastPeriodIndex);
    filePath = filePath.substr(0, lastSlashIndex);
    console.log(filePath);
    var application = require('./applications/'+applicationName+'.json');
// http://localhost:3000/wax/movieApp/movieApp/movie/templates/list/movie-list.view.client.html
    var data = {
        application: application,
        entityName: entityName,
        entity: application.entities[entityName]
    };

    res.render(filePath, data);
}

function handleAllRequests(req, res) {
    var applicationName = req.params.applicationName;
    var filePath = req.params[0];
    filePath = 'lecture-morning/wax/' + filePath;
    var lastPeriodIndex = filePath.lastIndexOf('.');
    var extension = filePath.substr(lastPeriodIndex);
    res.setHeader('content-type', extensionToContentTypeMap[extension])
    filePath = filePath.substr(0, lastPeriodIndex);
    var application = require('./applications/'+applicationName+'.json');

    var data = {
        application: application
    };

    res.render(filePath, data);
}