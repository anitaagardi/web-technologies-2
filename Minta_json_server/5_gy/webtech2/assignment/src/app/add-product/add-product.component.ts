import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  username: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: ProductService
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
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      price: ['', [Validators.required,Validators.min(0)]],
      shop: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      location: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      alert('Nem megfelelőek az adatok!');
      return false;
    } else {
      this.appService.createProduct(this.createForm.value).subscribe(
        (res) => {
          alert('Hozzáadva.');
          this.ngZone.run(() => this.router.navigateByUrl('/list-products'));
        }, (error) => {
          alert('Hiba' + error);
        });
    }
  }

}
