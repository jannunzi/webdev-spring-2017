(function () {
    angular
        .module("weeblyApp", ['ui.router'])
        .config(configuration)
        .service('pageService', pageService);

    function configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/websites');
        var states = [
            {
                name: 'websites',
                url: '/websites',
                templateUrl: 'templates/websites.html',
                controller: function ($scope) {
                    $scope.websites = [
                        {_id: '123', title: 'Website 123'},
                        {_id: '234', title: 'Website 234'},
                        {_id: '345', title: 'Website 345'}
                    ]
                }
            }
            ,{
                name: 'website',
                url: '/website/:websiteId',
                templateUrl: 'templates/website.html',
                controller: function ($scope, $stateParams, pageService) {
                    $scope.websiteId = $stateParams.websiteId;
                }
            }
            ,{
                name: 'website.widgets',
                url: '/widgets',
                template: 'widgets'
            }
            ,{
                name: 'website.pages',
                url: '/pages',
                templateUrl: 'templates/pages.html',
                controller: function ($scope, $stateParams, pageService) {
                    $scope.pages = pageService.findPagesForWebsite($stateParams.websiteId);
                }
            }
            ,{
                name: 'website.pages.pagenew',
                url: '/pagenew',
                templateUrl: 'templates/pagenew.html',
                controller: function ($scope, pageService, $state, $stateParams) {
                    $scope.addPage = function (page) {
                        page._id = (new Date()).getDate();
                        console.log(page);
                        pageService.addPage($stateParams.websiteId, page);
                        $state.go('website.pages.page', {websiteId: $stateParams.websiteId, pageId: page._id});
                    };
                }
            }
            ,{
                name: 'website.pages.page',
                url: '/:pageId',
                templateUrl: 'templates/page.html',
                controller: function ($scope, $stateParams, pageService) {
                    $scope.pageId = $stateParams.pageId;
                    $scope.page = pageService.findPageById($stateParams.pageId);
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        })
    }

    function pageService() {
        this.findPagesForWebsite = findPagesForWebsite;
        this.findPageById = findPageById;
        this.addPage = addPage;
        function addPage(websiteId, page) {
            pages[page._id] = page;
            websites[websiteId].push(page);
        }
        function findPagesForWebsite(websiteId) {
            return websites[websiteId];
        }
        function findPageById(pageId) {
            return pages[pageId];
        }
        var pages = {
             '123': {_id: '123', title: 'Page 123'}
            ,'234': {_id: '234', title: 'Page 234'}
            ,'345': {_id: '345', title: 'Page 345'}
            ,'456': {_id: '456', title: 'Page 456'}
            ,'qwe': {_id: 'qwe', title: 'Page qwe'}
            ,'wer': {_id: 'wer', title: 'Page wer'}
            ,'ert': {_id: 'ert', title: 'Page ert'}
            ,'rty': {_id: 'rty', title: 'Page rty'}
            ,'asd': {_id: 'asd', title: 'Page asd'}
            ,'sdf': {_id: 'sdf', title: 'Page sdf'}
            ,'dfg': {_id: 'dfg', title: 'Page dfg'}
            ,'fgh': {_id: 'fgh', title: 'Page fgh'}
        };
        var websites = {
            '123': [
                 {_id: '123', title: 'Page 123'}
                ,{_id: '234', title: 'Page 234'}
                ,{_id: '345', title: 'Page 345'}
                ,{_id: '456', title: 'Page 456'}
            ]
            ,'234': [
                {_id: 'qwe', title: 'Page qwe'}
                ,{_id: 'wer', title: 'Page wer'}
                ,{_id: 'ert', title: 'Page ert'}
                ,{_id: 'rty', title: 'Page rty'}
            ]
            ,'345': [
                {_id: 'asd', title: 'Page asd'}
                ,{_id: 'sdf', title: 'Page sdf'}
                ,{_id: 'dfg', title: 'Page dfg'}
                ,{_id: 'fgh', title: 'Page fgh'}
            ]
        };
    }
})();