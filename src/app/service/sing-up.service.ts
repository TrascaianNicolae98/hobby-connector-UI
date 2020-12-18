import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SingUp} from '../model/SingUp';
import {Observable} from 'rxjs';
import {LoginResponse} from '../model/responses/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public signUp(singUp: SingUp): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/signUp', singUp, this.httpOptions);
  }
}
