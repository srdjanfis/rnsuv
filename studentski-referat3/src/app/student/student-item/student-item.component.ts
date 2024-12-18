import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-item',
  standalone: false,

  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css',
})
export class StudentItemComponent implements OnInit {
  
  students!: Array<Student>;

  constructor(private studentService: StudentService) {
  
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  increaseExams(i: number) {
    this.studentService.increaseExams(i);
  }

  decreaseExams(i: number) {
    this.studentService.decreaseExams(i);
  }

  toggleFullTime(i: number) {
    this.studentService.toggleFullTime(i);
  }
}
