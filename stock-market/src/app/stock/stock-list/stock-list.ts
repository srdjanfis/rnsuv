import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock-service';
import { Observable } from 'rxjs';
import { StockItem } from '../stock-item/stock-item';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.html',
    styleUrl: './stock-list.css',
    imports: [StockItem, AsyncPipe]
})
export class StockList implements OnInit {
  
  public stocks$!: Observable<Stock[]>;

  constructor(private stockService: StockService){

  }

  ngOnInit(): void {
    this.stocks$ = this.stockService.getStocks();
  }

}
