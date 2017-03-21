(function () {
    angular
        .module('HelloApp')
        .controller('HelloController', HelloController);

    function HelloController($scope) {
        $scope.hello = 'Hello from controller';
        $scope.say = function (message) {
            return message;
        }
    }
})();