import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";
  public message: string = "";

  constructor(private authService: AuthService,
    private router: Router){

  }

  doLogin(){
    this.authService.doLogin(this.username, this.password)
      .subscribe({
        next: (response) => {
          this.router.navigate(['students','list']);
        },
        error: (err) => {
          this.message = err.error.msg;
        }
      }
      )
  }
}
