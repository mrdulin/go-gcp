/**
 * Created by Administrator on 2016/5/10.
 */
angular
  .module('demo.service')
  .factory('BookService', BookService);

function BookService($http, $log, Const) {

  var queryString = '';
  var bookList = [];

  var service = {};
  angular.extend(service, {
    search: search,
    getDetail: getDetail,
    getQueryString: getQueryString,
    getCacheBookList: getCacheBookList,
    setCacheBookList: setCacheBookList
  });
  return service;

  function setCacheBookList(books) {
    bookList = books;
  }

  function getCacheBookList() {
    return bookList;
  }

  function getQueryString() {
    return queryString;
  }

  function setQueryString(query) {
    queryString = query;
  }

  function search(query) {
    setQueryString(query);
    var url = Const.host + '/search/' + query;
    return $http.get(url).then(function (res) {
      var result = res.data;
      setCacheBookList(result.Books);
      return res;
    })
  }

  function getDetail(id) {
    var url = Const.host + '/book/' + id;
    return $http.get(url);
  }

}
