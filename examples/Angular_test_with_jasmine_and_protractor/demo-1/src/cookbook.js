/**
 * Created by Administrator on 2016/4/24.
 */
angular.module('cookbook', []);

angular
    .module('cookbook')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
    $scope.name = 'mrdulin';
}