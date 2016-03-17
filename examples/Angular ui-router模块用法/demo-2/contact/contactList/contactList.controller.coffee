class ContactListController
	@$inject = ['$log']

	constructor: ($log)->
		vm = @
		vm.list =
			1: '老王',
			2: '小头爸爸'
			3: '大头儿子'
			4: '大头儿子妈'

		return

angular
.module 'app'
.controller 'ContactListController', ContactListController