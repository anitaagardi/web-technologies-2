import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import {Product} from "../models/product";
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );

  users: User[] = [];
  user = new User();
  username : string;
  found = false;

  constructor(
    private router: Router,
    private appService: AppService
  )
  {}

  ngOnInit(): void {

  }

  get form() { return this.loginForm.value; }

  onSubmit() {


    this.appService.getUsers().subscribe((res) => {
      this.users = res as User[];

      for (this.user of this.users) {
        if (this.user.username ===  this.loginForm.value.username && this.loginForm.value.password === this.user.password) {
          this.found = true;

        }
      }

      if (this.found) {
        this.appService.setLoggedInUser(this.user);
        this.router.navigate(['/dashboard']);

      }
      else {
        alert('Sikertelen bejelentkezés! Hibás  felhasználónév vagy  jelszó.');
      }
    });
  }

}
