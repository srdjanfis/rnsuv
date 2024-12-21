import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: false,

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

  products!: Array<Product>;

  constructor(private productService: ProductService){
    
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  changeFavorite(i: number){
    // this.productService.changeOnSale(i);
  }

}
