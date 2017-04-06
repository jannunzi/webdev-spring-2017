(function () {
    angular
        .module('wamApp', ['ui.router'])
        .config(configuration)
        .service('websiteService', websiteService)

    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'website',
                url: '/website',
                views: {
                     'root': {
                         templateUrl: 'templates/website/website-list.html',
                         controller: function ($scope, websiteService) {
                             $scope.websites = websiteService.findAllWebsites();
                         }
                     }
                }
            },
            {
                name: 'website.edit',
                url: '/:websiteId',
                views: {
                    'websiteEditor': {
                        templateUrl: 'templates/website/website-edit.html',
                        controller: function ($scope, $stateParams, websiteService, $state) {
                            $scope.websiteId = $stateParams.websiteId;
                            if($scope.websiteId != 'new') {
                                $scope.website = angular.copy(websiteService.findWebsiteById($scope.websiteId));
                            }
                            $scope.updateWebsite = function (website) {
                                websiteService.updateWebsite($scope.websiteId, website);
                                $state.go('website');
                            };
                            $scope.createWebsite = function (website) {
                                websiteService.createWebsite(website);
                                $state.go('website');
                            };
                        }
                    }
                }
            },
            {
                name: 'page',
                url: '/website/:websiteId/page',
                views: {
                    'root': {
                        templateUrl: 'templates/page/page-list.html',
                        controller: function ($scope, websiteService, $stateParams) {
                            $scope.pages = websiteService.findPages($stateParams.websiteId);
                        }
                    }
                },
                name: 'page.edit',
                url: '/:pageId',
                views: {
                    'pageEdit': {
                        templateUrl: 'templates/page/page-edit.html',
                        controller: function ($scope) {
                            
                        }
                    }
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/website');
    }

    function websiteService() {
        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;
        this.findAllWebsites = findAllWebsites;
        this.findWebsiteById = findWebsiteById;
        this.findPages = findPages;

        var websites = [];

        function updateWebsite(websiteId, website) {
            for(var w in websites) {
                if(websites[w]._id == websiteId) {
                    websites[w] = website;
                }
            }
        }
        
        function findWebsiteById(websiteId) {
            return websites.find(function (website) {
                return website._id == websiteId;
            });
        }

        function createWebsite(website) {
            website._id = (new Date()).getDate();
            websites.push(website);
        }

        function findPages(websiteId) {
            var website = websites.find(function (website) {
                return website._id == websiteId;
            });
            return website.pages;
        }

        function findAllWebsites() {
            return websites;
        }
    }
})();