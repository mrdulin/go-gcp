
class ContactDetailController
	@$inject = ['$log', '$stateParams', '$state']

	constructor: ($log, $stateParams, $state)->
		vm = @

		$log.info $stateParams
		vm.$stateParams = $stateParams
		vm.randomNum = Math.random()

		vm.reloadState = ->
			$log.info $state.current, $stateParams
#			$state.go $state.current, $stateParams, {reload: yes}

			#或者使用

#			$state.transitionTo $state.current, $stateParams, {reload: yes}

			#或者

			$state.reload();
			return

		return

angular
.module 'app'
.controller 'ContactDetailController', ContactDetailController