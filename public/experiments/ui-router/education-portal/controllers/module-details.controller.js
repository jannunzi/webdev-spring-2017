(function () {
    angular
        .module('EducationPortalApp')
        .controller('ModuleDetailsController', ModuleDetailsController);
    
    function ModuleDetailsController(ModuleService, $stateParams, $state) {
        var model = this;

        function init() {
            model.moduleId = $stateParams.moduleId;
            ModuleService
                .findModuleById(model.moduleId)
                .then(function(module) {
                    model.module = module;
                    $state.go('module.details.overview');
                });
        }
        init();
    }
})();