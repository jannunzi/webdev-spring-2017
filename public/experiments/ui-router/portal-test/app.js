(function () {
    angular
        .module('portalApp', ['ui.router'])
        .config(configuration)
        .service('moduleService', moduleService);

    function configuration($urlRouterProvider, $stateProvider) {
        var states = [
            {
                name: 'portal',
                url: '/',
                views: {
                    portal: {
                        templateUrl: 'templates/portal.html'
                    },
                    // 'header@portal': {
                    //     templateUrl: 'templates/header.html'
                    // },
                    'left@portal': {
                        templateUrl: 'templates/left.html',
                        controller: function ($scope, moduleService) {
                            $scope.modules = moduleService.findAllModules();
                        }
                    },
                    'main@portal': {
                        templateUrl: 'templates/main.html'
                    },
                    // 'footer@portal': {
                    //     template: 'default footer'
                    // }
                }
            },
            {
                name: 'portal.module',
                url: 'module/:moduleId',
                views: {
                    'main': {
                        templateUrl: 'templates/module.html',
                        controller: function ($scope, $state, $stateParams, moduleService) {
                            $scope.moduleId = $stateParams.moduleId;
                            $scope.module = moduleService.findModuleById($stateParams.moduleId);
                        }
                    },
                    'footer': {
                        template: 'Module Footer'
                    },
                    'header': {
                        template: 'Module Header'
                    }
                }
            },
            {
                name: 'portal.module.overview',
                url: '/overview',
                views: {
                    'content': {
                        template: '{{overview}}',
                        controller: function ($scope, $state, $stateParams, moduleService) {
                            var module = moduleService.findModuleById($stateParams.moduleId);
                            $scope.overview = module.overview;
                        }
                    },
                    'footer': {
                        template: 'overview Footer'
                    },
                    'header': {
                        template: 'overview Header'
                    }
                }
            },
            {
                name: 'portal.module.lectures',
                url: '/lectures',
                views: {
                    'content': {
                        template: '{{lectures}}',
                        controller: function ($scope, $state, $stateParams, moduleService) {
                            var module = moduleService.findModuleById($stateParams.moduleId);
                            $scope.moduleId = $stateParams.moduleId;
                            $scope.lectures = module.lectures;
                        }
                    }
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
        $urlRouterProvider.otherwise('/');
    }
    
    function moduleService() {
        this.findModuleById = findModuleById;
        this.findAllModules = findAllModules;

        var modules = [
            {_id: 123, title: 'Module 1', overview: 'overview 123', lectures: 'lectures 123'},
            {_id: 234, title: 'Module 2', overview: 'overview 234', lectures: 'lectures 234'},
            {_id: 345, title: 'Module 3', overview: 'overview 345', lectures: 'lectures 345'}
        ];

        function findAllModules() {
            return modules;
        }

        function findModuleById(moduleId) {
            return modules.find(function (module) {
                return module._id == moduleId;
            });
        }
    }
})();