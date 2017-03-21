module.exports = function (app) {
    app.post('/api/actor', createActor);
    app.get('/api/actor', findAllActors);
    app.get('/api/actor/:actorId', findActorById);

    var actorModel = require('../models/actor.model.server');

    function findActorById(req, res) {
        actorModel
            .findActorById(req.params.actorId)
            .then(function (actor) {
                res.json(actor);
            });
    }

    function findAllActors(req, res) {
        actorModel
            .findAllActors()
            .then(function (actors) {
                res.json(actors);
            });
    }

    function createActor(req, res) {
        var actor = req.body;
        actorModel
            .createActor(actor)
            .then(function (actor) {
                res.json(actor);
            });
    }
};