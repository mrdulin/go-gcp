(function () {

    angular
        .module('demo')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$log', 'UserService', '$rootScope', '$location'];

    function LoginController($log, UserService, $rootScope, $location) {

        var ctrl = this;

        ctrl.username = '';
        ctrl.password = '';

        ctrl.login = login;

        function login() {
            UserService.login(ctrl.username, ctrl.password).then(function(isLogin) {
                if(isLogin) {
                    $location.path($rootScope.path);
                }
            });
        }
    }
})();