import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  standalone: false,

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

  products!: Array<Product>;
  arrayOfProductClasses: Array<any> = [];

  constructor(){

  }

  ngOnInit(): void {
    this.products =[
      new Product("Ferrari F40", 250000.0, "https://placehold.co/150x150?text=Ferrari+F40", false, 4),
      new Product("Porsche 911", 185000.0, "https://placehold.co/150x150?text=Porsche+911", true, 21),
      new Product("BMW Z4", 125000.0, "https://placehold.co/150x150?text=BMW+Z4", false, 16)
    ]

    let i: number = 0;
    while(i<this.products.length){
      this.arrayOfProductClasses.push({
        "on-sale": this.products[i].onSale,
        "not-on-sale": !this.products[i].onSale,
        "many-items": this.products[i].quantity > 20,
        "few-items": this.products[i].quantity <= 20
      });
      i++;
    }

    console.log(this.arrayOfProductClasses);

  }

  updateProductClasses(i: number){
    this.arrayOfProductClasses[i] = {
      "on-sale": this.products[i].onSale,
      "not-on-sale": !this.products[i].onSale,
      "many-items": this.products[i].quantity > 20,
      "few-items": this.products[i].quantity <= 20
    }
  }

  decreaseQuantity(i: number) {
    if(this.products[i].quantity > 0){
      this.products[i].quantity--;
    }
    this.updateProductClasses(i);
  }

  increaseQuantity(i: number) {
    this.products[i].quantity++;
    this.updateProductClasses(i);
  }

  changeOnSale(i: number){
    this.products[i].onSale = !this.products[i].onSale;
    if(this.products[i].onSale){
      this.products[i].price = this.products[i].price * 0.8;
    } else{
      this.products[i].price = this.products[i].price / 0.8; 
    }
    this.updateProductClasses(i);
  }

}
