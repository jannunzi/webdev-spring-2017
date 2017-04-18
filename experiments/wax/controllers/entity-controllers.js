module.exports = function(application) {
    var app = require('../../../express');

    app.get('/wax/:applicationName/:entityName/controllers/list/:controllerFileName', listControllerController);
    app.get('/wax/:applicationName/:entityName/controllers/edit/:controllerFileName', editControllerController);

    var data = {};

    function listControllerController(req, res) {
        res.setHeader('content-type', 'text/javascript');
        data.application = application;
        data.entityName = req.params.entityName;
        console.log(data);
        res.render('experiments/wax/controllers/list-controller', data);
    }

    function editControllerController(req, res) {
        res.setHeader('content-type', 'text/javascript');
        data.application = application;
        data.entityName = req.params.entityName;
        console.log(data);
        res.render('experiments/wax/controllers/edit-controller', data);
    }
};