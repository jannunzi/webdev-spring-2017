module.exports = function (app) {
    var developerService = require('./services/developer.service.server')(app);
    var projectService = require('./services/project.service.server')(app);
    var taskService = require('./services/task.service.server')(app);
};

// var projectModel = require('./models/project.model.server');
// var developerModel = require('./models/developer.model.server');
// var taskModel = require('./models/task.model.server');

// taskModel
//     .unassignDeveloperFromProject(1, 1)
//     .then(function (results) {
//         console.log('findAllDevelopersByProjectId');
//         console.log(results);
//     });

// taskModel
//     .findAllDevelopersByProjectId(3)
//     .then(function (results) {
//         console.log('findAllDevelopersByProjectId');
//         console.log(results);
//     });

// taskModel
//     .findAllProjectsByDeveloperId(1)
//     .then(function (results) {
//         console.log('findAllProjectsByDeveloperId');
//         console.log(results);
//     });

// taskModel
//     .assignDeveloperToProject(3, 3)
//     .then(function (results) {
//         console.log('assignDeveloperToProject');
//         console.log(results);
//     });

// developerModel
//     .deleteDeveloper(5)
//     .then(function (results) {
//         console.log('deleteDeveloper');
//         console.log(results);
//     });

// developerModel
//     .updateDeveloper(2, {name: 'Robert'})
//     .then(function (results) {
//         console.log('updateDeveloper');
//         console.log(results);
//     });

// developerModel.findDeveloperById(2)
//     .then(function (results) {
//         console.log('findDeveloperById');
//         console.log(results);
//     });
//
// developerModel.findAllDevelopers()
//     .then(function (results) {
//         console.log('findAllDevelopers');
//         console.log(results.rows);
//     });

// developerModel.createDeveloper({name: 'edward'})
//     .then(function (results) {
//         console.log('createDeveloper');
//         console.log(results);
//     });

// projectModel
//     .deleteProject(5)
//     .then(function (result) {
//         console.log('deleteProject');
//         console.log(result);
//     });

// projectModel
//     .updateProject(1, {name: 'Project 321'})
//     .then(function (result) {
//         console.log('updateProject');
//         console.log(result);
//     });

// projectModel
//     .createProject({name: 'Project XYZ'})
//     .then(function (project) {
//         console.log(project);
//     });

// projectModel
//     .findProjectById(1)
//     .then(function (project) {
//         console.log(project);
//     });
//
// projectModel
//     .findAllProjects()
//     .then(function (projects) {
//         console.log(projects);
//     });