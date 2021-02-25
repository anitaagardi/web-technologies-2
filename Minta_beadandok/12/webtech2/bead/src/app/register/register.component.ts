import { Component,  NgZone,OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {User} from "../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  users: User[] = [];
  user = new User();
  found = false;

  userForm = new FormGroup({
   username: new FormControl(),
   password: new FormControl()
  });

  constructor(

    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService,


  ) { this.validatorForm(); }

  ngOnInit(): void {
  }
  validatorForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

  }


  onSubmit() {
    this.appService.getUsers().subscribe((res) => {
      this.users = res as User[];

      for (this.user of this.users) {
        if ( this.user.username === this.userForm.value.username) {
          this.found = true;
          alert('A felhasználónév létezik!');
          return false;
        }
      }
      if(!this.userForm.valid ){
        alert('a felhasználó vagy jelszó 3 karakternél nem lehet rövidebb!');

      }else{ this.appService.createUser(this.userForm.value).subscribe(
        (res) => {
          alert('Sikeres regisztráció.');
          this.ngZone.run(() => this.router.navigateByUrl('/login'));
        }, (error) => {
          console.log(error);
        });}

        });
  }

}
