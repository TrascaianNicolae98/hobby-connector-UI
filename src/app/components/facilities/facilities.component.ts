import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/app/model/Hobby';
import {FacilitiesService} from "../../service/facilities.service";
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {debuglog} from "util";
import {SocialloginService} from '../../service/sociallogin.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  public listOfHobbies: Hobby[];
  private user: string;

  constructor(private facilitiesService: FacilitiesService, private router: Router, private socialloginService: SocialloginService) {
    this.addHobby();

  }
  ngOnInit(): void {
  }

  addHobby(): void{
    this.facilitiesService.getHobbies().subscribe(  hobbiesList => this.listOfHobbies = hobbiesList);
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
    this.router.navigate(['/championshipPage']);
  }
  goToTournamentPage(event) {
    this.router.navigate(['/tournamentPage']);
  }
}
