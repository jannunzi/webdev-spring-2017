(function () {
    angular
        .module('ProjectApp')
        .service('ProjectService', ProjectService);

    function ProjectService($http) {
        this.getAllProjects = getAllProjects;
        this.getProjectById = getProjectById;

        function getProjectById(projectId) {
            return this.getAllProjects().then(function (allProjects) {
                return allProjects.find(function (project) {
                    return project._id == projectId;
                });
            })
        }

        function getAllProjects() {
            return $http.get('data/projects.json', {cache: true})
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();