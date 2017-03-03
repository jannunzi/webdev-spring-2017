(function () {
    require
        .config({
            paths: {
                'angular'       : 'vendor/angular',
                'angularRoute'  : 'vendor/angular-route',
                'app': 'app'
            },
            shim: {
                'angular'       : {exports : 'angular'},
                'angularRoute'  : {exports : 'angularRoute', deps : ['angular']}
            }
        });

    require([
        'app',
        'angular'
    ],
        function (app, ng) {
            ng.bootstrap(document, ['HelloApp']);
    });
})();