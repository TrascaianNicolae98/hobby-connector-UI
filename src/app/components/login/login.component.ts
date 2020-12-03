import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private titleService: Title,private router: Router) {
    this.titleService.setTitle('Login');
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
  goToHomePage(event): void {
    this.router.navigate(['/homePage']);
  }
}
