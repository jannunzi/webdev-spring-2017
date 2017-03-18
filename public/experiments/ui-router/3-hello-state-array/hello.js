(function () {
    angular
        .module('HelloApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider) {
        var states = [
            {
                name: 'hello',
                url: '/hello',
                template: '<h2>Hello</h2>'
            },
            {
                name: 'bye',
                url: '/bye',
                template: '<h2>Good Bye</h2>'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();