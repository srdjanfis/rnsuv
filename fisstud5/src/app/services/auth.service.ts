import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authToken: string = "";
  public login: Login;
  constructor(private http: HttpClient) { 
    this.login = new Login("myusername","mypassword","");
  }

  doLogin(){
    this.http.post<Login>('/login', this.login)
      .subscribe({
        next: (serverLogin) => {
          this.authToken = serverLogin.token;
        },
        error: (error) => console.log(error)
      });
  }
}
