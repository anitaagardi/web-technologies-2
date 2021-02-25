import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm :FormGroup;
  name : string;
  quantity : number;
  producttype : string;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService

  ) { this.validatorForm(); }

  ngOnInit(): void {
  }

  validatorForm() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      producttype: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      alert('nem sikerült az új termék felvétele');
      return false;

    } else {
      this.appService.addProduct(this.productForm.value).subscribe(
        (res) => {
          alert('új termék felvéve.');
          this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
        }, (error) => {
          console.log(error);
        });
    }
  }
}
