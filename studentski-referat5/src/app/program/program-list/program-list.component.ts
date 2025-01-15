import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Program } from '../../model/program';

@Component({
  selector: 'app-program-list',
  standalone: false,
  
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css'
})
export class ProgramListComponent {
  programs!: Array<Program>;
  constructor(private studentService: StudentService){
    this.studentService.getAllPrograms().subscribe({
      next: (res) => { this.programs = res }
    })
  }
}
