(function () {
    angular
        .module('ProjectApp')
        .controller('ProjectDetailsController', ProjectDetailsController);

    function ProjectDetailsController(ProjectService, $stateParams) {
        var vm = this;

        function init() {
            vm.projectId = $stateParams.projectId;
            ProjectService.getProjectById(vm.projectId)
                .then(function (project) {
                    vm.project = project;
                });
        }
        init();
    }
})();