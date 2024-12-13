import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  standalone: false,

  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit, OnChanges, OnDestroy,
DoCheck, AfterContentChecked,
AfterContentInit, AfterViewChecked,
AfterViewInit {

  @Input() products!: Array<Product>;
  @Output() randomEvent: EventEmitter<any>;
  arrayOfProductClasses: Array<any> = [];

  constructor(){
    this.randomEvent = new EventEmitter<any>();
    console.log("ProductItemComponent: constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ProductItemComponent: ngOnChanges");
  }
  ngOnDestroy(): void {
    console.log("ProductItemComponent: ngOnDestroy");
  }
  ngDoCheck(): void {
    console.log("ProductItemComponent: ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("ProductItemComponent: ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ProductItemComponent: ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ProductItemComponent: ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ProductItemComponent: ngAfterViewInit");
  }

  ngOnInit(): void {
    console.log("ProductItemComponent: ngOnInit");
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
    this.randomEvent.emit({pos: i});
    this.updateProductClasses(i);
  }

}
