import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm= new FormGroup({

    name: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    bDate: new FormControl

  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }


  get myForm() {
    return this.createForm.controls;
  }

  submitted = false;

  createForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }


  mainForm() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Z][a-z].+([a-z])+$')]],
      userName: [''],
      password: [''],
      email: ['',[Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      bDate: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return false;
    } else {
      this.apiService.createUser(this.createForm.value).subscribe(
        (res) => {
          console.log('Successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/login'));
        }, (error) => {
          console.log(error);
        });
    }
  }


}
