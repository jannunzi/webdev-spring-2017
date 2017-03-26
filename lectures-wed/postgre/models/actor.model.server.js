var client = require('./client');
var q = require('q');

function findAllActors() {
    var sql = "SELECT * FROM webdev_spring_2017_evening.actor;";
    client.query(sql, function (err, results) {
        console.log(results);
    });
}

function createActor(actor) {
    var sql = "INSERT INTO webdev_spring_2017_evening.actor (name) VALUES ('"+actor.name+"');";
    client.query(sql, function (err, results) {
        console.log(results);
    });
}

// findAllActors();

createActor({name: 'Will Smith'});