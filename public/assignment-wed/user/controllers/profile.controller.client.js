(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);
    
    function ProfileController($routeParams, UserService) {
        var vm = this;

        // event handlers
        vm.updateUser = updateUser;
        // vm.deleteUser = deleteUsers;

        var userId = $routeParams['uid'];

        function init() {
            var promise = UserService.findUserById(userId);
            promise.success(function(user){
                vm.user = user;
            });
        }
        init();

        function updateUser(newUser) {
            UserService
                .updateUser(userId, newUser)
                .success(function (user) {
                    if(user != null) {
                        vm.message = "User Successfully Updated!"
                    } else {
                        vm.error = "Unable to update user";
                    }
                });
        }
    }
})();