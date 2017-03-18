(function () {
    angular
        .module('EducationPortalApp')
        .controller('ModuleController', ModuleController);
    
    function ModuleController(ModuleService) {
        var model = this;

        function init() {
            ModuleService
                .findAllModules()
                .then(function(modules) {
                    model.modules = modules;
                });
        }
        init();
    }
})();