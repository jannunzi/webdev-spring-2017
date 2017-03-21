var q = require('q');
var client = require('./client');

var projectModel = {
    createProject: createProject,
    findAllProjects: findAllProjects,
    findProjectById: findProjectById,
    updateProject: updateProject,
    deleteProject: deleteProject
};

module.exports = projectModel;

function updateProject(projectId, project) {
    var deferred = q.defer();
    client.query("update is3500_spring_2017.project set name='"+project.name+"' where project.id='"+projectId+"';", function (err, results) {
        deferred.resolve(results);
    });
    return deferred.promise;
}

function deleteProject(projectId) {
    var deferred = q.defer();
    client.query("delete from is3500_spring_2017.project where project.id = '"+projectId+"';", function (err, results) {
        deferred.resolve(results);
    });
    return deferred.promise;
}

function createProject(project) {
    var deferred = q.defer();
    client.query("insert into is3500_spring_2017.project (name) values ('"+project.name+"')", function (err, results) {
        deferred.resolve(results);
    });
    return deferred.promise;
}

function findProjectById(projectId) {
    var deferred = q.defer();
    client.query("select * from is3500_spring_2017.project where project.id='"+projectId+"';", function (err, results) {
        deferred.resolve(results.rows[0]);
    });
    return deferred.promise;
}

function findAllProjects() {
    var deferred = q.defer();
    client.query('select * from is3500_spring_2017.project;', function (err, results) {
        deferred.resolve(results.rows);
    });
    return deferred.promise;
}
