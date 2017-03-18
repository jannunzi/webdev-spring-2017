(function () {
    angular
        .module('FishApp')
        .controller('FishListController', FishListController);
    
    function FishListController(FishService, $stateParams) {
        var model = this;

        function init() {
            model.tripId = $stateParams.tripId;
            FishService
                .findAllTripFish(model.tripId)
                .then(function (fishes) {
                    model.fishes = fishes;
                });
        }
        init();
    }
})();