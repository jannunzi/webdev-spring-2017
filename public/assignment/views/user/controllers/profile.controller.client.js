(function(){
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);
    
    function profileController($routeParams, UserService) {
        var vm = this;
        var userId = $routeParams['uid'];

        var user = UserService.findUserById(userId);

        console.log(user);
    }
})();