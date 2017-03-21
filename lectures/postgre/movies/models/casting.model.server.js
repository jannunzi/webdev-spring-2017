var client = require('./client');
var q = require('q');

function castActorForMovie(actorId, movieId, role) {
    var deferred = q.defer();
    var sql = "INSERT INTO webdev_spring_2017_morning.casting(role, movie_id, actor_id) VALUES ('"+role+"', '"+movieId+"', '"+actorId+"');"
    client.query(sql, function (err, role) {
        deferred.resolve(role);
    });
    return deferred.promise;
}

function uncastActorFromMovie(actorId, movieId) {

}

function updateActorActorInMovie(actorId, movieId, role) {

}