import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser= new User();

  constructor(private http: HttpClient) { }

  // Create P
  createUser(data): Observable<any> {
    const url = `${this.baseUri}/addUser`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all P
  getUsers() {
    return this.http.get(`${this.baseUri}/getallUser`);
  }

  // Get P by ID
  getUser(id): Observable<any> {
    const url = `${this.baseUri}/getUser/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update P
  updateUser(id, data): Observable<any> {
    const url = `${this.baseUri}/updateUser/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Delete P
  deleteUser(id): Observable<any> {
    const url = `${this.baseUri}/deleteUser/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }


// Create P
createProduct(data): Observable<any> {
  const url = `${this.baseUri}/addP`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get all P
getProducts() {
  return this.http.get(`${this.baseUri}/getallP`);
}

// Get P by ID
getProduct(id): Observable<any> {
  const url = `${this.baseUri}/getP/${id}`;
  return this.http.get(url, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}

// Update P
updateProduct(id, data): Observable<any> {
  const url = `${this.baseUri}/updateP/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

// Delete P
deleteProduct(id): Observable<any> {
  const url = `${this.baseUri}/deleteP/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}


setCurrentuser(user){
  this.currentUser=user;
}


getCurrentuser(){
  return this.currentUser;
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

