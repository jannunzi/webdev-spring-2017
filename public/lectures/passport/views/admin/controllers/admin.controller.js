(function () {
    angular
        .module('passportApp')
        .controller('adminController', adminController);
    
    function adminController(userService) {
        var model = this;

        model.deleteUser = deleteUser;
        model.updateUser = updateUser;

        function init() {
            findAllUsers();
        }
        init();

        function updateUser(user) {
            userService
                .updateUser(user)
                .then(findAllUsers);
        }

        function findAllUsers() {
            userService.
                findAllUser()
                .then(renderUsers);
        }

        function deleteUser(user) {
            userService
                .deleteUser(user._id)
                .then(findAllUsers);
        }
        
        function renderUsers(users) {
            model.users = users;
        }
    }
})();