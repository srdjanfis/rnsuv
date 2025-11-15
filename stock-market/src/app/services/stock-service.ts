import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocks!: Array<Stock>;

  constructor(private http: HttpClient) {

  }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock');
  }

  createStock(stock: Stock): Observable<Message> {
    return this.http.post<any>('/api/stock', stock);
  }

  toggleFavorite(stock: Stock): Observable<Message>{
    return this.http.put<Message>('/api/stock' + '/' + stock.code, 
      {
        favorite: !stock.favorite
      }
    );
  }

}
