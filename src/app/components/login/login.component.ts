import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {NGXLogger} from 'ngx-logger';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//export class LoginComponent implements OnInit {
export class LoginComponent implements AfterViewInit {


  auth2: any;
  constructor(private loginService: LoginService, private log: NGXLogger,private titleService: Title, private router: Router) {
    this.titleService.setTitle('Login');
  }

  faGoogle = faGoogle;

  /*ngOnInit(): void {
  }*/

  ngAfterViewInit(): void {
    //this.googleSDK();
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
    this.googleSDK();
  }

  goToHomePage(event): void {
    this.router.navigate(['/homePage']);
  }


  onLoggedIn(event: MouseEvent): void {
    this.log.info('Logged with Google');
  }

// function from google
  public googleSDK(): void {
    const googleSdkLoaded = 'googleSDKLoaded';
    const gapi = 'gapi';
    const auth2 = 'auth2'; // The Sign-In client object.
    // Initializes the Sign-In client:
    window[googleSdkLoaded] = () => {
      window[gapi].load(auth2, () => {
        //Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = window[gapi].auth2.init({
          client_id: 'CLIENT_ID.apps.googleusercontent.com',
          scope: 'profile email',
          cookie_policy: 'single_host_origin'
        });
        this.prepareLoginButton();
      });
    };
  }

//create a callback that either silently finishes sign-in for the user, or prompts the user to re-authorize based on the state of the user's session.
  prepareLoginButton(): void {
    // Attach the click handler to the sign-in button
    this.auth2.attachClickHandler("googleButton", {},
      (googleUser) => {
        this.loginService.login(googleUser);
      }, (error) => {
        alert('Open another window please');
      });
  }
}
