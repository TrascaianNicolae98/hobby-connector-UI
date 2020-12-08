import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem('currentUser') != null) {
      return true;
    }

    this.router.navigate([''] );
    return false;
  }
}
