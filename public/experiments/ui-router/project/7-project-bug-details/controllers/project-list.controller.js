(function () {
    angular
        .module('ProjectApp')
        .controller('ProjectListController', ProjectListController);

    function ProjectListController(ProjectService) {
        var vm = this;
        // vm.projects = [
        //     {_id: '123', title: 'Project 123'},
        //     {_id: '234', title: 'Project 234'},
        //     {_id: '345', title: 'Project 345'},
        //     {_id: '456', title: 'Project 456'}
        // ];
        function init() {
            ProjectService
                .getAllProjects()
                .then(function (projects) {
                    vm.projects = projects;
                })
        }
        init();
    }
})();