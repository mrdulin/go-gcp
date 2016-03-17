/**
 * Created by dulin on 2015/12/7.
 */
(function() {
    angular
        .module('demo')
        .controller('GameController', GameController);

    GameController.$inject = ['$log', '$scope'];

    function GameController($log, $scope) {

        $scope.vm = {};
        $scope.vm.content = 'This is game block';
    }
})();