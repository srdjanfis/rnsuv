import { Component } from '@angular/core';
import { AuthRequest } from '../../model/auth-request';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  authRequest!: AuthRequest;

  constructor(private authService: AuthService,
              private productService: ProductService
  ){
    this.initializeAuthRequest();
  }

  login() {
    this.authService.login(this.authRequest).subscribe({
      next: (authResponse)=>{ this.authService.setToken("Bearer " + authResponse.token);
                              alert("Login was successful! ");
                              this.productService.getProducts().subscribe({
                                next: (products)=>{ console.log("Products: "+products) }
                              })
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
