import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Hobby} from "../model/Hobby";
import {Observable} from 'rxjs';
import {User} from "../model/User";
import {SocialloginService} from "./sociallogin.service";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private http: HttpClient,private loginService: SocialloginService) { }

  public getHobbies(): Observable<Array<Hobby>> {
    debugger;
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.loginService.getJwt());
    let httpOptions = {
      headers:headers_object
    };
    return this.http.get<Array<Hobby>>('http://localhost:8080/api/hobbies',httpOptions);
  }

}
