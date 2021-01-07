import {Injectable, Injector, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SingUp} from '../model/SingUp';
import {Observable} from 'rxjs';
import {LogIn} from '../model/LogIn';
import {LoginResponse} from '../model/responses/LoginResponse';
import {Router} from '@angular/router';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
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
    location.reload();
  }

  public getJwt(): string {
    return this.currentUser.getJwt();
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

  public logInAccount(logIn: LogIn): void {
    this.http.post<any>('http://localhost:8080/api/loginWithAccount', logIn, this.httpOptions).subscribe(data => {
      this.saveUserInternally(data.id, data.fullname, data.phoneNo, data.email, data.jwt);
      const ngZone = this.injector.get(NgZone);   // redirect won't work correctly unless we do this nonsense
      ngZone.run(() => {
        this.router.navigate(['/homePage']);
      });
    });
  }

  public logInGoogle(googleUser: any): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    // tslint:disable-next-line:no-debugger
    this.http.post<any>('http://localhost:8080/api/loginWithGoogle', googleUser.getAuthResponse().id_token, this.httpOptions).subscribe( data => {
      this.saveUserInternally(data.id, data.fullname, data.phoneNo, data.email, data.jwt);
      const ngZone = this.injector.get(NgZone);   // redirect won't work correctly unless we do this nonsense
      ngZone.run(() => {
        this.router.navigate(['/homePage']);
      });
    });
  }
}
