import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserStoreService } from './user-store-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userStore = inject(UserStoreService);
  if (userStore.token) {
      const authReq = req.clone({
        headers: req.headers.set(
          'X-AUTH-HEADER',
          userStore.token
        )
      });
      req = authReq;
    }
    return next(req);
};
