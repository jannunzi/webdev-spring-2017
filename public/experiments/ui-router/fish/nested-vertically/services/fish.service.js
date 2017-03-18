(function () {
    angular
        .module('FishApp')
        .service('FishService', FishService);
    
    function FishService($http) {
        this.findAllFish = findAllFish;
        this.findAllTripFish = findAllTripFish;
        this.findFishById = findFishById;

        function findAllFish() {
            return $http.get('data/fishes.json', {cache: true})
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllTripFish(tripId) {
            return this.findAllFish()
                .then(function (allFish) {
                    return allFish.filter(function (fish) {
                        return fish.tripId == tripId;
                    })
                });
        }

        function findFishById(fishId) {
            return this.findAllFish()
                .then(function (allFish) {
                    return allFish.find(function (fish) {
                        return fish._id == fishId;
                    });
                });
        }
    }
})();