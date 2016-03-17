angular.module 'app', ['ui.router']

class MainController
	@$inject = ['$log', '$scope']

	constructor: ($log, $scope) ->
		vm = @
		vm.content = '主控制器'
		return

angular
.module 'app'
.controller 'MainController', MainController

angular
.element document
.ready(->
	angular.bootstrap document, ['app']
	return
)