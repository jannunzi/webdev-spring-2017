(function () {
    angular
        .module('passportApp')
        .controller('adminController', adminController);

    function adminController($location, userService) {
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

        function deleteUser(userId) {
            userService
                .deleteUser(userId)
                .then(findAllUsers);
        }
        
        function findAllUsers() {
            userService
                .findAllUsers()
                .then(function (users) {
                    model.users = users;
                }, function (err) {
                    model.error = err;
                });
        }
    }
})();