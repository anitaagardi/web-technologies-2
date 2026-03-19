import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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
      name: [''],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return false;
    } else {
      let id= this.router.url.toString();
      id=id.replace('/product-edit/','');

      this.apiService.updateProduct(id,this.createForm.value).subscribe(
        (res) => {
          console.log('Product updated successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/product-list'));
        }, (error) => {
          console.log(error);
        });


    }
  }

}
