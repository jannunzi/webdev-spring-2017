(function () {
    angular
        .module('passportApp')
        .service('userService', userService);
    
    function userService($http) {
        this.register = register;
        this.loggedIn = loggedIn;
        this.login = login;
        this.logout = logout;
        this.isAdmin = isAdmin;
        this.findAllUsers = findAllUsers;
        
        function findAllUsers() {
            return $http.get('/api/experiments/passport/admin/user')
                .then(function (response) {
                    return response.data;
                });
        }

        function isAdmin() {
            return $http.get('/api/experiments/passport/isAdmin')
                .then(function (response) {
                    return response.data;
                });
        }

        function logout() {
            return $http.post('/api/experiments/passport/logout')
                .then(function (response) {
                    return response.data;
                });
        }

        function login(user) {
            return $http.post('/api/experiments/passport/login', user)
                .then(function (response) {
                    return response.data;
                });
        }

        function loggedIn() {
            return $http.get('/api/experiments/passport/loggedin')
                .then(function (response) {
                    return response.data;
                });
        }

        function register(user) {
            return $http.post('/api/experiments/passport/register', user)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();