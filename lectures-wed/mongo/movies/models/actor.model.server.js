module.exports = function (model) {
    var q = require('q');
    var mongoose = require('mongoose');
    var actorSchema = require('./actor.schema.server.js')();

    var actorModel = mongoose.model('LecturesWedMongoMoviesActor', actorSchema);

    var api = {
        createActor: createActor,
        findAllActors: findAllActors,
        deleteActor: deleteActor,
        addMovie: addMovie,
        deleteMovie: deleteMovie
    };
    return api;

    function deleteMovie(actorId, movieId) {
        var deferred = q.defer();
        actorModel
            .findById(actorId, function (err, actor) {
                var index = actor.movies.indexOf(movieId);
                actor.movies.splice(index, 1);
                actor.save();
                deferred.resolve(actor);
            });
        return deferred.promise;
    }

    function addMovie(actorId, movieId) {
        var deferred = q.defer();
        actorModel
            .findById(actorId, function (err, actor) {
                actor.movies.push(movieId);
                actor.save();
                deferred.resolve(actor);
        });
        return deferred.promise;
    }
    
    function deleteActor(actorId) {
        var deferred = q.defer();
        actorModel.remove({_id: actorId}, function (err, status) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }
    
    function findAllActors() {
        var deferred = q.defer();
        actorModel
            .find()
            .populate('movies','name')
            .exec(function(err, actors){
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
        actorModel.create(actor, function (err, doc) {
            if(err) {
                deferred.abort();
            } else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }
};