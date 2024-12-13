import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { Transfer } from './model/transfer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  studentsAC: Array<Student> = new Array<Student>;
  title = 'studentski-referat';

  constructor(){

  }

  ngOnInit(): void {
    this.studentsAC.push(
      new Student('Janez', 'Novak', 533, 'https://placebeard.it/200x200', 'Kibernetska varnost', 14, 7, true));
    this.studentsAC.push(
      new Student('Peter', 'Vrečar', 321, 'https://placebeard.it/200x200', 'Podakovne znanosti', 7, 5, false));
    this.studentsAC.push(
      new Student('Aleš', 'Kavčič', 412, 'https://placebeard.it/200x200', 'Računalništvo in spletne tehnologije', 27, 12, true));
  }

  toggleFullTime(i: number){
    this.studentsAC[i].fullTimeStudent = !this.studentsAC[i].fullTimeStudent;
  }

  updateNoOfExams(transferObject: Transfer) {
    let i: number = transferObject.pos;
    if(transferObject.increase){
      if (this.studentsAC[i].noOfExamsLeft < this.studentsAC[i].noOfExams) {
        this.studentsAC[i].noOfExamsLeft++
      }
    } else{
      if(this.studentsAC[i].noOfExamsLeft > 0){
        this.studentsAC[i].noOfExamsLeft--
      }
    }







  }

}
