import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).isLoggedIn()){
    return true;
  }
  inject(Router).navigate(['/login']);
  return false;
};
