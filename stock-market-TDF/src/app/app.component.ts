import { Component } from '@angular/core';
import { Stock } from './model/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stocksObj: Array<Stock>;
  title = 'Stock market app';
  constructor(){
    this.stocksObj = [
      new Stock('Siemens', 'SIE', 85.43, 80.45,'TKSE'),
      new Stock('Mercedes', 'MER', 123.44, 125.45,'NYSE'),
      new Stock('Krka','KRK', 233.43, 231.46,'NASDAQ')
    ];
  }
  onEmitStock(s: Stock) {
    this.stocksObj.push(structuredClone(s));
  }
  
}
