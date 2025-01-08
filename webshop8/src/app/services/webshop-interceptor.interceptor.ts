import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const webshopInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(AuthService).getToken();
  const newReq = req.clone({
    headers: req.headers.append('Authorization', authToken),
  });
  console.log("Interceptor: "+authToken)
  return next(newReq);
};
