var pg = require('pg');
var config = {
    user: 'annunziatoj', //env var: PGUSER
    database: 'annunziatoj', //env var: PGDATABASE
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var client = new pg.Client(config);
client.connect(
    function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
    }
);
module.exports = client;