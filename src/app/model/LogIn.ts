export class LogIn{
  private email: string;
  private password: string;
  constructor() {
  }

  setEmail(value: string): void {
    this.email = value;
  }
  setPassword(value: string): void {
    this.password = value;
  }
  getEmail(): string{
    return this.email;
  }
  getPassword(): string{
    return this.password;
  }
}
