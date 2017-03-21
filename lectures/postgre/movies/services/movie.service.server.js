module.exports = function (app) {
    app.post('/api/movie', createMovie);
    app.get('/api/movie', findAllMovies);
    app.get('/api/movie/:movieId', findMovieById);

    var movieModel = require('../models/movie.model.server');

    function findMovieById(req, res) {
        movieModel
            .findMovieById(req.params.movieId)
            .then(function (movie) {
                res.json(movie);
            });
    }

    function findAllMovies(req, res) {
        movieModel
            .findAllMovies()
            .then(function (movies) {
                res.json(movies);
            });
    }

    function createMovie(req, res) {
        var movie = req.body;
        movieModel
            .createMovie(movie)
            .then(function (movie) {
                res.json(movie);
            });
    }
};