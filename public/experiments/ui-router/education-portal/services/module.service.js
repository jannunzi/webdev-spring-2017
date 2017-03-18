(function () {
    angular
        .module('EducationPortalApp')
        .service('ModuleService', ModuleService);

    function ModuleService($http) {
        this.findAllModules = findAllModules;
        this.findModuleById = findModuleById;
        this.findLectureById = findLectureById;

        function findLectureById(moduleId, lectureId) {
            return this.findModuleById(moduleId)
                .then(function (module) {
                    return module.lectures.find(function (lecture) {
                        return lecture._id == lectureId;
                    });
                });
        }

        function findAllModules() {
            return $http.get('data/modules.json')
                .then(function (response) {
                    return response.data;
                });
        }

        function findModuleById(moduleId) {
            return this.findAllModules()
                .then(function (modules) {
                    return modules.find(function (module) {
                        return module._id == moduleId;
                    });
                });
        }
    }
})();