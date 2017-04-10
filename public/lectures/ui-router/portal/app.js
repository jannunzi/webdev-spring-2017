(function () {
    angular
        .module('portalApp', ['ui.router'])
        .config(configuration)
        .service('courseService', courseService);
    
    function configuration($stateProvider, $urlRouterProvider) {
        var course = {
            name: 'course',
            url: '/course',
            views: {
                root: {
                    templateUrl: 'views/templates/course-list.html',
                    controller: function ($scope, courseService) {
                        $scope.courses = courseService.findAllCourses();
                    }
                }
            }
        };

        var courseDetails = {
            name: 'course.details',
            url: '/:courseId',
            views: {
                courseDetails: {
                    templateUrl: 'views/templates/course-details.html',
                    controller: function ($scope, $stateParams, courseService) {
                        $scope.courseId = $stateParams.courseId;
                        $scope.course = courseService.findCourseById($scope.courseId);
                    }
                }
            }
        };

        var courseNew = {
            name: 'course.new',
            url: '/new/course',
            views: {
                courseDetails: {
                    templateUrl: 'views/templates/course-new.html'
                }
            }
        }

        $stateProvider.state(course);
        $stateProvider.state(courseDetails);
        $stateProvider.state(courseNew);

        $urlRouterProvider.otherwise('/startUrl');
    }

    function courseService() {
        this.findAllCourses = findAllCourses;
        this.findCourseById = findCourseById;

        var courses = [
            {_id: '123', name: 'CS5610', overview: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '}
            ,{_id: '234', name: 'CS4550'}
            ,{_id: '345', name: 'CS3200'}
        ];

        function findCourseById(courseId) {
            return courses.find(function (course) {
                return course._id == courseId
            });
        }

        function findAllCourses() {
            return courses;
        }
    }
})();