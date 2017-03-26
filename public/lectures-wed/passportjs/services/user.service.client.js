(function () {
    angular
        .module('passportApp')
        .service('userService', userService);

    function userService($http) {
        this.checkLoggedIn = checkLoggedIn;
        this.logout = logout;

        function checkLoggedIn() {
            return $http.get('/api/lectures-wed/loggedin')
                .then(function (response) {
                    return response.data;
                });
        }

        function logout() {
            return $http.post('/api/lectures-wed/logout')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();