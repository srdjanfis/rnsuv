import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  standalone: false,

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

  product!: Product;
  productClasses: any;

  constructor(){

  }

  ngOnInit(): void {
    this.product = {
      name: "Ferrari F40",
      price: 250000.0,
      imageUrl: "https://placehold.co/150x150?text=Our+example+product",
      onSale: false,
      quantity: 25
    }

    this.setupProductClasses();

  }

  setupProductClasses(){
    this.productClasses = {
      "on-sale": this.product.onSale,
      "not-on-sale": !this.product.onSale,
      "many-items": this.product.quantity > 20,
      "few-items": this.product.quantity <= 20
    }
  }

  decreaseQuantity() {
    if(this.product.quantity > 0){
      this.product.quantity--;
    }
    this.setupProductClasses();
  }

  increaseQuantity() {
    this.product.quantity++;
    this.setupProductClasses();
  }

  changeOnSale(){
    this.product.onSale = !this.product.onSale;
    if(this.product.onSale){
      this.product.price = 150000.0;
    } else{
      this.product.price = 250000.0  
    }
    this.setupProductClasses();
  }

}
