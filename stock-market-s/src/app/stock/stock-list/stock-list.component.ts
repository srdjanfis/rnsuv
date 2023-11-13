import { Component } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  public stocksObj: Array<Stock>;

  constructor(private stockService: StockService){
    this.stocksObj = stockService.getStocks();
  }

  onToggleFavorite(s: Stock){
    this.stockService.toggleFavorite(s);
  }
}
