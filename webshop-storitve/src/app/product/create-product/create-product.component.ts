import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public product: Product;
  public confirmed = false;

  constructor(private productService: ProductService,
              private messageService: MessageService){
    this.product = new Product("","",0.0);
  }

  submit(productForm: NgForm){
    if(productForm.valid){
      let success = this.productService.createProduct(this.product);
      if(success){
        this.messageService.setMessage("Product successfully created!");
        this.product.aNullProduct();
      }else{
        this.messageService.setMessage("Product already exists!");
      }
    }else{
      this.messageService.setMessage("The form is in invalid state!");
    }
  }
}
