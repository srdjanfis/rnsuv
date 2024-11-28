import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  standalone: false,

  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {

  public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;
  public favourite!: boolean;

  constructor(){

  }

  ngOnInit(): void {
    this.name = "Test Company Novo Mesto";
    this.code = "TCNM",
    this.price = 56.4,
    this.previousPrice = 55.6;
    this.positiveChange = true;
    this.favourite = false;
  }

  toggleFavourite() {
    this.favourite = !this.favourite;
  }

}
