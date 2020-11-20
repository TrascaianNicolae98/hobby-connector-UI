import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Hobby} from "../model/Hobby";

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  public listOfHobbies:Array<Hobby>=new Array<Hobby>();
  constructor() { }

  public getHobbies():Array<Hobby> {

    debugger
    let hobby1:Hobby=new Hobby(1,"hobby1","mainpage.jpg","link2","descriere",7);
    let hobby2:Hobby=new Hobby(2,"hobby2","mainpage.jpg","link2","descriere",6);
    let hobby3:Hobby=new Hobby(3,"hobby3","mainpage.jpg","link2","descriere",5);
    let hobby4:Hobby=new Hobby(4,"hobby4","mainpage.jpg","link2","descriere",4);
    let hobby5:Hobby=new Hobby(5,"hobby5","mainpage.jpg","link2","descriere",3);

    this.listOfHobbies.push(hobby1,hobby2,hobby3,hobby4,hobby5);
    return this.listOfHobbies;
  }

}
