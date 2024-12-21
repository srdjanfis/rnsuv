import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  products!: Array<Product>;

  constructor() {
    this.products =[
      new Product("F40", "Ferrari F40", 250000.0, false),
      new Product("911", "Porsche 911", 185000.0, true),
      new Product("BZ4", "BMW Z4", 125000.0, false)
    ]
  }

  ngOnInit(): void {
    
  }

  getProducts(){
    return this.products;
  }

  createProduct(p: Product){
    this.products.push(p);
  }

  changeFavorite(i: number){
    this.products[i].favorite = !this.products[i].favorite;
  }

}
