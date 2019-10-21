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
const User_1 = require("./User");
let MachineType = class MachineType {
    constructor() {
        this.integrationID = '';
        this.description = '';
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setDescription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    setIntegrationID(integrationID) {
        this.integrationID = integrationID;
    }
    getIntegrationID() {
        return this.integrationID;
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
], MachineType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MachineType.prototype, "integrationID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], MachineType.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], MachineType.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1.User, (user) => user.getId, { nullable: false }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], MachineType.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Object)
], MachineType.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => User_1.User, (user) => user.getId, { nullable: false }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], MachineType.prototype, "updatedBy", void 0);
MachineType = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], MachineType);
exports.MachineType = MachineType;
