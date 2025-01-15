import { Component } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Program } from '../../model/program';

@Component({
  selector: 'app-create-student',
  standalone: false,
  
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
  selectedProgramId: string = "1";
  student!: Student;
  programs!: Program[];

  constructor(private studentService: StudentService,
              private router: Router
  ){
    this.initializeStudent();
    this.studentService.getAllPrograms().subscribe({
      next: (res) => { this.programs = res },
      error: (err) => { alert(err.message.msg) }
    })
  }

  createStudent() {
    this.student.studyProgram = parseInt(this.selectedProgramId);
    this.studentService.createStudent(structuredClone(this.student)).subscribe({
      next: (res) => { },
      error: (err) => { alert(err.message) }
    });
    this.initializeStudent();
    this.router.navigate(['/students/list']);
  }

  initializeStudent(){
    this.student = {
      name: "",
      lastName: "",
      idNumber: 0,
      imageUrl: "",
      studyProgram: 1,
      noOfExams: 0,
      noOfExamsLeft: 0,
      fullTimeStudent: true
    }
  }
  
}
