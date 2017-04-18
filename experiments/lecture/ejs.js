var app = require('../../express');

// map HTTP URL GET request from browser to controller
app.get('/experiments/lecture/ejs/page', pageController);
app.get('/experiments/lecture/ejs/application/:applicationName', applicationController)
app.get('/experiments/ejs/calculator/:operation/*', calculator);

function applicationController(req, res) {
    var applicationName = req.params.applicationName;
    console.log(applicationName);
    var scope = {
        applicationName: applicationName
    };
    res.render('experiments/lecture/01-application', scope);
}

function calculator(req, res) {
    var operation = req.params.operation;
    var params = req.params[0].split('/');

    var response = {
        operation: operation,
        params: params
    };

    if(operation === 'add') {
        param1 = parseInt(params[0]);
        param2 = parseInt(params[1]);
        response.result = param1 + param2;
    } else if(operation === 'sqr') {
        param1 = parseInt(params[0]);
        response.result = param1 * param1;
    } else if(operation === 'pow') {
        param1 = parseInt(params[0]);
        param2 = parseInt(params[1]);
        response.result = Math.pow(param1, param2);
    }
    res.render('experiments/calculator', response);
}

// controller handles request
// renders template view
function pageController(req, res) {
    // maps to views/page.ejs
    res.render('experiments/lecture/00-map-routes-to-views');
}