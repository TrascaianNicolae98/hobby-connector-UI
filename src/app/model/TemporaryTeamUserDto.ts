export class TemporaryTeamUserDto{
  private id: number;
  private fullname: string;
  private phoneNo: string;
  private email: string;

  constructor(tempUsTdo: any = {}) {
    this.id=tempUsTdo.id || null;
    this.fullname=tempUsTdo.fullname || null;
    this.phoneNo=tempUsTdo.phoneNo || null;
    this.email=tempUsTdo.email || null;

  }



  public getId(): number{
    return this.id
  }

  public getFullName(): string{
    return this.fullname
  }

  public getPhoneNo(): string{
    return this.phoneNo
  }

  public getEmail(): string{
    return this.email
  }

  public setId(id: number): void{
    this.id=id;
  }

  public setFullName(fullName: string): void{
    this.fullname=fullName
  }

  public setPhoneNo(phoneNo: string): void{
    this.phoneNo=phoneNo;
  }

  public setEmail(email: string): void{
    this.email=email;
  }
}

