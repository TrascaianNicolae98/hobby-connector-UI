import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Hobby} from "../model/Hobby";
import {Observable} from 'rxjs';
import {User} from "../model/User";
import {SocialloginService} from "./sociallogin.service";
import {ChampionshipSlots} from "../model/ChampionshipSlots";
import {Championship} from "../model/Championship";
import {TemporaryTeamUserDto} from "../model/TemporaryTeamUserDto";
import {TemporaryTeamSent} from "../model/TemporaryTeamSent";
import {TemporaryTeamDto} from "../model/TemporaryTeamDto";
import {InvitePlayerDto} from "../model/InvitePlayerDto";
import {TeamSentChamp} from "../model/TeamSentChamp";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  private onClickedHobby: Hobby;
  private tournamentUsers: TemporaryTeamDto;
  public hobbyList: Hobby[];
  private eventId: number;
  private invitePlayerDto: InvitePlayerDto;
  private httpHeaders = new HttpHeaders().set("Authorization", JSON.parse(localStorage.getItem('currentUser')).jwt);
  private httpOptions = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient, private router: Router) {
  }


  public getHobbies(): any {
    return this.http.get<Array<Hobby>>('http://localhost:8080/api/hobbies', this.httpOptions);
  }

  public callTournamentUsers(temporaryTeamSent: TemporaryTeamSent): any{
    return this.http.post<any>('http://localhost:8080/api/teamporaryTeam',temporaryTeamSent,this.httpOptions);
  }

  public onClickedHobbyFunction(hobbyList: Hobby[], id: number): void{
    debugger;
    this.hobbyList=[];
    this.hobbyList=hobbyList;
    this.eventId=id;
    let hobbyId: number;
    for (let  i = 0; i<hobbyList.length;i++)
    {
      if(hobbyList[i].id == id){
        localStorage.setItem('currentHobby', JSON.stringify(hobbyList[i]));
        hobbyId=hobbyList[i].id;
        break;
      }
    }
    this.tournamentUsers;
    this.callTournamentUsers(new TemporaryTeamSent(JSON.parse(localStorage.getItem('currentUser')).id,hobbyId)).subscribe(data=>{this.tournamentUsers=new TemporaryTeamDto(data.amicalUsers.map((tempUsDto:any)=>new TemporaryTeamUserDto(tempUsDto)),data.championshipUsers.map((tempUsDto:any)=>new TemporaryTeamUserDto(tempUsDto)));this.router.navigate(['/tournamentPage']);});
  }

  public getHobbyList(): Hobby[]{
    return this.hobbyList;
  }

  public getEventId(): number{
    return this.eventId;
  }

  public getTournamentUsers(): TemporaryTeamDto{
    debugger;
    return this.tournamentUsers;
  }

  public getUSerFirst(): TemporaryTeamUserDto{
    debugger;
    return this.getTournamentUsers().getAmicalUsers()[0];
  }

  public getClickedHobby(): Hobby{
    const hobby = JSON.parse(localStorage.getItem('currentHobby'));
    this.onClickedHobby = new Hobby(hobby.id, hobby.name, hobby.image1, hobby.image2, hobby.description, hobby.noOfPlayers);
    return this.onClickedHobby;
  }

  public invitePlayerCall(): any{
    debugger;
    return this.http.post<Array<Hobby>>('http://localhost:8080/api/temporaryTeamInvite',this.invitePlayerDto, this.httpOptions);

  }

  public invitePlayerAmical(teamType: string, playerEmail: string): any{
    debugger;
    this.invitePlayerDto=new InvitePlayerDto(playerEmail,JSON.parse(localStorage.getItem('currentHobby')).id,teamType,JSON.parse(localStorage.getItem('currentUser')).id);
    this.invitePlayerCall().subscribe();
  }

  public invitePlayerChampionship(teamType: string, playerEmail: string): any{
    debugger;
    this.invitePlayerDto=new InvitePlayerDto(playerEmail,JSON.parse(localStorage.getItem('currentHobby')).id,teamType,JSON.parse(localStorage.getItem('currentUser')).id);
    this.invitePlayerCall().subscribe();
  }

  public saveTeamChamp(teamSentChamp: TeamSentChamp): any{
    return this.http.post<any>('http://localhost:8080/api/saveTeamChampionship',teamSentChamp, this.httpOptions);
  }


}
