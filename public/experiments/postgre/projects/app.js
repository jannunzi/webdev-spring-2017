(function () {
    angular
        .module('project', [])
        .controller('projectController', projectController)
        .service('projectService', projectService)
        .service('developerService', developerService)
        .service('taskService', taskService);

    function projectController(developerService, projectService, taskService) {

        var model = this;

        model.createDeveloper = createDeveloper;
        model.deleteDeveloper = deleteDeveloper;
        model.updateDeveloper = updateDeveloper;
        model.selectDeveloper = selectDeveloper;

        model.createProject = createProject;
        model.deleteProject = deleteProject;
        model.updateProject = updateProject;
        model.selectProject = selectProject;

        model.assignDeveloperToProject = assignDeveloperToProject;
        model.unassignDeveloperFromProject = unassignDeveloperFromProject;

        function init() {
            findAllDevelopers();
            findAllProjects();
        }
        init();

        function unassignDeveloperFromProject(developerId, projectId) {
            taskService.unassignDeveloperFromProject(developerId, projectId)
                .then(findAssignments);
        }

        function assignDeveloperToProject(developerId, projectId) {
            taskService.assignDeveloperToProject(developerId, projectId)
                .then(findAssignments);
        }

        function findAssignments() {
            selectProject(model.project);
            selectDeveloper(model.developer);
        }

        function selectDeveloper(developer) {
            model.developer = developer;
            taskService
                .findAllProjectsByDeveloperId(developer.id)
                .then(renderAssignedProjects);
        }

        function selectProject(project) {
            model.project = project;
            taskService
                .findAllDevelopersByProjectId(project.id)
                .then(renderAssignedDevelopers);
        }

        function updateDeveloper(developerId, developer) {
            developerService
                .updateDeveloper(developerId, developer)
                .then(findAllDevelopers);
        }

        function deleteDeveloper(developerId) {
            developerService
                .deleteDeveloper(developerId)
                .then(findAllDevelopers);
        }

        function createDeveloper(developer) {
            developerService
                .createDeveloper(developer)
                .then(findAllDevelopers);
        }

        function findAllDevelopers() {
            developerService
                .findAllDevelopers()
                .then(renderDevelopers);
        }

        function renderDevelopers(developers) {
            model.developers = developers;
            model.developer = null;
        }

        function updateProject(projectId, project) {
            projectService
                .updateProject(projectId, project)
                .then(findAllProjects);
        }

        function deleteProject(projectId) {
            projectService
                .deleteProject(projectId)
                .then(findAllProjects);
        }

        function createProject(project) {
            projectService
                .createProject(project)
                .then(findAllProjects);
        }

        function findAllProjects() {
            projectService
                .findAllProjects()
                .then(renderProjects);
        }

        function renderAssignedProjects(projects) {
            model.assignedProjects = projects;
        }

        function renderAssignedDevelopers(developers) {
            model.assignedDevelopers = developers;
        }

        function renderProjects(projects) {
            model.projects = projects;
            model.project = null;
        }
    }

    function developerService($http) {
        this.createDeveloper = createDeveloper;
        this.findAllDevelopers = findAllDevelopers;
        this.findDeveloperById = findDeveloperById;
        this.updateDeveloper = updateDeveloper;
        this.deleteDeveloper = deleteDeveloper;

        function createDeveloper(developer) {
            return $http.post('/api/experiments/postgre/projects/developer', developer)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllDevelopers() {
            return $http.get('/api/experiments/postgre/projects/developer')
                .then(function (response) {
                    return response.data;
                });
        }

        function findDeveloperById(developerId) {
            return $http.get('/api/experiments/postgre/projects/developer/'+developerId)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateDeveloper(developerId, developer) {
            return $http.put('/api/experiments/postgre/projects/developer/'+developerId, developer)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteDeveloper(developerId) {
            return $http.delete('/api/experiments/postgre/projects/developer/'+developerId)
                .then(function (response) {
                    return response.data;
                });
        }
    }
    
    function taskService($http) {
        this.assignDeveloperToProject = assignDeveloperToProject;
        this.findAllProjectsByDeveloperId = findAllProjectsByDeveloperId;
        this.findAllDevelopersByProjectId = findAllDevelopersByProjectId;
        this.unassignDeveloperFromProject = unassignDeveloperFromProject;
        
        function assignDeveloperToProject(developerId, projectId) {
            return $http.post('/api/experiments/postgre/projects/developer/'+developerId+'/project/'+projectId)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllProjectsByDeveloperId(developerId) {
            return $http.get('/api/experiments/postgre/projects/developer/'+developerId+'/project')
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllDevelopersByProjectId(projectId) {
            return $http.get('/api/experiments/postgre/projects/project/'+projectId+'/developer')
                .then(function (response) {
                    return response.data;
                });
        }

        function unassignDeveloperFromProject(developerId, projectId) {
            return $http.delete('/api/experiments/postgre/projects/developer/'+developerId+'/project/'+projectId)
                .then(function (response) {
                    return response.data;
                });
        }
    }

    function projectService($http) {
        this.createProject = createProject;
        this.findAllProjects = findAllProjects;
        this.findProjectById = findProjectById;
        this.updateProject = updateProject;
        this.deleteProject = deleteProject;

        function createProject(project) {
            return $http.post('/api/experiments/postgre/projects/project', project)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllProjects() {
            return $http.get('/api/experiments/postgre/projects/project')
                .then(function (response) {
                    return response.data;
                });
        }

        function findProjectById(projectId) {
            return $http.get('/api/experiments/postgre/projects/project/'+projectId)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateProject(projectId, project) {
            return $http.put('/api/experiments/postgre/projects/project/'+projectId, project)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteProject(projectId) {
            return $http.delete('/api/experiments/postgre/projects/project/'+projectId)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();