import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../model/student';
import { StudentService } from '../../services/student.service';
import { Program } from '../../model/program';

@Component({
  selector: 'app-student-item',
  standalone: false,

  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css',
})
export class StudentItemComponent implements OnInit {

  selectedProgramId: string = "1";
  students!: Array<Student>;
  programs!: Program[];

  constructor(private studentService: StudentService) {
    
  }

  ngOnInit(): void {
    this.getAllPrograms();
    this.getAllStudents();
  }

  getAllPrograms(){
    this.studentService.getAllPrograms().subscribe({
      next: (res) => { this.programs = res }
    })
  }

  getAllStudents(){
    this.studentService.getAllStudents().subscribe({
      next: (res) => { this.students = res },
      error: (err) => { alert(err.message) }      
    });
  }

  getProgramName(id: number): string | undefined {
    return this.programs.find(p => p.id == id)?.name;
  }

  toggleFullTime(i: number) {
    this.studentService.changeFullTime(this.students[i].idNumber).subscribe({
      next: (res) => { this.students[i].fullTimeStudent = !this.students[i].fullTimeStudent },
      error: (err) => { alert(err.message) }
    });
  }

  onChange(){
    this.studentService.getAllStudents().subscribe({
      next: (res) => { this.students = res.filter(s => s.studyProgram == parseInt(this.selectedProgramId)); },
      error: (err) => { alert(err.message) }      
    });
    
  }
}
