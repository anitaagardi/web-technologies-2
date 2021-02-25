import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUri = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createEmployee(data): Observable<any> {
    const url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  createClientele(data): Observable<any> {
    const url = `${this.baseUri}/createClientele`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  createVehicle(data): Observable<any> {
    const url = `${this.baseUri}/createVehicle`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  createRental(data): Observable<any> {
    const url = `${this.baseUri}/createRental`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  createUser(data): Observable<any> {
    const url = `${this.baseUri}/createUser`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all employees
  getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }
  getAllClientele() {
    return this.http.get(`${this.baseUri}/allClientele`);
  }
  getAllVehicles() {
    return this.http.get(`${this.baseUri}/allVehicle`);
  }
  getAllRentals() {
    return this.http.get(`${this.baseUri}/allRental`);
  }
  getAllUsers() {
    return this.http.get(`${this.baseUri}/allUsers`);
  }

  // Get vehicle
  getEmployee(id): Observable<any> {
    const url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getClientele(id): Observable<any> {
    const url = `${this.baseUri}/readClientele/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getVehicle(id): Observable<any> {
    const url = `${this.baseUri}/readVehicle/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getRental(id): Observable<any> {
    const url = `${this.baseUri}/readRental/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  getUser(id): Observable<any> {
    const url = `${this.baseUri}/readUser/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update vehicle
  updateEmployee(id, data): Observable<any> {
    const url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  updateClientele(id, data): Observable<any> {
    const url = `${this.baseUri}/updateClientele/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  updateVehicle(id, data): Observable<any> {
    const url = `${this.baseUri}/updateVehicle/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  updateRental(id, data): Observable<any> {
    const url = `${this.baseUri}/updateRental/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  updateUser(id, data): Observable<any> {
    const url = `${this.baseUri}/updateUser/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Delete vehicle
  deleteEmployee(id): Observable<any> {
    const url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteClientele(id): Observable<any> {
    const url = `${this.baseUri}/deleteClientele/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteVehicle(id): Observable<any> {
    const url = `${this.baseUri}/deleteVehicle/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteRental(id): Observable<any> {
    const url = `${this.baseUri}/deleteRental/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteUser(id): Observable<any> {
    const url = `${this.baseUri}/deleteUser/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
