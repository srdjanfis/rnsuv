import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from './user-store.service';

@Injectable({
    providedIn: 'root'
})

export class ProductAppInterceptor implements HttpInterceptor {

    constructor(private userStore: UserStoreService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.userStore.token) {
            const authReq = req.clone({
                headers: req.headers.set(
                    'X-AUTH-HEADER',
                    this.userStore.token
                    )
                });
            req = authReq;
        }
        return next.handle(req);
    }
}