module.exports = function(application) {
    var app = require('../../../express');

    app.get('/wax/:applicationName/:entityName/service/:clientServiceJavaScriptFileName', entityService);

    var data = {};

    function entityService(req, res) {
        res.setHeader('content-type', 'text/javascript');
        data.application = application;
        data.entityName = req.params.entityName;
        console.log(data);
        res.render('experiments/wax/services/entity-services', data);
    }
};