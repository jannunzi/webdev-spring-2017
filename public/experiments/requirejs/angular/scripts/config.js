(function () {
    angular
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/home.html'
            })
    }
})();