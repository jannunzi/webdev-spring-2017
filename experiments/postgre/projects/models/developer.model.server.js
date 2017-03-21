var q = require('q');
var client = require('./client');

var model = {
    createDeveloper: createDeveloper,
    findAllDevelopers: findAllDevelopers,
    findDeveloperById: findDeveloperById,
    updateDeveloper: updateDeveloper,
    deleteDeveloper: deleteDeveloper
};
module.exports = model;

function deleteDeveloper(developerId) {
    var d = q.defer();
    client.query("DELETE FROM is3500_spring_2017.developer WHERE id='"+developerId+"'", function (err, results) {
        d.resolve(results);
    });
    return d.promise;
}

function updateDeveloper(developerId, developer) {
    var d = q.defer();
    client.query("UPDATE is3500_spring_2017.developer SET name='"+developer.name+"' WHERE id='"+developerId+"'", function (err, results) {
        d.resolve(results);
    });
    return d.promise;
}

function findDeveloperById(developerId) {
    var d = q.defer();
    client.query("SELECT * FROM is3500_spring_2017.developer WHERE id='"+developerId+"'", function (err, results) {
        d.resolve(results.rows[0]);
    });
    return d.promise;
}

function findAllDevelopers() {
    var d = q.defer();
    client.query("SELECT * FROM is3500_spring_2017.developer", function (err, results) {
        d.resolve(results.rows);
    });
    return d.promise;
}

function createDeveloper(developer) {
    var d = q.defer();
    client.query("INSERT INTO is3500_spring_2017.developer (name) VALUES ('"+developer.name+"')", function (err, results) {
        d.resolve(results);
    });
    return d.promise;
}
