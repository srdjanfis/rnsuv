import { Component } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Študentski servis FIŠ';
  public students!: Array<Student>;
  constructor(){
    this.students = [
      new Student("Katja", "Sagadin",0,"", 221.12, 0.0, false,false,false,""),
      new Student("Janez", "Novak",0,"", 141.34, 0.0, true,false,false,""),
      new Student("Mojca", "Vrečar",0,"", -31.12, 0.0, false,false,false,"")
    ]
  }

  createStudent(s: Student){
    this.students.push(structuredClone(s));
  }

}
