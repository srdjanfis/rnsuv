import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit{

  public stocks: Array<Stock>;

  constructor(){
    this.stocks = [
      new Stock('Siemens', 'SIE', 85.43, 80.45),
      new Stock('Mercedes', 'MER', 123.44, 125.45),
      new Stock('Krka','KRK', 233.43, 231.46)
    ];
  }

  ngOnInit(): void {
    
  }

  toggleFavorite(i: number){
    this.stocks[i].favourite = !this.stocks[i].favourite;
  }

}
