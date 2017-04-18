var app = require('../../express');

app.get('/some/route/mapping/to/hello', helloHandler);
app.get('/a/simple/calculator/:operation/*', calculatorHandler);

function helloHandler(req, res) {
    res.render('lecture-morning/hello.ejs');
}

function calculatorHandler(req, res) {
    var operation = req.params.operation;

    console.log(req.params);

    var params = req.params[0].split('/');

    var param0 = parseInt(params[0]);
    var param1 = parseInt(params[1]);

    var data = {
        operation: operation,
        param0: param0,
        param1: param1,
        params: params
    };

    if(operation === 'add') {
        data.result = parseInt(params[0]) + parseInt(params[1]);
    } else if(operation === 'pow') {
        var p0 = parseInt(params[0]);
        var p1 = parseInt(params[1]);
        data.result = Math.pow(p0, p1);
    } else if(operation === 'sqr') {
        var p0 = parseInt(params[0]);
        data.result = Math.pow(p0, 2);
    }
    res.render('lecture-morning/calculator.ejs', data);
}