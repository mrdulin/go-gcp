/**
 * Created by dulin on 2015/12/4.
 */
angular.module('demo', ['ui.router']);

(function () {

    angular
        .module('demo')
        .controller('MainController', MainController);

    MainController.$inject = ['$log', '$window'];

    function MainController($log, $window) {

        var vm = this;

    }

})();