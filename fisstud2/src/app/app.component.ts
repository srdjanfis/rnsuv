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
      new Student("Katja", "Sagadin", 221.12, false),
      new Student("Janez", "Novak", 141.34, false),
      new Student("Petar", "Kralj", -34.54, true),
      new Student("Mojca", "Vrečar", 54.33, false)
    ]
  }

  createStudent(s: Student){
    this.students.push(structuredClone(s));
  }

}
