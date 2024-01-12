import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authToken: string = "";
  constructor(private http: HttpClient) { 
  }

  doLogin(username: string, password: string):Observable<Login>{
    return this.http.post<Login>('/login', {
                                username:username, 
                                password:password, 
                                token:''
                              })
    .pipe(map((response:any) =>{
      this.authToken = response.token;
      return response;
    }))
  }

  isLoggedIn():boolean{
    return this.authToken != "";
  }
}
