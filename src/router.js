(function () {
    angular
        .module('demo')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/Book/:bookId', {
                templateUrl: 'src/book/book.tpl.html',
                controller: 'BookController',
                controllerAs: 'book',
                requireLogin: false
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'src/book/chapter/chapter.tpl.html',
                controller: 'ChapterController as chapter',
                requireLogin: true
            })
            .when('/login', {
                templateUrl: 'src/login/login.tpl.html',
                controller: 'LoginController as login',
                requireLogin: false
            })
            .otherwise({
                redirectTo: '/login'
            });

    }
})();