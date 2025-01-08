import { Component } from '@angular/core';
import { AuthRequest } from '../../model/auth-request';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authRequest!: AuthRequest;

  constructor(private authService: AuthService){
    this.initializeAuthRequest();
  }

  register(){
    this.authService.register(this.authRequest).subscribe({
      next: (message)=> { alert(message.msg) },
      error: (err)=> { alert(err.message) }
    })
  }

  initializeAuthRequest(){
    this.authRequest = {
      username: "",
      password: ""
    }
  }

}
