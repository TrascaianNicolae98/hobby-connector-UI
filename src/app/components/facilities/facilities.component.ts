import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/app/model/Hobby';
import {FacilitiesService} from "../../service/facilities.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  public listOfHobbies: Hobby[];
  private facilitiesService:FacilitiesService;

  constructor(fs: FacilitiesService,private router: Router) {
    this.facilitiesService = fs;
    this.addHobby();

  }
  ngOnInit(): void {
  }

  addHobby(): void{
      this.facilitiesService.getHobbies().subscribe(hobbiesList => this.listOfHobbies = hobbiesList);
  }
  goToHomePage(event): void {
    this.router.navigate(['/homePage']);
  }
  goToFacilitiesPage(event): void {
    this.router.navigate(['/facilitiesPage']);
  }
}
