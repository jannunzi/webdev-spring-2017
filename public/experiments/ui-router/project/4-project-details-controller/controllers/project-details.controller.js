(function () {
    angular
        .module('ProjectApp')
        .controller('ProjectDetailsController', ProjectDetailsController);

    function ProjectDetailsController(ProjectService, $stateParams) {
        var vm = this;

        function init() {
            vm.projectId = $stateParams.projectId;
        }
        init();
    }
})();