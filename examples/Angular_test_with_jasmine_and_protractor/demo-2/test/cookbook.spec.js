/**
 * Created by Administrator on 2016/4/24.
 */
describe('your user name', function() {

    it('should bind to input', function() {
        browser.get('http://localhost:63342/learn-angular/examples/Angular%20test_with_jasmine_and_protractor/demo-2/index.html');
        var nameInput = element(by.model('name'));
        var nameOutput = element(by.binding('name'));
        expect(nameOutput.getText()).toBe('mrdulin');
        nameInput.clear();
        nameInput.sendKeys('novaline');
        expect(nameOutput.getText()).toBe('novaline');
    });

});