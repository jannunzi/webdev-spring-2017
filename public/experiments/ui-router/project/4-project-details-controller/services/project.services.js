(function () {
    angular
        .module('ProjectApp')
        .service('ProjectService', ProjectService);

    function ProjectService($http) {
        this.getAllProjects = getAllProjects;
        
        function getAllProjects() {
            return $http.get('data/projects.json', {cache: true})
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();