(function () {
    angular
        .module('wam')
        .controller('websiteController', websiteController);

    function websiteController($routeParams, websiteService) {
        var model = this;
        model.userId = $routeParams.userId;
        model.createWebsite = createWebsite;

        function init() {
            findAllWebsitesForUser();
        }
        init();

        function createWebsite(website) {
            websiteService
                .createWebsite(website)
                .then(findAllWebsitesForUser)
        }

        function findAllWebsitesForUser() {
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderAllWebsites);
        }

        function renderAllWebsites(websites) {
            model.websites = websites;
        }
    }
})();