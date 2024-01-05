import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public message: string = '';

  constructor(private userService: UserService,
    private router: Router){

  }

  login(){
    this.userService.login(this.username, this.password)
        .subscribe({
          next: (resp) => {
            this.message = resp.msg;
            this.router.navigate(['products','list'])
          },
          error: (err) => this.message = err.error.msg
        });
      }
  
}
