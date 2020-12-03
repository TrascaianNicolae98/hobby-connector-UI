import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  constructor(private titleService: Title,private router: Router) {
    this.titleService.setTitle('Login With Email');
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
}
