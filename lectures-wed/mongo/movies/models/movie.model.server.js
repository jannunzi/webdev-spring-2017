module.exports = function () {
    var q = require('q');
    var mongoose = require('mongoose');
    var movieSchema = require('./movie.schema.server.js')();

    var movieModel = mongoose.model('LecturesWedMongoMoviesMovie', movieSchema);

    var api = {
        createMovie: createMovie,
        findAllMovies: findAllMovies,
        deleteMovie: deleteMovie,
        addActor: addActor
    };
    return api;

    function addActor(movieId, actorId) {
        var deferred = q.defer();
        movieModel
            .findById(movieId, function (err, movie) {
                movie.actors.push(actorId);
                movie.save();
                deferred.resolve(movie);
        });
        return deferred.promise;
    }

    function deleteMovie(movieId) {
        var deferred = q.defer();
        movieModel.remove({_id: movieId}, function (err, status) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }
    
    function findAllMovies() {
        var deferred = q.defer();
        movieModel.find(function (err, movies) {
            if(err) {
                deferred.abort(err);
            } else {
                deferred.resolve(movies);
            }
        });
        return deferred.promise;
    }

    function createMovie(movie) {
        var deferred = q.defer();
        movieModel.create(movie, function (err, doc) {
            if(err) {
                deferred.abort();
            } else {
                deferred.resolve();
            }
        });
        return deferred.promise;
    }
};