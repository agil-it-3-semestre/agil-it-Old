"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const angular_1 = require("@ionic/angular");
const ngx_1 = require("@ionic-native/splash-screen/ngx");
const ngx_2 = require("@ionic-native/status-bar/ngx");
const testing_2 = require("@angular/router/testing");
const app_component_1 = require("./app.component");
describe('AppComponent', () => {
    let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;
    beforeEach(testing_1.async(() => {
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: ngx_2.StatusBar, useValue: statusBarSpy },
                { provide: ngx_1.SplashScreen, useValue: splashScreenSpy },
                { provide: angular_1.Platform, useValue: platformSpy },
            ],
            imports: [testing_2.RouterTestingModule.withRoutes([])],
        }).compileComponents();
    }));
    it('should create the app', async () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should initialize the app', async () => {
        testing_1.TestBed.createComponent(app_component_1.AppComponent);
        expect(platformSpy.ready).toHaveBeenCalled();
        await platformReadySpy;
        expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        expect(splashScreenSpy.hide).toHaveBeenCalled();
    });
    it('should have menu labels', async () => {
        const fixture = await testing_1.TestBed.createComponent(app_component_1.AppComponent);
        await fixture.detectChanges();
        const app = fixture.nativeElement;
        const menuItems = app.querySelectorAll('ion-label');
        expect(menuItems.length).toEqual(2);
        expect(menuItems[0].textContent).toContain('Home');
        expect(menuItems[1].textContent).toContain('List');
    });
    it('should have urls', async () => {
        const fixture = await testing_1.TestBed.createComponent(app_component_1.AppComponent);
        await fixture.detectChanges();
        const app = fixture.nativeElement;
        const menuItems = app.querySelectorAll('ion-item');
        expect(menuItems.length).toEqual(2);
        expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/home');
        expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/list');
    });
});
