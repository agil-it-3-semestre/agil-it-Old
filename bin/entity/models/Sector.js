"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sector {
    constructor() {
        this.description = '';
        this.integrationID = '';
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
}
exports.Sector = Sector;
