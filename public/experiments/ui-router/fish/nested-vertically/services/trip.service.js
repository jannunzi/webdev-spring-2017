(function () {
    angular
        .module('FishApp')
        .service('TripService', TripService);
    
    function TripService($http) {
        this.findAllTrips = findAllTrips;
        this.findTripById = findTripById;

        function findAllTrips() {
            return $http.get('data/trips.json')
                .then(function (response) {
                    return response.data;
                });
        }

        function findTripById(tripId) {
            return this.findAllTrips()
                .then(function (allTrips) {
                    return allTrips.find(function (trip) {
                        return trip._id == tripId;
                    });
                });
        }
    }
})();