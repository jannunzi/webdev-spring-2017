module.exports = function (app) {

    // projects
    app.post('/api/experiments/mongoose/project', createProject);
    app.get('/api/experiments/mongoose/project', findAllProjects);
    app.get('/api/experiments/mongoose/project/:projectId', findProjectById);
    app.get('/api/experiments/mongoose/project/:projectId/user', findUsersInProject);
    app.put ('/api/experiments/mongoose/project/:projectId/user/:userId', addUserToProject);
    app.delete('/api/experiments/mongoose/project/:projectId/user/:userId', removeUserFromProject);
    app.delete('/api/experiments/mongoose/project/:projectId', deleteProject);

    // users
    app.post('/api/experiments/mongoose/user', createUser);
    app.get('/api/experiments/mongoose/user', findAllUsers);
    app.get('/api/experiments/mongoose/user/:userId', findUserById);
    app.get('/api/experiments/mongoose/user/:userId/project', findProjectsForUser);
    app.put ('/api/experiments/mongoose/user/:userId/project/:projectId', addProjectToUser);
    app.delete ('/api/experiments/mongoose/user/:userId/project/:projectId', removeProjectFromUser);
    app.delete ('/api/experiments/mongoose/user/:userId', deleteUser);

    var mongoose = require('mongoose');

    var ProjectUserSchema = mongoose.Schema({
        username: String,
        projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProjectModel'}]
    }, {collection: 'experiments.mongoose.project_user'});

    var ProjectSchema = mongoose.Schema({
        name: String,
        users: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProjectUserModel'}]
    }, {collection: 'experiments.mongoose.project'});

    var Project2UserMappingSchema = mongoose.Schema({
        user: {type: mongoose.Schema.Types.ObjectId},
        project: {type: mongoose.Schema.Types.ObjectId}
    }, {collection: 'experiments.mongoose.project_2_user_mapping'});

    var ProjectUserModel = mongoose.model('ProjectUserModel', ProjectUserSchema);
    var ProjectModel = mongoose.model('ProjectModel', ProjectSchema);
    var Project2UserMappingModel = mongoose.model('Project2UserMappingModel', Project2UserMappingSchema);

    // projects
    function createProject(req, res) {
        ProjectModel.create(req.body)
            .then(function(result){res.json(result)});
    }

    function findAllProjects(req, res) {
        ProjectModel.find()
            .populate('users', 'username')
            .then(function(result){res.json(result)});
    }

    function findProjectById (req, res) {
        ProjectModel.findById(req.params.projectId)
            .then(function(result){res.json(result)});
    }

    function findUsersInProject (req, res) {

    }

    function addUserToProject (req, res) {
        var userId = req.params.userId;
        var projectId = req.params.projectId;
        var response = {};
        ProjectUserModel
            .findById(userId)
            .then(function (user) {
                response.user = user;
                user.projects.push(projectId);
                return user.save();
            })
            .then(function (status) {
                return ProjectModel.findById(projectId);
            })
            .then(function (project) {
                response.project = project;
                project.users.push(userId);
                return project.save();
            })
            .then(function () {
                res.json(response);
            })
    }

    function removeUserFromProject (req, res) {

    }

    function deleteProject(req, res) {
        ProjectModel.remove({_id: req.params.projectId})
            .then(function(result){res.json(result)});
    }

    function createUser (req, res) {
        ProjectUserModel.create(req.body)
            .then(function(result){res.json(result)});
    }

    function findAllUsers (req, res) {
        ProjectUserModel
            .find()
            .populate('projects', 'name')
            .then(function(result){res.json(result)});
    }

    function findUserById (req, res) {
        ProjectUserModel.findById(req.params.userId)
            .then(function(result){res.json(result)});
    }

    function findProjectsForUser (req, res) {

    }

    function addProjectToUser (req, res) {

    }

    function removeProjectFromUser (req, res) {

    }

    function deleteUser(req, res) {
        ProjectUserModel.remove({_id: req.params.userId})
            .then(function(result){res.json(result)});
    }
};