var client = require('./client');
var q = require('q');

var model = {
    createActor: createActor,
    findAllActors: findAllActors,
    findActorById: findActorById
};
module.exports = model;

function createActor(actor) {
    var sql = "INSERT INTO webdev_spring_2017_morning.actor (name) VALUES ('"+actor.name+"');"
    client.query(sql);
}

function findAllActors() {
    var deferred = q.defer();
    var sql = "SELECT * FROM webdev_spring_2017_morning.actor;";
    client.query(sql, function (err, results) {
        if(err) {
            deferred.reject(err);
        } else {
            deferred.resolve(results.rows);
        }
    });
    return deferred.promise;
}

function findActorById(actorId) {
    var deferred = q.defer();
    var sql = "SELECT * FROM webdev_spring_2017_morning.actor WHERE id='"+actorId+"';";
    console.log(sql);
    client.query(sql, function (err, results) {
        if(err) {
            deferred.reject(err);
        } else {
            deferred.resolve(results.rows[0]);
        }
        // console.log(results.rows[0]);
    });
    return deferred.promise;
}

// findActorById(1);
// findAllActors();
// createActor({name: 'Edward James Olmos'});
// createActor({name: 'Daryl Hannah'});