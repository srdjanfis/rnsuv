import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop';
  public products: Array<Product>;

  constructor(){
    this.products = [
      new Product("NZOG", "Nogometna žoga", 66.45),
      new Product("LNT", "lopar za namizni tenis", 124.33),
      new Product("BRUK","Boksarske rukavice",46.54)
    ]
  }

  createProduct(p: Product){
    this.products.push(structuredClone(p));
  }
}
