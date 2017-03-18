module.exports = function (app) {
    var model = require('./user.model.server')();

    // user services
    app.post('/api/experiments/mongoose/wam/user', createUser);
    app.get('/api/experiments/mongoose/wam/user', findAllUsers);
    app.get('/api/experiments/mongoose/wam/user/:userId', findUserById);
    app.put('/api/experiments/mongoose/wam/user/:userId', updateUser);
    app.delete('/api/experiments/mongoose/wam/user/:userId', deleteUser);

    function createUser(req, res) {
        model
            .createUser(req.body)
            .then(function (user) {
                res.json(user);
            });
    }
    function findAllUsers(req, res) {
        model
            .findAllUsers()
            .then(function (users) {
                res.json(users);
            });
    }
    function findUserById(req, res) {
        model
            .findUserById(req.params.userId)
            .then(function (user) {
                res.json(user);
            });
    }
    function updateUser(req, res) {
        model
            .updateUser(req.params.userId, req.body)
            .then(function (status) {
                res.json(status);
            });
    }
    function deleteUser(req, res) {
        model
            .deleteUser(req.params.userId)
            .then(function (status) {
                res.json(status);
            });
    }
};