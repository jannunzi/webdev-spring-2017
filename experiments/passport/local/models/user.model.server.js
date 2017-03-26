var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    roles: [{type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY']}]
}, {collection: 'experiments.passport.user'});
var userModel = mongoose.model('ExperimentsPassportUserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findAllUsers = findAllUsers;
userModel.deleteUser = deleteUser;
userModel.updateUser = updateUser;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function findAllUsers() {
    return userModel.find();
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserByCredentials(credentials) {
    return userModel.findOne({username: credentials.username, password: credentials.password});
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

function updateUser(userId, user) {
    return userModel.update({_id: userId}, {
        $set: user
    });
}
