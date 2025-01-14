import { Component } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: false,
  
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {

  student: Student;

  constructor(private studentService: StudentService,
              private router: Router
  ){
    this.student = new Student("","",0,'https://placebeard.it/200x200',"",0,0,false);
  }

  createStudent() {
    this.studentService.createStudent(structuredClone(this.student)).subscribe({
      next: (res) => { },
      error: (err) => { alert(err.message) }
    });
    this.student = new Student("","",0,'https://placebeard.it/200x200',"",0,0,false);
    this.router.navigate(['/students/list']);
  }
  
}
