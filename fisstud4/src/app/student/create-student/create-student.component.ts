import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public student: Student;
  @Output() studentEmitter: EventEmitter<Student>;

  constructor(){
    this.student = new Student("","",0,"",0.0,0.0,false,false,false,"");
    this.studentEmitter = new EventEmitter<Student>();
  }

  submit(){
    this.studentEmitter.emit(this.student);
    this.student.ime = "";
    this.student.priimek = "";
    this.student.saldo = 0.0;
    this.student.active = false;
  }
}
