import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import { SocialAuthService} from "angularx-social-login";
import { Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  socialusers = new User();
  constructor(public OAuth: SocialAuthService,    private router: Router) { }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    /*console.log(this.socialusers.image);*/
  }
  logout() {
    alert(1);
    this.OAuth.signOut().then(data => {
      debugger;
      this.router.navigate([`/login`]);
    });
  }
}
