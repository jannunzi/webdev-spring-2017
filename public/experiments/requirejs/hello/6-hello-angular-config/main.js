(function () {
    require
        .config({
            paths: {
                'angular'       : 'vendor/angular',
                'angularRoute'  : 'vendor/angular-route',
                'app'           : 'app',
                'config'        : 'config'
            },
            shim: {
                'angular'       : {exports : 'angular'},
                'angularRoute'  : {exports : 'angularRoute', deps : ['angular']},
                'config'        : {deps: ['app']}
            }
        });

    require([
        'app',
        'angular',
        'config'
    ],
        function (app, ng) {
            ng.bootstrap(document, ['HelloApp']);
    });
})();