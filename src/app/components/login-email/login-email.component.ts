import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Login With Email');
  }

  faGoogle = faGoogle;

  ngOnInit(): void {
  }

}
