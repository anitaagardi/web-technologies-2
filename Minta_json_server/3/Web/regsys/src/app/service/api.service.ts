import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }

 


// Create P
createProduct(data): Observable<any> {
  const url = `${this.baseUri}/products`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get all P
getProducts() {
  return this.http.get(`${this.baseUri}/products`);
}

// Get P by ID
getProduct(id): Observable<any> {
  const url = `${this.baseUri}/products/${id}`;
  return this.http.get(url, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
}

// Update P
updateProduct(id, data): Observable<any> {
  const url = `${this.baseUri}/products/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

// Delete P
deleteProduct(id): Observable<any> {
  const url = `${this.baseUri}/products/${id}`;
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

