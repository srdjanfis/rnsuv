import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Stock } from '../../model/stock';
import { NgForm, FormsModule } from '@angular/forms';
import { StockService } from '../../services/stock-service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-create-stock',
    templateUrl: './create-stock.html',
    styleUrl: './create-stock.css',
    imports: [FormsModule, JsonPipe]
})
export class CreateStock implements OnInit {
  
  public stock!: Stock;
  public confirmCreate: boolean = false;
  public exchanges: Array<string> = ['NASDAQ', 'NYSE', 'LJSE'];
  public message: string = "";
  
  constructor(private stockService: StockService,
              private router: Router
  ){
    
  }
  
  ngOnInit(): void {
    this.initializeStock();
  }
  
  initializeStock() {
    this.stock = {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };
  }
  
  createStock(stockForm: NgForm): void {
    if (stockForm.valid) {
      this.stockService.createStock(this.stock).subscribe({
        next: (response) => {
          console.log(response.msg);
          this.message = "Stock created successfully!";
          this.initializeStock();
          this.router.navigate(['/stocks/list']);
        },
        error: (error) => {
          this.message = error.msg;
        },
        complete: () => {
          this.initializeStock();
        }
      }
      );
    } else{
      this.message = "Failed to create stock!";
    }
  }
  
}
