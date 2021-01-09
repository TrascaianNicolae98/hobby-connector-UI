export class User{
  private id: number;
  private name: string;
  private phoneNo: string;
  private email: string;
  private jwt: string;
  constructor(){}
  public getJwt(): string{
    return this.jwt;
  }
  public setEmail(email: string): void{
    this.email = email;
  }
  public setName(name: string): void{
    this.name = name;
  }

  public getEmail(): string{
    return this.email;
  }
  public getName(): string{
    return this.name;
  }
  public setJwt(jwt: string): void{
    this.jwt = jwt;
  }
  public getId(): number{
    return this.id;
  }
  public setId(id: number): void{
    this.id = id;
  }

  public setPhoneNo(phoneNo: string): void{
    this.phoneNo = phoneNo;
  }

  public getPhoneNo(): string {
    return this.phoneNo;
  }

  public getInitials(): string{
    const nameSplitBySpace = this.getName().split(' ');
    return nameSplitBySpace[0][0] + nameSplitBySpace[1][0];
  }

}
