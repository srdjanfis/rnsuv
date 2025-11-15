import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _token: string = '';
  constructor() {
    this._token = localStorage.getItem('mojeImeZaToken') || '';
  }

  set token(token: string) {
    this._token = token;
    if (token) {
      localStorage.setItem('mojeImeZaToken', token);
    } else {
      localStorage.removeItem('mojeImeZaToken');
    }
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return !!this.token;
  }
}
