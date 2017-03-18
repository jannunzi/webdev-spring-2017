module.exports = function (app) {
    app.post('/api/experiments/mongoose/movies/actor', createActor);
    app.get('/api/experiments/mongoose/movies/actor', findAllActors);

    var actorModel = require('../models/actor.model.server')();

    function findAllActors(req, res) {
        actorModel
            .findAllActors()
            .then(function (actors) {
                res.json(actors);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function createActor(req, res) {
        actorModel
            .createActor(req.body)
            .then(function (actor) {
                res.json(actor);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
};