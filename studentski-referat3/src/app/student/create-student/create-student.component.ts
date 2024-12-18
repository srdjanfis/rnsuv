import { Component } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-create-student',
  standalone: false,
  
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {

  student: Student;

  constructor(private studentService: StudentService){
    this.student = new Student("","",0,'https://placebeard.it/200x200',"",0,0,false);
  }

  createStudent() {
    this.studentService.createStudent(structuredClone(this.student));
    this.student = new Student("","",0,'https://placebeard.it/200x200',"",0,0,false);
  }
  
}
