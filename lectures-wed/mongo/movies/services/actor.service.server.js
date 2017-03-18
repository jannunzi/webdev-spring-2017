module.exports = function (app, model) {
    app.post('/api/lectures-wed/mongo/movies/actor', createActor);
    app.get('/api/lectures-wed/mongo/movies/actor', findAllActors);
    app.delete('/api/lectures-wed/mongo/movies/actor/:actorId', deleteActor);
    app.put('/api/lectures-wed/mongo/movies/actor/:actorId/movie/:movieId', addMovie);
    app.delete('/api/lectures-wed/mongo/movies/actor/:actorId/movie/:movieId', deleteMovie);

    var actorModel = model.actorModel;//require('../models/actor.model.server.js')();
    var movieModel = model.movieModel;

    function deleteMovie(req, res) {
        actorModel
            .deleteMovie(req.params.actorId, req.params.movieId)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
    
    function addMovie(req, res) {
        actorModel
            .addMovie(req.params.actorId, req.params.movieId)
            .then(function (status) {
                return movieModel.addActor(req.params.movieId, req.params.actorId);
            })
            .then(function (doc){
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(500);
            });
    }

    function deleteActor(req, res) {
        actorModel
            .deleteActor(req.params.actorId)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
    
    function findAllActors(req, res) {
        actorModel
            .findAllActors()
            .then(function (actors) {
                res.send(actors);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function createActor(req, res) {
        actorModel
            .createActor(req.body)
            .then(function (actor) {
                res.send(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
};