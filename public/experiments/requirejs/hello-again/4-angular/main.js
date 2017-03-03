(function () {
    require
        .config({
            paths: {
                'angular': '../../../../js/angular'
            },
            shim: {
                'angular': {exports: 'angular'}
            }
        });
    
    require(['app', 'angular'], function (app, ng) {
        ng.bootstrap(document, ['HelloApp']);
    });
})();