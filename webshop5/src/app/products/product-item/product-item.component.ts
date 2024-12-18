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
  arrayOfProductClasses: Array<any> = [];

  constructor(private productService: ProductService){
    
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
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
    this.productService.decreaseQuantity(i);
    this.updateProductClasses(i);
  }

  increaseQuantity(i: number) {
    this.productService.increaseQuantity(i);
    this.updateProductClasses(i);
  }

  changeOnSale(i: number){
    this.productService.changeOnSale(i);
    this.updateProductClasses(i);
  }

}
