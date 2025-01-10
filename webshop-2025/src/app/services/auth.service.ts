import { Injectable } from '@angular/core';
import { AuthRequest } from '../model/auth-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  
  getToken(): string | null {
    return localStorage.getItem("authToken");
  }

  setToken(token: string) {
    localStorage.setItem("authToken", token);
  }

  isLoggedIn(): boolean{
    if(localStorage.getItem("authToken")){
      return true;
    }
    return false;
  }

  login(authRequest: AuthRequest):Observable<any>{
    return this.http.post('/api/user/login', authRequest);
  }

  register(authRequest: AuthRequest):Observable<any>{
    return this.http.post('/api/user/register', authRequest);
  }

  logout(){
    localStorage.removeItem("authToken");
  }

}
