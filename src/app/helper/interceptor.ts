import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from "../service/login.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.getCurrentUser() != null) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization: `${this.loginService.getJwt()}`,
        },
      });
    }
    return next.handle(request);
  }
}

