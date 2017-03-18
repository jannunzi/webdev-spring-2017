(function () {
    angular
        .module('EducationPortalApp', ['ui.router'])
        .config(configuration);
    
    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'module',
                url: '/module',
                templateUrl: 'templates/modules.html',
                controller: 'ModuleController',
                controllerAs: 'model'
            }
            ,{
                name: 'module.details',
                url: '/:moduleId',
                templateUrl: 'templates/module-details.html',
                controller: 'ModuleDetailsController',
                controllerAs: 'model'
            }
            ,{
                name: 'module.details.overview',
                url: '/overview',
                templateUrl: 'templates/module-overview.html',
                controller: 'ModuleOverviewController',
                controllerAs: 'model'
            }
            ,{
                name: 'module.details.lectures',
                url: '/lectures',
                templateUrl: 'templates/module-lectures.html',
                controller: 'ModuleLecturesController',
                controllerAs: 'model'
            }
            ,{
                name: 'module.details.lectures.detail',
                url: '/:lectureId',
                templateUrl: 'templates/module-lecture.html',
                controller: 'ModuleLectureController',
                controllerAs: 'model'
            }
        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.when('', '/module');
    }
})();