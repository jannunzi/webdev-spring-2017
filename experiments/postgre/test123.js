var pg = require('pg');

var config = {
    user: 'annunziatoj', //env var: PGUSER
    database: 'annunziatoj', //env var: PGDATABASE
    //password: 'secret', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var client = new pg.Client(config);
client.connect();

// client.query("INSERT INTO is3500_spring_2017.developer (name) VALUES ('alice')");
// client.query("INSERT INTO is3500_spring_2017.developer (name) VALUES ('bob');");
// client.query("INSERT INTO is3500_spring_2017.developer (name) VALUES ('charlie')");

// client.query("INSERT INTO IS3500_SPRING_2017.PROJECT (NAME) VALUES ('project123')");
// client.query("INSERT INTO IS3500_SPRING_2017.PROJECT (NAME) VALUES ('project234')");
// client.query("INSERT INTO IS3500_SPRING_2017.PROJECT (NAME) VALUES ('project345')");

// client.query("INSERT INTO IS3500_SPRING_2017.TASK (developer_id, project_id) VALUES (1, 1)");
// client.query("INSERT INTO IS3500_SPRING_2017.TASK (developer_id, project_id) VALUES (1, 2)");
// client.query("INSERT INTO IS3500_SPRING_2017.TASK (developer_id, project_id) VALUES (2, 3)");

// client.query("select developer.name as developer, project.name as project from is3500_spring_2017.developer developer, is3500_spring_2017.project project, is3500_spring_2017.task where task.project_id=project.id and task.developer_id=developer.id", function(err, result){
//     //console.log(result.rows);
//     result.rows.forEach(function (row) {
//         console.log([row.developer, row.project]);
//     });
// });

// client.query("SELECT * FROM schema123.table123", function (err, result) {
//     console.log(result.rows[0].name);
//     result.rows.forEach(function (row) {
//         console.log(row.name);
//     });
// });

module.exports = function (app) {

};