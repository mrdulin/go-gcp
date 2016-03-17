/**
 * Created by dulin on 2015/12/4.
 */
(function () {
    angular
        .module('demo')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/home');


        $stateProvider
            .state('home', {
                url: '/home',
                //指定模版html字符串
                template: '<h1>Home</h1>',
                resolve: {
                    title: function() {
                        return 'My Contacts';
                    }
                },
                //可以在state对象上附加自定义数据（推荐使用data作为自定义数据的字段，避免冲突）
                data: {
                    customData1: 5,
                    customData2: "blue"
                },
                controller: function($state) {
                    //获取自定义数据

                    console.log($state.current.data.customData1);
                    console.log($state.current.data.customData2);
                },

                //onEnter和onExit是两个可选的回调函数
                //onEnter回调在该state变成active状态时触发
                //onExit回调在该state变成inactive状态时触发
                //resolve的内容同样可以注入到这两个回调函数中
                onEnter: function(title){
                    if(title){
                        // ... do something ...
                    }
                },
                onExit: function(title){
                    if(title){
                        // ... do something ...
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                //通过路径指定模版
                templateUrl: './contact/contact.tpl.html',
                controller: 'ContactController',
                controllerAs: 'contact',
                //父状态resolve的数据可以注入到子状态中，如contact.block
                resolve: {
                    blocks: ['BlockService', function (BlockService) {
                        return BlockService.getBlocks();
                    }]
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: './about/about.tpl.html',
                //可以通过resolve为controller提供自定义内容（动态加载的内容）或数据，这些内容和数据可以注入到controller中
                //如果这些依赖的内容和数据是promise，则controller实例化之前和$stateChangeSuccess事件触发前，这些promise会被resolve并转化为具体的值。

                resolve: {
                    //返回一个对象，由于不是promise，这个依赖会被立即resolve
                    simpleObj:  function(){
                        return {value: 'simple!'};
                    },

                    //函数返回一个promise，你可以在这个函数中注入任意service服务
                    promiseObj:  function($http){
                        // $http returns a promise for the url data
                        return $http({method: 'GET', url: '../../../data/request3.json'});
                    },

                    //如果你想要对请求结果做一些处理，在then的回调函数中进行。
                    promiseObj2:  function($http){
                        return $http({method: 'GET', url: '../../../data/request3.json'})
                            .then (function (data) {
                            return doSomeStuffFirst(data);
                        });

                        function doSomeStuffFirst() {}
                    },

                    //如果是一个字符串，则代表已定义好的service的名字
                    translations: "translations",

                    //将上面的translations注入到下面
                    translations2: function(translations, $stateParams){
                        // 我们这里假设getLang是translations服务的一个方法
                        // 该方法通过$http请求数据
                        // 同时假设此时的url为 "/:lang/home".
                        return translations.getLang($stateParams.lang);
                    },

                    //返回自定义的promise
                    greeting: function($q, $timeout){
                        var deferred = $q.defer();
                        $timeout(function() {
                            deferred.resolve('Hello!');
                        }, 1000);
                        return deferred.promise;
                    }

                },
                controller: function ($scope, simpleObj, promiseObj, promiseObj2, translations, translations2, greeting) {
                    //上述路由中resolve的内容可以在controller中注入来使用。
                    $scope.simple = simpleObj.value;

                    // You can be sure that promiseObj is ready to use!
                    $scope.items = promiseObj.data.items;
                    $scope.items = promiseObj2.items;

                    $scope.title = translations.getLang("english").title;
                    $scope.title = translations2.title;

                    $scope.greeting = greeting;

                }

            })
            .state('contact.block', {
                url: '/block/:blockName',
                //templateProvider可以注入别的服务
                templateProvider: function (blocks, $stateParams, $http) {

                    var tplMap = {
                        'game': './blocks/game/game.tpl.html',
                        'movie': './blocks/movie/movie.tpl.html',
                        'music': './blocks/music/music.tpl.html'
                    };

                    var block = blocks[$stateParams.blockName];

                    return $http.get(tplMap[block.type])
                        .then(function (rep) {
                            return rep.data;
                        });

                },

                controllerProvider: function(blocks, $stateParams) {

                    var block = blocks[$stateParams.blockName];

                    return block.type.replace(/^\S/,function(s){
                        return s.toUpperCase();
                    }) + 'Controller';

                }

            })

            .state('game', {
                url: '/game',
                //如果要传递并不需要在浏览器url中显示的参数，使用params，如果在这里指定有哪些参数，那么指定state的视图的controller中将不能
                //通过$stateParams取到，例如country就将取不到，name可以取到
                params: {name: null},
                templateUrl: './game/game.tpl.html',
                controller: 'GameCtrl as vm'
            });
    }

})();