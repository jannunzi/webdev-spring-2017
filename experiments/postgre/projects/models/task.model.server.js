var q = require('q');
var client = require('./client');

var model = {
    assignDeveloperToProject:     assignDeveloperToProject,
    findAllProjectsByDeveloperId: findAllProjectsByDeveloperId,
    findAllDevelopersByProjectId: findAllDevelopersByProjectId,
    unassignDeveloperFromProject: unassignDeveloperFromProject
};
module.exports = model;

function unassignDeveloperFromProject(developerId, projectId) {
    var d = q.defer();
    client.query("DELETE FROM is3500_spring_2017.task WHERE task.developer_id = '"+developerId+"' AND task.project_id = '"+projectId+"'", function (err, results) {
        d.resolve(results);
    });
    return d.promise;
}

function findAllDevelopersByProjectId(projectId) {
    var d = q.defer();
    client.query("SELECT developer.* FROM is3500_spring_2017.developer, is3500_spring_2017.task WHERE task.developer_id = developer.id AND task.project_id = '"+projectId+"'", function (err, results) {
        d.resolve(results.rows);
    });
    return d.promise;
}

function findAllProjectsByDeveloperId(developerId) {
    var d = q.defer();
    client.query("SELECT project.* FROM is3500_spring_2017.project, is3500_spring_2017.task WHERE task.project_id = project.id AND task.developer_id = '"+developerId+"'", function (err, results) {
        d.resolve(results.rows);
    });
    return d.promise;
}

function assignDeveloperToProject(developerId, projectId) {
    var d = q.defer();
    client.query("INSERT INTO is3500_spring_2017.task (developer_id, project_id) VALUES ('"+developerId+"', '"+projectId+"')", function (err, results) {
        d.resolve(results);
    });
    return d.promise;
}