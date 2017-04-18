var app = require('../express');

app.get('/wax/:applicationName', handleRoot);
app.get('/wax/:applicationName/:entityName/*', handleAllEntities);
app.get('/wax/:applicationName/*', handleAllFiles);

var application = null;
var extensionToContentTypeMap = {
    'html': 'text/html',
    'js': 'text/javascript'
};

function handleAllEntities(req, res) {
    application = getApplication(req);
    var entityName = req.params.entityName;
    var filePath = req.params[0];
    var lastPeriodIndex = filePath.lastIndexOf('.');
    var lastSlashIndex = filePath.lastIndexOf('/');
    if(lastPeriodIndex > -1) {
        var extention = filePath.substr(lastPeriodIndex + 1);
        res.setHeader('content-type', extensionToContentTypeMap[extention]);
        filePath = filePath.substr(0, lastPeriodIndex);
    }
    if(lastSlashIndex > -1) {
        filePath = filePath.substr(0, lastSlashIndex);
    }
    filePath = 'wax/' + filePath;
    var data = {
        application: application,
        entity: application.entities[entityName],
        entityName: entityName
    };
    res.render(filePath, data);
}

function handleRoot(req, res) {
    req.params[0] = 'index.html';
    handleAllFiles(req, res);
}

function handleAllFiles(req, res) {
    application = getApplication(req);
    var filePath = req.params[0];
    var lastPeriodIndex = filePath.lastIndexOf('.');
    if(lastPeriodIndex > -1) {
        var extention = filePath.substr(lastPeriodIndex + 1);
        res.setHeader('content-type', extensionToContentTypeMap[extention]);
        filePath = filePath.substr(0, lastPeriodIndex);
    }
    filePath = 'wax/' + filePath;
    var data = {
        application: application
    };
    res.render(filePath, data);
}

function getApplication(req) {
    console.log('getApplication');
    if (application != null && application.name == req.params.applicationName) {
        return application;
    }
    var applicationName = req.params.applicationName;
    console.log(applicationName);
    application = require('./applications/'+applicationName+'.json');
    return application;
}
