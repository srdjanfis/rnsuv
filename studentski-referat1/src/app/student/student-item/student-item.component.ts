import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student-item',
  standalone: false,

  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})
export class StudentItemComponent implements OnInit{

  student!: Student;

  constructor(){

  }

  ngOnInit(): void {
      this.student = {
        name: "Janez",
        lastName: "Novak",
        idNumber: 533,
        imageUrl: "https://placebeard.it/200x200",
        studyProgram: "Kibernetska varnost",
        noOfExams: 14,
        noOfExamsLeft: 7,
        fullTimeStudent: true
      }
  }

  increaseExams(){
    if(this.student.noOfExamsLeft < this.student.noOfExams){
      this.student.noOfExamsLeft++;
    }
  }

  decreaseExams(){
    this.student.noOfExamsLeft--;
  }

  toggleFullTime() {
    this.student.fullTimeStudent = !this.student.fullTimeStudent;
  }

}
