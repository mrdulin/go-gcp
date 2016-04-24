(function () {
    angular
        .module('demo')
        .controller('BookController', BookController);

    BookController.$inject = ['$log', '$routeParams', '$scope'];

    function BookController($log, $routeParams, $scope) {

        var ctrl = this;
        ctrl.model = {
            name: 'BookController',
            params: $routeParams
        };
        ctrl.fn = {
            setName: setName
        };

        function setName() {
            ctrl.model.name = 'This is Book page.';
        }

        $scope.$on('$viewContentLoaded', function (event) {
            console.log('content loaded!', event)
        });


    }
})();