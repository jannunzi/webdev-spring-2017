module.exports = function (app) {
    app.get('/is3500/movie/user/:userId/favorites/:imdbID', favoriteMovie);

    var pg = require('pg');
    var client = new pg.Client();
    var config = {
        user: 'annunziatoj', //env var: PGUSER
        database: 'annunziatoj', //env var: PGDATABASE
        host: 'localhost', // Server hosting the postgres database
        port: 5432, //env var: PGPORT
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000
    };
    client.connect();

    function favoriteMovie(req, res) {
        console.log('favoriteMovie');
        var userId = req.params.userId;
        var imdbID = req.params.imdbID;
        var insertMovieSql = "INSERT INTO is3500_spring_2017.movie (title, \"imdbID\") VALUES ('Title', '"+imdbID+"');";
        client.query(insertMovieSql, function (err, movie) {
            var favoriteSql = "INSERT INTO is3500_spring_2017.\"favoriteMovies\" (movie_id, user_id, \"imdbID\") VALUES ('1', '"+userId+"', '"+imdbID+"');";
            client.query(favoriteSql, function (err, status) {
                res.send(200);
            });
        });
    }
}