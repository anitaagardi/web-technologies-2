import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {WatchesService} from "../watches.service";
import {Watch} from "../watch";
@Component({
  selector: 'app-watch-form',
  templateUrl: './watch-form.component.html',
  styleUrls: ['./watch-form.component.css']
})
export class WatchFormComponent implements OnInit {
  watch: Watch;

  price = new FormControl('', [Validators.required, Validators.min(1)]);
  brand = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  model = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  gender = new FormControl('', Validators.required);
  movement = new FormControl('', Validators.required);
  caseMaterial = new FormControl('', Validators.required);


  watchForm = new FormGroup(
    {
      price: this.price,
      brand: this.brand,
      model: this.model,
      gender: this.gender,
      movement: this.movement,
      caseMaterial: this.caseMaterial
    }
  )

  constructor(private service: WatchesService) {}

  ngOnInit(){}

  getErrorMessage() {
    if (this.price.hasError('required') ||
      this.brand.hasError('required') ||
      this.model.hasError('required')
    ) {
      return ('You must enter a valid value.');
    }
  }

  getErrorMessageForOptions() {
    if (this.gender.hasError('required') ||
      this.movement.hasError('required') ||
      this.caseMaterial.hasError('required')
    ) {
      return 'You must choose a value.';
    }
  }

  onSubmit(){
    let watch = this.watchForm.value;
    this.service.addWatch(watch).subscribe(() => {
      alert("Watch submitted to database.");
      this.watchForm.controls['price'].reset();
      this.watchForm.controls['brand'].reset();
      this.watchForm.controls['model'].reset();
    }, (err) => {
      alert("An error has occured while submitting watch to database : " + err.message);
    })

  }

}
