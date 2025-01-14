import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this.http.get("/api/student");
  }

  createStudent(s: Student){
    return this.http.post("/api/student", s);
  }

  changeFullTime(idNumber: number):Observable<any>{
    return this.http.patch('/api/student/'+idNumber, {});
  }

}
