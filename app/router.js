angular
    .module('demo')
    .config(config);

function config($routeProvider) {

    $routeProvider
        .otherwise('/')
        .when('/', {
            controller: 'SearchCtrl as vm',
            templateUrl: 'search/search.html'
        })
        .when('/detail/:id', {
            controller: 'DetailCtrl as vm',
            templateUrl: 'detail/detail.html',
            resolve: {
                BookDetail: function($route, BookService) {
                    var id = $route.current.params.id;
                    return BookService.getDetail(id).then(function(res) {
                        return res.data;
                    });
                }
            }
        });

}