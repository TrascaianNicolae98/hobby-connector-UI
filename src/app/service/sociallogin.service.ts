import {Injectable, Injector, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SingUp} from '../model/SingUp';
import {Observable} from 'rxjs';
import {LogIn} from '../model/LogIn';
import {LoginResponse} from '../model/responses/LoginResponse';
import {Router} from '@angular/router';
import {User} from '../model/User';
import {Hobby} from '../model/Hobby';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  private httpHeaders = new HttpHeaders().set("Authorization", "logIn");
  private httpOptions = {
    headers: this.httpHeaders
  };
  private currentUser: User;
  constructor(private http: HttpClient,
              private router: Router,
              private injector: Injector) {
  }

  public getCurrentUser(): User {
    if (this.currentUser == null) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (user != null) {
        this.currentUser = new User();
        this.currentUser.setId(user.id);
        this.currentUser.setJwt(user.jwt);
        this.currentUser.setName(user.name);
        this.currentUser.setEmail(user.email);
      }
    }
    return this.currentUser;
  }

  public logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/aboutUsPage']);
  }

  public getJwt(): string {
    return this.getCurrentUser().getJwt();
  }

  public saveUserInternally(id: number, name: string, phoneNo: string, email: string, jwt: string): void {
    this.currentUser = new User();
    this.currentUser.setId(id);
    this.currentUser.setName(name);
    this.currentUser.setPhoneNo(phoneNo);
    this.currentUser.setEmail(email);
    this.currentUser.setJwt(jwt);
    localStorage.setItem('currentUser', JSON.stringify(this.getCurrentUser()));

  }

  protected logInCall(logIn: LogIn): any{
    return this.http.post<any>('http://localhost:8080/api/loginWithAccount', logIn, this.httpOptions);
  }

  public logInAccount(logIn: LogIn): void {
    this.logInCall(logIn).subscribe(data => {
      this.saveUserInternally(data.id, data.fullname, data.phoneNo, data.email, data.jwt);
      const ngZone = this.injector.get(NgZone);   // redirect won't work correctly unless we do this nonsense
      ngZone.run(() => {
        this.router.navigate(['/homePage']);
      });
    });
  }

  protected verifyToken(googleUser: any): any{
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.http.post<any>('http://localhost:8080/api/loginWithGoogle', googleUser.getAuthResponse().id_token, this.httpOptions);
  }

  public logInGoogle(googleUser: any): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    // tslint:disable-next-line:no-debugger
    this.verifyToken(googleUser).subscribe( data => {debugger;
      this.saveUserInternally(data.id, data.fullname, data.phoneNo, data.email, data.jwt);
      // tslint:disable-next-line:no-debugger
      const ngZone = this.injector.get(NgZone);    // redirect won't work correctly unless we do this nonsense
      ngZone.run(() => {
        this.router.navigate(['/homePage']);
      });
    });
  }
}
