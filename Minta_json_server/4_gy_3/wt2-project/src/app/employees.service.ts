import {Injectable} from '@angular/core';
import {Employee} from "./employee";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: Employee[] = [];
  url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  listEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/employees');
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + '/employees', employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/employees/' + employee.id, employee);
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/employees/' + employee.id);
  }
}
