import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  serviceURL = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  user = new User();

  constructor(private http: HttpClient) { }

  createUser(data): Observable<any> {
    const url = `${this.serviceURL}/addUser`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getUsers() {
    return this.http.get(`${this.serviceURL}/getallUser`);
  }

  getUser(id): Observable<any> {
    const url = `${this.serviceURL}/getUser/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  createLakee(data): Observable<any> {
    const url = `${this.serviceURL}/addLakee`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getLakee() {
    return this.http.get(`${this.serviceURL}/getLakee`);
  }

  setLoggedInUser(user){
    this.user = user;
  }

  getLoggedInUser(){
    return this.user;
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
