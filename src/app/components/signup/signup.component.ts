import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {SingUp} from '../../model/SingUp';
import {SingUpService} from '../../service/sing-up.service';
import {LoginResponse} from '../../model/responses/LoginResponse';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private singUp = new SingUp();
  private fName: string;
  private lName: string;
  private jwt: string;
  private loginResponse = new LoginResponse();
   constructor(private titleService: Title, private router: Router, private singUpService: SingUpService ) {
    this.titleService.setTitle('Sign Up');
  }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
  }
  goToLoginEmailPage(event): void {
    this.router.navigate(['/login-email']);
  }
  goToLoginPage(event): void {
    this.router.navigate(['/login']);
  }

  fNameSub(value: string) {
    this.fName = value;
  }


  lNameSub(value: string) {
    this.lName = value;
  }

  emailSub(value: string) {
    this.singUp.setEmail(value);
  }

  passwordSub(value: string) {
    this.singUp.setPassword(value);
  }

  goToHomePage($event: MouseEvent) {
     let fullName: string;
     fullName = this.fName + ' ';
     fullName = fullName + this.lName;
     this.singUp.setFullName(fullName);
    // tslint:disable-next-line:no-debugger
     this.singUpService.signUp(this.singUp).subscribe(data => {debugger; this.loginResponse.setjwt(data.jwt); this.loginResponse.setUserId(data.userId); });
  }
}
