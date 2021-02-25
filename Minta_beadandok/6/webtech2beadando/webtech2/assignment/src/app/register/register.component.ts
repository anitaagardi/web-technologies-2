import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm = new FormGroup(
    {
      uname: new FormControl(),
      password: new FormControl(),
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService
  ) { this.mainForm(); }

  get myForm() {
    return this.createForm.controls;
  }

  submitted = false;
  createForm: FormGroup;

  ngOnInit(): void {
  }

  mainForm() {
    this.createForm = this.formBuilder.group({
      uname: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      alert('Sikertelen regisztráció: hiányzik valamilyen adat, vagy nem megfelelő hosszúságúak az adatok (felhasználónév: min. 3, jelszó min. 6 karakter hosszú).');
      return false;

    } else {
      this.appService.createUser(this.createForm.value).subscribe(
        (res) => {
          alert('Sikeres regisztráció.');
          this.ngZone.run(() => this.router.navigateByUrl('/login'));
        }, (error) => {
          console.log(error);
        });
    }
  }
}
