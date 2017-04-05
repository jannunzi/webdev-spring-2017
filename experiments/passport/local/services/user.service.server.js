// module.exports = function (app) {
var app = require('../../../../express');
var passport = require('passport');
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

var auth = authorized;
app.post  ('/api/experiments/passport/register',       register);
app.post  ('/api/experiments/passport/login', passport.authenticate('local'), login);
app.get   ('/api/experiments/passport/loggedin',       loggedin);
app.get   ('/api/experiments/passport/isAdmin',        isAdmin);
app.post  ('/api/experiments/passport/logout',         logout);
app.get   ('/api/experiments/passport/user/:userId',   findUserById);
app.get   ('/api/experiments/passport/user/:username', findUserByUsername);
app.post  ('/api/experiments/passport/admin/user', auth, createUser);
app.get   ('/api/experiments/passport/admin/user', auth, findAllUsers);
app.put   ('/api/experiments/passport/admin/user/:userId', auth, updateUser);
app.delete('/api/experiments/passport/admin/user/:userId', auth, deleteUser);

app.get   ('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
app.get   ('/google/oauth/callback',
    passport.authenticate('google', {
        successRedirect: '/experiments/passport/local/#!/profile',
        failureRedirect: '/experiments/passport/local/#!/login'
    }));

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleConfig = {
    clientID     : process.env.GOOGLE_CLIENT_ID_SPRING_2017,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET_SPRING_2017,
    callbackURL  : process.env.GOOGLE_CALLBACK_URL_SPRING_2017
};
passport.use(new GoogleStrategy(googleConfig, googleStrategy));
function googleStrategy(token, refreshToken, profile, done) {
    console.log(1);
    // console.log(profile);
    userModel
        .findUserByGoogleId(profile.id)
        .then(
            function(user) {
                console.log(2);
                if(user) {
                    console.log(3);
                    console.log(user);
                    return done(null, user);
                } else {
                    console.log(4);
                    var email = profile.emails[0].value;
                    var emailParts = email.split("@");
                    var newGoogleUser = {
                        username:  emailParts[0],
                        firstName: profile.name.givenName,
                        lastName:  profile.name.familyName,
                        email:     email,
                        google: {
                            id:    profile.id,
                            token: token
                        }
                    };
                    return userModel.createUser(newGoogleUser);
                }
            },
            function(err) {
                console.log('err');
                console.log(err);
                if (err) { return done(err); }
            }
        )
        .then(
            function(user){
                return done(null, user);
            },
            function(err){
                if (err) { return done(err); }
            }
        );
}

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(localStrategy));
userModel = require('../models/user.model.server');

function localStrategy(username, password, done) {
    userModel
        .findUserByCredentials({username: username, password: password})
        .then(
            function(user) {
                if (!user) { return done(null, false); }
                return done(null, user);
            },
            function(err) {
                if (err) { return done(err); }
            }
        );
}

function register(req, res) {
    var newUser = req.body;
    newUser.roles = ['student'];

    console.log('register');
    console.log(newUser);

    userModel
        .findUserByUsername(newUser.username)
        .then(
            function(user){
                console.log(user);
                if(user) {
                    res.json(null);
                } else {
                    return userModel.createUser(newUser);
                }
            },
            function(err){
                res.status(500).send(err);
            }
        )
        .then(
            function(user){
                if(user){
                    req.login(user, function(err) {
                        user.password = '';
                        if(err) {
                            res.status(500).send(err);
                        } else {
                            res.json(user);
                        }
                    });
                }
            },
            function(err){
                res.status(500).send(err);
            }
        );
}

function login(req, res) {
    var user = req.user;
    res.json(user);
}

function logout(req, res) {
    req.logOut();
    res.send(200);
}

function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
}

function isAdmin(req, res) {
    res.send(req.isAuthenticated() && req.user.roles && req.user.roles.indexOf('ADMIN') > -1 ? req.user : '0');
}

function findUserById(req, res) {
    userModel
        .findUserById(req.params.userId)
        .then(function (user) {
            if(err) {
                res.send(500);
            } else {
                res.json(user);
            }
        });
}

function findUserByUsername(req, res) {
    userModel
        .findUserByUsername(req.params.username)
        .then(function (user) {
            if(err) {
                res.send(500);
            } else {
                res.json(user);
            }
        });
}

function createUser(req, res) {
    userModel
        .createUser(req.body)
        .then(function (user) {
            if(err) {
                res.send(500);
            } else {
                res.json(user);
            }
        });
}

function findAllUsers(req, res) {
    userModel
        .findAllUsers()
        .then(function (users) {
            if(err) {
                res.send(500);
            } else {
                res.json(users);
            }
        });
}

function updateUser(req, res) {
    userModel
        .updateUser(req.params.userId, req.body)
        .then(function (status) {
            if(err) {
                res.send(500);
            } else {
                res.json(status);
            }
        });
}

function deleteUser(req, res) {
    userModel
        .deleteUser(req.params.userId)
        .then(function (status) {
            if(err) {
                res.send(500);
            } else {
                res.json(status);
            }
        });
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
                done(err, null);
            }
        );
}

function authorized (req, res, next) {
    if (!req.isAuthenticated()) {
        res.send(401);
    } else {
        next();
    }
}
// };