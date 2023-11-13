import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Array<Product>;

  constructor(){
    this.products = [
      new Product("NZOG", "Nogometna žoga", 66.45),
      new Product("LNT", "lopar za namizni tenis", 124.33),
      new Product("BRUK","Boksarske rukavice",46.54)
    ]
  }

  createProduct(p: Product): boolean{
    let foundProduct = this.products.find(t => t.code === p.code);
    if(foundProduct){
      return false;
    }else{
      this.products.push(structuredClone(p));
      return true;
    }
  }

  getProducts(): Array<Product>{
    return this.products;
  }

  toggleFavourite(p: Product){
    let foundProduct = this.products.find(t => t.code === p.code);
    if(foundProduct){
      foundProduct.favorite = !foundProduct.favorite;
    }
  }
}
