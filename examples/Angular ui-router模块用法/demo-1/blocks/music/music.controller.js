/**
 * Created by dulin on 2015/12/7.
 */
(function() {
    angular
        .module('demo')
        .controller('MusicController', MusicController);

    MusicController.$inject = ['$log', '$scope'];

    function MusicController($log, $scope) {

        $scope.vm = {};
        $scope.vm.content = 'This is music block';
    }
})();