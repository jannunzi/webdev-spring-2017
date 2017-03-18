(function () {
    angular
        .module('wam')
        .service('websiteService', websiteService);

    function websiteService($http) {
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.createWebsite = createWebsite;

        function createWebsite(userId, website) {
            return $http.post('/api/experiments/mongoose/wam/user/'+userId+'/website', website)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllWebsitesForUser(userId) {
            return $http.get('/api/experiments/mongoose/wam/user/'+userId+'/website')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();