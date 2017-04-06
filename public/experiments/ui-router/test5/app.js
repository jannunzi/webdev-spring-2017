(function () {
    angular
        .module('splitApp', ['ui.router'])
        .config(configuration)
        .service('websiteService', websiteService)
        .controller('websiteListController', websiteListController)
        .controller('pageListController', pageListController)

    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'websites',
                url: '/websites',
                views: {
                     'websites': {
                         templateUrl: 'website-list.html',
                         controller: 'websiteListController',
                         controllerAs: 'model'
                     }
                }
            }
            ,{
                name: 'websites.pages',
                url: '/:websiteId/pages',
                views: {
                    'pages': {
                        templateUrl: 'page-list.html',
                        controller: 'pageListController',
                        controllerAs: 'model'
                    }
                }
            }
            ,{
                name: 'websites.pages.widgets',
                url: '/:pageId/widgets',
                views: {
                    'widgets': {
                        templateUrl: 'widget-list.html'
                    }
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/websites');
    }

    function websiteListController(websiteService) {
        var model = this;
        model.websites = websiteService.findAllWebsites();
    }

    function pageListController(websiteService, $stateParams) {
        var model = this;
        model.pages = websiteService.findPages($stateParams.websiteId);
    }

    function websiteService() {
        this.findAllWebsites = findAllWebsites;
        this.findPages = findPages;

        var websites = [
            {
                _id: 123,
                name: 'website 123',
                pages: [
                    {
                        _id: 123,
                        name: 'page 123',
                        widgets: [
                            {
                                _id: 123,
                                name: 'widget 123'
                            }
                            ,{
                                _id: 234,
                                name: 'widget 234'
                            }

                        ]
                    }
                    ,{
                        _id: 234,
                        name: 'page 234',
                        widgets: [
                            {
                                _id: 345,
                                name: 'widget 345'
                            }
                            ,{
                                _id: 456,
                                name: 'widget 456'
                            }

                        ]
                    }

                ]
            }
            ,{
                _id: 234,
                name: 'website 234',
                pages: [
                    {
                        _id: 345,
                        name: 'page 345',
                        widgets: [
                            {
                                _id: 567,
                                name: 'widget 567'
                            }
                            ,{
                                _id: 678,
                                name: 'widget 678'
                            }

                        ]
                    }
                    ,{
                        _id: 456,
                        name: 'page 456',
                        widgets: [
                            {
                                _id: 789,
                                name: 'widget 789'
                            }
                            ,{
                                _id: 890,
                                name: 'widget 890'
                            }

                        ]
                    }

                ]
            }
        ];

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