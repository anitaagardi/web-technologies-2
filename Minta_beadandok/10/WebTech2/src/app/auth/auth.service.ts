import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private userIsAuth = false;

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.userIsAuth;
  }

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password};
    this.http.post('http://localhost:3000/api/users/signup', authData)
      .subscribe(response => {
        console.log(response);
      })
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password};
    this.http.post<{token:string}>('http://localhost:3000/api/users/login', authData)
      .subscribe(result => {
        this.token = result.token;
        this.userIsAuth = true;
        this.authStatusListener.next(true);
        this.router.navigate(["/manufacturer"]);
      });
  }

  logout() {
    this.token = null;
    this.userIsAuth = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/"]);
  }
}
