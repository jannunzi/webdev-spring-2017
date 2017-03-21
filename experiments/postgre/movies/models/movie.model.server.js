var client = require('../client');
var q = require('q');

var model = {
    createMovie: createMovie,
    findAllMovies: findAllMovies,
    findMovieById: findMovieById,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
};
module.exports = model;

function createMovie(movie) {
    var d = q.defer();
    var sql = "INSERT INTO is3500_spring_2017.movie (title, rating, plot, \"imdbID\", poster_url) VALUES ('"+movie.title+"', '"+movie.rating+"', '"+movie.plot+"', '"+movie.imdbID+"', '"+movie.posterUrl+"')";
    console.log(sql);
    client.query(sql, function (err, result) {
        d.resolve(result);
    });
    return d.promise;
}

function findAllMovies() {
    var d = q.defer();
    client.query("SELECT * FROM is3500_spring_2017.movie", function (err, result) {
        d.resolve(result.rows);
    });
    return d.promise;
}

function findMovieById(movieId) {
    var d = q.defer();
    client.query("SELECT * FROM is3500_spring_2017.movie WHERE id='"+movieId+"'", function (err, result) {
        d.resolve(result.rows[0]);
    });
    return d.promise;
}

function updateMovie(movieId, movie) {
    var d = q.defer();
    client.query("UPDATE is3500_spring_2017.movie SET title='"+movie.title+"', rating='"+movie.rating+"', plot='"+movie.plot+"', poster_url='"+movie.posterUrl+"', \"imdbID\"='"+movie.imdbID+"' WHERE id='"+movieId+"'", function (err, result) {
        d.resolve(result);
    });
    return d.promise;
}

function deleteMovie(movieId) {
    var d = q.defer();
    client.query("DELETE FROM is3500_spring_2017.movie WHERE id='"+movieId+"'", function (err, result) {
        d.resolve(result);
    });
    return d.promise;
}
//
// deleteMovie(3)
//     .then(function (result) {
//         console.log(result);
//     });

// updateMovie(3, {title: 'Alien 3'})
//     .then(function (result) {
//         console.log(result);
//     });

// findMovieById(2)
//     .then(function (movie) {
//         console.log(movie);
//     });

// findAllMovies()
//     .then(function (movies) {
//         console.log(movies);
//     });

// createMovie({title: 'Alien2', rating: 'R', imdbID: '123qwe345', plot: 'the best one', posterUrl: 'http://poster.jpg'})
//     .then(function (result) {
//         console.log(result);
//     });
// deleteMovie(3)
//     .then(function (result) {
//         console.log(result);
//     });
// updateMovie(1, {name: 'Arnold Schwartzernegger'})
//     .then(function (result) {
//         console.log(result);
//     });
// findMovieById(1)
//     .then(function (movie) {
//         console.log(movie);
//     });
// findAllMovies()
//     .then(function (movies) {
//         console.log(movies);
//     });
// createMovie({name: 'Luke'});