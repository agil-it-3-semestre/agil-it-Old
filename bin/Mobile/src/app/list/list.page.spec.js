"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const angular_1 = require("@ionic/angular");
const list_page_1 = require("./list.page");
describe('ListPage', () => {
    let component;
    let fixture;
    let listPage;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_page_1.ListPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(list_page_1.ListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have a list of 10 elements', () => {
        listPage = fixture.nativeElement;
        const items = listPage.querySelectorAll('ion-item');
        expect(items.length).toEqual(10);
    });
});
