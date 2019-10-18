export class UserIO{
  private Id                  : number;
  private Name                : string;
  private Email               : string;
  private Password            : string;
  private Role                : UserEN;
  private Contact             : string;
  private BirthDay            : Date;
  private IntegrationID       : string;
  private ForceChangePassword : boolean;

  constructor(){

  }

  public setId(AId : number) : void {
    this.Id = AId;
  }

  public getId() : number {
    return this.Id;
  }
  
  public setName(AName : string) : void {
    this.Name = AName;
  }

  public getName() : string{
    return this.Name;
  }

  public setEmail(AEmail : string) : void {
    this.Email = AEmail;
  }

  public getEmail() : string {
    return this.Email;
  }

  public setPassword(APassword : string) : void{
    this.Password = APassword;
  }

  public getPassword() : string {
    return this.Password;
  }

  public setRole(ARole : UserEN) : void{
    this.Role = ARole;
  }

  public getRole() : UserEN {
    return this.Role;
  }

  public setContact(AContact : string) : void {
    this.Contact = AContact;
  }

  public getContact() : string {
    return this.Contact;
  }

  public setBirthDay(ABirthDay : Date) : void {
    this.BirthDay = ABirthDay;
  }

  public getBirthDay() : Date {
    return this.BirthDay;
  }

  public setIntegrationID(AIntegrationID : string) : void {
    this.IntegrationID = AIntegrationID;
  }

  public getIntegrationID() : string {
    return this.IntegrationID;
  }

  public setForceChangePassword(AForceChangePassword : boolean) : void {
    this.ForceChangePassword = AForceChangePassword;
  }

  public getForceChangePassword() : boolean {
    return this.ForceChangePassword;
  }
}