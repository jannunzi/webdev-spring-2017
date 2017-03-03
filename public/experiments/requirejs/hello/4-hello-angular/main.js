(function () {
    require
        .config({
            paths: {
                'angular': 'vendor/angular'
            },
            shim: {
                'angular': {exports: 'angular'}
            }
        });

    require(['app'],
        function (app) {
            angular.bootstrap(document, ['HelloApp']);
    });
})();