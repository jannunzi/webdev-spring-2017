module.exports = function (app) {
    app.post  ('/api/experiments/postgre/movies/actor', createActor);
    app.get   ('/api/experiments/postgre/movies/actor', findAllActors);
    app.get   ('/api/experiments/postgre/movies/actor/:actorId', findActorById);
    app.put   ('/api/experiments/postgre/movies/actor/:actorId', updateActor);
    app.delete('/api/experiments/postgre/movies/actor/:actorId', deleteActor);
};

var actorModel = require('../models/actor.model.server');
var q = require('q');

function createActor(req, res) {
    var d = q.defer();
    actorModel.createActor(req.body)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function findAllActors(req, res) {
    var d = q.defer();
    actorModel.findAllActors()
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function findActorById(req, res) {
    var d = q.defer();
    actorModel.findActorById(req.params.actorId)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function updateActor(req, res) {
    var d = q.defer();
    actorModel.updateActor(req.params.actorId, req.body)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}

function deleteActor(req, res) {
    var d = q.defer();
    actorModel.deleteActor(req.params.actorId)
        .then(function(result){
            res.json(result);
        });
    return d.promise;
}