import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../model/student';
import { Transfer } from '../../model/transfer';

@Component({
  selector: 'app-student-item',
  standalone: false,

  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css',
})
export class StudentItemComponent implements OnInit {
  @Input() students!: Array<Student>;
  @Output() toggleFullTimeEventEmitter: EventEmitter<any>;
  @Output() updateNoOfExams: EventEmitter<Transfer>;

  constructor() {
    this.toggleFullTimeEventEmitter = new EventEmitter<any>();
    this.updateNoOfExams = new EventEmitter<Transfer>();
  }

  ngOnInit(): void {

  }

  increaseExams(i: number) {
    this.updateNoOfExams.emit(new Transfer(true, i));

  }

  decreaseExams(i: number) {
    this.updateNoOfExams.emit(new Transfer(false, i));

  }

  toggleFullTime(i: number) {
    this.toggleFullTimeEventEmitter.emit(i);
  }
}
