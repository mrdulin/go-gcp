angular.module 'demo', ['ngAnimate']

class DemoController
	@$inject = ['$log']

	constructor: ($log)->
		$log.info @
		vm = @
		vm.bool = no
		vm.toggle = ()->
			vm.bool = not vm.bool
			return
		return


angular
.module 'demo'
.controller 'DemoController', DemoController

