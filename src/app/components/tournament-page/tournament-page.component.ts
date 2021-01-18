import { Component, OnInit } from '@angular/core';
import {SocialloginService} from '../../service/sociallogin.service';
import {ProfileService} from '../../service/profile.service';
import {FacilitiesService} from "../../service/facilities.service";
import {Hobby} from "../../model/Hobby";
import { filter } from 'rxjs/operators'
import {NavigationEnd, Router} from '@angular/router';
import {TemporaryTeamDto} from "../../model/TemporaryTeamDto";
import {TemporaryTeamSent} from "../../model/TemporaryTeamSent";
import {TemporaryTeamUserDto} from "../../model/TemporaryTeamUserDto";
import {TeamSentChamp} from "../../model/TeamSentChamp";

interface TeamsUsers {
  value: TemporaryTeamUserDto;
  viewValue: string;
}

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.css']
})
export class TournamentPageComponent implements OnInit {

  teamsUsersAmical: TeamsUsers[] = [];
  teamsUsersChamp: TeamsUsers[] = [];
  teamName: string;
  private emailInviteAmical: string;
  private emailInviteChamp: string;
  public tournamentUsers: TemporaryTeamDto;

  constructor(private router: Router, private facilitiesService: FacilitiesService, private loginService: SocialloginService) {
  }

  ngOnInit(): void {
    this.getUsersCall();
  }

  public getUsersCall(): any{
    this.facilitiesService.callTournamentUsers(new TemporaryTeamSent(JSON.parse(localStorage.getItem('currentUser')).id,JSON.parse(localStorage.getItem('currentHobby')).id)).subscribe(data=>{this.tournamentUsers=new TemporaryTeamDto(data.amicalUsers.map((tempUsDto:any)=>new TemporaryTeamUserDto(tempUsDto)),data.championshipUsers.map((tempUsDto:any)=>new TemporaryTeamUserDto(tempUsDto)));
    this.teamsUsersAmical.push({value: new TemporaryTeamUserDto(), viewValue:''});
    let curentUser=JSON.parse(localStorage.getItem('currentUser'));
    let tempCurentUser=new TemporaryTeamUserDto();
    tempCurentUser.setId(curentUser.id);
    tempCurentUser.setEmail(curentUser.email);
    tempCurentUser.setFullName(curentUser.name);
    tempCurentUser.setPhoneNo(curentUser.phoneNo);
    this.teamsUsersAmical.push({value: tempCurentUser, viewValue:tempCurentUser.getFullName()})
    for(let i=0;i<this.tournamentUsers.getAmicalUsers().length;i++){
      this.teamsUsersAmical.push({value: this.tournamentUsers.getAmicalUsers()[i], viewValue:this.tournamentUsers.getAmicalUsers()[i].getFullName() })
    };
      this.teamsUsersChamp.push({value: tempCurentUser, viewValue:tempCurentUser.getFullName()});
      for(let i=0;i<this.tournamentUsers.getChampionshipUsers().length;i++){
        this.teamsUsersChamp.push({value: this.tournamentUsers.getChampionshipUsers()[i], viewValue:this.tournamentUsers.getChampionshipUsers()[i].getFullName() })
      }});
  }



  goToHomePage(event): void {
    this.router.navigate(['/homePage']);
  }
  goToFacilitiesPage(event): void {
    this.router.navigate(['/facilitiesPage']);
  }
  goToAboutUsPage(event): void {
    this.router.navigate(['/aboutUsPage']);
  }
  goToLoginPage(event): void {
    this.router.navigate(['/login']);
  }
  goToChampionshipPage(event): void{
    this.router.navigate(['/championshipPage'])
  }

  myFunction(tableID: string): void {
    const table: HTMLTableElement = document.getElementById(tableID) as HTMLTableElement;
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = 'k';
    cell2.innerHTML = 'k';
  }



  getClickedHobby(): Hobby{
    const hobby = JSON.parse(localStorage.getItem('currentHobby'));
    return hobby;
  }

  goToProfilePage(event): void {
    this.router.navigate(['/userProfile']);
  }

  logOut(event): void {
    this.loginService.logout();
  }

  emailSubAmical(value: string) {
    this.emailInviteAmical=value;
  }

  emailSubChamp(value: string) {
    this.emailInviteChamp=value;
  }

  amicalInvitation(event) {
    debugger;
    this.facilitiesService.invitePlayerAmical('amical',this.emailInviteAmical);
  }

  championshipInvitation(event) {
    debugger;
    this.facilitiesService.invitePlayerChampionship('championship',this.emailInviteChamp);
  }

  team1Call(value: string) {

  }

  team2Call(value: string) {

  }

  teamNeamSub(value: string) {
    this.teamName=value;
  }

  submitTeamChamp(event) {
    let playersIds: number[]=[];
    debugger;
    for(let i=0;i<this.teamsUsersChamp.length;i++){
      playersIds.push(this.teamsUsersChamp[i].value.getId());
    }
    let teamSentChamp=new TeamSentChamp('championship',this.teamName,0,JSON.parse(localStorage.getItem('currentHobby')).id,playersIds);
    this.facilitiesService.saveTeamChamp(teamSentChamp).subscribe();
  }
}
