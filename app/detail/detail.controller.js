/**
 * Created by Administrator on 2016/5/10.
 */

angular
    .module('demo.controller')
    .controller('DetailCtrl', DetailCtrl);

function DetailCtrl($log, BookDetail, $routeParams) {
    var vm = this;
    angular.extend(vm, {
        bookDetail: BookDetail
    });

    $log.info($routeParams.id);
}