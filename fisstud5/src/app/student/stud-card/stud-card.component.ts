import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/services/auth.service';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-stud-card',
  templateUrl: './stud-card.component.html',
  styleUrls: ['./stud-card.component.css']
})
export class StudCardComponent {

  public students!: Student[];
  
  constructor(private studentService: StudentServiceService,
              private authService: AuthService){
    authService.doLogin();
    studentService.getStudents()
      .subscribe({
        next: (studArray) => this.students = studArray
      });
  }

  toggleActive(i:number){
    this.studentService.toggleActive(this.students[i].idstev);
    this.students[i].active = !this.students[i].active;
  }

  activeGranted(i: number): string{
     if(this.students[i].active){
         return "Aktiven";
     } else{
         return "Ni aktiven";
    }
  }

}