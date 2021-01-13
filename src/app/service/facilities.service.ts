import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Hobby} from "../model/Hobby";
import {Observable} from 'rxjs';
import {User} from "../model/User";
import {SocialloginService} from "./sociallogin.service";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  private httpHeaders = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem('currentUser')).jwt);
  private httpOptions = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient) {
  }


  public getHobbies(): any {
    return this.http.get<Array<Hobby>>('http://localhost:8080/api/hobbies', this.httpOptions);
  }

}
