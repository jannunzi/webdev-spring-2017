(function () {
    angular
        .module('FishApp', ['ui.router'])
        .config(configuration);

    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'trip',
                url: '/trip',
                templateUrl: 'templates/trip-list.html',
                controller: 'TripListController',
                controllerAs: 'model'
            }
            ,{
                name: 'trip.details',
                url: '/:tripId',
                templateUrl: 'templates/trip-details.html',
                controller: 'TripDetailsController',
                controllerAs: 'model'
            }
            ,{
                name: 'trip.details.fish',
                url: '/fish',
                templateUrl: 'templates/fish-list.html',
                controller: 'FishListController',
                controllerAs: 'model'
            }
            ,{
                name: 'trip.details.fish.details',
                url: '/:fishId',
                templateUrl: 'templates/fish-details.html',
                controller: 'FishDetailsController',
                controllerAs: 'model'
            }
        ];
        states.forEach(function(state){
            $stateProvider.state(state);
        });
        $urlRouterProvider.when('', '/trip');
    }
})();