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

  toggleShared(i:number){
    this.students[i].shared = !this.students[i].shared;
  }

  permissionToShareGranted(i: number): string{
    if(this.students[i].shared){
        return "Deljenje je dovoljeno";
    } else{
        return "Deljenje ni dovoljeno";
    }
  }

}