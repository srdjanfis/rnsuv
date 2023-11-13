import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() public product!: Product;
  @Output() public productEmitter: EventEmitter<Product>;

  constructor(){
    this.productEmitter = new EventEmitter<Product>();
  }

  toggleFavourite(){
    this.productEmitter.emit(this.product);
  }

}
