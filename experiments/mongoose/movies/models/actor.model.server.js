module.exports = function () {
    var q = require('q');
    var mongoose = require('mongoose');
    var actorSchema = mongoose.Schema({
        name: String
    }, {collection: 'experiments.mongoose.movies.actor'});
    var actorModel = mongoose.model('ExperimentMongooseMovies', actorSchema);

    var api = {
        createActor: createActor,
        findAllActors: findAllActors
    };
    return api;

    function findAllActors() {
        var deferred = q.defer();
        actorModel.find(function (err, actors) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(actors);
            }
        });
        return deferred.promise;
    }

    function createActor(actor) {
        var deferred = q.defer();
        actorModel.create(actor, function (err, actor) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(actor);
            }
        });
        return deferred.promise;
    }
};