import { Component, OnInit } from '@angular/core'
import { Product } from '../model/product'
import { ProductService } from '../services/product.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-product',
  standalone: false,

  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent implements OnInit {
  product!: Product

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.product = new Product('', '', 0.0, false)
  }

  createProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (message) => {
        this.product.name = ''
        this.product.price = 0.0
        this.product.code = ''
        this.product.favorite = false
        this.router.navigate(['/products/list'])
      },
      error: (error) => {
        alert(error.message)
      },
    })
  }
}
