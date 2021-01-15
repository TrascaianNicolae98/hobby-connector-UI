import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SocialloginService} from '../../service/sociallogin.service';
import {ProfileService} from '../../service/profile.service';
import {FacilitiesService} from "../../service/facilities.service";
import {Hobby} from "../../model/Hobby";

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.css']
})
export class TournamentPageComponent implements OnInit {

  constructor(private router: Router, private facilitiesService: FacilitiesService, private loginService: SocialloginService) { }

  ngOnInit(): void {
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
    return this.facilitiesService.getClickedHobby();
  }

  goToProfilePage(event): void {
    this.router.navigate(['/userProfile']);
  }

  logOut(event): void {
    this.loginService.logout();
  }

}
