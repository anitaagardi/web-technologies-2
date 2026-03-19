import {Injectable} from '@angular/core';
import {Student} from "./student";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] = [];
  url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  listStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/students');
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url + '/students', student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.url + '/students/'+ student.id, student);
  }

  deleteStudent(student: Student): Observable<Student> {
    return this.http.delete<Student>(this.url + '/students/' + student.id);
  }
}
