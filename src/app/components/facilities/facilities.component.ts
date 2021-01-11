import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/app/model/Hobby';
import {FacilitiesService} from "../../service/facilities.service";
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {debuglog} from "util";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  public listOfHobbies: Hobby[];
  private facilitiesService: FacilitiesService;
  private user: string;

  constructor(fs: FacilitiesService,private router: Router) {
    this.facilitiesService = fs;
    this.addHobby();

  }
  ngOnInit(): void {
  }

  addHobby(): void{
    this.user = localStorage.getItem('currentUser').valueOf();
    this.facilitiesService.getHobbies().subscribe(  hobbiesList => {this.listOfHobbies = hobbiesList; debugger});
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
  goToTournamentPage(event) {
    this.router.navigate(['/tournamentPage']);
  }
}
