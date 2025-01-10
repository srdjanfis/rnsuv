import { Component } from '@angular/core';
import { AuthRequest } from '../../model/auth-request';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authRequest!: AuthRequest;

  constructor(private authService: AuthService,
              private router: Router
  ){
    this.initializeAuthRequest();
  }

  login() {
    this.authService.login(this.authRequest).subscribe({
      next: (authResponse)=>{ this.authService.setToken("Bearer " + authResponse.token); 
                              this.router.navigate(['/products/list']);
      },
      error: (err)=>{ alert("Login was unsuccessful: " + err.message) }
    })
    
    
  }

  initializeAuthRequest(){
    this.authRequest = {
      username: "",
      password: ""
    }
  }

}
