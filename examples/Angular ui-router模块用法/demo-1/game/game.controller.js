/**
 * Created by dulin on 2016/2/3.
 */

(function() {
    angular
        .module('demo')
        .controller('GameCtrl', GameCtrl);

    GameCtrl.$inject = ['$log', '$stateParams'];

    function GameCtrl($log, $stateParams) {
        var vm = this;
        angular.extend(vm, {
            name: $stateParams.name,
            country: $stateParams.country
        });

    }
})();