import { Component, EventEmitter, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public stock!: Stock;
  public confirmed = false;
  public exchanges = ['TKSE', 'NYSE', 'NASDAQ'];
  @Output() private emitStock: EventEmitter<Stock>;
  constructor() {
    this.stock = new Stock('', '', 0, 0, '');
    this.emitStock = new EventEmitter<Stock>();
  }
  submit(){
    this.emitStock.emit(this.stock)
  }
}
