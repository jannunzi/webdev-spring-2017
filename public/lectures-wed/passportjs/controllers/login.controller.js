(function () {
    angular
        .module('passportApp')
        .controller('loginController', loginController);
    
    function loginController($http, $location) {
        var model = this;
        model.login = function (user) {
            $http.post('/api/lectures-wed/login', user)
                .then(function (response) {
                    $location.url('/profile');
                }, function (err) {
                    alert('sorry, cant login');
                });
        };
    }
})();