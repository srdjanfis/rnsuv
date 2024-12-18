import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  products!: Array<Product>;

  constructor() {
    this.products =[
      new Product("Ferrari F40", 250000.0, "https://placehold.co/150x150?text=Ferrari+F40", false, 4),
      new Product("Porsche 911", 185000.0, "https://placehold.co/150x150?text=Porsche+911", true, 21),
      new Product("BMW Z4", 125000.0, "https://placehold.co/150x150?text=BMW+Z4", false, 16)
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

  decreaseQuantity(i: number) {
    if(this.products[i].quantity > 0){
      this.products[i].quantity--;
    }
  }

  increaseQuantity(i: number) {
    this.products[i].quantity++;
  }

  changeOnSale(i: number){
    this.products[i].onSale = !this.products[i].onSale;
  }

}
