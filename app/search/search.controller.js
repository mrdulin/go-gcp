/**
 * Created by Administrator on 2016/5/10.
 */
angular
  .module('demo.controller')
  .controller('SearchCtrl', SearchCtrl);

function SearchCtrl($log, BookService) {

  var vm = this;

  angular.extend(vm, {
    search: search,
    queryString: BookService.getQueryString(),
    bookList: BookService.getCacheBookList()
  });

  function search() {
    if (!vm.queryString) return;
    BookService.search(vm.queryString).then(function (res) {
      var result = res.data;
      vm.bookList = result.Books;
    }, function (err) {
      alert('加载数据失败');
    });
  }

  $log.info('SearchCtrl');
}
