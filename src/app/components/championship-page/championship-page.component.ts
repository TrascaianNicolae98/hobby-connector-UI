import { Component, OnInit } from '@angular/core';
import {FacilitiesService} from "../../service/facilities.service";
import {Router} from "@angular/router";
import {Championship} from "../../model/Championship";
import {ChampionshipService} from "../../service/championship.service";

@Component({
  selector: 'app-championship-page',
  templateUrl: './championship-page.component.html',
  styleUrls: ['./championship-page.component.css']
})
export class ChampionshipPageComponent implements OnInit {

  public listOfChampionships: Championship[];
  private championshipService:ChampionshipService;

  constructor(cs: ChampionshipService,private router: Router) {
    this.championshipService = cs;
    this.addChampionship();

  }
  ngOnInit(): void {
  }

  addChampionship(): void{
    this.championshipService.getChampionships().subscribe( championshipList => this.listOfChampionships = championshipList );
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



  goToChampTour(event):void {

  }
}
