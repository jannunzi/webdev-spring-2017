var client = require('./client');
var q = require('q');

function findAllMovies() {
    var sql = "SELECT * FROM webdev_spring_2017_evening.movie;";
    client.query(sql, function (err, results) {
        console.log(results);
    });
}

function createMovie(movie) {
    var sql = "INSERT INTO webdev_spring_2017_evening.movie (title) VALUES ('"+movie.title+"');";
    client.query(sql, function (err, results) {
        console.log(results);
    });
}

// findAllMovies();
// createMovie({title: 'Suicide Squad'});