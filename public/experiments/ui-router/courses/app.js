(function () {
    angular
        .module('courseApp', ['ui.router'])
        .config(configuration);
    
    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'main',
                views: {
                    navigation: {
                        templateUrl: 'views/navigation/templates/navigation.view.html',
                        controller: 'moduleController',
                        controllerAs: 'model'
                    },
                    content: {
                        templateUrl: 'views/content/templates/content.view.html'
                    }
                }
            }
            ,{
                name: 'main.overview',
                url: '/:moduleId',
                templateUrl: 'views/overview/overview.html'
            }
            ,{
                name: 'main.lectures',
                url: '/:moduleId',
                templateUrl: 'views/lectures/lectures.html'
            }
            ,{
                name: 'main.assignments',
                url: '/:moduleId',
                templateUrl: 'views/assignments/assignments.html'
            }
        ];

        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get('$state');
            $state.go('main');
        });

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();