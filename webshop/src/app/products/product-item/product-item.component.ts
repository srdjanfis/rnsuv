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

  constructor(){

  }

  ngOnInit(): void {
    this.product = {
      name: "Ferrari F40",
      price: 250000.99,
      imageUrl: "https://placehold.co/150x150?text=Our+example+product",
      onSale: true,
      quantity: 5
    }
  }

  decreaseQuantity() {
    if(this.product.quantity > 0){
      this.product.quantity--;
    }
  }

  increaseQuantity() {
    this.product.quantity++;
  }

}
