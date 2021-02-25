import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  submitted = false;
  userForm: FormGroup;
  employees: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
    this.readEmployees();
  }

  ngOnInit() { }

  mainForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      employeeId: ['']
    });
  }

  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }

  readEmployees() {
    this.apiService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  updateSelectedEmployee(id) {
    this.userForm.value.employeeId = id;
  }

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted!');
    if (!this.userForm.valid) {
      console.log('Form data invalid');
      return false;

    } else {
      console.log('Form data valid, attempting to create user');
      this.apiService.createUser(this.userForm.value).subscribe(
        (res) => {
          console.log('User successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/user-login'));
        }, (error) => {
          console.log(error);
        });
    }
    console.log('If skipped');
  }
}
