var app = require('../../../express');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
var userModel = require('../models/user.model.server');

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.post('/api/lectures-wed/login', passport.authenticate('local'), login);
app.get ('/api/lectures-wed/loggedin', loggedin);
app.post('/api/lectures-wed/logout',   logout);

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

function login(req, res) {
    console.log('[login]');
    var user = req.user;
    res.json(user);
}

function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
}

function logout(req, res) {
    req.logOut();
    res.send(200);
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