module.exports = function (app) {
    var userModel = require('./models/user/user.model.server')();
    require('./services/user.service.server')(app, userModel);
    // TODO: create the services for the other entities: website, page, widget
};