export class LoginResponse{
  private id: number;
  private fullname: string;
  private phoneNo: string;
  private email: string;
  private jwt: string;

  getJwt(): string {
    return this.jwt;
  }

  getuserId(): number {
    return this.id;
  }


  setjwt(value: string): void {
    this.jwt = value;
  }

  setUserId(value: number): void {
    this.id = value;
  }

  setFullname(value: string): void{
    this.fullname = value;
  }

  setPhoneNo(value: string): void{
    this.phoneNo = value;
  }

  setEmail(value: string): void{
    this.email = value;
  }
}
