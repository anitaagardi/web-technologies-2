import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  submitted = false;
  vehicleForm: FormGroup;
  VehicleStatus: any = ['AVAILABLE', 'RENTED', 'RETIRED'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  // TODO: get proper regexes for doubles
  mainForm() {
    this.vehicleForm = this.fb.group({
      type: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      vin: ['', [Validators.required]],
      acquired: ['', [Validators.required]],
      rentalFee: ['', [Validators.required, Validators.pattern('(0|^[1-9]\\d*$)')]],
      miles: ['', [Validators.required, Validators.pattern('^[^0][0-9]*$')]],
      status: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.vehicleForm.controls;
  }

  updateStatus(e) {
    this.vehicleForm.get('status').setValue(e, {
      onlySelf: true
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted!');
    if (!this.vehicleForm.valid) {
      console.log('Form data invalid');
      return false;

    } else {
      console.log('Form data valid, attempting to create vehicle');
      this.apiService.createVehicle(this.vehicleForm.value).subscribe(
        (res) => {
          console.log('Vehicle successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/vehicle-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }
}
