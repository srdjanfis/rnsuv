import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() public products!: Array<Product>;

  toggleFavourite(i: number){
    this.products[i].favorite = !this.products[i].favorite;
  }

}
