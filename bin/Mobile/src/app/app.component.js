"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
const ngx_1 = require("@ionic-native/splash-screen/ngx");
const ngx_2 = require("@ionic-native/status-bar/ngx");
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'List',
                url: '/list',
                icon: 'list'
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angular_1.Platform !== "undefined" && angular_1.Platform) === "function" ? _a : Object, typeof (_b = typeof ngx_1.SplashScreen !== "undefined" && ngx_1.SplashScreen) === "function" ? _b : Object, typeof (_c = typeof ngx_2.StatusBar !== "undefined" && ngx_2.StatusBar) === "function" ? _c : Object])
], AppComponent);
exports.AppComponent = AppComponent;
