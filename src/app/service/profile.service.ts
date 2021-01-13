import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private currentUser: User;
  constructor(private http: HttpClient) { }

  public getCurrentUser(): User {
    if (this.currentUser == null) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (user != null) {
        this.currentUser = new User();
        this.currentUser.setId(user.id);
        this.currentUser.setJwt(user.jwt);
        this.currentUser.setName(user.name);
        this.currentUser.setEmail(user.email);
        this.currentUser.setPhoneNo(user.phoneNo);

      }
    }
    return this.currentUser;
  }
  public getUserEmail(): string {
    return this.getCurrentUser().getEmail();
  }
  public getUserName(): string {
    return this.getCurrentUser().getName();
  }
  public getUserPhoneNo(): string {
    return this.getCurrentUser().getPhoneNo();
  }
  public getUserInitials():string{
    return this.getCurrentUser().getInitials();
  }
}
