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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const UserRole_1 = require("../enum/UserRole");
let User = User_1 = class User {
    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.contact = '';
        this.integrationID = '';
        this.forceChangePassword = false;
        this.sector = null;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
    setRole(role) {
        this.role = role;
    }
    getRole() {
        return this.role;
    }
    setContact(contact) {
        this.contact = contact;
    }
    getContact() {
        return this.contact;
    }
    setBornDate(bornDate) {
        this.bornDate = bornDate;
    }
    getBornDate() {
        return this.bornDate;
    }
    setIntegrationID(integrationID) {
        this.integrationID = integrationID;
    }
    getIntegrationID() {
        return this.integrationID;
    }
    setForceChangePassword(forceChangePassword) {
        this.forceChangePassword = forceChangePassword;
    }
    getForceChangePassword() {
        return this.forceChangePassword;
    }
    setSector(sector) {
        this.sector = sector;
    }
    getSector() {
        return this.sector;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    getCreatedBy() {
        return this.createdBy;
    }
    getUpdatedBy() {
        return this.updatedBy;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        enum: UserRole_1.UserRole
    }),
    __metadata("design:type", Object)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "contact", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], User.prototype, "bornDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "integrationID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "forceChangePassword", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Object)
], User.prototype, "sector", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], User.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1, (user) => user.getId, { nullable: false }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], User.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1, (user) => user.getId, { nullable: false }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], User.prototype, "updatedBy", void 0);
User = User_1 = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], User);
exports.User = User;
