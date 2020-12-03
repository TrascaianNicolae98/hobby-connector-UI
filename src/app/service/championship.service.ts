import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Championship} from "../model/Championship";

@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  constructor(private http: HttpClient) { }

  public getChampionships(): Observable<Array<Championship>>{
    return this.http.get<Array<Championship>>('http://localhost:8080/api/championships')
  }

}
