var client = require('./client');
var q = require('q');

var model = {
    createMovie: createMovie,
    findAllMovies: findAllMovies,
    findMovieById: findMovieById
};
module.exports = model;

function createMovie(movie) {
    var sql = "INSERT INTO webdev_spring_2017_morning.movie (title) VALUES ('"+movie.title+"');"
    client.query(sql);
}

function findAllMovies() {
    var deferred = q.defer();
    var sql = "SELECT * FROM webdev_spring_2017_morning.movie;";
    client.query(sql, function (err, results) {
        // console.log(results.rows);
        if(err) {
            deferred.reject(err);
        } else {
            deferred.resolve(results.rows);
        }
    });
    return deferred.promise;
}

function findMovieById(movieId) {
    var deferred = q.defer();
    var sql = "SELECT * FROM webdev_spring_2017_morning.movie WHERE id='"+movieId+"';";
    console.log(sql);
    client.query(sql, function (err, results) {
        console.log(results.rows[0]);
        if(err) {
            deferred.reject(err);
        } else {
            deferred.resolve(results.rows[0]);
        }
        // console.log(results.rows[0]);
    });
    return deferred.promise;
}

findMovieById(1);
// findAllMovies();
// createMovie({title: 'Aliens Covenant'});
// createMovie({title: 'Avatar 2'});