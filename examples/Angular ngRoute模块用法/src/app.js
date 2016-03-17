angular.module('demo', ['ngRoute', 'ngAnimate', 'ngMock']);

(function () {
    angular
        .module('demo')
        .run(run);

    run.$inject = ['$rootScope', '$location', 'UserService', '$log', '$route'];

    function run($rootScope, $location, UserService, $log, $route) {

        $rootScope.$on('$routeChangeStart', function (event, next, current) {

            var path = $location.path();
            if(!path) return;

            if(next) {
                $log.info(next);
                if(path !== '/login') {
                    $rootScope.path = path;
                }
                $log.info($rootScope.path);

                    if(!UserService.isLogin && $route.routes[path].requireLogin) {
                    event.preventDefault();
                    //search清除url上的查询字符串
                    $location.search({}).path('/login');
                }
            }

        });

    }
})();

(function () {
    angular
        .module('demo')
        .controller('MainController', MainController);

    MainController.$inject = ['$log', '$route', '$routeParams', '$location'];

    function MainController($log, $route, $routeParams, $location) {

        var ctrl = this;
        ctrl.model = {
            $location: $location,
            $route: $route,
            $routeParams: $routeParams
        };
        ctrl.fn = {};

    }
})();