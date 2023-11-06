import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public product: Product;
  public confirmed = false;
  @Output() productEmitter: EventEmitter<Product>;

  constructor(){
    this.product = new Product("","",0.0);
    this.productEmitter = new EventEmitter<Product>();
  }

  submit(){
    this.productEmitter.emit(this.product);
  }
}
