import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-stud-card',
  templateUrl: './stud-card.component.html',
  styleUrls: ['./stud-card.component.css']
})
export class StudCardComponent {

  public students$: Observable<Student[]>;
  
  constructor(private studentService: StudentServiceService){
    this.students$ = studentService.getStudents();
  }

  toggleActive(i:number){
 //   this.students[i].active = !this.students[i].active;
  }

  activeGranted(i: number): string{
    // if(this.students[i].active){
    //     return "Aktiven";
    // } else{
    //     return "Ni aktiven";
    // }
    return "Aktiven";
  }

}