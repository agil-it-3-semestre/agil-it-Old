"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_po_1 = require("./app.po");
describe('new App', () => {
    let page;
    beforeEach(() => {
        page = new app_po_1.AppPage();
    });
    describe('default screen', () => {
        beforeEach(() => {
            page.navigateTo('/home');
        });
        it('should have a title saying Home', () => {
            page.getPageOneTitleText().then(title => {
                expect(title).toEqual('Home');
            });
        });
    });
});
