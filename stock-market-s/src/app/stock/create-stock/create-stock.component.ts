import { Component, EventEmitter, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public stock!: Stock;
  public confirmed = false;
  public message: string = "";
  public exchanges = ['TKSE', 'NYSE', 'NASDAQ'];

  constructor(private stockService: StockService) {
    this.stock = new Stock('', '', 0, 0, '');
  }
  submit(stockForm: any){
    if(stockForm.valid){
      let success = this.stockService.createStock(this.stock);
      if(success){
        this.message = "Successfully created new stock.";
        this.stock = new Stock('', '', 0, 0, '');
      }else{
        this.message = "Stock already exists!";
      }
    }else{
      this.message = "Form is in invalid state!";
    }    
  }
}
