module.exports = function (app) {
    app.post('/api/experiments/postgre/projects/developer', createDeveloper);
    app.get('/api/experiments/postgre/projects/developer', findAllDevelopers);
    app.get('/api/experiments/postgre/projects/developer/:developerId', findDeveloperById);
    app.put('/api/experiments/postgre/projects/developer/:developerId', updateDeveloper);
    app.delete('/api/experiments/postgre/projects/developer/:developerId', deleteDeveloper);
};

var developerModel = require('../models/developer.model.server');

function createDeveloper(req, res) {
    developerModel
        .createDeveloper(req.body)
        .then(function (developer) {
            res.json(developer);
        });
}

function findAllDevelopers(req, res) {
    developerModel
        .findAllDevelopers()
        .then(function (developers) {
            res.json(developers);
        });
}

function findDeveloperById(req, res) {
    developerModel
        .findDeveloperById(req.params.developerId)
        .then(function (developer) {
            res.json(developer);
        });
}

function updateDeveloper(req, res) {
    developerModel
        .updateDeveloper(req.params.developerId, req.body)
        .then(function (status) {
            res.json(status);
        });
}

function deleteDeveloper(req, res) {
    developerModel
        .deleteDeveloper(req.params.developerId)
        .then(function (status) {
            res.json(status);
        });
}
