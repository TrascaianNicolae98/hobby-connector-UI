export class LoginResponse{
  private jwt: string;
  private userId: number;

  getJwt(): string {
    return this.jwt;
  }

  getuserId(): number {
    return this.userId;
  }


  setjwt(value: string): void {
    this.jwt = value;
  }

  setUserId(value: number): void {
    this.userId = value;
  }
}
