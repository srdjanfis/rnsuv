import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Array<Student> = [];
  constructor() {
    this.students.push(
          new Student('Janez', 'Novak', 533, 'https://placebeard.it/200x200', 'Kibernetska varnost', 14, 7, true));
    this.students.push(
          new Student('Peter', 'Vrečar', 321, 'https://placebeard.it/200x200', 'Podakovne znanosti', 7, 5, false));
    this.students.push(
          new Student('Aleš', 'Kavčič', 412, 'https://placebeard.it/200x200', 'Računalništvo in spletne tehnologije', 27, 12, true));
   }
   getStudents(): Array<Student>{
     return this.students;
   }
   createStudent(s: Student){
     this.students.push(s);
   }
   increaseExams(i: number){
    if(this.students[i].noOfExamsLeft < this.students[i].noOfExams){
      this.students[i].noOfExamsLeft++;
    }
   }
   decreaseExams(i: number){
    if(this.students[i].noOfExamsLeft > 0){
      this.students[i].noOfExamsLeft--;
    }
   }
   toggleFullTime(i: number){
     this.students[i].fullTimeStudent = !this.students[i].fullTimeStudent;
   }

}
