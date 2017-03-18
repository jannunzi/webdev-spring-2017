(function () {
    angular
        .module('ProjectApp')
        .service('BugService', BugService);

    function BugService($http) {
        this.getAllBugs = getAllBugs;
        this.getBugById = getBugById;

        function getBugById(bugId) {
            return this.getAllBugs().then(function (allBugs) {
                return allBugs.find(function (bug) {
                    return bug._id == bugId;
                });
            })
        }

        function getAllBugs() {
            return $http.get('data/bugs.json', {cache: true})
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();