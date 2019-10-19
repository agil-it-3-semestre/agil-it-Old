import { User } from "./User";

export class MeasurementUnit {
  private id            : number|undefined;
  private description   : string = '';
  private integrationID : string = '';
  private createdAt     : Date|undefined;
  private createdBy     : User|undefined;
  private updatedAt     : Date|undefined;
  private updatedBy     : User|undefined;

  constructor(){

  }

  public setId(id : number) : void {
    this.id = id;
  }

  public getId() : number|undefined {
    return this.id;
  }

  public setDescription(description : string) : void {
    this.description = description;
  }

  public getDescription() : string {
    return this.description;
  }

  public setIntegrationID(integrationID : string) : void {
    this.integrationID = integrationID;
  }

  public getIntegrationID() : string {
    return this.integrationID;
  }

  public getCreatedAt() : Date|undefined {
    return this.createdAt;
  }

  public getUpdatedAt() : Date|undefined {
    return this.updatedAt;
  }

  public getCreatedBy() : User|undefined {
    return this.createdBy;
  }

  public getUpdatedBy() : User|undefined {
    return this.updatedBy;
  }
}