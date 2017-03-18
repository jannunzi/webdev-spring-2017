(function () {
    angular
        .module('HelloApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h2>Hello</h2>'
        };

        var byeState = {
            name: 'bye',
            url: '/bye',
            template: '<h2>Good Bye</h2>'
        };

        $stateProvider.state(helloState);
        $stateProvider.state(byeState);
    }
})();