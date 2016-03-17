class HomeService
	@$inject = ['$timeout']

	constructor: ($timeout)->
		return {
			getName: ()->
				$timeout ()->
					'coffeeScript'
				, 2000
		}

angular
.module 'app'
.factory 'HomeService', HomeService
