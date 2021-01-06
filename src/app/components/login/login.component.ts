import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ButtonComponent} from '../../shared/button/button.component';
import {SocialloginService} from '../../service/sociallogin.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('buttonRef', {static: true }) googleButton: ButtonComponent;
  logoPath = environment.logoPath;
  bottomImagePath = environment.bottomImagePath;
  labelButton = environment.labelButton;
  labelButton2 = environment.labelButton2;

  auth2: any;
  loginIcon = environment.loginIcon;

  constructor(private router: Router, private loginService: SocialloginService) {}

  ngAfterViewInit(): void {
    this.googleSDK();
  }

  prepareLoginButton(): void {
    this.auth2.attachClickHandler(this.googleButton.getElementRef().nativeElement, {},
      (googleUser) => {
        this.loginService.logInGoogle(googleUser);
      }, (error) => {
        alert('Open another window please');
      });
  }

  // function from google
  public googleSDK(): void {
    const googleSdkLoaded = 'googleSDKLoaded';
    const gapi = 'gapi';
    const auth2 = 'auth2';
    window[googleSdkLoaded] = () => {
      window[gapi].load(auth2, () => {
        this.auth2 = window[gapi].auth2.init({
          client_id: environment.googleClientId,
          scope: environment.googleScope,
          cookie_policy: environment.googleCookiepolicy
        });
        this.prepareLoginButton();
      });
    };

    // function from google
    /* tslint:disable */
    (function(document: Document, s: string, id: string): void {
      /* tslint:enable */
      let js;
      const fjs = document.getElementsByTagName(s)[0];
      if (document.getElementById(id)) {
        return;
      }
      js = document.createElement(s);
      js.id = id;
      js.src = environment.javaScriptSrc;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  goToLoginEmailPage(event): void {
    this.router.navigate(['/login-email']);
  }
  goToSignupPage(event): void {
    this.router.navigate(['/signup']);
  }


  goToHomePage(event): void {
    this.router.navigate(['/homePage']);
  }

}
