import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import { Router} from "@angular/router";
import {SocialloginService} from "../../service/sociallogin.service";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  /*socialusers = new User();
  constructor(public OAuth: SocialAuthService,    private router: Router) { }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    /*console.log(this.socialusers.image);*/
  /*}
  logout() {
    alert(1);
    this.OAuth.signOut().then(data => {
      debugger;
      this.router.navigate([`/login`]);
    });
  }*/

  userPassword: string;
  userName: string;
  userEmail: string;
  userPhoneNo: string;
  initials: string;
  circleColor: string;
  colors = ['#EB7181', '#468547', '#FFD558', '#3670B2'];

  constructor(private loginService: SocialloginService, public profileService: ProfileService, private router: Router) {
    this.userName = profileService.getUserName();
    this.userEmail = profileService.getUserEmail();
    this.userPhoneNo = profileService.getUserPhoneNo();
    this.initials = profileService.getUserInitials();
  }

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    this.circleColor = this.colors[randomIndex];
  }

  logout($event: any): void {
    this.loginService.logout();
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

  goToChampionshipPage(event): void {
    this.router.navigate(['/championshipPage'])
  }

  goToProfilePage(event): void {
    this.router.navigate(['/user-profile']);
  }

  update($event: MouseEvent) {
    let user = this.loginService.getCurrentUser();
    let newUser = new User();
    this.loginService.saveUserInternally(user.getId(), this.userName, user.getPhoneNo(), this.userEmail, user.getJwt());
    location.reload();
  }

  showReviews($event: MouseEvent) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  closeReviews($event: MouseEvent) {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
  }
}
