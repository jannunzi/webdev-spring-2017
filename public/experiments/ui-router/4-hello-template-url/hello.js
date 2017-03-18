(function () {
    angular
        .module('HelloApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider) {
        var states = [
            {
                name: 'hello',
                url: '/hello',
                templateUrl: 'templates/hello.html'
            },
            {
                name: 'bye',
                url: '/bye',
                templateUrl: 'templates/bye.html'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();