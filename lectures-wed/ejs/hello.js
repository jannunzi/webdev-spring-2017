var app = require('../../express');

app.get('/this/can/be/any/route', handleHello);
app.get('/to/my/dynamic/javascript', handleHelloJs);
app.get('/some/other/simple/calculator/:operation/*', calculatorController);

function calculatorController(req, res) {
    var operation = req.params.operation;
    var parameters = req.params[0].split('/'); // ['2', '4']
    var param0 = parseInt(parameters[0]);
    var param1 = parseInt(parameters[1] ? parameters[1] : 0);
    var data = {
        operation: operation,
        param0: param0,
        param1: param1
    };
    if(operation === 'add') {
        data.result = param0 + param1;
    } if(operation === 'pow') {
        data.result = Math.pow(param0, param1);
    } if(operation === 'sqr') {
        data.result = param0 * param0;
    }
    res.render('lecture-evening/calculator', data);
}

function handleHello(req, res) {
    res.render('lecture-evening/hello');
}

function handleHelloJs(req, res) {
    res.setHeader('content-type', 'text/javascript');
    res.render('lecture-evening/hellojs.ejs');
}

