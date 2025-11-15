import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock-service';

@Component({
    selector: 'app-stock-item',
    templateUrl: './stock-item.html',
    styleUrl: './stock-item.css'
})
export class StockItem implements OnInit {
  
  @Input() public stock!: Stock;

  constructor(private stockService: StockService){
    
  }
  
  ngOnInit(): void {
    
  }
  
  onToggleFavorite(stock: Stock): void {
    this.stockService.toggleFavorite(stock).subscribe({
      next: (response) => {
        console.log(response.msg);
        stock.favorite = !stock.favorite;
      },
      error: (error) => {
        console.error("Error toggling favorite:", error);
      }
    });
  }
}
