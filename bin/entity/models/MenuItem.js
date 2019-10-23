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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let MenuItem = class MenuItem {
    constructor() {
        this.title = '';
        this.tooltip = '';
        this.icon = '';
        this.access = [];
        this.actionWeb = '';
        this.actionMobile = '';
    }
    /**
     * Getter id
     * @return {number}
     */
    getId() {
        return this.id;
    }
    /**
     * Getter title
     * @return {string }
     */
    getTitle() {
        return this.title;
    }
    /**
     * Getter tooltip
     * @return {string }
     */
    getTooltip() {
        return this.tooltip;
    }
    /**
     * Getter icon
     * @return {string }
     */
    getIcon() {
        return this.icon;
    }
    /**
     * Getter access
     * @return {Array<UserRole> }
     */
    getAccess() {
        return this.access;
    }
    /**
     * Getter actionWeb
     * @return {string }
     */
    getActionWeb() {
        return this.actionWeb;
    }
    /**
     * Getter actionMobile
     * @return {string }
     */
    getActionMobile() {
        return this.actionMobile;
    }
    /**
     * Setter id
     * @param {number} value
     */
    setId(value) {
        this.id = value;
    }
    /**
     * Setter title
     * @param {string } value
     */
    setTitle(value) {
        this.title = value;
    }
    /**
     * Setter tooltip
     * @param {string } value
     */
    setTooltip(value) {
        this.tooltip = value;
    }
    /**
     * Setter icon
     * @param {string } value
     */
    setIcon(value) {
        this.icon = value;
    }
    /**
     * Setter access
     * @param {Array<UserRole> } value
     */
    setAccess(value) {
        this.access = value;
    }
    /**
     * Setter actionWeb
     * @param {string } value
     */
    setActionWeb(value) {
        this.actionWeb = value;
    }
    /**
     * Setter actionMobile
     * @param {string } value
     */
    setActionMobile(value) {
        this.actionMobile = value;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Object)
], MenuItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MenuItem.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MenuItem.prototype, "tooltip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MenuItem.prototype, "icon", void 0);
__decorate([
    typeorm_1.Column("simple-array"),
    __metadata("design:type", Array)
], MenuItem.prototype, "access", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MenuItem.prototype, "actionWeb", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MenuItem.prototype, "actionMobile", void 0);
MenuItem = __decorate([
    typeorm_1.Entity()
], MenuItem);
exports.MenuItem = MenuItem;
