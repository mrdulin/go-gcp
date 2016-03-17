class HomeController
	@$inject = ['$log', 'name', '$timeout']

	constructor: ($log, name, $timeout)->
		vm = @
		vm.content = 'This is home page'
		vm.name = name

		##在input上使用autofocus属性，刷新页面时才会聚焦，当通过页面上点击切换到其他路由时，点击时input已经失去焦点，
		##第二次再切换回input所在路由，由于路由切换时页面没有刷新，所以input不会聚焦
		##可以看成几个路由的视图只是隐藏和显示而已，页面并没有刷新，而input标签的属性效果只在页面刷新时执行一次。
		setInputFocus = ()->
			document.querySelector('input').focus();

		setInputFocus();

		return


angular
.module 'app'
.controller 'HomeController', HomeController