(function () {
    angular
        .module('HelloApp')
        .controller('ByeController', ByeController);

    function ByeController($scope) {
        $scope.bye = 'Goodbye from controller';
    }
})();