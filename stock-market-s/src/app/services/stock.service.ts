import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public stocks: Array<Stock>;
  
  constructor(){
    this.stocks = [
      new Stock('Siemens', 'SIE', 85.43, 80.45,'TKSE'),
      new Stock('Mercedes', 'MER', 123.44, 125.45,'NYSE'),
      new Stock('Krka','KRK', 233.43, 231.46,'NASDAQ')
    ];
  }

  getStocks(): Array<Stock>{
    return this.stocks;
  }

  createStock(stock: Stock):boolean{
    let foundStock = this.stocks.find(t => t.code === stock.code);
    if(foundStock){
      return false;
    }else{
      this.stocks.push(structuredClone(stock));
      return true;
    }
  }

  toggleFavorite(s: Stock){
    let foundStock = this.stocks.find(t => t.code === s.code);
    if(foundStock){
      foundStock.favourite = !foundStock.favourite;
    }
  }
}