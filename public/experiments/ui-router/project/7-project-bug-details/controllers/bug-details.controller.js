(function () {
    angular
        .module('ProjectApp')
        .controller('BugDetailsController', BugDetailsController);

    function BugDetailsController(BugService, $stateParams) {
        var vm = this;

        function init() {
            vm.bugId = $stateParams.bugId;
            BugService.getBugById(vm.bugId)
                .then(function (bug) {
                    vm.bug = bug;
                });
        }
        init();
    }
})();