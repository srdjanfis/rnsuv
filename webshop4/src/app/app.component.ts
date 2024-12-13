import { AfterContentChecked, AfterContentInit, AfterRenderOptions, AfterRenderPhase, AfterViewChecked, AfterViewInit, Component, DoCheck, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy,
DoCheck, AfterContentChecked,
AfterContentInit, AfterViewChecked,
AfterViewInit{
  
  title = 'webshop';
  productsAppComp!: Array<Product>;

  constructor(){
    console.log("AppComponent: constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent: ngOnChanges");
  }
  ngOnDestroy(): void {
    console.log("AppComponent: ngOnDestroy");
  }
  ngDoCheck(): void {
    console.log("AppComponent: ngDoCheck");
  }
  ngAfterContentChecked(): void {
    console.log("AppComponent: ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("AppComponent: ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("AppComponent: ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("AppComponent: ngAfterViewInit");
  }

  ngOnInit(): void {
    console.log("AppComponent: ngOnInit");
    this.productsAppComp =[
      new Product("Ferrari F40", 250000.0, "https://placehold.co/150x150?text=Ferrari+F40", false, 4),
      new Product("Porsche 911", 185000.0, "https://placehold.co/150x150?text=Porsche+911", true, 21),
      new Product("BMW Z4", 125000.0, "https://placehold.co/150x150?text=BMW+Z4", false, 16)
    ]
  }

  changeOnSale(transferObject: any){
    this.productsAppComp[transferObject.pos].onSale = !this.productsAppComp[transferObject.pos].onSale;
    if(this.productsAppComp[transferObject.pos].onSale){
      this.productsAppComp[transferObject.pos].price = this.productsAppComp[transferObject.pos].price * 0.8;
    } else{
      this.productsAppComp[transferObject.pos].price = this.productsAppComp[transferObject.pos].price / 0.8; 
    }
  }

}
