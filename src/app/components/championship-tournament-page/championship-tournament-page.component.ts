import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ChampionshipService} from "../../service/championship.service";
import {Championship} from "../../model/Championship";

@Component({
  selector: 'app-championship-tournament-page',
  templateUrl: './championship-tournament-page.component.html',
  styleUrls: ['./championship-tournament-page.component.css']
})
export class ChampionshipTournamentPageComponent implements OnInit {

  constructor(private router: Router, private championshipService:ChampionshipService) { }

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
  public getClickedChampionShip(): Championship{
    return this.championshipService.getClickedChampionship();
  }
}
