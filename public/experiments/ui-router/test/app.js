(function () {
    angular
        .module('splitApp', ['ui.router'])
        .config(configuration);
    
    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'abc',
                url: '/abc',
                views: {
                     'abc': {templateUrl: 'abc.html'}
                }
            }
            ,{
                name: 'abc.def',
                url: '/def',
                views: {
                    'abc': {templateUrl: 'def.html'}
                }
            }
            ,{
                name: 'abc.def.ghi',
                url: '/ghi',
                views: {
                    'abc': {templateUrl: 'ghi.html'}
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/abc');
    }
})();