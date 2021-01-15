import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SocialloginService} from "../../service/sociallogin.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private loginService: SocialloginService) {
  }

  ngOnInit(): void {
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


  goToProfilePage(event): void {
    this.router.navigate(['/userProfile']);
  }

  logOut(event): void {
    this.loginService.logout();
  }
}
