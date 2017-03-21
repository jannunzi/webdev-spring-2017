module.exports = function (app) {
    app.post('/api/experiments/postgre/projects/project', createProject);
    app.get('/api/experiments/postgre/projects/project', findAllProjects);
    app.get('/api/experiments/postgre/projects/project/:projectId', findProjectById);
    app.put('/api/experiments/postgre/projects/project/:projectId', updateProject);
    app.delete('/api/experiments/postgre/projects/project/:projectId', deleteProject);
};

var projectModel = require('../models/project.model.server');

function createProject(req, res) {
    projectModel
        .createProject(req.body)
        .then(function (project) {
            res.json(project);
        });
}

function findAllProjects(req, res) {
    projectModel
        .findAllProjects()
        .then(function (projects) {
            res.json(projects);
        });
}

function findProjectById(req, res) {
    projectModel
        .findProjectById(req.params.projectId)
        .then(function (project) {
            res.json(project);
        });
}

function updateProject(req, res) {
    projectModel
        .updateProject(req.params.projectId, req.body)
        .then(function (status) {
            res.json(status);
        });
}

function deleteProject(req, res) {
    projectModel
        .deleteProject(req.params.projectId)
        .then(function (status) {
            res.json(status);
        });
}
