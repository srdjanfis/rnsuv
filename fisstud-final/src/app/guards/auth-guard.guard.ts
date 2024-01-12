import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class authGuardGuard implements CanActivate {

  constructor(private authService: AuthService){

  }

  canActivate(): boolean {
      if(this.authService.isLoggedIn()){
        return true;
      }else{
        return false;
      }
  }
};
