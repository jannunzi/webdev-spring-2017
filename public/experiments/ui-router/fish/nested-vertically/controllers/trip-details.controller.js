(function () {
    angular
        .module('FishApp')
        .controller('TripDetailsController', TripDetailsController);
    
    function TripDetailsController(TripService, $stateParams) {
        var model = this;

        function init() {
            model.tripId = $stateParams.tripId;
            TripService
                .findTripById(model.tripId)
                .then(function (trip) {
                    model.trip = trip;
                });
        }
        init();
    }
})();