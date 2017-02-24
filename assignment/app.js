module.exports = function (app) {
    require('./services/user.service.server')(app);
    // TODO: create the services for the other entities: website, page, widget
};