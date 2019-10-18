export class SectorIO {
  private Id            : number;
  private Description   : string;
  private IntegrationID : string;
  private CreatedAt     : Date;
  private UpdatedAt     : Date;

  constructor(){

  }

  public setId(AId : number) : void {
    this.Id = AId;
  }

  public getId() : number {
    return this.Id;
  }

  public setDescription(ADescription : string) : void {
    this.Description = ADescription;
  }

  public getDescription() : string {
    return this.Description;
  }

  public setIntegrationID(AIntegrationID : string) : void {
    this.IntegrationID = AIntegrationID;
  }

  public getIntegrationID() : string {
    return this.IntegrationID;
  }

  public setCreatedAt(ACreatedAt : Date) : void {
    this.CreatedAt = ACreatedAt;
  }

  public getCreatedAt() : Date {
    return this.CreatedAt;
  }

  public setUpdatedAt(AUpdatedAt : Date) : void {
    this.UpdatedAt = AUpdatedAt;
  }

  public getUpdatedAt() : Date {
    return this.UpdatedAt;
  }
}