define([
    'app',
    'angular'
],
    function () {
        angular
            .module('RequireSampleApp')
            .config(Config);

        function Config($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home/home.html'
                })
        }
});