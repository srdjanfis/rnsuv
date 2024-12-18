import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'studentski-referat';

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
