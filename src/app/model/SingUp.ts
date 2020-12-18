export class SingUp{
  private fullName: string;
  private email: string;
  private password: string;
  constructor() {
  }

  setFullName(value: string): void {
    this.fullName = value;
  }

  setEmail(value: string): void {
    this.email = value;
  }

  setPassword(value: string): void {
    this.password = value;
  }
}
