import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public student: Student;

  constructor(private studentService: StudentServiceService,
    private router: Router){
    this.student = new Student("","",0,"",0.0,0.0,false,false,false,"");
  }

  submit(){
    this.studentService.createStudent(this.student)
      .subscribe({
        next: (result) => this.router.navigate(['students','list']),
        error: (error) => alert(error)
      })

    this.student.ime = "";
    this.student.priimek = "";
    this.student.saldo = 0.0;
    this.student.active = false;
  }
}
