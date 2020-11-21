import { Component, OnInit } from '@angular/core';
import { Hobby } from 'src/app/model/Hobby';
import {FacilitiesService} from "../../service/facilities.service";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  public listOfHobbies: Hobby[];
  private facilitiesService:FacilitiesService;

  constructor(fs: FacilitiesService) {
    this.facilitiesService = fs;
    this.addHobby();

  }

  ngOnInit(): void {

  }
  addHobby(): void{
      this.facilitiesService.getHobbies().subscribe(hobbiesList => this.listOfHobbies = hobbiesList);
  }
}
