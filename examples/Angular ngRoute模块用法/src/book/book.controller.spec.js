/**
 * Created by dulin on 2015/12/14.
 */
describe('myApp', function() {
    var scope, controller;

    beforeEach(function() {
        angular.mock.module('demo');
    });

    describe('BookController', function() {

        beforeEach(angular.mock.inject(function($rootScope, $controller) {

            scope = $rootScope.$new();
            controller = $controller('BookController', {
                '$scope': scope
            });

        }));

        it('book controller initial name', function() {
            expect(controller.model.name).toBe('BookController');
        });

        it('set book controller name', function() {
            controller.fn.setName();
            expect(controller.model.name).toBe('This is Book page.');
        });
    });

});