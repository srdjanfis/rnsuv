import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/user-store.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userStore: UserStoreService,
    private router: Router){

  }

  canActivate(): boolean{
    if(this.userStore.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
