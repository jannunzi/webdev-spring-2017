module.exports = function(application) {
    var app = require('../../../express');

    app.get('/wax/:applicationName/:entityName/templates/list/:templateFileName', listTemplateController);
    app.get('/wax/:applicationName/:entityName/templates/edit/:templateFileName', editTemplateController);

    var data = {};

    function listTemplateController(req, res) {
        res.setHeader('content-type', 'text/javascript');
        data.application = application;
        data.entityName = req.params.entityName;
        res.render('experiments/wax/templates/list-template', data);
    }

    function editTemplateController(req, res) {
        res.setHeader('content-type', 'text/javascript');
        data.application = application;
        data.entityName = req.params.entityName;
        res.render('experiments/wax/templates/edit-template', data);
    }
};