import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input() public stock!: Stock;
  @Output() public stockEmitter: EventEmitter<Stock>;

  constructor(){
    this.stockEmitter = new EventEmitter<Stock>;
  }

  toggleFavorite(){
    this.stockEmitter.emit(this.stock);
  }

}
