import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  username: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService
  )
  {
    this.mainForm();
  }

  get myForm() {
    return this.createForm.controls;
  }

  submitted = false;
  createForm: FormGroup;

  ngOnInit(): void {
  }

  mainForm() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      office: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^-?(0|[1-9]\\d*)?$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      alert('Nem megfelelőek az adatok! Minden mezőt ki kell tölteni, a fizetés értéke pedig csak szám lehet.');
      return false;
    } else {
      this.appService.createEmployee(this.createForm.value).subscribe(
        (res) => {
          alert('Hozzáadva.');
          this.ngZone.run(() => this.router.navigateByUrl('/list'));
        }, (error) => {
          alert('Hiba' + error);
        });
    }
  }

}
