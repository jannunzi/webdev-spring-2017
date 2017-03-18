module.exports = function (app) {
    require('./user.service.server')(app);
    require('./website.service.server')(app);
};