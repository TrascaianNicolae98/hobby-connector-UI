import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SocialloginService} from '../../service/sociallogin.service';
import {ProfileService} from '../../service/profile.service';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.css']
})
export class TournamentPageComponent implements OnInit {

  constructor(private router: Router) { }

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

}
