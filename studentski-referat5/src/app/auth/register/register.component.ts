import { Component } from '@angular/core';
import { AuthRequest } from '../../model/auth-request';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authRequest!: AuthRequest;

  constructor(private authService: AuthService,
              private router: Router
  ){
    this.initializeAuthRequest();
  }

  register(){
    this.authService.register(this.authRequest).subscribe({
      next: (message)=> { this.router.navigate(['/login']) },
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
