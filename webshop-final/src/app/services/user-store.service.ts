import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _token: string = "";
  
  constructor() { }

  set token(token: string) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token != "";
  }
}
