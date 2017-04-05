var app = require('../../express');
app.get('/experiments/ejs/hello', helloController);

function helloController(req, res) {
    res.render('experiments/ejs/hello.ejs');
}