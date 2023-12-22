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
    return this.http.get<Student[]>("/students")
  }

  createStudent(student: Student):Observable<any>{
    return this.http.post('/addStudent', student);
  }

  toggleActive(idstev: number){
    let url = "/toggleActive/"+idstev;
    this.http.get(url)
  }

}
