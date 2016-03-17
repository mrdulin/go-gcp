class ContactController
	@$inject = ['$log']

	constructor: ($log)->
		vm = @
		vm.content = 'This is contact page'

		return

angular
.module 'app'
.controller 'ContactController', ContactController