var q = require('q');
var client = require('./client');

var projectModel = {
    findAllProjects: findAllProjects
};

module.exports = projectModel;
function findAllProjects() {
    var deferred = q.defer();
    client.query('select * from is3500_spring_2017.project;', function (err, results) {
        deferred.resolve(results.rows);
    });
    return deferred.promise;
}
