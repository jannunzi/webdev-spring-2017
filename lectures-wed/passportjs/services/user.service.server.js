var app = require('../../../express');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));

var userModel = require('../models/user.model.server');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post('/api/lectures-wed/login', passport.authenticate('local'), login);
app.post('/api/lectures-wed/loggedin', loggedin);
app.post('/api/lectures-wed/logout', logout);
app.post('/api/lectures-wed/register', register);
app.post('/api/lectures-wed/isAdmin', isAdmin);
app.get('/api/lectures-wed/user', findAllUsers);
app.delete('/api/lectures-wed/user/:userId', deleteUser);
app.put('/api/lectures-wed/user/:userId', updateUser);
app.put('/api/lectures-wed/profile/:userId', updateProfile);

function localStrategy(username, password, done) {
    console.log(username);
    console.log(password);
    userModel
        .findUserByCredentials(username, password)
        .then(
            function(user) {
                console.log('[0]');
                console.log(user);
                if (!user) {
                    console.log('[1]');
                    return done(null, false);
                }
                console.log('[2]');
                return done(null, user);
            },
            function(err) {
                if (err) { return done(err); }
            }
        );
}

function updateUser(req, res) {
    if(req.user && req.user.role=='ADMIN') {
        userModel
            .updateUser(req.body)
            .then(function (status) {
                res.send(200);
            });
    } else {
        res.json({});
    }
}

function updateProfile(req, res) {
    if(req.user && req.user._id == req.body._id) {
        userModel
            .updateProfile(req.body)
            .then(function (status) {
                res.send(200);
            });
    } else {
        res.json({});
    }
}

function login(req, res) {
    console.log('[login]');
    var user = req.user;
    res.json(user);
}

function loggedin(req, res) {
    if(req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.send('0');
    }
}

function isAdmin(req, res) {
    if(req.isAuthenticated() && req.user.role == 'ADMIN') {
        res.json(req.user);
    } else {
        res.send('0');
    }
}

function logout(req, res) {
    req.logout();
    res.send(200);
}

function register(req, res) {
    userModel
        .createUser(req.body)
        .then(function (user) {
            if(user) {
                req.login(user, function (err) {
                    res.json(user);
                });
            }
        });
}

function findAllUsers(req, res) {
    if(req.user && req.user.role=='ADMIN') {
        userModel
            .findAllUsers()
            .then(function (users) {
                res.json(users);
            });
    } else {
        res.json({});
    }
}

function deleteUser(req, res) {
    if(req.user && req.user.role=='ADMIN') {
        userModel
            .deleteUser(req.params.userId)
            .then(function (status) {
                res.send(200);
            });
    }
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                console.log(err);
                done(err, null);
            }
        );
}