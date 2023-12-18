import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() public product!: Product;
  @Output() public productEmitter: EventEmitter<Product>;

  constructor(private productService: ProductService){
    this.productEmitter = new EventEmitter<Product>();
  }

  toggleFavourite(){
    this.productService.toggleFavourite(this.product)
      .subscribe((product) => this.product.favorite = !this.product.favorite);
      this.productEmitter.emit(this.product);
  }

}
