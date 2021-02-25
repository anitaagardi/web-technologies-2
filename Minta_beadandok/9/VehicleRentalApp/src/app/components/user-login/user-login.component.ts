import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup;
  Users: any = [];
  user: any;
  loginInvalid = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
    this.getUsers();
  }

  ngOnInit() { }

  mainForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.loginForm.controls;
  }

  getUser(username) {
    for (const user of this.Users) {
      if (user.username === username) {

        return user;
      }
    }
    return null;
  }

  getUsers() {
    this.apiService.getAllUsers().subscribe((data) => {
      this.Users = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted!');
    if (!this.loginForm.valid) {
      console.log('Form data invalid');
      return false;

    } else {
      console.log('Form data valid, attempting to login user');
      const user = this.getUser(this.loginForm.get('username').value);
      if (user != null && user.password === this.loginForm.get('password').value) {
        this.ngZone.run(() => this.router.navigateByUrl('/employees-list'));
      } else { this.loginInvalid = true; }
    }
    console.log('If skipped');
  }
}
