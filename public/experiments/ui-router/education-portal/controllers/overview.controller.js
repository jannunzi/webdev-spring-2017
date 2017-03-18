(function () {
    angular
        .module('EducationPortalApp')
        .controller('ModuleOverviewController', ModuleOverviewController);
    
    function ModuleOverviewController(ModuleService, $stateParams) {
        var model = this;

        function init() {
            model.moduleId = $stateParams.moduleId;
            ModuleService
                .findModuleById(model.moduleId)
                .then(function(module) {
                    model.overview = module.overview;
                });
        }
        init();
    }
})();