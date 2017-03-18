(function () {
    angular
        .module('FishApp')
        .controller('TripListController', TripListController);
    
    function TripListController(TripService) {
        var model = this;

        function init() {
            TripService
                .findAllTrips()
                .then(function (trips) {
                    model.trips = trips;
                });
        }
        init();
    }
})();