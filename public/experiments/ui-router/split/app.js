(function () {
    angular
        .module('splitApp', ['ui.router'])
        .config(configuration);
    
    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'topics',
                url: '/',
                views: {
                    'top': {template: 'top'}
                    ,'left': {
                        templateUrl: 'left.html'
                    }
                    ,'center': {
                        templateUrl: 'center.html'
                    }
                    ,'bottom': {template: 'bottom'}
                    ,'right': {template: 'right'}
                }
            }
            ,{
                name: 'topics.A',
                url: 'A',
                views: {
                    'leftContent': {
                        template: 'A Content'
                    }
                }
            }
            ,{
                name: 'topics.B',
                url: 'B',
                views: {
                    leftContent: {
                        template: 'B Content'
                    }
                }
            }
            ,{
                name: 'topics.X',
                url: 'X',
                views: {
                    centerContent: {
                        template: 'X Content'
                    }
                }
            }
            ,{
                name: 'topics.Y',
                url: 'Y',
                views: {
                    centerContent: {
                        template: 'Y Content'
                    }
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/');
    }
})();