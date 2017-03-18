(function () {
    angular
        .module('wam')
        .controller('userController', userController);

    function userController(userService) {
        var model = this;

        model.createUser = createUser;
        model.selectUser = selectUser;
        model.deleteUser = deleteUser;
        model.updateUser = updateUser;

        function init() {
            findAllUsers();
        }
        init();

        function createUser(user) {
            model.user = null;
            userService
                .createUser(user)
                .then(findAllUsers);
        }

        userService.selectedUserId = null;
        function selectUser(userId) {
            userService.selectedUserId = userId;
            userService
                .findUserById(userId)
                .then(renderUser);
        }

        function updateUser(userId, user) {
            model.user = null;
            userService
                .updateUser(userId, user)
                .then(findAllUsers);
        }

        function renderUser(user) {
            model.user = user;
        }

        function renderAllUsers(users) {
            model.users = users;
        }
        
        function findAllUsers() {
            userService
                .findAllUsers()
                .then(renderAllUsers);
        }

        function deleteUser(userId) {
            userService
                .deleteUser(userId)
                .then(findAllUsers);
        }
    }
})();