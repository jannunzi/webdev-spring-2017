var connectionString = 'mongodb://127.0.0.1:27017/passportjs';
var mongoose = require('mongoose');
mongoose.connect(connectionString);
mongoose.Promise = require('q').Promise;
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String
}, {collection: 'lectureswed.passportjs.user'});
var userModel = mongoose.model('LecturesPassportJsUserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserById = findUserById;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function findUserById(userId) {
    return userModel.findById(userId);
}

// createUser({username: 'alice', password: 'alice', firstName: 'Alice'});
// createUser({username: 'bob', password: 'bob', firstName: 'Bob'});
// createUser({username: 'admin', password: 'admin', firstName: 'Admin'});
