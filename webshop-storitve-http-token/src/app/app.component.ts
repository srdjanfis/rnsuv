import { Component } from '@angular/core';
import { Product } from './model/product';
import { MessageService } from './services/message.service';
import { of, map,filter, reduce, from, Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webshop';
  
  constructor(public messageService: MessageService){
      
    }
  }