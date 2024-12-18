import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: false,
  
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  
  product!: Product;

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
      this.product = new Product("",0.0,"",false,0);
  }

  createProduct(){
    this.productService.createProduct(structuredClone(this.product));
    this.product.name = "";
    this.product.price = 0.0;
    this.product.imageUrl = "";
    this.product.onSale = false;
    this.product.quantity = 0;
  }
}
