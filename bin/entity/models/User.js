"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
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
}
exports.User = User;
