(function () {
    angular
        .module('passportApp')
        .service('userService', userService)
        .factory('userService2', userService2)

    function userService($http) {
        this.login = login;
        this.loggedin = loggedin;
        this.logout = logout;
        this.register = register;

        function register(user) {
            return $http.post('/api/lecture-morning/register', user)
                .then(function (response) {
                    return response.data;
                });
        }
        
        function logout() {
            return $http.post('/api/lecture-morning/logout')
                .then(function (response) {
                    return response.data;
                });
        }
        
        function loggedin() {
            return $http.post('/api/lecture-morning/loggedin')
                .then(function (response) {
                    return response.data;
                });
        }

        function login(user) {
            return $http.post('/api/lecture-morning/login', user)
                .then(function (response) {
                    return response.data;
                });
        }
    }

    function userService2($http) {
        var api = {
            login: login
        };
        return api;

        function login(user) {
            return $http.post('/api/lecture-morning/login', user)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();