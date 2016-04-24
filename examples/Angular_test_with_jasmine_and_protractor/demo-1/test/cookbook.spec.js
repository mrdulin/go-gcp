/**
 * Created by Administrator on 2016/4/24.
 */
describe('MainCtrl', function() {

    //写法1
    //beforeEach(module('cookbook'));
    //
    //it('should assign the correct name to scope', inject(function($controller, $rootScope) {
    //    var $scope = $rootScope.$new();
    //    $controller('MainCtrl', {$scope: $scope});
    //
    //    expect($scope.name).toEqual('mrdulin');
    //}));

    //写法2
    var $scope;
    beforeEach(module('cookbook'));
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('MainCtrl', {$scope: $scope});
    }));

    it('should assign the correct name to scope', function() {
        expect($scope.name).toEqual('mrdulin');
    });

});