import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const webshopInterceptor: HttpInterceptorFn = (req, next) => {
  var authToken = inject(AuthService).getToken();
  if(!authToken){
    authToken = "";
  }
  const newReq = req.clone({
    headers: req.headers.append('Authorization', authToken),
  });
  return next(newReq);
};
