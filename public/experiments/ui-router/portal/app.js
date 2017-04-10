(function () {
    angular
        .module('portalApp', ['ui.router'])
        .config(configuration)
        .service('courseService', courseService)

    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'course',
                url: '/course',
                views: {
                     'root': {
                         templateUrl: 'templates/course/course-list.html',
                         controller: function ($scope, courseService) {
                             $scope.courses = courseService.findAllCourses();
                         }
                     }
                }
            }
            ,{
                name: 'course.edit',
                url: '/:courseId',
                views: {
                    'courseEditor': {
                        templateUrl: 'templates/course/course-edit.html',
                        controller: function ($scope, $stateParams, courseService, $state) {
                            $scope.courseId = $stateParams.courseId;
                            if($scope.courseId != 'new') {
                                $scope.course = angular.copy(courseService.findCourseById($scope.courseId));
                            }
                            $scope.updateCourse = function (course) {
                                courseService.updateCourse($scope.courseId, course);
                                $state.go('course');
                            };
                            $scope.createCourse = function (course) {
                                courseService.createCourse(course);
                                $state.go('course');
                            };
                        }
                    }
                }
            }
            ,{
                name: 'module',
                url: '/course/:courseId/module',
                views: {
                    'root': {
                        templateUrl: 'templates/module/module-list.html',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.courseId = $stateParams.courseId;
                            $scope.course = courseService.findCourseById($stateParams.courseId);
                            $scope.modules = courseService.findModules($stateParams.courseId);
                        }
                    }
                }
            }
            ,{
                name: 'module.edit',
                url: '/:moduleId',
                views: {
                    'moduleEdit': {
                        templateUrl: 'templates/module/module-edit.html',
                        controller: function ($scope, $stateParams, courseService, $state) {
                            $scope.courseId = $stateParams.courseId;
                            $scope.moduleId = $stateParams.moduleId;
                            if($scope.moduleId != 'new') {
                                $scope.module = angular.copy(courseService.findModuleById($scope.courseId, $scope.moduleId));
                            }
                            $scope.updateModule = function (module) {
                                courseService.updateModule($scope.courseId, $scope.moduleId, module);
                                $state.go('module');
                            };
                            $scope.createModule = function (module) {
                                courseService.createModule($scope.courseId, module);
                                $state.go('module');
                            };
                        }
                    }
                }
            }
            ,{
                name: 'module.edit.overview',
                url: '/overview',
                views: {
                    'moduleDetails': {
                        templateUrl: 'templates/module/overview-edit.html',
                        controller: function ($scope, $stateParams, courseService) {
                            $scope.courseId = $stateParams.courseId;
                            $scope.moduleId = $stateParams.moduleId;
                            $scope.updateOverviewAbstract = function (abstract) {
                                courseService.updateOverviewAbstract($scope.moduleId, $scope.courseId, abstract);
                            }
                        }
                    }
                }
            }
            ,{
                name: 'module.edit.lecture',
                url: '/lectures',
                views: {
                    'moduleDetails': {
                        templateUrl: 'templates/module/lecture-edit.html'
                    }
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/course');
    }

    function courseService() {
        this.createCourse = createCourse;
        this.updateCourse = updateCourse;
        this.findAllCourses = findAllCourses;
        this.findCourseById = findCourseById;

        this.findModules = findModules;
        this.findModuleById = findModuleById;
        this.createModule = createModule;
        this.updateModule = updateModule;

        this.updateOverviewAbstract = updateOverviewAbstract;

        var courses = [
            {_id: '123', name: 'Course 123', modules: [
                {
                    _id: '123123',
                    name: 'Module 123123',
                    overview: {
                        abstract: 'Abstract 123123',
                        sections: [
                            'Section 123',
                            'Section 234'
                        ]
                    }
                }
                ,{
                    _id: '123123',
                    name: 'Module 123123',
                    overview: {
                        abstract: 'Abstract 123123',
                        sections: [
                            'Section 123',
                            'Section 234'
                        ]
                    }
                }
            ]}
            ,{_id: '234', name: 'Course 234', modules: [
                {_id: '234234', name: 'Module 234234',
                    overview: {
                        abstract: 'Abstract',
                        sections: [
                            'Section 123',
                            'Section 234'
                        ]
                    }
                }
            ]}
        ];

        function updateOverviewAbstract(moduleId, courseId, abstract) {
            var module = findModuleById(courseId, moduleId);
            module.abstract = abstract;
        }

        function updateCourse(courseId, course) {
            for(var w in courses) {
                if(courses[w]._id == courseId) {
                    courses[w] = course;
                }
            }
        }
        
        function findCourseById(courseId) {
            return courses.find(function (course) {
                return course._id == courseId;
            });
        }

        function createCourse(course) {
            course._id = (new Date()).getTime();
            course.modules = [];
            courses.push(course);
        }

        function findAllCourses() {
            return courses;
        }

        function findModules(courseId) {
            var course = courses.find(function (course) {
                return course._id == courseId;
            });
            return course.modules;
        }

        function createModule(courseId, module) {
            module._id = (new Date()).getTime();
            var course = findCourseById(courseId);
            course.modules.push(module);
        }

        function findModuleById(courseId, moduleId) {
            var course = findCourseById(courseId);
            return course.modules.find(function (module) {
                return module._id == moduleId;
            });
        }

        function updateModule(courseId, moduleId, newModule) {
            var module = findModuleById(courseId, moduleId);
            module.name = newModule.name;
        }
    }
})();