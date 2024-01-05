import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() public product!: Product;

  constructor(private productService: ProductService,
              private messageService: MessageService){
  }

  toggleFavourite(){
    this.productService.toggleFavourite(this.product)
      .subscribe({
        next: (result) => {
          this.product.favorite = !this.product.favorite;
          this.messageService.setMessage(result.msg);
        },
        error: (error) => this.messageService.setMessage(error)
      });
  }

}
