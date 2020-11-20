import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Hobby} from "../model/Hobby";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private http: HttpClient) { }

  public getHobbies(): Observable<Array<Hobby>> {

    return this.http.get<Array<Hobby>>('http://localhost:8080/api/hobbies');
  }

}
