var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);
require("./todo/app")(app);
require("./blog/app")(app);
require('./experiments/upload/app')(app);
// require('./experiments/mongoose/app')(app);

// require("./assignment-wed/app.js")(app);

require("./lectures/mongo/movies")(app);
// require('./lectures-wed/mongo/movies')(app);
require('./experiments/mongoose/projects/app')(app);

var assignment = require("./assignment/app.js");
assignment(app);

var port      = process.env.PORT || 4000;

app.listen(port);