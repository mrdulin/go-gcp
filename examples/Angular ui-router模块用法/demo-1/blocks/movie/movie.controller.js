/**
 * Created by dulin on 2015/12/7.
 */
(function() {
    angular
        .module('demo')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['$log', '$scope'];

    function MovieController($log, $scope) {

        $scope.vm = {};
        $scope.vm.content = 'This is movie block';
    }
})();