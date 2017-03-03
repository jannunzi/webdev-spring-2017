(function () {
    require
        .config({
            paths: {
                'angular': '../../../../js/angular',
                'angularRoute': '../../../../js/angular-route',
            },
            shim: {
                'angular': {exports: 'angular'},
                'angularRoute': {deps: ['angular']}
            }
        });
    require(['app', 'angular'], function (app, ng) {
        ng.bootstrap(document, ['HelloApp']);
    });
})();