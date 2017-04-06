var connectionString = 'mongodb://127.0.0.1:27017/passportjs';
var mongoose = require('mongoose');
mongoose.connect(connectionString);
mongoose.Promise = require('q').Promise;

var userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String},
    firstName: String,
    photo: String,
    google: {
        id: String
    },
    facebook: {
        id: String
    },
    twitter: {
        id: String
    },
    role: {type: String, enum: ['ADMIN', 'STUDENT', 'FACULTY', 'USER'], default: 'USER'}
}, {collection: 'lectureswed.passportjs.user'});
var userModel = mongoose.model('LecturesPassportJsUserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserById = findUserById;
userModel.findAllUsers = findAllUsers;
userModel.deleteUser = deleteUser;
userModel.updateUser = updateUser;
userModel.updateProfile = updateProfile;
userModel.findUserByGoogleId = findUserByGoogleId;

module.exports = userModel;

function findUserByGoogleId(googleId) {
    return userModel.findOne({
        'google.id': googleId
    });
}

function updateUser(user) {
    return userModel.update({_id: user._id}, {$set: user});
}

function updateProfile(user) {
    return userModel.update({_id: user._id},
        {$set: {firstName: user.firstName}});
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

function findAllUsers() {
    return userModel.find();
}

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
