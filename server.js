// var express = require('express');
// var app = express();
var app = require('./express');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var passport      = require('passport');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');

app.use(session({
    secret: 'this is the secret', // process.env.SESSION_SECRET
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.use(app.express.static(__dirname + '/public'));

// require ("./test/app.js")(app);
require("./todo/app")(app);
require("./blog/app")(app);
require('./experiments/upload/app')(app);
// require('./experiments/mongoose/app')(app);

// require("./assignment-wed/app.js")(app);

require("./lectures/mongo/movies")(app);
// require('./lectures-wed/mongo/movies')(app);
require('./experiments/mongoose/projects/app')(app);
require('./experiments/mongoose/wam/app')(app);
require('./experiments/flickr/flickr.service.server')(app);
require('./experiments/mongoose/movies/app')(app);

// require('./lectures-wed/mongo/movies/app')(app);

// require('./experiments/mongoose/university/app')(app);

// require('./lectures/mongoose/university/university');

// require('./experiments/postgre/test123')(app);
// require('./experiments/postgre/projects/app')(app);
// require('./experiments/postgre/movies/app')(app);

// require('./lectures/postgre/movies/services/actor.service.server')(app);
// require('./lectures/postgre/movies/services/movie.service.server')(app);

// require('./experiments/passport/local/services/user.service.server');

require('./lectures-wed/passportjs/services/user.service.server');

// require('./lectures/passportjs/services/user.service.server');

// require('./is3500/movie/app')(app);

require('./experiments/ejs/hello');

// require('./experiments/wax/app');

require('./experiments/lecture/ejs');

require('./lectures/ejs/hello');
require('./lectures/dynamic-angular/app');
// require('./experiments/mongojs/app');

require('./lectures-wed/ejs/hello');

// require('./wax/app');

require('./lectures/wax/app');

var assignment = require("./assignment/app.js");
assignment(app);

var port      = process.env.PORT || 3000;

app.listen(port);