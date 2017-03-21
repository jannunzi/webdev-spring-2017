module.exports = function (app) {
    app.post  ('/api/experiments/postgre/movies/movie', createMovie);
    app.get   ('/api/experiments/postgre/movies/movie', findAllMovies);
    app.get   ('/api/experiments/postgre/movies/movie/:movieId', findMovieById);
    app.put   ('/api/experiments/postgre/movies/movie/:movieId', updateMovie);
    app.delete('/api/experiments/postgre/movies/movie/:movieId', deleteMovie);
};

var movieModel = require('../models/movie.model.server');
var q = require('q');

function createMovie(req, res) {
    var d = q.defer();
    movieModel.createMovie(req.body)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function findAllMovies(req, res) {
    var d = q.defer();
    movieModel.findAllMovies()
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function findMovieById(req, res) {
    var d = q.defer();
    movieModel.findMovieById(req.params.movieId)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function updateMovie(req, res) {
    var d = q.defer();
    movieModel.updateMovie(req.params.movieId, req.body)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function deleteMovie(req, res) {
    var d = q.defer();
    movieModel.deleteMovie(req.params.movieId)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}