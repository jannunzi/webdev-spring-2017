var client = require('../client');
var q = require('q');

var model = {
    createActor: createActor,
    findAllActors: findAllActors,
    findActorById: findActorById,
    updateActor: updateActor,
    deleteActor: deleteActor
};
module.exports = model;

function createActor(actor) {
    var d = q.defer();
    client.query("INSERT INTO is3500_spring_2017.actor (name) VALUES ('"+actor.name+"')", function (err, result) {
        d.resolve(result);
    });
    return d.promise;
}

function findAllActors() {
    var d = q.defer();
    client.query("SELECT * FROM is3500_spring_2017.actor", function (err, result) {
        d.resolve(result.rows);
    });
    return d.promise;
}

function findActorById(actorId) {
    var d = q.defer();
    client.query("SELECT * FROM is3500_spring_2017.actor WHERE id='"+actorId+"'", function (err, result) {
        d.resolve(result.rows[0]);
    });
    return d.promise;
}

function updateActor(actorId, actor) {
    var d = q.defer();
    client.query("UPDATE is3500_spring_2017.actor SET name='"+actor.name+"' WHERE id='"+actorId+"'", function (err, result) {
        d.resolve(result);
    });
    return d.promise;
}

function deleteActor(actorId) {
    var d = q.defer();
    client.query("DELETE FROM is3500_spring_2017.actor WHERE id='"+actorId+"'", function (err, result) {
        d.resolve(result);
    });
    return d.promise;
}
// deleteActor(3)
//     .then(function (result) {
//         console.log(result);
//     });
// updateActor(1, {name: 'Arnold Schwartzernegger'})
//     .then(function (result) {
//         console.log(result);
//     });
// findActorById(1)
//     .then(function (actor) {
//         console.log(actor);
//     });
// findAllActors()
//     .then(function (actors) {
//         console.log(actors);
//     });
// createActor({name: 'Luke'});