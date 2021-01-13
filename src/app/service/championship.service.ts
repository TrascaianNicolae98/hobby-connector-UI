import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Championship} from "../model/Championship";
import {Router} from "@angular/router";
import {ChampionshipSlots} from "../model/ChampionshipSlots";


@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  private onClickChampionship : Championship;
  public championshipSlots: ChampionshipSlots;
  private httpHeaders = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem('currentUser')).jwt);
  private httpOptions = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient, private router: Router) { }

  public getChampionships(): Observable<Array<Championship>>{
    return this.http.get<Array<Championship>>('http://localhost:8080/api/championships', this.httpOptions);
  }

  public onClickedChampionship(championshipList: Championship[], id: number, lista: number[]): void{
    // tslint:disable-next-line:no-debugger
    debugger;
    for (let  i = 0; i<championshipList.length;i++)
    {
      if(championshipList[i].id == id){
        localStorage.setItem('currentChampionship', JSON.stringify(championshipList[i]));
        break;
      }
    }
    this.championshipSlots = new ChampionshipSlots(lista);
    this.router.navigate(['/championshipTournament']);
    }

    public getClickedChampionship():Championship{
      const championship = JSON.parse(localStorage.getItem('currentChampionship'));
      this.onClickChampionship=new Championship();
      this.onClickChampionship.id=championship.id;
      this.onClickChampionship.name=championship.name;
      this.onClickChampionship.image1=championship.image1;
      this.onClickChampionship.image2=championship.image2;
      this.onClickChampionship.listOfTeams=championship.listOfTeams;

      return this.onClickChampionship;
  }
}

