import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth_token =  'Bearer ' + this.auth.getToken();
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json',
        'Authorization': auth_token
      },
    });

    return next.handle(req);
  }
}
