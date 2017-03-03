(function () {
    require.config({
        paths: {
            'angular': '../../../../js/angular',
            'angularRoute': '../../../../js/angular-route',
            'app': './app',
            'config': './config'
        },
        shim: {
            'angular': {exports: 'angular'},
            'angularRoute': {deps: ['angular']},
            'config': {deps: ['app']}
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