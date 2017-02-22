(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebSiteListController);
    
    function WebSiteListController($routeParams, WebsiteService) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.userId = userId;
        
        function init() {
            WebsiteService
                .findAllWebsites(userId)
                .success(function(websites){
                    vm.websites = websites
                });
        }
        init();
    }
})();
