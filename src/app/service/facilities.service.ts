import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Hobby} from "../model/Hobby";
import {Observable} from 'rxjs';
import {User} from "../model/User";
import {SocialloginService} from "./sociallogin.service";
import {ChampionshipSlots} from "../model/ChampionshipSlots";
import {Championship} from "../model/Championship";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  private onClickedHobby: Hobby;
  private httpHeaders = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem('currentUser')).jwt);
  private httpOptions = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient, private router: Router) {
  }


  public getHobbies(): any {
    return this.http.get<Array<Hobby>>('http://localhost:8080/api/hobbies', this.httpOptions);
  }

  public onClickedHobbyFunction(hobbyList: Hobby[], id: number): void{
    for (let  i = 0; i<hobbyList.length;i++)
    {
      if(hobbyList[i].id == id){
        localStorage.setItem('currentHobby', JSON.stringify(hobbyList[i]));
        break;
      }
    }
    this.router.navigate(['/tournamentPage']);
  }

  public getClickedHobby(): Hobby{
    const hobby = JSON.parse(localStorage.getItem('currentHobby'));
    this.onClickedHobby = new Hobby(hobby.id, hobby.name, hobby.image1, hobby.image2, hobby.description, hobby.noOfPlayers);
    return this.onClickedHobby;
  }
}
