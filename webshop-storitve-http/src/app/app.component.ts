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
    let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
    let case1 = test1.pipe( 
      filter(x => x % 2 === 0), 
      map(x=>x*x),
      reduce((acc, one) => acc + one, 0) 
    ) 
    case1.subscribe({ 
      next: (x) => console.log('got value ' + x), 
      error: (e) => console.error('something wrong occurred: ' + e), 
      complete: () => console.log('done') 
    }); 
      
    }
  }