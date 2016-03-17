class config
	@$inject = ['$stateProvider', '$urlRouterProvider']

	constructor: ($stateProvider, $urlRouterProvider)->
		$urlRouterProvider
			.when '/', '/report'
			.otherwise '/'

		$stateProvider
			.state 'report', {
				url: '/report'
				views:
					filters:
						templateUrl: './report/filters/filters.tpl.html'
						controller: 'FiltersController as filters'
					tableData:
						templateUrl: './report/tableData/tableData.tpl.html'
						controller: 'TableDataController as tableData'
					graph:
						templateUrl: './report/graph/graph.tpl.html'
						controller: 'GraphController as graph'
			}

		return

angular
.module 'app'
.config config

