angular.module 'app', ['ui.router']

class MainController
	@$inject = ['$log']

	constructor: ($log) ->
		vm = @

		return
angular
.module 'app'
.controller 'MainController', MainController

angular.element document
.ready(->
	angular.bootstrap document, ['app']
	return
)