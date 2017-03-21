var pg = require('pg');
var config = {
    user: 'annunziatoj',
    database: 'test',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
var client = new pg.Client(config);
client.connect();
module.exports = client;