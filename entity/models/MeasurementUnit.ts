import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class MeasurementUnit {

  @PrimaryGeneratedColumn()
  private id            : number|undefined;

  @Column()
  private description   : string = '';
  
  @Column()
  private integrationID : string = '';
  
  @CreateDateColumn()
  protected createdAt   : Date|undefined;

  @ManyToOne(
    (type) => User,
    (user) => user.getId,
    { nullable: false },
  )
  @JoinColumn()
  createdBy: User | undefined

  @UpdateDateColumn()
  protected updatedAt   : Date|undefined;

  @ManyToOne(
    (type) => User,
    (user) => user.getId,
    { nullable: false },
  )
  @JoinColumn()
  updatedBy: User | undefined


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