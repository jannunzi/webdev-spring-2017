module.exports = function () {

    var api = {
        createUser: createUser
    };

    var mongoose = require('mongoose');

    var UserSchema = require('./user.schema.server')();
    var UserModel = mongoose.model('UserMorningModel', UserSchema);

    return api;

    function createUser(user) {
        return UserModel.create(user);
    }
};