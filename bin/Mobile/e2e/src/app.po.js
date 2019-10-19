"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AppPage {
    navigateTo(destination) {
        return protractor_1.browser.get(destination);
    }
    getTitle() {
        return protractor_1.browser.getTitle();
    }
    getPageOneTitleText() {
        return protractor_1.element(protractor_1.by.tagName('app-home')).element(protractor_1.by.deepCss('ion-title')).getText();
    }
}
exports.AppPage = AppPage;
