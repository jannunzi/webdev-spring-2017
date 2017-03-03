(function () {
    require.config({
        paths:{
            angular: 'js/vendor/angular/angular',
            angularRoute: 'js/vendor/angular-route/angular-route'
        },
        shim:{
            'angularRoute': {deps: 'angular'}
        }
    });

    require(['app'],
        function() {
            angular.bootstrap(document, ['finalApp']);
        }
    );
})();
