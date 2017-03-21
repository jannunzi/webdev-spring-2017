module.exports = function (app) {
    app.post  ('/api/experiments/postgre/projects/developer/:developerId/project/:projectId', assignDeveloperToProject);
    app.get   ('/api/experiments/postgre/projects/developer/:developerId/project'           , findAllProjectsByDeveloperId);
    app.get   ('/api/experiments/postgre/projects/project/:projectId/developer'             , findAllDevelopersByProjectId);
    app.delete('/api/experiments/postgre/projects/developer/:developerId/project/:projectId', unassignDeveloperFromProject);
};

var taskModel = require('../models/task.model.server');

function assignDeveloperToProject(req, res) {
    taskModel
        .assignDeveloperToProject(req.params.developerId, req.params.projectId)
        .then(function (task) {
            res.json(task);
        });
}

function findAllProjectsByDeveloperId(req, res) {
    taskModel
        .findAllProjectsByDeveloperId(req.params.developerId)
        .then(function (projects) {
            res.json(projects);
        });
}

function findAllDevelopersByProjectId(req, res) {
    taskModel
        .findAllDevelopersByProjectId(req.params.projectId)
        .then(function (developers) {
            res.json(developers);
        });
}

function unassignDeveloperFromProject(req, res) {
    taskModel
        .unassignDeveloperFromProject(req.params.developerId, req.params.projectId)
        .then(function (status) {
            res.json(status);
        });
}