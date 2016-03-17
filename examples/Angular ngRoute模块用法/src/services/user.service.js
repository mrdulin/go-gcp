(function () {
    angular
        .module('demo')
        .service('UserService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {

        var service = this;

        service.login = login;
        service.isLogin = false;
        service.username = '';

        function login(username, password) {
            return $http.post('../../data/login.json', {
                username: username,
                password: password
            }).then(function (rep) {
                if(rep.data.result === 'success') {
                    service.isLogin = true;
                    service.username = username;
                    return true;
                }
            });
        }

        return service;

    }
})();