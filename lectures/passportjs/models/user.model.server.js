var mongoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1:27017/webdev_spring_2017_passportjs';
mongoose.connect(connectionString);
var q = require('q');
mongoose.Promise = q.Promise;

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String
}, {collection: 'lectures_morning_passportjs_user'});

var userModel = mongoose.model('LecturesMorningPassportJsUser', userSchema);
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

// findUserByCredentials('alice', 'alice');

// createUser({username: 'alice', password: 'alice', firstName: 'Alice'});
// createUser({username: 'bob', password: 'bob', firstName: 'Bob'});
// createUser({username: 'charlie', password: 'charlie', firstName: 'Charlie'});
