(function () {
    angular
        .module('EducationPortalApp')
        .controller('ModuleLecturesController', ModuleLecturesController)
        .controller('ModuleLectureController', ModuleLectureController);

    function ModuleLectureController(ModuleService, $stateParams) {
        var model = this;

        function init() {
            model.lectureId = $stateParams.lectureId;
            model.moduleId  = $stateParams.moduleId;
            ModuleService
                .findLectureById(model.moduleId, model.lectureId)
                .then(function(lecture) {
                    model.lecture = lecture;
                });
        }
        init();
    }
    
    function ModuleLecturesController($state, ModuleService, $stateParams) {
        var model = this;

        function init() {
            model.moduleId = $stateParams.moduleId;
            ModuleService
                .findModuleById(model.moduleId)
                .then(function(module) {
                    model.lectures = module.lectures;
                    $state.go('module.details.lectures.detail',
                        {lectureId: model.lectures[0]._id});
                });
        }
        init();
    }
})();