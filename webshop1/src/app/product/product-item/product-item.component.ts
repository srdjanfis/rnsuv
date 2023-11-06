import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  public products: Array<Product>;

  constructor(){
    this.products = [
      new Product("NZOG", "Nogometna žoga", 66.45),
      new Product("LNT", "lopar za namizni tenis", 124.33),
      new Product("BRUK","Boksarske rukavice",46.54)
    ]
  }

  // toggleFavorite(){
  //   this.product.favorite = !this.product.favorite;
  // }

  tosSigned = false;
  sendUsage = false;

  classStyler = {
    warning: this.tosSigned || this.sendUsage,
    error: !this.tosSigned && !this.sendUsage,
    success: this.tosSigned
  }

  updateUsage(checked: boolean) {
        this.sendUsage = checked;
        this.updateStyle();
  }
  updateTos(checked: boolean) {
      this.tosSigned = checked;
      this.updateStyle()
  }

  updateStyle() {
    this.classStyler.error = !this.tosSigned && !this.sendUsage;
    this.classStyler.success = this.tosSigned && this.sendUsage;
    this.classStyler.warning = this.sendUsage || this.tosSigned;
    
  }

  onSubmit(){
    alert("Hvala za nakup!");
  }
}
