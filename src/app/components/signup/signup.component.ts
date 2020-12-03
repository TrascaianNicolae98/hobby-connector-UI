import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private titleService: Title,private router: Router) {
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
}
