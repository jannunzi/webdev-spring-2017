var q = require('q');

module.exports = function () {
    var mongoose = require('mongoose');

    // var userModel = require('./user.model.server')();

    var websiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.Types.ObjectId, ref: 'ExperimentsMongooseWamUser'},
        name: String,
        created: {type: Date, default: Date.now}
    }, {collection: 'experiments.mongoose.wam.website'});

    var websiteModel = mongoose.model('ExperimentsMongooseWamWebsite', websiteSchema);

    var api = {
        findAllWebsitesForUser: findAllWebsitesForUser
    };
    return api;

    function findAllWebsitesForUser(userId) {
        var deferred = q.defer();
        websiteModel
            .find({_user: userId}, function (err, websites) {
                deferred.resolve(websites);
            });
        return deferred.promise;
    }
};