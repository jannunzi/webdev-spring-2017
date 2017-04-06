(function () {
    angular
        .module('splitApp', ['ui.router'])
        .config(configuration);
    
    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'website',
                url: '/website',
                views: {
                     'top@': {template: 'website header'}
                    ,'left@': {template: 'website list <a ui-sref="website.new">Add</a>  <a ui-sref="website.edit({websiteId: 123})">Edit</a>'}
                    ,'center@': {template: 'website preview'}
                    ,'bottom@': {template: 'website footer'}
                    ,'right@': {template: 'website tools'}
                }
            }
            ,{
                name: 'website.new',
                url: '/new',
                views: {
                    'top@': {template: 'asfasdf'}
                    ,'left@': {template: 'website list'}
                    ,'center@': {template: 'website new'}
                    ,'bottom@': {template: 'website footer'}
                    ,'right@': {template: 'website tools'}
                }
            }
            ,{
                name: 'website.edit',
                url: '/:websiteId',
                views: {
                    'top@': {template: 'asfasdf'}
                    ,'left@': {template: 'website list'}
                    ,'center@': {template: 'website editor <a ui-sref="website">Done</a>'}
                    ,'bottom@': {template: 'website footer'}
                    ,'right@': {template: 'website tools'}
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/website');
    }
})();