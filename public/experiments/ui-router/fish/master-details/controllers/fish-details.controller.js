(function () {
    angular
        .module('FishApp')
        .controller('FishDetailsController', FishDetailsController);
    
    function FishDetailsController(FishService, $stateParams) {
        var model = this;

        function init() {
            model.fishId = $stateParams.fishId;
            FishService
                .findFishById(model.fishId)
                .then(function (fish) {
                    model.fish = fish;
                });
        }
        init();
    }
})();