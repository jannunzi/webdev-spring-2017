module.exports = function (app, model) {
    app.post('/api/lectures-wed/mongo/movies/movie', createMovie);
    app.get('/api/lectures-wed/mongo/movies/movie', findAllMovies);
    app.delete('/api/lectures-wed/mongo/movies/movie/:movieId', deleteMovie);

    var movieModel = model.movieModel;// require('../models/movie.model.server.js')();

    function deleteMovie(req, res) {
        movieModel
            .deleteMovie(req.params.movieId)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
    
    function findAllMovies(req, res) {
        movieModel
            .findAllMovies()
            .then(function (movies) {
                res.send(movies);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function createMovie(req, res) {
        movieModel
            .createMovie(req.body)
            .then(function (movie) {
                res.send(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
};