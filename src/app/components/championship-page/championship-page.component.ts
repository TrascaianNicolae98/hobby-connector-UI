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
  public lista: number[] = [];

  constructor(private championshipService: ChampionshipService,private router: Router) {
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
  goToProfilePage(event): void {
    this.router.navigate(['/user-profile']);
  }

  goToChampTour(event): void {
    this.lista.push(1);
    this.lista.push(2);
    this.lista.push(3);
    this.lista.push(4);
    this.lista.push(5);
    this.lista.push(6);
    this.lista.push(7);
    this.lista.push(8);


    // tslint:disable-next-line:no-debugger
    debugger;
    this.championshipService.onClickedChampionship(this.listOfChampionships, event.target.attributes.id.nodeValue,this.lista);
  }

  public getService(): ChampionshipService{
    return this.championshipService;
  }
}
