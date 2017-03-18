var projectModel = require('./models/project.model.server');

projectModel
    .findAllProjects()
    .then(function (projects) {
        console.log(projects);
    });