(function () {
    angular
        .module('uiRouterApp', ['ui.router'])
        .config(configuration)
        .service('courseService', courseService);
    
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
                name: 'course.new',
                url: '/new',
                views: {
                    'courseEditor': {
                        templateUrl: 'templates/course/course-edit.html',
                        controller: function ($scope, courseService, $state, $stateParams) {
                            $scope.courseId = $stateParams.courseId;
                            $scope.createCourse = function (course) {
                                courseService.createCourse(course);
                                $state.go('course');
                            }
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
                            $scope.course = courseService.findCourseById($scope.courseId);
                            $scope.updateCourse = function (newCourse) {
                                courseService.updateCourse($scope.courseId, newCourse);
                            };
                            // console.log(course);
                        }
                    }
                }
            },
            {
                name: 'module',
                url: '/course/:courseId/module',
                views: {
                    'root': {
                        template: 'list of modules'
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
        this.findAllCourses = findAllCourses;
        this.createCourse = createCourse;
        this.findCourseById = findCourseById;
        this.updateCourse = updateCourse;

        var courses = [
            {_id: '123', title: 'MEAN Stack'},
            {_id: '234', title: 'MongoDB'},
            {_id: '345', title: 'Java 101'}
        ];

        function updateCourse(courseId, course) {
            for(var c in courses) {
                if(courses[c]._id == courseId) {
                    courses[c] = course;
                }
            }
        }

        function findCourseById(courseId) {
            return angular.copy(courses.find(function (course) {
                return course._id == courseId;
            }));
        }

        function createCourse(course) {
            course._id = (new Date()).getTime() + '';
            courses.push(course);
        }

        function findAllCourses() {
            return courses;
        }
    }
})();