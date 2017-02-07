(function(){
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);
    
    function profileController($routeParams, UserService) {
        var vm = this;
        var userId = $routeParams['uid'];
        vm.update = function (newUser) {
            var user = UserService.updateUser(userId, newUser);
            if(user == null) {
                vm.error = "unable to update user";
            } else {
                vm.message = "user successfully updated"
            }
        };

        var user = UserService.findUserById(userId);
        vm.user = user;

        console.log(user);
    }
})();