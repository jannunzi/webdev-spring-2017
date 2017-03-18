module.exports = function (app) {

    var model = require('./website.model.server')();
    // website services
    app.post('/api/experiments/mongoose/wam/user/:userId/website', createWebsiteForUser);
    app.get('/api/experiments/mongoose/wam/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/experiments/mongoose/wam/website/:websiteId', findWebsiteById);
    app.put('/api/experiments/mongoose/wam/website/:websiteId', updateWebsite);
    app.delete('/api/experiments/mongoose/wam/website/:websiteId', deleteWebsite);

    function createWebsiteForUser(req, res) {
    }
    function findAllWebsitesForUser(req, res) {
        model
            .findAllWebsitesForUser(req.params.userId)
            .then(function (websites) {
                res.json(websites);
            });
    }
    function findWebsiteById(req, res) {
    }
    function updateWebsite(req, res) {
    }
    function deleteWebsite(req, res) {
    }
};