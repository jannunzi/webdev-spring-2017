(function () {
    angular
        .module('routerApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'templates/home.html'
                    },
                    'footer@home': {
                        template: 'Home Footer'
                    }
                }
            }
            ,{
                name: 'home.list',
                url: '/list',
                views: {
                    '':{
                        templateUrl: 'templates/list.html'
                    },
                    'footer@home.list': {
                        template: 'list footer'
                    }
                }
            }
            ,{
                name: 'home.list.details',
                url: '/:id',
                views: {
                    'details': {
                        template: '{{id}}',
                        controller: function ($scope, $stateParams) {
                            console.log('details');
                            $scope.id = $stateParams.id;
                            console.log($scope.id);
                        }
                    }
                }
            }
            ,{
                name: 'home.paragraph',
                url: '/paragraph',
                templateUrl: 'templates/paragraph.html'
            }
            ,{
                name: 'about',
                url: '/about',
                // templateUrl: 'templates/about.html'
                views: {
                    '': {
                        templateUrl: 'templates/about.html' },
                    'columnOne@about': {
                        template: 'Column 1' },
                    'columnTwo@about': {
                        template: 'Column 2'
                    }
                }
            }
        ];
        $urlRouterProvider.otherwise('/home');
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    }
})();