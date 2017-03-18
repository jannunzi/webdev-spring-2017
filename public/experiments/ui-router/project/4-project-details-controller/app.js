(function () {
    angular
        .module('ProjectApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider) {
        $stateProvider.state({
            name: 'project',
            url:  '/project',
            templateUrl: 'templates/project-list.html',
            controller: 'ProjectListController',
            controllerAs: 'model'
        });
        $stateProvider.state({
            name: 'project.details',
            url:  '/:projectId',
            templateUrl: 'templates/project-details.html',
            controller: 'ProjectDetailsController',
            controllerAs: 'model'
        });
    }
})();