define(['config',
    'controllers/controller1',
    'controllers/controller2'],

    function(config, controller1, controller2){
        var app = angular.module('finalApp', ['ngRoute']);
        app.config(config);
        app.controller('controller1', controller1);
        app.controller('controller2', controller2);
    });