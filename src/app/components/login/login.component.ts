import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {SocialloginService} from "../../service/sociallogin.service";
import {Socialusers} from "../../model/SocialUsers";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response;
  socialusers=new Socialusers();
  private userProfile: any;
  constructor(
    public authService: SocialAuthService,
    private socialloginService: SocialloginService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.authService.signOut(true);
    this.authService.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.Savesresponse(socialusers);
    });

  }
  Savesresponse(socialusers: Socialusers) {
    this.socialloginService.Savesresponse(socialusers).subscribe((res: any) => {
      console.log(res);
      this.socialusers = res;
      this.response = res.userDetail;
      localStorage.setItem('socialusers', JSON.stringify( this.socialusers));
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
      this.router.navigate([`/user-profile`]);
    })
  }
  faGoogle = faGoogle;

  goToLoginEmailPage(event): void {
    this.router.navigate(['/login-email']);
  }
  goToSignupPage(event): void {
    this.router.navigate(['/signup']);
  }

  goToLoginPage(event): void {
    this.router.navigate(['/login']);
  }

  goToHomePage(event): void {
    this.router.navigate(['/homePage']);
  }

}
