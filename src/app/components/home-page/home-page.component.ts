import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {
  }

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

}
