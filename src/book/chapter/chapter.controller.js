(function () {
    angular
        .module('demo')
        .controller('ChapterController', ChapterController);

    ChapterController.$inject = ['$log', '$routeParams'];

    function ChapterController($log, $routeParams) {

        var ctrl = this;
        ctrl.model = {
            name: 'ChapterController',
            params: $routeParams
        };
        ctrl.fn = {};

    }
})();