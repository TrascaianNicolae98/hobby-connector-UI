import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SingUp} from '../model/SingUp';
import {Observable} from 'rxjs';
import {LoginResponse} from '../model/responses/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  private httpHeaders = new HttpHeaders().set("Authorization", "singUp");
  private httpOptions = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient) { }

  public signUp(singUp: SingUp): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/signUp', singUp, this.httpOptions);
  }
}
