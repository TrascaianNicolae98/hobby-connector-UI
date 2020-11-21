import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Login');
  }

  faGoogle = faGoogle;

  ngOnInit(): void {
  }

}
