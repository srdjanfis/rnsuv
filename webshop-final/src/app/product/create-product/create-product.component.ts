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
  public product!: Product;
  public confirmed = false;

  constructor(private productService: ProductService,
              private messageService: MessageService){
              this.initializeProduct();
  }

  submit(productForm: NgForm){
    if(productForm.valid){
      this.productService.createProduct(this.product)
        .subscribe({
          next: (result) => {
            this.messageService.setMessage(result.msg);
            this.initializeProduct();
          },
          error: (error) => this.messageService.setMessage(error)
        })
    }else{
      this.messageService.setMessage("The form is in invalid state!");
    }
  }
  initializeProduct(){
    this.product = {
      code: "",
      name : "",
      price : 0.0,
      favorite : false
    }
}
}
