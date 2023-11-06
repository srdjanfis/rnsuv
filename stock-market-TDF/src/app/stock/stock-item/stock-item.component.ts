import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/model/stock';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit{

  @Input() public stocks!: Array<Stock>;

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  toggleFavorite(i: number){
    this.stocks[i].favourite = !this.stocks[i].favourite;
  }

}
