/**
 * Created by dulin on 2015/12/4.
 */
(function() {
    angular
        .module('demo')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$log'];

    function ContactController($log) {

        var vm = this;
    }

})();