import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./models/user";
import { Observable, throwError } from 'rxjs';
import {Product} from "./models/product";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  user = new User();
  product : Product;

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:8080";

  createUser(data): Observable<any> {

    return this.http.post(this.baseurl +'/addUser', data);

  }

  addProduct(data): Observable<any> {

    return this.http.post(this.baseurl +'/addProduct', data);

  }

  getProducts() {
    return this.http.get(this.baseurl +'/getAllproducts');
  }

  getUsers() {
    return this.http.get(this.baseurl +'/getAllusers');
  }
  setLoggedInUser(user){
    this.user = user;
  }

  getLoggedInUser(){
   return this.user;
  }

  deleteProduct(id: string){
    return this.http.delete(this.baseurl + '/delete/'+ id , {headers : this.headers});
  }

}
