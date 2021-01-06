import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SingUp} from '../model/SingUp';
import {Observable} from 'rxjs';
import {LogIn} from '../model/LogIn';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  public logInAccount(logIn: LogIn): Observable<any> {
    // tslint:disable-next-line:no-debugger
    debugger;
    return this.http.post<any>('http://localhost:8080/api/loginWithAccount', logIn, this.httpOptions);
  }
}
