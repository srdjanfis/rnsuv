import { Component, Input } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-stud-card',
  templateUrl: './stud-card.component.html',
  styleUrls: ['./stud-card.component.css']
})
export class StudCardComponent {

  @Input() public students!: Array<Student>;
  
  constructor(){
    
  }

  toggleActive(i:number){
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