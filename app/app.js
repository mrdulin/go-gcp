var angular = require('angular');
var ngRoute = require('angular-route');

angular.module('demo', [
    'ngRoute',
    'demo.controller',
    'demo.service',
    'demo.filter',
    'demo.directive'
]);

angular.module('demo.controller', []);
angular.module('demo.service', []);
angular.module('demo.filter', []);
angular.module('demo.directive', []);

//lib
window.jQuery = $ = require('jquery');
require('bootstrap/dist/js/bootstrap');

//public
require('./public/services/book');

//app
require('./router');
require('./constant');

require('./main.controller');
require('./search/search.controller');
require('./detail/detail.controller');

