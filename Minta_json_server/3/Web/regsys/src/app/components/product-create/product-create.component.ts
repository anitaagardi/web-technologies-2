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
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

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

  ngOnInit() {
  }

  mainForm() {
    this.createForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.createForm.value).subscribe(
        (res) => {
          console.log('Product successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/product-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
