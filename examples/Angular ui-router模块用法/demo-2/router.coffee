class config
	@$inject = ['$stateProvider', '$urlRouterProvider']

	constructor: ($stateProvider, $urlRouterProvider)->

		$urlRouterProvider
			.when '/', 'home'
			.otherwise '/home'

		##这种对象形式的路由要注意的是name和parent字段
		home =
			name: 'home'
			url: '/home'
			templateUrl: './home/home.tpl.html'
			controller: 'HomeController'
			controllerAs: 'home'
			resolve:
				name: (HomeService) ->
					HomeService.getName()

		contact =
			name: 'contact'
			url: '/contact'
			templateUrl: './contact/contact.tpl.html'
			controller: 'ContactController as contact'

		contactList =
			name: 'contact.list'
			#url前加'^'符号，则该url的路径变成绝对路径，此例不加'^'则url为/contact/list，加了以后变位/list
			url: '^/list'
			parent: contact
			templateUrl: './contact/contactList/contactList.tpl.html'
			controller: 'ContactListController'
			controllerAs: 'contactList'

		about =
			name: 'about'
			params: {'aboutId': '123'}
			url: '/about/:aboutId'
			template: """
				<div class="container-fluid">
					<p>This is about page</p>
				</div>
			"""

		contactDetail =
			name: 'contact.detail'
			#和'/detail/:contactId'功能相同
			url: '^/detail/{contactId}?from&to'
			parent: 'contact'
			templateUrl: './contact/contactDetail/contactDetail.tpl.html'
			controller: 'ContactDetailController'
			controllerAs: 'contactDetail'


		$stateProvider
			.state home
			.state contact
			.state contactList
			.state contactDetail
			.state about

		return


angular
.module 'app'
.config config