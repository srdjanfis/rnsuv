import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products$: Observable<Product[]>;

  constructor(private productService: ProductService,
              private authService: AuthService){
    this.products$ = productService.getProducts();
  }

  fetchProducts(){
    this.products$ = this.productService.getProducts();
  }

  setAuthToken(){
    this.authService.authToken = "THIS IS A TEST TOKEN"
  }

  resetAuthToken(){
    this.authService.authToken = ""
  }
}
