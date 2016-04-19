/**
 * Created by Administrator on 2016/4/19.
 */
angular
    .module('demo', [
        'ui.router'
    ]);

angular
    .module('demo')
    .config(function ($stateProvider, $urlRouterProvider, $compileProvider) {

        $urlRouterProvider.otherwise('/contacts');

        $compileProvider.debugInfoEnabled(false);

        $stateProvider
            .state('contacts', {
                url: '/contacts',
                template: '<div id="contacts">' +
                '<h1>My Contacts</h1>' +
                '<div ui-view></div>' +
                '<div ui-view="detail"></div>' +
                '</div>'
            })
            .state('contacts.detail', {
                url: '/detail',
                views: {
                    '': {
                        template: 'contacts ui-view'
                    },

                    '@contacts': {
                        template: 'contacts ui-view absolute'
                    },

                    detail: {
                        template: '<h1>Contact Details</h1>' +
                        '<div ui-view="info"></div>'
                    },

                    'detail@contacts': {
                        template: '<h1>Contact Details absolute</h1>' +
                        '<div ui-view="info"></div>'
                    },

                    'info@contacts.detail': {
                        template: 'contacts detail ui-view="info"'
                    },

                    //'@': {
                    //    template: 'index ui-view absolute'
                    //}

                    'status@': {
                        template: 'index ui-view="status"'
                    }
                }
            });
    });