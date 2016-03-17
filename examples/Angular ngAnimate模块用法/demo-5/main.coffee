angular.module 'demo', ['ngAnimate']

class DemoController
	@$inject = ['$log']

	constructor: ($log)->
		vm = @
		vm.onOff = no
		return

angular
.module 'demo'
.controller 'DemoController', DemoController