/**
 * Created by Administrator on 2016/5/10.
 */

angular
  .module('demo.controller')
  .controller('MainCtrl', MainCtrl);

function MainCtrl($log) {
  var vm = this;
  angular.extend(vm, {

  });
  $log.info('main ctrl')
}
