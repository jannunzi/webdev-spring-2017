(function () {
    require.config({
        paths: {
            'angular': '../../../../js/angular',
            'angularRoute': '../../../../js/angular-route',
            'app': './app',
            'config': './config',
            'controller1': 'controllers/controller1',
            'controller2': 'controllers/controller2',
        },
        shim: {
            'angular': {exports: 'angular'},
            'angularRoute': {deps: ['angular']},
            'controller1': {deps: ['app']},
            'controller2': {deps: ['app']},
            'config': {deps: ['app', 'controller1', 'controller2']}
        }
    });

    require([
        'app',
        'angular',
        'config'
    ], function (app, ng) {
        ng.bootstrap(document, ['HelloApp']);
    });
})();