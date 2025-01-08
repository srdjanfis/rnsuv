import { AfterContentChecked, AfterContentInit, AfterRenderOptions, AfterRenderPhase, AfterViewChecked, AfterViewInit, Component, DoCheck, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'webshop';


  constructor(){
    
  }

  ngOnInit(): void {
    
  }

}
