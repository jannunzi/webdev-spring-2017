(function () {
    angular
        .module('eduApp', ['ui.router'])
        .config(configuration)
        .service('courseService', courseService);

    function configuration($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '/home',
                views: {
                    root: {
                        templateUrl: 'templates/home.html',
                        controller: function ($scope, courseService) {
                            $scope.courses = courseService.findAllCourses();
                        }
                    }
                }
            }
            ,{
                name: 'library',
                url: '/library/:category',
                views: {
                    root: {
                        templateUrl: 'templates/category.html',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.category = $stateParams.category;
                            $scope.courses = courseService.findCoursesByCategory($stateParams.category);
                        }
                    }
                }
            }
            ,{
                name: 'library.level',
                url: '/level/:level',
                views: {
                    level: {
                        templateUrl: 'templates/level.html',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.courses = courseService.findCoursesByCategoryAndLevel($stateParams.category, $stateParams.level);
                        }
                    }
                }
            }
            ,{
                name: 'course',
                url: '/course/:courseId',
                views: {
                    root: {
                        templateUrl: 'templates/course.html',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.course = courseService.findCourseById($stateParams.courseId);
                        }
                    },
                    'modules@course': {
                        template: 'Modules ewq'
                    }
                    // 'coursemain@course': {
                    //     templateUrl: 'templates/course-main.html'
                    // },
                    // 'courseside@course': {
                    //     templateUrl: 'templates/course-side.html'
                    // }
                }
            }
            ,{
                name: 'course.overview',
                url: '/overview',
                views: {
                    details: {
                        template: '{{overview}}',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.overview = courseService.findCourseById($stateParams.courseId).overview;
                        }
                    }
                }
            }
            ,{
                name: 'course.lectures',
                url: '/lectures',
                views: {
                    details: {
                        template: '{{lectures}}',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.lectures = courseService.findCourseById($stateParams.courseId).lectures;
                        }
                    }
                }
            }
            ,{
                name: 'course.modules',
                url: '/modules',
                views: {
                    modules: {
                        template: '{{modules}}',
                        controller: function ($scope, courseService, $stateParams) {
                            $scope.modules = courseService.findCourseById($stateParams.courseId).modules;
                        }
                    }
                }
            }
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
        $urlRouterProvider.otherwise('/home');
    }

    function courseService() {
        this.findAllCourses = findAllCourses;
        this.findCoursesByCategory = findCoursesByCategory;
        this.findCourseById = findCourseById;
        this.findCoursesByCategoryAndLevel = findCoursesByCategoryAndLevel;

        var courses = [
            {_id: '123', modules: [{title: 'Module 123.123'}, {title: 'Module 123.234'}], overview: 'Overview 123', lectures: 'Lectures 123', title: 'Photoshop', category: 'design', level: 'beginner'},
            {_id: '234', modules: [{title: 'Module 234.234'}, {title: 'Module 234.345'}], overview: 'Overview 234', lectures: 'Lectures 234', title: 'Drawing', category: 'design', level: 'expert'},
            {_id: '345', modules: [{title: 'Module 345.345'}, {title: 'Module 345.456'}], overview: 'Overview 345', lectures: 'Lectures 345', title: 'Android OS', category: 'software', level: 'expert'},
            {_id: '456', modules: [{title: 'Module 456.456'}, {title: 'Module 456.567'}], overview: 'Overview 456', lectures: 'Lectures 456', title: 'MEAN', category: 'software', level: 'beginner'},
            {_id: '567', modules: [{title: 'Module 567.567'}, {title: 'Module 567.678'}], overview: 'Overview 567', lectures: 'Lectures 567', title: 'iPhone', category: 'software', level: 'expert'}
        ];

        function findCoursesByCategoryAndLevel(category, level) {
            return courses.filter(function (course) {
                return course.category === category && course.level === level;
            });
        }
        function findCourseById(courseId) {
            return courses.find(function (course) {
                return course._id === courseId;
            });
        }
        function findCoursesByCategory(category) {
            return courses.filter(function (course) {
                return course.category === category;
            });
        }

        function findAllCourses() {
            return courses;
        }
    }
})();