var myApp = angular.module('hellosolarsystem', ['ui.router', 'ui.router.visualizer']);

myApp.config(function($stateProvider) {
    // An array of state definitions
    var states = [
        {
            name: 'hello',
            url: '/hello',
            // Using component: instead of template:
            component: 'hello'
        },

        {
            name: 'about',
            url: '/about',
            component: 'about'
        },

        {
            name: 'people',
            url: '/people',
            component: 'people',
            // This state defines a 'people' resolve
            // It delegates to the PeopleService to HTTP fetch (async)
            // The people component receives this via its `bindings: `
            resolve: {
                people: function(PeopleService) {
                    return PeopleService.getAllPeople();
                }
            }
        },

        {
            name: 'person',
            // This state takes a URL parameter called personId
            url: '/people/{personId}',
            component: 'person',
            // This state defines a 'person' resolve
            // It delegates to the PeopleService, passing the personId parameter
            resolve: {
                person: function(PeopleService, $transition$) {
                    return PeopleService.getPerson($transition$.params().personId);
                }
            }
        }
    ]

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});

// To account for plunker embeds timing out, preload the async data
myApp.run(function($http) {
    $http.get('data/people.json', { cache: true });
});