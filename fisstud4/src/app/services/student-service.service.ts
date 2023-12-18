import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { 

  }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:8080/students")
  }
}
