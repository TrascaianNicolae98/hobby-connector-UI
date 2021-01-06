import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";
import {LogIn} from '../../model/LogIn';
import {SocialloginService} from '../../service/sociallogin.service';
import {LoginResponse} from '../../model/responses/LoginResponse';
@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  private logIn = new LogIn();
  private loginResponse = new LoginResponse();
  constructor(private router: Router, private logInService: SocialloginService) {
  }

  faGoogle = faGoogle;

  ngOnInit(): void {
  }
  goToLoginEmailPage(event): void {
    this.router.navigate(['/login-email']);
  }
  goToSignupPage(event): void {
    this.router.navigate(['/signup']);
  }

  goToLoginPage(event): void {
    this.router.navigate(['/login']);
  }
  goToLoginGooglePage(event): void {
  }
  goToForgotPasswordPage(event): void {
  }

  passwordSub(value: string) {
    this.logIn.setPassword(value);
  }

  emailSub(value: string) {
    this.logIn.setEmail(value);
  }

  logInAcc(event) {
    // tslint:disable-next-line:no-debugger no-unused-expression
    this.logInService.logInAccount(this.logIn).subscribe(data => {this.loginResponse.setjwt(data.jwt); this.loginResponse.setUserId(data.userId); this.loginResponse.setEmail(data.email); this.loginResponse.setFullname(data.fullname); this.loginResponse.setPhoneNo(data.phoneNo); this.router.navigate(['/homePage']);});
  }
}
