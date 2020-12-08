export class User {
  private id: number;
  private fullName: string;
  private email: string;
  private password: string;
  private phoneNo: string;
  private jwt: string;


  constructor() {}

  public setGoogleData(googleUser: any): void{
    const profile = googleUser.getBasicProfile();
    this.fullName = profile.getName();
    this.email = profile.getEmail();
  }


  public getId(): number {
    return this.id;
  }

  public setId(value: number):void {
    this.id = value;
  }

  public getFullName(): string {
    return this.fullName;
  }

  public setFullName(value: string):void {
    this.fullName = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string):void {
    this.email = value;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(value: string):void {
    this.password = value;
  }

  public getPhoneNo(): string {
    return this.phoneNo;
  }

  public setPhoneNo(value: string):void {
    this.phoneNo = value;
  }

  public getJwt(): string {
    return this.jwt;
  }

  public setJwt(value: string):void {
    this.jwt = value;
  }
}


