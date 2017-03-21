var pg = require('pg');

var config = {
    user: 'annunziatoj',
    database: 'annunziatoj',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

var client = new pg.Client(config);
client.connect();

module.exports = client;

// client.query("SELECT * FROM webdev_spring_2017_morning.actor;", function (err, results) {
//     console.log(results.rows);
// });