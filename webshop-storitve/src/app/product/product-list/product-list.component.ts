import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products: Array<Product>;

  constructor(private productService: ProductService){
    this.products = productService.getProducts();
  }

  onProductEmit(p: Product) {
    this.productService.toggleFavourite(p);
  }

}
