/**
 * Created by dulin on 2015/12/4.
 */
(function() {
    angular
        .module('demo')
        .factory('BlockService', BlockService);

    BlockService.$inject = ['$timeout'];

    function BlockService($timeout) {

        var service = {};
        service.getBlocks = getBlocks;
        return service;

        function getBlocks() {
            var blocks = {
                a: {
                    type: 'game'
                },
                b: {
                    type: 'movie'
                },
                c: {
                    type: 'music'
                }
            };

            return $timeout(function() {
                return blocks;
            }, 2000);
        }

    }

})();