var q = require('q');
module.exports = function () {

    var mongoose = require('mongoose');

    var userSchema = mongoose.Schema({
        username: String,
        _websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'ExperimentsMongooseWamWebsite'}]
    }, {collection: 'experiments.mongoose.wam.user'});
    var userModel = mongoose.model('ExperimentsMongooseWamUser', userSchema);
    
    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;

    function createUser(user) {
        var deferred = q.defer();
        userModel
            .create(user, function (err, user) {
                deferred.resolve(user);
            });
        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();
        userModel
            .find(function (err, users) {
                deferred.resolve(users);
            });
        return deferred.promise;
    }

    function findUserById(userId) {
        var deferred = q.defer();
        userModel
            .findById(userId, function (err, user) {
                deferred.resolve(user);
            });
        return deferred.promise;
    }

    function updateUser(userId, user) {
        var deferred = q.defer();
        userModel
            .update(
                {_id: userId},
                {username: user.username},
                function (err, status) {
                    deferred.resolve(status);
            });
        return deferred.promise;
    }

    function deleteUser(userId) {
        var deferred = q.defer();
        userModel
            .remove({_id: userId},function (err, status) {
                deferred.resolve(status);
            });
        return deferred.promise;
    }
};