import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class StudAppInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authService.authToken){
            const authReq = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    this.authService.authToken
                )
            });
            
            req = authReq;
            console.log("Request:"+req);
        }
        return next.handle(req);
    }
}