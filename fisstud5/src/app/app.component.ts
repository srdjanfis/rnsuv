import { Component } from '@angular/core';
import { Student } from './model/student';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Študentski servis FIŠ';
  
  constructor(){

  }

}
