import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";

import { UserRole } from '../enum/UserRole';
import { Sector } from './Sector';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  private id: number | undefined;

  @Column()
  private name: string = '';

  @Column()
  private email: string = '';

  @Column()
  private password: string = '';

  @Column({
    type: "varchar",
    enum: UserRole
  })
  private role: UserRole | undefined;

  @Column()
  private contact: string = '';

  @Column()
  private bornDate: Date | undefined;

  @Column()
  private integrationID: string = '';

  @Column()
  private forceChangePassword: boolean = false;

  @Column()
  private sector: Sector | null = null;


  @CreateDateColumn()
  protected createdAt: Date | undefined;

  
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


  constructor() {

  }

  public setId(id: number): void {
    this.id = id;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public getPassword(): string {
    return this.password;
  }

  public setRole(role: UserRole): void {
    this.role = role;
  }

  public getRole(): UserRole | undefined {
    return this.role;
  }

  public setContact(contact: string): void {
    this.contact = contact;
  }

  public getContact(): string {
    return this.contact;
  }

  public setBornDate(bornDate: Date): void {
    this.bornDate = bornDate;
  }

  public getBornDate(): Date | undefined {
    return this.bornDate;
  }

  public setIntegrationID(integrationID: string): void {
    this.integrationID = integrationID;
  }

  public getIntegrationID(): string {
    return this.integrationID;
  }

  public setForceChangePassword(forceChangePassword: boolean): void {
    this.forceChangePassword = forceChangePassword;
  }

  public getForceChangePassword(): boolean {
    return this.forceChangePassword;
  }

  public setSector(sector: Sector): void {
    this.sector = sector;
  }

  public getSector(): Sector | null {
    return this.sector;
  }

  public getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  public getCreatedBy(): User | undefined {
    return this.createdBy;
  }

  public getUpdatedBy(): User | undefined {
    return this.updatedBy;
  }
}