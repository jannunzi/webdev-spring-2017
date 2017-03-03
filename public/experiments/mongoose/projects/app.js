(function () {
    angular
        .module('ProjectApp', [])
        .config(configuration)
        .controller('ProjectController', ProjectController)
        .controller('UserController', UserController)
        .service('Project2UserService', Project2UserService);
    
    function Project2UserService() {
        this.selectedUser = null;
        this.selectedProject = null;
        this.selectProject = function (project) {
            this.selectedProject = project;
        };
        this.getSelectedProject = function () {
            return this.selectedProject;
        }
        this.selectUser = function (user) {
            this.selectedUser = user;
        }
        this.getSelectedUser = function () {
            return this.selectedUser;
        }
    }

    function configuration($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
    }

    function UserController($scope, $http, Project2UserService) {

        $scope.createUser = createUser;
        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.addUserToProject = addUserToProject;

        function init() {
            findAllUsers();
        }
        init();

        function addUserToProject(user) {
            var selectedProject = Project2UserService.selectedProject;
            $http
                .put('/api/experiments/mongoose/project/'+selectedProject._id+'/user/'+user._id)
                .success(function(){
                    findAllUsers();
                    findAllProjects();
                });
        }

        function selectUser(user) {
            $scope.user = user;
            Project2UserService.selectedUser = user;
        }

        function deleteUser(user) {
            $http.delete('/api/experiments/mongoose/user/'+user._id)
                .success(findAllUsers);
        }

        function createUser(user) {
            $http.post('/api/experiments/mongoose/user', user)
                .success(findAllUsers);
        }
        
        function findAllUsers() {
            $http.get('/api/experiments/mongoose/user')
                .success(renderUsers);
        }

        function renderUsers(users) {
            $scope.users = users;
        }
    }
    
    function ProjectController($scope, $http, Project2UserService) {

        $scope.createProject = createProject;
        $scope.deleteProject = deleteProject;
        $scope.selectProject = selectProject;

        function init() {
            findAllProjects();
        }
        init();

        function selectProject(project) {
            $scope.project = project;
            Project2UserService.selectedProject = project;
        }

        function createProject(project) {
            $http.post('/api/experiments/mongoose/project', project)
                .success(findAllProjects);
        }

        function deleteProject(project) {
            $http.delete('/api/experiments/mongoose/project/'+project._id)
                .success(findAllProjects);
        }

        function findAllProjects() {
            $http.get('/api/experiments/mongoose/project')
                .success(renderProjects);
        }

        function renderProjects(projects) {
            $scope.projects = projects;
        }
    }
})();